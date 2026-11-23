# Visibility Configuration

This configuration controls the visibility of an object, such as a connection or node, within and between packages.

## Setting visibilty

To set the visibility of an object:

1. Right-click the object.  
2. From the context menu, select ![](../images/icons/toolbar-controls/access-rights_default.svg)&nbsp;**Configure visibility**. The settings window opens.  
3. Choose one of the following visibility levels:

| Name | Icon | Visibility area |
|:----|:----:|:----|
| Private | |Available only in the current module |
| Protected | ![](../images/icons/controls/visibility_private_ex.svg) | Available only in the current module and its [supernodes](../processors/control/submodel.md) |
| Internal | ![](../images/icons/controls/visibility_internal.svg) | Available only in the current package |
| Public | ![](../images/icons/controls/visibility_public.svg) | Available in all packages. To use the object in another package, you must reference the object's package.|
| Published | ![](../images/icons/controls/visibility_published.svg) | Available in all packages and as a web service. Choose it when you publish the node as a web service. |

## Specifics

When you publish a node, the name you set for it becomes the web service method's endpoint. This name can also be used as the **/Node** parameter in [batch processing](./batchlauncher.md).

If a node is inside a supernode hierarchy, all parent supernodes must also be visible to make the node available according to its visibility configuration.

By default, all modules of a package have "public" visibility (i.e., are available in all packages).

## **Using objects from other packages**

To use objects from other packages, such as workflow nodes, connections, or [derived components](./derived-component.md), you must set their visibility to **Public** and create a reference to the package they are in.

The process of creating a package reference is described in [Referencing Packages](./link-to-packet.md).

Briefly:

1. In the **Navigation** pane, right-click ![](../images/icons/system_object_18/link_default.svg)&nbsp;**References**.  
2. Select ![](../images/icons/app/node/ports/add/add_inactive_default.svg)&nbsp;**Add**. The **Add reference to package** window opens.  
3. In the **Package file path** field, enter the file path for the package you want to access.  
4. Click **Add**.

After you create the reference, you can access the objects from the external package through  [Reference node](../processors/control/unit-link.md) or [Node execution](../processors/control/execute-node.md) nodes. This also allows you to use the package's [derived components](derived-component.md).

**Read on:** [Workflow Progress Control](run-order.md)



