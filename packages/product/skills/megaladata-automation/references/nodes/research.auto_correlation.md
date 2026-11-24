# Autocorrelation (`research.auto_correlation`)

<!-- mode: time_domain -->
## Autocorrelation

For the dependence of a numeric series on previous values, choose `dock_node_apply`
with `target.type:"research.auto_correlation"`, `mode:"time_domain"`.
In `parameters.autocorrelation` of a new node, pass `field` — one exact
technical name of an integer/real field — and `lag_count` — the number of lags from 1,
including lag 0. The input record order is used; add a separate sort
only when the user asks. Connect the table to input 0; other fields, for example
RowID, are not in the calculation. `finish:"execute"`, `read.ports:[0]`; for a complete
result set a sufficient `sample_rows` (up to 100). The time domain and PACF off
are part of the mode. Perform this calculation with the Autocorrelation node; Calculator, JavaScript,
and correlation of shifted fields are not needed.
The output contains Lag and the native ACF, error, and Boolean significance fields in
ascending lag order. The row count is limited by the input length, and the source fields do not pass through.
On an existing node, omitting `field`/`lag_count` keeps the supported setting;
to replace the input file, update the source import and execute the same existing node
with the previous parameters, `inputs:[]`, `mappings:[]`. Do not create a new node for that.
If the Import was updated with `finish:"done"` (including `source_switch`) or the package was opened again, execute the Import with `finish:"execute"` before executing the existing node again.
A refusal `requires an active source output` is not the outcome: execute the node that feeds input 0,
and repeat the same existing node with a new operation_id.
A series of at least two finite nonempty values with positive
variance is supported. An empty input is not supported: the node refuses before execution. NULL causes
the refusal "The data contain empty values"; keep NULL, and do not substitute zero.
On any error, show the user its text verbatim, save the package, and do not
export the old result: the previous table is not the new result.
The frequency domain, PACF, and several series are not supported yet.

Megaladata 7.4.2 has no range start, step, or lag list. `lag_count`
sets 0…min(lag_count,N)−1: for N=5 and count=10 that is every lag 0…4.
Explain the limit if a range, step, or list was requested; do not replace the request
with the first number of lags. The ACF mean and denominator are taken over the whole series;
overlapping slices and edges are not renormalized.

For the dependence of a series on previous values, choose `research.auto_correlation` / `time_domain`; before configuration read [parameter, NULL, and output details](research.auto_correlation.md). Do not replace the node with correlation of shifted fields, Calculator, or JavaScript.
<!-- /mode -->
