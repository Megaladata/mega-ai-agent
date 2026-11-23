---
description: Change how the table displays data in the Duplicates and Inconsistencies visualizer using the Format window. Learn about bulk formatting.
---
# ![](./../../images/icons/toolbar-controls/format_default.svg)&nbsp;Format

When configuring a **Duplicates and Inconsistencies** visualizer, use this toolbar button to change how the table displays data.

Formatting is available for fields of the following data types:
* ![](./../../images/icons/data-types/integer_default.svg)&nbsp;`Integer`
* ![](./../../images/icons/data-types/float_default.svg)&nbsp;`Real`
* ![](./../../images/icons/data-types/datetime_default.svg)&nbsp;`Date/time`

Here you can also set column width and visibility for any data type.

## Configuration window

The **Format** window has two panes. In the left pane, select the field whose display you want to configure, and set its visibility. In the right pane, set column width and other formatting parameters.

The left pane shows a table:
* The **No.** column displays the field's sequential number in the source dataset. By default, the system lists fields in the same order as in the source dataset. To change the order, use the context menu commands ![](./../../images/icons/toolbar-controls/moveup_default.svg)&nbsp;**Move up** and ![](./../../images/icons/toolbar-controls/movedown_default.svg)&nbsp;**Move down**. To restore the original order, use ![](./../../images/icons/toolbar-controls/refresh-all_default.svg)&nbsp;**Restore fields order** (toolbar button/context menu command).
* The **Fields** column lists the source dataset fields, indicating their data types. To filter the list, enter the field caption in the filter bar. To clear filtering, click ![](./../../images/extjs-theme/form/clear-trigger/clear-trigger_default.svg)&nbsp;**Clear**.
* In the ![](./../../images/icons/toolbar-controls/visible_default.svg)&nbsp;**Visibility** column, set the field's visibility for the **Table** visualizer. Use the ![](./../../images/icons/toolbar-controls/visible_default.svg)&nbsp;**Show all fields**/![](./../../images/icons/toolbar-controls/invisible_default.svg)&nbsp;**Hide all fields** button in the header to change the visibility of all fields simultaneously, or set visibility individually using the same icons in each field's row. These actions are also available in the context menu. Hidden fields do not appear in the **Table** visualizer.

In the right pane of the **Format** window, configure the following:
* **Column width**: Here, you can change the size of the **Table** visualizer columns. The system measures column width in pixels, ranging from $$0$$ to $$1.8*10^{308}$$.
  * To restore field width to the default values, use **Restore width of all fields** in the context menu.
* **Formatting**: Use this checkbox to configure fields of the following types:
  * ![](./../../images/icons/data-types/integer_default.svg)&nbsp;`Integer`/![](./../../images/icons/data-types/float_default.svg)&nbsp;`Real`: Configure the following parameters:
    * **Decimal place limit**: Specify the required decimal place limit. Default: `0`.
    
    > Note: When **Formatting** is not configured, the system displays values in the **Table** visualizer with the same precision as in the dataset.

    * **Thousands separator**: Select this to enable digit grouping for numeric values.
    * **Currency**: Add a currency symbol to the values displayed in the **Table** visualizer.
    * **Exponential form**: Select to display numbers in the **Table** visualizer in exponential form.
    * **Custom format**: Select this checkbox if you need to set a custom wildcard for number display. Enter this in the **Example** field and check the rendering in the **Result** line.
  * ![](./../../images/icons/data-types/datetime_default.svg)&nbsp;`Date/time`: Select a template from the list, or set a custom format in the **Example** field of the **Custom format** section below. (Enable it with the respective checkbox and enter your template, for example, `DD.MM.YYYY`.)

  > **Note:** Formatting fields of other types (`string`; `logical`) is not supported. You can only change their column width and visibility.
  > The system enables **Custom format** checkbox by default. Unmark it to configure formatting by using the other parameters.

To restore all formatting parameters to original, use the **Restore format of all fields** command in any field's context menu.

Click **OK** to apply your settings.

## Bulk formatting

The system supports configuring formatting parameters for multiple fields. In the left pane of the **Format** window, select the needed fields: hold <kbd>Ctrl</kbd> or <kbd>Shift</kbd> for multi-select. Then, set the necessary parameters on the right and click **OK**.

**Example:** Select two fields in the left pane of the **Format** window, and change their **Column width** in the right pane. After you click **OK**, both columns in the **Table** visualizer will use the specified width.

> **Note:** When multi-selecting fields of different types, some formatting parameters may be unavailable. This means, they are read-only for at least one of the types. For example, for `String` and `Real` fields together, you can only change **Column width** because the other parameters are unavailable for `String` fields.

To move multiple fields, use the same context menu commands as for individual fields: ![](./../../images/icons/toolbar-controls/moveup_default.svg)&nbsp;**Move up** and ![](./../../images/icons/toolbar-controls/movedown_default.svg)&nbsp;**Move down**.
