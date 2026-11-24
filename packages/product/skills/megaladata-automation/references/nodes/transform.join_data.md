# Join (`transform.join_data`)

<!-- mode: inner left right full difference -->
## Cartesian product / full join without keys

To pair every row of the left table with every row of the right table, use
`megaladata_dock_node_apply`: `target.type:"transform.join_data"`, `mode:"full"`,
`parameters:{keys:[],case_sensitive:true,include_joined_keys:true}` and both
`inputs` (`input:0` on the left, `input:1` on the right). This is also a full join without
key fields. Repeats are kept, and the output contains every field of both sides.
Do not set key pairs from similar names. Choose Join, not Calculator
or JavaScript. There is no separate `mode:"cross"`. Empty keys are allowed only
for `full`; the other modes require keys of the same types.
To read an existing full join without reconfiguration, use
`mode:"full"`, `parameters:{}`, `inputs:[]`, `mappings:[]`, `finish:"execute"`.
Row order is not guaranteed; resolve name conflicts with input mappings.

## Join

To match two tables by keys, use `megaladata_dock_node_apply` with
`target.type:"transform.join_data"`: `mode:"right"` keeps every row of the right
input, `"full"` keeps both inputs, and `"difference"` keeps only left-input rows without
a pair on the right. Set `inputs` with ports `input:0` for the left table and `input:1`
for the right, `parameters.keys:[{left,right}]` for every part of the key at once,
and explicit `case_sensitive` and `include_joined_keys`. Repeated keys keep every
matched pair; the missing side is filled with NULL. In `difference` the output
contains only the left table's fields for any `include_joined_keys`. For these
operations choose Join; Calculator is for formulas per row.
Key field names must have the same types; resolve output-name conflicts
through input `mappings`. Execute an existing node without reconfiguration
with its actual `mode`, `parameters:{}`, `inputs:[]`, `mappings:[]`.

### Join two tables by keys

All of the right side / both sides / left rows without a pair. Key types match.

For a new Join (`transform.join_data`), specify both inputs, mode `inner` or `left`, and
all three parameters: `keys:[{left:name,right:name}]`, `case_sensitive`, and
`include_joined_keys`. The names are the actual field names of each side, and both flags
are explicit booleans for the task; do not replace them with non-schema `on`
or `join_type`.
<!-- /mode -->
