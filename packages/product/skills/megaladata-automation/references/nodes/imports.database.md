# Database import (SQLite)

<!-- mode: table sql -->
Get parameter_schema through dock_action_describe(node_types:["imports.database"]).
This is the Import > Database node: data from a SQLite `.db` file in storage. Do not replace
it with Calculator, JavaScript, or a text import, and do not dump the database to CSV.

- `parameters.database.database_path` is the exact file path in storage (`/folder/people.db`).
  The handler creates or reuses the module SQLite connection for that path,
  tests it, and links it to the Connection port. Do not create a separate connection node.
- `mode:"table"` + `database.table` is a whole table or view: every field
  in the original order. Row order is not guaranteed.
- `mode:"sql"` + `database.sql` is exactly one SELECT. Set the selection, renaming, and field
  order in the SELECT, and the row order with `ORDER BY`.
- In sql, `output_mapping:null`: fields and types come only from `read` of port 0 after Execute.
- The node has no table inputs: `inputs:[]`, `finish:"execute"`, `read.ports:[0]`.
- Output types follow the declared column types: INTEGER → integer, TEXT → string,
  REAL → real, BOOLEAN → logical, DATETIME → date/time. NULL stays NULL,
  and an empty string stays an empty string; do not replace missing values with zeros.
- An existing node with `parameters:{}` keeps the settings; Execute reads the database again.

Refused before any change: a non-SELECT, a second statement, comments, parameters `:name`
and macros `%name%`, wizard filters, a timeout, Ignore errors, a field subset
in table mode (use sql), and other DBMSs. A connection-test error means the file
is not at that path or is not a SQLite database: check the path, and do not create an empty database.
<!-- /mode -->
