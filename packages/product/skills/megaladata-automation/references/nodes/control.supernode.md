# Supernode

Use `control.supernode`; request `dock_action_describe` with this node_types
and the needed mode: `tabular_boundary` or `variable_boundary`. One level.
A new node: `inputs:[]`, `mappings:[]`, `finish:"done"`, no read,
and a complete `parameters.boundary`. Port names are ASCII identifiers; captions are separate.
An existing `parameters:{}` keeps the boundary. Do not create a second container.
Changing, deleting, or reordering saved ports or definitions is forbidden.

Enter: `dock_prepare`, `intent:"existing_workflow"`, the current `workflow_ref`,
`graph_navigation:{direction:"enter",node_ref:<Supernode>}`. Immediately observe the graph
from the fresh workflow_ref. Find InputNode/OutputNode by `boundary_role:"input"`
and `boundary_role:"output"`: mirrored GUIDs of the external ports, and refs of the inner workflow.
OutputNode has table input 0. Every link is local to the current workflow:
an external source cannot connect directly to the inner Calculator/OutputNode.
Do not repeat an unknown navigation mutation; reconcile the same operation_id.

Finish the inner Calculator first with `finish:"done"` and no read
(`read.ports:[]`, `sample_rows:0`). Formulas belong only to it. Build the body
through to OutputNode first; execute and read the parent Supernode after leaving.
For field order, set a complete output mapping, `autosync:false`: configured_field
for every kept field, including the new one, in the required order.
Output link: request `control.supernode_output`, mode `tabular_boundary`;
apply on ITS existing ref, `inputs:[{source:<Calculator>,output:0,input:0}]`,
`parameters:{}`, `mappings:[]`, `finish:"done"`, no read. This type is not created,
not executed, and does not accept an external source. Observe the boundaries and links again.

Leave: `dock_prepare` with the current workflow_ref and
`graph_navigation:{direction:"leave"}`. Observe the parent graph: the previous refs
are no longer valid. Execute the SAME Supernode with its mode, `parameters:{}`,
`inputs:[]`, `mappings:[]`, `finish:"execute"`, `read.ports:[0]`.
`dock_node_read` rereads from the local receipt. Save after the last read.
Nested or recursive Supernodes, compose/expand, extra ports,
trees, output variables, a mixed boundary, Condition/Loop, service links, and training are not supported.

<!-- mode: tabular_boundary -->
One required table input 0 and table output 0:
`boundary.input:{kind:"table",name:"Input",label:"Source data",requirement:"required"}`,
`boundary.output:{kind:"table",name:"Output",label:"Result"}`.
With a second apply on the SAME node, `parameters:{}`, `finish:"done"`, connect the external
import to input 0. Optional inputs are not supported.
Inside: InputNode table output 0 → Calculator table input 0 → OutputNode.
After InputNode, the mapping check is deferred until the wizard: after an apply refusal,
reconfigure the same existing Calculator by its fresh ref; do not create a new one. Keep source fields in their original order,
and put the new field at the end. When the source changes, change only the file of the previous import,
then execute the same Supernode. Variables are not supported in this mode.
<!-- /mode -->

<!-- mode: variable_boundary -->
One variable input 0, one table output 0, and no table input:
`boundary.input:{kind:"variables",name:"Params",label:"Parameters",definitions:[{name:"Page",type:"integer",value:99},{name:"Limit",type:"integer",value:2}]}`;
`boundary.output:{kind:"table",name:"Output",label:"Result"}`. Only nonempty integer definitions without NULL;
the variable name is also its caption. No external source is needed.
InputNode variable output 0 → Variables to Table (columns) and the ordinary
Calculator variable input through `variable_inputs` (kind:variables, input:0).
The converter table → Calculator table input 0 → OutputNode.
The formula reads `Var.Page`, not the Page field. Readback: input port GUID,
ID, order, names, types, and values of the saved definitions.
<!-- /mode -->
