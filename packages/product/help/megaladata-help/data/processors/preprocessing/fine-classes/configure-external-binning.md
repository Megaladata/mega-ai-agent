---
description: Configure external binning in Megaladata's Coarse Classes component. 
---
# Configure External Binning

Use this configuration when you provide an external binning table to the **Coarse Classes** node through the **External quantization ranges** port. If the input data source contains binning settings for a column, select **Input (external binning)** as its **Usage type** in the wizard. The node will then use the binning from the table instead of calculating it from the current data.

## Requirements for external binning

To use external binning, create the table in a specific format:
* For **continuous** data, ensure each external binning row corresponds to one class (range) for the input data source field values.
* For **discrete** data, ensure each external binning row corresponds to one unique value of the input data source field.

The table below describes the columns that the external binning must include for continuous and discrete binning:

| Column type | Column name for automapping | Data type | Continuous binning | Discrete binning | Description |
| -------- | -------- | -------- | -------- | -------- | -------- |
| Column name | ColumnName | string | + | + | The name of the input data source field that the external binning applies to. Use the current column value to select the rows that define external binning for the input data source field. |
| Upper bound | UpperBound | real/integer | + | - | A strictly increasing sequence of binning boundaries. The number of classes will be *one greater* as it includes the class that contains values above the last boundary. |
| Upper bound open | IncludeUpperBound | logical | + | - | A constant value within one field’s binning that defines the upper boundary type of the class range: open (excluded) or closed (included). |
| Unique value | UniqueValue | any valid type | - | + | Unique values of the input data source field that the external binning corresponds to. |
| Class number | ClassNumber | integer | - | + | The class number that corresponds to the unique value. |

### Examples of external binning tables

**Continuous binning:**

| Column name | Upper bound | Upper bound included |
| -------- | -------- | -------- |
| COL2 | 3728129 | False |
| COL2 | 7934343 | False |
| COL2 | 10533052 | False |
| COL2 | 30721946 | False |
| COL2 | 36494956 | False |
| COL2 | 39509806 | False |
| COL8 | 490.01 | False |
| COL8 | 2308.07 | False |
| COL8 | 5981.98 | False |
| COL8 | 6600.01 | False |
| COL8 | 10050.99 | False |
| COL8 | 14870 | False |

**Discrete binning:**

|Column name|Class number|Unique value|
|-|-|-|
|COL4|0|female|
|COL4|1|male|
|COL4|2|NULL|
|COL4|2||
|COL6|0|Bronze|
|COL6|1|Silver|
|COL6|2|Gold|
|COL6|2|Platinum|