# Edit outliers (`preprocessing.elim_outlier`)

Use `dock_node_apply`, `target.type:preprocessing.elim_outlier`, one
table input. Process only the selected continuous integer/real fields;
keep the rest. NULL does not take part in the statistics. `finish:execute`,
`read.ports:[0,1,2]`: 0 is the processed result, 1 is the original outliers without
extremes, and 2 is the original extreme rows. The side outputs keep
the original values. Perform this operation with this node; Calculator and JavaScript
are not needed to compute it independently.

<!-- mode: detect -->
`mode:detect`, `parameters.outlier`: `fields` (technical names of
continuous numeric fields only), `method:sd|iqr`, explicit `outlier_factor`,
`extreme_factor` (not less than the first), and `ordered` for a new node.
The input ordered flag does not sort the data. Both actions are keep.
Before Execute the node trains on the current input. A patch keeps unspecified
detection settings. IQR: Q(p)=sorted_non_null[min(floor(n*p),n-1)],
strict bounds Q1−k*(Q3−Q1), Q3+k*(Q3−Q1); quantiles are not interpolated.
<!-- /mode -->

<!-- mode: edit -->
`mode:edit`, `parameters.outlier`: `fields` (technical names), `method:sd|iqr`,
explicit `outlier_factor`, `extreme_factor` (not less than the first), and `ordered` for
a new node. Also set independent `outlier_policy` and `extreme_policy`:
`keep`, `mean`, `median`, `most_probable`, `limit`, `delete`, `constant`. A new node needs both policies;
a patch of an existing node keeps an omission separately for each field and
class. For a field that is newly turned on, set both policies, the method, and both factors.
Before Execute the node trains on the current input. With SD and factors 1/2, mean is computed from
the normal values; median is the upper mean observation of the whole non-NULL
sample, and most_probable is the center of the first most frequent Sturges interval of the whole
sample. After execution, read the full results of all three ports,
export each to CSV, and save the package. Reading a saved node again
runs without reconfiguration. `delete` removes the whole record only from port 0;
the side ports keep the original anomalous rows. `constant` requires a finite
number `outlier_constant` for outliers and a separate `extreme_constant` for extremes;
these parameters are allowed only for the constant policy of their own class. For example, policies
constant/constant with `outlier_constant:0, extreme_constant:100` are independent.
On a patch, an unspecified constant of its active class is kept; when the
policy changes, a hidden constant is not used. `limit` replaces an outlier with the nearest boundary of the normal class
for SD and IQR; extreme values are limited by the same boundary.
<!-- /mode -->

Quality is unavailable through the visible Megaladata 7.4.2 UI. After the input changes, Execute
recomputes the bounds: applying a saved model without training is unavailable.
