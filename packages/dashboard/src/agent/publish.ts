import { createHash } from "node:crypto"
import { cp, readFile, realpath, rm } from "node:fs/promises"
import { join } from "node:path"
import { setTimeout } from "node:timers/promises"
import { LookupResponse } from "../contract/snapshot.ts"
import { Option, Schema } from "effect"
import { parsePublication, PublicationVersion, PublicationWrite } from "../contract/publication.ts"
import { buildSources, outputText, sourceFiles } from "../builder/build.ts"
import { NO_SAMPLE } from "./draft.ts"
import { readDashboardDraftId, readDashboardSnapshot, removePublishedSample, updatePublicationBase, withSnapshot, type ControlBinding } from "./folder.ts"
import type { DashboardResources } from "./resources.ts"

export { outputText } from "../builder/build.ts"

type Prepared = { publication: { content: string; sourceHash: string }; control: ControlBinding; build: { hash: string; dir: string } }

export async function preparePublish(input: { work: string; operation: string; resources: DashboardResources; signal?: AbortSignal }):
  Promise<({ ok: true } & Prepared) | { ok: false; text: string }> {
  const work = await realpath(input.work)
  const saved = readDashboardSnapshot(work)
  if (!saved) return { ok: false, text: NO_SAMPLE }
  const listed = await sourceFiles(work)
  if ("error" in listed) return { ok: false, text: "The build failed.\n" + listed.error }
  await rm(join(input.operation, "src"), { recursive: true, force: true })
  await cp(join(work, "src"), join(input.operation, "src"), { recursive: true })
  const captured = await sourceFiles(input.operation)
  if ("error" in captured) return { ok: false, text: "The build failed.\n" + captured.error }
  const bytes = await Promise.all(captured.files.map(file => readFile(join(input.operation, file))))
  const found = embeddedValues(saved.sample, bytes)
  if (found.length) return {
    ok: false, text: "The build failed.\n" + outputText(Buffer.from("The published build is public. Remove sample data from src/: " + found.slice(0, 5).join(", "))),
  }
  const build = await buildSources({
    work: input.operation, node: input.resources.node, template: input.resources.template,
    out: input.operation, signal: input.signal,
  })
  if (!build.ok) return { ok: false, text: "The build failed.\n" + build.output }
  try {
    if (!withSnapshot(work, directory => readDashboardDraftId(directory) === saved.control.draftId))
      return { ok: false, text: "The draft changed while publication was being prepared." }
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error
    return { ok: false, text: "The local draft folder is no longer available." }
  }
  const content = JSON.stringify({
    format: 1, template: 1, binding: saved.control.binding, title: saved.control.nodeName,
    parameters: saved.snapshot.parameters.map(parameter => ({ name: parameter.name, label: parameter.name })),
    files: captured.files.map((path, index) => {
      const file = bytes[index]!
      const binary = /\.(png|jpg|webp|woff2)$/i.test(path)
      return { path, encoding: binary ? "base64" : "utf8", content: binary ? file.toString("base64") : new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }).decode(file) }
    }),
  })
  try {
    parsePublication(content)
  } catch (error) {
    return { ok: false, text: error instanceof Error && error.message === "DASHBOARD_PUBLICATION_TOO_LARGE"
      ? "The publication file, including metadata and base64, exceeds 1 MB. Reduce the sources."
      : "The publication file does not match dashboard format v1." }
  }
  return { ok: true, control: saved.control, publication: { content, sourceHash: createHash("sha256").update(content).digest("hex") }, build: { hash: build.hash, dir: build.dir } }
}

export function embeddedValues(sample: { rows: readonly (readonly unknown[])[] }, files: Buffer[]) {
  const values = new Set(sample.rows.flat().filter(cell => cell != null).map(String))
  return [...values].filter(value => [...value].length >= 6 && files.some(file => file.includes(value)))
}

export async function finishPublish(input: Pick<Prepared, "publication" | "control"> & {
  work: string
  signal?: AbortSignal
  expected: PublicationVersion | null
  timeoutMs?: number
  publish: (request: { origin: string; binding: ControlBinding["binding"]; content: string; expected: PublicationVersion | null }, signal?: AbortSignal) => Promise<PublicationWrite>
}) {
  input.signal?.throwIfAborted()
  const result = Schema.decodeUnknownOption(PublicationWrite, { onExcessProperty: "error" })(await input.publish({
    origin: input.control.origin, binding: input.control.binding, content: input.publication.content, expected: input.expected,
  }, input.signal))
  if (Option.isNone(result)) throw Error("DASHBOARD_WRITE_UNKNOWN")
  if (result.value.status === "changed") return {
    status: "needs-confirmation" as const, text: "The version on the stand changed. Publication did not start; confirm the local draft again.",
  }
  if (result.value.version.sourceHash !== input.publication.sourceHash) throw Error("DASHBOARD_WRITE_UNKNOWN")
  const version = result.value.version
  let baseWarning = ""
  try { updatePublicationBase(input.work, input.control, version) } catch { baseWarning = " Could not save the local draft base." }
  const deadline = Date.now() + (input.timeoutMs ?? 120_000)
  while (Date.now() < deadline) {
    input.signal?.throwIfAborted()
    try {
      const response = await fetch(input.control.origin + "/dashboard/lookup", {
        method: "POST", headers: { "content-type": "application/json" }, redirect: "error",
        body: JSON.stringify({ ...input.control.binding, publication: version.name }),
        signal: AbortSignal.any([AbortSignal.timeout(Math.max(1, deadline - Date.now())), ...(input.signal ? [input.signal] : [])]),
      })
      const decoded = Schema.decodeUnknownOption(LookupResponse)(await response.json())
      if (response.ok && Option.isSome(decoded)) {
        const own = decoded.value.publication
        if (own?.name === version.name && own.sourceHash === version.sourceHash) {
          if (own.status === "failed") return { status: "failed" as const, version, text: "The stand build failed.\n" + own.error + baseWarning }
          if (own.status === "ready" && own.buildHash) {
            let cleanup = ""
            try { removePublishedSample(input.work, input.control.snapshotId) } catch { cleanup = " Could not delete the local sample." }
            return { status: "published" as const, version,
              text: "Dashboard is published. In Studio with auto-refresh, the new version appears in the open window. If the window is closed or an older shell is in use, open Dashboard on the node." +
                (decoded.value.currentVersion?.name !== version.name ? " A newer version is already active on the stand." : "") + baseWarning + cleanup,
            }
          }
        }
      }
    } catch {
      input.signal?.throwIfAborted()
    }
    if (Date.now() < deadline) await setTimeout(Math.min(3000, deadline - Date.now()), undefined, { signal: input.signal })
  }
  return {
    status: "pending" as const, version,
    text: "The sources were sent to Megaladata. The stand build is not confirmed ready yet." + baseWarning,
  }
}
