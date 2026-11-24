# Association rules

<!-- mode: fp_growth -->
Use the node `datamining.assn_rules`,
mode `fp_growth`: one main input with discrete string fields
`transaction_field` and `item_field`, one purchase item per row.
Parameters `min_support_pct` and `min_confidence_pct` are percentages;
`max_items=2` or `3` limits the total number of items in a set and a rule,
including the condition and the consequent. `max_consequents=1` or `2` limits the
consequent and must be less than `max_items`; for a new node the default is 1.
`min_lift` is the minimum lift as a ratio, not a percentage;
the default is 0. A new node
needs all five parameters and `mappings:[]`. On an existing node, omitted values are kept.

`dock_node_apply` with `finish:execute` explicitly trains the current linked input, waits for completion, and executes the node. A repeated Execute retrains. An auxiliary input and filters of selected items are not supported.
To compare thresholds, export both ports first, then pass
`target.kind:existing` and the ref of the same node, `parameters:{min_lift:<new threshold>}`,
`inputs:[]`, `mappings:[]`, `finish:execute`. This explicitly retrains the node;
read and export both fresh results. RuleID is renumbered after the filter.
Singleton sets are included.
To exclude items that are too frequent, set `exclude_support_above_pct`,
a percentage from 0 to 100. Items with support strictly above the threshold are excluded,
then sets and rules are built from what remains. `null` turns exclusion off;
on an existing node, omitting it keeps the threshold and the state. After the change,
execute `fp_growth` on the same node and export both results.
After opening a saved package that has exclusion, execute `fp_growth` on the same node again with `finish:execute`. Otherwise Megaladata 7.4.2 returns sets without the exclusion; the rules and settings are kept.
If purchase fields contain NULL or empty IDs or items, do not process them yourself; tell the user.

Choose this node, not Calculator or JavaScript. Outputs: 0 is sets, 1 is rules, 2 is rule application, recommendations
of missing items for the current input. For rules and recommendations
set `read.ports:[1,2]`, `sample_rows:100`, `require_exact_numbers:true`.
Port 2 keeps the RuleID of the matching rule on port 1, Support/Confidence/Lift,
the `transaction_field` field, and the item fields of the condition and consequent. Read the full values,
types, NULL, and the native order of every field. A recommendation refers to a consequent
that is absent from the purchase. Do not rank equally good rules yourself.
For each table, create a Text Export from the needed port: `output:1` or
`output:2`, every field in the order that was read. Do not compute support and confidence from the rounded display.
Item field names are derived from the selected `item_field`: suffixes `_0`, `_1`,
and for length 3 `_2` on sets; `_0_A`, `_1_A`, `_0_C`, `_1_C` on rules
with two consequents. On a new node of length 3, fields are grouped A/A/C/C;
after a length change the order may be A/C/A/C. Keep the native order read from
that node; missing positions are NULL.
Save the package separately after the export.
<!-- /mode -->

<!-- mode: apply -->
For new purchases, use the same `datamining.assn_rules` with the saved
model. Replace the file of the same Import with the holdout and execute the Import.
Call `dock_node_apply`: `target.kind:existing`, the ref of the trained node,
`mode:apply`, `parameters:{}`, `inputs:[]`, `mappings:[]`, `finish:execute`,
`read.ports:[1,2]`. The node reads the settings, closes the wizard without saving,
and executes the model without training. Port 1 keeps the train rules and metrics;
port 2 contains recommendations for the new purchases. Export both ports and save the package.
After opening the package, use `apply` again. To retrain, use `fp_growth`.
<!-- /mode -->
