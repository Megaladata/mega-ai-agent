# Replacement (`transform.replace_columns`)

<!-- mode: exact regex mixed external -->
For a dictionary of correspondences, use this type. Read the parameter schema in
`dock_action_describe` with the selected mode. Computed formulas belong to Calculator.
<!-- /mode -->

<!-- mode: exact -->
`rules[]`: field with kind=input_field and name, the type of the input key, pairs,
other. Strings require case_sensitive, numbers require precision≥0, at most two
decimal places. The tolerance is inclusive; the nearest key, and the larger one on a tie;
precision>0 adds real `_Delta=key−input`. Large Int64 values are digit strings.
from.type=type, to.type=result_type (type by default). Boolean to.value is
JSON true/false. Boolean allows other.null/keep (Variant); datetime requires other.null and local
ISO with whole seconds. Another result_type with other.keep is unavailable, except Boolean.
<!-- /mode -->

<!-- mode: regex mixed -->
Regex: string from is the pattern, and to is a string constant. The first substring
match replaces the whole cell; a dollar sign with a number stays a literal. Case is inline (?i).
ASCII literals, groups, [0-9], {n}, and ^/$ are allowed. There is no regex of another type.
<!-- /mode -->

<!-- mode: regex -->
`pairs` are ordered. Omit case_sensitive/precision. other is keep/null.
<!-- /mode -->

<!-- mode: mixed -->
Exact pairs take priority over regex_pairs, then other.keep/null.
Strings require case_sensitive; it does not control regex. A rule replaces both
tables of the field; to keep one, pass its pairs explicitly.
<!-- /mode -->

<!-- mode: external -->
`mode:"external"`:
the main table is input 0, and the reference is the additional table input 1.
A data-tid index is not the logical port; use the issued references.
`rules[].external={port:1,value,replacement,information,unused}`: exact
field names after the input 1 mapping; value/replacement are one field each,
and information/unused are lists that cover every other field without repeats.
Do not pass pairs/regex_pairs. type is the key type.
This slice has checked string keys and replacements.
Duplicate keys cause a refusal; do not choose the first or last value.
NULL matches NULL, and an empty string is separate. other.keep leaves
an unmatched value and false in `_Replaced`; an information field gives NULL.
Read information column names from the output, for example CodeInfo.
Reconfiguration keeps the roles and input 0/output 0 of the same node.
<!-- /mode -->

<!-- mode: exact regex mixed external -->
`output_mode:"replace"` changes the field; add keeps it and creates `_Replace`.
The `_Replaced` flag is boolean. other.null also changes an original NULL, and the flag is true.
Unspecified fields, rules, and output_mode are kept. To execute again:
parameters={}, inputs=[], mappings=[] with the previous mode. For column order,
set a complete output mapping with autosync=false. Execute, read the table,
and save the package.
<!-- /mode -->
