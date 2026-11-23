# ![ ](..\images\icons\system_object_18\package_default.svg)&nbsp;Packages

This page describes the main operations for working with [packages](../quick-start/package.md). You can access it in two ways:

* Clicking ![ ](..\images\icons\system_object_18\package_default.svg)&nbsp;**Packages** in the [address bar](.\addres-bar.md).
* Selecting ![ ](..\images\icons\system_object_18\package_default.svg)&nbsp;**Packages** in the [Navigation](./main-menu.md#navigation) menu.

## User interface

After you have opened the page, you will see all open packages listed in a table with the following columns:

- **Name**: The package's name, typically matching the filename (without extension).
- **Path**: The file path to the open package. In server editions, this path is relative to the root directory. (See [File Storage](../location_user_files.md) for details.) In desktop editions, an absolute path will be displayed.
- **Version**: The package's version number (set in the package's properties).
- **Published**: Indicates if the package is published (i.e., shared for common access). A published package is marked with ● .
- **Locale**: The package's locale (set in its properties).

You can sort the table by clicking the column headers. Clicking a header typically toggles between ![ ](../images/icons/toolbar-controls/low-to-hight_default.svg)&nbsp;ascending and ![ ](../images/icons/toolbar-controls/hight-to-low_default.svg)&nbsp;descending order, or discards sorting.

Within the **Packages** page, the following commands are available on the toolbar (where clicking the drop-down icon (![ ](..\images\icons\toolbar-controls\down_default.svg)) provides additional options) and in context menus:

* ![ ](..\images\icons\toolbar-controls\new_default.svg)&nbsp;**New:** Opens a window where you can specify the path and name for a new *Package*. After saving, the new empty *Package* is opened.
   * ![ ](..\images\icons\toolbar-controls\temporary_default.svg)&nbsp;**Draft:** Available in the drop-down menu. This command creates a temporary package (draft) without saving it immediately.
* ![ ](..\images\icons\toolbar-controls\open_default.svg)&nbsp;**Open:** Opens a window to select and open an existing package.
* ![ ](..\images\icons\toolbar-controls\save_default.svg)&nbsp;**Save:** Saves the currently active package.
   * ![ ](..\images\icons\toolbar-controls\save-as_default.svg)&nbsp;**Save as:** Available in drop-down. Saves the currently active package with a new name or to a different location.
* ![ ](..\images\icons\toolbar-controls\save-all_default.svg)&nbsp;**Save all:** Saves all currently open packages.
* ![ ](..\images\icons\toolbar-controls_18x18/toolbar-controls_18x18_auto-save_default.svg)&nbsp;**Autosave:** Opens settings to configure automatic saving. When enabled, packages are saved periodically (at a user-defined interval) to separate `.autosave` files alongside the original `.mgp` package files. The original package files remain unchanged by the autosave process.
* ![ ](..\images\icons\toolbar-controls\publish_default.svg)&nbsp;**Publish:** Available only in editions that support publishing [web services](../integration/web-services/publishing-web-service.md). This command opens the publication window for the package.
* ![ ](..\images\icons\toolbar-controls\edit_default.svg)&nbsp;**Properties:** Opens the [Properties](#package-properties) window for the selected package.
* ![ ](..\images\icons\toolbar-controls\close_default.svg)&nbsp;**Close:** Closes the selected package. Prompts to save if needed.
* ![ ](..\images\icons\toolbar-controls\close-all_default.svg)&nbsp;**Close all:** Closes all opened packages.

## Closing unsaved packages

If you try to close a package with unsaved changes, you will be prompted with the following options:

* **Yes:** Saves the changes and closes the *Package*.
* **No:** Discards the changes and closes the *Package*.
* **Cancel:** Cancels the close operation for the package (packages). The current package (or the packages that haven't been closed yet) remains open.

## Context menus

When right-clicking on one of the listed packages, the context menu offers the following commands:

* ![ ](..\images\icons\toolbar-controls\save_default.svg)&nbsp;**Save package:** Saves the selected package
* ![ ](..\images\icons\toolbar-controls\save-as_default.svg)&nbsp;**Save package as:** Saves the selected package with a new name or location.
* ![ ](..\images\icons\toolbar-controls\edit_default.svg)&nbsp;**Edit properties:** Opens the **Properties** window for the selected package.
* ![ ](..\images\icons\blank.svg)&nbsp;**Show in folder:** Opens the folder containing the selected package file in your system's file explorer and highlights the file. 
* ![ ](..\images\icons\toolbar-controls\close_default.svg)&nbsp;**Close package:** Closes the selected package (prompts to save if needed).
* ![ ](..\images\icons\blank.svg)&nbsp;**Close other packages:** Closes all packages except the selected one (prompts to save if needed).
* ![ ](..\images\icons\toolbar-controls\refresh_default.svg)&nbsp;**Refresh:** Refreshes the list of open packages displayed in the table.

Right-clicking on the empty area within the  **Packages** page opens the following context menu:

* ![ ](..\images\icons\toolbar-controls\new_default.svg)&nbsp;**New package:** Creates a new package (same as the toolbar command).
* ![ ](..\images\icons\toolbar-controls\temporary_default.svg)&nbsp;**New draft:** Creates a new draft package (same as the toolbar command).
* ![ ](..\images\icons\toolbar-controls\open_default.svg)&nbsp;**Open package:** Opens a window to select and open an existing package.
* ![ ](..\images\icons\toolbar-controls\save-all_default.svg)&nbsp;**Save all packages:** Saves all open packages (same as the toolbar command).
* ![ ](..\images\icons\toolbar-controls\close-all_default.svg)&nbsp;**Close all packages:** Closes all open packages (same as the toolbar command).
* ![ ](..\images\icons\toolbar-controls\refresh_default.svg)&nbsp;**Refresh:** Refreshes the list of open packages displayed in the table.

## Hotkeys

The following keyboard shortcuts (hotkeys) are available for operations with packages:

* Edit properties: <kbd>F2</kbd>
* Open a package: <kbd>Ctrl</kbd> + <kbd>O</kbd>
* Save a package: <kbd>Ctrl</kbd> + <kbd>S</kbd>
* Save all packages: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>
* Publish a package: <kbd>Alt</kbd> + <kbd>P</kbd>

## Package properties

A package's **Properties** window allows you to configure the following:

* **Name:** Displays the package's name. This field is typically read-only unless the package is a draft. When a draft is saved, the name is automatically set based on the filename.
* **Version:** Allows you to specify the version number for the package (e.g.,`1.2.2`). The default for any new package is `1.0.0`.
* **Locale:** Here you can set the locale for the package* (e.g., language, regional formats). This can influence localization aspects, sorting behavior, and number/date formatting within the package.
* **Binary comparison of unique string values:** (Default: disabled.) Enable this option to use binary comparison (based on character codes) instead of locale-specific rules when determining string uniqueness. This might affect performance or behavior in certain data handling scenarios.
* **Use relative paths of base package:** (Default: enabled.) This setting influences how file paths referenced within the package are resolved. Keep this setting enabled if the package uses relative paths, especially if it acts as a base component for other packages or relies on files located relative to its own position.

> **Note**: Changing a locale may alter the behavior of some nodes, e.g., [Sort](../processors/transformation/sorting.md), [Text File](../integration/export/txt-csv.md) export node, etc.

## Autosaving packages

Enabling autosave allows you to automatically save your packages at the specified time interval. The package will be saved as a file with `.mgp.autosave` extension to the same location as the original `.mgp` file. The original package file will remain unchanged.

Autosave is not available for drafts and read-only packages.

For configuration, click ![ ](..\images\icons\toolbar-controls_18x18/toolbar-controls_18x18_auto-save_default.svg)&nbsp;**Autosave** and set up the following parameters:

- **Enable autosave**: Mark the checkbox to enable or disable the option.

- **Save every (minutes)**: If you enabled the previous checkbox, you can set up the interval for autosaving packages here. By default, it is set as 5 minutes.

The configuration will be applied after you click **Apply**.

When autosave is enabled, the ![]()&nbsp;**Autosave** button on the toolbar is highlighted. When working in Megaladata's server editions, the autosave configuration is saved to your local browser storage and is not reset when closing the user session.

**Read on:** [Address Bar](addres-bar.md)