import { $ } from "bun"
import { buildPhase } from "./build-phase"
import { mkdtemp, mkdir, link, rm } from "node:fs/promises"
import { isAbsolute, join } from "node:path"

// Sign before resource staging inventories the helper. Stable identity identifies
// this test helper; ad-hoc signing does not guarantee Keychain access across updates.
export async function buildKeychain(output: string) {
  if (process.platform !== "darwin" || process.arch !== "arm64") throw Error("MEGALADATA_NATIVE_RESOURCES_UNAVAILABLE")
  if (!isAbsolute(output)) throw Error("MEGALADATA_ABSOLUTE_PATH_REQUIRED")
  await mkdir(output, { recursive: true })
  const work = await mkdtemp(join(output, ".keychain-build-"))
  try {
    await $`/usr/bin/clang -fobjc-arc -arch arm64 -mmacosx-version-min=14.0 -framework Foundation -framework Security ${join(import.meta.dir, "../native/keychain.m")} -o ${join(work, "megaladata-keychain")}`
    await buildPhase(
      "keychain-sign",
      () =>
        $`/usr/bin/codesign --force --sign - --timestamp=none --identifier com.mega.aiagent.cli.keychain ${join(work, "megaladata-keychain")}`,
    )
    await buildPhase("keychain-verify", () => $`/usr/bin/codesign --verify --strict ${join(work, "megaladata-keychain")}`)
    await buildPhase("keychain-link", () => link(join(work, "megaladata-keychain"), join(output, "megaladata-keychain")))
    return join(output, "megaladata-keychain")
  } finally {
    await buildPhase("keychain-cleanup", () => rm(work, { recursive: true, force: true }))
  }
}
if (import.meta.main) {
  if (!process.argv[2]) throw Error("Provide absolute helper output directory")
  await buildKeychain(process.argv[2])
}
