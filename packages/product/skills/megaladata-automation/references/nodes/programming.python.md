# Python (`programming.python`)

<!-- mode: script -->
## Python code in a Megaladata node

Choose this node when the user asks for a Python node or gives a `.py` file
for the node; do not replace it with Calculator or JavaScript. Megaladata executes the code:
Python 3.13 on the server, in a separate process (`execution_mode`
`external_process`; the wizard checkbox is on and disabled). Do not compute the values
yourself and do not invent them; on an error, pass the exact Megaladata error text.

`dock_node_apply`: `target.type:"programming.python"`, `mode:"script"`,
the table goes to input 0 (`inputs`), `finish:"execute"`, `read.ports:[0]`,
`read.sample_rows` up to 100. Parameters:
- `source_text` is the whole code verbatim, LF lines; pass a `.py` file unchanged
  (up to 2048 characters and 128 lines);
- `schema_mode:"code"` turns on "Allow output columns to be formed from
  code": the code itself creates the columns (`prepare_compatible_table`, `AddColumn`)
  before the first row; do not pass `columns`;
- `schema_mode:"declared"` means the output columns are set in the wizard: `columns` in
  output order, each with `name`, `label`, `type` (`integer`, `real`,
  `string`, `boolean`, `datetime`), `data_kind` from the card schema, and `usage`
  only Unspecified; the code only calls `OutputTable.Append()` and `Set(name, value)`.

`Set` into a field of another type does not fail; it coerces the value (a string field
receives `'1'`, `'True'`), so set the type of every declared field explicitly.
Readback contains `source_sha256`, the SHA-256 of the saved code; compare it with
the SHA-256 of the user's file. The code text is not returned in the reply.

API: `from builtin_data import InputTable, OutputTable`; `InputTable` is None without
a link; `InputTable.RowCount` and `Get(row, name|index)` return `int`, `float`, `str`,
`bool`, `datetime.datetime`, or `None`; `IsNull` distinguishes a missing value from `''`.
pandas 2.2.3 and numpy 2.2.4 are installed: `from builtin_pandas_utils import
to_data_frame, prepare_compatible_table, fill_table`. For integers and logical values with
missing values, use `to_data_frame(InputTable, True)`, otherwise they become
real; a logical column without missing values is returned by `to_data_frame` as
int8, and the output becomes integer — cast it with `astype("boolean")`. `fill_table` writes
None/NA/NaT/NaN as a missing value.

An existing node: `parameters:{}` with `finish:"execute"` runs the saved
code; replacing the code is `source_text` and `expected_source_sha256` from readback.

Not supported: installing packages, network, files, subprocesses, environments (PY_ENV,
venv), input variables, extra ports, `read.coverage:"full"`.
Import only builtin_data, builtin_pandas_utils, pandas, numpy, and
computational modules of the standard library (math, cmath, datetime, decimal,
fractions, statistics, re, json, itertools, functools, collections, random).
Module functions are only the computational ones from the list (`pd.to_datetime`,
`np.where`, and so on), without I/O; a module is only `alias.name`, and import a name
once (`import datetime as dt`). `open`,
`eval`, `exec`, `read_*`, `to_csv`, `load`, `dump`, names with a leading `_` (except
`_`), `os`, and `sys`, `pickle` are refused everywhere; filter `df.query` with a mask `df[df["x"] > 0]`;
dunder names are refused even inside strings; non-ASCII outside strings and comments is refused. Refusal happens before
the node changes, with the name and a replacement: rewrite your own code; do not change
the user's code — report that it is not supported.
<!-- /mode -->
