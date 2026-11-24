# Enrich data

<!-- mode: left -->
To add reference columns to the main table, choose
`dock_node_apply` with `target.type:"transform.enrich_data"`, `mode:"left"`. Input 0 is the main table, and inputs 1…N are
from 1 to 14 references (three or more are the same one node, not a chain and not Calculator). Link each reference directly to the main
table: `parameters.enrichment.tables=[{port,keys:[{main,lookup}]}]`.
Take key names from the actual schemas; the types of each pair must match.
Set a composite key with every pair at once.
Each reference has its own `port` in order from 1 and its own source in `inputs`. Reference key fields are excluded
from the result; the other fields are attached to the source fields of the main table.

For distinguishable names, set complete `enrichment.prefixes` with `enabled`,
`name`, and `label`. Confirm the actual technical names after apply:
the native mechanism forms the names and resolves collisions.
The parameter schema of the type is in `dock_action_describe` for this type.

A new node requires every key and prefix setting, the main table, and each
declared reference in `inputs`. Omitting `enrichment` on an existing node
keeps the supported settings only when the sources are unchanged.
To replace reference data, configure the same `imports.text` node: deliver the new
CSV, set `parameters.source` from the confirmed delivery and
`settings.source.source_path`, keep compatible columns, and execute the import.
Then execute the previous Enrich Data: `parameters:{}`, `inputs:[]`,
`mappings:[]`, `finish:"execute"`. This keeps the keys, prefixes, and output mapping.
To change the keys themselves, pass a complete `parameters.enrichment`.
To add another reference to an existing node, pass the same node
(`target.kind:"existing"`), the new source in `inputs`, and a complete `enrichment`
with every previous table and the new one; repeat the previous keys and prefixes.
After the change, read output 0: `read.coverage:"sample", sample_rows:100,
require_exact_numbers:true` for a small table; check sample_complete.
The read.coverage=full mode is not registered for this type.

For a required exact field order, set an existing output mapping:
direction=output, port=0, autosync=false, and fields with every configured_field
in the required order. Autosync may rearrange key fields after
save/open. An explicit layout must keep the names and captions of every field.

NULL in keys matches NULL; an empty string is a separate value.
Every reference match is kept: duplicates expand the result,
and matches of two references multiply. Without a match, the main row
is kept with NULL in the fields of that reference. Another reference is still
linked to the original main table.

For a CSV with NULL and empty text, use `exports.text` with
`parameters.null_marker:"?"`; empty text must stay empty.

Do not add training or a model-apply mode: this is a table transformation.
Other join kinds, computed keys, type
conversion, and parameter bindings to variables are not in this slice.
On a native refusal, read the reason from the wizard error button.
<!-- /mode -->
