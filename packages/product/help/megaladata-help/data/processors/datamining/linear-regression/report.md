# Report

The variables provided by the *Summary* port are listed in the table:

| Variable (Caption) | Description |
|:-------|:-------|
| Total samples | Total number of the **samples** supplied to the **model** input |
| Total selected samples | Number of the samples used in the model |
| Samples in the **training set**| Number of the samples which are used for the model training |
| **Determination coefficient**| Value of link between variables of regression model (changes from 0 to 1) |
| **Adjusted determination coefficient**| Value of link between variables of regression model (changes from 0 to 1) It differs from not adjusted determination coefficient by the fact that the adjusted determination coefficient can be decreased when entering the variables that do not have considerable impact on the **dependent variable** into the regression model. |
| **Number of the model degrees of freedom** | Number of independently varied values of **indicator**|
| **Akaike information criterion** | The criterion is used for comparison of the models with different number of parameters when it is required to select the best set of explicative variables |
| **Akaike information criterion corrected** | The modified Akaike criterion used for the small **samples** when ratio of the number of the samples in it to the number of the model parameters is less than 40 |
| **Bayesian information criterion** | The criterion is based on use of **likelihood function**, and it is closely connected with the Akaike information criterion |
| **Hannan-Quinn information criterion** | Alongside with the Akaike and Bayesian criteria, it is specified in the results of assessment of the models with discrete and limited dependent variables |
| **Model P-value** | Assessment of the model **accuracy**. It is probability of the fact that the test statistics value of the used criterion calculated for a sample will exceed the set P-value |