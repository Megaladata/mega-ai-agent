---
description: Row Filter in Megaladata. Pasting values from clipboard in the Row Filter.
---
# Using the Clipboard in Row Filter

The **Listed** and **Not listed** conditions support clipboard commands.

In the **Value list** window, you can use the following clipboard commands from the toolbar, the context menu, or via keyboard shortcuts:
- **Copy selected** (<kbd>Ctrl</kbd> + <kbd>C</kbd>)
- **Add to selected** (<kbd>Ctrl</kbd> + <kbd>V</kbd>).

![Value list toolbar in Row Filter](./value-list-options.png)

The field you select for filtering must contain [discrete](../../../data/datakind.md) data.

The system uses a line break as the delimiter for copied or pasted items.

When you paste data, the system automatically validates the [data type](../../../data/datatype.md). For example, it will reject pasting a `string` into a `numeric` field. If you paste values into a list with a ![](../../../images/icons/data-types/variant_default.svg)&nbsp;`variant` field, the system pastes all values as `strings` without converting them to the most appropriate data type.

For the ![](../../../images/icons/data-types/datetime_default.svg)&nbsp;`date/time` data type, ensure that the values match the required data format.

The system does not add duplicate values during pasting.

## Additional details

The toolbar and context menu commands work both in the desktop version and in [Megaladata Studio](https://help.megaladata.com/adminguide/studio/) (accessed via a browser using the HTTPS protocol or on `localhost`).

> **Important:** In the Firefox browser, the **Cut** and **Copy** context menu commands work by default. To enable the **Paste** command, enter `about:config` in the browser address bar, find the `dom.events.testing.asyncClipboard` parameter, and set its value to `true`.

When working over the HTTP protocol, use the following keyboard shortcuts:
* Сopy the selected value to the clipboard: <kbd>Ctrl</kbd> + <kbd>C</kbd>
* Paste values from the clipboard: <kbd>Ctrl</kbd> + <kbd>V</kbd>

**Read on:** [Control](../../control/README.md)