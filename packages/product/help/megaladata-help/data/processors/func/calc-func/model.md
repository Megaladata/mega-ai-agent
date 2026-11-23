---
description: Employ model functions such as auto-regression, moving average, and exponentially weighted moving average, in your calculator formulas. See the description of the functions and the arguments they use.
---
# Model Functions

## AutoRegression

`AutoRegression(C, A0, X{t}, A1, X{t-1} ...)`

* **C**: A constant.
* **A0**–**An**: Regression coefficients.
* **X(t)**–**X(t-n)**: Series values.

Use this function to build a user model of the following autoregression type:
`Prediction = C + A0 * X(t) + A1 * X(t-1) + ...`

## ExpMovingAverage

`ExpMovingAverage(X{t}, X{t-1} ...)`

* **Arguments**: Values of the numeric series.

Use this function to build a user model of the exponentially weighted moving average.

Unlike the simple moving average, the exponentially weighted moving average assigns more significant weights to the latest observations than to the previous ones. That is, the weighting for each older datum decreases exponentially.

The calculation uses this recurrence relation: `EMA(t) = a * X(t) + (1 - a) * EMA(t-1)`, where `EMA(k)` is the value of the exponentially weighted moving average at point *k*, while *a* is the smoothing factor; `a = 2 / (n + 1)`, where *n* is the window length.

## MovingAverage

`MovingAverage(X{t}, X{t-1} ...)`

* **Arguments**: Values of the numeric series.

Use this function to build a user model of a simple moving average in user models. The moving average calculation formula is as follows:

`MA = (X(t) + ... + X(t - n))/n`

**Read on:** [Statistical Functions](statistic.md)