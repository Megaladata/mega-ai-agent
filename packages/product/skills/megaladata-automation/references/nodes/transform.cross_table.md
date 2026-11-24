# Cross-table (`transform.cross_table`)

<!-- mode: pivot -->
Aggregates: transform.cross_table, mode:pivot. Without columns:
columns:[], row_keys, facts with functions, category_mode:fixed,
include_null:false, include_other:false. Columns are discrete;
row keys are discrete string/integer/real/boolean/datetime or continuous
integer/real. Continuous and discrete keys combine in fixed and sliding.
Do not round real keys; 0 and −0 are equal, and NULL is a separate group.
Reconfiguration: complete row_keys, column/columns, facts, category_mode,
and an explicit input 0. Compare configuration.readback.

Numbers: sum/count/min/max/avg/stddev/sum_squares/unique_count/null_count/first/last.
String, Boolean, Variant: count/min/max/unique_count/null_count/first/last.
DateTime: the same plus avg/stddev.
sum integer → real; counters → integer; min/max/first/last keep the type,
and Variant keeps the subtype. avg → real or DateTime; stddev → real, and for dates it is in days.
Count includes NULL, and unique_count excludes NULL. All-NULL: counters n/0/n,
and the rest NULL. No intersection means every value is NULL, including Count.
First/Last respect order and NULL. Variant Min includes NULL, and a scalar Min does not.
Stddev is the sample standard deviation; one nonempty value → 0.

After Done or inspecting the wizard, the output is deactivated: before the next node or export,
execute and read the same Cross-table again through megaladata_dock_node_read,
using the source_operation_id of the latest successful configuration with finish=execute.
If there has been no Execute yet, apply the existing node with parameters:{} and finish=execute.
After the source changes, read the same node with the original source_operation_id:
sliding updates the schema and the category/fact/function-to-field mapping without
reconfiguration; fixed keeps the initial composition. min_values reserves columns,
and limit restricts the count. limit/unique_names/separator: local_variables and bindings;
change the values on the same node. Renaming, order, and output autosync are
finish=execute. Required sources cannot be excluded; use a downstream
transform.reform_columns. After a refusal, fix the request with a new operation_id.

An exact full read: read.coverage="full", require_exact_numbers:true. Limits:
50 rows, 8 fields, 1 MiB. It needs its own completed static chain import→CrossTable
or import→Collapse→CrossTable, confirmed source bytes, and an unchanged
schema, topology, and execution. Readonly protocol 321, subtype, and native DateTime are checked.
A Variant string does not prove the value. For wide scalar reports, do not use coverage="full":
read:{ports:[0],sample_rows:100,require_exact_numbers:true}; check sample_complete
and the whole schema. After a full refusal, do not bypass it with an ordinary Variant read.
<!-- /mode -->
