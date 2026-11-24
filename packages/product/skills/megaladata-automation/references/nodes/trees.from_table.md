# Table to tree

<!-- mode: manual_structure -->
Read the trees.from_table card and the parameter schema. Execute and completely
read the source; keep its technical names and types. manual_structure: a nodes list
in parent-then-children order, with exact JSON Pointer paths and no array indexes.
The Root is an object; one branch is an object array; one nested object is allowed.
If the user did not name the array, its technical name is `items` (lowercase).
For each scalar, set source_field; do not set it on containers. The caption equals
the name. The list order determines the order of children, not the order of source columns.

One input row is one array element in the source order. Equal keys
are not grouped: keep duplicates.
Keep DateTime civil with milliseconds and Variant subtypes. Distinguish NULL from an empty string, 0, and false. Read Int64 exactly, as decimal text;
do not convert 9007199254740993 to Number. Output 0 is a tree: read its complete
schema and instances with types, not only the final JSON string.

A new node requires the whole structure. For an existing node, parameters:{} keeps it;
an explicit nodes list replaces the whole list. Done confirms the settings, and Execute is a new
execution and read. Save the package separately after the reads. Do not repeat an unknown
effect. XSD, arbitrary arrays, grouping, and variables
are refused before the UI changes. An empty input is not supported yet.

Use `dock_node_apply`, `target.type:"trees.from_table"`, `mode:"manual_structure"`.
The `dock_action_describe` card with `node_types:["trees.from_table"]` contains
`parameter_schema` for `nodes`. Read the tree through `read.ports:[0]`.
<!-- /mode -->
