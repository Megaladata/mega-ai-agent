# Sorting (`transform.sorting`)

<!-- mode: keys -->
A new report order with helper fields excluded: add a Sort from the complete confirmed output of the predecessor; keep the previous node and columns.
The key cache is not the full schema; if the full source is unavailable under the activation rules, report the blocker.

## Continuing a package

In a continuation after the package is opened, a save does not prove that the output is active.
Before a new `transform.sorting`, confirm the needed output of the same existing table
source. Use `megaladata_dock_node_read` with a successful local operation of
the current preparation; if there is none, use an existing apply with the exact ref, the previous type/mode,
`inputs:[]`, an empty patch for the schema, and `finish=execute`. Wait for the confirmed
execution or read of the source; empty-patch examples are in [Graph and nodes](../canvas.md).
A refusal `sorting preflight requires an active source output` with `NOT_APPLIED`,
`effect_possible=false`, `cleanup_complete=true` means the new node has not been
created yet: after the source executes, repeat the request with a new operation_id, without
recreating the source and without releasing a target node that does not exist. This does not allow
repeating an unknown run or automatically starting REST, JS, or export outside the request.

## Row order by locale

Row order is set by Sort (`dock_node_apply`, `transform.sorting`, `keys`), not by Calculator or JS; do not compute letter weights.
`compare_with_locale` is one flag for the whole node: `true` compares strings by the user's locale (the default on a new node), and `false` is binary. A request "with the Russian locale" is `true`; "turn locale comparison off" is `false`.
Change the locale on the same node: pass `compare_with_locale` with `keys`, then execute and read the result. Without the flag, an existing node keeps the previous locale.
`case_sensitive` is required for a string or variant key. Without a locale, ignore-case applies only to Latin, not Cyrillic.
Do not convert Variant to string: `read.require_exact_numbers:true` keeps integer/real/string and NULL; CSV does not prove the subtype.
Add one unambiguous secondary key (for example RowID). NULL and an empty string are different values: do not sort the text "NULL".
A locale ID is unavailable: check the full result.
Bind `compare_with_locale` on the same node in `keys`. In `dock_node_apply`, add a top-level `bindings: [{parameter: "/compare_with_locale", variable: {kind: "control", input: 0, name: "Flag"}}]`, and remove the literal `compare_with_locale` from `parameters`. Connect `variables.user` output 4 through `variable_inputs` to control input 0. Flag is boolean, not NULL; another type is `BINDING_TYPE_MISMATCH`, NULL is `BINDING_NULL_UNSUPPORTED`, and a literal together with a binding is `BINDING_CONFLICT`. After changing only Flag in the source, execute the previous GUID with `parameters: {}`, `inputs: []`, `mappings: []`, `finish: "execute"`; do not apply the node settings again. Check `configuration.bindings`, the full result, Save, and reopening.

## Case and the maximum number of threads

"Case sensitive" → `keys` with a string key `case_sensitive:true`, and "case insensitive" → `false`.
On the same node, pass the complete previous `keys` list with the changed flag, and keep secondary keys and `compare_with_locale:true` for the Russian locale.
Change the maximum on the same node through an existing apply with `max_threads`; "autodetect" → `max_threads:0`.
Values: 0, 1, 2, 4, 8, 16, 32 are the maximum, not the number of running threads.
Without `max_threads`, the maximum is kept; an existing `parameters:{}` keeps the keys and parameters.
After each change, execute `finish:"execute"`, read the whole result, and export a separate CSV; then save the package.
The receipt `configuration.readback.options.cbxMaxThreadCount` confirms the literal `value` and `switch_pressed:false`.
Variables for the maximum are not supported. Threads and auto keep the order, values, and row multiplicity.
<!-- /mode -->
