import { Option, Schema } from "effect"
import { Megaladata } from "@opencode-ai/schema/megaladata"
import { MegaladataHost } from "@megaladata-ai-agent/megaladata-host/adapter"
import { launchNodeHost, NodeHostStartupError } from "@megaladata-ai-agent/megaladata-host/node-client"
import type { cliProfile } from "@megaladata-ai-agent/product/cli-profile"
import { Product } from "@megaladata-ai-agent/product"
import { standaloneCancellation } from "./standalone-cancellation"
import { standaloneBundle } from "./standalone-bundle"
import { InstallationBrowserRecovery } from "@opencode-ai/core/installation/version"

export async function standaloneRun(args: string[], paths: ReturnType<typeof cliProfile>, mode: "run" | "tui" = "run") {
  const signal = mode === "run" ? standaloneCancellation() : undefined
  const boundary = args.indexOf("--") < 0 ? args.length : args.indexOf("--")
  const flags = args.slice(0, boundary)
  const automation =
    flags
      .flatMap((value, index) =>
        value === "--command" ? [flags[index + 1]] : value.startsWith("--command=") ? [value.slice(10)] : [],
      )
      .at(-1) === "megaladata-automation"
  const json =
    flags.includes("--format=json") || flags.some((value, index) => value === "--format" && flags[index + 1] === "json")
  const headless = flags.includes("--headless")
  const filtered = args.filter((value, index) => index >= boundary || !["--headless", "--no-headless"].includes(value))
  const failure = (code: string, exit: number) => {
    process.exitCode = exit
    if (json)
      process.stdout.write(JSON.stringify({ type: "error", error: { name: code, data: { message: code } } }) + "\n")
    process.stderr.write(code + "\n")
  }
  if (
    (headless && flags.includes("--no-headless")) ||
    (mode === "tui" &&
      flags.some((value) =>
        ["--port", "--hostname", "--mdns", "--cors"].some(
          (option) => value === option || value.startsWith(option + "="),
        ),
      )) ||
    flags.some(
      (value) =>
        value === "--attach" || value.startsWith("--attach=") || value === "--mini" || value === "--interactive",
    )
  ) {
    failure("CLI_ARGUMENT_INVALID", 2)
    return
  }
  const bundle = await standaloneBundle().catch((error: Error) => {
    failure(
      error.message === "MEGALADATA_BUNDLE_REQUIRED" ? error.message : "MEGALADATA_BUNDLE_INCOMPLETE",
      error.message === "MEGALADATA_BUNDLE_REQUIRED" ? 2 : 1,
    )
    return undefined
  })
  if (!bundle) return
  process.env.MEGALADATA_AI_AGENT_RESOURCES = bundle.resources
  if (signal?.aborted) {
    failure("CLI_CANCELLED", 130)
    return
  }
  const host = await launchNodeHost({
    node: bundle.node,
    entry: bundle.entry,
    resources: bundle.resources,
    root: paths.megaladata,
    headless,
    environment: process.env,
    strictRecovery: process.env.MEGALADATA_AI_AGENT_STRICT_RECOVERY === "1",
    closeSavedPackageOnShutdown: mode === "run",
    browserRecovery: InstallationBrowserRecovery && bundle.verified,
  }).catch((error: unknown) => {
    if (!(error instanceof NodeHostStartupError) || !error.cleanupConfirmed)
      throw new Error("MEGALADATA_HOST_CLEANUP_FAILED", { cause: error })
    failure(error instanceof Error && /^MEGALADATA_[A-Z_]+$/.test(error.message) ? error.message : "CLI_START_FAILED", 1)
    return undefined
  })
  if (!host) return
  const cleanup: { dispose?: () => Promise<void>; detach?: () => void } = {}
  try {
    if (signal?.aborted) throw Error("CLI_CANCELLED")
    const status = Schema.decodeUnknownOption(Megaladata.View)(await host.request("connection.status", {}))
    if (Option.isNone(status)) throw new Error("MEGALADATA_REPLY_INVALID")
    if (status.value.recoveries?.length) {
      failure("MEGALADATA_RECOVERY_REQUIRED", 4)
      return
    }
    if (mode === "run" && automation && !status.value.generation) {
      failure("MEGALADATA_CONFIG_REQUIRED", 2)
      return
    }
    if (mode === "run" && automation) {
      const cancelled = Promise.withResolvers<never>()
      const interrupt = () => cancelled.reject(new Error("CLI_CANCELLED"))
      signal?.addEventListener("abort", interrupt, { once: true })
      try {
        if (signal?.aborted) throw new Error("CLI_CANCELLED")
        const ready = await Promise.race([host.request("connection.ready", {}), cancelled.promise]).then(
          Schema.decodeUnknownOption(Megaladata.View),
        )
        if (Option.isNone(ready) || ready.value.state !== "ready") {
          failure("MEGALADATA_CONNECTION_NOT_READY", 1)
          return
        }
      } finally {
        signal?.removeEventListener("abort", interrupt)
      }
    }
    if (mode === "tui" && !status.value.generation && process.stdin.isTTY) {
      const { confirm, isCancel } = await import("@clack/prompts")
      const setup = await confirm({
        message: "Configure Megaladata now? You can continue an ordinary chat without a connection.",
        initialValue: false,
        output: process.stderr,
      })
      // readline pauses stdin when the startup prompt closes; the TUI reuses this stream.
      process.stdin.resume()
      if (isCancel(setup)) {
        failure("CLI_CANCELLED", 130)
        return
      }
      if (setup) {
        const { megaladataManagement } = await import("./megaladata-management")
        await megaladataManagement(host, "setup", { stdinJSON: false, acknowledge: false })
        process.stdin.resume()
      }
    }
    // An ordinary request reaches the model before its Megaladata task profile is known.
    process.env.MEGALADATA_AI_AGENT_DISABLE_AUTOUPDATE = "1"
    process.env.MEGALADATA_AI_AGENT_DISABLE_MODELS_FETCH = "1"
    const { applyCliSystemProxy, systemProxyNoticeLine } = await import("./standalone-proxy")
    const systemProxy = await applyCliSystemProxy()
    MegaladataHost.connect(host.port)
    const { AppRuntime } = await import("../effect/app-runtime")
    cleanup.dispose = async () => {
      const { HttpApiApp } = await import("../server/routes/instance/httpapi/server")
      try {
        // The in-process HTTP handler owns a scope independent of AppRuntime.
        if (HttpApiApp.webHandler.loaded()) await HttpApiApp.webHandler().dispose()
      } finally {
        await AppRuntime.dispose()
      }
    }
    const { default: yargs } = await import("yargs")
    const parser = yargs()
      .scriptName(Product.cliExecutable)
      .parserConfiguration({ "populate--": true })
      .exitProcess(false)
      .help(false)
      .version(false)
      .strict()
      .fail((_message, error) => {
        throw error ?? new Error("CLI_ARGUMENT_INVALID")
      })
    if (mode === "run") {
      const { RunCommand } = await import("./cmd/run")
      if (signal?.aborted) throw Error("CLI_CANCELLED")
      await parser.command(RunCommand).parseAsync(filtered)
    } else {
      const { TuiThreadCommand, setTuiMegaladataHost, setTuiStartupWarning } = await import("./cmd/tui")
      setTuiMegaladataHost(host.port)
      setTuiStartupWarning(systemProxyNoticeLine(systemProxy))
      cleanup.detach = () => {
        setTuiMegaladataHost()
        setTuiStartupWarning()
      }
      await parser.command(TuiThreadCommand).parseAsync(filtered)
    }
    const final = Schema.decodeUnknownOption(Megaladata.View)(await host.request("connection.status", {}))
    if (Option.isNone(final)) throw new Error("MEGALADATA_REPLY_INVALID")
    if (final.value.recoveries?.length) failure("MEGALADATA_RECOVERY_REQUIRED", 4)
  } catch (error) {
    if (error instanceof Error && error.message === "MEGALADATA_TUI_CLEANUP_FAILED") throw error
    if (error instanceof Error && error.message === "CLI_CANCELLED") {
      failure("CLI_CANCELLED", 130)
      return
    }
    failure(
      error instanceof Error && ["CLI_ARGUMENT_INVALID", "MEGALADATA_CONNECTION_NOT_READY"].includes(error.message)
        ? error.message
        : "CLI_RUN_FAILED",
      error instanceof Error && error.message === "CLI_ARGUMENT_INVALID" ? 2 : 1,
    )
  } finally {
    try {
      await cleanup.dispose?.()
    } finally {
      cleanup.detach?.()
      MegaladataHost.disconnect()
      await host.close()
      if (signal?.aborted && process.exitCode !== 130 && process.exitCode !== 4) failure("CLI_CANCELLED", 130)
    }
  }
}
