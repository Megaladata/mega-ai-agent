# Preview

It provides the limited amount of data (not more than 100 first rows of possible resulting data set) for information purposes in the form of the flat two-dimensional table. Filtration, change of data view format and search are not available. Real numbers (with floating point) are displayed with two places after decimal separator.

It is available in [Import from database](../../integration/import/database.md), [JavaScript](../../processors/transformation/java-script/README.md) wizards. When pressing *Preview* button, it is possible to activate all input ports, with the exception of the *Connections* connected with the current node. This window is opened when the activation is successfully finished.

When the cursor is hovered over the field caption, ![ ](../../images/icons/toolbar-controls/down_default.svg) button with the additional functions will appear:

* ![ ](../../images/icons/toolbar-controls/low-to-hight_default.svg) **Sort ascending** / ![ ](../../images/icons/toolbar-controls/hight-to-low_default.svg) **Sort descending**: sorting enables to sort data by the selected field in ascending or descending order. It is performed only for the current data set according to the set limits.
* ![ ](../../images/icons/grid/columns.svg) **Columns**: disable/enable display by the defined columns.
* ![ ](../../images/icons/toolbar-controls/locked_default.svg) **Freeze column** / ![ ](../../images/icons/toolbar-controls/unlocked_default.svg) **Unfreeze column**: the frozen field is fixed in the left part of the window, and it is separated from the unfrozen part with the vertical line.

It is possible to move the fields relative to each other, and it is also possible to move them from the zone of frozen fields to the unfrozen ones and vice versa.

Field settings are reset when closing the window.

It is possible to control the script operation in ![console](../../images/icons/javascript/console.svg) of [code debugging console](../../processors/transformation/java-script/console.md) in *Preview* of *JavaScript* node.

It is possible to close *Preview* of *JavaScript* node using only *X* button, in *Import from database* node *Close* button is also available.
