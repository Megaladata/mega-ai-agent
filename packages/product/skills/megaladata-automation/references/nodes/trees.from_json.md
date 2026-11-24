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
objects, arrays of objects (and neighboring ones), and uniform arrays of scalars.
`[]` needs a nonempty typed array of the same path in another record;
there are zero instances. `details:{}` keeps the container with NULL
in fields from other records; do not create dummy records.
Read output 0: keep array bounds, order, exact Int64, and a typed
NULL separate from an empty string, false, and zero. `trees.to_table` requires branches
without nested arrays, and expands neighboring ones in sequence; do not expand nested records into a table.
On `Nested containers in repeated records` or another tree refusal in REST,
do not stop the table scenario: if the effect is unknown,
first run the issued `operation.recover`, then continue on the table path
from the REST output. Do not repeat an unsupported tree.

First execute and read the whole source: one JSON object in a string field
of the only row; several documents are not supported. `trees.from_json`, `mode:"auto_structure"`,
`parameters:{json_field:"Document",root_mode:"auto"}`, `finish:"execute"`, and
`read:{ports:[0],sample_rows:100,require_exact_numbers:true}`. Output 0 is a typed
tree: `tree.schema` is the order, names, types, containers, and arrays;
`tree.instances` is every instance, path, order, value, and NULL. Large integers are
decimal strings. Do not reconstruct the tree from the task text.

`trees.from_json` dates are `YYYY-MM-DDThh:mm:ss`:
a `datetime` leaf, a typed NULL, civil `YYYY-MM-DDTHH:MM:SS.mmm`,
`precision:"millisecond"`, `representation:"local_datetime"`. Do not shift the time
through UTC. `trees.to_table` makes a DateTime column from them.

Mixed scalars of one field produce a `variant` leaf: `cell_type`
keeps the subtype integer/real/string/boolean/datetime/null, and `precision:"exact_native"`
confirms the native frame. `value` for integer and real is an exact decimal
string, for boolean a logical value, and for NULL `is_null:true,value:null`.
Distinguish integer from real by `cell_type`; the JS number type does not prove it.
Read the actual node output; mixed arrays of scalars are not supported yet.

Connect this port to `trees.to_table`, `mode:"selected_nodes"`.
A new node requires `selected_paths` (leaf paths in schema order,
for example `/id`, `/items/sku`, without array indexes), `repeat_parents`,
`composite_names`, `composite_labels`, `label_separator`: usually `false`, `false`, `"."`;
composite names follow [Help](trees.to_table.md).
`repeat_parents:true` repeats the selected parents in every position;
`false` leaves them only in the first row, then NULL. Output 0 is a table.
Read the whole table, check types and order, export, and save the package.
An empty string, 0, and false are kept; a missing scalar and JSON null give NULL.
For an export of NULL and empty strings, choose a nonempty NULL marker explicitly.

Stage 1: nonempty branches of repeated objects, unique leaf names,
up to 64 selected fields. There is no manual schema, XSD, forced root,
or manual date format.
Limits: 256 instances, depth 16, 1 MiB; exceeding them is a refusal without truncation.
On an existing node, `parameters:{}` keeps the settings, and `selected_paths`
replaces the whole selection. If a tree was requested, report the limit on refusal;
do not replace the tree with JavaScript or a calculation over the attachment. For a REST table, use the path above.
<!-- /mode -->
