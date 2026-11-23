# ![](../../images/icons/view_types/stat_default.svg) Statistics

*Statistics* visualizer is designated for view of different [statistical indicators](./statistics-description.md) by each data set field, and it represents the table in which the data set fields names are located in rows and names of statistical indicators are located in columns. The values of statistical indicators of corresponding fields are located in the table cells at the intersection (refer to Figure 1).

![Statistics Visualizer](./statistics.png)

> **Note:** If there is much data, such indicators as Histogram, Box plot, Order statistics and Unique values are not displayed. To calculate them, it is required to press corresponding buttons.

## Operations

* ![](../../images/icons/toolbar-controls/transform_default.svg) **Table transposing**: turn of the table when the fields names are displayed in columns, and the statistical indicators are displayed in rows.
* ![](../../images/icons/toolbar-controls/fields-list_default.svg) **Configure fields**: selection of the data set fields for which the statistical indicators will be calculated.
* ![](../../images/icons/toolbar-controls/row-sum_default.svg) **Configure indicators**: selection of the statistical indicators.
* ![](../../images/icons/toolbar-controls/execute_default.svg) **Order statistics**: the order statistics are calculated.
* ![](../../images/icons/toolbar-controls/execute_default.svg) **Unique values**: the count of unique values is calculated.
* ![](../../images/icons/toolbar-controls/toggle-left-panel_default.svg) **Histogram**: the operation that enables to open the detailed window with advanced histogram settings.

> **Note:** It is possible to define the number of records of the data set to which this visualizer is applied in Row count of data column located in the right toolbar part, to the left from the ![](../../images/icons/toolbar-controls/toggle-left-panel_default.svg) *Histogram* button.

### Configure Indicators

The following eight indicators are displayed by default:
* Histogram.
* Box plot.
* Minimum.
* Maximum.
* Average.
* Standard deviation.
* Null count.
* Unique.

But if that's not enough, [whole list](./statistics-description.md) is available via ![](../../images/icons/toolbar-controls/row-sum_default.svg) *Configure indicators* operation.

When hovering cursor over the Histogram indicator, the number of records matching this bin or unique value is displayed.
When hovering cursor over the Box plot indicator, the detailing is displayed.

> **Note:** The histogram is not displayed if there are too many unique values in the dimension (for the discrete fields). It can be viewed in the additional window by pressing ![](../../images/icons/toolbar-controls_18x18/toolbar-controls_18x18_toggle-left-panel_default.svg) *Histogram* button.

### Detailed Histogram Window

When selecting the required field and pressing ![](../../images/icons/toolbar-controls/toggle-left-panel_default.svg) *Histogram* button, the additional window with advanced settings and more detailed description of histogram is opened in the right part of the interface (refer to Figure 2).

![Detailed histogram window](histogram-advanced.png)

The following options are available:
* Sorting of the histogram indicators in ascending/descending order.
* Configure display of the histogram indicators.
* Set the own maximum field value.
* Set the own minimum field value.
* Set the own bin count (when the field refers to the continuous type).
* Include Null values into the histogram (for the discrete field).

> **Note:** When the options specified above have been changed, the histogram visualization changes only in the detailed window, whereas it is the same in the main visualizer window.