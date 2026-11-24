# Correlation analysis (`research.corr_analysis`)

<!-- mode: pearson -->
## Pearson correlation

For Pearson correlation of numeric fields, use `dock_node_apply` with
`target.type:"research.corr_analysis"`, `mode:"pearson"`,
`parameters.first_set` and `parameters.second_set` — complete arrays of technical
field names. Connect the table to input 0, `finish:"execute"`, `read.ports:[0]`.
Each field of the first set is paired with each field of the second; the native
order is the second set outside and the first set inside, in input field order.
Output: ColSet1, ColSet1_Label, ColSet2, ColSet2_Label, Pirson. Missing values
are excluded pairwise, and a zero variance makes the coefficient NULL. For this
correlation, do not compute sums and the coefficient in Calculator or JavaScript.
Choose integer/real, including discrete integer. String is allowed
only in spearman/kendall; boolean/datetime/variant are not supported.
On an existing node, a passed set replaces the previous one; omitting it keeps it.
Stage 1 supports a nonempty source and at least two joint observations
per pair. This mode includes only Pearson. For rank coefficients choose
mode spearman or kendall.

### Pearson of numeric fields

A nonempty source, at least 2 joint observations per pair; pearson mode is Pearson only.
<!-- /mode -->

<!-- mode: spearman -->
## Spearman rank correlation

For Spearman, use `dock_node_apply`, `target.type:"research.corr_analysis"`,
`mode:"spearman"`, `parameters.first_set` and `parameters.second_set` — complete
arrays of technical names of integer/real (including discrete) and string fields. The table is input 0;
`finish:"execute"`, `read.ports:[0]`, a full port read. The node uses average
ranks for ties; do not compute ranks and the coefficient in Calculator or JavaScript.
Output: ColSet1, ColSet1_Label, ColSet2, ColSet2_Label (string), Spearman (real).
The second set is outside, the first is inside, both in input field order; self pairs and
symmetric pairs are kept. Missing values are excluded pairwise; zero variance
gives NULL. A nonempty source, at least two joint observations per pair.
To change the coefficient, use the same `target.kind:"existing"` and its ref,
the new mode, `inputs:[]`, `mappings:[]`, `finish:"execute"`. Omitted sets
are kept; passed sets are replaced completely. Exactly one coefficient is on;
after the change, read the output again, and the previous coefficient fields disappear.
Keep string and discrete integer as they are: do not encode categories as numbers.
The order of arbitrary Unicode, case, and locale is not established.
Do not select boolean/datetime/variant; cross-correlation is outside this mode.
<!-- /mode -->

<!-- mode: kendall -->
## Kendall tau-b

For Kendall tau-b, use `dock_node_apply`, `target.type:"research.corr_analysis"`,
`mode:"kendall"`, `parameters.first_set` and `parameters.second_set` — complete
arrays of technical names of integer/real (including discrete) and string fields. The table is input 0;
`finish:"execute"`, `read.ports:[0]`, a full port read. This is native tau-b with
a tie correction, without training and without calculations in Calculator or JavaScript.
Output: ColSet1, ColSet1_Label, ColSet2, ColSet2_Label (string), TauBKendall (real).
Order: the second set outside, the first inside, in input field order.
Missing values are excluded pairwise; zero variance gives NULL. The source is nonempty,
with at least two joint observations per pair. To move from Spearman, choose
the same `target.kind:"existing"` and ref, `mode:"kendall"`, `parameters:{}`,
`inputs:[]`, `mappings:[]`, `finish:"execute"`, `read.ports:[0]`. The sets are kept,
and Spearman and the other coefficients are turned off. Read the new table completely;
it must contain only the TauBKendall field after the four identifiers.
Passed sets are replaced completely. Keep string and discrete integer
without encoding categories. Unicode, case, and locale are not established.
Do not select boolean/datetime/variant; lags are outside this mode.
<!-- /mode -->
