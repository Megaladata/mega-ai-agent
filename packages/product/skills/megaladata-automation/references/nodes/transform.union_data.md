# Union (`transform.union_data`)

<!-- mode: append_all -->
## Union

To append rows of tables, use `transform.union_data`, `mode:"append_all"`.
If the user asks to union by matching fields, set
`parameters.auto_match:"name_type"`; for matching captions, `"label_type"`.
For two-step automatic matching, set `auto_match:"name_then_label_type"`:
first the handler reserves every technical-name-plus-type pair, then matches
the remaining fields by caption plus type only to free fields of the main table.
The name has priority when captions differ, regardless of input field order.
Comparison ignores case and requires the same type. Input 0 is the main
table; `tables:[{port:1,fields:[]},…]` lists every other input
in order. `prefixes:{enabled:false,name:"Union",label:"Union"}`
keeps the names of unmatched fields; on a name collision, configure the input or the prefix explicitly.
Repeated rows are kept. When the names differ, use an explicit map
`fields:[{source:"InputName",main:"MainName"},…]`; `main:null` keeps
a separate column. Explicit entries take priority over automatic matching.
Without `auto_match`, the map must cover every field of every input.
Ambiguity requires an explicit map and is refused before Execute.
Check the final `configuration.readback.tables`, including unmatched fields.
Reconfigure on the same existing ref, keeping the inputs.
If an automatic node caption is needed, do not set `target.label` on creation.
For reopening and Execute, pass the same existing ref and the parameters
of the saved matching; `inputs:[]` keeps the previous links.
<!-- /mode -->
