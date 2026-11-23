---
description: Explore the Calculator (Tree) component in Megaladata. Use JavaScript code along with standard calculator functions to create new fields in a data tree. The resulting tree combines the input tree with new tree nodes generated through calculator expressions.
---
# ![ ](./../../../images/icons/vendors/calctree.svg)&nbsp;Calculator (Tree)

The **Calculator (Tree)** node transforms data represented as a data tree. Use JavaScript expressions to create new tree nodes or modify existing ones.

## Ports

### Input

* ![Input data source](./../../../images/icons/app/node/ports/inputs/tree_inactive.svg)&nbsp;**Input data tree**: Provide an input data tree. Required.
* ![Input variables](./../../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg)&nbsp;**Input variables**: Optionally provide input variables. 

### Output

* ![Output data source](./../../../images/icons/app/node/ports/outputs/tree_inactive.svg)&nbsp;**Output data tree**: This port outputs the transformed data.

## Configuration wizard

The configuration window contains the following panes:

 1. [Expression list](#expression-list)
 2. [Expression code pane](#expression-code-pane)
 3. [Nodes/variables pane](#nodesvariables)
 4. [Function list with descriptions](#function-list)

### Expression list

Use this pane to enter expressions. The component calculates new tree nodes using these expressions, adding them to the input tree or modifying its original nodes. The system evaluates expression values using JavaScript code, which supports standard **Calculator** functions and specific functions for hierarchical data structures.

Create a new expression using the toolbar or the context menu. Toolbar operations:
* ![ ](./../../../images/icons/toolbar-controls/plus_default.svg)&nbsp;**Add expression**: Add a new expression with default parameters.
* ![ ](./../../../images/icons/toolbar-controls/clone_default.svg)&nbsp;**Clone expression**: Clone the selected expression.
* ![ ](./../../../images/icons/toolbar-controls/edit_default.svg)&nbsp;**Edit expression parameters (<kbd>F2</kbd>)**: Open the modal window for editing expression parameters.
* ![ ](./../../../images/icons/toolbar-controls/item-replace_default.svg)&nbsp;**Replace node**: Enable automatic replace of the original tree node value with the value calculated in the expression.
* ![ ](./../../../images/icons/toolbar-controls/moveup_default.svg)&nbsp;**Move up (<kbd>Ctrl</kbd> + <kbd>Up</kbd>)**: Move the selected expression up.
* ![ ](./../../../images/icons/toolbar-controls/movedown_default.svg)&nbsp;**Move down (<kbd>Ctrl</kbd> + <kbd>Down</kbd>)**: Move the selected expression down.
* ![ ](./../../../images/icons/toolbar-controls/delete_default.svg)&nbsp;**Delete expression (<kbd>Delete</kbd>)**: Delete the current expression.
* ![ ](./../../../images/icons/toolbar-controls/delete-all_default.svg)&nbsp;**Delete all expressions (<kbd>Shift</kbd> + <kbd>Delete</kbd>)**: Delete all existing expressions.

In addition to the operations listed above, the context menu in the expression list provides the following operations:
* **Move to expression (<kbd>Enter</kbd>)**: Select an expression and display its code. The code pane becomes active.
* **Go to node**: Select and highlight the node that corresponds to the expression.
* ![ ](./../../../images/icons/toolbar-controls/editor-insert_default.svg)&nbsp;**Insert relative name into expression**: Insert a reference to the node of the selected expression into the code pane, relative to the expression you edit.
* **Insert full name into expression**: Insert an absolute reference to the node of the selected expression into the code pane.

When you add or edit an expression, the parameter editing dialog appears. You can edit the following expression parameters:
* **Path**: Select the absolute path to the expression node from the drop-down list. The path contains the list of parents starting from the root node of the tree.
* **Name**: Enter the [name](./../../../data/datasetfieldoptions.md) of the node in the output data tree.
* **Caption**: Enter the [caption](./../../../data/datasetfieldoptions.md) of the node in the output data tree.
* **Data type**: Select the [data type](./../../../data/datatype.md) of the node in the output data tree.
* **Intermediate**: Select this option to use the expression in calculations only, excluding it from the output data tree nodes.
* **Cache**: Save the expression value after the system calculates it. Use this option when subsequent nodes and visualizers use the expression value multiple times to avoid repeated calculations.
* **Description**: Enter any supplementary information.

> **Important:** The name must be unique within the direct parent of the node and must start with an uppercase or lowercase Latin letter or an underscore. Subsequent name characters may also include digits.

When you open the configuration wizard for the first time, the expressions list contains one item named `Expr1` of the `Real` type. By default, the system assigns the caption `ExpressionN` and the name `ExprN` to a new expression, where `N` is a number that ensures uniqueness.

### Expression code pane

Enter JavaScript code in the code pane. Insert references to nodes/variables and function syntax constructs into the expression code by typing them manually, double-clicking them in the corresponding panes, or dragging them. Insert references to created expressions into the code pane by typing them manually or dragging them. You can also add references to expressions or nodes/variables to the code pane via the context menu.

> **Note:** Press <kbd>Esc</kbd> to exit the code pane and return to the previously active pane.

### Nodes/variables

This pane contains a tree of source nodes and nodes that expressions create, and a list of variables that the node receives through its input. By default, the pane displays the node tree. Use the **Nodes** and **Variables** buttons to switch between displaying nodes and variables. The set and parameters of source nodes/variables depend on how you configure the node input ports.

The **Nodes** pane context menu provides the following operations:
* ![ ](./../../../images/icons/wizards/datatree/add-child_default.svg)&nbsp;**Add child node**: Click this to open the modal window for adding an expression that is a child of the selected node. Use this operation for [container nodes](./../README.md).
* ![ ](./../../../images/icons/wizards/datatree/add-neighbor_default.svg)&nbsp;**Add sibling node**: Open the modal window for adding an expression that is a sibling of the selected node.
* **Add container**: Add a node that can have child nodes to the tree.
* ![ ](./../../../images/icons/toolbar-controls/item-replace_default.svg)&nbsp;**Replace with calculated expression**: Add a new expression for the selected node, enabling the mode that replaces the original node value with the value calculated in the expression.
* ![ ](./../../../images/icons/toolbar-controls/editor-insert_default.svg)&nbsp;**Insert relative name into expression**: Insert a reference to the selected node into the code pane, relative to the expression you edit.
* **Insert full name into expression**: Insert an absolute reference to the selected node into the code pane.
* **Move to expression**: Select the expression that created the selected node and activates the code pane. Use this operation for nodes that an expression calculates.
* ![ ](./../../../images/icons/toolbar-controls/edit_default.svg)&nbsp;**Edit parameters (<kbd>F2</kbd>)**: Click to open the modal window for editing parameters of the expression that created the selected node. Use this operation for nodes that an expression calculates.
* ![ ](./../../../images/icons/toolbar-controls/delete_default.svg)&nbsp;**Delete**: Delete the current node and its expression. Use this operation for nodes that an expression calculates.

> **Note:** Applying **Replace with calculated expression** to a node or its expression turns the node caption into a link. Click the link to select the node’s expression and activate the code pane. This matches the behavior of selecting **Move to expression** in the context menu.

The **Variables** pane context menu provides the following operation:
* ![ ](./../../../images/icons/toolbar-controls/editor-insert_default.svg)&nbsp;**Insert to expression text**: Insert a reference to the variable into the code pane.

Double-click a list item to insert a relative reference to a node or a variable into the expression code pane. Alternatively, drag and drop the item. Hold <kbd>Ctrl</kbd> while performing these actions to insert an absolute reference to a node.

> **Note:** The system may create *incomplete* node references (e.g., for nodes in an array) if they lack the array item index. Specify the index in square brackets: `[]`.
> **Example:** In `Parent().Order[].Address`, modify the reference to `Parent().Order[1].Address` to reference the second item in the `Order[]` array. Array indexing starts at `0`. **Use** the `ItemIndex()` function to determine the current array item index. See examples in the JavaScript subsection.

If a node and a variable share the same name, the expression code uses the node name by default. Reference the variable using the `this.Var.` prefix.

For details on how expressions represent a tree and its nodes, refer to the JavaScript subsection.

### Function list

The component supports all [Calculator (Variables)](./../../variables/variables-calc.md) functions.

View the name, input arguments, and description of [available functions](./../../func/calc-func/README.md).

Use specific **Calculator (Tree)** functions to work with a data tree.

For an example of using a calculator function, refer to the JavaScript subsection.

You can filter by category and function name.

Double-click the selected function to insert it into the expression code pane, or drag and drop it.