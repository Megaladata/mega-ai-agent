---
description: Autocorrelation component in Megaladata. Lag, ACF, PACF, Error, and Significance. Configuration wizard.
---

# ![ ](./../../images/icons/components/autocorrelation_default.svg)&nbsp;Autocorrelation

## Description

In mathematical statistics, [autocorrelation](https://en.wikipedia.org/wiki/Autocorrelation) describes the degree of statistical relationship between elements of a single time series. Specifically, it calculates the correlation between a time series and a shifted copy of itself by one or more time steps. Use this component to calculate autocorrelation for a time series by selecting the lag count.

%spoiler%Example:%spoiler%

Source table:

 | Day of week | Date | Tickets sold, thousand units |
 | :----------- | :---- | ---------------------------------: |
 | Mon | 21.08.2017 | 6 |
 | Tue | 22.08.2017 | 8 |
 | Wed | 23.08.2017 | 13 |
 | Thu | 24.08.2017 | 10 |
 | Fri | 25.08.2017 | 19 |
 | Sat | 26.08.2017 | 24 |
 | Sun | 27.08.2017 | 22 |
 | Mon | 28.08.2017 | 7 |
 | Tue | 29.08.2017 | 6 |
 | Wed | 30.08.2017 | 10 |
 | Thu | 31.08.2017 | 15 |
 | Fri | 01.09.2017 | 17 |
 | Sat | 02.09.2017 | 26 |
 | Sun | 03.09.2017 | 24 |

In this example, autocorrelation analysis is applied to the **Tickets sold, thousand units** field. In the input port settings, we set the ![ ](./../../images/icons/usage-types/active_default.svg)&nbsp;**Used** usage type for this field, and set the **Lag count** parameter in the configuration wizard to `10`.

Output table:

 | Lag | ACF | Error | Significance |
 | ------: | ------: | ------------: | :-------------------- |
 | 0 | 1.00 | 0.00 | True |
 | 1 | 0.51 | 0.27 | True |
 | 2 | -0.09 | 0.33 | False |
 | 3 | -0.38 | 0.33 | True |
 | 4 | -0.46 | 0.36 | True |
 | 5 | -0.36 | 0.40 | False |
 | 6 | 0.09 | 0.42 | False |
 | 7 | 0.46 | 0.42 | True |
 | 8 | 0.34 | 0.46 | False |
 | 9 | 0.03 | 0.48 | False |

%/spoiler%

## Ports

### Input

* ![ ](./../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Input data source**: A data table. In the settings for this port, set the ![ ](./../../images/icons/usage-types/active_default.svg)&nbsp;**Used** usage type for the fields for which you want to analyse. Use only numeric fields.

### Output

* ![ ](./../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Output dataset**: The result table providing the  following columns:
  * Required fields:
    * **Lag**: The number of time steps the component shifts the original series relative to its copy.
    * **ACF**: Autocorrelation coefficients for each lag.
    * **Error**: The component calculates standard errors for the correlation coefficients in this lag range.
    * **Significance**: Shows whether correlation exists at this lag.
  * Optional fields:
    * **PACF**: Partial autocorrelation function coefficients. Enable the corresponding option in the configuration wizard to add this field.

## Configuration wizard

Configure the following three settings:

* **Lag count**: Set the maximum shift (lag) of the original series relative to its copy. The component calculates the autocorrelation coefficient for each lag. **Note:** The lag count cannot exceed the number of rows in the source table.
* **ACF calculation domain**:
  * **Time**: Use this for small lag counts.
  * **Frequency**: Use this for large lag counts to speed up calculation.
  * **Auto**: The component selects the calculation domain based on the lag count.
* **Calculate PACF**: Enable this option to calculate the partial autocorrelation function. This excludes correlation dependence between observations within lags. At each lag, the partial autocorrelation function differs from the ordinary autocorrelation function by removing autocorrelations at smaller time lags. As a result, it characterises autocorrelation dependencies within the time series more precisely.

**Read on:** [Duplicates and Inconsistencies Component](./duplicates.md)