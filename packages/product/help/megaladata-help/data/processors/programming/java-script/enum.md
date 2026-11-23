# ![](../../../images/icons/components/javascript_default.svg)&nbsp;Enumerations of Built-In Megaladata Entities

The JavaScript code execution context provides built-in enumerations describing the metadata of fields and variables.

## Description of enumerations

### DataType

Represents Megaladata [data types](../../../data/datatype.md). Includes the following items:

| Item | Value | Data type |
| :-------- | :------ | :------ |
| None | 0 | ![](../../../images/icons/usage-types/unspecified_default.svg) No data type specified |
| Boolean | 1 | ![](../../../images/icons/data-types/boolean_default.svg) Logical |
| DateTime | 2 | ![](../../../images/icons/data-types/datetime_default.svg) Date/time |
| Float | 3 | ![](../../../images/icons/data-types/float_default.svg) Real |
| Integer | 4 | ![](../../../images/icons/data-types/integer_default.svg) Integer |
| String | 5 | ![](../../../images/icons/data-types/string_default.svg) String |
| Variant | 6 | ![](../../../images/icons/data-types/variant_default.svg) Variant |

### DataKind

Represents Megaladata [data kinds](../../../data/datakind.md). Includes the following items:

| Item | Value | Data kind |
| :-------- | :------ | :------ |
| Undefined | 0 | ![](../../../images/icons/usage-types/unspecified_default.svg) No data kind defined |
| Continuous | 1 | ![](../../../images/icons/data-types/continuous_default.svg) Continuous |
| Discrete | 2 | ![](../../../images/icons/data-types/discrete_default.svg) Discrete |

### UsageType

Represents Megaladata [field usage types](../../../data/datasetfieldoptions.md). Includes the following items:

| Item | Value | Field usage type |
| :-------- | :------ | :------ |
| Unspecified | 0 | ![](../../../images/icons/usage-types/unspecified_default.svg) No usage type specified |
| Excluded | 1 | ![](../../../images/icons/usage-types/unused_default.svg) Excluded |
| Useless | 2 | ![](../../../images/icons/usage-types/useless_default.svg) Useless |
| Active | 3 | ![](../../../images/icons/usage-types/active_default.svg) Active |
| Predicted | 4 | ![](../../../images/icons/usage-types/predicted_default.svg) Predicted |
| Key | 5 | ![](../../../images/icons/usage-types/source_default.svg) Key |
| Group | 6 | ![](../../../images/icons/usage-types/group_default.svg) Group |
| Value | 7 | ![](../../../images/icons/usage-types/value_default.svg) Value |
| Transaction | 8 | ![](../../../images/icons/usage-types/transaction_default.svg) Transaction |
| Item | 9 | ![](../../../images/icons/usage-types/item_default.svg) Item |

## Examples:

```javascript
import { OutputTable, DataType, UsageType } from "builtIn/Data";

let col0 = OutputTable.Columns[0];
// Checking the value of an "enumeration" property
if (col0.DataType == DataType.String) {
    // Necessary operations
}

// Ouputting a numeric representation of the enumeration value
console.log(col0.DefaultUsageType);
// Outputting a string representation of the enumeration value
console.log(UsageType[col0.DefaultUsageType]);
```

**Read on:** [JS Calculator Functions](calc-functions.md)