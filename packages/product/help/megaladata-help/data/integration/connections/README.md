# Connections

Before using [SOAP Service](../../processors/integration/soap-request.md) nodes, [REST Service](../../processors/integration/rest-request.md) nodes, or [import](../import/README.md)/[export](../export/README.md) nodes that connect to business apps, data warehouses, databases, and other external sources, you must first create a data source connection in the [package](../../interface/packages.md). A connection contains all the necessary parameters to link to a data source, such as login credentials and the source location. You can reuse a connection multiple times within the same package.

## Available connections

* Databases:
   * [BigQuery](./list/bigquery.md)
   * [ClickHouse](./list/clickhouse.md)
   * [Firebird](./list/firebird.md)
   * [MS Access](./list/msaccess.md)
   * [MS Excel](./list/excel.md)
   * [MS SQL](./list/mssql.md)
   * [MySQL](./list/mysql.md)
   * [ODBC](./list/odbc.md)
   * [Oracle](./list/oracle.md)
   * [PostgreSQL](./list/postgresql.md)
   * [SQLite](./list/sqlite.md)
* Web services:
   * [Kafka](./list/kafka.md)
   * [SOAP Service](./list/soap-service.md)
   * [REST Service](./list/rest-service.md)
* Data warehouse:
   * [XSD Schema Set](./list/schemes.md)

You can set up a separate list of connections for each module in a package.

To create or edit connections:

1. Open the package structure in the navigation bar.
2. Select **Connections** for the relevant module.

![Select "Connections" in the navigation tree](./select-connections.png)

This opens the **Connections** page. A tree of available connection types appears on the left.

![Create a new connection](./MD-Scheme-2.png)

To create a new connection, do one of the following:

* Drag the connection type from the tree (1) to the connections area (2).
* Double-click the connection type in the tree.

A new connection (3) appears in the connections area, and the connection parameters dialog opens. After you set the required parameters, you can test the connection.

## Managing connections

Use the toolbar, context menus, and hotkeys to manage your connections.

The toolbar (4) contains the following options for managing connections:

* ![Show tree](../../images/icons/toolbar-controls/arrow-rr_default.svg) — Show connection class tree.
* ![Hide tree](../../images/icons/toolbar-controls/arrow-ll_default.svg) — Hide connection class tree.
* ![Large tiles](../../images/icons/toolbar-controls/tile_default.svg) — View as large tiles.
* ![Table](../../images/icons/toolbar-controls/table_default.svg) — View as a table.
* ![Group list](../../images/icons/toolbar-controls/group-list_default.svg) — Group the list by connection type.
* ![Configure connection](../../images/icons/toolbar-controls/setup_default.svg) — Configure the selected connection.
* ![Configure visibility](../../images/icons/toolbar-controls/access-rights_default.svg) — Configure [visibility](../../workflow/access-modifier.md).
* ![Delete connection](../../images/icons/toolbar-controls/delete_default.svg) — Delete the selected connection.
* **Test** — Test the connection.
* ![Activate connection](../../images/icons/toolbar-controls/test-connection_default.svg) — Activate the selected connection.

To navigate through your connections, the following tools are available:

* ![search in list](../../images/icons/toolbar-controls/zoom_default.svg) — Search for a connection by name or path.
* ![Filter list](../../images/icons/toolbar-controls/filter_default.svg) — Filter connections by group, caption, or path.
* ![Sort list](../../images/icons/toolbar-controls/sort-asc_default.svg) or ![](../../images/icons/toolbar-controls/sort-desc_default.svg) — Toggles between sorting connections ascending or descending. A **Clear sort** option is available in the dropdown menu.

The context menu is available for each connection:

* ![rename](../../images/icons/toolbar-controls/edit_default.svg) Rename connection
* ![configure](../../images/icons/toolbar-controls/setup_default.svg) Configure connection
* ![access](../../images/icons/toolbar-controls/access-rights_default.svg) Configure visibility
* ![delete](../../images/icons/toolbar-controls/delete_default.svg) Delete connection
* ![test](../../images/icons/blank.svg) Test connection
* ![activate](../../images/icons/toolbar-controls/test-connection_default.svg) Activate connection
* ![deactivate](../../images/icons/toolbar-controls/stop_default.svg) Deactivate all

## Hotkeys

The following keyboard shortcuts are available:

* <kbd>F3</kbd> — Activate connection
* <kbd>Shift</kbd> + <kbd>F3</kbd> — Test connection
* <kbd>F2</kbd> — Rename connection
* <kbd>Alt</kbd> + <kbd>G</kbd> — Group list
* <kbd>Ctrl</kbd> + <kbd>D</kbd> — Filter list
* <kbd>Enter</kbd> — Configure connection
* <kbd>Delete</kbd> — Delete connection

> **Important Note:** To connect to certain data sources, such as databases, you must install the corresponding DBMS client or client libraries. The bitness (32-bit or 64-bit) of the client must match the bitness of the Megaladata application or server.

[Example: Connecting a database](../../quick-start/database.md)