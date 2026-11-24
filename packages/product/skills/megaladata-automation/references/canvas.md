# Graph, nodes, and references

For each node type, read its schema through `megaladata_dock_action_describe`.
`megaladata_dock_node_apply` creates and configures nodes; describe the required
inputs through `inputs`. The runtime may choose the position. Do not pick a
`data-tid`, coordinates, the clipboard, or internal GUIDs by hand.

Take the mode from the contract of the specific type, not from a generic `mode`
list: for example, `transform.filter_data` uses `conditions`. Pass conditions
and formulas in parameters, not in `target.label`. An optional label may be
omitted; for a caption choose short words, for example "Overdue orders", without
`; | < >`, quotes, a backslash, or control characters (at most 200 characters).

`target.kind=new` creates a new node. To change a node that has already
finished, use `target.kind=existing`, the issued `target.ref`, and a new
operation ID. `inputs:[]` keeps the existing links. A reference to a node in a
saved package contains a stable GUID, not the displayed name. After opening a
package, take the GUID from `output.nodes[].node_id` of a fresh
`megaladata_dock_workspace_observe` of the graph and build
`target.ref={document_id,workflow_id,node_id}` with the current preparation.
If the ID was not issued, read the whole observed `cmpDiagram` through fresh
`root_ref` and `observation_id`; a node name does not replace a missing ID.
Take the document and workflow identity from the current preparation. Do not
reconstruct `tab_tid` or `navigation_path`.

To continue, pass only the original operation ID to
`megaladata_dock_node_resume`. For a fresh execution and a read of a confirmed
node, use `megaladata_dock_node_read` with the `source_operation_id` of a
successful local operation. That tool does not accept formulas and does not
open the configuration wizard.

Compare the settings readback, the links, and the output schemas with the
task. `sample_complete=false` means the table is incomplete. Exact numeric
reads, Cross Table category reconciliation, and the limits of a full read are
described in the [work order](workflow.md). The number of visible graph
elements does not prove that the links or the calculations are correct.

## Insert a node and replace an input source

Use `inputs[].replace_existing:true` only when the user explicitly asks to change
the processing order or the source of an existing node. A refusal because an
input is already linked is not that permission. Work only in the open prepared
scenario; take document, workflow, and GUID from the current observation.

For "add a filter before grouping", first read the current link and the settings
of the downstream node. Create the new filter with the previous source as its
input, finish its configuration, and check the result. Then call `dock_node_apply`
with a new operation_id, `target.kind:"existing"`, and the ref of the same grouping
node, keeping its settings:
`inputs:[{source:<filter NodeRef>,output:0,input:0,replace_existing:true}]`.
Do not recreate the grouping node or Export. Moving an existing node's input to
another source follows the same explicit-request rule.

The parameter replaces the link only on the named tabular `input`, not the other
inputs; variables and trees are not supported. Without the parameter, or when it
is `false`, the existing link is kept and a conflict is refused; `inputs:[]`
keeps the links. The `replaced_links` receipt contains the removed and created
link with source, output, target, and input; check both and the other links.
On `AMBIGUOUS`, do not repeat the removal or the connection: follow inspect or
recovery of the original operation. Save the package after the chain is checked.
