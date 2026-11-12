# Mega AI Agent Windows implementation plan

## Goal and how to keep the plan

Produce debugged native Desktop and standalone CLI builds for Windows 11 x64: an EXE installer and a ZIP archive.

Mark `[x]` only after the item is done and checked. Next to a finished stage, add the date, commit, and a short check result. Blocked items stay `[ ]` with the reason. Do not write secrets into the plan, the repository, or reports.

Decisions:

- Desktop and CLI use independent backend v1 processes and profiles.
- End-to-end checks use the existing Dock connection and the `logi-test-plan.bg.local` stand. The Windows model check uses **Xiaomi Token Plan**, endpoint `https://token-plan-sgp.xiaomimimo.com/v1`: discovery was checked for `mimo-v2.5`, and real Megaladata tool calls for `mimo-v2.5-pro`. The token is passed only through a temporary environment variable and is not stored in the repository, the plan, or reports.
- Testing uses separate profiles and test packages.
- The stage result is local unsigned builds.
- Publishing, code signing, auto-update, moving the server, Windows ARM64, and WSL are excluded.

## Stage 0. Study and agreement

- [x] Study branch `megaladata`, commit `697cc2e5addff232f2faeb9be8c4790100995f18`.
- [x] Read the main module instructions and the Linux reports.
- [x] Identify the existing Windows implementations and the gaps.
- [x] Check the OS, the available tools, and network access to the stand.
- [x] Agree Desktop + CLI, local builds, and the Xiaomi Token Plan check.
- [x] Save this plan as `WINDOWS_IMPLEMENTATION_PLAN.md`.

Found: the build does not call `copy-icons.ts`; Desktop manifests are limited to Linux/ELF; some test drivers depend on `/proc` and X11; the CLI rejects the system-proxy exceptions used on this computer.

**Stage result — 2026-09-18:** remote sources of commit `697cc2e5addff232f2faeb9be8c4790100995f18` were studied; Windows 11 x64 and the Megaladata page (HTTP 200) were confirmed. The Dock endpoint answers HTTP 401 without authorization; saved credentials have not been checked yet. The plan is saved locally. The build and native acceptance have not been run yet.

## Stage 1. Working environment

- [x] Get the repository into the current folder, keeping the plan file. For a non-empty folder, use `git init`, add the remote, and fetch the required branch.
- [x] Create branch `windows-native` from the studied commit.
- [x] Prepare Node 24.19.0 and Bun 1.3.14 separately from the existing installations.
- [x] Set up the build environment without a permanent change to the user PATH.
- [x] Install workspace dependencies from the pinned lockfile.
- [x] Prepare Windows Chromium and check the pinned checksums.
- [x] Create separate directories for builds, test profiles, and diagnostic material.
- [x] Confirm that the existing Dock credentials work, without printing secrets.

Interim result 2026-09-18, commit `697cc2e5addff232f2faeb9be8c4790100995f18`: portable Node/Bun and Chromium were checked by SHA256, and the relevant workspace filter was installed without changing the lockfile. The first full install stopped on a temporary integrity mismatch of remote `@solidjs/start`; a repeat `bun 1.3.14 install --frozen-lockfile` on 2026-09-19 finished successfully without changing the lockfile.

**Ready:** the tools start, dependencies are installed, and the source resources are checked.

## Stage 2. Native Desktop and CLI build

- [x] Add a PowerShell build script that selects Desktop, CLI, or both, with an explicit output directory.
- [x] Restore copying of the existing brand icons.
- [x] Fix the Desktop preparation commands that did not run.
- [x] Fix Windows paths, `.exe` extensions, and launching helper processes.
- [x] Check that the required native dependencies are included.
- [x] Build Desktop with bundled Node, Playwright, and Chromium.
- [x] Build the standalone CLI with a bundled runtime.
- [x] Produce the user NSIS Desktop installer.
- [x] Produce the CLI ZIP with `install.cmd` and `uninstall.cmd`.
- [x] Repeat the build from a clean checkout with no untracked local files.

**Ready:** both products build with one documented procedure; launch does not need to download a runtime.

## Stage 3. Windows integration and network

### Profiles and secrets

- [x] Check that Desktop/CLI profiles and application channels are separate.
- [x] Check Electron safeStorage for Desktop.
- [x] Check DPAPI CurrentUser for the CLI.
- [x] Check saving and reading secrets after a restart.
- [x] Check refusal on damaged data or unavailable protection, with no plaintext fallback.
- [x] Check the CLI profile ACL and the lock against simultaneous access.

### System proxy

- [x] Connect reading of the user Windows proxy settings to both products before the backend/runtime starts.
- [x] Implement a shared choice of a direct connection or a proxy for a URL.
- [x] Support separate HTTP/HTTPS proxies, domain and IP patterns, `<local>`, and loopback.
- [x] Connect routing to the HTTP, fetch, and WebSocket calls used by Node/Bun.
- [x] Check internal Megaladata, external Dock, Xiaomi Token Plan, and the OAuth callback in one installed run: installed Desktop completed the OAuth flow and a real `megaladata_dock_prepare` through `mimo-v2.5-pro`, tool state `completed`.
- [x] Return an explicit error for unsupported modes; do not change the computer's system settings.

### Lifecycle

- [x] Check a normal close through IPC and confirmation of cleanup.
- [x] Check Ctrl+C and a repeated CLI interrupt.
- [x] Check loss of the parent process and runtime/Chromium crashes: three Windows taskkill scenarios finished with no live children.
- [x] Limit forced cleanup to the processes of that specific run.
- [x] Keep the lock and recovery state when cleanup is not confirmed.

**Ready:** connections work in the current environment, secrets are protected, and uncertain operations are not retried automatically.

## Stage 4. Manifests and installation

- [x] Extend the Desktop manifest with target `win32-x64`, a per-user install, the NSIS artifact, and Windows paths.
- [x] Add a PE/AMD64 check and a check of the bundled resources.
- [x] Keep verification compatible with existing Linux manifests.
- [x] Check the CLI manifest after packaging, extraction, and installation.
- [x] Check rejection of damaged and incomplete artifacts.
- [x] Check CLI installation into `%LOCALAPPDATA%\Programs\mega-ai-agent-cli`.
- [x] Keep an explicit user step for adding the CLI to PATH.
- [x] Check refusal to remove a busy CLI and preservation of profiles on uninstall.
- [x] Record the source commit, dependency versions, and artifact SHA256.
- [x] Attach the matching sources, licenses, and notices.

**Ready:** the installed files match the manifests; uninstall does not touch user data.

## Stage 5. Automatic and end-to-end checks

- [x] Run the tests that cover the changes and `bun typecheck` from the package directories.
- [x] Add checks for Windows paths, the proxy, manifests, and process exit.
- [x] Move process and window observation to the Windows API: `Win32_Process` + `MainWindowHandle`. Headed Chromium smoke — PASS.
- [x] Check the interactive CLI through ConPTY.
- [x] Check paths with spaces and Cyrillic.
- [x] Check that the installed products start without Node/Bun/Python on PATH.
- [x] Check that the setup wizard opens on its own.
- [x] Complete Megaladata setup and restart Desktop/CLI: both installed products passed setup, restart, and a second profile read.
- [x] Check Xiaomi Token Plan without storing the token: discovery of `mimo-v2.5` was confirmed; real Megaladata tool calls in the CLI ran through `mimo-v2.5-pro`.
- [x] Run the CSV scenario through Desktop: results 55 and 101, save, and an independent reopen.
- [x] Repeat the CSV scenario through CLI `run`.
- [x] Repeat the CSV scenario through the TUI.
- [x] Confirm real Megaladata tool calls through Xiaomi Token Plan in Desktop and CLI: `mimo-v2.5-pro` made real Megaladata tool calls in both installed products; Desktop `megaladata_dock_prepare` finished with status `completed`.
- [x] Check the products running at the same time and both close orders.
- [x] Check cancellation, a network drop, a crash, and the following recovery: Ctrl+C through ConPTY, a network relay fault, `recoverable-error` and setup again until `ready`, plus parent/runtime/Chromium crash cleanup — PASS.
- [x] Check uninstall and reinstall while keeping profiles.

**Ready:** every required scenario passed on the installed artifacts with recorded hashes.

## Stage 6. Documentation and handoff

- [x] Add the Windows build and package tests to CI without publishing.
- [x] Update the outdated Windows instructions and the platform-readiness notes.
- [x] Describe environment setup, the build, installation, launch, and debugging.
- [x] Prepare a report: OS, commit, commands, results, SHA256, and remaining limits.
- [x] Separately note checks that were not run on a clean Windows or under another Windows user.
- [x] Hand off the Desktop EXE, the CLI ZIP, the sources, and the checksums.
- [x] Check that the handed-off material contains no secrets.
- [x] Update the final plan status.

## Progress log

### 2026-09-19 — clearer Megaladata settings, Desktop 0.1.5

- [x] Show a fixed mask and a label that a key is saved, without returning the secret to the renderer.
- [x] "Save and close": check the data, save, close the window, and show the result; on error, keep the entered draft.
- [x] "Check connection": check the current values without saving or closing.
- [x] Remove the permanent load-settings button; read the current state automatically without wiping the draft; a button refresh remains only for a version conflict.
- [x] Add a clear close by button and by the close control; also protect unsaved changes for Escape and a click outside the window.
- [x] Distinguish a successful apply from a deferred one; show a late error after the form closes.
- [x] Build and install Desktop 0.1.5.0 from product commit `30a22ff8905ff9f3d0b2dafe3605de17b23ffda2`, and check that the installed ASAR matches the packaged payload.
- [x] Checks: 19 app tests, 7 packaging tests, 4 package typechecks, 4371 resource files; packaged GUI and real Dock/Megaladata check/save/reopen through the installed application — PASS.
- Artifact SHA256: `9c003ea3a91fc20e2bb741ecc79573886b0b53a14d8dad2de3884fbf6116c9ca`. The CLI was not changed. Every GUI test used a separate profile.
- [Report, evidence, commands, and limits](docs/testing/mega-ai-agent/reports/2026-09-19-settings-ux/report.md). This is the target UI regression, not a repeat of the full Windows/Xiaomi/CSV acceptance below.

### 2026-09-18 — Stage 0

- Commit of the studied sources: `697cc2e5addff232f2faeb9be8c4790100995f18`.
- Done: studied the architecture and platform limits, agreed the scope, prepared and saved the plan.
- Checks: read the sources through the GitHub API; checked the OS and tools; DNS and HTTP checks of the stand; read the system proxy settings without changing them.
- Results: Windows 11 Pro x64, Node 22.23.2 installed; Bun was not found; the Megaladata page is reachable; Dock requires authorization; proxy-bypass rules incompatible with the current CLI were found.
- Artifact: `WINDOWS_IMPLEMENTATION_PLAN.md`. There are no executable builds yet.
- Blockers for starting development: none found. Dock access and ChatGPT authorization need a later check.
- Next step: stage 1 — get the repository and prepare the pinned build environment.

### 2026-09-18 — first Windows build candidate

- Base commit: `697cc2e5addff232f2faeb9be8c4790100995f18`; branch `windows-native`; the working tree still has uncommitted Windows changes.
- Environment: portable Node `24.19.0`, Bun `1.3.14`, Chromium `1243`; the permanent user `PATH` was not changed. The Node, Bun, and Chromium archives matched the expected SHA256.
- Desktop: `bun typecheck`, 7 targeted tests, and the production build — PASS. Packaged GUI smoke from an isolated profile — PASS: 4 wizard fields, empty secrets, default URL/username, no leftover processes.
- Desktop artifact: `C:\Users\vskar\AppData\Local\mega-ai-agent-build\outputs\script-smoke\desktop\mega-ai-agent-win-x64.exe`, 313274217 bytes, SHA256 `ee17c118db7aef38fee2ad65f32be2b941e0b0a44eb1cbfc1ab18f9e0cb26028`. The installer and payload are unsigned; the application inside is PE32+/AMD64. Resource manifest: `win32-x64`, 4371 files, Node/Chromium bundled.
- CLI: payload → ZIP → extract → manifest check — PASS. Native `--version`, install/launcher/uninstall from a path with spaces and Cyrillic without Node/Bun on `PATH`, profile preservation, busy-process refusal, reparse rejection, and DPAPI — PASS.
- CLI artifact: `C:\Users\vskar\AppData\Local\mega-ai-agent-build\outputs\cli-dev\mega-ai-agent-cli-0.0.0-dev-202609181843-win32-x64.zip`, 316244374 bytes, SHA256 `07e2ef1b0787d7006ab45cca4be82e15a43b2b598d0092781563810260b2e64f`.
- Code checks: `packages/megaladata-host` — 11 PASS/10 platform skip, typecheck PASS; `packages/agent` typecheck PASS and native Unicode ACL PASS; `packages/desktop` typecheck PASS and 7/7 targeted tests PASS; `git diff --check` PASS.
- Fixed: Windows checkout without the symlink privilege, CRLF-safe pinned hashes, CLI PE/resource validation, installer reparse/busy protection, Unicode profile paths, Desktop icon/prebuild paths, NSIS per-user x64 config, native application lookup, and a Windows-safe GUI evidence path.
- Blockers: a full workspace install stops on the integrity of remote `@solidjs/start`; the current system proxy bypass policy is still rejected by the CLI as `SYSTEM_PROXY_BYPASS_UNSUPPORTED`; Dock/ChatGPT/TUI/ConPTY/end-to-end CSV are not checked yet. `script/build-windows.ps1 -Product Desktop` passed, but a clean-checkout rebuild and a single `-Product Both` are still required.
- Next step: implement a supported Windows proxy-bypass parse, then repeat the Desktop/CLI build from a clean checkout and move to installed end-to-end checks.

### Template for the next entry

- Date:
- Stage:
- Commit:
- What was done:
- Commands and check results:
- Artifacts and SHA256:
- Blockers:
- Next step:

### 2026-09-19 — final Windows candidate

- Product commit: `17dc05a49ea3f1318c65f4e712116bd1a437b47f`; clean checkout (`sourceDirty: false`); portable Node `24.19.0`, Bun `1.3.14`, Electron `42.3.3`, Chromium revision `1243`.
- `script/build-windows.ps1 -Product Both -SkipInstall` — PASS. Desktop NSIS and the CLI ZIP were built from one snapshot; the CLI manifest reports `sourceDirty: false`; the static Desktop check confirmed `win32-x64`, PE/AMD64 Node and Chromium, and 4371 resource files.
- Installed Desktop: onboarding, DPAPI/safeStorage, sidecar, and the full CSV scenario — PASS. A = Alpha 35, Beta 20, total 55; B = Alpha 100, Beta 1, total 101; both packages were saved, closed, and opened independently by a new process without applying the settings again. Evidence root: `C:\Git\laa-desktop-temp\megaladata-linux-oracle-elvHdy`. A headless Megaladata runtime is allowed only by two test flags; ordinary Desktop stays headed.
- Installed CLI `run` and TUI through Windows ConPTY: the same 55/101, save, exit, and an independent cold read — PASS. Evidence roots: `%TEMP%\megaladata-linux-oracle-qKEMGa` and `%TEMP%\megaladata-linux-oracle-sGW7Wz`.
- Installed Desktop and CLI running together, and both close orders — PASS. Evidence root: `C:\Git\laa-desktop-temp\megaladata-desktop-cli-independence-aBlor3`.
- Windows process/window observer: headed Chromium smoke saw 1 visible window and 10 processes, and no windows remained after close — PASS. Forced termination of the parent, the managed runtime, and the root Chromium tracked 11/10/10 processes respectively; no live children remained after cleanup — PASS.
- Installed CLI network fault: a local relay dropped 16 active sockets; 20 tracked processes exited, the writer lock was released, and a new process saw `recoverable-error`. Setup again from the DPAPI profile restored the original endpoint and state `ready`, generation 2 — PASS. CLI cancellation through a real Ctrl+C/ConPTY and a later cold start had already passed.
- OAuth callback lifecycle on Windows: teardown no longer hangs on a keep-alive/probe connection, because active connections are closed; callback/provider tests 19/19 and `packages/agent` typecheck — PASS. A live installed OAuth against a local standards-compliant authorization server also passed completely.
- Installed Desktop OAuth + Xiaomi: the real sidecar completed protected-resource discovery, dynamic client registration, system authorize → loopback callback, token exchange, an authorized MCP connect, and `megaladata_dock_prepare` through `xiaomi-token-plan-sgp/mimo-v2.5-pro` with status `completed` — PASS. Evidence root: `%TEMP%\megaladata-installed-oauth-PsWsKS`.
- Removing the old CLI and installing the checked candidate kept the DPAPI profile. Final Desktop `0.1.4.0` and CLI `0.0.0-dev-202609190631` are installed; a repeat CLI uninstall/install returned `profilesPreserved: true`, and the launcher version smoke — PASS. The production delta of the final rebuild is only the Windows-safe OAuth callback teardown; the Megaladata runtime was not changed.
- Xiaomi Token Plan: endpoint `https://token-plan-sgp.xiaomimimo.com/v1`; discovery of `mimo-v2.5` and real Megaladata tool calls through `mimo-v2.5-pro` were confirmed. Installed Desktop and CLI both made real Megaladata calls; the full deterministic Desktop semantics were checked separately with a scripted provider through the same runtime. Tokens were used only in transit and were not written anywhere.
- The source archive, release manifest, CLI manifest, Electron/Chromium notices, Bun licenses/source metadata, and native third-party licenses are included and checked.
- Final artifacts of commit `17dc05a49`: Desktop EXE `5617c7794d5dbabfb0822aaebaecd1c25405d24cf497bf61247a1999467e7f99`; CLI ZIP `9e0da471d69c9c085fd743eac50905bcf82f746a3d90252b625609cf3834f6f9`; source archive `8ec49329af29103c0b06c9f05ec0fea7bfdb5543813538d9c7634acee662857e`; Desktop static verifier — PASS, 4371 resources.
- Full workspace install: `bun 1.3.14 install --frozen-lockfile` — PASS, lockfile unchanged; the earlier external integrity mismatch of `@solidjs/start` no longer reproduces.
- Result: `PASS` for the agreed scope of the local unsigned Windows candidate. Native build/package and the required installed Desktop/CLI acceptance scenarios, including OAuth and Xiaomi-driven Megaladata tool calls, are finished. A clean Windows 11 VM and another user are recorded as an unchecked environment; the update feed and signing are outside the scope.
