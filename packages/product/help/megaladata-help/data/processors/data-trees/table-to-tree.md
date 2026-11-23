# ![ ](../../images/icons/components/data-to-tree_default.svg) Table to Tree

The **Table to Tree** node enables to transform the source data represented in the form of the flat (two-dimensional) table to the hierarchic (tree-like) form. In this case, the number of the nesting levels is not limited.

## Ports

### Input

* ![Input data source](../../images/icons/app/node/ports/inputs/table_inactive.svg) **Input data source**: the port for connection of the input data set in the form of a table.

### Output

* ![Output data set](../../images/icons/app/node/ports/outputs/tree_inactive.svg) **Output data set**: the port providing data after their transformation to the tree-like form.

## Wizard

It is required to configure mapping of the input data that are located to the left in the **Source data set columns** field, and created data tree that is located to the right in the **Tree node** and **Related fields** fields.

Primarily, only one root directory is available in the right field - **Root**.

To create the hierarchic structure, it is required to add at least one child node in the root folder. It can be done in two ways:

1. Select the root node and add the child node using the following button: ![Add child node](../../images/icons/wizards/datatree/add-child_default.svg).
2. Use the context menu command: ![Add child node](../../images/icons/wizards/datatree/add-child_default.svg) **Add child node**.

Afterwards the child node will be created. It is possible to define value of the following fields for this node:

* **Name**: the unique column name for one data set. It can consist of the following characters:
   * Capital or low case Latin characters.
   * Underscore characters.
   * Digits (it cannot be the first character).
* **Caption**: random field description.
* **Data type**: one of the possible [data types](./../../data/datatype.md).
* **Data kind**: one of the possible [data kinds](./../../data/datakind.md).
* **Array**: when selecting this checkbox, the selected child node will be defined as ordered set (array) of one data type.
* **Container**: when selecting this checkbox, the selected child node will be a root node for other created child nodes of different types.

It is possible to create nodes of the same hierarchic level for child nodes. It can be done using the contex menu of the child node. Select ![Add neighboring node](../../images/icons/wizards/datatree/add-neighbor_default.svg) **Add neighboring node**, or the required node, and press ![Add neighboring node](../../images/icons/wizards/datatree/add-neighbor_default.svg) button to create the neighboring node.

Upon creation, it is possible to change the set values of fields for the child node. For this purpose, it is possible to use *F2* hotkey. First, you are to select the required node. It also can be done using the following contex menu command: ![Edit...](../../images/icons/toolbar-controls/edit_default.svg) **Edit...**, or you can select the required node and press ![Edit...](../../images/icons/toolbar-controls/edit_default.svg) button.

![Load from XSD...](../../images/icons/toolbar-controls/import-from-xsd_default.svg) **Load from XSD...** button enables to select *.xsd file from which the output node structure will be loaded (the button is also duplicated by the context menu command). The following fields will be available in the appeared dialog window:

* **XSD file**: the field for selection of the *.xsd file (not edited).
* **Namespace** enables to select a namespace from a list of all namespaces described in the *.xsd file. It limits selection of the root element only by the specified space. The value of **All namespaces** is set by default.
* **Root element** enables selection of the root node from the list in the loaded xsd file*. The value of the first root node of the selected file is set by default.
* **Recursive depth** provides the maximum number of recursions when opening recursive nodes. It is selected in the range from 0 to 3. By default, it is equal to 1. It means that every recursive node will be automatically opened but recursive nodes inside these nodes will be left unopened. Additional opening of recursive nodes is possible in the manual mode upon tree building. In the case of 0 value, recursive nodes won't be automatically opened.

After filling in all the fields, it is required to press **Load** button, and the XSD schema will be loaded for further work.

![Generate child elements](../../images/icons/toolbar-controls/open-all_default.svg) **Generate child elements** button opens the recursive node (it adds all subnodes of the recursive node to the data tree). It is not possible to open already opened recursive node repeatedly. If the XSD schema has not been loaded ("Load from XSD..." operation has not been performed), or the loaded tree does not include recursive nodes, the button is concealed/inactive.

![Next recursive unopened node](../../images/icons/toolbar-controls/find-next_default.svg) **Next recursive unopened node** button enables to select the next recursive unopened node as the current node after the current selected node. To select the first recursive node, it is required to select the root node and move to the next recursive unopened node. If the XSD schema has not been loaded ("Load from XSD..." operation has not been performed), or the loaded tree does not include recursive nodes, the button is concealed/inactive.

When all required hierarchy is created, it will be possible to use ![Auto link all](../../images/icons/toolbar-controls/auto-connect_default.svg)**Auto link all** button that will automatically link input and output fields if their names and data type coincide. Each child node can be also linked to the data source using the following context menu command: ![Auto link](../../images/icons/toolbar-controls/auto-connect_default.svg)**Auto link**. In this case, the node will be linked to one of their input nodes with the same name and data type.

Apart from the auto link, it is possible to link input and output nodes using the *Drag-and-drop* method by dragging the field caption from the left list of fields to the item from the right list of fields. In this case, values of the fields names are not important. However, data types must still coincide.

It is possible to delete the created links between nodes. All links can be deleted at once using ![Delete all links](../../images/icons/toolbar-controls/remove-all-links_default.svg)**Delete all links** button, or using the context menu command - ![Delete all links](../../images/icons/toolbar-controls/remove-all-links_default.svg)**Delete all links** called in any of the list items. To delete any particular link, it is possible to use the context menu command - ![Delete link](../../images/icons/toolbar-controls/delete_default.svg)**Delete link** called in one of the linked items. The second option is to left-click on the link to be deleted, and to press ![Delete link](../../images/icons/link-grid/remove-link_selected.svg) button to delete the link (when cursor hovering over ![Delete link](../../images/icons/link-grid/remove-link_hover.svg)).

The created child nodes can be located in any convenient order. For this purpose, it is required to select the node to be moved and press ![Move up](../../images/icons/toolbar-controls/moveup_default.svg)**Move up** button (hotkeys combination - *Ctrl+Up*) or ![Move down](../../images/icons/toolbar-controls/movedown_default.svg)**Move down** (hotkeys combination - *Ctrl+Down*). There are similar commands in the context menu of each node in the right window (it is not possible to move **Root** root node).

* ![Filter](../../images/icons/toolbar-controls/filter_default.svg)**Filter** enables to select fields by name or its part.
* ![Search](../../images/icons/toolbar-controls/zoom_default.svg) **Search** enables to mark fields by name of its part.

To reset the filter or search settings, it is required to use ![Clean](../../images/icons/filterdata/filterdata-delete_hover_10x10.svg) button.

To delete a child node, it is required to press ![Delete](../../images/icons/toolbar-controls/delete_default.svg)**Delete** (*Delete* hotkey) that is located in the right part of the child node string, and it is visible only when cursor hovering over the string. It is possible to delete all created child nodes by pressing ![Delete all...](../../images/icons/toolbar-controls/delete-all_default.svg)**Delete all...** button (hotkeys combination - *Shift+Delete*).
