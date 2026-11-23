---
description: Explore the Variables to Table component in Megaladata. Master the configuration wizard. Read through the examples.
---
# ![Variables to Table](./../../images/icons/components/variablestodata_default.svg)&nbsp;Variables to Table Component

Use this component to convert a list of variables into a table. You can arrange variable values in rows or columns of the result table.

## Ports

### Input

* ![Input variables](./../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg)&nbsp;**Input variables**: Accepts a list of variables to convert into a table.

### Output

* ![Output dataset](./../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Output dataset**: Provides a result data table.

## Configuration wizard

The configuration wizard offers two ways to record variables:
* **To columns**: Place each variable in a separate table field.
* **To rows**: Place each variable in a separate table record.

%spoiler%Example:%spoiler%

Consider the following list of variables:

| Name | Value |
| :-- | --: |
| a   |  5 |
| b   |  7 |
| c   | 10 |
| d   |  2 |

The conversion produces the following results:

* To columns

| a(sum) | b(sum) | c(sum) | d(sum) |
| ---: | ---: | ---: | ---: |
| 5 | 7 | 10 | 2 |

* To rows

| Name | Caption | Value |
| :-- | :-- | --: |
| a | a(sum) | 5 |
| b | b(sum) | 7 |
| c | c(sum) | 10 |
| d | d(sum) | 2 |

%/spoiler%

**Read on:** [Variable Union Component](variables-union.md)