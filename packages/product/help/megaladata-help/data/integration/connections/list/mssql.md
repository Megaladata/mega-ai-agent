# ![ ](../../../images/icons/data-sources/db-mssql_default.svg)&nbsp;MS&nbsp;SQL Connection

Used for connecting to the MS SQL database.

To connect to SQL Server on Windows, you will need to install the Microsoft OLE DB Driver for SQL Server or the SQL Server Native Client first.

On Linux, the connection requires no DBMS client.

## Connection Parameters

To configure a connection, set the following parameters:

* **Caption**: Set a custom name for the connection.
* **Connection string**: A string in the format `host[:port]:database` (the parameter enclosed in [&nbsp;] is optional):
   * `host`: the DBMS server host.
   * `port`: the TCP port used by the DBMS server to interact with the client. If empty, the default port `1433` is used.
   * `database`: the database name.

You can enter the connection string manually or click the ![ ](../../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)&nbsp;**More** button to open the selection window with two fields:
   * **Server**: the SQL server host. Specify the named SQL server instance after "\" if necessary.
   * **Database**: the database name.

%spoiler%Connection string examples:%spoiler%

`srv-db:db`

`srv-db:1433:db`

%/spoiler%

* **Test**: Use this button to test the specified connection settings.

> **Note:** If the **Login prompt** option (see below) is enabled, the test button will activate a login prompt.

* **Username**: The DB user login name. 
* **Password**: The DB user password.

> **Important:** If the username and password are not specified, the system will attempt to connect under the domain account of the user who started Megaladata in the system. In this case, such a user account must have MS SQL authorization rights.

* **Login prompt**: If you select this option, the password entered in the configuration wizard won't be saved. The system will prompt for password upon the first activation of a [Database import]() or [export]() node. The password won't be required again until the [Connection](../README.md) node is deactivated. The login/password window times out after 60 seconds.

> **Note:** When working in [batch mode]() or launching the package via the [Scheduler]() or Megaladata Integrator, if the **Login prompt** option is enabled, the system will attempt to connect *without a password*. (The logs will indicate that the password wasn't specified.)

* **Show system tables**: When selecting this checkbox, the system DB tables available to the user become visible in the import wizard of a node that employs this connection. 
* **Quote names**: If DB object names (for example, names of tables or fields) contain spaces or reserved characters, select this checkbox to use quotation marks indicating the beginning and the end of a name.
* **Codepage**: The options to set the DB server message language.
* **Do not use DBMS client**: This parameter is not changeable. The option is disabled for Windows, while enabled for Linux.
* **Clear pool when deactivated**: When enabled, the pool of connections used by a MS SQL connection node is cleaned immediately upon the node deactivation. When disabled, each connections is closed and removed from the pool individually.
* **Connection timeout (s)**: Set to 20 seconds by default. When performing database import or export in error-ignore mode, if the system fails to connect within the set timeout, the corresponding error will be logged to the **Execution status** output port of the **Database** import (export) node. In regular mode, a timed-out connection will cause an error.
* **Lock timeout (s)**: Sets the timeout for waiting for a resource (e.g., table or row) to be unlocked. You can enter a positive integer value or select one of the options from the dropdown list:
   - **Default**: uses the default DB server value
   - **∞**: no wait time limit
   - **Numeric values**: 5, 10, 20, 30, 60, or 120
* **Comment**: Use this field to enter and additional information about the connection.

> **Note:** To connect to the database, the clients or the ODBC driver must have the same bitness as the Megaladata application or server.

## Compatibility

* Clients:
   * Microsoft OLE DB Driver 18 or 19
   * SQL Native Client

* Servers:
   * SQL Server 2022, 1019, 2016, 2014, 2012, 2008 R2, or 2008
   * SQL Server 2000 (including MSDE)
   * SQL Server 7

**See also:**

* [Official MS SQL website](https://www.microsoft.com/sql-server)
* [SQL Syntax Documentation](https://docs.microsoft.com/sql/t-sql/queries/queries)

**Read on:** [MySQL Connection](mysql.md)