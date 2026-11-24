# id/parent_id hierarchy

In Megaladata 7.4.2, trees.from_table sets a manual structure, not recursion over
keys. This is a confirmed gap: use programming.javascript only
to validate the links and build nested JSON. Import and export are standard
nodes. First read [JavaScript](programming.javascript.md) and its schema.

Import id, parent_id, and name as string: leading zeros are significant. An empty
parent_id or NULL is a root; several roots are allowed. Do not sort the rows.
Check the input technical names before Get; if they differ, replace only
the input field names in the code below. Do not replace the source with ready JSON from the answer.

When the value is NULL, InputTable.Get returns undefined, even though a port read shows NULL.
Keep the condition `parent == null || parent === "" ? null : parent` from the recipe
without shortening it, including after the import check. Writing
`parent_id: parent` directly leaves undefined and wrongly turns a root into an orphan;
a check of only `=== null` also misses undefined.

Create JS with schema_mode=declared, one output field name=JSON, label=JSON,
type=string, data_kind=Discrete, usage=Unspecified. The schema is then kept
even when Execute fails. The code does not call AssignColumns; after full
validation it writes exactly one row. The walk covers every component, not only
the roots. The error list is row ids in input order; cycle includes only members
of the cycle, without descendants that lead into it. Do not catch throw, and do not replace the error with a string.

```javascript
import {InputTable,OutputTable} from "builtIn/Data";
const rows = [];
const byId = new Map();
for (let i = 0; i < InputTable.RowCount; i++) {
    const parent = InputTable.Get(i, "parent_id");
    const row = {id: InputTable.Get(i, "id"), parent_id: parent == null || parent === "" ? null : parent, name: InputTable.Get(i, "name"), children: []};
    if (typeof row.id !== "string" || row.id === "" || byId.has(row.id)) throw new Error("Parent-child invalid id: " + row.id);
    rows.push(row);
    byId.set(row.id, row);
}
const orphans = rows.filter(function(row) { return row.parent_id !== null && !byId.has(row.parent_id); });
if (orphans.length) throw new Error("Parent-child orphan ids: " + orphans.map(function(row) { return row.id; }).join(", "));
const checked = new Set();
const cyclic = new Set();
rows.forEach(function(row) {
    const path = [];
    const positions = new Map();
    let key = row.id;
    while (key !== null && !checked.has(key)) {
        if (positions.has(key)) {
            path.slice(positions.get(key)).forEach(function(id) { cyclic.add(id); });
            break;
        }
        positions.set(key, path.length);
        path.push(key);
        key = byId.get(key).parent_id;
    }
    path.forEach(function(id) { checked.add(id); });
});
if (cyclic.size) throw new Error("Parent-child cycle ids: " + rows.filter(function(row) { return cyclic.has(row.id); }).map(function(row) { return row.id; }).join(", "));
const roots = [];
rows.forEach(function(row) {
    if (row.parent_id === null) roots.push(row);
    else byId.get(row.parent_id).children.push(row);
});
const document = JSON.stringify({roots: roots});
OutputTable.Append();
OutputTable.Set("JSON", document);
```

The result is one document {roots:[…]} without Root; leaves also have children ([]).
A child before its parent is allowed. If a tree port is needed, connect
[JSON to tree](trees.from_json.md) to the JSON field. If JSON is needed, the finished string
is enough; [Tree to JSON](trees.to_json.md) is needed only when serializing
a tree port. Do not create a technical wrapper, and do not drop children arrays.

On NODE_EXECUTION_FAILED, pass the exact text with the id list, and stop
calculation and export; do not create a partial tree. Save the configured package
with a normal Save, then finish with an explicit refusal. Do not fix the input data.
