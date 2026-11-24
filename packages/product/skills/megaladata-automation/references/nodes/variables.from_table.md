# Table to variables

<!-- mode: aggregate -->
For aggregates of the current table into variables (sum, count, minimum,
maximum, average, median, mode, deviation, counts of unique values and missing values,
first, last, the only value, and a list), use `dock_node_apply`
with `type:"variables.from_table"`, `mode:"aggregate"`. The node receives the table
through `inputs:[{source:NodeRef,output:0,input:0}]` and creates the source
variable port 0. There is no table output and no training.
For a saved JavaScript source, use `finish:"execute"`:
the handler executes the linked source and reads its schema without opening
the editor. The source code and data are kept; changing them beforehand
or adding a bridge just to read is not required.
Pass the source NodeRef directly in `inputs`. To leave the source untouched,
do not open the wizard and do not call `dock_node_read` with `kind:"source"`/`kind:"context"`:
that is needed only when the request is to view or change the code, not to aggregate.

Complete configuration of the selected fields:
`parameters:{fields:[{field:{kind:"input_field",name:"N"},aggregations:["median","mode","standard_deviation","unique_count","null_count","first","last","only","concat"]}]}`.
Take the exact technical name from the input schema that was read. The `fields` order
sets the order of result blocks: list the fields in the required order.
Inside a field, the native function order is:
sum,count,min,max,avg,median,mode,standard_deviation,unique_count,null_count,first,last,only,concat.
When changing the configuration, specify the whole set of selected fields and functions.

| Input type | Allowed functions |
|---|---|
| integer/real | all 14 |
| string | count,min,max,mode,unique_count,null_count,first,last,only,concat |
| boolean/datetime/Variant | count,min,max,mode,unique_count,null_count,first,last,only |

Variant is kept in min/max/mode/first/last/only. Read `cell_type` and
`native` of the exact W1 output; a JS number does not prove the subtype. Count/unique_count/
null_count on Variant return integer. Do not add bridge nodes just to read.
Count counts every row, including NULL; unique_count counts distinct nonempty
values; null_count counts missing values. An empty string is a value, and false is not NULL.
Sum, avg, median, and standard_deviation (sample) have type real; count,
unique_count, and null_count are integer; min, max, mode, first, last, and only
keep the input type. Only returns the value when there is one distinct nonempty value,
otherwise a typed NULL. Concat is string: a comma, no wrapper,
unique values in order of appearance, NULL is skipped, and an empty string
is kept; other list settings are not supported. For example,
b,a,a,NULL,empty string → `b,a,`. On an empty table, count is zero,
and the other values are NULL.

One function keeps the field name (caption `<field>|<function>`), and several
receive native suffixes, for example X_Sum, N_Median, N_Std, S_Uniq, S_Concat.
Read the actual names and captions from the result; do not assign suffixes yourself.

For the complete variable set, pass `read:{ports:[],variable_ports:[0]}`.
Check the complete ordered set, names, captions, types, and exact values
in `output.variable_ports`; show dates with milliseconds and without a time
zone. For a new read of a successful operation, use `dock_node_read` with its
`source_operation_id`: this path executes the source node again. After the
CSV changes, keep the previous node and the set of aggregates: the existing `target`,
`parameters:{}`, `inputs:[]`, `mappings:[]`, `finish:"execute"`, then read
the variables. Save the package with the standard action `package.save_as` or
`package.save_checkpoint`.

A table Calculator computes row fields, and JavaScript sets code; a request
for aggregated variables, including over rows, dates, and logical
fields, goes to `variables.from_table`, not to Calculator or JavaScript.
<!-- /mode -->
