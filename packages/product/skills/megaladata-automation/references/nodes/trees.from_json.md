# JSON to tree (`trees.from_json`)

<!-- mode: auto_structure -->
## JSON to tree and tree to table

For a REST table, parse the actual `Response` of output 0
through Calculator → Collapse → Cross-table. Link it to REST output 1 by
`RequestID`; the actual `HttpStatusCode` is there.
Values come from the server response, not from request fields or constants; formulas follow Help.
Do not merge REST responses into one document to work around the tree limits.

Choose `trees.from_json` → `trees.to_table` when a tree is requested or for records
without nested containers. `mode:"auto_structure"` supports
one JSON document in one row: an object or a root array of objects;
also nested or neighboring arrays of objects and uniform arrays of scalars.
Import a root array `[{"Region":"A"},…]` as one row in a string
column (do not split on commas) → that column's `json_field`, `root_mode:"auto"`;
choose leaf paths (`/Region`, without indexes) in `trees.to_table`.
Do not transform the file; several JSON rows are not supported.
`[]` needs a nonempty typed array of the same path in another record;
there are zero instances. `details:{}` keeps the container with NULL
in fields from other records; do not create dummy records.
Read output 0: keep array bounds, order, exact Int64, and a typed
NULL separate from an empty string, false, and zero. `trees.to_table` requires branches
without nested arrays, and expands neighboring ones in sequence; do not expand nested records into a table.
On `Nested containers in repeated records` or another tree refusal in REST,
do not stop the table scenario: if the effect is unknown, run
`operation.recover`, then continue on the table path from the REST output; do not repeat the tree.

First execute and read the whole source: `trees.from_json`, `mode:"auto_structure"`,
`parameters:{json_field:"Document",root_mode:"auto"}`, `finish:"execute"`, and
`read:{ports:[0],sample_rows:100,require_exact_numbers:true}`. Output 0 is a typed
tree: `tree.schema` (order, names, types, containers) and `tree.instances`
(instances, paths, values, NULL). Large integers are decimal strings.
Do not reconstruct the tree from the task text.

`trees.from_json` dates are `YYYY-MM-DDThh:mm:ss`:
a `datetime` leaf, a typed NULL, civil `YYYY-MM-DDTHH:MM:SS.mmm`,
`precision:"millisecond"`, `representation:"local_datetime"`. Do not shift the time
through UTC. `trees.to_table` makes a DateTime column from them.

Mixed scalars of one field produce a `variant` leaf: `cell_type`
keeps the subtype integer/real/string/boolean/datetime/null, and `precision:"exact_native"`
confirms the native frame. `value`: integer/real is an exact decimal string,
boolean is a logical value, and NULL is `is_null:true,value:null`; distinguish
integer from real by `cell_type`, not by the JS type. Mixed arrays of scalars are not supported.

Connect this port to `trees.to_table`, `mode:"selected_nodes"`.
A new node requires `selected_paths` (leaf paths in schema order,
for example `/id`, `/items/sku`, without array indexes), `repeat_parents`,
`composite_names`, `composite_labels`, `label_separator`: usually `false`, `false`, `"."`;
composite names follow [Help](trees.to_table.md).
`repeat_parents:true` repeats the selected parents in every position,
`false` leaves them only in the first row, then NULL. Output 0 is a table.
Read the whole table, check types and order, export, and save.
An empty string, 0, and false are kept; a missing scalar and JSON null give NULL.
For an export of NULL and empty strings, choose a nonempty NULL marker explicitly.

Scope: nonempty branches of repeated objects, unique leaf names,
up to 64 fields; no manual schema, XSD, forced root, or manual date format.
Limits: 256 instances, depth 16, 1 MiB; beyond that, refuse without truncation.
On an existing node, `parameters:{}` keeps the settings, and `selected_paths`
replaces the whole selection. If a tree was requested, report the limit on refusal;
do not replace the tree with JavaScript or a calculation over the attachment. For a REST table, use the path above.
<!-- /mode -->
