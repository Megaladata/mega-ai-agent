# Address Bar

The address bar displays a breadcrumb trail showing the location (or hierarchy) of the currently open object:

![Address bar](address-bar-1.png)

To navigate to an object higher in the hierarchy, click its name in the breadcrumb trail.

## Navigation elements

Buttons to the left of the address bar allow for navigation:

* ![Go up](../images/icons/toolbar-controls/up_default.svg)&nbsp;**Go up:** Moves to the parent object (one level up in the hierarchy).
* ![Go back](../images/icons/toolbar-controls/arrow-l_default.svg)&nbsp;**Go back:** Navigates to the previously viewed object. 
* ![Go forward](../images/icons/toolbar-controls/arrow-r_default.svg)&nbsp;**Go forward:**  Reverses the last **Go back** action, if you haven't performed other navigation actions since going back.
* ![Save package](../images/icons/toolbar-controls/save_default.svg)&nbsp;**Save package (<kbd>Ctrl</kbd> + <kbd>S</kbd>):** Saves the package's configuration as it is at the moment of clicking.

## Navigating to subobjects

Clicking the dropdown arrow (![List of subobjects](../images/icons/toolbar-controls/down_default.svg)) next to an object's name in the breadcrumb trail allows you to navigate directly to its subobjects:

![Selecting a subobject](address-bar-2.png)

## Manual path entry

You can also enter a path manually. To do this, click within the address bar's text area and type or paste the desired path. For example:

```text
\Packages\Scoring\Score calculation\Workflow
```

## Reference to object (Hyperlinks)

In the multi-user editions, you can get a direct hyperlink to the currently open object. The ![Share](../images/icons/toolbar-controls/share_default.svg)&nbsp;**Share** command to the right of the address bar opens a window providing the following types of links: 

* **Absolute**: A full path suitable for sharing with other users in the same environment. It typically includes shared folder names or references. Absolute paths are available for all packages shared by different users.
* **Relative**: A path relative to your user-specific context (e.g., your personal package root). It typically includes a period in place of the root folder name. Best suited for personal use or within specific package structures.

Click ![Copy](../images/icons/toolbar-controls/copy_default.svg)&nbsp;**Copy** next to the desired link to copy it to your clipboard. Paste this link into your browser's address bar to navigate directly to the object within the application.  

> **Note:** Accessing the application via a shared link may require you to log in with a matching username and password.

**Read on:** [Workspace](./workspace.md)