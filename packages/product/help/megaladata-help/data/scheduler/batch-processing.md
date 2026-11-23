# Batch Processing of Workflows

Batch mode allows you to execute workflows in a package without a user interface or on-screen messages. Typically, batch processing of a package generates summarized data and transfers it to an external system, such as a data warehouse or a report application.

In batch mode, the platform executes workflows launched by the **Scheduler**, [Megaladata Integrator](../components-platform.md#integrator), or the **BatchLauncher** utility.

> **Note:** To launch nodes of such workflows, the system considers the [node activation mode](https://help.megaladata.com/userguide/workflow/setting-batch-processing-mode.html) setting which controls running and retraining individual workflow nodes.

## Using the BatchLauncher utility

The BatchLauncher utility is included with Megaladata's server editions (**Team**, **Standard**, and **Enterprise**). It enables running workflows directly from the command line or external applications, including the operation system built-in schedulers. By default, the utility's installation path is:
- On **Windows**: `C:\Program Files\Megaladata\Server\BatchLauncher.exe`
- On **Linux**: `server/redist/BatchLauncher` (included in the distribution archive)

To start using BatchLauncher, copy it to the target directory (the one from which the jobs will be launched).

> **Important:** The BatchLauncher utility is synchronized with the server, meaning that it waits for the server processes to complete. If you close BatchLauncher earlier, the corresponding process will be cancelled on the [Megaladata Server](https://help.megaladata.com/adminguide/windows/server/).

Command-line syntax in batch mode:

**For Windows:**

```batch
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=<FileName> [/Teach] [/Deactivate=<Value>] [/Node=<NodeName>] [/Address=<Address>] [/Port=<Port>] [/UserName=<UserName> [/Password=<Password>]] [/VarName=<Value>] [/PortName.VarName=<Value>] [/Save]
```
where
`/Package`, `/Teach`, `/Deactivate`, `/Node`, `/Address`, `/Port`, `/UserName`, `/Password`, `/VarName`, `/PortName.VarName`, and `/Save` are launch parameters for batch mode.

**For Linux:**

```batch
Directory/BatchLauncher -package=<FileName> [-teach] [-deactivate=<Value>] [-node=<NodeName>] [-address=<Address>] [-port=<Port>] [-userName=<UserName>] [-password=<Password>] [-vаrname=<Value>] [-portname.varname=<Value>] [-save]
```
where
- `-package`, `-teach`, `-deactivate`, `-node`, `-address`, `-port`, `-userName`, `-password`, `-portname.varname`, and `-save` are launch parameters for batch mode.
- `Directory` is the current BatchLauncher directory.

> **Note:** For both Windows and Linux, separate multiple parameters in the command line with a **space**.

**Example for Windows:**

```batch
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=test.mgp /Teach
```

## Parameter descriptions

### Package

The path to the package file within the [file storage](..\location_user_files.md). This is a required parameter.

Examples:

```batch
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=/user/test.mgp
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" "/Package=/user/test and log.mgp"
```

### Node

The name of the node to execute. When specified, the system runs this node and all preceding nodes necessary for its input. The node must not be located within a supernode. If this parameter is not specified, all package nodes with the required [activation mode](../workflow/setting-batch-processing-mode.md) settings will be executed.

> **Note:** Set the node name when configuring the node's [visibility](../workflow/setting-batch-processing-mode.md).

Examples:

```batch
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=/user/test.mgp "/Node=executable node"
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=/user/test.mgp /Node=executable_node
```

### PortName.VarName

Use this parameter to set the values of the input variables for the node defined by the `/Node` parameter.

* `PortName`: the name of the port
* `VarName`: the name of the variable to set via the command line.

Examples:

```batch
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=/user/test.mgp /Node=test_node /Port1.Parameter1=true
/Port1.Parameter2=2008-01-02T22:24:24 "/Port2.Parameter1=Hello World!" /Port2.Parameter2=null /Port2.Parameter3=3.14 /Port2.Parameter4=4.025E4
```

You can omit the port name (e.g., `/Parameter1=true`). However, if a variable with the specified name exists in multiple ports, this will result in an exception error. An error also occurs if you specify a name of a non-existent variable. 

> **Note:** The system interprets all non-reserved parameters in the command line as variable value setup parameters.

A source string value specified in the command line is converted according to the target variable's data type:

* If the source string value is `null` (case-sensitive), the target variable will receive a `null` value, regardless of its data type.
* If the target variable is of `logical`, `integer`, `real`, or `date/time` type, the system converts the source string value in line with the rules for the corresponding type.
    - For `real` values, it uses a decimal point.
    - For `date/time` values, the system uses ISO 8601 formats: `YYYY-MM-DD`, `YYYY-MM-DDThh:mm[:ss[.zzz]]`, `hh:mm[:ss[.zzz]]`.
    - `True` and `false` (case-insensitive) are valid values for the `logical` data.
* If the target variable is of `string` type, the system does not perform any convertion.
    - Single quotes surrounding the source value will be unescaped. 
    - Otherwise, the source value is assigned to the variable as-is.
* If the target variable is of `variant` type, the system attempts to convert the source string value alternately to `logical`, `integer`, `real`, and `date/time` types. If all these conversions fail, the target variable will receive a `string` value.
* You can use exponential number notation for `real` and `variant` data (e.g., `4.205E2`, `4.205E-2`).

Example:

```batch
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=/user/test.mgp /Node=test_node /Var0=null /Var1=True /Var2=1 /Var3='1' /Var4='null' /Var5= /Var6=test /Var7='te''st' /Var8="test" "/Var9=a b c"
```

If all variables are of the `variant` type, they will receive the following values:

Var0: `null`
Var1: logical value `true`
Var2: integer value `1`
Var3: string value `1`
Var4: string value `null`
Var5: empty string
Var6: string value `test`
Var7: string value `te'st`
Var8: string value `"test"`
Var9: string value `a b c`

### Deactivate

Use this parameter to setup chain auto-deactivation of node groups on completion. This will free up all memory resources occupied by the workflow.

Deactivation will start after the activated node is unlocked. The system checks if the node has 'descendants' (any nodes linked to its output ports, except for the [execution order port](../workflow/ports/service-ports.md)) or is a supernode's output node. If not, the system starts deactivation, moving 'backwards' from this node through all preceding nodes.

Nodes that have its outputs linked to any active or activating nodes not yet included in the system's deactivation list will be excluded from the current deactivation chain. This prevents deactivation from overriding activation sequences in parallel workflow branches.

Node execution order does not affect the auto-deactivation sequence, meaning that deactivating a node will deactivate all its descendants, except for those connected via execution order ports.

Auto-deactivation chain functions via node links, except for cases when these lead to nodes from shared packages.

To set a value for the `deactivate` variable via BatchLauncher, use the following keys:
1. For a package variable: `/.Deactivate=Value`
2. For a node variable within the `PortName` port: `/PortName.Deactivate=Value`

> **Important:**
> * The `Value` parameter only accepts `true` and `false` values.
> * `/Deactivate=False` disables auto-deactivation *even if it is enabled in package or server settings*. Similarly, `/Deactivate=True` enables it regardless of other settings. Setting no value (e.g., `/Deactivate`) functions as `/Deactivate=True`.

**Syntax example:**

`"C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=/user/test.mgp /Teach /Deactivate=True`

### VarName

Use this parameter to set values to [package variables](../workflow/variables/workflow-variables.md). Set the parameter formta as follows:
1. `/VarName=Value`
2. `/.VarName=Value` (Use this if the variable name is the same as the one reserved by a BatchLauncher parameter, such as `Package` or `UserName`.)

where
- `VarName` is the name of the variable whose value you want to set from the command line.
- `Value` is the value to set.

> **Note:** You cannot set values for read-only variables.

**Example:**

```batch
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=/user/test.mgp /Var0=null /Var1=True /Var2=1 /Var3='1' /Var4='null' /Var5= /Var6=test /Var7='te''st' /Var8="test" "/Var9=a b c"
```

### Teach

Use this to launch the package in **Training** mode. If this parameter is not set, the package launches in **Execution** mode.

**Example:**

```batch
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=/user/test.mgp /Teach
```

### Address

Use this to set the IP address or hostname of the Megaladata server. By default, it is set to *localhost*.

**Example:**

```batch
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=/user/test.mgp /Address=192.168.0.95
```

### Port

Use to specify the port for accessing the Megaladata server. The default value is `4386`.

**Example:**

```batch
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=/user/test.mgp /Address=192.168.0.95 /Port=4555
```

### UserName

Use this parameter to set the username. If skipped, the system uses the default user name `service`. If you delete the `service` user, the parameter becomes required.

**Example:**

```batch
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=/user/test.mgp /UserName=user
```

### Password

Use to set the user's password. If skipped, the system uses an empty password.

**Example:**

```batch
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=/user/test.mgp /UserName=user /Password=12345
```

### Save

When specified, the system will save the package to disk after running or retraining.

If executing the package results in an error, it will not be saved.

**Example:**

```batch
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=test.mgp /Teach /Save
```

> **Important**: When using spaces in the expression, enclose it in quotes (example below).

```batch
"C:\Program Files\Megaladata\Server\BatchLauncher.exe" "/Package=/user/Quantization training/Quantization.mgp" /Teach /UserName=user
```