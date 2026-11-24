# Row filter (`transform.filter_data`)

<!-- mode: conditions row_number -->
Mode `conditions`. Table input 0, outputs 0 (matching) and 1 (the rest).
Inside groups the relation is AND, and between groups it is OR. Request `parameter_schema`.

Legacy scalar: `value:{kind:"variable",name:"limit"}`, and for a list
`values:{kind:"variable",name:"codes"}`. name is the exact variable name on
mapped control input 0; first confirm the type and link through W1. The shared link:
`variable_inputs:[{source:<observed NodeRef>,output:0,input:0,kind:"control"}]`.
This is not a table inputs entry. Execute reads the source.

Legacy: an integer/string scalar and a simple list of integers or strings from a comma-separated string. For strings, set case_sensitive explicitly. NULL in the input field
does not pass an ordinary comparison or in. Interval variables, and quotes or a separator inside an item, are excluded.

To select by a control variable, choose this node: `dock_node_apply`,
`target.type:"transform.filter_data"`, `mode:"conditions"`, `parameters.groups`.
The source is an executable `variables.calculator`, mode `expression`, or
`variables.from_table`, mode `aggregate`. Execute the source before connecting it
and after a change; variable names and captions must match.
Builtin: `bindings`; a saved `{kind:"variable",name}` is allowed in the previous position with the same name.
Executing the filter again after the source changes: the same NodeRef,
`parameters:{}`, `inputs:[]`, `finish:"execute"`, `read.ports:[0,1]`.
Do not compute this selection with Calculator or JavaScript.

## Shared binding of a scalar threshold

Read `binding_schema` in `dock_action_describe` mode `conditions`. For Amount > Limit:
`{field:{kind:"input_field",name:"Amount"},type:"integer",operator:">"}`
in `parameters.groups:[[...]]`, without `value`, and top-level
`bindings:[{parameter:"/groups/0/0/value",variable:{kind:"control",input:0,name:"Limit"}}]`.
In the binding slot, do not set a literal or `{kind:"variable"}`.
Connect W1 `variable_inputs`, kind `control`, input 0. The builtin source
`variables.user` uses output 4; configure it with mode `values`, finish `done`,
save the package, and read the variables with a separate `dock_node_read`. Builtin is not Execute.
Scalar integer/real/datetime/string, without conversions; string uses `case_sensitive`.
A real NULL threshold gives 0 matches and every row in output 1. Datetime is local ISO.
After Save/cold, check the MinScore/Since references, the types, and both outputs. Check `configuration.bindings` after Done.
Without output mappings, autosync applies; explicit settings are `mappings`.
When checking a reference after Save/reopen, do not change mappings for field order.
The order is free; take fields from the current schema, because autosync may rearrange them.
For an existing condition: `parameters:{}` and `bindings`;
the pointer refers to the saved groups. The other conditions and their rows are kept.
After the values change, execute the same Filter: `parameters:{}`, `bindings:[]`,
`inputs:[]`, `mappings:[]`, finish `execute`, read ports `[0,1]`.
Do not create a second Filter.
The first N rows: `field:{kind:"row_number"},type:"integer",operator:"<="` without
`value`, and a binding of the same pointer to integer TopN. The row number is 1-based; the order
is the source order. Change only TopN, then Execute the same Filter. After cold,
check `row_number` and the TopN reference. The last N rows are not supported as a separate mode.
Without a patch, a repeated Execute is the read-only path for every Filter, including
legacy: `parameters:{}`, `inputs:[]`, `mappings:[]`, without `variable_inputs` and bindings.
When reading the UI, the only visible root is `FilterDataPanel`.
Empty bindings keep the bindings; clearing them is not supported.
After Save/reopen, check the variable mode and both outputs.

## Continuing a package

Save does not prove that the table source is active after the package is opened.
Before a new Filter, confirm the source output: `dock_node_read` of a successful operation
of the current preparation, or an existing apply with the previous ref/type/mode, an empty patch
for the schema, `inputs:[]`, `finish:execute`; wait for the result.
Examples are in [Graph and nodes](../canvas.md).
`filter preflight requires an active source output` with NOT_APPLIED,
effect_possible=false, and cleanup_complete=true: the new Filter was not created.
Execute the source, and repeat the request with a new operation_id. Do not repeat an unknown
run, and do not start REST, JS, or export outside the user's request.
<!-- /mode -->
