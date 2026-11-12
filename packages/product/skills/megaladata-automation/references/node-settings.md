# Standard node settings

Read the matching section and its `parameter_schema` before applying a node.

## Missing values

To replace numeric NULL with zero, choose `preprocessing.data_recovery`, `mode:"impute"`,
`parameters:{fields:[{field:{kind:"input_field",name:"Amount"},method:"zero"}],max_nulls_percent:100,ordered:false}`.
`zero` is the native method for integer and real of either data kind; do not pass `value`.
`mean` requires a continuous numeric field, and `constant` requires a discrete string and a string `value`.
A supplied `fields` list replaces the whole processing set: unlisted fields are disabled.
To keep an existing node's settings, pass `parameters:{}`.
The threshold is an explicit integer 0–100; with `mean`, NULL above the threshold is kept.
Native `zero` fills NULL regardless of the threshold, including an all-null numeric field.
Existing zeros and unprocessed fields stay unchanged.
Use `finish:"execute"` and read port 0. Median, mode, ordered imputation, and interpolation are not supported.

## k-means clustering

Use `target.type:"datamining.clustering"`, `mode:"k_means"`, and input 0.
For a new node set `features:[{kind:"input_field",name:"X"},...]` only for continuous numeric features and `clusters` (2…1000).
Leave identifiers out of features: they remain in the output.
`seed` (0…2147483647) defaults to 42.
`normalization:"none"|"standardize"` applies to every selected feature.
Use standardize for different units or when the user asks for it. It is native standardization by sample SD.
A constant feature is accepted. A new node defaults to none; an existing node keeps one shared supported normalization when the parameter is omitted.
A mixed setting needs an explicit method.
`finish:"execute"` trains on the current input and then runs the node.
Read both ports: 0 is the original rows plus Cluster and Distance; 1 is the centers in the original units.
With standardize, Distance uses the normalized scale.
If input activation is refused, stop before training or Execute: correct NULL or invalid values and do not replace them with zeros.
To change parameters, use the same existing node.
Other normalizers, g-means, and applying a saved model to new data are not supported in this slice.

## Union

To append table rows, use `transform.union_data`, `mode:"append_all"`.
If the user asks to match identical fields, set `parameters.auto_match:"name_type"`; for identical labels, `"label_type"`.
Comparison is case-insensitive and requires the same type.
Input 0 is the main table; `tables:[{port:1,fields:[]},…]` lists every other input in order.
`prefixes:{enabled:false,name:"Union",label:"Union"}` keeps unpaired field names; on a name collision, set the input or the prefix explicitly.
Duplicate rows are kept.
When names differ, use an explicit map `fields:[{source:"InputName",main:"MainName"},…]`; `main:null` keeps a separate column.
Explicit entries win over automatic matching.
Without `auto_match`, the map must cover every field of every input.
Ambiguity requires an explicit map and is refused before Execute.
Check the final `configuration.readback.tables`, including unpaired fields.
Reconfigure the same existing ref and keep its inputs.

## Pearson correlation

For Pearson correlation of numeric fields, use `dock_node_apply` with
`target.type:"research.corr_analysis"`, `mode:"pearson"`, and complete technical-name arrays in `parameters.first_set` and `parameters.second_set`.
Connect the table to input 0, `finish:"execute"`, `read.ports:[0]`.
Each field of the first set is paired with each field of the second.
The native order is the second set outside and the first set inside, following input field order.
Output columns are ColSet1, ColSet1_Label, ColSet2, ColSet2_Label, and Pirson.
Missing values are excluded pairwise; zero variance yields NULL.
Do not compute this correlation in Calculator or JavaScript.
On an existing node, a supplied set replaces the previous one and an omission keeps it.
A nonempty source and at least two joint observations per pair are required. Other coefficients are not supported.

## Typed replacement result

For an exact dictionary of string or numeric keys with a typed result, choose `transform.replace_columns`, `mode:"exact"`.
In each rule, `type` stays the input field type. The extra `result_type` sets the type of `pairs[].to` and `other.value`: `string`, `integer`, `real`, or `datetime`.
Without `result_type`, the result type equals the input type and the previous rules are kept.
For example, `type:"string", result_type:"integer"`, with `from:{type:"string",value:"12"}` and `to:{type:"integer",value:12}`.
Keys follow the previous rules: strings require `case_sensitive`, and numbers require `precision>=0` (two decimal places): the tolerance is inclusive, the nearest key wins, and a tie chooses the larger key.
When precision is greater than 0, a real `_Delta` is key minus input.
A string key does not require precision even when the result is numeric.
This is a lookup table, not a parser of arbitrary text: an unspecified key, including a numeric string, follows `other`.
For a different result type, set `other:{mode:"null"}` or a typed `value`.
`keep` creates a Variant in Megaladata and is refused here.
`datetime` supports `other:null` and local ISO constants `YYYY-MM-DDTHH:mm:ss`, without a zone or fractional seconds.
An unmatched value and an original NULL with `other:null` yield NULL and a true flag.
`output_mode:"replace"` changes the original field type; `"add"` keeps the original field and creates `<name>_Replace` of the new type.
`<name>_Replaced` stays boolean.
An existing node with `parameters:{}` keeps every rule and type.
A supplied rule replaces that field completely; unlisted fields are kept.
For a row formula or arbitrary text conversion, choose Calculator.
Boolean results and a type change in regex are not supported yet.

## Regular-expression replacement

Use `dock_node_apply` with `target.type="transform.replace_columns"`, `mode="regex"`, not Calculator or JavaScript.
In `parameters.rules` set `field={kind:"input_field",name:…}`, `type="string"`, ordered `pairs` with `from={type:"string",value:<pattern>}` and `to={type:"string",value:<constant>}`, and `other={mode:"keep"}` or `null`.
The first substring match replaces the whole cell with the constant. Group references are not substituted and are copied literally.
Put `(?i)` at the start of the pattern for case-insensitive matching, and omit `case_sensitive` and `precision`.
ASCII literals, groups, `[0-9]`, a positive `{n}`, and `^`/`$` are supported.
`output_mode="add"` keeps the source field; `replace` replaces it. Both produce a logical `<field>_Replaced`.
To change the replacement text, pass the same existing ref and the complete rule for that field. Unspecified fields and `output_mode` are kept.
Mixed exact/regex tables and other constructions must be refused, not bypassed with JavaScript.

## Outliers and extremes

To find outliers and extremes by SD or IQR, use `target.type:preprocessing.elim_outlier`, `mode:detect`.
In `parameters.outlier` of a new node set `fields` (technical names of continuous numeric fields only), `method:sd|iqr`, explicit `outlier_factor`, `extreme_factor` (not less than the first), and `ordered` (the input is already ordered; this does not sort).
Detect keeps the original values, trains on the current input, then executes.
Use `finish:execute` and `read.ports:[0,1,2]`: all rows, outliers excluding extremes, and extremes.
Omitted parameters of an existing node are kept.
Do not compute this supported operation in Calculator or JavaScript.
Other edit policies, quality, and applying a saved model to a new input are not available yet.

## Sliding window

For copies of previous and next records, use `target.type="transform.sliding_window"`, `mode="lag"`, and `parameters.windows=[{field:"Sales",history:3,horizon:1}]`.
A new node requires an explicit `incomplete_records`: `keep_incomplete` adds incomplete edges, `drop_added` keeps the original rows, and `drop_all_incomplete` trims the edges while keeping real NULL.
Input order is the time order.
On an existing node, omitting a parameter keeps it, and `windows:[]` clears every window.

## Join

To match two tables by keys, use `target.type:"transform.join_data"`.
`mode:"right"` keeps every right-input row, `"full"` keeps both inputs, and `"difference"` keeps only left rows without a right match.
Set input 0 as left and input 1 as right, `parameters.keys:[{left,right}]` for every key part, and explicit `case_sensitive` and `include_joined_keys`.
Repeated keys keep every matched pair. A missing side is NULL.
Difference output contains only left-table fields for any `include_joined_keys`.
Key field names must have the same types. Resolve output-name collisions through input `mappings`.
Run an existing node without reconfiguration using its actual `mode`, `parameters:{}`, `inputs:[]`, and `mappings:[]`.

## Sampling and partition

Choose the first or last N rows with `preprocessing.sampling`, `mode:"sequential"`, and `parameters:{count:N,position:"first"}` or `"last"`.
Split rows sequentially with `preprocessing.data_partition`, `mode:"sequential"`, and `parameters:{train_count:N,test_count:M,allocation_order:"test_train_unused"}`.
Sizes are row counts. Use a normal `finish:"execute"` without training.
Read ports `[0,1,2]`: all, train, and test. The combined output starts with train, then test, and its first field is boolean `IsTestSet` (false for train, true for test).
For a small complete result set `sample_rows:100,require_exact_numbers:true` and check completeness.
For datetime fields, if the user did not set an export format, set `date_format:"yyyy/mm/dd"`, `date_separator:"-"`, `time_format:"hh:nn:ss.zzz"`, and `time_separator:":"` on `exports.text`. Empty settings use the local date format.
Create a random sample with the same `preprocessing.sampling`, `mode:"random"`, and `parameters:{count:N,seed:42}`.
For a random partition, use `preprocessing.data_partition`, `mode:"random"`, and `parameters:{train_count:N,test_count:M,seed:42}`. Test-set priority is off.
Do not pass `position` or `allocation_order` in random mode.
A new node needs explicit sizes and a seed. Pass only the changes to an existing node.
To repeat a run, keep the source and seed, use the existing node and `finish:"execute"`, then compare the full results.
If the user asks for stratified, biased, or uniform-random selection, say that this mode is not supported yet. Do not substitute another algorithm.

## Logistic regression

For a binary string target and an event probability, use `target.type:"datamining.log_regression"`, `mode:"enter"`, and `parameters:{logistic:{input_fields:[...],target_field:"...",event:"...",threshold:...}}`.
Give the exact event label and an explicit threshold: the event is `p >= threshold`.
`finish:"execute"` trains on every current input row and runs the model.
`read.ports:[0]` returns the class, probability, and original fields.
`input_fields` contains only numeric factors. Identifiers and comments stay without a role.
The intercept and epsilon 1e-10 are fixed.
For factor selection, use the same node with `mode:"forward"`, `"backward"`, or `"stepwise"`.
The criterion and selection thresholds are the standard Megaladata defaults.
Choosing the criterion and custom inclusion or exclusion thresholds is not supported.
If the user asks to change them, say so. Do not send those parameters and do not replace the request with standard selection.
`input_fields` are the candidates. Excluded factors remain in the output table.
Apply mode, weights, validation, coefficients, and the variables output are not available yet.
Request the node `parameter_schema` first.

## Linear regression apply

For a LinReg forecast on new data, use `mode:"apply"` on an already trained node with the saved `input_fields` and `target_field`, `inputs:[]`, and `finish:"execute"`.
`enter` trains or retrains the model.

## Date and time

For calendar features, use `target.type:"transform.date_time"`, `mode:"calendar"`, and `parameters.fields:[{field:{kind:"input_field",name:"DateA"},transformations:[{operation:"iso_year",name:"ISOYear",label:"ISO year"}]}]`.
Input fields must already be `datetime`.
Calendar year is `year`, ISO year is `iso_year`, ISO week number is `iso_week`, and its Monday at midnight is `iso_week_start`.
Day of week from Monday 1 through Sunday 7 is `day_of_week`.
Also supported: `quarter`, `month`, `day_of_month`, `hour`, `minute`, `second`, `year_start`, `year_end`, `quarter_start`, `quarter_end`, `month_start`, `month_end`, and `date`.
A field allows at most 12 transformations.
`minute` and `second` extract integers 0…59. Missing values stay NULL.
Each `fields` item replaces the complete transformation set of that field.
To remove one feature, list every transformation of that field that should remain.
An unspecified second field is kept.
On an existing node, `parameters:{}` keeps the settings, and `transformations:[]` clears only the named field.
Set output order through output 0 `mappings` with `autosync:false` and a complete `fields` list, addressing final names as `source:{kind:"configured_field",name:"ISOYear"}`.
Use `finish:"execute"` and `read.ports:[0]`. Save separately.
ISO week end (`iso_week_end`) is unavailable because of a Megaladata platform error. Report the limitation and do not substitute a calculated value.
For CSV dates, use the format and separators from the Export section.

## JSON to a tree and a tree to a table

If the REST result must be a table, parse the actual `Response` of output 0 through Calculator, Collapse, and Cross Table.
Keep the service `RequestID` so it can be joined to REST output 1, where the actual `HttpStatusCode` is read.
Take values from the server response. Do not substitute request fields or constants.
Choose formulas from Help and the observed response shape.
Do not pack several REST responses into one document to work around the tree limits.

Choose trees when the user asks for a tree, or when the JSON has one flat repeated record branch without nested objects or arrays inside the records.
Nested containers inside repeated records are not supported in this stage.
If REST parsing already returned `Nested containers in repeated records` or another tree-support refusal, do not stop a table scenario.
When the effect is unknown, first follow the issued recovery through `operation.recover`, then continue from the REST output on the table path.
Do not repeat an unsupported tree.

For one JSON object in one row of a string field, first execute and fully read the source.
Use `trees.from_json`, `mode:"auto_structure"`, `parameters:{json_field:"Document",root_mode:"auto"}`, `finish:"execute"`, and `read:{ports:[0],sample_rows:100,require_exact_numbers:true}`.
Output 0 is a typed tree: `tree.schema` stores order, names, types, containers, and arrays; `tree.instances` stores every instance, path, order, value, and NULL.
Large integers are decimal strings. Do not rebuild the tree from the task text.

Connect that same port to `trees.to_table`, `mode:"selected_nodes"`.
A new node requires `selected_paths` (leaf schema paths in schema order, for example `/id` and `/items/sku`, without array indexes), `repeat_parents`, `composite_names:false`, `composite_labels:false`, and `label_separator:"."`.
`repeat_parents:true` repeats selected parents for every position; `false` leaves them only on the first row and NULL after that.
Output 0 is a table. Read it completely, check types and order, then export and save the package.
An empty string, zero, and false are kept. A missing scalar and JSON null become NULL.
For a table export that contains NULL and empty strings, choose an explicit nonempty NULL marker.

This stage supports one nonempty repeated object branch with unique leaf names and at most 64 selected fields.
There is no manual schema, XSD, forced root, dates, Variant, several sibling arrays, or indexed and composite columns.
The tree is limited to 256 instances, depth 16, and 1 MiB. Exceeding a limit is a refusal, not a truncation.
On an existing node, `parameters:{}` keeps the settings, and an explicit `selected_paths` replaces the whole selection.
If the user asked for a tree and it is refused, report the limitation. Do not replace the requested tree with JavaScript or attachment calculations.
A tabular REST result uses the path above.

## Autocorrelation

For the dependence of a numeric series on earlier values, use `target.type:"research.auto_correlation"`, `mode:"time_domain"`.
In `parameters.autocorrelation` of a new node pass `field`, one exact integer or real technical name, and `lag_count`, the number of lags from 1, including lag 0.
Record order is the series order. Add a separate sort only when the user asks for it.
Connect the table to input 0. Other fields, such as RowID, are not part of the calculation.
`finish:"execute"`, `read.ports:[0]`. For a complete result set a sufficient `sample_rows` (up to 100).
The time domain and PACF off are part of this mode.
Do not replace this node with Calculator, JavaScript, or correlation of shifted fields.
The output contains Lag and the native ACF, error, and boolean significance fields, in increasing lag order.
The row count is limited by the input length. Original fields are not passed through.
On an existing node, omitting `field` or `lag_count` keeps a supported setting.
After replacing the input file, update the original import and execute the same existing node with the previous parameters, `inputs:[]`, and `mappings:[]`.
Do not create a new node for that.
A series of at least two finite nonempty values with positive variance is supported.
NULL causes a refusal that the data contains empty values. Show the reason and keep NULL. Do not substitute zero and do not return the previous result.
The frequency domain, PACF, and several series are not supported yet.

## Hodrick-Prescott smoothing

Use `target.type="preprocessing.smoothing"`, `mode="hodrick_prescott"`, and `parameters.smoothing:[{field:"X",lambda:1},{field:"R",lambda:1}]`.
For each continuous integer or real field, set exactly one of `lambda` (0.0625…102659800000000) or the related `period` (2…20000).
Input row order is the series order. Original values and NULL are kept, and real fields X_S and R_S are added.
A new node needs the complete rule list. On an existing node, omitting `smoothing` keeps the settings, and `smoothing:[]` disables every field.
Use `finish:"execute"` and `read.ports:[0]`, without training.
After a file replacement, execute the previous node. Do not recreate it.
An all-null field may produce a native algorithm error; report it to the user.
For an exact field order, use `mappings:[{direction:"output",port:0,autosync:false,fields:[...]}]`, listing every original and smoothed field through `source:{kind:"configured_field",name:...}` in the requested order.
The natural autosync order can change when the node is opened again.
Wavelets are not supported in this mode.

## Excel import

For a source XLSX workbook, use `imports.excel`, `mode:"xlsx"`.
Take `parameters.source` and `excel.source_path` from the verified delivery.
Pass the exact selected sheet name, including spaces and case, in `excel.sheet_name`.
If the parameter is omitted, a new import uses the first sheet; `source_switch` keeps the previous sheet.
`header_rows` is 1–10, and `columns` is a complete list of 1–12 fields in source order with explicit `name`, `label`, and `type`.
Types are `string`, `integer`, `real`, and `datetime`. A technical name is an ASCII identifier.
For a different source header, set `source_name`.
Include fields to the right of the visible area in `columns`: the wizard scrolls the grid while configuring.
NULL is kept. Do not convert the XLSX to CSV before import.

## Excel export

Use `exports.excel`, `mode:"xlsx"`, one input 0, and `parameters.excel_export`.
`destination` is a new `.xlsx` in the selected export directory, `sheet_name` is the explicit name of the single sheet, `header` is `"none"`, `"names"`, or `"labels"`, and `overwrite` is `"reject"`.
A new node needs all four parameters.
`finish:"execute"` and `read:{ports:[],sample_rows:0,require_exact_numbers:false}` return `output.file_artifacts`. Deliver that XLSX to the user.
Keep the source table types and order. Do not round values or turn text into formulas.
An existing file is rejected; choose a new path.
Omitted settings of an existing node are kept.
`done` saves settings without a file, and `close` discards the draft. Save the package separately.

## Numeric binning

To split a numeric field into intervals, choose `preprocessing.binning` through `dock_action_describe` and `dock_node_apply`.
Mode `internal` trains the current input, saves the intervals, and then executes the node.
Pass `parameters:{binning:{field:"X",method:"count",size:2,limits:[0,20]}}`.
`field` is the exact integer or real field name.
`count` is an integer number of intervals, and `width` is a positive width. Both require explicit `limits:[lower,upper]`.
`frequency` is an integer number of tiles by row count, with ties going to the next interval. Omit `limits` for it.
Rounding and open outer edges are off.
Other fields and row order are kept. NULL is distinct from an empty string.
To get the result, set `finish:"execute"` and `read:{ports:[0,1],sample_rows:100,require_exact_numbers:true}`.
Port 0 is the rows with derived fields immediately after the selected field. Port 1 is the intervals.
To apply the saved intervals of the same node after replacing the source, use `target.kind:"existing"`, `mode:"apply"`, `parameters:{}`, `inputs:[]`, `mappings:[]`, `finish:"execute"`, and both ports.
This mode does not train and closes an inspected draft without committing it.
If no intervals are saved, an explicit `internal` is required. Retraining also uses `internal`.
DateTime, automatic limits, SD, other tie rules, sums, and manual interval edits are not supported.
Do not compute this binning with Calculator formulas or JavaScript.
Saving the node does not save the package. Use `package.save_checkpoint` at the end.
