# ![Date and Time](../../../images/icons/components/date-reform_default.svg)&nbsp;Date and Time Component

Use the **Date and Time** component to transform ![Date/Time](../../../images/icons/data-types/datetime_default.svg)&nbsp;`date/time` data. It creates one or more new columns, extracting specific date/time information from the original dataset's date/time column.

%spoiler%Example%spoiler%

| Date (source column) | (Year + Month) | Date (Year + Day) | Date (Day of the Month) | Date (Minute) | Date (Custom) |
|:--------|:--------|:--------|--------:|--------:|:--------|
| 03.04.2012 00:04 | 01.04.2012 | 03.04.2012 | 3 | 4 | `custom text` 03.04.12 |
| 17.04.2012 19:39 | 01.04.2012 | 17.04.2012 | 17 | 39 | `custom text` 17.04.12 |
| 09.05.2012 19:42 | 01.05.2012 | 09.05.2012 | 9 | 42 | `custom text` 09.05.12 |
| 16.05.2012 12:13 | 01.05.2012 | 16.05.2012 | 16 | 13 | `custom text` 16.05.12 |
| 28.05.2012 20:35 | 01.05.2012 | 28.05.2012 | 28 | 35 | `custom text` 28.05.12 |

The system generates all subsequent columns based on the first column, each containing a specific part of the date/time information—such as minutes or the day of the month. For details on the custom date representation in the last column, see [below](README.md#custom-format).

%/spoiler%

## Ports

### Input

* ![Input data source](../../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Input data source**: Provide a data table.

### Output

* ![Output dataset](../../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Output dataset**: This port displays the resulting data table.

## Configuration wizard

The wizard window consists of two panes: **Field** and **Time frames**.

The **Field** pane lists the input dataset’s fields of ![Date/Time](../../../images/icons/data-types/datetime_default.svg)&nbsp;`date/time` type. Click the **Time frames** header to sort these fields by the number of selected transformations, either in ascending or descending order.

Configure the data transformation by selecting the checkboxes of the required type and format in the **Time frames** pane.

You can transform data into the following data types:
* ![Date/Time](../../../images/icons/data-types/datetime_default.svg)&nbsp;`date/time`
* ![Number](../../../images/icons/data-types/integer_default.svg)&nbsp;`numeric`
* ![String](../../../images/icons/data-types/string_default.svg)&nbsp;`string`

When transforming to ![Date/Time](../../../images/icons/data-types/datetime_default.svg)&nbsp;`date/time` data type, you can select the start and/or end of the time period for some formats.

%spoiler%Example%spoiler%

<table>
<tr><th rowspan="2">Date (Source Column)</th><th colspan="2">(Year + Month)</th><th colspan="2">Date (Year)</th></tr>
<tr><td>start</td><td>end</td><td>start</td><td>end</td></tr>
<tr><td>03.04.2012 00:04</td><td>01.04.2012</td><td>30.04.2012</td><td>01.01.2012</td><td>31.12.2012</td></tr>
<tr><td>09.05.2012 19:39</td><td>01.05.2012</td><td>31.05.2012</td><td>01.01.2012</td><td>31.12.2012</td></tr>
<tr><td>09.01.2013 19:42</td><td>01.01.2013</td><td>31.01.2013</td><td>01.01.2013</td><td>31.12.2013</td></tr>
<tr><td>16.03.2013 12:13</td><td>01.03.2013</td><td>31.03.2013</td><td>01.01.2013</td><td>31.12.2013</td></tr>
</table>

%/spoiler%

### Custom format

In addition to standard date formats, you can also set the format using the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) international date standard.

Select the ![String data type](../../../images/icons/data-types/string_default.svg)&nbsp;`string` data type, then click the field to the right of the checkbox to define a [custom date/time format](syntax.md). Alternatively, use the ![Choice](../../../images/icons/toolbar-controls/down_default.svg)&nbsp;**List** dropdown to choose how to format the date as a string.

Configuring each option generates a new column in the resulting dataset.