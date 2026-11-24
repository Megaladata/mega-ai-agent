# Excel file (`imports.excel`)

<!-- mode: xlsx -->
## XLSX mode: import from Excel

A source XLSX: `imports.excel`, `mode:"xlsx"`, verified `parameters.source` and
`excel.source_path`. `sheet_name` is the exact sheet name, including spaces and case;
without it, the first sheet is used, and with `source_switch` the previous one. `header_rows`: 1–1000;
`columns`: all 1–64 fields in the original order with `name`, `label`, `type`.
The name is an ASCII identifier; a different source header is `source_name`.
Fields to the right are reached by scrolling. Keep NULL.
Do not add Calculator or JavaScript for a range, Boolean, width, or a list.

Range: `excel.named_range:"SalesRange"` (the exact name, without `sheet_name`).
`extend_range:false` (default) uses its bounds; `true` uses its columns through the last
filled row. Set `header_rows`/`columns` of the range. When changing the extension,
use `existing`, the previous `node_id`, and the rest of the source and settings.
Export the first CSV before the change. Read the fresh output: a sheet scan does not prove
the range N. Do not replace it with the sheet.

Boolean: `columns` with `type:"boolean"`, `data_kind:"Discrete"` (default).
The native Logical type keeps `false`/`true`/`NULL`; `exports.text` with
`null_marker:"NULL"` distinguishes empty from false.

## Schema

`excel.auto_detect`: `none`="No", `new`="New only", `all`="All".
None keeps positions and types, new adds positions with type detection,
and all detects names and types again: AB→BC with none/new yields A,B, and with all yields B,C.
All forbids `columns`; new allows them to be absent. A new node needs `header_rows`.
Changing the file: the SAME `existing`, a new verified source,
`excel:{source_path,auto_detect}` without columns/header_rows/mappings keeps the rest.
One literal XLSX, without binding/source_switch. Execute/read [0]: new fields
appear when the node executes. Check `auto_detect`/`dynamic_schema` and the fresh types/CSV.

Profile: sheets and visibility, declared and observed dimensions, the date system,
formulas and cached values; the declared dimension does not prove N.
`megaladata_file_sample` keeps XLSX types and formats; deliver it as XLSX,
and put settings in `settings.excel`. No CSV conversion and no formula recalculation;
if there is no cache, ask for the source. `settings_complete=false`: the settings are not ready.
Empty rows are imported.

More than 12 columns or more than 10 header rows: complete `columns`/`header_rows`; data follows
the headers, and the name is their nonempty parts joined by `_` (in `source_name` or an allowed
`name`). Finish the continuation with `megaladata_file_profile`. Above 64 fields or 1000 header
rows (`anomalies`: "Excel runtime supports 1–64 columns"), report the limit and ask
for a region before `node_apply`: do not create the Import, do not convert the
workbook without consent, and save the requested package without this node.

`source_switch` ([full file](../large-files.md#switch-to-the-full-file)):
pass only `excel:{source_path:"<full workbook>",sheet_name:"<selected sheet>"}`,
without columns/header_rows/mappings. The sheet, headers, and empty-row policy must
match the exact XLSX pass. Excel still needs a separate import Execute;
check `full_import_verification` with expected/actual N and execution_id.

## File name from a variable

`binding_schema`: `/excel/source_path`; `variable_inputs`: `variables.user` 4 → Excel 0.
First execute `variables.to_table` from output 4. A fresh `dock_storage_source`
before EVERY Execute. A new node: storage goes in `parameters.source`, without `excel.source_path`.
Change only the variable, then the SAME node: exactly `parameters:{excel:{}}` (without source),
`bindings:[]`, empty inputs/mappings, including after Save/reopen. Check `configuration.bindings`.

## Several workbooks and a mask

Workbooks of one structure are ONE `imports.excel`, each with its own storage ref
(`dock_storage_list`): `source:{kind:"verified_sources",sources}`
in the order of `excel.source_paths` (2–16) or `excel.source_mask:"<directory>/a-*.xlsx"`
(`*` only in the name, refs of ALL matches). The sheet, `header_rows`, and `columns` are shared.
List to mask: `existing`, the same `node_id`, everything again. The default is
sequential; `parallel_processing:true`, `max_threads` from the schema, with no
guarantee of row order. Check `configuration.readback.source`.
<!-- /mode -->
