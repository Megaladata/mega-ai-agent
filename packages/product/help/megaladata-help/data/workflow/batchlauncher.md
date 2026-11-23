# Batch Processing of Workflows

**Batch mode**: execution of the Package Workflows without display of any user interface and screen display of messages. As a rule, in this case, the batch processing result is generation of the summarized data and its transfer to the external system (for example, to the data warehouse or another accounting system).

The Workflows batch processing is performed using BatchLauncher utility application that is supplied as a set with the Megaladata server (Team, Standard, Enterprise versions). When installing by default, the utility application path is as follows:

`"C:\Program Files\Megaladata\Server\BatchLauncher.exe"`.

To launch the batch processing according to schedule, it is possible to use the external job scheduler, for example, Windows job scheduler.

Syntax of the start string in the batch mode:

```batch
BatchLauncher /Package=<FileName> [/Teach] [/Node=<NodeName>] [/Address=<Address>] [/Port=<Port>] [/UserName=<UserName> [/Password=<Password>]] [/PortName.VarName=<Value>]
```

Where:

*/Package*, */Teach*, */Node*, */Address*, */Port*, */UserName*, */Password*, */PortName.VarName* are launch parameters in the batch mode.

Several parameters are separated with space character in the start string.

For example:

```batch
 "C:\Program Files\Megaladata\Server\BatchLauncher.exe" /Package=test.mgp /Teach
```

## Description of Parameters

### Package

Path to the Package file inside the [file storage](..\location_user_files.md). Required parameter.

Examples:

```batch
BatchLauncher /Package=/user/test.mgp
BatchLauncher "/Package=/user/test and log.mgp"
```

### Node

Name of the node to be executed. In this case, the specified node and all preceding nodes are executed, namely, all nodes that must be executed for generation of its input data. The node must not be located in the Supernode. If the parameter is not specified, all Package nodes for which the required settings of the [activation mode](./setting-batch-processing-mode.md) are set must be executed.

> **Note:** The node name is set when configuring [access modifier](./access-modifier.md).

Examples:

```batch
BatchLauncher /Package=/user/test.mgp "/Node=executable node"
BatchLauncher /Package=/user/test.mgp /Node=executable_node
```

### PortName.VarName

It is used to set values of the input variables of the node defined by parameter /Node.

* **PortName**: port name.
* **VarName**: name of the variable which value must be set in the start string.

Examples:

```batch
BatchLauncher /Package=/user/test.mgp /Node=test_node /Port1.Parameter1=true
/Port1.Parameter2=2008-01-02T22:24:24 "/Port2.Parameter1=Hello World!" /Port2.Parameter2=null /Port2.Parameter3=3.14 /Port2.Parameter4=4.025E4
```

It is allowed not to specify the port name (for example, */Parameter1=true*. However, if the variable with the name specified in such a manner is in several ports, it is an exception to the rule. An error also occurs when the nonexisting variable name is specified.

> **Important:** All nonreserved parameters in the start string are interpreted as the setup parameters of the variables values.

The source string value specified in the command string is converted according to the data type of the target variable:

* If the source string value is equal to null (case-sensitive), the target variable will get the null value irrespective of its data type.
* If the target variable refers to the Logical, Integer, Real or Date/Time type, the source string value is converted according to the rules related to the corresponding type. In this case, the decimal separator is used for the Real type. (Dot). Subset of ISO 8601 formats is used for Date/Time: "YYYY-MM-DD", "YYYY-MM-DDThh:mm[:ss[.zzz]]", "hh:mm[:ss[.zzz]]". *true* and *false* (non-case-sensitive) are considered to be allowable values of the Logical type.
* If the target variable is related to the String type, the data type transformation is not performed. If the source value is enclosed in single quotes, these quotes are unescaped. Otherwise, the source value is assigned to the variable without changes.
* If the target varaible is related to the Variable type, there is an attempt to convert alternately the source string value to the Logical, Integer, Real and Date/Time types. In this case, if all these conversions fail, the target variable will get the string value.
* The exponential form of number record can be transferred as parameters for the variables related to the Real and Variable types (for example: 4.205E2, 4.205E-2)

For example:

```batch
BatchLauncher /Package=/user/test.mgp /Node=test_node /Var0=null /Var1=True /Var2=1 /Var3='1' /Var4='null' /Var5= /Var6=test /Var7='te''st' /Var8="test" "/Var9=a b c"
```

If all variables refer to the Variable type, they get the following values:

```batch
Var0 — empty value;
Var1 — logical true value;
Var2 — integer value 1;
Var3 — string value 1;
Var4 — string null value;
Var5 — empty string;
Var6 — string test value;
Var7 — string te'st value;
Var8 — string "test" value;
Var9 — string a b c value.
```

### Teach

Package launch in the «Training» mode. If the parameter is not specified, the package is launched in the "Execution" mode.

For example:

```batch
BatchLauncher /Package=/user/test.mgp /Teach
```

### Address

IP address or host name of the Megaladata server. *localhost* is used by default.

For example:

```batch
BatchLauncher /Package=/user/test.mgp /Address=192.168.0.95
```

### Port

The port used for access to the Megaladata server. *4386* is used by default.

For example:

```batch
BatchLauncher /Package=/user/test.mgp /Address=192.168.0.95 /Port=4555
```

### UserName

Username. If the parameter is not specified, the default user is used.

For example:

```batch
BatchLauncher /Package=/user/test.mgp /UserName=user
```

### Password

User password. If the parameter is not specified, the empty password is used.

For example:

```batch
BatchLauncher /Package=/user/test.mgp /UserName=user /Password=12345
```

> **Note:** When using the space characters in the expression that enables to set the parameter value, it is required to enclose the whole expression in double quotes.

For example:

```batch
BatchLauncher "/Package=/user/Quantization training/Quantization.mgp" /Teach /UserName=user
```
