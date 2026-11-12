import "./settings-megaladata.css"
import { Show, onCleanup, onMount } from "solid-js"
import { Button } from "@opencode-ai/ui/button"
import { IconButton } from "@opencode-ai/ui/icon-button"
import { TextField } from "@opencode-ai/ui/text-field"
import { useDialog } from "@opencode-ai/ui/context/dialog"
import { usePlatform } from "@/context/platform"
import { useLanguage } from "@/context/language"
import { dismissToast, showToast } from "@/utils/toast"
import { createMegaladataSettings, megaladataBrowserMessage, watchMegaladataApplication } from "./settings-megaladata-state"

export function SettingsMegaladata(props: { onSaved?: () => void; onLater?: () => void; wizard?: boolean }) {
  const platform = usePlatform()
  const language = useLanguage()
  const dialog = useDialog()
  const form = createMegaladataSettings(platform.megaladata, (view) => {
    const pending = view.state === "pending"
    const warning = view.browser?.state === "failed"
    const toast = showToast({
      title: language.t("megaladata.saved"),
      description: language.t(
        pending ? "megaladata.savedPending" : warning ? "megaladata.savedBrowserWarning" : "megaladata.helpReady",
      ),
      variant: pending || warning ? "default" : "success",
      persistent: pending || warning,
    })
    if (pending && platform.megaladata) {
      const messages = {
        ready: language.t("megaladata.helpReady"),
        failed: language.t("megaladata.applyFailed"),
        unknown: language.t("megaladata.statusUnavailable"),
      }
      void watchMegaladataApplication(platform.megaladata, view, (result, current) => {
        dismissToast(toast)
        if (result === "superseded") return
        showToast({
          description:
            result === "ready" && current?.browser?.state === "failed"
              ? language.t("megaladata.savedBrowserWarning")
              : messages[result],
          variant: result === "ready" ? (current?.browser?.state === "failed" ? "default" : "success") : "error",
          persistent: result !== "ready" || current?.browser?.state === "failed",
        })
      })
    }
    if (props.onSaved) props.onSaved()
    else dialog.close()
  })
  const close = () => {
    if (props.onLater) {
      if (form.requestClose()) props.onLater()
      return
    }
    dialog.close()
  }
  onMount(() => {
    void form.load()
    const unguard = dialog.guardClose(form.requestClose)
    const timer = setInterval(() => void form.refresh(), 1000)
    onCleanup(() => {
      unguard()
      clearInterval(timer)
    })
  })
  let element: HTMLFormElement | undefined
  return (
    <section class="flex flex-col gap-5 p-6 max-w-2xl mx-auto w-full" data-component="settings-megaladata">
      <div class="megaladata-heading">
        <h2 class="text-18-medium">{props.wizard ? language.t("megaladata.welcome") : "Megaladata"}</h2>
        <IconButton
          type="button"
          icon="close"
          variant="ghost"
          aria-label={language.t("common.close")}
          disabled={form.busy()}
          onClick={close}
        />
      </div>
      <Show
        when={form.state.confirmClose}
        fallback={
          <>
            <p class="text-14-regular text-text-weak">{language.t("megaladata.description")}</p>
            <Show when={platform.megaladata} fallback={<p role="status">{language.t("megaladata.desktopOnly")}</p>}>
              <form
                ref={element}
                onSubmit={(event) => {
                  event.preventDefault()
                  void form.submit(true)
                }}
                class="flex flex-col gap-4"
              >
                <fieldset disabled={form.disabled()} class="flex flex-col gap-4">
                  <TextField
                    label={language.t("megaladata.url")}
                    type="url"
                    value={form.state.url}
                    onChange={(url) => form.edit({ url })}
                    required
                  />
                  <TextField
                    label={language.t("megaladata.username")}
                    value={form.state.username}
                    onChange={(username) => form.edit({ username })}
                    required
                    autocomplete="username"
                  />
                  <TextField
                    label={language.t("megaladata.password")}
                    type="password"
                    value={form.state.password}
                    autocomplete="new-password"
                    onChange={(password) =>
                      form.edit({
                        password,
                        passwordMode: password ? "replace" : form.state.baseline?.hasPassword ? "preserve" : "empty",
                      })
                    }
                  />
                  <Show when={form.state.baseline?.hasPassword}>
                    <p class="text-12-regular text-text-weak">{language.t("megaladata.passwordSaved")}</p>
                  </Show>
                  <label class="text-12-regular flex gap-2 items-center">
                    <input
                      type="checkbox"
                      checked={form.state.passwordMode === "empty"}
                      onChange={(event) =>
                        form.edit({ password: "", passwordMode: event.currentTarget.checked ? "empty" : "preserve" })
                      }
                    />
                    {language.t("megaladata.emptyPassword")}
                  </label>
                  <p class="text-12-regular text-text-weak">
                    {language.t("megaladata.folder")}: <code>{`/${form.state.username}`}</code>
                  </p>
                </fieldset>
                <div role="status" class="megaladata-feedback" data-component="megaladata-connection-status">
                  <p>
                    {language.t(
                      form.state.checkedBrowser || form.state.view?.state === "ready"
                        ? "megaladata.helpReady"
                        : "megaladata.helpNotReady",
                    )}
                  </p>
                  <p data-browser-state={(form.state.checkedBrowser ?? form.state.view?.browser)?.state ?? "unknown"}>
                    {language.t(megaladataBrowserMessage(form.state.checkedBrowser ?? form.state.view?.browser))}
                  </p>
                </div>
                <Show when={form.pending()}>
                  <p role="status" class="megaladata-feedback">
                    {language.t(form.state.view?.state === "starting" ? "megaladata.applying" : "megaladata.savedPending")}
                  </p>
                </Show>
                <Show when={form.state.view?.state === "recoverable-error" && !form.state.view?.recoveries?.length}>
                  <p role="alert">{language.t("megaladata.runtimeFailed")}</p>
                </Show>
                <Show when={form.state.message}>
                  {(message) => (
                    <div
                      class="megaladata-feedback"
                      data-failed={form.state.failed ? "true" : "false"}
                      role={form.state.failed ? "alert" : "status"}
                    >
                      {language.t(message())}
                      <Show when={message() === "megaladata.conflict"}>
                        <Button
                          type="button"
                          variant="secondary"
                          disabled={form.busy()}
                          onClick={() => void form.load()}
                        >
                          {language.t("megaladata.refresh")}
                        </Button>
                      </Show>
                    </div>
                  )}
                </Show>
                <div class="megaladata-actions flex flex-wrap gap-3">
                  <Button type="submit" variant="primary" disabled={!form.canSave()}>
                    {language.t(
                      form.state.phase === "checking"
                        ? "megaladata.checking"
                        : form.state.phase === "saving"
                          ? "megaladata.saving"
                          : form.state.phase === "applying"
                            ? "megaladata.applying"
                            : "megaladata.saveClose",
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    disabled={form.disabled()}
                    onClick={() => {
                      if (element?.reportValidity()) void form.submit(false)
                    }}
                  >
                    {language.t("megaladata.check")}
                  </Button>
                  <Show when={form.state.view?.state === "pending"}>
                    <Button type="button" disabled={form.busy()} onClick={() => void form.cancelPending()}>
                      {language.t("megaladata.cancel")}
                    </Button>
                  </Show>
                  <Button type="button" variant="ghost" disabled={form.busy()} onClick={close}>
                    {language.t("common.close")}
                  </Button>
                </div>
              </form>
            </Show>
          </>
        }
      >
        <div class="flex flex-col gap-4" role="alertdialog" aria-label={language.t("megaladata.discardTitle")}>
          <p>{language.t("megaladata.discardTitle")}</p>
          <p class="text-14-regular text-text-weak">{language.t("megaladata.discardDescription")}</p>
          <div class="flex flex-wrap gap-3">
            <Button type="button" variant="primary" autofocus onClick={form.continueEditing}>
              {language.t("megaladata.keepEditing")}
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                form.discard()
                close()
              }}
            >
              {language.t("megaladata.discardClose")}
            </Button>
          </div>
        </div>
      </Show>
    </section>
  )
}
