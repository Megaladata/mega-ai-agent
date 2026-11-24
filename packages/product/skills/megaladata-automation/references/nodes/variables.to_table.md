# Variables to table — into columns and into rows

<!-- mode: columns rows -->
To turn a set of variables into one table row, choose
`dock_node_apply`, `target.type:"variables.to_table"`, `mode:"columns"`,
`parameters:{}`. Each variable becomes a separate typed field
of table output 0. Names, captions, types, and order come from the source.

First find or open the variable source the user named in the current
workflow. Check the `variable_outputs` issued by the graph and use its NodeRef in
`variable_inputs:[{source:NodeRef,output:observed_number,input:0,kind:"variables"}]`,
with `inputs:[]`. Do not reconfigure a finished Variable Calculator: its type in the graph
may be the icon `bg-vendor-icon-calcvariables`, not the table Calculator type. Copy the output number from the observation:
Workflow Variables has several different outputs. A table or control port
does not replace a variable set. A ready fixture may be opened as the given package;
if the source is Workflow Variables, choose user port 4; its
snapshot is available through `dock_node_read` with `read.variable_ports:[4]`.

Values and formulas belong to the source. Do not create a table
Calculator or JavaScript with rewritten constants instead of the conversion. Do not pass
`variables`, `expressions`, `local_variables`, `bindings`, or `layout` in the parameters
of this node. To keep the source order, leave `mappings:[]`.

Use `finish:"execute"`, `read.ports:[0]`, a sufficient `sample_rows`, and
`require_exact_numbers:true`, then wait for that same operation to finish.
Check the whole row, names, captions, and types; NULL, an empty string, FALSE, and 0 are distinct.
A date is civil time to milliseconds, without adding a time zone.
Do not claim precision if the read did not confirm it.

`finish:"done"` applies the settings without proving a computed result;
`finish:"close"` cancels the draft. To read a finished node again,
use `dock_node_read` with its successful `source_operation_id`, not a new node.
Save the package with a separate `package.save_checkpoint` and check the save receipt.

For the list "name, caption, value", choose the same `dock_node_apply`,
`target.type:"variables.to_table"`, `mode:"rows"`, `parameters:{}`, `inputs:[]`,
and the explicit `variable_inputs` above. Output 0 contains `Name string`,
`DisplayName string`, `Value variant`: one row per variable in the source
order. Leave `mappings:[]` to keep these three fields.
Set `sample_rows` to at least the number of variables (up to 100),
`require_exact_numbers:true`; check the `cell_type` of each Value, including NULL,
and the exact civil date with milliseconds. Do not reduce Variant to text and
do not replace this mode with Calculator or JavaScript.

Nonempty source sets of integer, real, boolean, string,
datetime, and typed NULL are supported. Execute a saved node in its current mode.

A mode change and a source edit are done on the same node; a new converter
is not created. For "into rows" or back "into columns", call `dock_node_apply`,
`target:{kind:"existing",ref:NodeRef}`, `type:"variables.to_table"`, the needed
`mode`, `parameters:{}`, `mappings:[]`, the previous `variable_inputs`, and
`finish:"execute"`. The link and its ports remain; the node GUID does not change. If the
request contains `mappings` when the mode changes, it is refused before the change: the output
is recreated, so configure the mapping in a separate call. Change,
delete, or add a variable in the source itself (its node,
`target.kind:"existing"`), then execute the same converter again and
read output 0 completely: order, schema, values, NULL ≠ empty string.
After an addition and a deletion, the set and the order come from the source.
Variant on the input and empty sets need a separate assignment.
<!-- /mode -->
