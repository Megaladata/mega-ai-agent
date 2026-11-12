import { onCleanup } from "solid-js"
import { createStore, reconcile } from "solid-js/store"
import type { Megaladata } from "@opencode-ai/schema/megaladata"
import { Product } from "@mega-ai-agent/product"

export function megaladataError(value: unknown) {
  const code = value instanceof Error ? value.message.match(/MEGALADATA_[A-Z_]+/)?.[0] : undefined
  switch (code) {
    case "MEGALADATA_REVISION_CONFLICT":
      return "megaladata.conflict"
    case "MEGALADATA_KNOWLEDGE_AUTH_FAILED":
      return "megaladata.invalidKey"
    case "MEGALADATA_KNOWLEDGE_UNAVAILABLE":
      return "megaladata.serverUnavailable"
    case "MEGALADATA_LOGIN_REJECTED":
      return "megaladata.invalidPassword"
    case "MEGALADATA_ACCOUNT_MISMATCH":
      return "megaladata.accountMismatch"
    case "MEGALADATA_LOGIN_UNAVAILABLE":
      return "megaladata.webUnavailable"
    case "MEGALADATA_BROWSER_START_FAILED":
      return "megaladata.browserFailed"
    default:
      return "megaladata.failed"
  }
}

export function megaladataBrowserMessage(browser?: Megaladata.BrowserStatus) {
  if (browser?.state === "verified") return "megaladata.browserVerified"
  if (browser?.state !== "failed") return "megaladata.browserUnknown"
  if (browser.failure === "MEGALADATA_ACCOUNT_MISMATCH") return "megaladata.browserAccountMismatch"
  return megaladataError(new Error(browser.failure))
}

const delay = () => new Promise<void>((resolve) => setTimeout(resolve, 1000))

// This promise intentionally outlives the settings dialog. Only redacted views
// are retained, so a deferred activation failure remains visible after closing.
export async function watchMegaladataApplication(
  api: Megaladata.API,
  saved: Megaladata.View,
  notify: (result: "ready" | "failed" | "unknown" | "superseded", current?: Megaladata.View) => void,
  wait = delay,
) {
  try {
    for (;;) {
      await wait()
      const current = await api.status()
      if (current.revision !== saved.revision) return notify("superseded")
      if (current.failure || current.state === "recoverable-error") return notify("failed")
      if (current.state === "ready") return notify(current.generation > saved.generation ? "ready" : "failed", current)
      if (current.state === "unconfigured") return notify("failed")
    }
  } catch {
    notify("unknown")
  }
}

export function createMegaladataSettings(api: Megaladata.API | undefined, saved: (view: Megaladata.View) => void, wait = delay) {
  const [state, setState] = createStore({
    view: undefined as Megaladata.View | undefined,
    baseline: undefined as Megaladata.View | undefined,
    url: Product.connection.url as string,
    username: Product.connection.username as string,
    password: "",
    passwordMode: "empty" as "preserve" | "replace" | "empty",
    phase: "idle" as "idle" | "checking" | "saving" | "applying",
    message: undefined as
      | ReturnType<typeof megaladataError>
      | "megaladata.checked"
      | "megaladata.checkedSaved"
      | "megaladata.helpChecked"
      | "megaladata.helpCheckedSaved"
      | undefined,
    checkedBrowser: undefined as Megaladata.BrowserStatus | undefined,
    failed: false,
    confirmClose: false,
  })
  let disposed = false
  onCleanup(() => {
    disposed = true
    setState({ password: "" })
  })
  const busy = () => state.phase !== "idle"
  const pending = () => state.view?.state === "pending" || state.view?.state === "starting"
  const dirty = () =>
    !!state.baseline &&
    (state.url !== state.baseline.url ||
      state.username !== state.baseline.username ||
      !!state.password ||
      (state.passwordMode === "empty") !== !state.baseline.hasPassword)
  const disabled = () => !state.baseline || busy() || pending()
  const canSave = () => !disabled() && (dirty() || !!state.view?.failure || state.view?.state === "recoverable-error")

  function error(value: unknown) {
    if (!disposed) setState({ failed: true, message: megaladataError(value) })
  }
  function apply(view: Megaladata.View) {
    setState("view", reconcile({ ...view }))
    setState("baseline", reconcile({ ...view }))
    setState({
      url: view.url,
      username: view.username,
      passwordMode: view.hasPassword ? "preserve" : "empty",
      password: "",
      message: undefined,
      checkedBrowser: undefined,
      failed: false,
      confirmClose: false,
    })
  }
  async function load() {
    if (!api || busy()) return
    try {
      const view = await api.read()
      if (!disposed) {
        apply(view)
        if (view.failure) error(new Error(view.failure))
      }
    } catch (value) {
      error(value)
    }
  }
  async function refresh() {
    if (!api || busy() || !state.baseline) return
    try {
      const current = await api.status()
      if (disposed || busy()) return
      const failureChanged = current.failure !== state.view?.failure
      if (
        !dirty() &&
        current.state === "ready" &&
        (current.revision !== state.baseline?.revision || current.generation !== state.baseline?.generation)
      )
        apply(current)
      setState("view", reconcile({ ...current }))
      if (current.failure && failureChanged) error(new Error(current.failure))
    } catch (value) {
      error(value)
    }
  }
  function edit(values: Partial<Pick<typeof state, "url" | "username" | "password" | "passwordMode">>) {
    setState({ ...values, message: undefined, checkedBrowser: undefined, failed: false })
  }
  function requestClose() {
    if (busy()) return false
    if (!dirty()) return true
    setState("confirmClose", true)
    return false
  }
  async function submit(save: boolean) {
    if (!api || disabled() || (save && !canSave())) return
    setState({ phase: "checking", message: undefined, checkedBrowser: undefined, failed: false })
    try {
      const candidate: Megaladata.Candidate = {
        revision: state.baseline!.revision,
        url: state.url,
        username: state.username,
        password:
          state.passwordMode === "replace"
            ? { operation: "replace", value: state.password }
            : { operation: state.passwordMode },
      }
      const validation = await api.check(candidate)
      if (disposed) return
      setState("checkedBrowser", validation.browser ? { ...validation.browser } : undefined)
      if (!save) {
        setState(
          "message",
          validation.browser && validation.browser.state !== "verified"
            ? dirty()
              ? "megaladata.helpChecked"
              : "megaladata.helpCheckedSaved"
            : dirty()
              ? "megaladata.checked"
              : "megaladata.checkedSaved",
        )
        return
      }
      setState("phase", "saving")
      let current = await api.save({ validationId: validation.validationId, revision: candidate.revision })
      const revision = current.revision
      const deadline = Date.now() + 180_000
      while (current.state === "starting" && !current.failure) {
        if (Date.now() >= deadline) throw Error("MEGALADATA_APPLICATION_PENDING")
        setState("phase", "applying")
        await wait()
        current = await api.status()
        if (current.revision !== revision) throw Error("MEGALADATA_REVISION_CONFLICT")
      }
      if (disposed) return
      setState("view", reconcile({ ...current }))
      setState("baseline", { ...state.baseline!, revision: current.revision })
      // The settings are durable but activation awaits explicit recovery. The
      // form already shows that notice; this is not a failed connection check.
      if (current.recoveries?.length && !current.failure) return
      if (current.failure || !["ready", "pending"].includes(current.state))
        throw Error(current.failure ?? "MEGALADATA_RUNTIME_START_FAILED")
      apply(current)
      setState("phase", "idle")
      saved(current)
    } catch (value) {
      error(value)
    } finally {
      if (!disposed) setState("phase", "idle")
    }
  }
  async function recover() {
    if (!api || busy() || !state.view) return
    setState("phase", "applying")
    try {
      // Solid store arrays are proxies; Electron cannot clone them across IPC.
      const current = await api.acknowledgeRecovery({
        revision: state.view.revision,
        ids: [...(state.view.recoveries ?? [])],
      })
      if (!disposed) apply(current)
    } catch (value) {
      error(value)
    } finally {
      if (!disposed) setState("phase", "idle")
    }
  }
  async function cancelPending() {
    if (!api || busy() || !state.view) return
    setState("phase", "saving")
    try {
      const current = await api.cancelPending({ revision: state.view.revision })
      if (!disposed) apply(current)
    } catch (value) {
      error(value)
    } finally {
      if (!disposed) setState("phase", "idle")
    }
  }
  return {
    state,
    busy,
    pending,
    dirty,
    disabled,
    canSave,
    load,
    refresh,
    edit,
    submit,
    requestClose,
    recover,
    cancelPending,
    continueEditing: () => setState("confirmClose", false),
    discard: () => {
      if (state.baseline) apply(state.baseline)
    },
  }
}
