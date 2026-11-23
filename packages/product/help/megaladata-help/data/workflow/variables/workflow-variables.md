# Workflow Variables

Workflow variable [ports](../ports/README.md) are located in the upper-left corner of the workflow area.

* ![ ](../../images/icons/app/node/ports/outputs/variable_inactive.svg)&nbsp;**Variables:** This port displays the final set of all workflow variables, considering the defined priority. These variables cannot be directly edited in this view.
* ![ ](../../images/icons/app/node/ports/outputs/variable_inactive.svg)&nbsp;**System variables:** This port shows operating system environment variables. These are read from the system settings and cannot be edited here.
* ![ ](../../images/icons/app/node/ports/outputs/variable_inactive.svg)&nbsp;**Session variables:** This port displays variables for the current user session. These variables cannot be edited here.
* ![ ](../../images/icons/app/node/ports/outputs/variable_inactive.svg)&nbsp;**Package variables:** This port shows variables for the current package. [Predefined variables](default-variables.md) cannot be edited here.
* ![ ](../../images/icons/app/node/ports/outputs/variable_inactive.svg)&nbsp;**User variables:** This port displays variables defined by the user for the current workflow.
* ![ ](../../images/icons/app/node/ports/submodel-port/submodel-port_20x20.svg)&nbsp;**Workflow variables:** This button opens an action menu to operate all variable ports. Typically used for debugging the workflow.

## Adding a package variable

To add a package variable, do the following:

- In the Megaladata main menu (on the left), select **Navigation**.
- In the tree-like scheme that opent, select **Variables**.
- On the main workspace toolbar, select **Add**.
- In the dialog that opens, set the new variable's name, caption (label), and data type. 

Setting a value is optional (you can choose **Null value** instead):

![Adding a package variable](add-var-dialog.png)

If you mark **Hidden** in the dialog, the variable won't be visible to the users with no **Workflow design** [role](../../admin/ldap.md).

If you mark **Read-only**, the users with no **Workflow design** role won't be able to set the variable's value.

Also, such users have limited configuration options:

- They cannot remove, add, or move variables.
- They cannot edit the variable's name, caption, or type.

> **Note:** You can also use workflow variables within a [supernode](../../processors/control/submodel.md). In this case, the **User variables** port within the supernode contains its own set of variables, used only inside that supernode.

## Action menu commands

The variables' action menu provides the following commands:

* ![ ](../../images/icons/toolbar-controls/launch-node_default.svg)&nbsp;**Run node:** Manually activates the ports. An activated port contains data.  
* ![ ](../../images/icons/toolbar-controls/setup_default.svg)&nbsp;**Settings:** Opens the dialog to configure user variable values.  
* ![ ](../../images/icons/toolbar-controls/configure-viewers_default.svg)&nbsp;**Configure visualizers:** Opens the dialog to configure visualizers.  
* ![ ](../../images/icons/toolbar-controls/rows_default.svg)&nbsp;**Other actions:** Opens a context menu with an extended set of commands.

## Port context menu

Right-click directly on a port to open its context menu. The context menu offers the following commands:

* ![ ](../../images/icons/toolbar-controls/show-fast-viewer_default.svg)&nbsp;**Quick view:** Opens the window to view the variables' values. This data is available after port activation.  
* ![ ](../../images/icons/toolbar-controls/setup_default.svg)&nbsp;**Configure port:** Opens the dialog to configure variable values.  
* ![ ](../../images/icons/toolbar-controls/edit_default.svg)&nbsp;**Edit port caption:** Opens the dialog to edit port captions.

## Variable priority

If a variable with the same name exists in multiple ports, the system uses the following priority to avoid conflicts (highest to lowest):

1. User variables  
2. Package variables  
3. Session variables  
4. System variables

User variables always have the highest priority.

**For example:**

If you have:

* A system variable: `USERNAME="PC-01$"`  
* A user variable: `USERNAME="Smith"`

The **Variables** port (the top port which shows the final calculated set) will display `USERNAME="Smith"`.

**Read on:** [Predefined Variables](default-variables.md)

