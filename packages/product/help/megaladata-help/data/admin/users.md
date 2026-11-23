# ![Users](../images/icons/admin-system-objects/users_default.svg) Users

This subsection enables to create users, edit them, distribute rights, select their authentication method and delete them. The section is a table with control buttons over it:

* ![Add](../images/icons/toolbar-controls/plus_default.svg) **Add**: add a new user.
* ![Edit](../images/icons/toolbar-controls/edit_default.svg) **Edit**: edit user.
* ![Delete](../images/icons/toolbar-controls/delete_default.svg) **Delete**: delete user from the system.
* ![Update](../images/icons/toolbar-controls/refresh_default.svg) **Update**: update the list of users and their parameters.

> **Note:** When deleting a user, it is possible to save his folder with its contents. In this case, the users with the enabled *File storage full access* parameter can view its contents.

%spoiler%Hotkeys%spoiler%

* **Up**: go up to row.
* **Down**: go down to row.
* **Insert**: insert a new user.
* **F2**: edit user.
* **Delete**: delete user from the system.
* **Alt + F5**: update the list of users and their parameters.

%/spoiler%

When pressing ![Add](../images/icons/toolbar-controls/plus_default.svg) *Add*/![Edit](../images/icons/toolbar-controls/edit_default.svg)*Edit* button, *New user*/*Edit user* window appears. User parameters are configured in this window. All user parameters are displayed in the subsection table, with the exception of *Password* parameter.

|Parameter|Description|
|:-|:-|
|Login|Username used for login. Upon creation of the user, it is not possible to change his name|
|Full name|Full user name, it is not obligatory to fill in this field|
|Authentication|Selection of [method of *Authentication*](./users.md#sposoby-autentifikatsii) of user: Local or [LDAP](./ldap.md)|
|Password|The user password used for login, this column is not available in the table of the *Users* section|
|Administration|It displays whether the user is an administrator, makes [*Administration*](./README.md) section and its subsections accessible|
|Workflows design|It displays whether the user is an analyst, makes workflows design accessible|
|View reports|It makes [*Reports*](../report/README.md) section accessible. This section is accessible for an analyst by default|
|Enter in the interactive mode|It checks whether it is permitted to use the enter mode via browser|
|Enter in the service mode|It checks whether it is permitted to enter in the service mode (for the server start)|
|File storage full access|It displays whether a user has full access to the [file storage](../location_user_files.md), otherwise, only to the personal and [shared folders](../location_user_files.md)|
|Block account|It displays whether a user is blocked in the system|

> **Note:** Such parameters as *Administration*, *Workflows design*, *View reports*, *Access to all files*, *Interactive mode*, *Service mode* and *Blocked* are selected with a checkbox in the window used for creation/edition of a user, and they are selected with "•" character in the subsection table, *Authentication* parameter is selected from the drop-down list in the window used for creation/edition of a user, and it displays the selected method of the user *Authentification* in the subsection table.

## Authentification Methods

Use of the LDAP authentication enables to log in to the Megaladata server by means of the LDAP server. If the *Authentication* method is "Local", *Authentication* is performed by means of  the Megaladata tools.

> **Notes:**
>
> * It is forbidden to change the *Authentication* method for oneself. In this case, a user can become unavailable, whereas he can be the only administrator.
> * The last local administrator cannot change the *Authentication* method. Namely, at least, one active local administrator will always remain in the system as the administrator with the LDAP *Authentication* can become unavailable due to incorrect settings or changes on the LDAP server.
> * When changing the *Authentication* user method from "LDAP" to "Local", the password is reset. Consequently, the user can log in with empty password if another password is not set when changing the *Authentication* method.
