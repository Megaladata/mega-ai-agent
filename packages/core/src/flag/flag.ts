import { Config } from "effect"

export function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

const copy = process.env["MEGA_AI_AGENT_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"]
const fff = process.env["MEGA_AI_AGENT_DISABLE_FFF"]

function enabledByExperimental(key: string) {
  return process.env[key] === undefined ? truthy("MEGA_AI_AGENT_EXPERIMENTAL") : truthy(key)
}

export const Flag = {
  OTEL_EXPORTER_OTLP_ENDPOINT: process.env["OTEL_EXPORTER_OTLP_ENDPOINT"],
  OTEL_EXPORTER_OTLP_HEADERS: process.env["OTEL_EXPORTER_OTLP_HEADERS"],

  MEGA_AI_AGENT_AUTO_HEAP_SNAPSHOT: truthy("MEGA_AI_AGENT_AUTO_HEAP_SNAPSHOT"),
  MEGA_AI_AGENT_GIT_BASH_PATH: process.env["MEGA_AI_AGENT_GIT_BASH_PATH"],
  MEGA_AI_AGENT_CONFIG: process.env["MEGA_AI_AGENT_CONFIG"],
  MEGA_AI_AGENT_CONFIG_CONTENT: process.env["MEGA_AI_AGENT_CONFIG_CONTENT"],
  MEGA_AI_AGENT_DISABLE_AUTOUPDATE: truthy("MEGA_AI_AGENT_DISABLE_AUTOUPDATE"),
  MEGA_AI_AGENT_ALWAYS_NOTIFY_UPDATE: truthy("MEGA_AI_AGENT_ALWAYS_NOTIFY_UPDATE"),
  MEGA_AI_AGENT_DISABLE_PRUNE: truthy("MEGA_AI_AGENT_DISABLE_PRUNE"),
  MEGA_AI_AGENT_DISABLE_TERMINAL_TITLE: truthy("MEGA_AI_AGENT_DISABLE_TERMINAL_TITLE"),
  MEGA_AI_AGENT_SHOW_TTFD: truthy("MEGA_AI_AGENT_SHOW_TTFD"),
  MEGA_AI_AGENT_DISABLE_AUTOCOMPACT: truthy("MEGA_AI_AGENT_DISABLE_AUTOCOMPACT"),
  MEGA_AI_AGENT_DISABLE_MODELS_FETCH: truthy("MEGA_AI_AGENT_DISABLE_MODELS_FETCH"),
  MEGA_AI_AGENT_DISABLE_MOUSE: truthy("MEGA_AI_AGENT_DISABLE_MOUSE"),
  MEGA_AI_AGENT_FAKE_VCS: process.env["MEGA_AI_AGENT_FAKE_VCS"],
  MEGA_AI_AGENT_SERVER_PASSWORD: process.env["MEGA_AI_AGENT_SERVER_PASSWORD"],
  MEGA_AI_AGENT_SERVER_USERNAME: process.env["MEGA_AI_AGENT_SERVER_USERNAME"],
  MEGA_AI_AGENT_DISABLE_FFF: fff === undefined ? process.platform === "win32" : truthy("MEGA_AI_AGENT_DISABLE_FFF"),

  // Experimental
  MEGA_AI_AGENT_EXPERIMENTAL_FILEWATCHER: Config.boolean("MEGA_AI_AGENT_EXPERIMENTAL_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  MEGA_AI_AGENT_EXPERIMENTAL_DISABLE_FILEWATCHER: Config.boolean("MEGA_AI_AGENT_EXPERIMENTAL_DISABLE_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  MEGA_AI_AGENT_EXPERIMENTAL_DISABLE_COPY_ON_SELECT:
    copy === undefined ? process.platform === "win32" : truthy("MEGA_AI_AGENT_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"),
  MEGA_AI_AGENT_MODELS_URL: process.env["MEGA_AI_AGENT_MODELS_URL"],
  MEGA_AI_AGENT_MODELS_PATH: process.env["MEGA_AI_AGENT_MODELS_PATH"],
  MEGA_AI_AGENT_DB: process.env["MEGA_AI_AGENT_DB"],

  MEGA_AI_AGENT_WORKSPACE_ID: process.env["MEGA_AI_AGENT_WORKSPACE_ID"],
  MEGA_AI_AGENT_EXPERIMENTAL_WORKSPACES: enabledByExperimental("MEGA_AI_AGENT_EXPERIMENTAL_WORKSPACES"),

  // Evaluated at access time (not module load) because tests, the CLI, and
  // external tooling set these env vars at runtime.
  get MEGA_AI_AGENT_DISABLE_PROJECT_CONFIG() {
    return truthy("MEGA_AI_AGENT_DISABLE_PROJECT_CONFIG")
  },
  get MEGA_AI_AGENT_EXPERIMENTAL_REFERENCES() {
    return enabledByExperimental("MEGA_AI_AGENT_EXPERIMENTAL_REFERENCES")
  },
  get MEGA_AI_AGENT_TUI_CONFIG() {
    return process.env["MEGA_AI_AGENT_TUI_CONFIG"]
  },
  get MEGA_AI_AGENT_CONFIG_DIR() {
    return process.env["MEGA_AI_AGENT_CONFIG_DIR"]
  },
  get MEGA_AI_AGENT_PURE() {
    return truthy("MEGA_AI_AGENT_PURE")
  },
  get MEGA_AI_AGENT_PERMISSION() {
    return process.env["MEGA_AI_AGENT_PERMISSION"]
  },
  get MEGA_AI_AGENT_PLUGIN_META_FILE() {
    return process.env["MEGA_AI_AGENT_PLUGIN_META_FILE"]
  },
  get MEGA_AI_AGENT_CLIENT() {
    return process.env["MEGA_AI_AGENT_CLIENT"] ?? "cli"
  },
}
