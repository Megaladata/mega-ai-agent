# control.condition

Condition switches branches: the first true branch runs, and the others are
blocked; if every branch is false, the built-in Otherwise branch runs. When the
task asks to choose a branch or a mode from a variable value, use
`control.condition`, not Calculator, Row Filter, or JavaScript: those do not
block branches. First call `dock_action_describe({node_types:["control.condition"]})`.

A new node has no ports, and condition fields appear only after links. Setup
therefore takes two `dock_node_apply` calls on one node, by ref/GUID.

<!-- mode: ports -->
Step 1. target `{kind:"new",type:"control.condition"}`, mode `ports`,
parameters `{}`, inputs `[]`, no variable_inputs, mappings `[]`,
finish `"done"`, read `{ports:[],sample_rows:0,require_exact_numbers:false}`.
The node receives table input 0 and variables input 0; both are passed through
to every branch. After Done the node has two table outputs: 0 is the user
branch, 1 is Otherwise. Do not add a second node for Otherwise.
<!-- /mode -->

<!-- mode: variable_branch -->
Step 2. target `{kind:"existing",type:"control.condition",ref}` of the same node,
mode `variable_branch`. In the same call, link the inputs:
inputs `[{source:<table ref>,output:0,input:0}]`,
variable_inputs `[{source:<variables.user ref>,output:4,input:0,kind:"variables"}]`
(output 4 of Workflow Variables is every variable).
parameters `{branches:[{name:"Detailed",variable:"Mode",operator:"=",value:1}]}`:
exactly one user branch and one "variable = value" condition.
variable is the technical name of the input variable; value has the same type
(a JSON integer or a string). Otherwise is not configured: it is built in.
finish `"execute"`, read `{ports:[<output of the selected branch>],sample_rows:100,require_exact_numbers:true}`.

The read result contains `branch_activity`: `executed` true/false for each
output. That is the check that the other branch did not run. Read only the
output with executed:true; the output of a blocked branch is refused as not
executed. That is the expected result, not a failure.

Changing the mode after a variable change: change only the value in
`variables.user` (the same ref, mode values). Then execute Condition without
reconfiguration: the same ref, mode `variable_branch`, parameters `{}`, inputs `[]`,
no variable_inputs, mappings `[]`, finish `"execute"`, and read.ports set to the
output of the branch that should now run (1 for Otherwise). The handler only
reads the saved branch: one condition, its field is the input variable (from
the node field list, unchanged), relation =, and a value is set. Anything else
refuses before Execute: reconfigure Condition through branches. After Execute,
`branch_activity` is returned again: the previous branch is `executed:false`.
Do not call `dock_node_read` for the output of a blocked branch.

Not supported: table-column aggregations, OR, case, several branches, trees,
and debug mode. Such a request is refused before the node changes.
If Megaladata stored a different value (the wrong type), the handler reports
the refusal: fix value to match the variable type.
<!-- /mode -->
