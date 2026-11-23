# Series Editor

## Configuration Window

The configuration window consists of two parts: configuration of the series list (add, delete, move) and configuration of each series parameters. When pressing the given series with the right mouse button, the settings already set for the series and their adjustment options will also appear.

* **Configure list of series.**
   * ![](../../images/icons/toolbar-controls/plus_default.svg) Add.
   * ![](../../images/icons/toolbar-controls/moveup_default.svg) Move up.
   * ![](../../images/icons/toolbar-controls/movedown_default.svg) Move down.
   * ![](../../images/icons/toolbar-controls/delete-all_default.svg) Delete all.
   * ![](../../images/icons/toolbar-controls/delete_default.svg) Delete a given series.
* **Configure series parameters.**
   * **Main.**
      * Type: the chart type is set (the types are listed in the article below).
      * Name: generally, the series name matches the name of the field from which the values for chart construction are taken.
      * Y field: the field is set for Y axis.
      * Color field: the numeric field that is projected onto the color chart.
   * **Additional.**
      * Axis: location of Y axis relative to the chart.
         * Left.
         * Right.
      * Color: the chart color is specified.
         * Color palette: the required color is selected using the mouse. Palette types.
            * Spectrum.
            * Elegant.
            * Composite.
         * Set the color via RGB code.
         * Set the color via Hex code.
         * Parameter A: intensity of the selected color is set (from the dark to the light one).
         * ![](../../images/icons/toolbar-controls/undo_default.svg) button: return the default color.
      * Line width: the parameter enables to set the line width. Possible value varies from 0 to 30.
      * Point size: possible value varies from 0 to 30.
      * Type of captions and Type of tooltips.
         * No: captions are not displayed.
         * Value: the value displayed by the chart element is represented.
         * Percent: percentage of this element to the final result is displayed.
         * Caption: the tooltips necessary to understand the meaning of this or that element are displayed.
         * Caption, percent: both captions, and percents are displayed at the same time.
         * Caption, value: both captions, and values are displayed at the same time.
         * Percent, total: both percentage of the element to the final result, and the result as such are displayed at the same time.
         * Caption, percent, total: caption, percentage and total are displayed at the same time.
         * X value: the column coordinate along the X axis is displayed.
