interface ImportMetaEnv {
  readonly MEGA_AI_AGENT_CHANNEL: string
  readonly MEGA_AI_AGENT_BROWSER_RECOVERY: boolean
  readonly MEGA_AI_AGENT_SOURCE_SHA: string | null
  readonly MEGA_AI_AGENT_SOURCE_DIRTY: boolean | null
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module "virtual:mega-ai-agent-server" {
  export const MegaladataHost: typeof import("@mega-ai-agent/megaladata-host/adapter").MegaladataHost
  export namespace Server {
    export const listen: typeof import("../../../opencode/dist/types/src/node").Server.listen
    export type Listener = import("../../../opencode/dist/types/src/node").Server.Listener
  }
  export namespace Config {
    export const get: typeof import("../../../opencode/dist/types/src/node").Config.get
    export type Info = import("../../../opencode/dist/types/src/node").Config.Info
  }
  export const bootstrap: typeof import("../../../opencode/dist/types/src/node").bootstrap
}
