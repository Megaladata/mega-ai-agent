---
description: Learn about the statistics calculated in Logistic Regression nodes (Akaike, Bayesian, Hannan-Quinn, p-value, coefficient of determination, and others). The node outputs these on the Summary port.
---
# Logistic Regression Summary

The following table lists the variables provided by the **Summary** port.

| Variable (Caption) | Description |
|:-------|:-------|
| **Total samples** | Total number of [samples](https://en.wikipedia.org/wiki/Sample_%28statistics%29) fed into the [model](https://en.wikipedia.org/wiki/Statistical_model) |
| **Total selected samples** | Number of samples used in the model |
| **Samples in the training set** | Number of samples used to train the model |
| **The root-mean-square error of the training set** | The [root-mean-square error](https://en.wikipedia.org/wiki/Root_mean_square_deviation) indicates the model's [accuracy](https://en.wikipedia.org/wiki/Accuracy_and_precision) on the training set. |
| **Percentage of classification errors of the training set** | Percentage of incorrectly assigned objects (observations or events) in a predefined class |
| **The average cross-entropy of the training set** | [Cross-entropy](https://en.wikipedia.org/wiki/Cross-entropy) provides a quantitative measure of the difference between two probability distributions. |
| **Model training cutoff** | Calculated value of the [regression](https://en.wikipedia.org/wiki/Regression_analysis) equation (ranging *from 0 to 1*) |
| **-2 log-likelihood** | A transformation of the [likelihood function](https://en.wikipedia.org/wiki/Likelihood_function) that indicates the [prior probability](https://en.wikipedia.org/wiki/Prior_probability) of the regression model parameter values for a given value of the [independent variable](https://en.wikipedia.org/wiki/Dependent_and_independent_variables) *x*. |
| **Coefficient of determination** | [McFadden's coefficient of determination](https://en.wikipedia.org/wiki/Pseudo-R-squared#McFadden's_R2) uses the log-likelihood to assess how well the regression model fits the actual data (ranges *from 0 to 1*). |
| **Adjusted coefficient of determination** | The [adjusted form of McFadden's coefficient of determination](https://en.wikipedia.org/wiki/Pseudo-R-squared#Adjusted) is useful for comparing models with different numbers of factors (ranges *from 0 to 1*). |
| **Chi-square** | A [chi-square statistic](https://en.wikipedia.org/wiki/Chi-squared_test) for the [likelihood-ratio test](https://en.wikipedia.org/wiki/Likelihood-ratio_test). |
| **Degrees of freedom for model** | Number of independent model variables |
| **Akaike information criterion** | Use the [Akaike information criterion](https://en.wikipedia.org/wiki/Akaike_information_criterion) to compare models with different numbers of parameters when you need to select the best set of explanatory variables. |
| **Akaike information criterion corrected** | Use this modified Akaike criterion for small samples, when the ratio of the number of samples to the number of model parameters falls *below 40*. |
| **Bayesian information criterion** | Another model selection criterion, based on the [likelihood function](https://en.wikipedia.org/wiki/Likelihood_function) and closely related to the Akaike information criterion |
| **Hannan–Quinn information criterion** | The [Hannan–Quinn information criterion](https://en.wikipedia.org/wiki/Hannan%E2%80%93Quinn_information_criterion) also uses the likelihood function and serves as an alternative to the Akaike and Bayesian criteria. |
| **Model *P*-value** | A statistic to assess the model's [significance](https://en.wikipedia.org/wiki/Statistical_significance). The smaller the *p*-value, the less likely the null hypothesis that there is no statistically significant relationship between the dependent and independent variables. The system calculates it from the likelihood-ratio statistic. |

**Read on:** [Logistic Regression Coefficients](coef-regression.md)