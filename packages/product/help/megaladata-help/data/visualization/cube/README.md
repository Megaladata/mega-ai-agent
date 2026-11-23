# ![Cube Visualiser](../../images/icons/view_types/cube_default.svg) Cube

Cube is one of the wide spread methods of the complex multidimensional data analysis called OLAP (OnLine Analytical Processing). It is based on data view in the form of the multidimensional cubes that are also called OLAP cubes or hypercubes.

Cube is a convenient tool used for visualization of the multidimensional data and production of the required report forms. It contains dimensions and measures defined while constructing. The main cube peculiarity is that its structure is not strictly defined. Using the mouse for dimensions headers manipulation, a user can provide the most informative cube display.

## Interface

The main window will be opened after addition to the visualizer node (Figure 1):

![The Main Cube Window](./cube-main-window.png)

The main window can be conventionally divided into 6 areas:

1. Area of Free Fields.
2. Area of Dimensions in Rows.
3. Area of Measures.
4. Area of Measures in Columns.
5. Area of Filtration by Dimensions.
6. [Cube Toolbar](./toolbar.md).

Areas from 2 to 5 represent the Cube construction area.

> **Important:** When configuring the Cube, especially when working with large data volumes, update of the Area of Measures (3) can take long time. In these cases it is recommended to disable data update temporally using ![ ](../../images/icons/toolbar-controls/locked_default.svg) *Defer layout update* button.

### Cube Configuration

The list of the columns that can be used as dimensions or measures is displayed in the Area of Free Fields (1). The columns already used in the Cube are displayed in bold type.

#### Dimensions

To generate a report using the Cube, it is necessary to add the required dimensions to rows or columns. It is possible to add dimensions to the Cube in two ways:

* drag (Drag-and-Drop) field from the Area of Free Fields (1) to the Area of Dimensions of columns or rows (2 or 4);
* press ![Add](../../images/icons/toolbar-controls/plus-native_default.svg) button of the required area and select the required field from the list.

Count of dimensions is limited by the number of the available fields. It is recommended to use not more than 5-7 dimensions to make the report clear and interpretable.

> **Note:** When moving the fields to different areas, the modal windows of actions confirmation can appear if dimension or measure are used in the active calculated measure or in the filter by measure.

As the Cube visualizer is a flat two-dimensional table, the headers form the hierarchic system (tree of headers) when displaying several dimensions. All headers are collapsed up to the most external dimension by default. To expand or collapse the internal dimensions headers, it is required to click on Expand of Collapse button of the external dimension header. There are group operations of expansion or collapsing of headers.

The following options are available when pressing ![Open menu](../../images/icons/toolbar-controls/down_default.svg) to the right from the dimesion name:

* ![Collapse](../../images/icons/toolbar-controls/collapce-all_default.svg) **Collapse**  all items up to the minimum dimension detailing.
* ![Expand](../../images/icons/toolbar-controls/open-all_default.svg) **Expand** all items up to the maximum dimension detailing.
* ![Ascending](../../images/icons/toolbar-controls/low-to-hight_default.svg) **Ascending**: sort the values in ascending order.
* ![Descending](../../images/icons/toolbar-controls/hight-to-low_default.svg) **Descending**: sort the values in descending order.
* ![In original order](../../images/icons/blank.svg) **In original order**: place the values in the order of their appearance in data.
* ![Delete](../../images/icons/toolbar-controls/delete_default.svg) **Delete**: delete a dimension from the Cube. It is possible to delete a dimension by dragging (Drag-and-Drop) back to the Area of Free Fields.

To filter data by the dimension, it is required to click on the required dimension with the mouse, configure the filter on the opened panel and press "Apply". If filtration has been configured by the dimension, it is highlighted in orange. The filter can be used in three modes:

* ![ ](../../images/icons/toolbar-controls/icon-200_default.svg) **Multiple selection**: a user can select the random count of values from the list of the available ones. The selected values will be displayed in the Cube.
* ![ ](../../images/icons/toolbar-controls/icon-201_default.svg)
   **Single selection**: select only one value from the list that will be displayed in the Cube.
* ![ ](../../images/icons/toolbar-controls/icon-202_default.svg) **Combined selection**: select one dimension value from the list that has been earlier formed in the multiple selection mode.

![ ](../../images/icons/toolbar-controls/icon-200_default.svg) **Multiple selection** mode can be set by default. Using **Inclusive/exclusive filter** switch of values it is possible to set permissive or prohibitive filter type. It influences on the fact how the filter will be updated if the Cube is opened for the new data.

The following operations are available in ![ ](../../images/icons/toolbar-controls/icon-200_default.svg) **Multiple selection** mode:

* ![ ](../../images/icons/toolbar-controls/visible_default.svg) **Check all / ![ ](../../images/icons/toolbar-controls/invisible_default.svg) Uncheck all**: select all values in the list or deselect all list values.
* ![ ](../../images/icons/toolbar-controls/invert-eye_default.svg) **Invert selection**: change the selected values from the list to the unselected ones and vice versa.
* ![ ](../../images/icons/toolbar-controls/eye-filter_default.svg) **Check by pattern...**: set the condition and method of dimensions selection.

To configure selection, it is required to open *Check by pattern* window (the configured dimension is also specified in the window header). It is required to select the condition of dimension values and pattern mapping to the left in the drop-down list. The pattern is set to the right from the list in the entry field. The selected method of selection will be applied to all dimensions that comply with the condition (*Check, Add to checked, Uncheck* or *Remove from checked*). The case of letters can be taken into account during the selection process. For this purpose, it is required to select *Case-sensitive* checkbox.

In ![ ](../../images/icons/toolbar-controls/icon-201_default.svg)
**Single selection** or ![ ](../../images/icons/toolbar-controls/icon-202_default.svg) **Combined selection** modes to the right and to the left from the dimension name, ![<](../../images/icons/toolbar-controls/arrow-l_default.svg) and ![>](../../images/icons/toolbar-controls/arrow-r_default.svg) buttons appear for paging of the filter values. The Area of Measures (3) will be rebuilt to comply with the filter value when paging. It is possible to enable paging across the bounds of the values list by pressing on ![ ](../../images/icons/toolbar-controls/roll-over_default.svg) **Loop values** button.

> **Note:** The Area of Filtration (5) is located under the Area of Dimensions (4). Configuration of the Area of Filtration is similar to configuration of the Area of Dimensions. The dimensions added to the Area of Filtration will not be displayed in the Cube but they can be used in the calculated measures and for data filtration.

#### Measures

It is possible to add measures in two ways:

* Drag (Drag-and-Drop) the required field from the Area of Free Fields (1) to the Area of Measures (3).
* By pressing on ![Measures](../../images/icons/toolbar-controls/sum_default.svg) Measures button, it is necessary to select the required field and in the appeared [window](./addfact.md) select the required method of [aggregation](../../processors/func/aggregation-functions.md) and method of its display.

By pressing on ![Open list](../../images/icons/toolbar-controls/down_default.svg) button near ![Measures](../../images/icons/toolbar-controls/sum_default.svg) Measures, it is possible to open the drop-down menu with option to call one of the following windows:

* ![Configure measures](../../images/icons/cube/cases/case-tune_default.svg) **Configure measures…**: open the measures configuration window.
* ![Add calculated measure](../../images/icons/cube/cases/case-calc_default.svg) **Add calculated measure…**: open the window to add the calculated measure to the Cube.
* ![Filter measures](../../images/icons/cube/cases/case-filter_default.svg) **Filter measures…**: open the window for measures filtration.
* ![Format measures](../../images/icons/cube/cases/case-format_default.svg) **Format measures…**: open the window for formatting of measures and headers of dimensions.

It is possible to delete a measure by deselecting the checkbox in called *Configure measures* window.

> **Note:** The aggregation option and method of its display first in the list are selected by default. Display of several aggregation options and methods of their display for each measure is supported.

It is possible to move ![Measures](../../images/icons/toolbar-controls/sum_default.svg)Measures button from rows to columns, and, thus, it is possible to change location of measures headers. When it is required to move a measure to dimensions, it is necessary to delete the measure first, then it is required to add to the required Area of Dimensions (2) or (4).