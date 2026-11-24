# Grouping (`transform.group_data`)

<!-- mode: aggregate -->
In `dock_node_apply`, choose `transform.group_data`, mode `aggregate`. When changing `measures` of an existing node, pass the complete `group_by`, `measures`, and the input 0 link in `inputs`. `parameters: {}` keeps the settings. Full duplicates: keys on every field, `measures: []`; NULL is distinct from an empty string.

In the output mapping, `configured_field.name` is the current output name: after apply with `measures` that is the measure `name` (for example `Metric`) or the key name; do not build a name from the field and the function (`Amount_Median`) unless the node returned it.

For each measure set `field: {kind: "input_field", name: "name"}`, `function`, and the output `name`/`label`. Two measures of one field may have different names. Compute aggregates with Grouping, not Calculator or JS.

- `median`: integer/real → real; without NULL, and completely NULL → NULL.
- `mode`: integer/string/real/boolean/datetime/variant → the same type; without NULL, and completely NULL → 0/empty string/False/1899-12-30/NULL (Variant). For scalar types, a tie chooses the smallest value (Boolean → False; strings by code points, for example Beta < alpha).
- `stddev`: integer/real → real; sample standard deviation without NULL, one value → 0, completely NULL → NULL.
- `null_count`: integer/string/real/boolean/datetime/variant → integer; it counts NULL, not empty strings.
- `unique_count`: integer/string/real/boolean/datetime/variant → integer, without NULL; an empty string is counted once.
- `min`/`max` for boolean → boolean (False < True), without NULL; completely NULL → NULL.
DateTime/Variant: count/min/max/mode/unique_count/null_count/first/last/only; counters → integer, and the rest keep the type. Sum/avg/median/stddev/concat are unavailable. Read Variant exactly: `cell_type`/`value`; Min skips NULL.
Variant mode: 10/3.5/"text" → real 3.5; 1/1.0/"1" → integer 1; do not generalize other subtypes. unique_count(1,1.0,"1")=2.

## First, last, only, and list

In the same node, `first`/`last` is the first or last value in the source order, including an extreme NULL; `only` is the single distinct value (repeats are allowed), otherwise NULL; `concat` is the list without NULL, empty text is kept, and completely NULL → an empty string. For first/last/only the input is integer/string/real/boolean/datetime/variant; the type is kept. For concat, only integer/string → string. Do not sort the input before first/last.

Only `concat` requires `concat: {separator: "|", wrapper: "\"", unique: false, order: "none"}`. `wrapper`: an empty string, a double quote, or a single quote; for numbers without a wrapper, use empty. `none` keeps the order, and `ASC`/`DESC` sort the values; `unique:true` removes repeats. Settings of one field. For several states, reconfigure the same node with the complete keys, measures, and input 0; after each Execute, read the whole result and a separate CSV. Save stores the final state.

## Cache and sorting

`parameters.cache_groups:true/false` caches group values and does not prove that the source is fresh. `parameters.sort_result:true/false` sorts by the `group_by` keys ascending, not by aggregates; when false, the order is not defined. On existing, pass only the needed switch: omitting it keeps the value, the keys, the measures, and the mapping. With `inputs:[]`, `mappings:[]`, `finish:"execute"`, check `configuration.readback.options.pedDimCache.value` / `pedSortResult.value` and the whole result. To compare, export both states of the same node. On a full reconfiguration, keep the final switch. Save and a later Execute with `{}` use the saved state.

## Binding

Top-level `bindings:[{parameter:"/sort_result",variable:{kind:"control",input:0,name:"Flag"}}]`: `variables.user`/4 through `variable_inputs` control input 0. Flag is boolean, not NULL; remove the literal sort_result. Check `configuration.bindings`; omit/[] keeps the binding. Change only Flag in the source, then the same GUID with `parameters:{}`, `inputs:[]`, `mappings:[]`, `finish:"execute"`; do not reconfigure the node. Type/NULL/conflict: `BINDING_TYPE_MISMATCH`/`BINDING_NULL_UNSUPPORTED`/`BINDING_CONFLICT`. Compare the whole result, Save/reopen, and the field order.
<!-- /mode -->
