---
description: Use Megaladata's XML File Import component to import XML files. This guide explains how to configure the node using the configuration wizard.
---
# ![ ](./../../images/icons/data-sources/file-xml-import_default.svg)&nbsp;XML File: Import Component

Use this component to import data tables from XML files.

> **Important:** To run the node, first create an [XSD Schema Set connection](./../connections/list/schemes.md) and link it to the **Connection** input port. The connection process is identical to [connecting to a database](./../../quick-start/database.md).

## Ports

### Input

* ![ ](./../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg)&nbsp;[Control variables](./../../workflow/variables/control-variables.md) (optional port): Accepts configuration wizard parameter values via variables.
* ![ ](./../../images/icons/app/node/ports/inputs/link_inactive.svg)&nbsp;**Connection to XSD schema source** (required port): Accepts a preconfigured **XSD Schema Set** connection.

### Output

* ![ ](./../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Dataset**: Outputs the imported table.

## Configuration wizard

### Step 1. Import from XML file

* **File name/URL**: Specify the path to your file for a local connection or the file name when using a folder connection. Click ![ ](./../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)&nbsp;**Select** to open the file selection dialog.

  You can also specify a URL to retrieve the file. The system supports HTTP/HTTPS protocols and HTTP Basic Authentication (`https://login:password@hostname.com/path/file.xml` or `http://hostname.com/path/file.xml`).
* **Preview selected file**: Displays the contents of the file selected for import.

### Step 2. Fields to import

* **Connection**: Displays the XSD Schema Set connection status.
* **Namespace**: Filters the root element list by namespace.
* **Root element**: Selects the root element of the XSD schema that the system uses to import the data. The pane below displays the hierarchical structure of the selected root element. Check the elements that will form the fields of the imported table.
* **Composite field names**: When enabled, each field name reflects the hierarchy relative to the root element. For example, the system generates the composite name `ROOT|PERSON|ACCES-LEVEL` for the imported table field containing the data of the `ACCESS-LEVEL` attribute of the `PERSON` element from the `ROOT` root element of the file. When disabled, the field name is `ACCESS-LEVEL`.
* **Repeat single values**: When a sequence contains a single element and a nested sequence, the system duplicates the single element's values for each row generated from the nested sequence.
* **Validate against XSD**: When enabled, the system strictly validates the XML file against the XSD schema. Otherwise, validation runs in simplified, accelerated mode. Simplified mode is faster but does not guarantee correct XML data parsing if undetected validation errors exist.
* **Validate against Schematron**: When enabled, the system validates the XML file against the Schematron rules specified in the XSD schema.
* **Composite field captions**: When enabled, the system generates field captions in the same way as composite field names.
* **Composite caption separator**: A drop-down list of characters that separate element names in composite names and captions.
* **Default time zone**: Defines the time zone for imported XML elements of `date/time` type that do not specify a time zone.

  %spoiler%Value examples:%spoiler%

  `2026-02-27T08:15:30Z`: Specifies the UTC time zone.
  
  `2026-02-27T11:15:30+04:00`: Specifies the +03:00 time zone (Armenia time).
  
  `2026-02-27T11:15:30`: Does not specify a time zone.
     
  %/spoiler%

  The system converts `date/time` values extracted from XML as follows:
   * If the imported XML element value specifies a time zone, the system converts it to the current Megaladata server time zone.
   * If the element value does not specify a time zone:
      * If you set **Default time zone**, the system treats the imported date/time value as having the time zone from **Default time zone** and converts it to the current Megaladata server time zone.
      * If **Default time zone** is not set, the value remains unchanged.

### Step 3. Node description

Use this step to select the node caption generation mode.

**Auto-caption**: The system generates the caption based on the file name(s) or control variable.

The system generates the auto-caption using these rules:

* If you specify the imported file name, the caption uses the file name without the path.
* If you set the imported file name via a control variable, the caption uses the variable name.

The auto-generated caption updates when you change the import settings and appears in the workflow as read-only. To force an update, use the node caption context menu.

**Custom caption**: Set this manually. The system does not change it automatically. In this mode, you can enter any text description. An update icon appears next to the input field and becomes active when the current custom caption differs from the default component caption. Click the update icon to restore the default component caption.

You can change the caption generation mode either in the configuration wizard (via the drop-down list on step 3) or via the node caption context menu in the workflow (right-click the node caption).

Copied and cloned nodes retain the caption generation mode.

If the source node uses auto-caption, the system does not append an index to copied or cloned node captions.

This step also lets you add a node description on the **Comment (markdown)** tab. Use [markdown](https://en.wikipedia.org/wiki/Markdown) syntax for formatting and preview the result on the **Preview** tab. For toolbar command descriptions, see [Annotations](./../../workflow/annotations.md).

**Read on:** [Data Export](../export/README.md)