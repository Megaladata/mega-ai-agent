# Data quality — research.quality

<!-- mode: profile -->
Use `dock_node_apply` with `target.type:"research.quality"`. Mode: `profile`;
`parameters: {}`. Take the reference path from the link in SKILL.md literally.

On every execution, including a repeat after the source changes, request
`read:{ports:[0,1,2,3,4],sample_rows:100,require_exact_numbers:true}`.
Do not reduce `sample_rows` for a short preview of the answer: a full read is needed
after an update as well. The SummaryTable row count equals the field count and does not set
the row count of the other outputs. A short preview does not replace a full read.

Use the standard Research → Data Quality node when the user
asks to investigate table quality. Input: integer/real continuous or
discrete, string and boolean discrete, datetime continuous. Variant,
continuous string/boolean, discrete datetime, and hidden settings are not supported. Do not create a new
mode for the type of an input column.

Connect input 0. The node has no separate algorithm wizard: five pages of
output fields and the node description are available. Do not pass invented thresholds, repair methods,
or numeric enums.
Read a wizard refusal from the Details button.

Read all five table ports of one execution:

| Index | Native name | Caption |
|---:|---|---|
| 0 | OutData | Output set |
| 1 | OutDataOut | Outliers |
| 2 | OutDataExtr | Extreme values |
| 3 | OutDataNull | Missing values |
| 4 | SummaryTable | Summary table |

In the investigated standard configuration, 0 and 3 keep the whole input, and 1/2 are empty,
including when the outlier and extreme counters are positive. Do not treat
port names as row-selection conditions, and do not promise missing-value repair.

The summary table has one row per input field, in field order:
`N` is the ordinal from 1, `DisplayName` is the caption, `DataType`/`DataKind` are
the native type and kind captions; `Null`, `Out`, `Extr` are the counters for the field;
`Avg` is the mean without NULL; `Median` is the upper mean observation, not
the half-sum of two middle values; `Moda` is the mode. An empty string is distinct from NULL.

For a numeric field, including a discrete one, Moda is the center of the most frequent
histogram interval, not necessarily one of the source numbers. For string and
boolean it is the most frequent value; in the checked A/B ties
B was chosen. Avg(boolean) is the share of true among nonempty values, and Median(boolean) is NULL.
For datetime, Avg, Median, and Moda are numeric serial days, not ISO strings;
passing dates remain datetime without a time zone.
Numeric, string, and logical modes sit in one variant column. `dock_node_apply` and `dock_node_read` read the exact native subtype/value only
for Moda of port 4 through a limited decoder (no more than 50 rows).

CSV: `exports.text` / `delimited`, `parameters.header:"names"`, unless the user chose otherwise. On SummaryTable the names are `Col0…Col9` and the captions are `N…Median`.

After the source changes, execute the same node and check the fresh five results.
The Train node command was observed; a separate mode that applies a saved model
is not confirmed and is not supported by this mode. Save the package after the reads.
If the effect is unknown, do not repeat the run; read the operation state first.

Readback returns the mode and the names, types, and kinds of the input fields; output schemas
are checked on a fresh read. To execute the same
node again, use `target.kind:"existing"`, its exact ref, `parameters:{}`,
`inputs:[]`, `mappings:[]`, `finish:"execute"`; to read from a receipt,
use `dock_node_read` with the `source_operation_id` of a successful execution. Mark MaxNullsPercent
and actions on missing values and outliers that are invisible in the wizard as unavailable
for UI readback; do not present known factory defaults as settings that were read.
<!-- /mode -->
