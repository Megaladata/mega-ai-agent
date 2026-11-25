#!/usr/bin/env bun

import { parseArgs } from "node:util"
import { readdir } from "node:fs/promises"
import path from "node:path"
import { $ } from "bun"

// Hashes the downloaded release assets, writes SHA256SUMS.txt next to them and renders the draft release notes.
const args = parseArgs({
  args: process.argv.slice(2),
  options: {
    tag: { type: "string" },
    channel: { type: "string" },
    assets: { type: "string" },
    output: { type: "string" },
  },
  strict: true,
}).values
if (!args.tag || !args.channel || !args.assets || !args.output)
  throw new Error("Required: --tag vX.Y.Z --channel prod|beta --assets <directory> --output <markdown>")

const version = args.tag.replace(/^v/, "")
const commit = (await $`git rev-parse --verify ${args.tag + "^{commit}"}`.text()).trim()
const previous = (
  await $`git describe --tags --abbrev=0 --match ${"v*"} --exclude ${args.tag} ${args.tag}`.nothrow().quiet().text()
).trim()
const range = previous ? `${previous}..${args.tag}` : args.tag
const changes = (await $`git log --no-merges --max-count=200 --format=${"- %h %s"} ${range}`.text()).trimEnd()

const dir = path.resolve(args.assets)
const files = (await readdir(dir, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name !== "SHA256SUMS.txt")
  .map((entry) => entry.name)
  .sort()
const hashes = new Map(
  await Promise.all(files.map(async (file) => [file, await sha256(path.join(dir, file))] as const)),
)
await Bun.write(path.join(dir, "SHA256SUMS.txt"), files.map((file) => `${hashes.get(file)}  ${file}\n`).join(""))

// Mega does not run the five-distro DEB install matrix. A complete passing report is recorded when one is attached.
const matrixStatus = linuxMatrixStatus(
  await report("linux-matrix.json"),
  hashes.get("mega-ai-agent-linux-amd64.deb"),
)
// Set by release.yml from the MEGALADATA_RELEASE_SKIP_MACOS repository variable when no macOS runner is available.
const withoutMacos = process.env.MEGALADATA_RELEASE_SKIP_MACOS === "true"
const manifests = ["release-manifest.json", "windows-release-manifest.json"]
if (!withoutMacos) manifests.push("macos-release-manifest.json")
for (const name of manifests) {
  const manifest = await report(name)
  if (manifest?.source?.commit !== commit || manifest?.source?.dirty !== false || manifest?.version !== version)
    throw new Error(`Release provenance mismatch: ${name}`)
  for (const artifact of manifest.artifacts) {
    if (hashes.get(artifact.file) !== artifact.sha256) throw new Error(`Release artifact mismatch: ${artifact.file}`)
  }
}
if (!withoutMacos)
  for (const name of ["macos-build-report.json", "macos-source-checks.json", "macos-offline-smoke.json"])
    if ((await report(name))?.status !== "PASS") throw new Error(`Passing report required: ${name}`)
// macOS rows are only built, and their reports only read, when this release builds macOS.
const macos: [file: string, status: string][] = withoutMacos
  ? []
  : [
      ["mega-ai-agent-mac-arm64.dmg", `${await staticStatus("static-dmg.json")}; offline smoke PASS; ad-hoc signed`],
      ["mega-ai-agent-mac-arm64.zip", `${await staticStatus("static-zip.json")}; offline smoke PASS; ad-hoc signed`],
      [
        `mega-ai-agent-cli-${version}-darwin-arm64.tar.gz`,
        "archive verification and offline smoke PASS; ad-hoc signed",
      ],
      [`mega-ai-agent-${version}-macos-source.tar.gz`, "macOS corresponding source"],
      ["macos-release-manifest.json", "macOS release manifest (ad-hoc signed app; not notarized)"],
      ...present([
        ["latest-mac.yml", "macOS update metadata"],
        ["mega-ai-agent-mac-arm64.zip.blockmap", "macOS differential update blockmap"],
      ]),
    ]
const expected: [file: string, status: string][] = [
  [
    "mega-ai-agent-linux-amd64.deb",
    matrixStatus ? `${await staticStatus("static-deb.json")} + ${matrixStatus}` : await staticStatus("static-deb.json"),
  ],
  [
    "mega-ai-agent-linux-x86_64.AppImage",
    matrixStatus
      ? `${await staticStatus("static-appimage.json")}; Docker matrix covers the DEB only`
      : await staticStatus("static-appimage.json"),
  ],
  [
    `mega-ai-agent-cli-${version}-linux-x64.tar.gz`,
    matrixStatus
      ? "static verify PASS (cli-manifest); Docker matrix covers the DEB only"
      : "static verify PASS (cli-manifest)",
  ],
  ["mega-ai-agent-win-x64.exe", `${await staticStatus("static-nsis.json")}; unsigned`],
  [`mega-ai-agent-cli-${version}-win32-x64.zip`, "archive manifest verification PASS; unsigned"],
  [`mega-ai-agent-${version}-source.tar.gz`, "source archive (git archive HEAD)"],
  [`mega-ai-agent-${version}-windows-source.tar.gz`, "Windows corresponding source"],
  ["release-manifest.json", "Linux release manifest (unsigned)"],
  ["windows-release-manifest.json", "Windows release manifest (unsigned)"],
  ...macos,
  ["static-deb.json", "static verification report"],
  ["static-appimage.json", "static verification report"],
  ...present([
    ["latest.yml", "Windows update metadata"],
    ["latest-linux.yml", "Linux update metadata"],
    ["mega-ai-agent-win-x64.exe.blockmap", "Windows differential update blockmap"],
    ["mega-ai-agent-linux-x86_64.AppImage.blockmap", "Linux differential update blockmap (also embedded in AppImage)"],
    ...(matrixStatus ? [["linux-matrix.json", "Docker matrix report"] as [string, string]] : []),
  ]),
]
for (const [file] of expected) if (!hashes.has(file)) throw new Error(`Required release asset missing: ${file}`)
const rows = [
  ...expected.map(([file, status]) => `| ${file} | ${hashes.get(file)} | ${status} |`),
  ...files
    .filter((file) => !expected.some(([name]) => name === file))
    .map((file) => `| ${file} | ${hashes.get(file)} | metadata |`),
  "| SHA256SUMS.txt | — | checksums of every asset above |",
]
// Human notes are script/release-notes/<tag>.md and are published above this generated block.
// Asset checksums below stay generated from this build.
const narrativeFile = Bun.file(path.join(import.meta.dir, "release-notes", `${args.tag}.md`))
if (!(await narrativeFile.exists())) throw new Error(`Release notes file is missing: script/release-notes/${args.tag}.md`)
const narrative = (await narrativeFile.text()).trim()
if (!narrative) throw new Error(`Release notes file is empty: script/release-notes/${args.tag}.md`)
const notes = [
  narrative,
  "",
  `# Mega AI Agent ${args.tag}`,
  "",
  `- Version: ${version}`,
  `- Channel: ${args.channel}`,
  `- Commit: ${commit}`,
  matrixStatus
    ? "- Linux x64 DEB/AppImage/CLI: static verification; DEB offline Docker matrix from this run (reports attached)"
    : "- Linux x64 DEB/AppImage/CLI: static verification. The Docker install matrix was not run for this release.",
  "- Windows x64: native CI build, settings regression tests, installer/payload and CLI archive verification",
  withoutMacos
    ? "- macOS: not built for this release (no macOS runner was available); macOS assets are not attached"
    : "- macOS 14+ Apple Silicon arm64: native CI build, source tests, DMG/ZIP verification and offline Desktop/CLI smoke",
  "- Pre-release: Linux/Windows unsigned; macOS own code ad-hoc signed, without Developer ID or notarization. OS security warnings are expected.",
  "- CI builds use no Megaladata account or LLM credentials and do not replace installed GUI, Keychain/DPAPI or live Megaladata/provider acceptance for this exact build.",
  "- Settings: saved-key indicator, Save closes after success, Check tests the current draft, Close/Escape confirm unsaved changes.",
  hashes.has("latest.yml")
    ? "- Desktop updates use signed GitHub Release metadata with a private cloud.ru S3 fallback using read-only SigV4 GET. Build-time endpoints remain disabled until signature acceptance on the exact source SHA; publication and mirror checks are required."
    : "- Update metadata was not published. The in-app update feed stays disabled for this release.",
  ...(version === "0.4.0"
    ? [
        "- Users of 0.3.9 or 0.3.10 on any platform must install 0.4.0 manually over the existing installation; these versions have their update feed disabled. Keep the existing profile; do not uninstall or delete application data first.",
        "- New (preview): node dashboards opened from Megaladata Studio in Desktop or CLI. The agent builds a local draft; publishing needs a separate confirmation and the Dashboard service for Megaladata Enterprise 7.4.2. The installed end-to-end dashboard flow was not verified for this release.",
        "- Recommended screen resolution: 1280×800 or higher. On smaller screens such as 1366×768, a node requested at an explicit position far outside the visible workflow may be refused; automatic placement works.",
        "- Known limitation: with a local OpenCode plugin configured and an npm registry that silently drops connections, a session can wait up to about 970 s before it continues.",
        ...(withoutMacos ? [] : ["- Known limitation: macOS automatic update (notify mode) was not verified on a live Mac for this release."]),
      ]
    : []),
  "- Desktop applies detected system proxy settings to its backend with a startup fallback; explicit proxy environment and Chromium/browser proxy handling remain supported.",
  "",
  "## Assets",
  "",
  "| Asset | SHA256 | Status |",
  "| --- | --- | --- |",
  ...rows,
  "",
  previous ? `## Changes since ${previous}` : "## Changes",
  "",
  changes || "- No commits",
  "",
].join("\n")
await Bun.write(args.output, notes)
console.log(notes)

function present(rows: [string, string][]) {
  return rows.filter(([file]) => hashes.has(file))
}

async function sha256(file: string) {
  const hasher = new Bun.CryptoHasher("sha256")
  for await (const chunk of Bun.file(file).stream()) hasher.update(chunk)
  return hasher.digest("hex")
}

async function report(name: string) {
  const file = Bun.file(path.join(dir, name))
  if (!(await file.exists())) return undefined
  return file.json()
}

function linuxMatrixStatus(
  matrix: { artifactHash?: string; reports?: { name: string; status: string }[] } | undefined,
  debHash: string | undefined,
) {
  const names = ["ubuntu22", "ubuntu24", "ubuntu26", "debian12", "debian13"]
  const reports = matrix?.reports ?? []
  const passed =
    !!matrix &&
    matrix.artifactHash === debHash &&
    reports.length === names.length &&
    names.every((name) => reports.some((entry) => entry.name === name && entry.status === "PASS"))
  if (!passed) return
  return `Docker matrix PASS (${reports.map((entry) => entry.name).join(", ")})`
}

async function staticStatus(name: string) {
  const result = await report(name)
  if (result?.status === "PASS") return "static verify PASS"
  throw new Error(`Passing static report required: ${name}`)
}
