# ![ ](../../../images/icons/data-sources/db-oracle_default.svg)&nbsp;Oracle Connection

Use it to connect to an Oracle database. Connection is possible either through the DBMS client or through Megaladata's internal driver.

## Connection parameters

To configure the connection, set the following parameters:

* **Caption**: A user-defined name of the connection.
* **Connection string**: The path used by the driver to connect to the database. The format of the connection string depends on the driver (see the **Do not use DBMS client** parameter below):
      * When using the *built-in driver*, the string format can be specified in one of two ways, separated by "|": `host[:port][/ServiceName] | host:port:SID` (parameters in [&nbsp;] are optional):
            * `host`: The DBMS server host
            * `port`: The TCP port used by the DBMS server to interact with the client
            * `ServiceName`: The name of the service
            * `SID`: The Oracle Database Instance (SID) containing the necessary data

      * When using the *DBMS client*: The format used is `net_service_name`—the DBMS server host, as specified in the `tnsnames.ora` configuration file of the Oracle client. The connection string can include additional parameters supported by the Easy Connect syntax.

%spoiler%Connection string examples:%spoiler%

**Using the built-in driver (without the DBMS client):**

`db-ora-03:1521:ORCL03`

`db-ora-03/orcl03.bg.local`

`db-ora-03:1521/orcl03.bg.local`

**Using the DBMS client:**

`db-ora-19.bg.local`

`db-ora-19.bg.local:1521/orcl.bg.local?connect_timeout=60&transport_connect_timeout=30&retry_count=3`

%/spoiler%

* **Test:** Use this button to test the specified connection settings.

>**Note:** If the **Login prompt** option (see below) is enabled, a login/password will be requested when testing the connection.

* **Username**: The database user's login.
* **Password**: The database user's password.
* **Login prompt**: If this box is checked, user password entered in the configuration wizard will not be saved. Instead, the user will be prompted to enter it the first time they run a [Database import](../../import/database.md) or [export](../../export/database.md) node. The password is then remembered for the rest of their session, and they will only need to enter it again after the [connection](../README.md) node is deactivated. Please be aware that the password prompt will time out after 60 seconds.

>**Note:** When working in batch mode or launching the package via the Scheduler or the Megaladata Integrator, even if the **Login prompt** is enabled, the platform will attempt to connect **without a password**. (The logs will indicate that the password was not used.)

* **Show system tables**: When this checkbox is selected, the system tables available to the user become visible in the wizard of the import node that uses this connection.
* **Do not use DBMS client**: If this option is enabled, an alternative, platform-integrated driver is used to connect to the DBMS.
* **Connection timeout (s)**: Sets the limit for establishing a connection. The field becomes active when the **Do not use DBMS client** parameter is enabled. The default value is 20 seconds. If a database import or export is performed in error-ignore mode and the connection fails within the set time, the corresponding error will be written to the **Execution status** output port of the Database import/export node. In normal import/export mode, the node execution will fail with an error. For the Oracle client, the timeout is configured in the connection string if Easy Connect syntax is used, or in the `tnsnames.ora` configuration file.
* **Quote names**: If database object names (e.g., table names or field names) contain spaces or reserved characters, enable this setting to use enclosing characters marking the beginning and end of the name.
* **Clear pool when deactivated**: When enabled, clears the pool of connections associated with the connection node immediately upon the node's deactivation. If disabled, each connection will be deactivated and removed from the pool individually after the node's deactivation. This parameter is disabled by default.
* **Comment**: Use this form for any reference information about the connection.

> **Note:** To connect to the database via the DBMS client, you need to install the client library files (DLL) of the same bitness as the Megaladata application/server.

## Compatibility

* Clients: 21c, 19c, 18c, 12c, 11g, 10g, 9i, 8i, and 8.0
* Servers: 21c, 19c, 18c, 12c, 11g, 10g, 9i, 8i, and 8.0, including Oracle Express Edition 11g and 10g

> **Important:** UTF8 encoding is used

**See also:**

* [Wikipedia page](https://en.wikipedia.org/wiki/Oracle_Database)
* [Oracle website](https://www.oracle.com/)
* [SQL language quick reference](https://docs.oracle.com/en/database/oracle/oracle-database/23/sqlqr/index.html)
* [SQL language full reference](https://docs.oracle.com/en/database/oracle/oracle-database/23/sqlrf/index.html)

**Read on:** [PostgreSQL Connection](postgresql.md)