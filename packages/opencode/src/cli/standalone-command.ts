import { parseArgs } from "node:util"
import { launchNodeHost, NodeHostStartupError } from "@megaladata-ai-agent/megaladata-host/node-client"
import type { cliProfile } from "@megaladata-ai-agent/product/cli-profile"
import { hostError } from "@megaladata-ai-agent/megaladata-host/errors"
import { megaladataManagement } from "./megaladata-management"
import { standaloneBundle } from "./standalone-bundle"

export async function standaloneCommand(args: string[], paths: ReturnType<typeof cliProfile>) {
  const parsed = parseManagementArgs(args)
  if (!parsed) {
    process.exitCode = 2
    process.stderr.write("CLI_ARGUMENT_INVALID\n")
    return
  }
  const format = parsed.values.format
  function failure(value: unknown) {
    const message = value instanceof Error ? value.message : value
    const local = [
      "CLI_ARGUMENT_INVALID",
      "CLI_SETUP_INVALID",
      "CLI_SETUP_TOO_LARGE",
      "CLI_STDIN_REQUIRED",
      "CLI_CANCELLED",
      "MEGALADATA_CONFIG_REQUIRED",
      "MEGALADATA_RECOVERY_CONFIRMATION_REQUIRED",
      "MEGALADATA_BUNDLE_REQUIRED",
      "MEGALADATA_BUNDLE_INCOMPLETE",
    ]
    const code = typeof message === "string" && local.includes(message) ? message : hostError(value)
    process.exitCode =
      code === "CLI_CANCELLED"
        ? 130
        : ["MEGALADATA_RECOVERY_REQUIRED", "MEGALADATA_CALL_UNCERTAIN", "MEGALADATA_RECOVERY_CONFIRMATION_REQUIRED"].includes(
              code,
            )
          ? 4
          : [
                "MEGALADATA_REVISION_CONFLICT",
                "MEGALADATA_APPLICATION_PENDING",
                "MEGALADATA_APPLICATION_COMMITTING",
                "MEGALADATA_RECOVERY_BUSY",
                "MEGALADATA_RECOVERY_CONFLICT",
              ].includes(code)
            ? 3
            : [
                  "CLI_ARGUMENT_INVALID",
                  "CLI_SETUP_INVALID",
                  "CLI_SETUP_TOO_LARGE",
                  "CLI_STDIN_REQUIRED",
                  "MEGALADATA_CONFIG_REQUIRED",
                  "MEGALADATA_CANDIDATE_INVALID",
                  "MEGALADATA_URL_INVALID",
                  "MEGALADATA_USERNAME_INVALID",
                  "MEGALADATA_BUNDLE_REQUIRED",
                ].includes(code)
              ? 2
              : 1
    if (format === "json") process.stdout.write(JSON.stringify({ ok: false, code }) + "\n")
    process.stderr.write(code + "\n")
  }
  if (
    !["default", "json"].includes(parsed.values.format) ||
    parsed.positionals[0] !== "megaladata" ||
    !["status", "setup", "check", "cancel-pending", "recover"].includes(parsed.positionals[1] ?? "") ||
    (parsed.positionals.length > 2 && (parsed.positionals[1] !== "recover" || !parsed.values.acknowledge)) ||
    (parsed.values["stdin-json"] && parsed.positionals[1] !== "setup") ||
    (parsed.values.acknowledge && parsed.positionals[1] !== "recover") ||
    (parsed.values.headless && parsed.values["no-headless"])
  ) {
    failure("CLI_ARGUMENT_INVALID")
    return
  }
  const bundle = await standaloneBundle().catch((error) => {
    failure(error)
    return undefined
  })
  if (!bundle) return
  const host = await launchNodeHost({
    node: bundle.node,
    entry: bundle.entry,
    root: paths.megaladata,
    resources: bundle.resources,
    headless: parsed.values.headless && !parsed.values["no-headless"],
    environment: process.env,
    strictRecovery: process.env.MEGALADATA_AI_AGENT_STRICT_RECOVERY === "1",
  }).catch((error: unknown) => {
    if (!(error instanceof NodeHostStartupError) || !error.cleanupConfirmed)
      throw new Error("MEGALADATA_HOST_CLEANUP_FAILED", { cause: error })
    failure(error)
    return undefined
  })
  if (!host) return
  try {
    const result = await megaladataManagement(host, parsed.positionals[1], {
      stdinJSON: parsed.values["stdin-json"],
      acknowledge: parsed.values.acknowledge,
      ids: parsed.positionals.slice(2),
    })
    process.stdout.write(JSON.stringify(result, null, parsed.values.format === "json" ? undefined : 2) + "\n")
  } catch (error) {
    failure(error)
  } finally {
    await host.close()
  }
}

function parseManagementArgs(args: string[]) {
  try {
    return parseArgs({
      args,
      allowPositionals: true,
      options: {
        format: { type: "string", default: "default" },
        headless: { type: "boolean", default: false },
        "no-headless": { type: "boolean", default: false },
        "stdin-json": { type: "boolean", default: false },
        acknowledge: { type: "boolean", default: false },
      },
    })
  } catch {
    return undefined
  }
}
