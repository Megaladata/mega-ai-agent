---
description: Enumerations in the Python component. Data types. Loginom data kinds. Loginom field purposes. Usage examples.
---
# ![](./../../../images/icons/components/python_default.svg)&nbsp;Enumerations

The Python execution context employs some enumerations describing field and variable metadata.

## Enumerations used

### DataType

This enumeration is used for [Megaladata data types](./../../../data/datatype.md). Its elements are:

| Name       | Value |  Represented data type |
| :-------- | :------  | :------ |
| None      | 0        | ![](./../../../images/icons/usage-types/unspecified_default.svg) Data type not set |
| Boolean   | 1        | ![](./../../../images/icons/data-types/boolean_default.svg) Boolean |
| DateTime  | 2        | ![](./../../../images/icons/data-types/datetime_default.svg) Date/Time |
| Float     | 3        | ![](./../../../images/icons/data-types/float_default.svg) Float |
| Integer   | 4        | ![](./../../../images/icons/data-types/integer_default.svg) Integer |
| String    | 5        | ![](./../../../images/icons/data-types/string_default.svg) String |
| Variant   | 6        | ![](./../../../images/icons/data-types/variant_default.svg) Variant |

### DataKind

This represents the [discrete/continuous nature of data](./../../../data/datakind.md). Enumeration elements are:

| Name       | Value |  Represented kind of data |
| :-------- | :------  | :------ |
| Undefined  | 0        | ![](./../../../images/icons/usage-types/unspecified_default.svg) Data kind not set |
| Continuous | 1        | ![](./../../../images/icons/data-types/continuous_default.svg) Continuous |
| Discrete   | 2        | ![](./../../../images/icons/data-types/discrete_default.svg) Discrete |

### UsageType

This enumeration lists [dataset field usage types](./../../../data/datasetfieldoptions.md). Its elements are: 


| Name       | Value |  Represented usage type |
| :-------- | :------  | :------ |
| Unspecified | 0        | ![](./../../../images/icons/usage-types/unspecified_default.svg)&nbsp;Unspecified |
| Excluded    | 1        | ![](./../../../images/icons/usage-types/unused_default.svg)&nbsp;Excluded |
| Useless     | 2        | ![](./../../../images/icons/usage-types/useless_default.svg)&nbsp;Useless |
| Active (also: Used, Input)     | 3        | ![](./../../../images/icons/usage-types/active_default.svg)&nbsp;Active |
| Predicted (also: Output)   | 4        | ![](./../../../images/icons/usage-types/predicted_default.svg)&nbsp;Predicted |
| Key         | 5        | ![](./../../../images/icons/usage-types/source_default.svg)&nbsp;Кey |
| Group       | 6        | ![](./../../../images/icons/usage-types/group_default.svg)&nbsp;Group |
| Value       | 7        | ![](./../../../images/icons/usage-types/value_default.svg)&nbsp;Value |
| Transaction | 8        | ![](./../../../images/icons/usage-types/transaction_default.svg)&nbsp;Тransaction |
| Item        | 9        | ![](./../../../images/icons/usage-types/item_default.svg)&nbsp;Item |

## Examples of using enumerations

```python
from builtin_data import OutputTable, DataType, UsageType

col0 = OutputTable.Columns[0]
#Checking the value of a property with an enumeration type
if (col0.DataType == DataType.String):
    print("Column {} has a string data type".format(col0.Name))
    
#Outputting numeric representation of enumeration value
print(col0.DefaultUsageType)
#Outputting string representation of enumeration value
print(UsageType(col0.DefaultUsageType).name)
```

**Read on:** [Output Console](console.md)