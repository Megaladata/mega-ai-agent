# Linear regression (`datamining.lin_regression`)

`dock_node_apply`: `input_fields`/`target_field` are the technical names of continuous numeric fields (indicators are below); the other fields are kept outside training.
Keep types and values: integer X/ID is `type:"integer", data_kind:"Continuous"`; Real is a fractional field or an explicitly requested Y. After import, read every field completely.
All rows, a constant, no normalization or validation; `finish:"execute"` is Teach and Execute. Changes retrain the same node.
Outputs: **0 is the forecast `<target>_rergession` and the source fields; 1 is the coefficients `Name`/`<target>_coefficients` with the constant; 2 is the summary**. Tables: `read.ports:[0,1]`, `sample_rows:100`, `require_exact_numbers:true`.
The forecast CSV is `exports.text` from port 0, `inputs:[{source:regression.node,output:0,input:0}]`, including when `statistics:"full"`. Coefficients are port 1; their CSV is only on request, separately. Save the package; a cold open has no configuration.
Model-quality summary (physical port 2): `read.variable_ports:[0]` after Execute, a complete fresh `VariablesForm`, 15 variables. Variable ordinals are separate; `read.ports:[2]` is wrong. Use only native values, without Calculator, JS, or recomputation.

<!-- mode: enter apply -->
`enter` trains or retrains. To forecast new data: `mode:"apply"` on the same trained Enter node, the previous `input_fields`/`target_field`, `inputs:[]`, `finish:"execute"`; the model and settings are kept without Teach.
Sequential train/test is Enter, `linear_regression.partition:{method:"sequential",train_count:16,test_count:2}`. The first 16 rows train, and the next 2 are only forecast.
The model-quality summary with F/p is `statistics:"coefficients"` (the default); port 1 is Name/Y_coefficients. F/p of the summary (port 2) does not require `full`. SE/t/p/95% bounds of the **coefficients** are on request: `mode:"enter"`, `linear_regression:{statistics:"full"}` is port 1, 9 native columns with NULL.
Categories: a discrete string in `input_fields` and `linear_regression:{statistics:"full",normalization:[{field:"Category",method:"indicator",reference:"first"}]}`. The first item of the native list is the reference, with a visible zero coefficient. Name is repeated; UniqueValues (string) distinguishes categories. Enter only, without apply or other reference values; numeric fields are not normalized.
<!-- /mode -->

<!-- mode: forward backward stepwise -->
R² (`r2`) did not pass native acceptance. `criterion:"r2"`, including thresholds 0/1: refusal before an effect, `NOT_APPLIED`, `effect_possible:false`. Report the reason without substituting another criterion, Calculator, or JS.
`parameters.linear_regression.selection.criterion`: `f`, `adjusted_r2`, `aic`, `aicc`, `bic`, `hqc`. The default is F; the criterion determines how many factors are selected. Significance thresholds are only for F, strictly 0..1.
<!-- /mode -->

<!-- mode: forward -->
Forward selection is `mode:"forward"`. F: `add_significance:0.05` edits inclusion; the disabled `remove_significance:0.1` only checks the saved value.
<!-- /mode -->

<!-- mode: backward -->
Backward elimination is `mode:"backward"`. F: `remove_significance:0.1` edits removal; the disabled `add_significance:0.05` only checks the saved threshold.
<!-- /mode -->

<!-- mode: stepwise -->
Inclusion and removal is `mode:"stepwise"`, `linear_regression.selection:{criterion:"f",add_significance:0.05,remove_significance:0.1}`. Both thresholds are edited, and addition is less than removal.
<!-- /mode -->

<!-- mode: ridge -->
Manual Ridge: `mode:"ridge"`, `linear_regression:{lambda_l2:1}`. L2 is a finite number ≥0. Automatic selection and bindings are not supported; report the reason.
<!-- /mode -->

<!-- mode: lasso -->
LASSO: `mode:"lasso"`, `linear_regression:{lambda_l1:1}`. Manual L1 is a finite number ≥0. The penalty RSS+λΣ|β| includes the constant. Automatic λ selection and bindings are not supported; report the reason. Strict accuracy on correlated data is not guaranteed.
<!-- /mode -->

<!-- mode: elastic -->
Elastic Net: `mode:"elastic"`, `linear_regression:{lambda_l1:1,lambda_l2:3}`. Manual finite λ≥0, with a sum >0; no automatic method/λ selection and no bindings. Changing λ on the same node: `finish:"execute"` retrains; read ports [0,1]. Port 1 is Name and Y_coefficients with the constant and X3. Strict accuracy on correlated data is not guaranteed.
<!-- /mode -->
