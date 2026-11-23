# Main Menu

The main menu is located on the left-hand side of the application window/page and contains the following commands:

* [Megaladata](#megaladata)
* [Packages](#packages)
* [Navigation](#navigation)
* [Web Services](#web-services)
* [Job Scheduler](#job-scheduler)
* [Administration](../admin/README.md)
* [Files](../location_user_files.md)
* [Processes](./processes-panel.md)
* [Expand/Collapse](#expandcollapse)

## ![ ](./../images/icons/app/system-toolbar/controls/logo_default_mgd.svg)&nbsp;Megaladata

Clicking the button with Megaladata's logo opens a menu with the following commands:

* ![ ](./../images/icons/system_object_18/homepage_default.svg)&nbsp;**Home**: Navigates to the [homepage](./home-page.md).
* ![ ](./../images/icons/main-menu/help_default.svg)&nbsp;**Help**: Opens this User Guide in your browser.
* ![ ](./../images/icons/main-menu/qa_default.svg)&nbsp;**Ask a question**: Takes you to the Megaladata Q&A Community.
* ![ ](./../images/icons/main-menu/about_default.svg)&nbsp;**About**: Opens the About page in a new tab. This is where you can check your current version or current user (in server versions), find legal information, and proceed to update.
* ![ ](./../images/icons/main-menu/lock_default.svg)&nbsp;**Lock** (<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>L</kbd>): A server-edition command to temporary lock the current user's session. The session will not end, and all its processes will keep running, but the application will display a login page. To unlock the session, the user must enter their login and password and click **Unlock**.
* ![ ](./../images/icons/main-menu/exit_default.svg)&nbsp;**Exit/Close**: **Exit** closes all packages and exits the user session in Megaladata's server versions. In desktop versions, the corresponding command **Close** prompts for saving changes, then closes all open packages and exits the application.
* ![ ](./../images/icons/main-menu/icons_common_main-menu_sliced_18x18_appearance_default.svg)&nbsp;**Appearance**: (Desktop only) Allows you to set up how the application window is displayed. Its sub-commands also have hotkeys:

    - **Full screen** (<kbd>F11</kbd>): Use this checkbox to enable/disable full-screen mode.
    - **Zoom in** (<kbd>Ctrl</kbd> + <kbd>=</kbd>)
    - **Zoom out** (<kbd>Ctrl</kbd> + <kbd>-</kbd>)
    - **Reset zoom** (<kbd>Ctrl</kbd> + <kbd>0</kbd>)

## ![ ](./../images/icons/app/system-toolbar/controls/packages-menu_default.svg)&nbsp;Packages

This command opens the Packages pane with the following menu:

* ![](./../images/icons/main-menu/new-file_default.svg)&nbsp;**New**: Creates a new package.
* ![](./../images/icons/main-menu/temporary-file_default.svg)**New Draft**: Creates a temporary package without saving it immediately.
* ![](./../images/icons/main-menu/open-file_default.svg)&nbsp;**Open**: Opens an existing package.
* ![](./../images/icons/main-menu/save-file_default.svg)&nbsp;**Save**: Saves changes to the current package.
* ![](./../images/icons/main-menu/save-as-file_default.svg)&nbsp;**Save as**: Saves the current package to a new location or with a new name.
* ![](./../images/icons/main-menu/close-file_default.svg)&nbsp;**Close**: Closes the currently open package.
* ![](./../images/icons/main-menu/save-all-files_default.svg)&nbsp;**Save all**: Saves all open packages.
* ![](./../images/icons/main-menu/close-all-file_default.svg)&nbsp;**Close all**: Closes all open packages.

> **Note:** The **Save**, **Save as**, **Save all**, **Close**, and **Close all** commands are only available when you have a package open.

## ![ ](./../images/icons/app/system-toolbar/controls/compas_default.svg)&nbsp;Navigation

This command opens a tree-like package structure, allowing for quick navigation within its objects—just click the necessary package, workflow, or other element in the tree.

![Navigation](./navigation.png)

When you right-click **Packages** or **Workflow** in the **Navigation** pane, their context menus show the following commands: 

* **Open** (<kbd>Enter</kbd>): Opens the selected navigation tab in the workspace.
* ![](./../images/icons/toolbar-controls_18x18/open-all_default.svg)&nbsp;**Expand:** Shows the file structure of the selected object.
* ![](./../images/icons/toolbar-controls_18x18/toolbar-controls_18x18_collapce-all_default.svg)&nbsp;**Collapse:** Hides the file structure of the element.
* **Expand/collapse to nodes:** Displays or hides the navigation tree structure.
* **Show all ports:** A checkbox to display or hide all available ports.
* ![](./../images/icons/toolbar-controls_18x18/toolbar-controls_18x18_find_default.svg)&nbsp;**Find node (<kbd>Ctrl</kbd> + <kbd>F</kbd>**): Opens a search window to find a specific workflow node by any of the three properties:
    - Caption
    - Name
    - GUID (a unique identifier)

![Node search box](./node-search.png)

If you right-click the name of a specific *package* in the navigation tree, you will see additional context menu commands:

* ![](./../images/icons/toolbar-controls_18x18/toolbar-controls_18x18_plus-native_default.svg)&nbsp;**Add:** Creates a new module within the package.
* ![](./../images/icons/toolbar-controls_18x18/toolbar-controls_18x18_publish-default.svg)&nbsp;**Publish:** Takes you to the add web service menu.
* **Properties:** Opens the package properties menu. 
* **Close package:** Closes the selected package or prompts for saving changes.

When right-clicking a specific *module*, the additional context menu commands are:

* ![](./../images/icons/toolbar-controls_18x18/toolbar-controls_18x18_delete_default.svg)&nbsp;**Delete node:** Opens a confirmation dialog box to delete the module.
* **Configure visibility:** Opens a [visibility](../workflow/access-modifier.md) configuration window. 
* **Properties:** Opens a window to change the module's caption.

Right-clicking a specific *node* name in the navigation tree opens the menu with these three commands added:

* ![](./../images/icons/toolbar-controls/setup_default.svg)&nbsp;**Configure node:** Takes you to the node configuration wizard.
* ![](./../images/icons/toolbar-controls/launch-node_default.svg)&nbsp;**Run/Deactivate node:** Starts or stops the node, depending on its current state.
* ![](./../images/icons/toolbar-controls/configure-viewers_default.svg)&nbsp;**Show visualizers:** Takes you to the node's visualizers.

## ![ ](./../images/icons/system_object_18/web-service.svg)&nbsp;Web services

This command only exists in Megaladata's server editions. It opens the **Web Services** page, where you can add, update, or delete a web service. 

## ![ ](./../images/icons/system_object_18/scheduler.svg)&nbsp;Job scheduler

The command takes you to the **Job Scheduler** page, where you can create, edit, or delete your custom jobs for batch workflow processing. It is present only in server editions.

## ![ ](./../images/icons/app/system-toolbar/controls/admin_default_mgd.svg)&nbsp;Administration

The command opens the **Administration** tab. In desktop editions, this is the page where you can configure logging. In server editions, this page allows you to manage users, folders, and server parameters, and is only accessible if you have an administrator's role.

## ![ ](./../images/icons/app/system-toolbar/controls/filestorage_default.svg)&nbsp;Files

This command is available only in server editions. It opens the **Files** page—the file storage explorer.

## ![ ](./../images/icons/app/system-toolbar/controls/info_default.svg)&nbsp;Processes

This command is located at the bottom left of the application window/page. It opens the **Processes** pane, which displays additional information about data processing within the workflow nodes.

## ![](../images/icons/toolbar-controls/arrow-rr_default.svg)&nbsp;Expand (![](../images/icons/toolbar-controls/arrow-ll_default.svg)&nbsp;Collapse)

An auxiliary command at the bottom left to change the main menu size.

**Read on:** [Packages](./packages.md)
