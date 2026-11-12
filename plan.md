# Mega AI Agent macOS build plan

Date: 2026-09-19.

## Goal and decisions

Prepare test Desktop and CLI builds for macOS 14+ Apple Silicon that can be reproduced locally and in GitHub Actions.

Results:

- Desktop: DMG and ZIP.
- CLI: TAR.GZ and an installation note.
- Manifests, checksums, a source archive, and a check report.

Use the `dev` channel, backend v1, and independent Desktop/CLI profiles. Sign our own code ad-hoc, without a Developer ID or notarization. Run the full scenarios on the current Mac with macOS 27; also build and smoke-test in CI on macOS 14.

Public publishing, auto-update, and full GUI acceptance on a clean macOS 14 are outside this stage.

## How to keep the plan

- Mark `[x]` only after the work and its check are done.
- A stage is complete when every required item in it is done.
- After each stage, update "Where to resume": result, evidence, limits, and the next step.
- Leave blocked items open and name the reason.
- Distinguish source checks, built-artifact checks, and installed-application checks.
- Do not store secrets or raw diagnostic logs in Git.

## Stage 1. Environment

- [x] Check the current instructions, the `megaladata` branch, and unfinished changes.
- [x] Create `macos-build` from the current `megaladata` state.
- [x] Prepare a separate environment with Bun 1.3.14 and Node 24.19.0 arm64, without replacing the user's tools.
- [x] Install workspace dependencies from the pinned lockfiles.
- [x] Prepare the pinned Chromium, Playwright, and MCP; use the existing macOS hashes.
- [x] Check that a full Node distribution with npm and a license is present, plus the resource architecture and Xcode Command Line Tools.
- [x] Run the source checks of the affected packages and record the existing failures.

**Stage result:** a ready native environment and a recorded starting point.

## Stage 2. Shared build process

- [x] Add one script for local and CI Desktop/CLI builds.
- [x] Accept the output directory and version; use the existing Node/Chromium location parameters.
- [x] Default to the `dev` channel and create a separate directory for each candidate without overwriting earlier ones.
- [x] Pass one version through `MEGA_AI_AGENT_VERSION` into the backend, CLI, Desktop metadata, and manifests.
- [x] Remove the current `0.1.0`/`0.1.4` version mismatch without changing tracked files during the build.
- [x] Use the existing shared staging for `darwin-arm64`, keeping framework symlinks and execute bits.
- [x] Record the commit, tool versions, and input-resource hashes.
- [x] Check that the final candidate is built from a clean recorded source state.

**Stage result:** one repeatable build procedure for both products.

## Stage 3. Desktop and CLI for macOS

- [x] Remove unused Desktop references to the missing `native/` directory.
- [x] Configure Desktop: arm64, minimum macOS 14.0, DMG and ZIP.
- [x] Add an explicit ad-hoc signature for our own code; disable notarization, DMG signing, and automatic certificate selection.
- [x] Keep the required Electron entitlements, using the settings of pinned electron-builder v26.
- [x] Leave bundled Node/Chromium out of re-signing, keeping their original signatures and hashes.
- [x] Sign our own CLI/Keychain binaries before writing the corresponding manifests.
- [x] Build the CLI with the existing macOS builder, including the Keychain helper, Node host, and installer.
- [x] Update the generated CLI instructions: requirements, install, PATH, removal, test status, and Keychain/quarantine limits.

**Stage result:** Desktop DMG/ZIP and a complete CLI TAR.GZ.

## Stage 4. Manifests and integrity

- [x] Extend the Desktop manifest for `darwin-arm64`, DMG/ZIP, ad-hoc signing, macOS paths, and protected secret storage.
- [x] Keep existing Linux manifests readable.
- [x] Add a static DMG check by mounting read-only, and a ZIP check by extracting.
- [x] Check Mach-O arm64, the minimum OS, the application ID, execute bits, signatures, and resources.
- [x] Support a safe framework-symlink check that rejects paths outside the artifact.
- [x] Check the final hashes after packaging.
- [x] Check the CLI after extraction, including permissions under `umask 077`.
- [x] Publish SHA256, manifests, and the source archive from the same commit.

**Stage result:** verifiable artifacts with a confirmed composition and origin.

## Stage 5. Platform behavior

- [x] Connect Desktop to the existing macOS system HTTP/HTTPS proxy adapter.
- [x] Check loopback bypass, system certificates, and explicit errors for unsupported proxy modes.
- [x] Make the backend, Host, and Chromium exit before a normal Desktop quit.
- [x] Keep macOS behavior: closing the last window leaves the app running, and Cmd+Q quits it.
- [x] Fix the GUI smoke test that currently always expects Linux plaintext storage.
- [x] Check Desktop safeStorage and the CLI Keychain: save, read back, profile isolation, and no secrets in the clear.
- [x] Check unavailable storage in an isolated test context with no plaintext fallback.
- [x] Check Keychain access after installing the helper and replacing the candidate.
- [x] Check the CLI installer, refusal to remove a busy payload, and preservation of profiles.

**Stage result:** the installed product uses macOS capabilities correctly.

## Stage 6. GitHub Actions

- [x] Add a macOS workflow with a manual run and a run on relevant push/PR changes.
- [x] Use a fixed `macos-14` arm64 runner and the pinned tools.
- [x] Call the shared build script with the same parameters as locally.
- [x] Run source checks, the build, archive checks, and standalone smoke tests.
- [x] Check that bundled Node/Chromium start, CLI `--help`/`--version` work, and Desktop starts without contacting Megaladata.
- [x] Upload archives, SHA256, manifests, and reports as Actions artifacts.
- [x] Use `--publish never`; do not pass Megaladata or model-provider secrets into CI.
- [x] Get a successful CI run and check the downloaded artifacts.

**Stage result:** a confirmed build and standalone launch on macOS 14.

## Stage 7. Local acceptance and documentation

- [x] Run package-local `bun typecheck` and the matching Desktop, Host, Product, and Agent tests.
- [x] Install Desktop from the DMG and the CLI from the full archive in an isolated test context.
- [x] Check Desktop launch through Finder and CLI launch from the installed location without Homebrew/PATH.
- [x] Check the first launch without downloading extra runtime components.
- [x] Complete onboarding, the connection check, and a real model reply.
- [x] Check attachments with spaces/Cyrillic, two isolated chats, and an independent CLI profile.
- [x] Run the CSV scenarios with results 55/101, save the packages, and confirm a cold reopen.
- [x] Check Desktop/CLI running together and both close orders.
- [x] Check cancellation, process loss, recovery persistence, and no leftover Chromium.
- [x] Check CLI install/uninstall and preservation of settings/history when the products are replaced.
- [x] Update the macOS runbook, the standalone CLI runbook, and the checkpoint.
- [x] Save a report with exact versions, commit, hashes, and separate macOS 14/27 results.
- [x] Record the remaining limits and check that every required plan item is done.

**Stage result:** accepted test builds and documentation for repeating the work.

## Done when

All seven stages are complete; local and CI builds succeed; the installed artifacts passed the planned scenarios; the results are saved in the documentation.

An ad-hoc build does not prove Gatekeeper trust or a seamless Keychain update. Developer ID, notarization, a public release, and auto-update need separate work.

## Where to resume

- **Status:** all seven stages are complete; the required checks are PASS.
- **Local candidate:** `0.1.4-macos.20260919.2`, clean commit `6650b6d017ce805eb4e6b2e250e612ac55856f16`; DMG/ZIP/CLI/source archive/manifest/SHA256 were published.
- **macOS 27:** source/build/static/offline, installed GUI/CLI, Finder/window/activate/Cmd+Q, Xiaomi reply, Unicode two-chat isolation, CSV 55/101 plus cold readback of both products, both close orders, crash/recovery/no orphan, upgrade settings/history — PASS.
- **macOS 14.8.9 arm64:** CI07 `35408357070`, candidate `0.1.4-macos.7` from `e1b2b57d9469957f04433d9a7b8eccf92d96ac21`: source/build/static/offline PASS. Downloaded SHA256/source commit, repeated DMG/ZIP checks, and CLI manifest/signatures — PASS.
- **Evidence:** [final report](docs/testing/mega-ai-agent/reports/2026-09-19-macos/report.md). Local candidate02 is in `~/.cache/megaladata-macos-build/candidate-02`, CI07 is in `~/.cache/megaladata-macos-build/ci-35408357070/megaladata-macos14-arm64-7/candidate`.
- **Changes:** recorded and pushed to `macos-build`; the sources of the checked candidates are kept in the archives.
- **Next action:** this plan has no remaining required work. A public release needs a separate decision and a Developer ID/notarization check.
- **Limits:** full macOS 14 GUI acceptance is not claimed; the native picker and the changed ad-hoc identity helper were not tested. CI offline uses a mock Keychain; real protected storage was checked on macOS 27. A single CLI hang in CI06 did not recur; the cause is unknown, and the diagnostics and watchdog were kept.
