# Binning (`preprocessing.binning`)

<!-- mode: internal apply -->
## Binning a numeric field

To split a numeric field into intervals, choose `preprocessing.binning` through
`dock_action_describe` and `dock_node_apply`. Mode `internal` separately trains
the current input, saves the intervals, and then executes the node. Pass
`parameters:{binning:{field:"X",method:"count",size:2,limits:[0,20]}}`:
`field` is the exact name of an Integer/Real/DateTime field; `count` is the integer number of intervals,
`width` is a positive width; `limits:[lower,upper]` set manual edges. For numeric auto limits, omit `limits`: count=2 places min/max at the centers of the outer intervals.
For tiles by observation count, pass, for example,
`parameters:{binning:{field:"Score",method:"frequency",size:3,ties:"current"}}`:
ties on a boundary stay in the current interval.
Without `ties`, `"next"` applies — ties move to the next interval.
`size` is the integer number of tiles; omit `limits`, and sums are off. Rounding is off; open edges are only in SD.
The other fields and the row order are kept; NULL is distinct from an empty string.
To get the result, set `finish:"execute"` and
`read:{ports:[0,1],sample_rows:100,require_exact_numbers:true}` explicitly: port 0 is the rows
with derived fields immediately after the selected field, and port 1 is the intervals.
To apply the saved intervals of the same node after replacing the source,
use `target.kind:"existing"`, `mode:"apply"`, `parameters:{}`, `inputs:[]`,
`mappings:[]`, `finish:"execute"`, both ports. This mode does not train and closes
the reviewed draft without a commit. If there are no saved intervals, an
explicit `internal` is required. Retraining also goes through `internal`.
For SD, pass `parameters:{binning:{field:"X",method:"sd",sd_coefficient:1}}`; coefficient 1/2/3 gives 3/5/7 classes with two open tails. Omit `size` and `limits`. Numeric limits use the population SD; at ±1 the outer bounds are μ±2σ and the inner bounds are μ±σ. Flags that include the open tails in the rows may differ from the range-bound quotas — read both ports. After training, change captions through `manual` on the same node, passing every observed interval and flag; do not train again. Other tie rules and sums are not supported.

## DateTime and manual bounds on the same node

For a DateTime field (type 2), use this node, without Calculator or JavaScript.
First `internal`, `method:"count"`, `size:2`, and `limits` as civil ISO
`["2027-07-10T00:00:00.000","2027-07-22T00:00:00.000"]`. Do not add a time zone
and do not convert it. Execute and read both ports. To move a shared boundary
and change captions, call `dock_node_apply` for the **same** `target.kind:"existing"`
and ref, `mode:"internal"`, `inputs:[]`, `mappings:[]`,
`parameters:{binning:{field:"EventTime",method:"manual",intervals:[
{lower:"2027-07-10T00:00:00.000",upper:"2027-07-18T00:00:00.000",lower_included:true,upper_included:true,label:"Phase A"},
{lower:"2027-07-18T00:00:00.000",upper:"2027-07-22T00:00:00.000",lower_included:false,upper_included:true,label:"Phase B"}]}}`.
Pass every interval in its order; the inclusion flags keep the observed
values. Omit `size`, `limits`, `ties`, and `sd_coefficient` in manual. This call saves the manual
bounds and captions and executes the node **without Train again**. After it, do not call
count to apply: that trains again. For the next execution, use
`apply`. Manual also needs `finish:"execute"`,
`read:{ports:[0,1],sample_rows:100,require_exact_numbers:true}`.
Port 0 keeps the source fields, and derived fields follow immediately after the selected field;
port 1 contains the datetime bounds and BoundsDataType=2. The original NULL is kept,
and the number, caption, bounds, and OutOfBins are NULL; BinsID contains the name of the selected field, open=false.

Use this node for numeric tiles as well, without Calculator or JavaScript.
Saving the node does not save the package: at the end call `package.save_checkpoint`.
<!-- /mode -->
