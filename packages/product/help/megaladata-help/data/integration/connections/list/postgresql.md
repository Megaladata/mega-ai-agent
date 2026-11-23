# ![ ](../../../images/icons/data-sources/db-postgres_default.svg)&nbsp;PostgreSQL Connection

Use it for connecting to and working with the PostgreSQL database.

>**Note:** This connection also works with [Greenplum](https://en.wikipedia.org/wiki/Greenplum), which is based on PostgreSQL

## Connection parameters

To create a connection, set up the following parameters:

* **Caption:** A user-defined name for the connection.
* **Connection string:** A string in the format `host[:port][:database]` (parameters in "[&nbsp;]" are optional):

    * `host`: The PostgreSQL server host
    * `port`: The TCP port used by the DBMS     server to interact with the client
    * `database`: The name of the database.

The connection string can be omitted. In this case, use `host=localhost`.
The connection string is used by the OLE DB driver to connect to the database. You can enter it manually or click the ![ ](./../../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)&nbsp;**More** button to open the selection window, which has two fields:

* **Server**: the SQL server host
* **Database**: the database name

%spoiler%Connection string examples:%spoiler%

`srv-db`

`srv-db:db`

`srv-db:5432`

`srv-db:5432:db`

%/spoiler%

* **Test:** Click this button to test the specified connection settings.

>**Note:** If the **Login prompt** option (see below) is enabled, a login/password will be requested when testing the connection.

* **Username**: The database user's login. If not specified, domain authorization is used.
* **Password**: The database user's password.
* **Login prompt**: If this checkbox is selected, the password entered in the configuration wizard will not be saved. It will be requested once upon the first activation of [Database import](../../import/database.md) or [export](../../export/database.md) nodes and will not be requested again until the [connection](../README.md) node is deactivated. The login/password dialog box has a timeout of 60 seconds.

>**Note:** When working in batch mode or launching the package via the Scheduler or the Megaladata Integrator, even if the **Login prompt** is enabled, the platform will attempt to connect **without a password**. (The logs will indicate that the password was not used.)

* **SSL settings**: Parameters required to establish a secure connection to PostgreSQL. To set these, click the ![ ](./../../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)&nbsp;**More** button. In the window that opens, set the the following parameters:
    * **Use SSL**: When this option is enabled, a secure connection is established if supported by the PostgreSQL server.
    * **CA certificate**: The path to the root certificate.
    * **User certificate**: The path to the client certificate.
    * **Private key**: The path to the private key.
    * **Private key password**: Used if the private key is stored in an encrypted form.
* **Show system tables**: When this checkbox is selected, the system tables available to the user become visible in the wizard of the import node that uses this connection.
* **Do not use DBMS client**: This setting is unchangeable, as Megaladata always uses the built-in driver for PostgreSQL.
* **Connection timeout (s)**: This setting controls the maximum time allowed to establish a connection. The default value is 20 seconds. In error-ignore mode, if the connection times out, the error is written to the **Execution status** output port of the **Database** import/export node. In all other modes, a connection timeout will cause the node execution to terminate with an error.
* **Lock timeout (s)**: Sets the timeout for waiting for a resource (e.g., table or row) to be unlocked. You can set it by entering a positive integer into the field or selecting a value from the dropdown list:
    * **Default**: Uses the database server's default value.
    * **∞**: The waiting time is unlimited.
    * **Numeric values**: 5, 10, 20, 30, 60, or 120.
* **Quote names**: If database object names (e.g., table or field names) contain spaces or reserved characters, enable this checkbox to use quotes marking the beginning and end of the name.
* **Clear pool when deactivated**: When enabled, clears the pool of connections used by the connection node immediately after the node's deactivation. If disabled, each connection will be deactivated and removed from the pool individually after the node has been deactivated.
* **Comment**: Use this form for any reference information about the connection.

> **Note:** Since the built-in driver is used for connection, installation of the DBMS client is not required.
   
## Compatibility

PostgreSQL versions from 9.0 to 15.6.

> **Important:** UTF-8 encoding is used for data exchange with the server.

**See also:**

* [Wikipedia page](https://en.wikipedia.org/wiki/PostgreSQL)
* [PostgreSQL website](https://www.postgresql.org/)
* [SQL syntax documentation](https://www.postgresql.org/docs/)

**Read on:** [SQLite Connection](sqlite.md)