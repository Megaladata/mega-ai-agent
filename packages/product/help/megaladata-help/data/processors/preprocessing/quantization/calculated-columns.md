---
description: Understand the structure of resulting dataset in Megaladata's Binning component.
---
# Result Dataset

The resulting dataset includes the columns from the source dataset and the columns that the node calculates. The table below describes them:

|Column name|Description|
|:-|:-|
|Bin identifier|Specifies the field name|
|Bin index|Represents the sequential bin number|
|Caption|Displays the bin caption set via a template in the wizard|
|Lower bound|Defines the lower bound of the bin|
|Upper bound|Defines the upper bound of the bin|
|Lower bin bound inclusive| Indicates whether the bin bound belongs to the bin: false (does not belong); true (belongs)|
|Upper bin bound inclusive| Indicates whether the bin bound  belongs to the bin: false (does not belong); true (belongs)|
|Lower bin bound open| Shows "true" if you select the Lower bound open checkbox; "false" otherwise. |
|Upper bin bound open | Shows "true" if you select the Upper bound open checkbox; "false" otherwise.
|Out of range value| Indicates values that do not fall into any range: -1 (less than the smallest range bound), 0 (belongs to a bin), or 1 (greater than the upper range bound). |

**Read on:** [Binning Range Parameters](ranges-quantization.md)