---
description: Creating a new dataset through the execution of Python code—Python component in Megaladata. Configuration wizard. Error handling. Usage features and limitations. Examples.
---

# ![](./../../../images/icons/components/python_default.svg)&nbsp;Python

## Description

The **Python** component creates a new dataset with a specified structure and populates it with data by running Python code. The code can use data from the input ports to populate the output dataset.

You can define the structure of the output dataset in the node's configuration wizard or dynamically in the Python code.

> **Note:** To use **Python** nodes, you might need to configure Megaladata and install Python first. For more information about using Python in Megaladata, see [Features and Limitations](./python-features-restriction.md).

## Ports

### Input

* ![](./../../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Input data source**: A data table. This input is optional.
* ![](./../../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg) **Input variables**: A set of variables. This input is optional.
* ![](./../../../images/icons/app/node/ports/add/add_inactive_default.svg)&nbsp;**Add another port**: Creates an additional input port for a data table, **Input data source N**, where N is the port's sequential number.

### Output

* ![](./../../../images/icons/app/node/ports/outputs/table_inactive.svg) **Output data set**: A data table.

## Configuration wizard

The configuration wizard has the following pages:

* **Configure input columns** (for each data table port that has no input data)
* **Configure Python output table columns**
* **Python**: Enter the code and preview the results

### Configure Python output table columns

On this page, you can manually define the columns for the output dataset. Alternatively, you can define them dynamically by running Python code.

The page has the following commands:

* **Allow creating output columns in script**: Select this checkbox to allow dynamic creation, modification, and deletion of output columns through your script.
* ![ ](./../../../images/icons/toolbar-controls/plus_default.svg)&nbsp;**Add**: Adds a new column with default parameters.
* ![ ](./../../../images/icons/toolbar-controls/clone_default.svg)&nbsp;**Clone**: Adds a new column with the same parameters as the selected column.
* ![ ](./../../../images/icons/toolbar-controls/edit_default.svg)&nbsp;**Edit** (<kbd>F2</kbd>): Opens a dialog to edit the parameters of the selected column.
* ![ ](./../../../images/icons/toolbar-controls/moveup_default.svg)&nbsp;**Move up** (<kbd>Ctrl</kbd> + <kbd>Up</kbd>): Moves the selected column one position up.
* ![ ](./../../../images/icons/toolbar-controls/movedown_default.svg)&nbsp;**Move down** (<kbd>Ctrl</kbd> + <kbd>Down</kbd>): Moves the selected column one position down.
* ![ ](./../../../images/icons/toolbar-controls/filter_default.svg)&nbsp;**Filter**: Allows you to filter the list of columns.
* ![ ](./../../../images/icons/toolbar-controls/delete-all_default.svg)&nbsp;**Delete all** (<kbd>Shift</kbd> + <kbd>Delete</kbd>): Deletes all columns.
* ![ ](./../../../images/icons/toolbar-controls/delete_default.svg)&nbsp;**Delete** (<kbd>Delete</kbd>): Deletes the selected column.

### Python

The **Python** page contains the code editor for the node.

* To run the script in a separate process (the *Python interpreter process*), select the **Start in separate process** checkbox. Otherwise, the script runs inside the Megaladata process.

> **Note:** When a Python script runs inside the Megaladata process, only one **Python** node can run at a time. The next **Python** node in the queue waits for the current one to finish. The maximum waiting time is set by the **Start wait timeout (ms)** parameter. By default, there is no timeout. If the timeout is exceeded, the node stops running and returns an error. For more information see [Searching for Python modules inside the Megaladata process](./python-features-restriction.md).

* Click **Preview** to display the first 100 rows of the resulting dataset and the [output console]().

> **Note:** When you click **Preview**, all input ports are activated. The **Preview** window opens after they successfully activate.

## Accessing port data and other built-in objects from Python code

The following objects are avaialable in the code execution context to let you access port data and other built-in objects:

* [Input datasets](./input-tables.md) (`InputTables`, `InputTable`)
* [Input variables](./input-variables.md) (`InputVariables`)
* [Output dataset](./output-table.md) (`OutputTable`)
* [Enumerations](./enum.md) (`DataType`, `DataKind`, `UsageType`)

These objects are imported from the built-in `builtin_data` module. By default, an `import` statement for these objects is added to the code.

## Error handling

If there are syntax or runtime errors, a message appears that indicates the location of the error in the code when you open the **Preview** window or run the node.

## Global functions

The following global functions are available in the node's execution context. No additional `import` statements are required to use them.

* `filestoragepath`: Takes a path in the [file storage](./../../../location_user_files.md) and converts it to an absolute path in the local file system.

%spoiler%Example:%spoiler%

```python
from builtin_data import OutputTable
import json

with open(filestoragepath("data_file.json")) as f:
    data = json.load(f)
OutputTable.Append()
OutputTable.Set(0, data)

```

%/spoiler%

* `getLocale`: Returns the [locale](./../../../workflow/local-settings.md) name of the node where the function is executed, in [ICU](https://unicode-org.github.io/icu/userguide/locale/#canonicalization) format. This function takes no arguments.

**Read on:** [Python: Input Datasets](./input-tables.md)