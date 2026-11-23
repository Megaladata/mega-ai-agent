---
description: Correlation Analysis component in Megaladata. Explore the configuration wizard, compute correlation coefficients (Pearson, Kendall's Tau-b, and Spearman), and learn to evaluate factor relationships.
---
# ![ ](./../../images/icons/components/corr-analysis_default.svg)&nbsp;Correlation Analysis

## Description

Use this component to identify relationships between data series in your input dataset by calculating correlation coefficients. It helps you evaluate assumed dependencies between factors.

%spoiler%Example:%spoiler%

In this example, we perform correlation analysis for a table of four product categories sold on each date.

Source table:

 | Date | Spaghetti | Tomato paste | Pasta | Coffee |
 | :-------- | ----------------: | ---------------------------: | ----------------: | --------: |
 | 09/02/17 | 10               | 20                          | 15               | 25       |
 | 09/03/17 | 12               | 22                          | 12               | 26       |
 | 09/04/17 | 14               | 25                          | 9                | 26       |
 | 09/05/17 | 13               | 24                          | 10               | 25       |
 | 09/06/17 | 14               | 25                          | 9                | 24       |
 | 09/07/17 | 14               | 25                          | 9                | 23       |
 | 09/08/17 | 12               | 21                          | 12               | 24       |
 | 09/09/17 | 10               | 18                          | 14               | 23       |
 | 09/10/17 | 16               | 24                          | 9                | 22       |
 | 09/11/17 | 13               | 21                          | 9                | 23       |
 | 09/12/17 | 17               | 25                          | 7                | 25       |

Let's calculate the correlation between "Spaghetti" and the other products using the Pearson correlation coefficient. To do this, we select the **Spaghetti** field as **Set 1**, and the other products as **Set 2** in the node configuration wizard.

Output table:

 | Caption | Caption | Pearson correlation coefficient |
 | :---------- | :---------- | ---------------: |
 | Spaghetti | Tomato paste | 0.83 |
 | Spaghetti | Pasta | -0.93 |
 | Spaghetti | Coffee | -0.12 |

As the table shows, the sales series for "Tomato paste" has a very strong positive correlation with "Spaghetti," while "Pasta" has a negative correlation. This means "Tomato paste" is a complementary product, whereas "Pasta" is a substitute for "Spaghetti." The correlation between "Coffee" and "Spaghetti" is negative, but the absolute value is small, so no relationship exists between their sales.

%/spoiler%

## Ports

### Input

* ![ ](./../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;Input data source (data table).

### Output

* ![ ](./../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Output dataset**: A table containing correlation data between fields. It includes the following structure:
  * Required fields:
    * **Field 1|Name**: Name of the first field in the correlation pair.
    * **Field 1|Caption**: Caption of the first field in the correlation pair.
    * **Field 2|Name**: Name of the second field in the correlation pair.
    * **Field 2|Caption**: Caption of the second field in the correlation pair.
  * Optional fields (user-selected):
    * **Pearson**: Pearson correlation coefficients.
    * **Cross-correlation function extremum**: [Cross-correlation function extrema](https://www.geeksforgeeks.org/data-science/cross-correlation/).
    * **Cross-correlation function lag**: Shift value at which the cross-correlation function extremum was obtained (only for the cross-correlation function).
    * **Kendall's Tau-b**: [Kendall's rank correlation coefficients](https://www.statisticshowto.com/kendalls-tau/).
    * **Spearman**: Spearman correlation coefficients.

## Configuration wizard

Select the correlation coefficients to calculate:
* **Pearson correlation coefficient**: Determines the strength and direction of a linear relationship between two simultaneous processes.
* **Kendall's Tau-b coefficient**:  A rank correlation coefficient. Identifies a quantitative relationship between variables if you can rank them. We recommend this for categorical data.
* **Extremum of cross-correlation function**: Calculates the maximum absolute value among the correlation coefficients of two processes for all possible time shifts. Use this to evaluate a linear relationship between two processes (or parts of processes) that occur with a time lag.
* **Spearman's rank correlation coefficient**: A rank correlation type. For numeric fields, the system uses ranks rather than numeric values to estimate relationship strength. Thus, the Spearman coefficient equals -1 or 1 for any monotonic sequence.

In the table, select the series to analyze using checkboxes. For each field included in **Set&nbsp;1**, the component calculates correlation with the fields included in **Set&nbsp;2**.

> **Note:** When calculating the Pearson correlation coefficient, the system treats numeric data as *continuous* regardless of the input data type (continuous or discrete). If you provide *discrete text data*, the system follows the algorithm:
> 1. Sort the data alphabetically in ascending order.
> 2. Assign an ordinal number to each unique record.
> 3. Calculate the Pearson correlation coefficient for the resulting unique numbers.

**Read on:** [Factor Analysis Component](factor-analysis.md)

**See also:** [Multicollinearity](https://www.statisticshowto.com/multicollinearity/)