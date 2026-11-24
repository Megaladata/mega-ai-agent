# variables.column_union / append_variables

<!-- mode: append_variables -->
Native Variable union: `dock_node_apply`,
`target.type:"variables.column_union"`, `mode:"append_variables"`,
`inputs:[]`, `mappings:[]`, `parameters:{}`. Do not replace it with Calculator or JS.
In `variable_inputs`, use different sources of the fresh graph of this document:
`{source:NodeRef,output:observed_port,input:0,kind:"variables"}`,
and likewise input 1. For Execute: `finish:"execute"`,
`read:{ports:[],variable_ports:[0],sample_rows:0,require_exact_numbers:true}`.
The complete native VariablesForm is read: name, caption, type, typed value.
Order: input 0, then 1, then a connected 2. Native names are unique:
a0/a0/a1 → a0/a1/a2, title → title_1; read the actual names, and captions have no numbering.
Integer/real/string/boolean, up to 128 variables; a typed NULL is distinct
from an empty string, false, and zero. After the read, `package.save_checkpoint`.
Change a source with its own type. In a `variables.calculator` patch, pass
only the `parameters.expressions` that change:
`target:{kind:"existing",name:"saved_name"},formula:"new_expression"`.
Then Execute the same existing Union: `parameters:{}`, `variable_inputs:[]`,
`inputs:[]`, `mappings:[]`; the settings and links are kept.

For a manual selection and order, and renaming with a caption without changing the type,
use the same `variables.column_union`, `mode:"append_variables"`:
On creation, `target.label` may be omitted: a stable caption will be assigned.
After AMBIGUOUS, use inspect; do not repeat creation of the node or the link.
`parameters:{column_union:{mapping:"manual",fields:[
{input:1,source:"amount",name:"right_amount",label:"Right amount",type:"integer"},
{input:0,source:"amount",name:"left_amount",label:"Left amount",type:"integer"}
]}}`. `fields` is the whole output in the required order; variables that are not listed are excluded.
`input` is 0 or 1, `source` is the original technical name from that input,
and `name/label/type` is the output. Result names and input/source pairs are unique.
Only the original type is allowed. In Megaladata 7.4.2, a manual mapping does not
convert integer→string: do not promise that conversion. When the
types do not match, preflight refuses before the sources, the node, and the links change.
Suggest a Variable Calculator after the Union for the type conversion;
create it only within the task the user agreed to.
For two independent sets of constants, create two `variables.calculator`
nodes (a separate node for each set), execute them, and read their outputs; those are the sources,
and the manual mapping is performed only by the native Variable union.
Before a manual Union, execute the source after editing it.
After a patch of only the right source, repeat Execute of the same Union with
`parameters:{}`, `variable_inputs:[]`, `mappings:[]`: the saved manual
fields, types, order, and links remain. Do not repeat fields to refresh the data.

The third input is automatic only: first create the Union on 0,1 and read
output 0. On the SAME existing NodeRef, pass three `variable_inputs` in order
0,1,2, `kind:"variables"`, `parameters:{column_union:{mapping:"automatic"}}`.
The runtime presses Input_Add once, connects input 2, and keeps the node GUID,
the first ports, and the links. Execute and read output 0 completely.
To disconnect only the third link: the same existing NodeRef,
`parameters:{column_union:{mapping:"automatic",disconnect_input:2}}`,
`variable_inputs:[]`, `inputs:[]`, `mappings:[]`, `finish:"execute"`, and the read above.
The port remains; an empty list WITHOUT disconnect_input keeps every link.
Read the whole new output and save the package. At most three different sources;
control, a fourth input, builtin creation, and separate port editors are forbidden.
When the inputs change, the runtime once chooses "Delete and continue" for the exact
native question; after the same Yes and the exact warning "Continue anyway"
one Next retry is possible. A read or readback does not confirm the deletion.
Ports, GUID, links, and the complete ordered output are checked; a mismatch is FAIL
with the journal, without a retry.
<!-- /mode -->
