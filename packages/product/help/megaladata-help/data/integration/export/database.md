# ![ ](../../images/icons/data-sources/db-database-export_default.svg)&nbsp;Database: Export Component

Use this component to export your datasets to databases.

> **Important:** To configure a node based on this component, you must first create a [database connection](../connections/README.md) and link it to the node's **Connection** input port. See the [example](../../quick-start/database.md).

## Ports

### Input

* ![ ](../../images/icons/app/node/ports/inputs/link_inactive.svg)&nbsp;**Connection**: Use this port to connect your database.
* ![ ](../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;Data source: This port accepts the data table you need to export to a database.
* ![ ](../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg)&nbsp;[Control variables](../../workflow/variables/control-variables.md) (optional port): Here you can set values of the wizard parameters using variables.

### Output

* ![]()&nbsp;**Execution status**: This port returns a variable showing the error message (if any) and the node's exit code:
   - `0`: no errors
   - `1`: node execution error

## Setup wizard

### Step 1. Export to database

In the wizard, configure the following parameters:
* **Database**: Enter the database connection string. The **Activate** button on the right activates the connection.
* **Table name**: Specify the name of the table you want to export data to. Select the table from the drop-down list or use the [Create table](./database/new-table-design.md) button.
* **Export type**: Select one of the options:
   * **Append data to table**: Appends rows from the source table to the selected table. The system runs an `INSERT INTO table` command for all databases.
   * **Clear table and append data**: Clears the database table completely and fills it with rows of the exported table. For all databases but ClickHouse, the system runs `DELETE FROM table` + `INSERT INTO table` requests. For ClickHouse, `TRUNCATE table` is used.
   * **Execute `TRUNCATE` and refill with data**: This export type is similar to the previous one. The only difference is that the platform runs `TRUNCATE` instead of `DELETE FROM` to clear the table. This export type is not available for SQLite, Firebird, or Access, as these DBs do not support `TRUNCATE`. For all databases connected via ODBC using `TRUNCATE` is always available, as the system cannot determine if this operation is supported by a specific database. In case the database does not support `TRUNCATE`, the platform will return an error.
   * **Delete records by key fields**: Use this option to enable selecting a key field by which records will be deleted from the table at the next wizard step, **Map source columns to table fields**. In this case, the system doesn't perform any export as such. Instead, it runs a `DELETE FROM table WHERE filter_expr` request for all databases but ClickHouse. For ClickHouse, it uses `ALTER TABLE table DELETE WHERE filter_expr`.
   * **Delete records by key fields and insert data into table**: This option uses the same algorithm as the previous one, but appends rows from the source table afterwards, combining the "Delete records by key fields" and "Append data to table" requests.
   * **Update existing table records**: Use this to enable selecting a key field by which records will be updated. The system runs an `UPDATE table WHERE filter_expr` request. This option is not available for [ClickHouse](../connections/list/clickhouse.md) and [BigQuery](../connections/list/bigquery.md), as it affects their performance.

For databases that support transactions, the export is performed in transactions with the `READ COMMITTED` isolation level.

Note that you can also set the export type with a control variable: Specify an `integer` variable in the **Control variables** port and assign it a value between `0` and `5`. Using this method will disable all the type selection radiobuttons in the wizard.

> **Note:** For [MS Excel](../connections/list/excel.md), the following export types are supported: **Append data to table** and **Update existing table records**.

* **Use fast loader**: For [PostgreSQL](../connections/list/postgresql.md) connections, enable this option to optimize the process of adding data to PostgreSQL and increase performance when exporting large data volumes with `COPY BINARY ... FROM STDIN`. Available only for the following export types:
   * **Append data to table**
   * **Clear table and append data**
   * **Execute TRUNCATE and refill with data**
   Available values:
      * **Auto**: Set by default. The system will employ the fast loader automatically if the target object is a view (`VIEW` or `MATERIALIZED VIEW`), the table has defined rules (`RULE`), or uses unsupported field types.
      > **Note:** The system will use the standard INSERT for volumes under 500 rows. (For larger volumes, the loader is faster.)
      * **Yes**: If selected, the system will force using the fast loader.
      > **Note:** For packages of less than 100 rows, the system always performs a standard INSERT, regardless of the chosen option.
      * **No**: If selected, the system will always use the standard `INSERT` mechanism.

To achieve maximum speed when using the fast loader, we recommend increasing the value of the **Row count in batch** parameter. 
* **Row count in batch**: Set the number of rows to be sent to DB within a single operation. The default value is `1000`. The minimum possible value is `1`, and the maximum is `1000000`. A larger number of rows helps reduce export duration. This setting is available only for ClickHouse, Oracle, PostgreSQL, and ODBC.

> **Note:** Some ODBC drivers do not support batch operations. In this case, the setting will not affect the duration of export to a database.

* **Transaction commit frequency (rows)**: Use this to divide the export process into several transactions. The system will commit transactions periodically, after the set count of rows. If the parameter is null, no division is performed. 
* **Ignore errors**: When this mode is enabled, the node will activate despite any activation errors. The errors will be logged into the **Execution status** output port.

### Step 2. Map source columns to table fields

- **Auto link**: Use this button to map the source columns to DB table fields automatically. The list of fields will not be changed (the system doesn't add new fields), but new links may appear. Existing links will remain unchanged. The mapping algorithm attempts to link source columns with no links to unlinked database fields:
   - First, by searching for compatible data types and matching names (case-insensitive match).
   - Then, by searching for compatible data types and matching captions (case-insensitive match).
- **Delete all links**: Use this button to remove all existing links.
- **Update table fields**: Use to sync the list of the port's output fields with the list ofinput fields (see [Automapping](../../workflow/ports/field-synchronization.md)).
- **Automapping**: Use this button to run **Update table fields** automatically upon each node execution. By default, automapping is *disabled*.
- **Sort by links**: Click to rearrange the lists to avoid intersecting links.

**Read on:** [Creating a New Table](./database/new-table-design.md)