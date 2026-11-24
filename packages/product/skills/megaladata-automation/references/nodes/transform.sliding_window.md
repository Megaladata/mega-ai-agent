# Sliding window (`transform.sliding_window`)

<!-- mode: lag -->
## Sliding window

For copies of previous and following records, choose `dock_node_apply` with
`target.type="transform.sliding_window"`, `mode="lag"`, and
`parameters.windows=[{field:"Sales",history:3,horizon:1}]`. A new node requires
an explicit `incomplete_records`: `keep_incomplete` adds incomplete edges,
`drop_added` keeps the source rows, and `drop_all_incomplete` trims the edges
while keeping real NULL. The input order defines time. For lags, use this
node; Calculator and JS are not needed for this step. On an existing node, omitting
a parameter keeps it, and `windows:[]` resets every window.

### Lags of previous and following rows

Time is the input order; an explicit policy for incomplete edges.
<!-- /mode -->
