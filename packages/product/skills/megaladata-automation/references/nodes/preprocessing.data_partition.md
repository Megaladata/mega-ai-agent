# Partition into sets (`preprocessing.data_partition`)

<!-- mode: sequential random stratified biased -->
## Sampling and partition

Choose the first or last N rows with `preprocessing.sampling`, `mode:"sequential"`, `parameters:{count:N,position:"first"}` or `position:"last"`. Do a sequential partition with `preprocessing.data_partition`, `mode:"sequential"`, `parameters:{train_count:N,test_count:M,allocation_order:"test_train_unused"}`. Sizes are in rows; the allocation order is `allocation_order`. An ordinary `finish:"execute"`, without training. Read ports `[0,1,2]`: combined/train/test; the combined output contains train first, then test, and the first field `IsTestSet` boolean (false/train, true/test). For a complete small result set `sample_rows:100,require_exact_numbers:true` and check completeness. Choose the NULL marker for export by the [export rule](exports.text.md). For `datetime` fields, if the user did not set an export format, set `date_format:"yyyy/mm/dd",date_separator:"-",time_format:"hh:nn:ss.zzz",time_separator:":"` on `exports.text` explicitly: empty settings use the local date format. For these operations choose the named nodes; Calculator and JavaScript are not needed. Create a random sample with the same `preprocessing.sampling`, `mode:"random"`, `parameters:{count:N,seed:42}`. Set stratification with `mode:"stratified"`, `parameters:{count:N,seed:42,strata_fields:[{kind:"input_field",name:"Class"}]}`: list every discrete stratum field. For biased selection use `mode:"biased"`, `parameters:{count:N,seed:42,bias_field:{kind:"input_field",name:"Class"},bias_factors:[{value:"A",factor:0.4},{value:"B",factor:1}]}`. The bias field is a discrete string, and factors 0..1 cover every observed category. The size does not set an exact quota for each category. `preprocessing.data_partition` has the same three modes and method parameters, but the sizes are `train_count` and `test_count`; test-set priority is off. In these modes do not pass `position` or `allocation_order`. A new node requires explicit sizes, seed, and method parameters; pass only the changes to an existing node. To run again, keep the source and the seed, use the existing node and `finish:"execute"`, then compare the full results. For random selection, stratification, and bias, choose these nodes through `megaladata_dock_node_apply`.

### Sequential partition

Train/test sizes and the allocation order; no training.

### Random sample or partition

Explicit sizes and seed; repeat on the same source and seed. For stratified and biased, use the parameters above.
<!-- /mode -->

<!-- mode: uniform -->
## Uniform random method

Choose `megaladata_dock_node_apply`, `preprocessing.sampling`, `mode:"uniform"`, `parameters:{count:6,seed:42,group_size_rows:1}`. The group size in rows is separate from the sample size. For `preprocessing.data_partition` use `parameters:{train_count:6,test_count:4,seed:42,train_group_size_rows:1,test_group_size_rows:1}`; read ports `[0,1,2]` (combined/train/test). Test-set priority: `test_priority:true,test_priority_position:"beginning"` or `"end"`. On an existing node pass only the changes; omitted settings are kept.

Use `finish:"execute"`. Repeat the same node with the same source, seed, and group sizes. Check the full values and types of every port. Do not promise class quotas or a generator formula. Export the requested CSVs and save the package after configuration.
<!-- /mode -->
