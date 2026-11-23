# Workspace

The _workspace_ is the main area where you build your workflows and interact with them. It consists of three primary sections: the **Components** pane, the workflow area, and the toolbar.

![Workspace](./workspace.png)

## Components pane

Located on the left side of the workspace, the **Components** pane provides the building blocks for your workflows. It contains the following categories:

* [Components](https://help.megaladata.com/userguide/processors/#standard-components): The standard component library provided by Megaladata.
* [Derived components](../workflow/derived-component.md): Reusable components created by users, based on standard components or configured workflow segments. 
* [Connections](../integration/connections/README.md): A list of available data sources that can be used in the workflow.

## Workflow area 

This is the main central space where you visually build your workflow. Here, you add components or connections from the Components pane to create nodes, and then connect these nodes with links to define the data processing sequence.

## Toolbar

Located above the workflow area, the toolbar provides quick access to various tools and operations for managing the view, building, and executing your workflow:

* ![](../images/icons/toolbar-controls/arrow-rr_default.svg) or ![](../images/icons/toolbar-controls/arrow-ll_default.svg)&nbsp;**Show/hide component pane**: Toggles the visibility of the **Components** pane on the left.
* ![](../images/icons/toolbar-controls/cursor_default.svg)&nbsp;**Object selection mode**: The default mode for selecting, moving, connecting, and configuring nodes and links in the workflow area.
* ![](../images/icons/toolbar-controls/hand_default.svg)&nbsp;**Workflow navigation mode**: A mode where clicking and dragging within the workflow area pans the view, allowing you to move around large workflows easily.
* ![](../images/icons/toolbar-controls/workflow_default.svg)&nbsp;**Show as workflow:** Displays the workflow in its standard graphical view with nodes and links.
* ![](../images/icons/toolbar-controls/table_default.svg)&nbsp;**Show as table:** Provides a compact, alternative view of the workflow as a table listing the components used.
* ![](../images/icons/toolbar-controls/v-align-left_default.svg)&nbsp;**Vertical left alignment**: This is the default alignment set for your workflow nodes. The dropdown menu next to the icon provides a set of commands to align selected nodes relative to each other (e.g., **Align left**, **Align center**, etc.).
* ![](../images/icons/toolbar-controls/layout_default.svg)&nbsp;**Auto node alignment:** Automatically arranges nodes in the workflow area, based on the logical flow of data processing.
* ![](../images/icons/toolbar-controls/move-front_default.svg)&nbsp;**Bring selected nodes to front**: Moves selected nodes visually in front of other overlapping nodes and their captions. The button's dropdown menu also provides a command **Send to back** for a reverse action.
* ![](../images/icons/toolbar-controls/output_count_default.svg)&nbsp;**Show count in output ports**: Displays the number of objects (table rows, variables, etc.) at the output ports upon activation.
* ![](../images/icons/toolbar-controls/order_default.svg)&nbsp;[Customize execution order](../workflow/run-order.md): Allows defining a custom sequence for node execution, overriding the default order determined by links.
* ![](../images/icons/toolbar-controls/run-all_default.svg)&nbsp;**Run all**: Executes the entire workflow from the beginning.
* ![](../images/icons/toolbar-controls/run-current_default.svg)&nbsp;**Run node** (<kbd>F9</kbd>) or ![](../images/icons/toolbar-controls/stop_default.svg)&nbsp;**Deactivate node**: Toggles the selected node between active (will run) and inactive (will be skipped during execution).
* ![](../images/icons/toolbar-controls/batch-mode_default.svg)&nbsp;[Retrain node](../workflow/training-processors.md): Re-runs the training process specifically for the selected trainable node.
* ![](../images/icons/toolbar-controls/setup_default.svg)&nbsp;**Configure node** (<kbd>Shift</kbd> + <kbd>Enter</kbd>): Opens the configuration wizard for the selected node.
* ![](../images/icons/toolbar-controls/retrain_default.svg)&nbsp;[Configure node activation mode](../workflow/setting-batch-processing-mode.md): Opens settings to define specific conditions or modes under which the selected node activates or runs.
* ![](../images/icons/toolbar-controls/note_default.svg)&nbsp;**New annotation**: Creates a customizable frame which you can use to highlight specific parts of your workflow, along with typing in some comments.
* ![](../images/icons/toolbar-controls/cut_default.svg)&nbsp;**Cut** (<kbd>Control</kbd> + <kbd>X</kbd>): Copies the selected data into RAM and deletes it from the current location.
* ![](../images/icons/toolbar-controls/copy_default.svg)&nbsp;**Copy** (<kbd>Control</kbd> + <kbd>C</kbd>): Copies the selected data to clipboard.
* ![](../images/icons/toolbar-controls/paste_default.svg)&nbsp;**Paste** (<kbd>Control</kbd> + <kbd>V</kbd>): Pastes the content from the clipboard into the selected destination.
* ![](../images/icons/toolbar-controls/clone_default.svg)&nbsp;**Clone node**: Creates an exact copy of the selected node, maintaining all its input links.
* ![](../images/icons/toolbar-controls/delete_default.svg)&nbsp;**Delete selected** (<kbd>Delete</kbd>): Deletes the currently selected node(s) and/or link(s).
* ![](../images/icons/toolbar-controls/compose-generic-model_default.svg)&nbsp;**Collapse node(s) to supernode**/**Expand supernode**: Groups selected nodes into a single [supernode](../processors/control/supernode.md) for better organization, or expands an existing supernode to show its internal nodes.
* ![](../images/icons/toolbar-controls/derive-node_default.svg)&nbsp;**Create derived component**: Creates a reusable derived component based on the configuration of the selected node. This action is only possible for some nodes.
* ![](../images/icons/toolbar-controls/show-derived-nodes_default.svg)&nbsp;**Show parent nodes for derived nodes:** For a selected derived node, this command highlights the original node it was created from.
* ![](../images/icons/toolbar-controls/show-reference-links_default.svg)&nbsp;**Show source nodes for reference nodes**: For a selected [reference node](../processors/control/unit-link.md), this highlights or navigates to the source node it refers to.
* ![](../images/icons/toolbar-controls/preview_default.svg)&nbsp;**Show workflow outline**: Opens a mini-map view of the entire workflow, useful for navigating large workflows and scaling the view.

> **Note:** If the toolbar becomes too crowded, some buttons may be hidden. An overflow button (![](../images/icons/toolbar-controls/system-panel-more_default.svg)) will appear; click it to access the hidden buttons via a dropdown list.

The context menu of the workflow area provides an additional command ![](../images/icons/toolbar-controls_18x18/deactivate-all_default.svg)&nbsp;**Deactivate all**. It allows you to stop all the nodes of your workflow, including the nodes and connectios within supernodes. It will not deactivate the connections on the same hierarchical workflow level and above.

A complete list of hotkeys for building workflows can be found here: [Hotkeys]().

## Node context menu

Right-clicking a node in the workflow opens a context menu with the following commands:

- ![](../images/icons/toolbar-controls/)&nbsp;**Rename** (<kbd>F2</kbd>): Allows you to change the node's caption.
- ![](../images/icons/toolbar-controls/info_default.svg)&nbsp;**Add comment**: Creates a comment field where you can add any necessary information about the node.
- **Delete comment**: Appears when a comment has been added. Deletes the node's comment field.
- ![](../images/icons/toolbar-controls/run-current_default.svg)&nbsp;**Run node** (<kbd>F9</kbd>) or ![](../images/icons/toolbar-controls/stop_default.svg)&nbsp;**Deactivate node**: Runs or stops the node.
- ![](../images/icons/toolbar-controls_18x18/deactivate-all_default.svg)&nbsp;**Deactivate all subnodes**: Available only for a supernode, this command deactivates all nodes and connections within it.
- **Activate subsequent nodes**: Runs the node and all nodes linked to its output port.
- ![](../images/icons/toolbar-controls/batch-mode_default.svg)&nbsp;**Retrain node**: Retrains a trainable node on the new data.
- ![](../images/icons/toolbar-controls/setup_default.svg)&nbsp;**Configure node** (<kbd>Shift</kbd> + <kbd>Enter</kbd>): Opens the configuration wizard for the node.
- ![](../images/icons/toolbar-controls/retrain_default.svg)&nbsp;**Configure node activation mode**: Opens settings to define specific conditions or modes under which the selected node activates or runs.
- ![](../images/icons/toolbar-controls/access-rights_default.svg)&nbsp;**Configure visibility**: Opens the window to select from the node's visibility options.
* ![](../images/icons/toolbar-controls/cut_default.svg)&nbsp;**Cut node** (<kbd>Control</kbd> + <kbd>X</kbd>): Copies the selected data into RAM and deletes it from the current location.
* ![](../images/icons/toolbar-controls/copy_default.svg)&nbsp;**Copy node** (<kbd>Control</kbd> + <kbd>C</kbd>): Copies the selected data to clipboard.
* ![](../images/icons/toolbar-controls/clone_default.svg)&nbsp;**Clone node**: Creates an exact copy of the selected node, maintaining all its settings and input links.
* ![](../images/icons/toolbar-controls/derive-node_default.svg)&nbsp;**Create derived component**: Creates a reusable derived component based on the configuration of the selected node.
* **Update node configuration**: A derived node command. Updates the configuration of a derived node to match its parent node.
* **Restore original node configuration**: A derived node command. Discards all the changes made to a derived node and makes it identical to its parent node again.
* **Show control variables port**: Displays the node's [control variables](../workflow/variables/control-variables.md) port if it has been hidden.
* ![](../images/icons/toolbar-controls/compose-generic-model_default.svg)&nbsp;**Collapse node to supernode**/**Expand supernode**: Groups selected nodes into a single [supernode](../processors/control/submodel.md) for better organization, or expands an existing supernode to show its internal nodes.
* ![](../images/icons/toolbar-controls_18x18/scheduler_default.svg)&nbsp;**Add job to scheduler**: Takes you to the **Scheduler** page and opens new job settings.
* ![](../images/icons/toolbar-controls/delete_default.svg)&nbsp;**Delete node** (<kbd>Delete</kbd>): Deletes the currently selected node.
* **Delete (forced)**: Deletes the currently selected node regardless of errors (e.g., you can delete a node before it has completed processing).

**Read on:** [Components Pane]()