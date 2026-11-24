# Impute missing values (`preprocessing.data_recovery`)

<!-- mode: impute -->
## Impute missing values

To replace numeric NULL with zero, choose `preprocessing.data_recovery`, `mode:"impute"`,
`parameters:{fields:[{field:{kind:"input_field",name:"Amount"},method:"zero"}],max_nulls_percent:100,ordered:false}`.
`zero` is the native method for integer/real of both data kinds; do not pass `value`.
`mean` requires a continuous numeric field, and `constant` requires a discrete string and a string
`value`. The passed `fields` completely replaces processing: fields that are not listed
are turned off. To keep the settings of an existing node, pass `parameters:{}`.
The threshold is an explicit integer 0–100; with `mean`, NULL above the threshold is kept. Native
`zero` fills NULL regardless of the threshold, including a completely empty numeric field. Existing zeros and
fields that are not processed are kept. Use
`finish:"execute"` and read port 0. Cubic and spline interpolation are not supported.

## Median, most probable, previous, linear, random, and row deletion

These are methods of the same node, not Calculator or JS. NULL is only a real missing value:
an empty string, `"null"`, 0, and false remain values. Do not pass `value`.
- `median` is the median of the known values; continuous integer/real.
- `most_probable` is the most probable value (mode) of the known values; a discrete string.
- `previous` is the previous known value in the physical input row order;
  continuous integer/real, only with `ordered:true`. Do not sort by RowID or
  an identifier.
- `linear` is linear interpolation between neighboring known values in
  the physical input row order; continuous integer/real, only with
  `ordered:true`. Sorting by RowID is not allowed. For "restore the series linearly"
  choose this mode, not Calculator or JS.
- `random` is the standard replacement of NULL by a random value from the known values; continuous
  integer/real, only with `ordered:false`. Do not change the random-source setting.
  If only one value is known, the result is determined.
- `delete` deletes rows where this field is NULL; continuous integer/real,
  only with `ordered:false`. NULL in other fields of the row does not delete it.

`ordered:true` is allowed only when every processed field is `previous` or
`linear`; for the other methods use `ordered:false`. For different methods on one node (median and
most_probable), pass them in one `fields`. Example: `parameters:{ordered:false,
max_nulls_percent:100,fields:[{field:{kind:"input_field",name:"I"},method:"median"},
{field:{kind:"input_field",name:"S"},method:"most_probable"}]}`. Fields that are not listed
are not processed and are kept. `delete` reduces the row count — read
port 0 completely, not by the input row count.

Before imputing, match the method to the actual field type and kind and the
contract: the current `preprocessing.data_recovery` supports `mean` only for
continuous integer/real, `zero` for numeric integer/real, and `constant` only for discrete string.
A numeric constant cannot be passed as the string `"0"` to bypass that boundary.
If a business rule says a missing payment or observation means zero, use the
standard `method:"zero"` of this node without `value`; set an allowed null
percent and `ordered:false` explicitly. With `mean`, the threshold may leave NULL; native `zero`
fills NULL regardless of the threshold, including a completely empty numeric field.
Check the actual result before arithmetic and filtering.
Without such a rule, do not substitute NULL. After a refusal, read the current output
of the chosen existing source; do not build a formula from the output of a failed node.
If an effect is possible, settle the original operation according to browser.md first.
<!-- /mode -->
