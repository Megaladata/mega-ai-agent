# Parallel evals status

There is no technical blocker on the end-to-end path. N1 and N2 J5IglH are accepted: exit 0,
resources/limits PASS, three cleanups confirmed, both slots closed, nothing left behind.
N2 quality is reported as it was: calc0 (no_artifact), filter100, group100.
Removal of unused code is finished; every required check passed.
Results are in the [completed plan](docs/superpowers/plans/2026-10-16-evals-parallel.md).

The [contract](evals/docs/parallel-users-contract.md) is normative, in particular
sections 20/24/26/33. Commands are in the [runbook](docs/testing/mega-ai-agent/parallel-evals.md).
Closed refusals and the original evidence are kept in the
[history](docs/archive/2026-10-16-evals-parallel-history.md).

Older stands and incidents, including A00yuH, are kept according to the
[single list](docs/testing/mega-ai-agent/2026-10-16-evals-parallel-retained.md).
Deleting them is a separate owner decision. Known limit after a crash:
`SESSION_NOT_IDLE` for a new admin leaves the slot in quarantine; the action is contract section 24.

The current CLI 0.2.2 check and the analytic batch are a [separate plan](docs/superpowers/plans/2026-10-19-analytic10-cli022.md).
A startup limit was found before the measurements: if an early verify never reaches a
prepared slot, the missing management cleanup proof keeps its reservation held.
In this preparation both slots were checked and cleared through separate existing
APIs under the original guards; the unsuccessful receipt was kept.
This series does not confirm automatic recovery of that case.
