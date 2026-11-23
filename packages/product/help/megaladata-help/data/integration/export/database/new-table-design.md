---
description: Upload your data to a new database table with Megaladata's Database export node. This guide explains how to create a new DB table within the node setup wizard.
---
# Creating a New Database Table

When configuring a **Database** export node, you can either export data to an existing table or create a new one. To create a new table, click the **Create table** button next to the table selection field. This opens a window with two tabs:

* **Table fields**
* **SQL query**

%spoiler%Example:%spoiler%

{% tabs one="Table fields", two="SQL query" %}

{% content "one" %}
![Configuring new table fields](../../export/database/1.png)

{% content "two" %}
![New table as an SQL query](../../export/database/2.png)

{% endtabs %}

%/spoiler%

## Settings

Configure the following options:

* **Delete existing table**: If enabled, the system removes any table with the same name before creating the new one. It uses the command: `DROP TABLE IF EXISTS <TableName>` or an equivalent for databases that don’t support `IF EXISTS`.
* **Table name**: Enter a unique name for the table. You can either type it manually or select it from the list of existing tables if you’ve enabled the `Delete existing table` option.
* **Table fields**: Define the fields using these parameters:
  * **Primary key**: Specify the primary key using the syntax: `CONSTRAINT <TableName>_PK PRIMARY KEY (FieldName1[... , FieldNameN])`. For ClickHouse, the system uses a sort key: `Engine = MergeTree() ORDER BY (FieldName1[... , FieldNameN])`.
  * **Name**: Enter the field name in a [valid format](./../../../data/datasetfieldoptions.md).
  * **Data type**: Choose from the [standard data types](./../../../data/datatype.md) supported by Megaladata. You can also select `String(max)`for the maximum possible string length.
  * **Size** (for `string` fields only): Set the maximum string length. The default is `50`; adjust it to match your data.
  * **Not NULL**: Enforce a constraint to prevent null values in the field.

> **Important:** If the exported string exceeds the maximum length, the system will return an error.

Use these buttons to manage the field list:
* ![](./../../../images/icons/toolbar-controls/moveup_default.svg)&nbsp;**Move up**/![](./../../../images/icons/toolbar-controls/movedown_default.svg)&nbsp;**Move down**: Reorder fields in the list.
* ![](./../../../images/icons/toolbar-controls/plus_default.svg)&nbsp;**Add**: Insert a new field.
* ![](./../../../images/icons/toolbar-controls/edit_default.svg)&nbsp;**Edit**: Open a model to edit field parameters.
* **All String(max)**: Set all `string` fields to `String(max)`.
* ![](./../../../images/icons/toolbar-controls/autosync_default.svg)&nbsp;**Refresh**: Sync the field list with the table connected to the node's input port.
* ![](./../../../images/icons/toolbar-controls/delete-all_default.svg)&nbsp;**Delete all**: Remove all fields from the table.

## SQL query

Use this tab to view or edit the SQL query for creating the table. It offers two modes:
* **View mode** (default): Displays the SQL query without allowing edits. Syntax highlighting is disabled, and the **Execute query** button is inactive. The query updates automatically based on the **Table fields** tab settings.
* **Edit mode**: Allows manual editing of the SQL query. Syntax highlighting is enabled, and the **Execute query** button is active. The query content is independent of the **Table fields** tab.

To switch to **Edit mode**, click ![Edit](edit.svg).

![SQL query edit mode](../../export/database/3.png)

To return to **View mode**, click ![Return](reset.svg).
<br>

**Read on:** [Text File Export Component](../txt-csv.md)