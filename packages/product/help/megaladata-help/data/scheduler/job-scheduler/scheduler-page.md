---
description: Review descriptions of existing jobs. Explore toolbar commands and the job table display. Learn how the system logs active and completed job sessions.
---

# The Scheduler Page

In the **Scheduler** page, you can add, edit, and delete jobs. To open it, click ![](../../images/icons/app/system-toolbar/controls/scheduler_disabled.svg)&nbsp;**Scheduler** or use [Navigation](../../interface/main-menu.md#navigation) in the **Main menu**.

The toolbar provides the following commands:
- ![](../../images/icons/toolbar-controls/plus_default.svg)&nbsp;**Add** (<kbd>Alt</kbd> + <kbd>N</kbd>): Open the setup window for a new job.
- ![](../../images/icons/toolbar-controls/edit_default.svg)&nbsp;**Edit** (<kbd>F2</kbd>): Open the setup window for an existing job.
- ![](../../images/icons/toolbar-controls/clone_default.svg)&nbsp;**Clone** (<kbd>Ctrl</kbd> + <kbd>D</kbd>): Clone the selected job, preserving all settings.
- ![](../../images/icons/toolbar-controls/run-current_default.svg)&nbsp;**Run** (<kbd>F3</kbd>): Start the job manually. You can use this command only for jobs with enabled execution.
- ![](../../images/icons/toolbar-controls/stop_default.svg)&nbsp;**Stop**: Stop all sessions for the selected job.
- ![](../../images/icons/toolbar-controls/delete_default.svg)&nbsp;**Delete** (<kbd>Delete</kbd>): Delete the selected job.
- ![](../../images/icons/toolbar-controls/journal_default.svg)&nbsp;**Log** (<kbd>Shift</kbd> + <kbd>J</kbd>): Open or close the [session log](#session-log).
- ![](../../images/icons/toolbar-controls/refresh_default.svg)&nbsp;**Refresh list** (<kbd>Alt</kbd> + <kbd>F5</kbd>): Update the list, adding new jobs and removing those already deleted. This command will also update the display of jobs based on their current settings.

> **Note:** If you clone another user's job, the cloned job starts under your username.

You can also run the commands above from the context menu, right-clicking a job. The context menu provides additional actions:
- **Open package**: Open the workflow page for the package that you selected in the job settings.
- **Open node in package**: Open the workflow page for the node that you selected as the node to run in the job settings.
- ![](../../images/icons/toolbar-controls/redo_default.svg) **Show package in folder**: Open the selected package's directory in [File Storage](./../../location_user_files.md).
- **Enable execution**/**Disable execution**: This option is similar to **Enable execution** in the [job settings](./README.md#adding-and-configuring-jobs).

## Job table

This table lists all added jobs as a tree structure with one nesting level. The **All jobs** row serves as the tree root. Select this row to view information about all completed sessions in the log, including sessions for deleted jobs. This table provides the following information for all available jobs:

- **Caption**: Job name that you define when adding the job.
- **Package**: Name and full path to the package to start.
- **Node**: Name or GUID of the node to start if you selected a node instead of the entire package.
- **Previous start**: Date and time of the previous start of the job.
- **Next start**: Date and time of the next start scheduled for the job.
- **Owner**: User who created the job.

You can also delete all jobs by clicking the **Delete all** button. To delete a specific job, click **Delete**. When you delete a job, the system prompts you to stop its active sessions.

> **Note:** Gray color of text in a job's row indicates that this job does not allow execution.

## Session log

To view the list of active and completed sessions for one, several, or all jobs, open the session log at the bottom of the window by clicking the ![](../../images/icons/toolbar-controls_18x18/toolbar-controls_sliced_18x18_journal_default.svg)&nbsp;**Session log** button on the toolbar or by pressing <kbd>Shift</kbd> + <kbd>J</kbd>.

The log contains two tabs:

- **Active**: List of active sessions for the selected job.
- **Completed**: List of completed sessions for the selected job.

The table of active sessions provides the following details and options:
- **Job caption**: Similar to **Caption** in the job table.
- **Session ID**: Sequence number.
- **%**: Job completion percentage for the session.
- **Processing**:
  * ![](../../interface/information-panel-3.png): Execution progress for the active session.
* ![](../../images/icons/toolbar-controls/stop-all_default.svg)&nbsp;**Stop all sessions**: Use this button to stop all active sessions.
  * ![](../../images/icons/toolbar-controls/stop_default.svg)&nbsp;**Stop session**: Use this to stop a specific session.
- **Start**: Date and time when the session started.
- **Execution time**: Difference between the start time and the current time.

The table of completed sessions has the following structure:

- **Job caption**: Similar to **Caption** in the job table.
- **Session ID**: Sequence number.
- **Status**: Session completion status.
- **Error**: Shows the error text if an error occurs.
- **Start**: Date and time when the session started.
- **Finish**: Date and time when the session finished.
- **Execution time**: Difference between the start time and the session finish time.

In the completed sessions table, click a cell with error text to open a window with detailed error information. Note that:
- If the error data includes the `ErrTimestamp` timestamp, the window displays it.
- If the error data does not include a timestamp, the window displays the current time when you open the window.

> **Note:** If the session log text is gray, the user deleted the corresponding job.

You can sort log records in the completed and active session tables by all fields except **Processing** and **Stop all sessions**.

Right-click to open a context menu with the following actions:
- **Stop session**: Stop the selected session.
- ![](../../images/icons/toolbar-controls/stop_default.svg)&nbsp;**Stop all sessions**: Stop all sessions.
-  **Move to job**: Move to a job belonging to the selected session.

> **Note:** To determine how long the system should store **Session log** records, use the **Store scheduler history (days)** setting on the [Parameters](../../admin/parameters.md#server-parameters) page (see [Administration](../../admin/README.md)).

> **Important:** Note that the system clears records of completed job sessions before each [Megaladata Server](../../components-platform.md#server) startup.