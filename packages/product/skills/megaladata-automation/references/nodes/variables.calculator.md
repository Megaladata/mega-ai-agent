# variables.calculator / expression

<!-- mode: expression -->
For scalar workflow parameters, choose `dock_node_apply` with
`target.type="variables.calculator"`, `mode="expression"`.
Table expressions belong to `transform.calculator`; configure scalar
variables with this type and no table input.
Pass `parameters.expressions`: 1–32 changes with `target:{kind:"new"}`
and the fields `name`, `label`, `type`, `formula`. Set the technical name,
caption, type (`integer`, `real`, `string`, `boolean`, `datetime`), and the Megaladata formula explicitly.
Put string literals in quotes; TRUE/FALSE are logical values,
and NULL is absence. For a dependency, use Expr.name of the previous expression,
including an intermediate one. Keep the order; on a new node, replace the empty Expr1.
Write a variable from the `variables` input by name without a prefix: `"/folder/report-" + ReportDate + ".csv"`.
`Var.ReportDate` here is a formula error (the wizard will not finish); `Var.` is only in the table Calculator.

Set a date/time with type `datetime` and the formula
`EncodeDateTime(2026,11,7,23,59,58,123)`. Read the calendar date to milliseconds
without a time zone: `2026-11-07T23:59:58.123`; do not convert it to UTC.
Pass `intermediate:true` to an intermediate expression: it takes part in
later formulas, but it is absent from the output variables. For example,
`base` of type integer with formula `2` and `intermediate:true`, then `total`
of type integer with formula `Expr.base+1`. Both expressions remain in the configuration,
and only total is in the output. When adding, `intermediate` defaults to false;
on an existing expression, an omitted flag is kept. An explicit false clears it.

When updating an existing expression, pass
`target:{kind:"existing",name:"saved_name"}` inside the
`parameters.expressions` item and change only the needed properties. For example, to
change the intermediate base to 4, pass only its target and `formula:"4"`.
Do not add another variable instead of changing the value.
Omitted expressions must be kept together with the ID, types, flags, and order.
Variant, replacing input variables, caching, reordering, and JavaScript
are not supported.

`finish:"execute"` recomputes the values without training.
Pass `read:{ports:[],variable_ports:[0]}`; a repeated read is
`dock_node_read` with the `source_operation_id` of the confirmed result. Read variable output
0 exactly: the name, caption, type, and value of each item in order. Distinguish NULL,
an empty string, false, and zero. The formatted text 0.13 may mean 0.125;
use the typed reader, and if an exact read is impossible, report the refusal.
After a change, execute the node again, check the result, and save the package.
<!-- /mode -->
