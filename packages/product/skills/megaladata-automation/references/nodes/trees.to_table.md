# Tree to table (`trees.to_table`)

<!-- mode: selected_nodes -->
## JSON to tree and tree to table

For a REST response to a table, use Calculator → Collapse → Cross-table; if the trees refuse, return to that path. Choose `trees.from_json` / `auto_structure` → `trees.to_table` / `selected_nodes` when a tree is requested or for flat records without nested containers. First read [parameters and limits](trees.from_json.md).

A tabular REST result: parse the actual `Response` of output 0 by this path;
keep `RequestID` to join REST output 1, where `HttpStatusCode` comes from.
Take values from the server response, not from request fields or constants; formulas
follow Help and the observed structure. Do not pack several responses into one document.

Nested containers in repeated records are not supported in stage 1.
If the REST parse already received `Nested containers in repeated records` or another
refusal of the supported tree area, do not stop the table scenario:
if the effect is unknown, first run the issued recovery through `operation.recover`,
then continue on the table path from the REST output. Do not repeat an unsupported tree.

For one JSON object in one row of a string field, first execute and completely
read the source. Several JSON documents in one input are not supported yet. Use `trees.from_json`, `mode:"auto_structure"`,
`parameters:{json_field:"Document",root_mode:"auto"}`, `finish:"execute"`, and
`read:{ports:[0],sample_rows:100,require_exact_numbers:true}`. Output 0 is a typed
tree: `tree.schema` stores the order, names, types, containers, and arrays;
`tree.instances` is every instance, its path, order, values, and NULL. Large
integers are passed as decimal strings. Do not reconstruct the tree from the task text.

Connect the same port to `trees.to_table`, `mode:"selected_nodes"`.
On a new node, `selected_paths` (leaf paths of the schema in its order,
for example `/id`, `/items/sku`, without array indexes), `repeat_parents`,
`composite_names`, `composite_labels`, and `label_separator` are required. Usually `false`, `false`, `"."`.
Composite on request: the name is the root and the path through `_` (`Root_items_sku`), and the caption is
the tree captions through `label_separator` (`.` `|` space `-` `_`); read names and captions from the output.
`repeat_parents:true` repeats the selected parents for every position;
`false` leaves them only in the first row, then NULL. Output 0 is a table.
Read it completely, check types and order, then export and save the package.
An empty string, zero, and false are kept; a missing scalar and JSON null give NULL.
An array position index is not Calculator or JS: `global_index_paths:["/items"]`
(the schema array path) adds the native Global node index, an integer column.
The column is inserted first in the array branch; read the name, place, and values from the output;
`[]` removes the index, and omitting it on an existing node keeps it.
For an export of a table with NULL and empty strings, choose a nonempty NULL marker explicitly.

Object branches are nonempty, without nested arrays, leaf names are unique,
up to 256 fields. Neighboring arrays are in sequence, and fields of another are NULL. DateTime
and Variant leaves produce columns of those types (ms, subtype). There is no manual schema, XSD,
or forced root.
The tree is limited to 256 instances, depth 16, and 1 MiB; exceeding that is a refusal,
without truncation. On an existing node, `parameters:{}` keeps the settings,
and an explicit `selected_paths` replaces the whole selection. If the user asked for a tree,
report the limit on refusal; do not replace the requested tree with JavaScript or
calculations over the attachment. For a tabular REST result, the path above applies.
<!-- /mode -->
