# Factor analysis (`research.factor_analysis`)

<!-- mode: pca_fixed -->
A given number of factors
For `mode:"pca_fixed"` set `parameters.factor_analysis.factors`.
`output_factors` is only when the user asks to limit the output; "N factors" is `factors`.
<!-- /mode -->

<!-- mode: pca_eigenvalue -->
Automatic selection by eigenvalue
For `mode:"pca_eigenvalue"` set `parameters.factor_analysis.eigenvalue`
(0.1…1.5). Factors above the threshold are selected. Do not pass `factors`.
When the criterion changes, pass its threshold explicitly; a new node is not needed.
<!-- /mode -->

<!-- mode: pca_variance -->
Automatic selection by cumulative variance
For `mode:"pca_variance"` set `parameters.factor_analysis.variance_percent`
(1…100 percent). Do not pass `factors` or `eigenvalue`.
When the criterion changes, pass its threshold explicitly; use the same node.
<!-- /mode -->

<!-- mode: pca_fixed pca_eigenvalue pca_variance -->
Use `dock_action_describe` and `dock_node_apply` of type
`research.factor_analysis`, `read.ports:[0,1]`, `mappings:[]`.
A new node: a complete `factor_analysis.features` in input order and an explicit `rotation`: `none`, `varimax`, or `quartimax`.
Features are continuous Integer/Real without NULL, constants, or a rank deficiency;
leave RowID and text without a role. `finish:"execute"` trains the current input and executes.
Change an existing node in place; omitted settings are kept.
`output_factors` is an independent output cap: a number ≥1 turns it on, and `false` removes it;
the trained count does not change. Without a cap, P Factor fields remain: extra scores are NULL,
and loadings are 0. A cap physically removes the extra fields of both ports. Read the full ports:
0 is the factors and the source fields, 1 is ColumnName/ColumnDisplayName and the loadings.
The handler fixes the order. Export the needed CSVs and save the package.
For Varimax/Quartimax set `rotation:"varimax"`/`"quartimax"` (Kaiser).
Omitting `rotation` on existing keeps the value; readback shows the actual one.
<!-- /mode -->

<!-- mode: apply -->
Apply a saved model without training
After replacing the import file, execute the import and check the new rows.
For the same trained node: `mode:"apply"`, `target.kind:"existing"`,
`parameters:{}`, `inputs:[]`, `mappings:[]`, `finish:"execute"`.
Settings, roles, rotation, and the cap are kept; the wizard closes with cancel,
and Teach is not called. A new node and editing parameters in apply are forbidden.
Read `read.ports:[0,1]` completely: 0 is the new scores, 1 is the previous loadings.
After Save/reopen, use apply again. Export both tables and save the package.
<!-- /mode -->
