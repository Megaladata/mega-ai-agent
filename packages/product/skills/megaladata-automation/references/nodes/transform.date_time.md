# Date and time (`transform.date_time`)

<!-- mode: calendar -->
## Date and time

For calendar features, choose `megaladata_dock_node_apply` with
`target.type:"transform.date_time"`, `mode:"calendar"`, and
`parameters.fields:[{field:{kind:"input_field",name:"DateA"},transformations:[{operation:"iso_year",name:"ISOYear",label:"ISO year"}]}]`.
Input fields must already have type `datetime`. The calendar year is `year`,
the ISO year is `iso_year`, the ISO week number is `iso_week`, its Monday at midnight is
`iso_week_start`, and the day of the week from Monday 1 to Sunday 7 is `day_of_week`.
Compute these features with this node. Also supported: `quarter`, `month`,
`day_of_month`, `hour`, `minute`, `second`, `year_start`, `year_end`, `quarter_start`, `quarter_end`,
`month_start`, `month_end`, `date`. A field allows up to 12 transformations.
`minute` and `second` extract integers 0…59; missing values stay NULL.
`day_of_year` is the day of the year 1…366, and `millisecond` is milliseconds 0…999.
`week` is an ordinary week starting on Monday; week 1 contains 1 January
(unlike `iso_week`). All three return integer, and NULL stays NULL.
String representations of datetime: `string_year` (`%Y`), `string_date` (`%Y-%m-%d`),
`string_time` (`%H:%i:%s`) — without `format`. A custom template is `string_custom` with a required
`format` (allowed only for it; one per field), for example
`{operation:"string_custom",name:"Stamp",label:"Stamp",format:"%Y-%m-%d %H:%i:%s.%u"}`.
Numeric markers: `%Y` year, `%Q` quarter, `%m` month, `%d` day, `%H` hours, `%i` minutes,
`%s` seconds, `%u` milliseconds; the rest of the template text stays as it is. The result is
string, and a missing value stays NULL: do not replace it with the string NULL. The node does not parse strings into
dates and does not change the time zone: do not turn string fields (for example Raw) into dates with this node.
Each `fields` item replaces the complete set of transformations of that field;
to remove one feature, list every transformation of that field that should remain.
An unspecified second field is kept. On an existing node, `parameters:{}`
keeps the settings, and `transformations:[]` clears only the specified field.
Set the output order through `mappings` of output 0 with `autosync:false` and a complete
`fields` list, addressing the final names as `source:{kind:"configured_field",name:"ISOYear"}`.
Use `finish:"execute"`, `read.ports:[0]`; run Save separately.
The end of an ISO week (`iso_week_end`) is unavailable because of a Megaladata platform error:
when that is requested, report the limit and do not substitute a calculated value.
For date CSV, use the format and separators from the [export rules](exports.text.md).

### Calendar features of datetime

Year/quarter/month/day/hour, period bounds, ISO year/week/Monday, date strings (`string_*`). `iso_week_end` is unavailable because of a Megaladata error: report the limit without substituting a calculation.
<!-- /mode -->
