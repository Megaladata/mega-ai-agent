---
description: Python component in Megaladata. Access to input variables. InputVariables object type and properties. Examples.
---
# ![](./../../../images/icons/components/python_default.svg)&nbsp;Input Variables

To access the input variables, an object of type `InputVariables` is used.

## InputVariables properties

%spoiler%Items%spoiler%

Contains a read-only collection of the node's input variables. The items are of type `VariableClass` (see [Full API description](./api-description.md)).

%/spoiler%

%spoiler%Count%spoiler%

Contains the read-only number of the node's input variables. Returns a value of type `int`.

%/spoiler%

## Examples

```python
from builtin_data import InputVariables
import numpy as np

#Iterating through input variables and printing their property values to the console
for i in range(InputVariables.Count):
    #Accessing a variable by index
    variable = InputVariables.Items[i]
    print("Index: ", variable.Index)
    print("Name: ", variable.Name)
    print("DisplayName: ", variable.DisplayName)
    print("DataType: ", variable.DataType, "\n")
    
#Iterating through input variables using an iterator
for variable in InputVariables.Items:
    print(variable.Name, "=", variable.Value)
    
#Getting an array of variables from the Items object
arrayOfvariables = np.array(InputVariables.Items)
for variable in arrayOfvariables:
    print(variable.Name, "=", variable.Value)

#Accessing a variable by name and index
print(InputVariables.Items["VAR0"].Value)
print(InputVariables.Items[1].Value)

#Checking if the variable "MyVar" exists
if 'MyVar' in (var.Name for var in InputVariables.Items):
    print("Variable exists")

```

**Read on:** [Output Dataset](output-table.md)