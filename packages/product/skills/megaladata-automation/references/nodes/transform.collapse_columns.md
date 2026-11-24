# Collapse columns (`transform.collapse_columns`)

<!-- mode: unpivot -->
For a final Collapse with a full Variant output, separate the executing configuration from the exact read.
This is an explicit exception to the general ban on `megaladata_dock_node_read` after a calculation:
it applies only to a final Collapse with a Variant output.
First call `dock_node_apply` with `finish:"execute"` and
`read:{ports:[0],sample_rows:0,require_exact_numbers:false}`: get a successful
receipt and the schema of the same node. Then call `dock_node_read` with
the `source_operation_id` of that receipt and
`read:{ports:[0],sample_rows:50,require_exact_numbers:true}`.
This call executes the saved node again without changing the settings.
Take every row and cell type from `sample` only when `sample_complete:true`
and the row count equals `row_count`. When `sample_complete:false` or `row_count`
is greater than 50, tell the user the row count and that the full output was not read;
do not repeat the read. A zero sample in `dock_node_read` gives
only the schema, not a full read of the values.
Do not request a large sample and a full exact_table at the same time: the rows
are duplicated, and the reply may not fit the delivery budget.

For transform.collapse_columns used as an intermediate source in an extended
graph, finish="execute" with read:{ports:[0],sample_rows:0,
require_exact_numbers:false} is allowed; this executes the node without reading the intermediate table.
Do not call `dock_node_read` for such an intermediate Collapse.
An isolated native full read of Collapse does not read an arbitrary extended graph.

This is an unpivot of columns: each transposed field produces a row per record.
Use this node, not Calculator or JS, when a set of
columns must become Names/DisplayNames/Values/DataTypes rows. In `dock_node_apply`
(mode `unpivot`) set `information` and `transposed` — complete ordered
lists `{kind:"input_field",name}` by the effective input names, `ignore_empty`
explicitly, and a complete input/output mapping with every field and its order.

Variant is allowed in `transposed`: a Variant field, including the output of another
Collapse, can be transposed. Keep each cell's type, and do not turn
mixed values into strings. Variant input in `information` is not supported.
DataTypes describes the type of the input field: for Variant that is 6, even when
a particular cell contains integer or string. Do not treat that as the cell type.
Read the actual Values cell type with `read.require_exact_numbers:true`:
each value arrives together with `cell_type`.
ignore_empty excludes NULL; an empty string, false, and 0 remain values.
All-null and header-only keep the schema; with ignore_empty, zero
rows are possible. A complete input/output mapping must include every required field,
the order, and the source of Names/DisplayNames/Values/DataTypes. The full Variant reader
is limited to 50 rows and 8 fields; do not bypass an unproved origin
with a sample.
<!-- /mode -->
