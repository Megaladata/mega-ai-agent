---
description: Session Manager in Megaladata. Viewing open sessions and packages. Managing session activity and clearing the package pool. General information about Session Manager layout.
---
# ![Parameters](./../images/icons/admin-system-objects/manager_default.svg)&nbsp;Session Manager

Megaladata's *Session Manager* is designed for viewing open sessions and packages, monitoring and managing their activity, and clearing the package pool.

> **Note:** Session Manager is only available in server editions of Megaladata.

The Session Manager page features a table organized into sections:
* **Sessions**: User sessions and the packages opened within them.
* **Shared packages**: Packages that are opened by the server via references from other packages, rather than belonging to a specific session. Multiple packages can reference a single shared package. A shared package cannot be closed while referenced by any running package or **Package pool** item.
* **Package pool**: Packages cached in server memory for reuse. This optimizes performance by eliminating the need to reload frequently used packages. The pool contains packages called directly by **Megaladata Integrator** and [BatchLauncher](../workflow/batchlauncher.md), while the packages they reference belong to the **Shared packages** group. The pool size is defined in the [server parameters](../admin/parameters.md). When the pool is full, the least recently used packages are removed from the pool. If a package file is modified, all its instances are automatically cleared from the pool.

## Table columns

* **Sessions and packages**: Displays the session name and the packages opened within it. To view the packages, expand the list by clicking on <kbd>+</kbd>". The session name consists of the username and a unique session identifier (similar to the one displayed in the server operation log).
* **Activity**: The time of the last activity in the session. When a node is executing in a child package, the **Activity** is highlighted in green. For the package, a progress bar is displayed, and the start time of the node activation is shown in the tooltip when hovering over the progress bar.
* **Host**: The IP address of the client from which the session was launched. When the **Resolve names by IP** option is enabled via the context menu, the hostname is displayed instead of the address.
* **Role**: The user's role in the session is displayed with the following icons:
    * ![Parameters](./../images/icons/admin/user-roles/admin_default.svg)&nbsp;**Administration**
    * ![Parameters](./../images/icons/admin/user-roles/design_default.svg)&nbsp;**Workflow design**
    * ![Parameters](./../images/icons/admin/user-roles/viewer_default.svg)&nbsp;**View reports**
    * ![Parameters](./../images/icons/admin/user-roles/execute_default.svg)&nbsp;**Batch processing**, i.e. execution from the Integrator
    
> If a user has multiple roles, the most privileged one is shown.

* **Version**: The package version in [semantic versioning](https://semver.org/) format.
* **Created**: The date and time the package file or session was created. This value doesn't show for a draft package.
* **Saved**: The timestamp of the last save. This field is blank for draft packages.
* **Path**: The full path to the package in the [file storage](./../location_user_files.md). This doesn't apply to draft packages.

All columns, except for **Sessions and packages**, can be hidden. For packages within the **Shared packages**, the number of sessions that reference this package, including the reference from the server itself, is displayed to the right of the package name.

## Toolbar buttons

* ![Refresh](./../images/icons/toolbar-controls/refresh_default.svg) **Refresh**: Refreshes the list of sessions or packages. This may remove already closed sessions/packages from the list or add new ones. The list also updates automatically every 5 seconds. A shortcut for the action: <kbd>Alt></kbd> + <kbd>F5</kbd>
* ![Stop](./../images/icons/toolbar-controls/stop_default.svg) **Stop**: Available for currently running sessions and packages. Terminates the selected item. Stopping a session stops all its packages. Conversely, if you stop the last running package in a session, the session itself will close. Requires user confirmation.
* ![Close](./../images/icons/toolbar-controls/close_default.svg) **Close**: Closes the selected session or package and removes it from the table. The action requires user confirmation. Hotkey for the action: <kbd>Delete</kbd>.
* ![Search](./../images/icons/toolbar-controls/zoom_default.svg) **Search**: Opens the search menu for the Session Manager's table. Searching within each column is also available through the menu in the column header. Action shortcut: <kbd>Ctrl</kbd> + <kbd>F</kbd>.
* ![Send message to all active users](./../images/icons/admin/admin-toolbar/send-msg-to-all-users_default.svg)&nbsp;**Send message to all active users**: Opens a dialog box where you can write a message to all active users.
* ![Enter server maintenance mode](./../images/icons/admin/admin-toolbar/icons_admin_admin-toolbar_sliced_18x18_maintenance-mode_default.svg)&nbsp;**Enter server maintenance mode**: An option to enter the server [maintenance mode](#maintenance-mode). Clicking the button opens a confirmation dialog box. You can also set a notification text to be sent to users (default is *The server is in maintenance mode*). When the server is in maintenance mode, the button will be highlighted.

These actions are also available from the context menu (opens through a right-click). In addition to the above, the context menu includes the following commands:

* ![Resolve names by IP](./../images/icons/toolbar-controls/refresh_default.svg)&nbsp;**Resolve names by IP**: When this option is enabled, the hostname is displayed for all sessions. By default, the host's IP address is displayed.
* ![Clear pool of packages](./../images/icons/toolbar-controls/clear-all_default.svg)&nbsp;**Clear package pool**: Removes all packages from the package pool.
* ![Send message to user](./../images/icons/admin/admin-toolbar/send-msg-to-user_default.svg)&nbsp;**Send message to user**: Opens a dialog box where you can write a message to a specific user. The action is unavailable if nothing is selected in the Session Manager table or if the selected row does not relate to any user session (**Shared packages**, **Package pool**, etc.).

## Maintenance mode

When the server enters maintenance mode:

* Login is prohibited for all users except administrators.
* The server processes requests from the client; active sessions continue to run to allow saving changes.
* When entering/exiting the mode, a message is sent to all users except the administrator.
* Requests from the [Integrator] are no longer processed, even if the session was opened before entering the mode.
* [Scheduler] stops running scheduled tasks. For tasks with the status **Not started**, log entries are added to the **Completed** tab in the log.
* Starting a task manually in the **Scheduler** results in an error. The attempt is not recorded in the log.
* The [Administration](https://help.megaladata.com/userguide/interface/main-menu.html#imagesiconsappsystem-toolbarcontrolsadmindefaultmgdsvgnbspadministration) button is highlighted in orange.

**Read on:** [LDAP](ldap.md)