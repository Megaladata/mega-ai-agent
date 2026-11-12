# Linux CLI: host lost during import

## Original failure

Artifact `0.1.4-cli.202609180107`, evidence
`/tmp/megaladata-cli-owner-crash-dbItxD`: the Node host received SIGKILL after the import
running receipt and after durable recovery appeared. The CLI hung until the driver's
rescue SIGINT at 120 seconds; code 130 instead of 1 — **FAIL**. All 24 tracked
processes exited, recovery and the writer guard were kept, and a second login
failed with PROFILE_BUSY/code 3. This result is not a PASS.

## Cause and fix

The top entrypoint called exit only on the successful Promise branch.
On a cleanup error it set exitCode, but open process handles could keep the CLI alive.
stdout/stderr flush and exit now run after catch: both branches end the process, and a
failed cleanup still keeps the guard. The driver records deadlineExceeded separately
and refuses PASS after the rescue timer fires.

The regression test starts the real entrypoint with a holding interval and a child Node
fixture that fails on close. It checks code 1, no timeout, diagnostics, and the saved
guard. Test: PASS, 5 assertions. Typecheck of the agent and megaladata-host packages: PASS.

Independent real-process transport fixture: 3/3 PASS, 18 assertions. After SIGKILL a
pending call is rejected with MEGALADATA_HOST_CLOSED, close with
MEGALADATA_HOST_CLEANUP_FAILED, in 3–5 ms. This checks transport without Megaladata.

## Repeat live run

Native binary candidate `0.1.4-cli.202609180130`:
`/tmp/megaladata-cli-host-exit-20260918/mega-ai-agent-cli-linux-x64/bin/mega-ai-agent-cli`.
Build and --version smoke: PASS. This check explicitly used the development bundle
`/tmp/megaladata-cli-native-staging-202609180107/resources/megaladata`.
It checks the new executable with the old unchanged runtime closure,
not a new full archive and not an installed artifact. It uses a scripted
model provider, real Chromium, and Megaladata. The result is recorded below.

Repeat live run: **PASS**, evidence
`/tmp/megaladata-cli-owner-crash-ndFZfU`, log
`/tmp/megaladata-cli-host-exit-live.log`: target host, SIGKILL, activeImport true,
code 1, deadlineExceeded false, trackedProcesses 24, alive [], guarded true,
retryCode 3, busy true. Recovery
`eb838949-9819-4153-9f10-7c71eb33bdff.json` was kept; acknowledgement/replay
did not run. The signal was sent after the running receipt and durable recovery;
the exact server phase is not atomic, and the business result is not claimed.

Full `standalone-status.test.ts`: 3 PASS, 89 assertions, 45.08 s.
Still open: full archive/installed acceptance of the fix, browser crash,
network loss, and a real model provider on native platforms.
