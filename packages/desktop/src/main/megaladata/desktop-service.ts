import { app, safeStorage } from "electron"
import { join, resolve } from "node:path"
import { createMegaladataHost } from "@mega-ai-agent/megaladata-host/host"
import { credentials } from "./credentials"

export function megaladataResources() {
  return app.isPackaged
    ? join(process.resourcesPath, "megaladata")
    : resolve(import.meta.dirname, "../../resources/megaladata")
}

export function desktopMegaladata() {
  return createMegaladataHost({
    root: join(app.getPath("userData"), "megaladata"),
    resources: megaladataResources(),
    codec: credentials(process.platform, safeStorage),
    environment: process.env,
    headless:
      process.env.MEGA_AI_AGENT_TEST_ONBOARDING === "1" && process.env.MEGA_AI_AGENT_TEST_HEADLESS === "1",
    // Only the packaged app with its own resources may carry the baked capability.
    browserRecovery: import.meta.env.MEGA_AI_AGENT_BROWSER_RECOVERY === true && app.isPackaged,
  })
}
