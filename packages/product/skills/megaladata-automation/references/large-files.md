# Large files and server sources

Read this before the first action on a file when the calculation uses a large local
file, a source data file from Megaladata storage, or a switch from sample to the full
file. The common rules and prohibitions in [SKILL.md](../SKILL.md) apply here too.

## Full file before the sample

If the user explicitly asks to upload the full attached file first in order to prepare a server source, complete that delivery before creating a sample: `megaladata_file_admit` of the original path → `dock_artifact_deliver` → `dock_artifact_delivery_status` until `ready`. Use the confirmed `destination`; do not upload that full file again. After delivery, treat it as a server source by [the cycle below](#server-source).

## Large local file

To build a calculation on a large file — a path in the message, a Desktop attachment, or a CLI `--file` —
a local XLSX of any size, a CSV/TSV/TXT larger than 16 MiB, a CLI attachment by reference
(the CLI threshold is above 10 MiB), or a file of unknown size, inspect it first
through `megaladata_file_profile({path})`, instead of Read and instead of trying to deliver the whole file.
If the encoding, header, or dialect is ambiguous, clarify the settings; for a
wide table, read the continuation through. Obtain an exact pass (`megaladata_file_scan`).
For the scenario, create `megaladata_file_sample`, register the returned path through
`megaladata_file_admit`, and deliver only the sample. Take the import settings from the full
profile, and `source_path` from the confirmed sample delivery. Debug the scenario
on the sample. A sample does not check the whole dataset. Until the full source is delivered,
say directly: "the full calculation will run after the full file is uploaded". Do not present
a scenario or totals from the sample as the full calculation.

Then register the full file by its original path:
a file larger than 16 MiB is passed by a private reference, without bytes or base64 in IPC. Call
`megaladata_dock_artifact_deliver` once with a stable `operation_id`. That is the start;
wait for `upload_status: ready`, polling `megaladata_dock_artifact_delivery_status`
no more often than once every 5 seconds (the same ID). Progress contains bytes, percent, and time.
To cancel, call `megaladata_dock_artifact_delivery_cancel`, then status until `cancelled`
or `uncertain`. On `uncertain`, do not start a new upload and do not change the scenario.
After ready, switch the existing source to the confirmed destination
([switch](#switch-to-the-full-file)), run one calculation, and check
the full N and the business result. Then Save. Keep the sample check and
the full-file check separate.

## Server source

If the source file is already in the allowed Megaladata storage, do not upload it again.
Call `megaladata_dock_storage_source` with the exact `path` and a new `operation_id`,
and get `output.source.server_source_ref`.
If a folder or a mask is given without file names, do not pass it to `dock_storage_source`:
`megaladata_dock_storage_list({path:"folder", pattern:"*.csv"})` returns the files with their `server_source_ref`.
By default, for a server file of any size: native Megaladata autodetection
→ Execute → N and types from the completed port. Do not download the source.
Download to cache, a profile, and an exact scan are needed only when an exact check is requested,
when there is a contradiction (an Execute error or warning, or a clearly wrong type), or for
the local sample-to-full-file cycle; the [order](../SKILL.md#loading-data-for-a-calculation) is in the skill.
Honor an explicit ban on downloading or delivery even when there is a contradiction: report it,
and do not bypass the ban. Work natively; the report is: "types come from Megaladata autodetection;
rare values were not checked exactly". When an exact check is allowed,
a scan is not an Execute; keep the requirement of one calculation of the chain.
For the import, pass
`source:{kind:"storage",server_source_ref:"<the returned reference>"}` and the exact
`settings.source.source_path`. An arbitrary path or invented artifact or upload IDs
do not prove provenance. The wizard structure and preview have `coverage=preview`:
that is not a SHA, not the exact full N, and not a check of rare values. A truncated
preview (`columns_omitted>0`) does not require names from the user: import with
`auto_detect_columns:"new"` and without `columns`; read every name and type after Execute.

## Switch to the full file

For the sample-to-full-file cycle, first have the full local
source (or a checked server copy in the cache) and a successful `megaladata_file_scan` with no type errors.
Build and check the scenario on the
delivered sample, then save the package through `package.save_checkpoint` and remember its operation_id.
For a local source, then register the original full file through `megaladata_file_admit`, deliver
it by reference, and wait for `ready`. Before switching, find the delivered server path
through `megaladata_dock_storage_source`, so the native file identity is kept. Do not upload the full file again.
On an existing text or Excel import, use `source_switch` with `profile_id`
and `save_operation_id`; passing the number `expected_records` is forbidden. Before `source_switch`,
read the page of that import — [text](nodes/imports.text.md) or [Excel](nodes/imports.excel.md):
it specifies the `settings` and how the import runs during the switch.
Without a receipt or a digest link (including a storage preview),
the result is "N не сверено" with a reason; do not call that a successful check.
Autodetection must be "No"; do not
recreate the definitions and do not detect types again. In a local sample-to-full switch, the source is the checked delivery of the full file;
on the server, it is the original storage ref linked to the exact scan and the checked copy in the cache.
Do not press Detect types. Immediately before the single
Execute of the final node, call `megaladata_dock_storage_source` again for the full source.
If the check is missing or the source was replaced, the old result is not accepted.
Keep the cache until the calculation finishes. Confirm the full N by the count of source records
computed in the chain, not by the number of aggregated groups. The full N comes
from the completed import output port: sample_rows, visible rows, a capped
BufferedStore, and the group count do not replace it. Then check the business result of the full
scenario, the CSV, Save, and a cold open. A mismatched N, a conversion error, or an unfinished
calculation is FAIL. On timeout, inspect that same operation first; a repeated Execute
is forbidden.
