# Live-model skill checks

Run `bun script/skills-acceptance.ts` from `packages/megaladata-host`.
The corpus is `packages/opencode/test/cli/package-docs-routing/cases.json`.
Results, profiles, containers, and working directories belong to this run.
The user's launcher and profiles are not changed.

```bash
bun script/skills-acceptance.ts \
  --interface run \
  --artifact /absolute/verified-cli-payload \
  --cli-image '<installed-seed-image>' \
  --output /absolute/new-results-directory \
  --model provider/model \
  --variant medium \
  --models-path /absolute/frozen-models.json \
  --cases docs-missing-file,docs-no-input,docs-current-server-package \
  --repeat 3
```

For Desktop, pass `--interface desktop --artifact /absolute/desktop-dist`
without `--cli-image`. Linux x64, `xvfb-run`, and `strace` are required; the CLI also needs Docker.
`--headless` selects the browser mode; the default mode has a window.
Desktop uses a real backend AppImage under an isolated Electron;
that is separate from the installed DEB and the distribution matrix.

Secrets are passed only through stdin JSON:
`{ "apiKey": "<Help key>", "auth": { "type": "api", "key": "<provider key>" } }`.
For an existing OAuth session, pass this instead of API auth:
`{ "type": "oauth", "access": "<access>", "refresh": "<refresh>", "expires": <milliseconds>, "accountId": "<optional account>" }`.
Authorization is copied only into this run's own profile; access and refresh
are included in the check that results contain no secrets.
Supply them from a private source of your own; do not put keys in argv,
the environment, git, or shell history. The connection is checked explicitly before
the model turn: Help is available with the key, and web login is intentionally not configured.
Ordinary unconfigured cases run without a Megaladata setup.

`--variant` is passed to the real CLI/HTTP prompt and recorded in the results;
without it, the model's standard level is used. `--models-path` takes
an unchanged catalog JSON by absolute path, saves a copy, and records SHA256.
Without it, the catalog of the build under test is used. Background catalog refresh
is disabled in both interfaces. For the current OpenAI runs use
`--model openai/gpt-6.1-sol --variant medium` and one catalog snapshot.
Comparing with earlier models does not replace a repeat of the required matrix.

The CLI seed image must contain a full installed Linux build under
`/home/tester/.local/share/mega-ai-agent-cli/<version>-<channel>`, the user
`tester`, `/usr/bin/strace`, and an empty profile. First use the normal
installer in its own build stage. Copy the installed tree into the final
stage without `--chown`, keeping the root-owned `chrome-sandbox` at mode `4755`.
Do not put credentials or a user profile in the image. The adapter
compares the installed manifest with the full checked payload and starts an
immutable image ID. Each repeat gets a new container and profile.

The script saves a snapshot of the corpus, fixtures, and its own code, versions and hashes,
skill activation/digest, tool calls, the original and final `.mgp` SHA, documents,
`strace`, and PID/start-time observations. In Desktop an asynchronous prompt can
save intermediate messages; unexpected permissions for external paths
are rejected only in that session and recorded. That check does not replace
the check of ordinary path approval in a separate permission case.

The CLI may finish a negative case with exit 1 after a recorded error
reading a missing file. The adapter keeps that code and every tool error;
that is not a finished report. The final request to provide a file must be
checked by hand, as must the contents of every document. `summary.json`
contains **only the mechanical result**. Open PDF/Word, review
every page, and match the facts to the fixture and the Help that was read. For Markdown,
read the whole text. A successful run with wrong facts does not pass acceptance.

All 20 corpus cases are implemented for CLI and Desktop, including 14 single-turn
docs/default cases. An adapter does not mean the live matrix is accepted.
The CLI also checks an external text path without `--file`: expect
an access refusal, a hint to attach the package with `--file`, and no report.
Check the hint by hand in the actual refusal error or the final answer;
text in the loaded skill is not enough. For an external Desktop path the adapter
opens its own GUI session and chooses "Allow once" only for
a request to read its own source file or that file's external directory. Other requests
are rejected; the requests, decisions, and permission-prompt screenshots are kept.
A positive result requires a PDF and an actual permission request.
CLI and Desktop each have one scenario case, `scenario-create`. Pass
`--cases scenario-create --headless --package-container <own-test-server>`
and, through private stdin, also
`"connection": { "url": "http://localhost/app/", "username": "<account>", "password": "<password>" }`.
This adapter allows only `localhost`/`127.0.0.1`; a remote
endpoint is rejected before the container and the model start. The connection check
must confirm web login. The scenario CLI receives
the source CSV through a real `--file`; Desktop receives the original file part of its session. Scenario turns use `--auto`
in their own isolated profile. Docs and permission refusals do not get `--auto`.
Package names are pinned to output/case/attempt in the test account's directory.
The adapter reads only that `.mgp` through `docker cp` from
`/workdir/UserStorage/<account>/<own-name>.mgp`; it does not change the server or its files.
It checks activation/digest, the source CSV hash, grouping settings,
execution, and the read values Alpha=35, Beta=20, a confirmed save,
node GUIDs, and their link in the actual ZIP/XML. A model scenario turn
is allowed 20 minutes; an original deadline failure is stored separately. The terminal
receipt, the final answer, and process observations are written before assertions,
so a build failure stays available for review. `built.mgp`, the structure, and
`package-proof.json` stay in the evidence. A cold rerun
is marked separately as not verified; the model answer also needs review.

Before deleting its own profile, both adapters copy only the internal
`execution-events.jsonl` files into `internal-journals/`, with the original relative
paths, size, and SHA256 in `internal-journals.json`. That keeps the internal
step receipt on failure without changing runtime or recovery. Auth and the browser profile
are not copied; a profile/journal symlink or a known raw secret fails the run.
An empty journal list is allowed for a case that does not create a browser runtime.

The transitions `docs-after-build`, `scenario-then-docs`, and `scenario-after-docs` are included.
Each turn gets its own receipts/messages, keeps the same Session ID,
and counts only new tool calls and documents. Build → docs attaches
the package that was actually saved: Desktop copies its exact server path,
and the CLI passes it through the parent/container bridge without giving the model Docker access.
The attachment hash is compared with the physical package after the turn finishes. Docs → build
keeps the original document and expects no new reports on the second
turn. A docs turn does not call browser tools and does not start a new Chromium;
Desktop may still have the browser from the finished build turn until the shared cleanup.
Adapter support and its preflight do not replace live acceptance of each transition.

`scenario-modify` and `scenario-execute-save` first create their own import
package, then use its server path on a new turn of the same session.
The CSV is attached only to the first turn. The second turn requires the original GUID
and confirmed numeric accuracy and a save after execution: rows
Alpha/10, Beta/20, Alpha/25; for the calculator also amount_double=20/40/50.
The calculator schema and link are checked in the physical package. A preparatory
import whose accuracy is not confirmed records a limit, not proof of
exact numbers. A fake calculator boundary is used only in a unit fixture;
it does not replace a live result.

`cold.mjs` is a separate acceptance reader for a saved SUM package. It
checks ownership of the exact path, opens the package in a new session, compares GUIDs,
executes without configuring again, reads the exact 35/20, closes the package, and
logs out. PASS is recorded after Chromium has exited and the PID/start-time check.
Input is private JSON on stdin; resources/output are absolute, localhost only,
and outputDigest/case/attempt select its own path. This reader is not shipped
and is not a model tool. A cold run of other schemas needs
a separate check; a warm proof does not change automatically.

The full corpus
of 20 × 3, TUI, profile-transition commands, a second model smoke, and the installed
Linux matrix remain separate checks of the main plan.
This script does not edit the evals harness, the near-miss corpus, or the judge prompt.
