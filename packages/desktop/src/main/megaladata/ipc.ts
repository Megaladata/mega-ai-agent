import { app, BrowserWindow, ipcMain } from "electron"
import type { IpcMainInvokeEvent } from "electron"
import { Option, Schema } from "effect"
import { Megaladata } from "@opencode-ai/schema/megaladata"

export function registerMegaladataIpc(api: Megaladata.API) {
  function sender(event: IpcMainInvokeEvent) {
    const window = BrowserWindow.fromWebContents(event.sender)
    if (!window || event.senderFrame !== event.sender.mainFrame || window.isDestroyed())
      throw new Error("MEGALADATA_SENDER_INVALID")
    const url = new URL(event.senderFrame.url)
    const valid =
      (url.protocol === "mega-ai-agent-app:" && url.hostname === "renderer") ||
      (!app.isPackaged &&
        !!process.env.ELECTRON_RENDERER_URL &&
        url.origin === new URL(process.env.ELECTRON_RENDERER_URL).origin)
    if (!valid) throw new Error("MEGALADATA_SENDER_INVALID")
  }
  const candidate = Schema.decodeUnknownOption(Megaladata.Candidate)
  const save = Schema.decodeUnknownOption(Megaladata.Save)
  const cancel = Schema.decodeUnknownOption(Megaladata.Cancel)
  const acknowledge = Schema.decodeUnknownOption(Megaladata.AcknowledgeRecovery)
  ipcMain.handle("megaladata-acknowledge-recovery", (event, value: unknown) => {
    sender(event)
    const decoded = acknowledge(value)
    if (Option.isNone(decoded)) throw new Error("MEGALADATA_RECOVERY_INVALID")
    return api.acknowledgeRecovery(decoded.value)
  })
  ipcMain.handle("megaladata-read", (event) => {
    sender(event)
    return api.read()
  })
  ipcMain.handle("megaladata-status", (event) => {
    sender(event)
    return api.status()
  })
  ipcMain.handle("megaladata-check", (event, value: unknown) => {
    sender(event)
    const decoded = candidate(value)
    if (Option.isNone(decoded)) throw new Error("MEGALADATA_CANDIDATE_INVALID")
    return api.check(decoded.value)
  })
  ipcMain.handle("megaladata-save", (event, value: unknown) => {
    sender(event)
    const decoded = save(value)
    if (Option.isNone(decoded)) throw new Error("MEGALADATA_SAVE_INVALID")
    return api.save(decoded.value)
  })
  ipcMain.handle("megaladata-cancel-pending", (event, value: unknown) => {
    sender(event)
    const decoded = cancel(value)
    if (Option.isNone(decoded)) throw new Error("MEGALADATA_CANCEL_INVALID")
    return api.cancelPending(decoded.value)
  })
}
