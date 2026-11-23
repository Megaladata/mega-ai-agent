# Web Services Page

For adding, editing, or deleting web services, go to the **Web Services** page. You can find it in the [Navigation](https://help.megaladata.com/userguide/interface/main-menu.html#navigation) section in the main menu.

This page features the following commands (buttons):
* ![](./../../images/icons/toolbar-controls_18x18\toolbar-controls_18x18_publish-default.svg)&nbsp;**Add**: Opens the [Add web service](./edit-web-services.md) window to configure and publish a new web service.
* ![](./../../images/icons/toolbar-controls_18x18\update-web-service_default.svg)&nbsp;**Update publication**: Re-publishes an already published web service.
* ![](./../../images/icons/toolbar-controls_18x18\toolbar-controls_18x18_edit_default.svg)&nbsp;**Edit**: Opens the [Edit web service](./edit-web-services.md) window, where you can make changes to an existing service.
* ![](./../../images/icons/toolbar-controls_18x18\close-web-service_default.svg)&nbsp;**Unpublish**: Removes a web service from published.
* ![](./../../images/icons/toolbar-controls_18x18/toolbar-controls_18x18_refresh_default.svg)&nbsp;**Refresh list**: Updates the display to show newly published services and remove those no longer available. This ensures the list accurately reflects current publication settings.

The main area of the **Web Services** page displays the following details for each published service (package):
- Name
- Path/caption
- Last change date
- Version
- Comment

The status of each published package is shown by a color-coded indicator next to its name:
* ![](./../../images/icons/controls/correspondence_default.svg)&nbsp;**Green**: The web service matches the saved package.
* ![](./../../images/icons/controls/inconsistency_default.svg)&nbsp;**Orange**: The web service doesn't match the current state of the saved package.
* ![](./../../images/icons/controls/no-access_default.svg)&nbsp;**Gray**: No access to package.

Clicking on the ![](./../../images/extjs-theme/tools/tool-sprites_18x18/arrow-right_default.svg)&nbsp;**Expand** button to the left of a published web service's name will open the list of published nodes from the corresponding workflow. Right click on the web service opens a context menu with additional commands:
- **Open package**: opens the selected package.
- **Show package in folder**: Opens the package's location, with the package highlighted.

You can view any node within its package by right-clicking it and selecting **Open node in package**. This will open the package in a new Megaladata tab and highlight the node.

**Read on:** [Processing](../../processors/README.md)