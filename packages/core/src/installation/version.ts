declare global {
  const MEGA_AI_AGENT_VERSION: string
  const MEGA_AI_AGENT_CHANNEL: string
  const MEGA_AI_AGENT_BROWSER_RECOVERY: boolean
}

export const InstallationVersion = typeof MEGA_AI_AGENT_VERSION === "string" ? MEGA_AI_AGENT_VERSION : "local"
export const InstallationChannel = typeof MEGA_AI_AGENT_CHANNEL === "string" ? MEGA_AI_AGENT_CHANNEL : "local"
export const InstallationLocal = InstallationChannel === "local"
// Baked by release builds only; launchers still require a verified bundle or packaged Desktop.
export const InstallationBrowserRecovery =
  typeof MEGA_AI_AGENT_BROWSER_RECOVERY === "boolean" ? MEGA_AI_AGENT_BROWSER_RECOVERY : false
