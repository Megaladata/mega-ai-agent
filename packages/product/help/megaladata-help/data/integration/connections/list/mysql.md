# ![ ](../../../images/icons/data-sources/db-mysql_default.svg)&nbsp;MySQL Connection

Use it to connect to a MySQL database.

Connection is possible both through the DBMS client and through Megaladata's internal driver.

## Connection parameters

To configure the connection, set the following parameters:

* **Caption**: Set a custom name for the connection.
* **Connection string**: Enter the string in the format `host[:port][:database]` (parameters enclosed in "[ ]" are optional):
   * `host`: The host of the DBMS server. For a Shared Memory protocol connection, the host value must be `localhost`.
   * `port`: The TCP port used by the DBMS server to interact with the client. If the `port` value is not a valid port number, a connection attempt is made using the Shared Memory protocol, where `port` corresponds to the `shared-memory-base-name`. If the parameter is empty and `host` is not `localhost`, the connection is made via the TCP/IP protocol with the default port `3306`.
   * `database`: The name of the database. If the `port` parameter is empty, this parameter can also be left empty, in which case all available databases will be shown.

These settings are used by the OLE DB driver to connect to the database.

The connection string can be empty, in which case a connection is made to `localhost`.

The connection string can be set manually or in a separate window that is opened by clicking the ![ ](./../../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)&nbsp;**More** button.

The window has two fields:

* **Server**: The MySQL server host.

* **Database**: The name of the database.

%spoiler%Connection string examples:%spoiler%

`srv-db`

`srv-db:db`

`srv-db:3306`

`srv-db:3306:db`

%/spoiler%

* **Test**: Use this button to test the specified connection settings.

>**Note:**: If the **Login prompt** option is enabled (see below), a login/password will be requested when testing the connection.

* **Username**: The database user's login.
* **Password**: The database user's password.
* **Login prompt**: When this checkbox is selected, the password entered in the configuration wizard will not be saved. It will be requested once upon the first activation of the [Database import](../../import/database.md) or [export](../../export/database.md) node and will not be requested again until the [connection](../README.md) node is deactivated. The login/password input dialog has a timeout of 60 seconds.

> **Note**: When working in batch mode or running a package from the Scheduler or via Megaladata Integrator with the **Login prompt** option enabled, a connection attempt will be made *without a password*. (The logs will indicate that the password was not used.)

* **SSL settings**: These parameters are required to establish a secure connection to MySQL. Set them in a separate window that opens when you click the ![ ](./../../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)&nbsp;**More** button. In the window, you can set the values of the following parameters:

    * **Use SSL**: When this option is enabled, a secure connection is established if supported by the MySQL server.
    * **CA certificate**: The path to the root certificate.
    * **User certificate**: The path to the client certificate.
    * **Private key**: The path to the private key.
    * **Private key password**: Specified if the private key is stored in an encrypted format.

* **Idle-in-transaction timeout**: The MySQL server does not manage improperly terminated connections. In case a client disconnects unexpectedly, its session remains active on the server until it times out. Unfinished transactions lock the DB data. To avoid long locks, the timeout can be limited by the "Idle-in-transaction timeout" parameter (set in seconds).
* **Show system tables**: When this checkbox is marked, the DB system tables available to the user become visible in the import wizard that uses this connection.
* **Do not use DBMS client**: If this option is enabled, an alternative driver built into the platform is used to connect to the DBMS.
* **Connection timeout (s)**: Sets the maximum connection time; the default value is 20 seconds. If a database import or export is performed in error-ignore mode, and the connection fails within the set time, the corresponding error will be written to the **Execution status** output port of the DB Import/DB Export node. In normal import/export mode, the node execution will terminate with an error.
* **Lock timeout (s)**: Sets the timeout for waiting for a resource (table, row) to be unlocked. You can set it in the drop-down list or by entering a positive integer value into the field. The list provides the following options:
    * **Default**: The default value of the DB server is used.
    * **∞**: The waiting time is unlimited.
    * **Numeric values**: A choice of the values 5, 10, 20, 30, 60, and 120.
* **Quote names**: If database object names (e.g., table names, field names) contain spaces or reserved characters, enable this checkbox to use quotes marking the beginning and end of the name.
* **Clear pool when deactivated**: If enabled, clears the pool of frequently used connections for the connection node immediately upon the node's deactivation. If disabled, the connections will be deactivated and deleted from the pool one by one after the node is deactivated.
* **Comment**: In this form, you can leave any reference information about the connection.

## Compatibility

* MySQL Server 5.5–8.0
* MariaDB 10.1–10.10

**See also**:

* [Wikipedia page](https://en.wikipedia.org/wiki/MySQL)
* [Official MySQL website](https://www.mysql.com/)
* [SQL syntax documentation](https://dev.mysql.com/doc/refman/8.0/en/sql-statements.html)

**Read on:** [ODBC Connection](odbc.md)