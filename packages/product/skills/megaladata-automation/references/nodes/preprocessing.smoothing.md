# Smoothing (`preprocessing.smoothing`)

<!-- mode: hodrick_prescott -->
## Hodrick–Prescott smoothing

To smooth a series with Hodrick–Prescott, use `dock_node_apply` with
`target.type="preprocessing.smoothing"`, `mode="hodrick_prescott"`, and
`parameters.smoothing:[{field:"X",lambda:1},{field:"R",lambda:1}]`.
For each continuous integer/real field, set exactly one of `lambda`
(0.0625…102659800000000) or a linked `period` (2…20000).
The input row order defines the series sequence; the original values and NULL
are kept, and real fields X_S/R_S are added. For this operation choose Smoothing;
Calculator and JavaScript are not needed to compute the trend. A new node requires the complete
list of rules; on an existing node, omitting `smoothing` keeps the settings,
and `smoothing:[]` turns processing off for every field. Execute with `finish:"execute"`,
`read.ports:[0]`, without training. After replacing the file, execute the previous node;
do not recreate it. All-null may produce a native algorithm error, which must be
reported to the user. For an exact field order use an existing
`mappings:[{direction:"output",port:0,autosync:false,fields:[...]}]`, listing
every source and smoothed field through `source:{kind:"configured_field",name:...}`
in the requested order. The natural autosync order may change when the package is
opened again. Wavelets are not supported in this mode.

For a Hodrick–Prescott trend, choose `preprocessing.smoothing` / `hodrick_prescott`; before configuration read [parameter, NULL, and output details](preprocessing.smoothing.md). Do not replace the node with Calculator or JavaScript.
After replacing the file, execute the previous node; do not recreate it.
<!-- /mode -->

<!-- mode: wavelet -->
## Wavelet smoothing

For wavelet smoothing, choose `dock_node_apply`,
`target.type:"preprocessing.smoothing"`, `mode:"wavelet"`,
`parameters:{smoothing:[{field:"X",family:"daubechies",order:1,depth:1,boundary:"symmetric"}]}`.
Families: `family:"daubechies"` with `order:1` (Haar) or `order:2`,
`family:"coiflet"` with `order:1`, `family:"cdf_9_7"` without `order`.
For CDF, a saved `order:null` in readback means there is no order.
Depth `depth` is 1 or 2; `boundary:"symmetric"` is symmetric,
`"zero"` continues with zeros, and `"reflect"` is symmetric without the end point. Use this node for
smoothing; do not compute the wavelet with Calculator or JavaScript.
Only the listed continuous integer/real fields are processed;
the original values and row order are kept, and a real X_S is added.
Use an input without NULL; missing-value interpolation is not confirmed.
A new node requires rules; on an existing node, omitting `smoothing` keeps
the settings, and `smoothing:[]` turns processing off. Change the depth on the same node;
do not recreate it. `finish:"execute"`, `read.ports:[0]`, and no training.
For an explicit field order you must set
`mappings:[{direction:"output",port:0,autosync:false,fields:[...]}]`:
each field with `source:{kind:"configured_field",name:"RowID"}` (likewise
X, Tag, and X_S) in the required order. Autosync may change the order after reopen.
Read the full output, export the CSV with the original types, and save the package.
<!-- /mode -->
