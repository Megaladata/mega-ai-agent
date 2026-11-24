# Text file (`exports.text`)

<!-- mode: delimited fixed_width -->
`dock_node_apply`, `type:"exports.text"`: CSV is `mode:"delimited"`; fixed width is
`mode:"fixed_width"` (widths from the content and headers, text on the left, numbers on the right,
a space between fields; no Calculator or JS; no manual widths, numeric precision, or delimiter).
`destination` is .csv/.tsv/.txt; `mappings:[]`. The default encoding is UTF-8; also
`encoding:"Windows-1252"`, `"UTF-16 LE"`, `"UTF-16 BE"`; `"Windows-1251"` only
when the user explicitly asks. BOM is `bom:true/false` (Megaladata 7.4.2 ignores BOM
for CP1251: `bom:false`); CRLF is `line_ending:"CRLF"`.
Characters outside CP1251 are replaced by the byte `0x1A` (SUB): warn the user about that loss.
ISO: `date_format:"yyyy/mm/dd",date_separator:"-",time_format:"hh:mm:ss",time_separator:":"`.
On refusal fix only the rejected value; keep other requested settings. Check readback.

If the exported data contains NULL and empty strings and the user did not set an export marker,
pass a nonempty `null_marker` explicitly,
one that does not match any non-NULL value. By default choose the same nonempty marker as the import
when one was set; otherwise `NULL`. Tell the user which marker you chose.

A new export needs destination in the assigned folder. An ordinary CSV: UTF-8, comma,
header=names, bom=false, LF, decimal point, empty NULL, double quote. An existing
node receives only the requested changes. Both Done and Execute check a path conflict; replacing
the file requires `overwrite=replace` with an explicit destination and the user's permission, otherwise
report the conflict. In a continuation, do not return the old destination unless the task requires it.

`inputs[0].source` is the `node_id` and output whose successful result produced the requested outcome
(rows, schema, and aggregates checked); a matching field or file name is not enough. For counts
and sums by group, use the Grouping summary, not the Calculator detail.
Before Execute, read the input table and compare column names and order with the task; fix a mismatch
with Reform or Field Parameters before the Export is first connected (apply does not change a taken link),
reread, and check `configuration.readback.input_mapping.fields`.
In a continuation, reuse the Export when the outcome still comes from the previous source: `target.kind=existing`,
the exact `target.ref`, `inputs:[]`, a new `operation_id`; changing only the file does not require a new Export.
If the outcome needs a new node above the Export and the task names a different destination, create
a new Export from that node into that file; leave the previous one alone. Otherwise fix the previous upstream chain in place or report the limit; do not create a second Export to the same destination.
After a `mappings` refusal, fix upstream and repeat the same Export with `mappings:[]`. Change column
order only when the task requires it; if the saved input mapping cannot produce
the required layout, report the limit.

A file name from a variable: instead of `destination`, pass
`file_name_variable:{kind:"variable",name:"ReportFile"}`. The source is an executed
Variable Calculator whose string ReportFile is the full path in the export folder, for example
`"<folder>/report-" + ReportDate + ".csv"` (write the input variable without `Var.`). Connect `variable_inputs:[{source:<its ref>,output:0,input:0,kind:"variables"}]`.
For a new date, change and execute the same Calculator, then the same Export
(`target.kind=existing`, `parameters:{}`): the binding is kept, the file is written to the new
path, and the previous file remains. Do not create a second Export and do not substitute a path literal.
NULL, an empty value, `%Name%`, and a path outside the folder are refused before writing; readback
`file_name_variable` and `destination` confirm the binding and the path.

Execute returns `output.file_artifacts` with the file size and SHA-256; there are no data ports:
`read:{ports:[]}`. Compare the destination and format with the task; Done and Close do not confirm the file.
Do not download the result again through the server source cache; save the package and report the result.
<!-- /mode -->
