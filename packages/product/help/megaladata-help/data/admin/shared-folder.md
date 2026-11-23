# ![Shared Folders](../images/icons/admin-system-objects/sharedfolders_default.svg) Shared Folders

This administration subsection is used to control the shared folders and rights of access to them. There are four buttons in the upper part of the section:

* ![Add](../images/icons/toolbar-controls/plus_default.svg) **Add** enables to add a new folder.
* ![Edit](../images/icons/toolbar-controls/edit_default.svg) **Edit** enables to edit the selected folder.
* ![Delete](../images/icons/toolbar-controls/delete_default.svg) **Delete** enables to delete the selected folder.
* ![Update](../images/icons/toolbar-controls/refresh_default.svg) **Update** enables to update the folder list.

%spoiler%Hotkeys%spoiler%

* **Up**: go up to row.
* **Down**: go down to row.
* **Insert**: insert a new folder.
* **F2**: edit folder.
* **Delete**: delete folder.
* **Alt + F5** enables to update the list of folders and their parameters.

%/spoiler%

When pressing ![Add](../images/icons/toolbar-controls/plus_default.svg) *Add*/![Edit](../images/icons/toolbar-controls/edit_default.svg) *Edit* button, *Add shared folder*/*Configure shared folder* window appears.

Composition of *Add shared folder*/*Configure shared folder* window:

* **Name**: the name of the new shared folder is set in this field. This field is not available in the editing window.
* **Path**: it is displayed here how the path to the folder relative to the root will look like.
* **Access rights**: table with a list of users.
   * **Checkbox**: it is displayed in the field whether a user has rights to use a folder. If a checkbox is selected in the field heading, all users will be selected as the ones with folder access rights.
   * **User**: all registered users are displayed in this column. It is also possible to include the filter for search for a particular user into this field.
   * **Full name**: the full user name is displayed in this column if it is set in [*Users*](./users.md) section. It is also possible to search by the filter field as in the *User* field.

> **Note:** If it is required to rename a folder, the new folder is created where the contents of the old one is copied. Then the old folder is deleted.