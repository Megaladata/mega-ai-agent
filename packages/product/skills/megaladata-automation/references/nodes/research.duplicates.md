# Duplicates and contradictions (`research.duplicates`)

<!-- mode: mark -->
Before configuration, read the common [skill](../../SKILL.md) rules and request `parameter_schema`.

Use `mode:"mark"` and the complete `input_fields`/`output_fields` lists.
Keys and compared values allow integer/string/boolean/real/datetime.
Do not round real; datetime is civil time with milliseconds, without a time-zone
conversion. NULL is distinct from an empty string, false, and zero.
Unassigned fields are kept and do not take part in the comparison.

The node keeps every row and marks every instance of a repeat, rather than leaving
one row. A contradiction is different output values for the same key.
Service fields: Duplicate boolean, DuplicateGroup integer, Contradiction boolean,
ContradictionGroup integer. An unmarked number is NULL; group numbers start
at 1. Group identity is the set of rows, not its number across packages.

Empty and single-row inputs keep the complete source and service schema.
Check every row and field, port 0; run Save separately. Mapping overrides
and automatic contradiction resolution are not supported.
<!-- /mode -->
