---
description: Explore the regression coefficients used in Megaladata's Logistic Regression component.
---
# Logistic Regression Coefficients

The table below describes the [coefficients](https://www.geeksforgeeks.org/maths/regression-coefficients/) displayed on the **Regression model coefficients** output port of **Logistic Regression** nodes:


| Field |Description |
| ----- |----------- |
| **Input field names** | List of input field names. |
| **Input field captions** | List of input field captions (display names). |
| **Unique values** | List of unique field values. |
| **Coefficients** | Estimates of coefficient values for independent variables. |
| **Standard deviation** | Standard error of the coefficient estimate. |
| **[Wald statistic](https://en.wikipedia.org/wiki/Wald_test)** | Wald test statistic for assessing variable significance. |
| **[*P*-value](https://en.wikipedia.org/wiki/P-value)** | Variable significance estimate. The smaller the *p*-value, the less likely the null hypothesis (suggesting that the coefficient of the independent variable equals 0). The node calculates it from the *z*-statistic. |
| **[Odds ratio](https://en.wikipedia.org/wiki/Odds_ratio)**    | Ratio of the odds of an event to the odds of a non-event for each one-unit increase in the variable, assuming that all other variables remain constant. |
| **CI lower bound of odds ratio** | Lower bound of the [confidence interval](https://en.wikipedia.org/wiki/Confidence_interval) for the odds ratio. |
| **CI upper bound of odds ratio** | Upper bound of the confidence interval for the odds ratio. |

**Read on:** [Neural Net (Classification)](../neural-network-classification.md)
