# ![Chart](../../images/icons/toolbar-controls/chart_default.svg) Chart

The Cube chart represents the chart of the given type constructed on the Cube basis. As opposed to the standard one, it clearly matches the current state of the Cube, and in the case of all its changes, it changes correspondingly. It is possible to activate the chart view using ![ ](../../images/icons/toolbar-controls/chart_default.svg) **Chart** button on the Cube [Toolbar](./toolbar.md). The general chart view is provided on Figure 1.

![Cube Chart](./cube-chart.png)

The cube chart has its own Toolbar that contains the following buttons:

* **Chart type** enables to select the type of the displayed chart:
   * ![Lines](../../images/icons/series_18/d1.svg) **Lines**.
   * ![Areas](../../images/icons/series_18/d2.svg) **Areas**.
   * ![Splines](../../images/icons/series_18/d3.svg) **Splines**.
   * ![Columns](../../images/icons/series_18/d4.svg) **Columns**.
   * ![Smoothed areas](../../images/icons/series_18/d5.svg) **Smoothed areas**.
   * ![Scatter](../../images/icons/series_18/d6.svg) **Scatter**.
* **Series position** enables to select position of series:
   * ![In columns](../../images/icons/toolbar-controls/columns_default.svg) **In columns**: construction of the chart series according to the column data.
   * ![In rows](../../images/icons/toolbar-controls/rows_default.svg) **In rows**: construction of the chart series according to the row data.
* **Show totals**: not to show the series generated on the basis of the final headers:
   * ![Hide](../../images/icons/toolbar-controls/show-total-nor_default.svg) **Hide**.
   * ![Show](../../images/icons/toolbar-controls/show-total-all_default.svg) **Show**.
* **Displayed measure** enables to select the displayed measure from the list.
* ![Restrictions](../../images/icons/toolbar-controls/cancel_default.svg)  **Restrictions** enable to set restrictions concerning the number of series/points:
   * **Series**: the number of displayed series. It is possible to specify from 1 but not less than the count of unique values of dimensions in the cube rows up to 100 inclusively.
   * **Points**: the number of displayed points. It is possible to specify from 1 but not less than the count of unique values of dimensions in the cube columns up to 1000 inclusively.
* **Export** enables to export the chart to the given format:
   * **PNG**.
   * **JPEG**.
   * **PDF**.
   * **SVG**.

When hovering cursor over the series point, the tooltip with value appears. To disable the series, it is required to press it on the chart legend.
