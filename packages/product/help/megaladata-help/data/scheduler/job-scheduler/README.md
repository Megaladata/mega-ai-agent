---
description: Learn how to use Megaladata's built-in job scheduler. Add and configure jobs to run workflows on a schedule. Explore the availbale job start parameters.
---

# Job Scheduler

Users with the **Workflow design** role have access to the **Job Scheduler** page, where they can manage jobs for batch processing of workflows. To create and run jobs, users must also have the **Batch processing** role. If a user has **Access to all scheduler jobs** configured, they can edit, run, and delete jobs owned by other users (see [Administration: Users](../../admin/users.md)).

## Adding and configuring jobs

To create a job:
* From the [Workspace](../../interface/workspace.md) or [File Storage](../../location_user_files.md): Open the node's or package's context menu and select ![](../../images/icons/toolbar-controls_18x18/scheduler_default.svg)&nbsp;**Add job to scheduler**.
* On the **Job Scheduler** page: click ![](../../images/icons/toolbar-controls/plus_default.svg)&nbsp;**Add** on the toolbar or in the context menu of the job table.

The **Add job** window opens. It provides tabs where you can configure four categories of parameters:
* **Main**: Select the package and node you want to schedule and create the job caption and description:
    * **Package to start**: 
        * Use the ![](../../images/icons/toolbar-controls/down_default.svg)&nbsp;**List** button to select a package from the list of open packages; or
        * Select it from the **File Storage** using the ![](../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)&nbsp;**Select** button.
    * **Node to start**: 
        * Select a workflow node by its name or GUID. Click ![](../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)&nbsp;**Select** to open a window with the workflow structure. The system displays the structure as both a tree and a list.
        * You can also search for a node by its caption. 
        * The default value is **Entire package**.
    * **Enable execution**: Select ![](../../images/icons/toolbar-controls/apply_default.svg)&nbsp;**Include** to enable running the job for execution. The system includes all jobs by default.
    * **Caption**: Set a custom job title. The system generates the default value from the name of the package.
    * **Description**: Use this field to enter reference information about the job.
> **Note:**
> * When you run a separate node instead of the entire package, the system also runs all predecessor nodes.
> * You can select a node inside a supernode for execution only by its GUID.
* **Triggers**: Configure job start options. When keeping the default settings, you must run the job manually.
    * **Schedule**: Set a schedule for running the job:
        * **Start**: Date and time of the first job start.
        * **Start immediately if the start was skipped**: If the system skipped the job start for any reason, the next start begins immediately. Disabled by default.
        * **Repeat**: Enable this to run the job at a specified interval.
        * **Repeat every**: Configure the interval between repeated job starts. The minimum repeat interval is `10 milliseconds`.
        * **End**: Enter the date and time after which the job should stop running on the schedule.
        * **Start repeat**: Click to show/hide time interval settings for repeated job starts:
            * **Time**: Select the time interval (**from**...**to**...) in which the job can start. You can configure this setting if the **Repeat every** option uses hours, minutes, seconds, or milliseconds.
            > **Note**: 
            > Set each **Time** filter boundary in the range from `00:00` to `23:45` inclusive. You can select time interval boundaries in 15-minute increments, for example, from `02:00` to `06:45` (but not from 02:01 or to 06:46).
            > If you set the start time later than the end time, the allowed time interval for starting the job begins before midnight and ends after midnight.
            * **Days of the week**: Select the days of the week when the scheduler can start the job.
            * **Days of the month**: Select the days of the month when the scheduler can start the job.
                * **The number of the day**: from `1` to `31`, or
                * **Last day**
            * **Months**: Select the months when the system can start the job.
            > For **Days of the week**, **Days of the month**, and **Months**, you can use these buttons: 
            > * ![Check all](../../images/icons/toolbar-controls/check-all_default.svg)&nbsp;**Check all**: Use this to select all days or months
            > * ![Uncheck all](../../images/icons/toolbar-controls/uncheck-all_default.svg   "C:\Users\DELL\loginom-help-en\data\images\icons\toolbar-controls\uncheck-all_default.svg")&nbsp;**Uncheck all**: Use this to clear the selection for all days or months.

    > **Note:** 
    > * **Time**, **Days of the week**, **Days of the month**, and **Months** are additional restrictions for starting a job at the specified interval. For example, to configure the job to start at a specific time once a day only on Wednesdays and Saturdays, set **Repeat every** to `1 day` and clear all days of the week except Wednesday and Saturday.
    
    * **Finished job**: Configure the start of a job when another job finishes.
    Click ![](../../images/icons/toolbar-controls/plus_default.svg)&nbsp;**Add** to set the following parameters:
        * **Job caption**: Select another job by its caption or specify the current job.
        * **Status for job start**: Select one or more statuses as the job start trigger. The interface provides the following options:
            * ![](../../images/icons/app/circles/circle-green_default.svg)&nbsp;**Completed**: The job finished successfully.
            * ![](../../images/icons/app/circles/circle-orange_default.svg)&nbsp;**Canceled**: Job execution was canceled.
            * ![](../../images/icons/app/circles/circle-red_default.svg)&nbsp;**Error**: The job execution ended with an error.  

    > **Note:** The trigger job must be owned by the same user as the job it will trigger.

    * **Server startup:**
        * **Start upon server startup**: Enable this to start the job immediately after Megaladata Server starts.  

> **Note:** If several different triggers fire for a job at the same time, the scheduler starts it several times. If the same trigger fires again before the job it triggers has been finished, the system starts the job only once for this trigger.

* **Variables**: Add and configure job variables. Use the following commands:
    * ![Add](../../images/icons/toolbar-controls/plus_default.svg)&nbsp;**Add**: Select one variable from the variables list of the package or node to start and set its value, or add a new variable.
    * ![Select from package](../../images/icons/toolbar-controls/load-values_default.svg)&nbsp;**Select from package**: Select all or several variables of the package or node at once. The variable selection window provides the following commands:
        * ![Check all](../../images/icons/toolbar-controls/check-all_default.svg)&nbsp;**Check all**: Select all variables from the list.
        * ![Uncheck all](../../images/icons/toolbar-controls/uncheck-all_default.svg)&nbsp;**Uncheck all**: Clear the selection for all variables from the list.
        * ![Invert selection](../../images/icons/toolbar-controls/reverse-check_default.svg)&nbsp;**Invert selection**: Changes selected variables to unselected, and vice versa.
        * ![Refresh list](../../images/icons/toolbar-controls/refresh_default.svg)&nbsp;**Refresh list**: Refresh information about available variables.
    * ![OpenID](../../images/icons/toolbar-controls/values-openid_default.svg)&nbsp;**OpenID**: View and refresh session variables retrieved from the access token. This option is available only for users with [OpenID authentication](../../quick-start/authentication.md#openid-authentication).
        * ![Refresh](../../images/icons/toolbar-controls/refresh-data_default.svg)&nbsp;**Refresh variable list**: Use this option to retrieve new variable values from the current session's OpenID access token. To configure which parameters should be saved to the job configuration, use the **Claims extracted to variables** setting in **Parameters** > **OpenID parameters** (see [OpenID Parameters](../../admin/parameters/openid.md)).
    * ![](../../images/icons/toolbar-controls/edit_default.svg)&nbsp;**Edit**: Edit added job variables.
    * ![](../../images/icons/toolbar-controls/moveup_default.svg)&nbsp;**Move up** and ![](../../images/icons/toolbar-controls/movedown_default.svg)&nbsp;**Move down**: Move selected variables up or down in the list.
> **Note:** 
> * The system forms the names of the node's variables with a prefix using the name of the port that contains this variable. For example, in `port1.var1`, `port1` is the port name, and `var1` is the variable name. If the port has no name, the variable name will be `.var1`.
> * In contrast, the names of package variables do not include prefixes. For example: `var`.
> * The variable selection list does not show read-only package variables, variables that already exist in the job variables table, or variables that you cannot set by name. For example, this occurs if the node to start has a variable with the same name in two or more unnamed ports. Variable names are case-insensitive (e.g. the system treats the `var` and `VAR` names as identical).

* **Start parameters**: Configure job start parameters:
    * **Skip the start if there is an active session**: If active job sessions exist, the scheduler skips its start.
    * **Retrain models upon the start**: The system [retrains](../../workflow/training-processors.md) workflow nodes during job execution if they have the corresponding [activation mode](../../workflow/setting-batch-processing-mode.md) configured. Disabled by default.
    * **Save package after retraining**: If you enable **Retrain models upon the start**, the system will save the package every time after running it in retraining mode.
    * **Limit execution time**: Enable this option to set the maximum job execution time.
    * **Maximum execution time**: Set the time after which the system should stop the job, in seconds, minutes, hours, or days.
    * **Log count limit**: Limit the number of records in the session log. The default value is `1000`.
    * **Deactivate node groups on completion**: Select the deactivation mode for executed workflow nodes (see [Server Parameters](../../admin/parameters.md#server-parameters)).