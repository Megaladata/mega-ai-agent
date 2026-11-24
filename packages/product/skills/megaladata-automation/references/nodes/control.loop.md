# Loop

`control.loop`, modes `group_rows` and `for`. Read `dock_action_describe` with
`node_types:["control.loop"],modes:[<mode>]` and the `control.supernode` card.
The body is the source Supernode of the current parent workflow by a fresh scoped ref,
not its nested workflow. Do not enter the Loop: the graph belongs to the Supernode.

<!-- mode: group_rows -->
Body: `control.supernode` / `tabular_boundary`, a required table input 0,
and table output 0. Connect an import for the schema. Enter through
`dock_prepare.graph_navigation`, then get fresh refs. Inside: InputNode → handler
→ the existing OutputNode (`control.supernode_output`). For Calculator, set
every output field explicitly in the required order, `autosync:false` (a new field is placed first by native).
For REST API, table input 0 means native port 2, and the response is output 0;
one request per row. Return to the parent workflow and observe the graph again.

Create the Loop: `target:{kind:"new",type:"control.loop"},mode:"group_rows"`,
`parameters:{body:<Supernode ref>},inputs:[],mappings:[],finish:"done"`,
`read:{ports:[],sample_rows:0}`. Ports appear after configuration.
The second apply is on the SAME Loop, with the same body,
`inputs:[{source:<import>,output:0,input:0}],mappings:[],finish:"execute"`,
`read:{ports:[0],sample_rows:100}`. Do not create a second Loop.

The fixed group size is 1, and the only table input is 0. Variables,
identifiers, parallel, ignore_errors, and a custom configuration are off.
Outputs accumulate in row order. Three pages are three rows;
the REST RequestID starts at 0 on every iteration. Keep Response byte for byte,
without parsing or normalization. HTTP 404 and other HTTP errors may be data
on an extra REST output, not a body exception.
<!-- /mode -->

<!-- mode: for -->
Body: `control.supernode` / `variable_boundary`, one integer variable input
without NULL, one table output, and no table input. Inside: InputNode variable
output 0 → Variables to Table (columns) and the ordinary variable input 0 of Calculator;
the converter table → Calculator → OutputNode, or REST → OutputNode.
The formula reads `Var.Page`, not the Page field. Before REST, execute Calculator for the full
schema. Pass integer Limit/Skip into the REST query directly: encoding is native.
Return to the parent workflow.

From the Supernode readback `boundary.input`, take `port_guid` and `definitions[].id`
of the selected variable. If the receipt is lost, execute the SAME Supernode with
`mode:"variable_boundary",parameters:{},inputs:[],mappings:[]` for the readback.
Selecting by one caption or name is forbidden.

Create the Loop: `target:{kind:"new",type:"control.loop"},mode:"for"`,
`parameters:{body:<Supernode ref>,count:3,variable:{port_guid:<GUID>,definition_id:<id>},iteration_identifiers:true}`,
`inputs:[],mappings:[],finish:"execute"`,
`read:{ports:[0],sample_rows:100,require_exact_numbers:true}`.
Reconfiguration is the same Loop with the full parameters.
`count` is a positive integer literal; a variable binding and start/step are forbidden.
The Loop substitutes only the selected variable with the values 0…count−1;
the original value (for example Page=99) does not set the start. The Loop needs
no external source and no table input. `iteration_identifiers` is false/true, false by default;
when true, native adds a final integer field IterationId. Do not compute it in the body.
Readback: count, GUID/ID, variable name/type, identifiers, and the saved settings
after Done. Parallel, ignore_errors, and a custom configuration are off.
<!-- /mode -->

The body stays live: edit the source Supernode and execute the same Loop; the body
instance itself is not activated. `parameters:{}` is not supported for configuring
the Loop: pass the full parameters again, or use `dock_node_read` with a new operation_id
and the source_operation_id of a successful Execute. After the full read, execute Export,
then a normal Save. A postcondition or reverse matching, fixed_count/group_keys,
parallel, ignore_errors, external components, mixed, extra, or tree ports,
output variables, nested Supernodes, and bodies of another type are not supported.
