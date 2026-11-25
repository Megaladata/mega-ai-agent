# MGD import

<!-- mode: native -->
Get parameter_schema through dock_action_describe(node_types:["imports.lgd"]).
Use source from a completed attachment delivery. By default set lgd_import.checksum="verify".
Mode native. A new node has no table inputs and has table output 0.
Keep names, captions, types, kinds, order, and NULL versus an empty string.
No training. Execute reads output 0; Done saves the settings;
Close cancels the draft. The package itself is saved with a separate Save.
An empty table instead of a checksum error is not a successful import.
Supported: 64-bit MGD without compression and LZO with checksum None.
Compare compression, bitness, and checksum in the readback. LZ4 files may contain checksum None, Compressed data, or Compressed and uncompressed data.
A missing checksum does not prove integrity. lgd_import.checksum="ignore" is allowed
only when the user explicitly asks before a checksum error. After such an error, do not
turn the check off and do not return an empty successful table; another bypass for the
same digest or node is forbidden. On an existing node, {} keeps the checksum and the source.
An empty set is supported: the schema is kept,
row_count=0 and a complete empty sample are required. Variant keeps each cell's type,
NULL, an empty string, and the values; read returns the exact native scalar tags.
32-bit and DDF are unavailable on this stand without 32-bit Megaladata and Deductor;
that is a platform or source limit, and such files are refused before settings change.

For a path from a variable, create and execute a Variable Calculator with a string
variable that contains the exact path of the completed delivery. Connect its output 0
through variable_inputs:[{source:ref,output:0,input:0,kind:"variables"}].
For an MGD import this is the ordinary Input_Var-1, logical variables 0; there is no hidden control port.
Set lgd_import:{checksum:"verify",bindings:{source_path:{variable:"SourceFile"}}}
and source for the same verified file. The name is the exact name of the variable mapping;
the value must be a nonempty string absolute .mgd path from that source.
Readback.source.source_variable confirms the selected name, and source_path confirms its path.
After the variable changes, execute its source again, then the same MGD node with the source
of the new verified file. The binding is kept; a literal is not written over it.
With a binding, pass source on every apply; after reopen, get a reference
to the saved file through dock_storage_source. That checks the file, it does not change the binding.

Choose this native node through `dock_node_apply`, `mode:"native"`. Calculator and JavaScript are not needed to read or write an MGD file. For a round-trip import of this node's own export, select the file through `dock_storage_source`, then `parameters.source:{kind:"storage",server_source_ref:...}`. Do not upload or convert it again.

For an MGD file, use `megaladata_file_admit` and a completed delivery immediately; text profile/scan and a sample are not needed. Do not set columns by hand: they are stored in the binary file.

For an exact check, execute `dock_node_apply` with `finish:"execute"`, `read:{ports:[0],sample_rows:100,require_exact_numbers:true}`. Compare `row_count`, the schema, and every available row; for a larger set, do not call the sample the full result.
<!-- /mode -->
