# Calculator (`transform.calculator`)

<!-- mode: expression -->
For formulas with workflow variables, use `dock_node_apply` with
`target.type:"transform.calculator"`, `mode:"expression"`.
In `parameters.expressions[].formula` write `Var.Amount`; the table field
`Amount` keeps its name. Connect the table through `inputs` (input 0),
and output 4 of `variables.user` through
`variable_inputs:[{source:ref,output:4,input:0,kind:"variables"}]`.
Set the variable first on the existing `variables.user`, mode `values`,
by the [variable](variables.user.md) rules.
For a checked input, add the mapping
`{direction:"input",kind:"variables",port:0,autosync:false,fields:[{source:{kind:"configured_field",name:"Amount"}}]}`.
Table mappings have no kind; for an exact result order, set a complete
output mapping of port 0 with autosync:false.
After changing only the source value, execute the same Calculator:
`target.kind:"existing"`, its ref, `parameters:{expressions:[]}`, `inputs:[]`,
`variable_inputs:[]`, `mappings:[]`, `finish:"execute"`, `read.ports:[0]`;
formulas, fields, and links are kept. Read the result completely: an old read
does not confirm the recalculation. Do not substitute the variable value into the formula;
read a missing Var error as a Megaladata refusal.

Formulas are checked by Preview before configuration finishes. On
`WIZARD_CALCULATOR_VALIDATION_FAILED`, take the Megaladata text and the field names from the refusal:
fix the formula and execute `next_step` with a new operation_id on the same node. After
a confirmed draft cancel, do not call `node_wait`; keep the links.

In a Megaladata string literal, double a quote as `""`, for example `RegExMatchedSubExp("""id"":([0-9]+)", Values, 1)`; a backslash does not escape it.

Compute running totals, shares, and ranks in one table with Calculator functions
after a Sort in the required order; joining the table to itself is not needed.
[CumulativeSum("FieldName")](https://help.megaladata.ru/userguide/processors/func/calc-func/mathematical.html#cumulativesum)
computes the running total; the share of the table total is
`CumulativeSum("Revenue") / Stat("Revenue", "Sum")` when the total is not zero.
[Stat("FieldName", "Kind")](https://help.megaladata.ru/userguide/processors/func/calc-func/statistical.html#stat)
works on input fields: pass a measure computed here
to the next Calculator. For a rank by position use
[RowNum()](https://help.megaladata.ru/userguide/processors/func/calc-func/other.html#rownum);
check the numbering start and equal values against the task and Help.

## Intermediate expressions and cache

`intermediate:true` is a helper expression: it is not an output, do not list it in `mappings`,
and refer to it later by name (JS: `this.Expr.Name`). `cached:true` turns the cache on; unspecified flags
are kept. `order` includes every expression. Turn the cache off like this:
`target:{kind:"existing",name:"Helper"},cached:false`, `finish:"execute"`;
read the output again completely.

## JavaScript

`parameters.syntax:"javascript"` sets the language of the whole node (a new node defaults to
`expression`, and omitting it on an existing node keeps the language). The formula is a body with `return`:
`return Quantity * UnitPrice;`. A name reads an input field, and `this.Expr.Name`
reads an expression of the node; do not use `this.Field`. Changing the language does not translate formulas:
set a new `formula` on every expression that remains. For JavaScript in
Calculator, choose this node, not `programming.javascript`.

## Continuing a package

After opening a package, a save does not prove that the output is active. Before a new
`transform.calculator`, confirm the output of the same table source:
`megaladata_dock_node_read` with a successful local operation of the current preparation, otherwise
an existing apply with the exact ref, the previous type/mode, `inputs:[]`, an empty patch, and
`finish=execute` ([Graph and nodes](../canvas.md)). Wait for
the confirmed execution of the source.
A refusal `calculator preflight requires an active source output` (`NOT_APPLIED`,
`effect_possible=false`): the node was not created; after the source executes, repeat the request
with a new operation_id, without recreating the source. Repeating an unknown run and
automatically starting REST, JS, or export outside the request is not allowed.
<!-- /mode -->
