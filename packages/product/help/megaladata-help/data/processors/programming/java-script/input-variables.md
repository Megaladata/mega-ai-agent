# ![](../../../images/icons/components/javascript_default.svg)&nbsp;Accessing Input Variables

Use the `InputVariables` object to access input variables.

## The properties of InputVariables

%spoiler%Items%spoiler%

`Items`

Provides a read-only collection of the node's input variables, returning an object that implements the `IVariableItems` interface. See the [full API description](./api-description.md) for more information.

%/spoiler%

%spoiler%Count%spoiler%

`Count`

Provides a read-only number of the node's input variables, returning a `number` value.

%/spoiler%

## Examples:

```javascript
import { InputVariables } from "builtIn/Data";

// Iterating input variables and outputting the values of their properties to the console:
for (let i = 0, c = InputVariables.Count; i < c; i++) {
    // Calling a variable by index
    let variable = InputVariables.Items[i];
    console.log("Index: ", variable.Index);
    console.log("Name: ", variable.Name);
    console.log("DisplayName: ", variable.DisplayName);
    console.log("DataType: ", variable.DataType);
    console.log("DataKind: ", variable.IsNull);
    console.log("DefaultUsageType: ", variable.Value);
    console.log("");
}

// Iterating input variables with an iterator
for (let variable of InputVariables.Items)
    console.log(variable.Name, " = ", variable.Value);

// Getting the variables array from the Items object
let arrayOfVariables = Array.from(InputVariables.Items);
// Outputting the variables values to the console
arrayOfVariables.forEach(variable => {
    console.log(variable.Name, " = ", variable.Value);
});

// Calling a variable by name
console.log(InputVariables.Items["Var0"].Value);
console.log(InputVariables.Items.Var0.Value);

// Outputting the variables properties
for (let prop in InputVariables.Items)
    console.log(prop);

// Outputting the properties of a variable
for (let prop in InputVariables.Items[0])
    console.log(prop);

// Checking if a "MyVar" variable exists
if (InputVariables.Items.MyVar)
    console.log("The variable exists");

```

**Read on:** [JS Output Dataset](output-table.md)