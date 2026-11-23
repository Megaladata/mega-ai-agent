# ![ ](../../../images/icons/data-sources/db-firebird_default.svg)&nbsp;Firebird Connection

Use this guide to connect to a Firebird database.

## Connection settings

To set up a connection, configure the following settings:

* **Caption**: A custom name for your connection.  
* **Connection string**: A string with the format `[host[/port]:]databasepath.fdb`. The parameters in [] are optional. You can enter the connection string manually or click the ![ ](../../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)&nbsp;**More** button to configure it in a separate window. There are two supported connection types:
   * **Local**: Connects directly to a database file without a Firebird server. You only need to provide the path to the database.
   * **Remote**: Connects using a Firebird server.
      * **Protocol**: The communication protocol the server uses. (Select from the dropdown.)
      * **Server**: The hostname of the Firebird server (e.g., `127.0.0.1`).

%spoiler%Connection string examples:%spoiler%

`D:\Data\db.fdb`

`srv-db:D:\Data\db.fdb`

`srv-db/3050:D:\Data\db.fdb`

%/spoiler%

* **Test**: This button allows you to test your connection settings.
>**Note**: If you have the **Login prompt** checkbox marked (see below), you'll be prompted for a username and password when testing the connection. 
* **Username**: The username for the database. If you leave this blank, domain authorization is used.
* **Password**: The password for the database user.
* **Login prompt**:  If checked, the password you enter won't be saved. You'll be asked for it the first time you use the [Database import](../../import/database.md) or [Database export](../../export/database.md) node. You won't be asked for the password again until the connection node is deactivated. The password prompt times out after 60 seconds.
>**Note**: When working in **batch mode**, running a package from the **Scheduler**, or launching it via the **Megaladata Integrator**, if this option is enabled, the system will try to connect *without a password*. The logs will show that a password wasn't specified.
* **Show system tables**:  When checked, database system tables (accessible to the user) will be visible in the import wizard of the node employing the connection.
* **Quote names**: Select this option to enclose database object names (such as table or field names) in quotation marks. This is useful if the names contain spaces or reserved characters.
* **Codepage**: The character encoding for interpreting data from the server.
* **Do not use DBMS client**: This setting isn't available for Firebird.
* **Clear pool when deactivated**: After the node is deactivated, clears the cache of Megaladata Integrator packages frequently used in batch processing. This is disabled by default.
* **Comment**: Add any notes or reference information about the connection here.

If multiple users access the database, we recommend using the Firebird server to prevent access conflicts.

> **Note:** For domain authorization, Megaladata uses the credentials of the user account that the server is running under, not the credentials of the user logged into the application.

## Compatibility

Starting from Firebird 2.5 and higher.

**See also:**

* [Official Firebird website](https://firebirdsql.org/);
* [SQL Syntax Documentation](https://www.firebirdsql.org/file/documentation/reference_manuals/fblangref25-en/html/fblangref25-dml.html).

**Read on:** [Interbase connection](interbase.md)
