---
description: Building charts in Megaladata. Reference for the interface and configuration of various chart types. General principles of working with built charts. Editing fields.
---
# ![](./../../images/icons/view_types/chart_default.svg)&nbsp;Chart

The **Chart** visualizer shows how the values of one field depend on the values of another field. The most frequently used chart type is a two-dimensional graph. The horizontal axis shows the values of the independent column. The vertical axis shows the corresponding values of the dependent column.

## Toolbar operations

* ![](./../../images/icons/toolbar-controls/fields-list_default.svg)&nbsp;**Configure fields**: Show or hide the list of dataset fields.
* ![](./../../images/icons/toolbar-controls/setup_default.svg)&nbsp;[**General settings**](./general-settings.md): Use this toolbar command to set the general chart parameters. You can also open these settings from the chart area context menu. The toolbar features individual commands for some of these general settings: **Rationing**, **Horizontal orientation**, and **Navigator**.
* ![](./../../images/icons/toolbar-controls/tune-chart_default.svg)&nbsp;[**Series editor**](./series-settings.md): Set the parameters of the list of series and of each series (graph). Add or delete series.
* ![](./../../images/icons/toolbar-controls/axis_default.svg)&nbsp;[**Configure axes**](./axis-settings.md): Set the parameters of the corresponding chart axes.
* ![](./../../images/icons/toolbar-controls/normalize_default.svg)&nbsp;**Rationing**: Apply the same scale to all graphs.
* ![](./../../images/icons/toolbar-controls/toolbar-controls_18x18_histogram_default.svg)&nbsp;**Horizontal orientation**: Swap the axes, moving the field on the *X* axis to the *Y* axis and vice versa.
* ![](./../../images/icons/toolbar-controls/telescope_default.svg)&nbsp;**Navigator**: Show any section of the chart in more detail along the *X* axis. The navigator appears below the axis. Drag the navigator edge to select the required area of the chart.
* ![](./../../images/icons/toolbar-controls/cursor_default.svg)&nbsp;**Pointer mode**: Zoom in on the view of the selected area (see also [Working with a chart](#working-with-a-chart)).
* ![](./../../images/icons/toolbar-controls/hand_default.svg)&nbsp;**Drag mode**: Move the chart on the screen (see also [Working with a chart](#working-with-a-chart)).
* ![](./../../images/icons/toolbar-controls/zoom-in_default.svg)&nbsp;**Zoom in**: Zoom in on the chart area.
* ![](./../../images/icons/toolbar-controls/zoom-out_default.svg)&nbsp;**Zoom out**: Zoom out of the chart area.
* ![](./../../images/icons/toolbar-controls/zoom-zone_default.svg)&nbsp;**Reset zoom**: Clear all zoom settings (on both axes).
* ![](./../../images/icons/toolbar-controls/zoom-vert_default.svg)&nbsp;**Reset zoom Y**: Clear the chart zoom on the *Y* axis and keep the zoom on the *X* axis.
* ![](./../../images/icons/toolbar-controls/import_default.svg)&nbsp;**Export**: Save the current view of the chart to an image file. Select from the following export options:
  * SVG
  * PNG
  * JPEG
  * PDF

## Configuring the chart

When you enter the visualizer, the list on the left shows the fields you can use as chart axes. Drag the required fields to the chart construction area. Drop a field in the upper part to set the *Y* axis. In the window that opens, configure the series parameters:
* **Type**: Select the chart type.
* **Title**: Set the series (graph) name to display in the chart legend.
* **Y field**: Indicate the field for the *Y* axis.
* **Color field**: Select a numeric field that to project onto the color scale.

Drop a field in the lower part of the chart area to set the *X* axis. You can also use the buttons in the field list (to the right of the field name):
* ![](./../../images/icons/icons/icon1.svg)&nbsp;**Use as abscissa field** (<kbd>Alt</kbd> + <kbd>X</kbd>)
* ![](./../../images/icons/icons/icon2.svg)&nbsp;**Use as caption field** (<kbd>Alt</kbd> + <kbd>L</kbd>)

> **Note:** The *X* axis field (providing values) and the caption field (providing the labels for the axis) do not have to match.

### Available chart types

* ![](./../../images/icons/series_18/d1.svg)&nbsp;**Lines**
* ![](./../../images/icons/series_18/d2.svg)&nbsp;**Areas**
* ![](./../../images/icons/series_18/d3.svg)&nbsp;**Splines**
* ![](./../../images/icons/series_18/d4.svg)&nbsp;**Columns**
* ![](./../../images/icons/series_18/d7.svg)&nbsp;**Interval areas**
* ![](./../../images/icons/series_18/d5.svg)&nbsp;**Smoothed areas**
* ![](./../../images/icons/series_18/d8.svg)&nbsp;**Smoothed areas with intervals**
* ![](./../../images/icons/series_18/d9.svg)&nbsp;**Bubble**
* ![](./../../images/icons/series_18/d6.svg)&nbsp;**Scatter**
* ![](./../../images/icons/series_18/d10.svg)&nbsp;**Waterfall**
* ![](./../../images/icons/series_18/d11.svg)&nbsp;**Errors**
* ![](./../../images/icons/series_18/d12.svg)&nbsp;**Polygon**
* ![](./../../images/icons/series_18/d13.svg)&nbsp;**Columns with ranges**
* **Heatmap**

> **Note:** In any chart you build, one *X* value corresponds to **only one** *Y* value.

To set up the chart's general parameters, use the context menu (right-click the chart area) or the toolbar buttons described above.

## Working with a chart

For the convenience of working with a chart, you can zoom in on the view of the whole chart or on any chart area:
- On the toolbar, activate ![](./../../images/icons/toolbar-controls/cursor_default.svg)&nbsp;**Pointer mode**. 
- Hold the left mouse button and select the area you want to view in more detail. When you release the mouse button, the view zooms in on the selected area. 
- Repeat this action on the new (zoomed-in) view to zoom in further if necessary.

To view the chart in more detail at the current zoom, activate the ![](./../../images/icons/toolbar-controls/hand_default.svg)&nbsp;**Drag mode** toolbar command. Then, move the chart on the screen.

To return to the original chart scale, use ![](./../../images/icons/toolbar-controls/zoom-zone_default.svg)&nbsp;**Reset zoom** on the toolbar.