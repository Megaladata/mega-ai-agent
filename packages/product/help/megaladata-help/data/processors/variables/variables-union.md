---
description: Explore the Variable Union component in Megaladata. Learn to combine two or more variable sets into one. Master the configuration wizard and see an example.
---
# ![Variable Union](./../../images/icons/components/unionvariables_default.svg)&nbsp;Variable Union Component

Use this component to combine two or more variable sets into a single set.

When variables from different sets have matching names, the component adds numbers to these names in the output set. If a variable name ends in a digit, the component numbers matching names in ascending order in the output set.

## Ports

### Input

* ![Input variables](./../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg)&nbsp;**Input variables**: Accepts an optional variable set.
* ![Added variables](./../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg)&nbsp;**Added variables**: Accepts an optional variable set.
* ![Add another port](./../../images/icons/app/node/ports/add/add_inactive_default.svg)&nbsp;**Add another port**: Use this button to add input ports for more variable sets.

### Output

* ![Output variables](./../../images/icons/app/node/ports/outputs/variable_inactive.svg)&nbsp;**Output variables**: Provides a new variable set.

%spoiler%Example:%spoiler%

Consider three variable sets:

Set A:

| Name | Caption | Value |
| :-- | :-- | --: |
| a0 | a | 10 |
| b | b | 12 |

Set B:

| Name | Caption | Value |
| :-- | :-- | --: |
| a0 | a | 20 |
| c | c | 18 |

Set C:

| Name | Caption | Value |
| :-- | :-- | --: |
| a1 | a | 30 |
| b | b | 25 |

After connecting these sets to the **Variable Union** node (in their original sequence), the output provides the following variable list:

| Name | Caption | Value | Note |
| :-- | :-- | --: | :-- |
| a0 | a | 10 | From set A, variable a0 |
| b | b | 12 | From set A, variable b |
| a1 | a | 20 | From set B, variable a0 |
| c | c | 18 | From set B, variable c |
| a2 | a | 30 | From set C, variable a1 |
| b_1 | b | 25 | From set C, variable b |

Apart from the initial columns, the node adds a new **Note** column with explanatory information.

Note that the component renamed the second variable `b` to `b_1` and the second variable `a0` to `a1`. It then renamed the original `a1` to `a2` because to avoid a duplicate name.

%/spoiler%

**Read on:** [Table to Variables Component](variables-from-table.md)