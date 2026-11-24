# Join tables by position

<!-- mode: positional -->
Use `transform.col_union_data`, mode `positional`, for two or three tables. Choose this node when the user joins records by position.
Request the type card through `dock_action_describe`. Input 0 is the main table,
input 1 is the first attached table, and the optional input 2 is the second. Rows are matched by position; input order matters.
Read every source before configuration. Output 0 keeps the fields of every input,
including fields with the same name. Read the real names; for the required order or renaming
set a complete output mapping with `autosync:false`. Do not guess a collision suffix.

`parameters.col_union.row_count`: `minimum`, `maximum`, or `input`.
For `input`, `determining_input:"main"`, `"attached"`, or `"third"` (when input 2 exists) is required.
If the second attached table sets the size, pass to `dock_node_apply`
`parameters:{col_union:{row_count:"input",determining_input:"third",padding:"null"}}`
when padding with missing values. Check these three values in `configuration.readback.settings`:
a matching table by itself does not confirm the selected determining input.
`padding`: `null` is missing values; `repeat` cycles the whole short set;
`last` is the last record. An empty set has nothing to repeat: its fields give NULL.
Existing NULL is kept; an empty string, 0, and false are separate values.

A new node requires exactly 2 or 3 sources on inputs 0,1 or 0,1,2 and explicit row_count/padding.
On an existing node, a run with `parameters:{}` and `inputs:[]` keeps the settings, every link, and the mapping.
Check the compact readback: mode, size rule, padding, the selected
input, every actual link, and the output mapping. Execute recomputes the current
inputs without training. Read every row of output 0, then save the package.
For an intermediate result use `dock_node_read`; create `exports.text`
for a CSV the user named explicitly.
Variables, empty cases of three inputs, and apply are not supported.
<!-- /mode -->
