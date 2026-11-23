import { existsSync, mkdirSync, readFileSync } from "node:fs"
import { realpath } from "node:fs/promises"
import { join } from "node:path"
import { buildDashboard } from "./build.ts"
import { selfCheck } from "./check.ts"
import { readDashboardSnapshot, withSnapshot, type ControlBinding } from "./folder.ts"
import type { DashboardResources } from "./resources.ts"
import { draftServer } from "../draft/server.ts"

export const NO_SAMPLE = "There is no data sample: it is removed after publication. In Studio, press “Edit in chat” to get fresh data."
const STOPPED = "The draft stopped. Ask the agent to show it again."
let shared: ReturnType<typeof draftServer> | undefined

export async function revokeDashboardDraft(key: string) {
  await shared?.then(server => server.revoke(key), () => undefined)
}

export async function draftDashboard(input: {
  work: string; resources: DashboardResources; signal?: AbortSignal; expectedDraftId?: string | null
}) {
  const work = await realpath(input.work)
  const saved = readDashboardSnapshot(work)
  if (!saved) return NO_SAMPLE
  if (input.expectedDraftId !== undefined && input.expectedDraftId !== (saved.control.draftId ?? null)) return STOPPED
  const builds = join(work, "..", "control", "draft")
  const withCurrentSnapshot = <T>(run: () => T) => {
    try {
      return withSnapshot(work, (directory, control) => {
        if (!existsSync(join(directory, "sample.json"))) return
        const binding = JSON.parse(readFileSync(join(control, "binding.json"), "utf8")) as ControlBinding
        if (binding.snapshotId === saved.control.snapshotId && binding.draftId === saved.control.draftId) return run()
      })
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error
    }
  }
  if (!withCurrentSnapshot(() => {
    if (!existsSync(builds)) mkdirSync(builds, { mode: 0o700 })
    return true
  })) return STOPPED
  // The compiler can create directories while a different session removes this draft.
  const build = await buildDashboard({
    work, template: input.resources.template, node: input.resources.node, out: builds,
    install: withCurrentSnapshot, signal: input.signal,
  }).catch(error => {
    if (withCurrentSnapshot(() => true)) throw error
  })
  if (!build || !withCurrentSnapshot(() => true)) return STOPPED
  if (!build.ok) return "The build failed. Fix the code and call dashboard_draft again.\n" + build.output
  shared ??= draftServer(input.resources.page).catch((error: unknown) => {
    shared = undefined
    throw error
  })
  const server = await shared
  const url = withCurrentSnapshot(() => server.publish({
    key: saved.control.key,
    builds,
    hash: build.hash,
    data: {
      nodeName: saved.control.nodeName,
      packagePath: saved.control.binding.packagePath,
      created: saved.snapshot.created,
      parameters: saved.snapshot.parameters.map(p => ({ name: p.name, value: typeof p.value === "number" ? p.value : null })),
      sample: saved.sample,
    },
  }))
  if (!url) return STOPPED
  const checked = await selfCheck({ resources: input.resources, url, signal: input.signal })
  if (!withCurrentSnapshot(() => true)) return STOPPED
  return `Draft: ${url}\nType check and build: passed.\nPage self-check: ${checked.ok ? "passed" : "failed (" + checked.state + ")\n" + checked.errors.join("\n")}`
}
