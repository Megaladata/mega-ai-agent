import type { ElectronAPI } from "../preload/types"

declare global {
  interface Window {
    api: ElectronAPI
    __MEGA_AI_AGENT__?: {
      deepLinks?: string[]
    }
  }
}
