# variables.replace

<!-- mode: exact -->
Replace variable values by exact pairs: `dock_node_apply`, target.type
`variables.replace`, mode `exact`. First `dock_action_describe({node_types:["variables.replace"]})`.
One variables input 0, variables output 0; inputs=[], mappings=[],
read={ports:[],variable_ports:[0]}, finish="execute". Do not use a table as the input.

parameters.rules:[{variable:{kind:"input_variable",name:"Count"},type:"integer",
pairs:[{from:2,to:5}],other:"keep",precision:0}]. The name is the technical name from the input
set, not the caption. The type integer/real/string/boolean is the same for the input and the replacement.
Strings use case_sensitive:true, numbers use precision:0; omit options that do not apply.
NULL is JSON null, distinct from an empty string, false, and 0. Keys are unique.
Each source value is replaced once; without a match it is kept.

The complete pair table of each listed variable is replaced. The other rules,
names, captions, types, and order are kept. Native adds the suffix Replacement to
captions: the handler restores the original captions. Do not change links for the result.
Done saves the settings, and Execute calculates without training. Read the complete typed output 0;
a preview does not prove real precision or the difference between NULL and an empty string. Then Save.
For Execute after the source changes: the same ref, parameters={}, inputs=[],
mappings=[], without a new variable_inputs. For a change, pass only the needed rules.

Calculator is the source of simple types through name, label, type, and formula; strings are
literals, and NULL is the formula NULL. Give the source a stable target.label. If a cancelled
draft left an empty Expr1, configure it as existing and add the rest as new.
Before connecting, check the complete set, captions, and order. Address nodes by ref/GUID.
Exact does not support regex, case insensitivity, a nonzero tolerance,
a type change, datetime/Variant replacement, rule files, and unmatched values other than keep.
On a native refusal, read the error; do not choose Continue anyway.
<!-- /mode -->

<!-- mode: rules -->
For regex, case-insensitive comparison, a numeric tolerance, and the rest to NULL,
choose `variables.replace`, mode `rules`; do not replace this node with Calculator or JS.
The node parameters are in `dock_action_describe`. The source is only through `variable_inputs`
(kind variables, input 0), without table `inputs` and `mappings`: inputs=[], mappings=[],
read={ports:[],variable_ports:[0]}, finish="execute". parameters.rules addresses exact technical names.
Types integer/real/string/boolean are kept. Strings require case_sensitive,
and numbers require a finite nonnegative precision. case_sensitive:false ignores case
(ASCII is checked). precision is a search tolerance, not rounding: 1.25 against the key 1.2
at precision:0.1 becomes 2.5; other tolerance bounds are not checked.

Exact pairs: type:"string", pairs:[{from:"red",to:"blue"}], case_sensitive:false,
other:"keep". Regex: type:"string", pairs:[], regex_pairs:[{pattern:"^Ab-[0-9]+$",
replacement:"matched"}], case_sensitive:true, other:"keep". This is native regex and
a constant replacement string. Do not mix exact and regex for one variable and do not
use captures. The rest to NULL: pairs:[], other:"null" with the comparison option
for the type. NULL is distinct from an empty string. Rules and variables that are not listed,
including datetime, keep captions and types. The primary order is exact; after
Save/reopen, the standard order is allowed with autosync.
A type change, Variant replacement, datetime pairs, rule files, and other=value/regex
are not supported.

Sources are existing paths. variables.user/values supports a date of a whole second; new captions equal the names.
After values, Save and dock_node_read with a new operation_id and variable_ports:[4].
Before connecting, check the whole source and its metadata. Done saves the settings,
and Execute calculates; after reading the complete typed output 0, save the package separately.
For a repeated Execute of a saved node: the same ref, mode rules, parameters={},
inputs=[], mappings=[], without a new variable_inputs. On a patch, pass only
the rules that change, completely; the rest are kept.
<!-- /mode -->
