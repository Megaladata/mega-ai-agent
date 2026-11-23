---
description: Discover Megaladata's Data Quality visualizer. Perform a comprehensive assessment of a dataset quality.
---

# ![](./../../images/icons/view_types/data-quality_default.svg)&nbsp;Data Quality Visualizer

Use this visualizer to perform a comprehensive data quality assessment for each field.

## Views and options

Here is the list of all panes and commands available in the **Data Quality** visualizer:

* ![Summary](./../../images/icons/toolbar-controls/info_default.svg)&nbsp;**Summary**: This is the first screen that opens when you enter the visualizer. Select the fields for analysis. After processing, the **Summary** screen shows the general data quality indicators and the problems found in the selected data fields.
* ![Discrete](./../../images/icons/data-types/discrete_default.svg)&nbsp;**Discrete**: Review data quality for discrete fields.
* ![Continuous](./../../images/icons/data-types/continuous_default.svg)&nbsp;**Continuous**: Review data quality for continuous fields.
* ![Parameters](./../../images/icons/toolbar-controls/fields-list-settings_default.svg)&nbsp;**Parameters**: Select and configure indicators:
  * ![Selection of Indicators](./../../images/icons/toolbar-controls/row-sum_default.svg)&nbsp;**Selection of Indicators**: Select the indicators that you need to assess.
  * ![Configure Parameters](./../../images/icons/toolbar-controls/setup_default.svg)&nbsp;**Configure Parameters**: Select the identification method, configure the method parameters, and set the **Maximum percentage of null data** value.
* ![Absolute or relative values](./../../images/icons/switches/roc/relative_default.svg)&nbsp;**Absolute or relative values**: Toggle the display mode of quantitative values between absolute and relative (percent).
* ![Export](./../../images/icons/toolbar-controls/export_default.svg)&nbsp;**Export**: Export a report file. The system exports only the currently open view (**Summary**, **Discrete**, or **Continuous**). On the toolbar, you can see the selected export format:
  * **Export to XLS (html)**
  * **Export to HTML**
* ![Drill-through](./../../images/icons/toolbar-controls/show-fast-viewer_default.svg)&nbsp;**Drill-through**: Show the input dataset filtered by the selected indicator for the selected field. For example, if you select a **Nulls** cell, the system shows all records of the input dataset that have nulls in the selected field. The **Drill-through** command is available only for the **Discrete** and **Continuous** tables.
* ![Histogram](./../../images/icons/toolbar-controls/toggle-left-panel_default.svg)&nbsp;**Histogram**: Show a pane with a histogram for the selected field. The **Histogram** option is available only for the **Discrete** and **Continuous** tables.

## Dataset statistics

Here is the list of available statistics that appears on the right of the **Summary** screen:
* **Determination of outliers and extreme values**: Shows the technique used to identify outliers and extreme values.. By default, *standard deviation*.
* **Columns**: The total number of columns in the dataset.
* **Rows**: The total number of records in the dataset.
* **Fully filled fields**: The number of fields that do not contain missing values, as a percentage.
* **Fully filled records**: The number of records that do not contain missing values, as a percentage.
* **Suitable columns**: The number of columns used for analysis. The system treats a column as unsuitable if:
  * The percentage of **Nulls** is higher than **Maximum percentage of null data**. (See [Configure parameters](#configure-parameters).)
  * The **Quality indicator** of a discrete field is *0* (that is, the field contains a constant).
* **RPV index**: The ratio of the number of records to the number of columns.

## Configuring tables

When you open the **Data Quality** visualizer, the system shows the **Summary** table with the list of fields. Use the checkboxes to select the fields for processing. The **Discrete** and **Continuous** tables are not available at this step. Click the **Parameters** button to configure the required quality indicators.

![Selecting fields for processing](./images/1.png)

### Selection of indicators

The table shows the list of quality indicators that may be calculated for the selected fields.

| Indicator | Data kind | Value |
|:----------|:----------:|:--------|
| Quality indicator | ![](./../../images/icons/data-types/discrete_default.svg) | Shows the diversity of values in the field |
| [Histogram](https://en.wikipedia.org/wiki/Histogram) | ![](./../../images/icons/data-types/discrete_default.svg)&nbsp;![](./../../images/icons/data-types/continuous_default.svg) | Histogram preview |
| Extremes | ![](./../../images/icons/data-types/discrete_default.svg)&nbsp;![](./../../images/icons/data-types/continuous_default.svg) | The number of records with extreme values |
| Empty | ![](./../../images/icons/data-types/discrete_default.svg) | The number of records with empty values |
| Trailing spaces | ![](./../../images/icons/data-types/discrete_default.svg) | The number of records with values that end with a whitespace character. (This indicator does not include records that consist only of whitespace characters.) |
| Range of values | ![](./../../images/icons/data-types/discrete_default.svg) | The range of values in the `<first value>...<last value>` format in the sorted list of values |
| Zeros | ![](./../../images/icons/data-types/continuous_default.svg) | The number of records in which the values are equal to zero |
| [Box plot](https://en.wikipedia.org/wiki/Box_plot) | ![](./../../images/icons/data-types/continuous_default.svg) | Calculates the following indicators: **Minimum outlier**, **Lower quartile**, **Median**, **Upper quartile**, **Maximum outlier**, **Sample maximum** |
| Minimum | ![](./../../images/icons/data-types/continuous_default.svg) | The minimum value |
| Mean | ![](./../../images/icons/data-types/continuous_default.svg) | The mean value |
| [Mode](https://en.wikipedia.org/wiki/Mode_(statistics)) | ![](./../../images/icons/data-types/discrete_default.svg)&nbsp;![](./../../images/icons/data-types/continuous_default.svg) | The most frequently occurring value[^1] |
| Nulls | ![](./../../images/icons/data-types/discrete_default.svg)&nbsp;![](./../../images/icons/data-types/continuous_default.svg) | The number of records in which the value is missing for the field |
| Values | ![](./../../images/icons/data-types/discrete_default.svg) | Displays a chart that shows the diversity of values by row |
| Outliers | ![](./../../images/icons/data-types/discrete_default.svg)&nbsp;![](./../../images/icons/data-types/continuous_default.svg) | The number of records in which the value is an outlier |
| Whitespaces | ![](./../../images/icons/data-types/discrete_default.svg) | The number of records with values that consist only of whitespace characters |
| String lengths | ![](./../../images/icons/data-types/discrete_default.svg) | The range of string lengths in the format: `<minimum length> — <maximum length>` |
| Negative | ![](./../../images/icons/data-types/continuous_default.svg) | The number of records with negative values |
| Infinities | ![](./../../images/icons/data-types/continuous_default.svg) | The number of records in which infinity values |
| Unique | ![](./../../images/icons/data-types/discrete_default.svg) | The number of unique values |
| Maximum | ![](./../../images/icons/data-types/continuous_default.svg) | The maximum value |
| [Median](https://en.wikipedia.org/wiki/Median) | ![](./../../images/icons/data-types/discrete_default.svg)&nbsp;![](./../../images/icons/data-types/continuous_default.svg) | The median for the field |
| Monotony | ![](./../../images/icons/data-types/discrete_default.svg)&nbsp;![](./../../images/icons/data-types/continuous_default.svg) | Shows how uniform the field values are (**Descending**, **Increasing**, or **Non-monotonic**) |

[^1]: If the field has several mode values, the system shows the first of these values and the ![](./../../images/icons/viewers/data-quality/mode/sliced_18x18/multi_default.svg)&nbsp;multimodal icon.

### Configure parameters

Switch to the **Configure parameters** tab in the **Parameters** window and select the detection technique for outliers and extreme values, marking the radio button for one of the two **Identification method** options:
- **Standard deviation**
- **Interquartile width**

Set the required values for the selected method:

![Configure Parameters](./images/2.png)

## Calculating quality statistics

After setting up the fields and indicators for the data quality analysis, click the ![](./../../images/icons/toolbar-controls/execute_default.svg)&nbsp;**Calculate statistics** button in the center of the visualizer area.

The system processes the selected fields, showing the general results in the central **Problems** and **Kinds or problems** columns. 

### Problems and problem types

The **Problems** column shows the percentage of problem rows for each field. 

The **Kinds of problems** columnn displays the quality issues the system encountered in each field. Possible quality issues are:
* **Nulls**: The number of records that contain missing values.
* **Empty**: The number of records that contain empty values.
* **Zeros**: The number of records that contain zero values.
* **Whitespaces**: The number of records that contain only whitespace characters (space, non-breaking space, tab, etc.).
* **Infinities**: The number of records that contain an infinity value.
* **Constant**: Indicates that the field contains only one unique value. (The field may also contain nulls.)
* **Unique**: Indicates that every value in this field is unique.
* **Conversion error**: Appears if the field contains values that you cannot convert to the data type of the field.
* **Not calculated**: Marks fields that do not contain calculated indicators.
* **No data**: This problem appears when you analyze an empty dataset.
* **Extreme**: The number of records in which the value is extreme.
* **Outliers**: The number of records in which the value is an outlier.
* **Negative**: The number of records with negative values.
* **Trailing spaces**: The number of records with values that end with a whitespace character (this indicator does not include records that consist only of whitespace characters).

Next to the each issue value, the system shows the percentage of problem rows relative to the total number of rows, and in parentheses the number of rows with that issue.

![Types of problems](./images/6.png)

### Detailed statistics for discrete and continuos fields

To view the detailed statistics, switch to the **Discrete** or **Continuous** table. (These buttons become active on the toolbar.)

In the table that opens, click the ![](./../../images/icons/toolbar-controls/down_default.svg)&nbsp;**Options** button next to each column header to sort fields by the selected indicator and to hide or show indicator columns.

![Sorting columns and selecting columns to display](./images/3.png)

Select a cell and click ![Drill-through](./../../images/icons/toolbar-controls/show-fast-viewer_default.svg)&nbsp;**Drill-through** to see all records from that cell. (The drill-through pane appears at the bottom.)

![Cell drill-through](./images/4.png)

Select a cell and click ![Histogram](./../../images/icons/toolbar-controls/toggle-left-panel_default.svg)&nbsp;**Histogram** to view a detailed histogram. (This opens on the right side of the visualizer window.) For discrete fields, you can select which values to display:

![Display options for the histogram](./images/5.png)

**Read on:** [Cube Visualizer](../cube/README.md)