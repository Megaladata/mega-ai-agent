# ![ ](../../images/icons/toolbar-controls/show-fast-viewer_default.svg) Quick Data View

It provides the limited amount of data for information purposes in the form of the flat two-dimensional table. Filtration, change of data view format and search are not available. Real numbers (with floating point) are displayed with two places after decimal separator. The data in the date/time format is displayed without seconds.

This visualizer is available in any active output:

* ![ ](../../images/icons/app/node/ports/outputs/table_active.svg)   table port;
* ![ ](../../images/icons/app/node/ports/outputs/variable_active.svg)  variables port;
* ![ ](../../images/icons/app/node/ports/outputs/tree_active.svg) tree port.

It can be opened as follows:

* by selecting ![ ](../../images/icons/toolbar-controls/show-fast-viewer_default.svg) **Quick view…** from the context menu of the port;
* by double click on the port.


## Actions with the Fields

When hovering cursor over the field caption, ![ ](../../images/icons/toolbar-controls/down_default.svg) button with additional functions will appear.

Different ports have different options and constraints:

| Port | Sorting | Visibility change | Freezing | Move | Bound |
|:---|:--:|:--:|:--:|:--:|:---|
| Table | | • | • | • | 50,000 rows |
| Tree | • | • | | | 10,000 child nodes |
| Variables | • | | | | &nbsp; |

* ![ ](../../images/icons/toolbar-controls/low-to-hight_default.svg) **Sort ascending** / ![ ](../../images/icons/toolbar-controls/hight-to-low_default.svg) **Sort descending**: sorting enables to sort data by the selected field in ascending or descending order. It is performed only for the current data set according to the set limits.
* ![ ](../../images/icons/grid/columns.svg) **Columns**: change visibility (disable/enable display) of the defined columns.
* ![ ](../../images/icons/toolbar-controls/locked_default.svg) **Freeze column** / ![ ](../../images/icons/toolbar-controls/unlocked_default.svg) **Unfreeze column**: the frozen field is fixed in the left part of the window, and it is separated from the unfrozen part with the vertical line.

It is possible to move the fields relative to each other, and it is also possible to move them from the zone of frozen fields to the unfrozen ones and vice versa.

Field settings are reset when closing the window.

It is possible to close *Quick view* by pressing *X* or *Close* button.

If the data set includes more than 50 fields, only the first 50 will be displayed for the table port in *Quick View of Data* visualizer. The number of the displayed fields  can be changed using the additional ![ ](../../images/icons/grid/columns.svg) *Columns* function. The total count of columns in the data set will be shown in the right upper window corner (refer to Figure). When hovering cursor over this area, the tooltip with the number of the displayed fields is shown.

The total count of rows in the data set is shown in the left lower corner of *Quick View of Data* window if there is no enough space for all rows in the visualizer window (refer to Figure).

![Quick View of Data](./column_amt.png)