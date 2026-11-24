# LGD export

<!-- mode: native -->
Get parameter_schema through dock_action_describe(node_types:["exports.lgd"]).
One table input 0, mode native. lgd_export: destination is an absolute .lgd
in its own directory; compression="none"/"lzo"/"lz4", overwrite="reject".
checksum="none"/"compressed"/"all" for LZ4; for none/lzo only "none".
After reopen, Megaladata may show the previous checksum in a disabled field:
for none/lzo it is not used, and the effective checksum remains "none".
On creation, compression, checksum, overwrite, and one path source are required:
destination OR bindings:{destination:{variable:"LgdPath"}}. {} keeps the settings.
The export has no table output: read.ports=[], and the result is output.file_artifacts.
Execute writes the file; Done saves the settings; Close cancels the draft.
Keep names, captions, kinds, types, field and row order, and NULL versus empty strings.


Overwrite requires an EXPLICIT overwrite="replace" and an explicit destination or bindings
in EVERY request. {} uses reject even after a previous overwrite.
Only the exact file in its own directory is allowed; an unexpected dialog
is not confirmed. Native Megaladata Data Export has no append:
the dialog offers only Yes/No for overwrite. A composite import or union
is not a mode of this node; append is not supported.

For a path from a variable, connect the executed output of variables.calculator or
another standard source to variable_inputs:[{source:...,output:0,input:0,kind:"variables"}].
bindings.destination.variable is the exact name in the input mapping. It requires
an observed string, not NULL, containing its own absolute .lgd path.
The built-in workflow-variable output may pass NULL; seeing the name
in the list does not prove the value. Execute and read the source first.
After the variable changes, execute the source and the same export: {} keeps
the binding and reads the current path. Check package save and reopen separately.

The stand uses a 64-bit writer; 32-bit Megaladata and Deductor
are unavailable for verification. The server sets the bitness; the node has no switch.
Do not promise compatibility with 32-bit or Deductor ≤5.3: LGD is not DDF.
Refuse a request for DDF or that compatibility and explain the limit.
Other compression algorithms are not claimed by this slice.
Independent format correctness does not follow from a round-trip import alone.
Choose the native node through dock_node_apply, mode:"native"; a table Calculator
and JavaScript are not needed to write LGD. For a round-trip import, select the file through
dock_storage_source, then parameters.source:{kind:"storage",server_source_ref:...}.
Do not upload or convert it again. Save the package with a separate Save.

The stand's standard writer writes an empty set with the saved schema and a Variant field
with integer/string/NULL subtypes. Do not declare them unsupported only because
a later import refuses. For an empty set, check the schema at zero rows;
for Variant, check the field type and the exact subtypes of every value after the round-trip import.
Report the refusal exactly, and keep the file and the evidence. Do not replace the round trip
with the source table, and do not convert Variant to string just to make the comparison succeed.
<!-- /mode -->
