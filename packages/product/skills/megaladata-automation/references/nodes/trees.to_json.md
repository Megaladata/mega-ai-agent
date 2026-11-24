# Tree to JSON

<!-- mode: serialize -->
Read the trees.to_json card. First execute and completely read its own
typed source: its tree output 0 connects to tree input 0.
Mode serialize: exclude_root=true, pretty=false, keys=names, multi_row=false,
datetime=iso8601. This is one object root and one repeated branch of objects;
the datetime field keeps the platform setting, but dates are not in the first slice.

Output 0 is a table with one JSON string. Read the string completely; a string
preview that is truncated does not prove that the data was kept. The array order,
numbers, Boolean, null, an empty string, and decoded Unicode, quotes, and line breaks are kept.
Int64 must not be rounded through JS Number. Different allowed JSON escape sequences
and the writing 2/2.0 are semantically equivalent; the original real type is checked on the tree.
Object key order is checked on the tree schema, not on sorted JSON.
If JSON to tree materialized a missing scalar as NULL, the result contains
null; the original absence can no longer be recovered.

For a new node, set all five parameters. For an existing node, parameters:{}
keeps the settings; an explicit patch keeps omitted parameters. There is no ML training
in the declared contract; Execute recomputes the current input. Separate train/apply
are not declared until they are observed. Save after the read; a cold reopening separately checks
the settings and a fresh result. Root arrays, splitting, formatting,
captions instead of names, dates, Variant, and variables are refused before mutation for now.

When tree serialization is requested, choose `dock_node_apply` with `target.type:"trees.to_json"`, `mode:"serialize"`. Get the `dock_action_describe` card with `node_types:["trees.to_json"]`. Set `exclude_root:true`, `pretty:false`, `keys:"names"`, `multi_row:false`, `datetime:"iso8601"`, `mappings:[]`, `finish:"execute"`, `read.ports:[0]`.
<!-- /mode -->
