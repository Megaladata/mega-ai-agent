---
description: Upload data from Megaladata to an XML file using the XML File export component. Explore the configuration wizard.
---
# ![ ](./../../images/icons/data-sources/file-xml-export_default.svg)&nbsp;XML File: Export Component

Use this component to export data tables to XML files.

> **Important:** Before using the node, create an [XSD Schema Set connection](./../connections/list/schemes.md) and connect it to the **Connection** input port. Set it up the same way as a [database connection](./../../quick-start/database.md).

## Ports

### Input

* ![ ](./../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Data source**: Accepts the data table for export.
* ![ ](./../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg)&nbsp;[Control variables](./../../workflow/variables/control-variables.md) (optional port): Use variables to set configuration wizard parameter values.
* ![ ](./../../images/icons/app/node/ports/inputs/link_inactive.svg)&nbsp;**Connection to XSD schema source** (required port): Accepts the configured XSD Schema Set connection.

## Configuration wizard

### Step 1. Export to XML file

* **File name**: Set the path to the destination file for a local connection, or the file name for a folder connection. Click ![ ](./../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)&nbsp;**Select** to open the file selection dialog.
* **Configure formatting**: This section includes the following checkboxes:
  * **Write byte-order mark**: Enable this option to write the [byte order mark](https://en.wikipedia.org/wiki/Byte_order_mark).
  * **Add indents and line breaks**: Enable this to place each element in the export file on its own line, preceded by a tab.
  * **Escape tabs and line breaks in attributes**: Enable this to replace tab characters in the output file attributes with `&#x9;`, and line break characters with `&#xA;`.
  * **Escape single and double quotes**: Enable this to replace single quotes in the output file with `&apos;`, and double quotes with `&quot;`.

### Step 2. Field mapping for export

* **Connection**: This field displays the XSD schema connection status.
* **Root element**: Select the root element of the XSD schema to use as the basis for exporting data.

Below these fields, there is an object mapping pane provides two lists: the export table fields and the XML hierarchical structure elements. You must map these to each other, ensuring the data types match. To map the lists automatically, click ![ ](./../../images/icons/toolbar-controls/auto-connect_default.svg)&nbsp;**Auto link all**. If a link between a field and an object is incorrect, click ![ ](./../../images/icons/link-grid/remove-link_hover.svg)&nbsp;**Remove** on the link. To remove all links, click ![ ](./../../images/icons/toolbar-controls/remove-all-links_default.svg)&nbsp;**Delete all links**. Mapped fields appear in bold.

In addition to auto-linking, you can manually map fields to XML objects in two ways:

  * **Drag-and-drop**: Drag the field caption onto the preferred element.
  * **Select an element to link** and left-click its **Related fields** cell. A window will open, showing available fields for linking. Use the toggle button to filter:
  
  * Filter ![ ](./../../images/icons/filter-switcher/filterswitch-on_default.svg): Shows only fields not yet linked to any elements. 
  * Default ![ ](./../../images/icons/filter-switcher/filterswitch-off_default.svg): Shows all fields.

* **Specify time zone**: Indicate whether to add your machine's time zone to exported `date/time` data:
  * Do not specify
  * Do not specify for `Date`
  * Always specify

  **Read on:** [Integration with Web Services](../web-services/README.md)