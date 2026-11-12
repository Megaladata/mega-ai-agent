import { Option, Schema } from "effect"
import { Megaladata } from "@opencode-ai/schema/megaladata"
import type { launchNodeHost } from "@mega-ai-agent/megaladata-host/node-client"

const setupSchema = Schema.Struct({
  url: Schema.optionalKey(Schema.String),
  username: Schema.optionalKey(Schema.String),
  // Older setup scripts still send their own MCP key; the built-in key replaced it.
  apiKey: Schema.optionalKey(Schema.String),
  password: Schema.optionalKey(Schema.String),
})
const setup = Schema.decodeUnknownOption(Schema.fromJsonString(setupSchema))
const view = Schema.decodeUnknownOption(Megaladata.View)
const validation = Schema.decodeUnknownOption(Megaladata.Validation)

export function setupCandidate(json: string, current: Megaladata.View): Megaladata.Candidate {
  const decoded = setup(json, { onExcessProperty: "error" })
  if (Option.isNone(decoded)) throw new Error("CLI_SETUP_INVALID")
  return {
    revision: current.revision,
    url: decoded.value.url ?? current.url,
    username: decoded.value.username ?? current.username,
    password:
      decoded.value.password === undefined
        ? { operation: "preserve" }
        : decoded.value.password === ""
          ? { operation: "empty" }
          : { operation: "replace", value: decoded.value.password },
  }
}

export async function megaladataManagement(
  host: Awaited<ReturnType<typeof launchNodeHost>>,
  command: string,
  options: {
    stdinJSON: boolean
    acknowledge: boolean
    ids?: string[]
  },
) {
  const decoded = view(await host.request("connection.status", {}))
  if (Option.isNone(decoded)) throw new Error("MEGALADATA_REPLY_INVALID")
  const current = decoded.value
  if (command === "status") return current
  if (command === "cancel-pending") return host.request("connection.cancel-pending", { revision: current.revision })
  if (command === "recover") {
    if (!current.recoveries?.length) return current
    if (!options.acknowledge) {
      if (!process.stdin.isTTY) throw new Error("MEGALADATA_RECOVERY_CONFIRMATION_REQUIRED")
      const { confirm, isCancel } = await import("@clack/prompts")
      const answer = await confirm({
        message: "Megaladata state was checked manually. Confirm finishing recovery without retrying operations?",
        initialValue: false,
        output: process.stderr,
      })
      if (isCancel(answer) || !answer) throw new Error("CLI_CANCELLED")
    }
    return host.request("connection.recover", {
      revision: current.revision,
      ids: options.ids?.length ? options.ids : current.recoveries,
    })
  }
  if (command === "check") {
    if (!current.generation) throw new Error("MEGALADATA_CONFIG_REQUIRED")
    const checked = validation(await host.request("connection.check", setupCandidate("{}", current)))
    if (Option.isNone(checked)) throw new Error("MEGALADATA_REPLY_INVALID")
    return {
      ok: true,
      code: "MEGALADATA_CONNECTION_VALID",
      help: { state: "ready" },
      browser: checked.value.browser ?? { state: "unknown" },
    }
  }
  if (command !== "setup") throw new Error("CLI_ARGUMENT_INVALID")
  const candidate = options.stdinJSON ? setupCandidate(await readSetup(), current) : await interactiveSetup(current)
  const checked = validation(await host.request("connection.check", candidate))
  if (Option.isNone(checked)) throw new Error("MEGALADATA_REPLY_INVALID")
  const saved = view(
    await host.request("connection.save", { revision: current.revision, validationId: checked.value.validationId }),
  )
  if (Option.isNone(saved)) throw new Error("MEGALADATA_REPLY_INVALID")
  if (saved.value.failure) throw new Error(saved.value.failure)
  if (saved.value.state === "recoverable-error") throw new Error("MEGALADATA_RECOVERY_REQUIRED")
  return saved.value
}

async function readSetup() {
  if (process.stdin.isTTY) throw new Error("CLI_STDIN_REQUIRED")
  const chunks: Buffer[] = []
  const state = { bytes: 0 }
  for await (const chunk of process.stdin) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)
    state.bytes += buffer.length
    if (state.bytes > 64 * 1024) throw new Error("CLI_SETUP_TOO_LARGE")
    chunks.push(buffer)
  }
  return Buffer.concat(chunks).toString("utf8")
}

async function interactiveSetup(current: Megaladata.View): Promise<Megaladata.Candidate> {
  if (!process.stdin.isTTY) throw new Error("CLI_STDIN_REQUIRED")
  const { password, text, select } = await import("@clack/prompts")
  const url = await text({
    message: "Megaladata URL",
    defaultValue: current.url,
    initialValue: current.url,
    output: process.stderr,
  })
  if (typeof url !== "string") throw new Error("CLI_CANCELLED")
  const username = await text({
    message: "Username",
    defaultValue: current.username,
    initialValue: current.username,
    output: process.stderr,
  })
  if (typeof username !== "string") throw new Error("CLI_CANCELLED")
  const mode = await select({
    message: "Megaladata password",
    output: process.stderr,
    options: [
      ...(current.hasPassword ? [{ value: "preserve", label: "Keep current" }] : []),
      { value: "empty", label: "Empty password" },
      { value: "replace", label: "Enter a new one" },
    ],
  })
  if (typeof mode !== "string") throw new Error("CLI_CANCELLED")
  const secret = mode === "replace" ? await password({ message: "New password", output: process.stderr }) : ""
  if (typeof secret !== "string") throw new Error("CLI_CANCELLED")
  return setupCandidate(
    JSON.stringify({
      url,
      username,
      ...(mode === "preserve" ? {} : { password: secret }),
    }),
    current,
  )
}
