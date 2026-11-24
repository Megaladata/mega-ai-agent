# Field parameters (`transform.reform_columns`)

<!-- mode: scalar -->
After opening a saved package, before a new Reform (`transform.reform_columns`),
confirm that its existing table source has executed: saved nodes
may be inactive. Use `megaladata_dock_node_read` with a successful local
`source_operation_id`; if the current preparation has no such operation, execute
the same existing source through `target.kind=existing`, its exact ref,
`inputs:[]`, an empty patch for that type's schema, and `finish=execute`. Wait for success
and read the needed output, then create Reform. Do not recreate the source and do not
change its parameters. Do not automatically start REST, JS, export, or a chain with
such side effects: first check that it matches the user's request.

The refusal `reform preflight requires an active source output` with `NOT_APPLIED`,
`effect_possible=false`, `cleanup_complete=true` happens before Reform is created;
after the source has executed, repeat the request with a new operation_id.
For Russian captions, change `label` and keep allowed internal `name` values;
when exporting Russian captions, choose `header=labels`.

Executing Field Parameters again without reconfiguration: parameters:{changes:[]},
inputs:[], mappings:[]; fields are selected by input names, even after renaming.

Rename, swap names, and change a field type with this node, not with Calculator
or JavaScript. One call is one complete `changes` list: each change
selects a field by its input name (`field={kind:input_field,name}`) and sets
`name`, `label`, `type`, `data_kind`, `usage`, or `excluded`; the rest
is kept. Final names are computed on the original field set, so a cycle
A→B and B→A is one call: `{field:A,name:B,label:B}` and
`{field:B,name:A,label:A}`. The client chooses and removes a temporary name — do not
add it, and do not make two calls. Set the caption of swapped fields explicitly, otherwise
it stays the previous one. Set the output field order in `mappings`.

Real to integer (`type=integer`) rounds to the nearest integer and loses the fraction;
do this only when the user asks, and half values need a separate
agreement. Check the result by reading the output with `read.require_exact_numbers=true`.
Set caching in this same node: `parameters.caching` is `disabled`,
`on_activation`, `on_access`, or `selected_fields`. In the last mode,
`changes[].cache` of `disabled`, `on_activation`, or `on_access` selects the cache
of a field by its input name: `{field:{kind:input_field,name},cache}`.
For the other fields, set `disabled` explicitly when the user asks.
Omitting `caching` and `cache` keeps both levels of settings; `changes:[]`
executes the saved node without reconfiguration. Do not replace a mode bound to a variable
with a literal. After changing the mode, execute the node; compare the settings with
`configuration.readback.caching` and `fields[].caching_method` (codes 0/1/2 are
off/activation/access, and 3 on the node is selected fields). CSV does not prove them.
<!-- /mode -->
