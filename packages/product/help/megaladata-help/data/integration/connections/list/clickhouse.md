# ![ ](../../../images/icons/data-sources/db-clickhouse_default.svg)&nbsp;ClickHouse Connection

Use it to connect to a ClickHouse database.

## Connection parameters

When setting up a new connection, provide the following information:

* **Caption:** Select one of the two options from the dropdown list:
   * **Auto-caption**: A name generated automatically by the platform
   * **Custom caption**: A user-defined name for the connection
* **Connection string:** This can be entered manually or in a separate dialog by clicking the ![ ](../../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)&nbsp;**More** button. The string format is `host[:port][:database]`.
   * The *port* and *database* parameters are optional. 
   * The default port is `9000`.
   * The default database is `default`.
* **Test**: Use this button to test the specified connection settings.
> **Note:** If the **Login prompt** option (see below) is active, you will be asked for login/password when testing the connection.
* **Username**: The username for the database user. The default name is `default`.
* **Password**: The password for the database user. By default, there is no password.
* **Login prompt**: When selected, the password entered in the setup wizard is not saved. You will be prompted for a password once when you first use a [Database import](https://help.megaladata.com/userguide/integration/import/database.html) or [Database export](https://help.megaladata.com/userguide/integration/export/database.html) node. You will not be asked for the password again until you deactivate the connection node. The login/password dialog has a 60-second timeout.

> **Note:** When running in [batch mode](), from the [Scheduler](), or through [Megaladata Integrator]() with this option enabled, the system will attempt to connect *without a password*. The logs will indicate that a password was not specified.

* **SSL settings**: Click the ![ ](../../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)&nbsp;**More** button to open a dialog for configuring a secure connection.
   * **Use SSL**: When selected, data is transmitted using the SSL/TLS protocol.
   * **Check server certificate**: By default, the **Full** check is enabled. You can disable it by selecting **Off**.
   * **CA certificate**: The path to the root certificate file.
   * **User certificate**: The path to the client certificate file.
   * **Private key**: The path to the private key file.
   * **Private key password**: The password for the private key. This is empty by default.
* **Cluster**: Select from the list of clusters available for the specified connection.
* **Use local time zone**: This option, enabled by default, converts [DateTime](https://clickhouse.com/docs/en/sql-reference/data-types/datetime) columns from local time to UTC and back.
* **Data compression method**:
   * **Without compression** (default)
   * **LZ4**
* **Network send timeout (s)** and **Network receive timeout (s)**
* **Show system tables**: When selected, the database's system tables (accessible to the user) will be visible in the import wizards that employ this connection.
* **Quote names**: Use this option if database object names (e.g., table or field names) contain spaces or reserved characters.
* **Do not use DBMS client**: This option is unavailable as the built-in driver is always used for ClickHouse connections.
* **Single session work mode**: Select it if you need to restrict multiple sessions.
* **Session wait timeout (s)**:
* **Connection timeout (s)**: The maximum time allowed for a connection to be established, with a default of 20 seconds.
   * If an import or export operation is in error-ignoring mode and the connection fails to establish within the specified time, an error will be logged to the **Execution status** output port of the **Database** import/export node.
   * In normal mode, a timeout will cause the node execution to fail.
* **Lock timeout (s)**: Supported in ClickHouse versions 20.4.2 and later. This sets the time to wait for a lock on a resource (table or row) to be released. You can enter a positive integer or select from a dropdown list:
   * **Default:** Uses the database server's default setting.
   * **∞:** Sets the maximum timeout of 24 days.
   * **Numeric values:** 5, 10, 20, 30, 60, or 120 seconds.
* **Comment**: Use this field to add any notes or comments on the connection.

## Important considerations

* Connection pooling is not used.
* When [exporting data to a new table](../../export/database/new-table-design.md), a [Log engine](https://clickhouse.com/docs/en/engines/table-engines/log-family) table is created.
* Due to Clickhouse limitations:
   * Transactions are not supported.
   * The supported date range is from 1970 to 2106.
   * Updating existing records in a table is not supported.
   * Deletion by key is only supported for tables using an engine from the [MergeTree](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree) family.

> **Note:** In MergeTree tables, [data mutation](https://clickhouse.com/docs/sql-reference/statements/alter#mutations) operations are not atomic. As these operations are involved in deletion-by-key export process, completing record deletion upon activation of the export node is not guaranteed. As the user doesn't control the mutation duration, a subsequent data selection query may return old records. This should be considered when designing your workflows.

## Compatibility

This connection is compatible with ClickHouse DB versions 19.1 and higher.

**See also:** [ClickHouse Documents](https://clickhouse.tech/docs/)

**Read on:** [Firebird](firebird.md)