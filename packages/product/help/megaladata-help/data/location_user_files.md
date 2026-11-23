---
description: Overview of File Storage in Megaladata. Ways to work with storage and available commands. Uploading files. Basic operations for working with storage contents.
---
# ![](./images/icons/system_object_18/filestorage_default.svg)&nbsp;File Storage

Megaladata's Enterprise, Standard, and Team editions (which include the Megaladata Server in the bundle) store all user files on Megaladata Server. This means, before using any file in your workflows you must upload it to the server file storage. To work with **File Storage**, use the file manager included in these editions.

> **Note:** Personal and Community editions do not include the file manager because they only support data processing on a personal machine, where the user has access to the entire file space.

On Megaladata Server, each user has a separate folder in the File Storage.

Open the file manager with the ![](./images/icons/app/system-toolbar/controls/filestorage_default.svg)&nbsp;**Files** button in the **Main Menu**. It provides the tools you need to work with File Storage.

The file manager displays the hierarchical structure of folders and files available to the user as a table with these fields:
- **Name**
- **Type**
- **Size**
- **Change date**
- **Read-only**
- **Path**

Double-click a folder to open it. To move one level up, double-click the ![](./images/icons/main-menu/open-folder_default.svg)&nbsp;**Up** button. You can also use the **Navigation** pane to move between folders. This pane displays the user folder hierarchy as a tree.

## Toolbar

The file manager toolbar contains the following commands:
- ![](./images/icons/toolbar-controls/upload_default.svg)&nbsp;**Upload** (<kbd>Insert</kbd>): Upload a file to the currently open directory. Select the file to upload in the OS file explorer window that opens.
- ![](./images/icons/toolbar-controls/add-folder_default.svg)&nbsp;**New Folder**: Create a folder in the current directory.
- ![](./images/icons/toolbar-controls/download_default.svg)&nbsp;**Download**: Download the selected item from File Storage to the user's system downloads folder. You can also double-click the left mouse button to perform the same action.
- ![](.\images\icons\toolbar-controls\download-zip_default.svg)&nbsp;**Download ZIP**: Download the selected item from File Storage to the user's system downloads folder as a ZIP archive.
- ![](./images/icons/toolbar-controls/rename_default.svg)&nbsp;**Rename** (<kbd>F2</kbd>): Change the name of the selected item.
- ![](./images/icons/toolbar-controls/copy_default.svg)&nbsp;**Copy** (<kbd>Ctrl</kbd> + <kbd>C</kbd>): Mark the selected item for copying.
- ![](./images/icons/toolbar-controls/paste_default.svg)&nbsp;**Paste** (<kbd>Ctrl</kbd> + <kbd>V</kbd>): Paste the cut or copied item into the current directory. If you paste a file into the same directory from which you copied it, the system appends the word "copy" and an index to the file name after a dash, for example:
    - `File — copy.txt`
    - `File — copy (2).txt`, etc.

> **Note:** After copying a file, you can paste it several times in a row. The system highlights all pasted files for your convenience. (After a repeated paste operation, the last pasted files will be highlighted.)

- ![](./images/icons/toolbar-controls/cut_default.svg)&nbsp;**Cut** (<kbd>Ctrl</kbd> + <kbd>X</kbd>): "Cut" the selected item for transferring it to a different location.

> **Note:** You cannot paste a file repeatedly, or paste it into its original folder, after using **Cut**. 

- ![](./images/icons/toolbar-controls/delete_default.svg)&nbsp;**Delete** (<kbd>Delete</kbd>): Delete the selected item.
- ![](./images/icons/toolbar-controls/refresh_default.svg)&nbsp;**Refresh list** (<kbd>Alt</kbd> + <kbd>F5</kbd>): Display the current directory contents.

> **Note:** **Copy**, **Cut**, and **Paste** on the **toolbar** and in the **context menu** function only inside the file manager. They are not connected to the OS clipboard.

## Context menu

### File context menu

Right-click an item in the file manager to open the context menu, which contains the following commands:
- ![](./images/icons/toolbar-controls/extract_default.svg)&nbsp;**Extract**: Extract a `.zip` archive. This command is available only when you have selected a `.zip` file. Select **Extract here** to extract the archive contents to the current folder. Select **Extract in folder** to extract the contents to a folder with the same name as the archive.
- ![](./images/icons/toolbar-controls/download_default.svg)&nbsp;**Download**: Download the selected item from File Storage to the user's system downloads folder. You can also double-click the left mouse button to perform the same action.
- ![](.\images\icons\toolbar-controls\download-zip_default.svg)&nbsp;**Download ZIP**: Download the selected item from File Storage to the user's system downloads folder as a ZIP archive.
- ![](./images/icons/toolbar-controls/rename_default.svg)&nbsp;**Rename** (<kbd>F2</kbd>): Change the name of the selected item.
- **Open**: Open the selected folder or package.
- **Go** (<kbd>Enter</kbd>): Go to a folder. The command applies to items in the **Favorites** folder.
- **Open package** (<kbd>Enter</kbd>): Open the selected package. The command applies to packages in the **Favorites** folder.
- ![](./images/icons/toolbar-controls/add-favorite-vendor.svg)&nbsp;**Add to favorite**: Add a folder/file to the **Favorites** folder. You can add up to 20 items.
- **Remove from favorite** (<kbd>Delete</kbd>): Remove a folder/file from the **Favorites** folder. The command applies to items that are already in favorites.
- **Clear favorites**: Remove all items from the **Favorites** folder.
- ![](./images/icons/toolbar-controls/add-folder_default.svg)&nbsp;**New folder**: Create a folder in the current directory.
- ![](./images/icons/toolbar-controls/new_default.svg)&nbsp;**New package**: Create a new package in the current directory.
- **Copy full path**: Copy the full name of the selected item to the clipboard. If you select several items, the system copies the full names of all items separated by a line break.
- ![](./images/icons/toolbar-controls/copy_default.svg)&nbsp;**Copy** (<kbd>Ctrl</kbd> + <kbd>C</kbd>): Mark the selected item for copying.
- ![](./images/icons/toolbar-controls/paste_default.svg)&nbsp;**Paste** (<kbd>Ctrl</kbd> + <kbd>V</kbd>): Paste the item marked for copying or cutting into the current directory.
- ![](./images/icons/toolbar-controls/cut_default.svg)&nbsp;**Cut** (<kbd>Ctrl</kbd> + <kbd>X</kbd>): Mark the selected item for cutting.
- ![](./images/icons/toolbar-controls/delete_default.svg)&nbsp;**Delete** (<kbd>Delete</kbd>): Delete the selected item.
- ![](./images/icons/toolbar-controls/refresh_default.svg)&nbsp;**Refresh list** (<kbd>Alt</kbd> + <kbd>F5</kbd>): Display the current contents of the current directory.

> **Note:** You can copy the full file path only when you connect over HTTPS. If you connect over HTTP, Megaladata displays the following warning: "Connection via HTTPS protocol is required for this operation."

### Page context menu

Right-click an empty area in the file manager to open the context menu with the following commands:
- ![](./images/icons/toolbar-controls/download_default.svg)&nbsp;**Upload** (<kbd>Insert</kbd>): Upload a file to the currently open directory. Select the file to upload from the OS file explorer window that opens.
- ![](./images/icons/toolbar-controls/add-folder_default.svg)&nbsp;**New Folder**: Create a folder in the current directory.
- ![](./images/icons/toolbar-controls/new_default.svg)&nbsp;**New Package**: Create a new package in the current directory.
- ![](./images/icons/toolbar-controls/paste_default.svg)&nbsp;**Paste** (<kbd>Ctrl</kbd> + <kbd>V</kbd>): Paste a copied or cut item into the current directory.
- ![](./images/icons/toolbar-controls/refresh_default.svg)&nbsp;**Refresh list** (<kbd>Alt</kbd> + <kbd>F5</kbd>): Display the current directory contents.

## Other actions

The file manager supports uploading files by drag and drop: Drag files to the file manager window to copy and paste them.

To select several items, you can:
- Select the checkbox for each item.
- Select items one by one while holding <kbd>Ctrl</kbd>.
- Select the first item, and then select the last item in the file sequence while holding <kbd>Shift</kbd>.

> **Note:** The system clears the file/folder selection if you click one of the selected items or anywhere on the screen after selecting several items.

To move between the first and last object, use <kbd>Home</kbd> (start of list) and <kbd>End</kbd> (end of list).

To sort the items in the current directory by a specific parameter, click one of the file manager table column headers: **Name**, **Type**, **Size**, **Change date**, **Read-only**, or **Path**:
- The *first* click on a column header sorts items in ![](./images/icons/toolbar-controls/low-to-hight_default.svg)&nbsp;**ascending** order.
- The *second* click sorts them in ![](./images/icons/toolbar-controls/hight-to-low_default.svg)&nbsp;**descending** order.

The file manager table header provides commands for selecting/deleting all table items in one click:
- Use the checkbox to the left of the **Name** field to select all items in the current directory.
- Use the ![](./images/icons/toolbar-controls/delete-all_default.svg)&nbsp;**Delete all** button to the right of the **Path** field to delete all items in the current directory.

To show or hide a column in the file manager table, hover over the column header, and click the ![](./images/icons/toolbar-controls/down_default.svg)&nbsp;**List** button that appears. Then move the pointer to the ![](./images/icons/grid/columns.svg)&nbsp;**Columns** row and, in the list that appears, select the checkboxes for the columns you want to show, or clear the checkboxes for the columns you want to hide.

**Read on:** [Administration](./admin/README.md)