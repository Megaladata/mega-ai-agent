# Processes Pane

The **Processes** pane provides detailed information about the data processing tasks performed by workflow nodes during the current Megaladata session. It displays a hierarchical view of active and completed processes, along with the nodes or subnodes executing within them. Each process is assigned a sequence number.

Each new processing cycle typically begins with an "Activating nodes" entry. This signifies the start of processing, which may involve multiple nodes running in parallel when a workflow is initiated.

![Processes pane](./information-panel-1.png)

## Processes pane structure

The pane includes the following columns and information:

* **No**: The sequence number assigned to the process.
* **Process**: Displays the names of processes and their constituent nodes/subnodes in a hierarchical tree structure. Clicking a process name will locate and highlight the corresponding node in the main Workflow view.
* **%**: shows the completion percentage of the process.
* **Processing**: A column indicating the current state of the process:
   * ![](./information-panel-2.png) Execution is actively in progress, but a precise completion time cannot be estimated.
   * ![](./information-panel-3.png) Visually represents the execution progress as data is being processed (complements the % column).
   * ![](./information-panel-4.png) Processing completed successfully.
   * ![](./information-panel-5.png) Status information has not yet been received.
   * ![](./information-panel-6.png) An error occurred during execution; processing did not complete successfully.
   * ![](./information-panel-7.png) An error prevented the process from starting.

* **Error**: If an error occurs, this column displays the error message. Click the message text to view the full error details.
* **Start**: Shows the date and time when the process started.
* **Finish**: Shows the date and time when the process completed (either successfully or with an error).
* **Processing Time**: The total duration of the process (the difference between the **Finish** and **Start** times).

There are also some quick action buttons:

* ![](../images/icons/toolbar-controls/stop-all_default.svg) **Stop all processes**: Stops all curently running processes.
   * ![](../images/icons/toolbar-controls/stop_default.svg) **Stop**: Stops the selected process.
* ![](../images/icons/toolbar-controls/delete-all_default.svg) **Delete all completed processes**: Deletes all completed processes.
   * ![](../images/icons/toolbar-controls/delete_default.svg) **Delete**: Deletes the selected process from the list.

## Context menu actions

Right-clicking on a specific process in the list opens a context menu with the following options:

* ![](../images/icons/toolbar-controls/stop-all_default.svg) **Cancel**: Stops the execution of the selected running process.
* ![](../images/icons/toolbar-controls/stop_default.svg) **Cancel all processes**: Stops the execution of all currently running processes.
* ![](../images/icons/toolbar-controls/delete_default.svg) **Remove from list**: Removes the selected process (regardless of its status) from the pane's display. This does not affect the actual node or workflow.
* ![](../images/icons/toolbar-controls/delete-all_default.svg) **Delete all completed processes**: Removes all succesfully finished processes from the pane's display.
* **Show node**: Locates and highlights the corresponding node for the selected process in the workflow area.
* **Show details**: Displays the full error message associated with the selected process, if an error has occurred.
* **Show completed processes**: This is a toggle option controlling the visibility of successfully completed processes:
   * ![](../images/icons/checkbox-states/checked_default.svg)&nbsp;**Checkbox marked**: The pane displays all processes (running, errored, and successfully completed), except for those you have manually removed using **Remove from list**.
   * ![](../images/icons/checkbox-states/unchecked_default.svg)&nbsp;**Checkbox unmarked**: The pane displays only currently running processes and processes that finished with an error. If no processes are running, this view might appear empty (unless there are errored processes, which will remain visible).

## Accessing and managing the Processes pane

* **Opening:** The **Processes** pane is hidden by default. To open it, click the ![](../images/icons/systempanel_status/systempanel_status_default-01.svg)&nbsp;**Processes** button located in the lower-left corner of the application window.

* **Pinning:** To keep the pane visible while you work with the workflow, click the ![](../images/icons/toolbar-controls/unpin_default.svg)&nbsp;**Pin** button on the pane's title bar. This locks the pane open.

* **Unpinning:** Click the ![](../images/icons/toolbar-controls/pin_default.svg)&nbsp;**Unpin** button to unlock the pane. This allows it to auto-hide or be closed manually.

* **Closing:** Click the ![](../images/icons/toolbar-controls/clear_default.svg)&nbsp;**Close** button on the pane's title bar to hide or close the pane.

**Read on:** [How to Find Your Megaladata Version](./version.md)