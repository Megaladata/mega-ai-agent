import { Show, onCleanup, onMount } from "solid-js"
import { Button } from "@opencode-ai/ui/button"
import { Dialog } from "@opencode-ai/ui/dialog"
import { useDialog } from "@opencode-ai/ui/context/dialog"
import { usePlatform } from "@/context/platform"
import { useLanguage } from "@/context/language"
import { SettingsMegaladata } from "./settings-megaladata"
import { createMegaladataConnectionStatus } from "./settings-megaladata-state"

export function MegaladataButton() {
  const dialog = useDialog()
  const platform = usePlatform()
  const language = useLanguage()
  const connection = createMegaladataConnectionStatus(platform.megaladata)
  onMount(() => {
    if (!platform.megaladata) return
    void connection.refresh()
    const timer = setInterval(() => void connection.refresh(), 1000)
    onCleanup(() => clearInterval(timer))
  })
  return (
    <Show when={platform.megaladata}>
      <Button
        variant={connection.required() ? "secondary" : "ghost"}
        class="h-auto flex-col max-w-full px-1"
        data-tid="megaladata-connection"
        data-connection-required={connection.required()}
        aria-label={connection.required() ? language.t("megaladata.connectionRequired") : "Megaladata"}
        title={connection.required() ? language.t("megaladata.connectionRequired") : "Megaladata"}
        onClick={() =>
          void dialog.show(() => (
            <Dialog fit class="megaladata-dialog">
              <SettingsMegaladata />
            </Dialog>
          ))
        }
      >
        Megaladata
        <Show when={connection.required()}>
          <span role="status" class="text-10-regular text-icon-warning-base">
            {language.t("megaladata.configure")}
          </span>
        </Show>
      </Button>
    </Show>
  )
}
