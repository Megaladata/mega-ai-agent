# Output Data Set Structure

The following fields are added in the output data set to the input one:

* ![](../../../images/icons/data-types/string_default.svg) **Class | Prediction**: identification of the predicted class.

* ![](../../../images/icons/data-types/integer_default.svg) **Class ID | Prediction**: identifier of the predicted class.

* ![](../../../images/icons/data-types/string_default.svg) **Class | Fact**: the actual fact. The output field of the training data set (this field is displayed only when neural network training).

* ![](../../../images/icons/data-types/integer_default.svg) **Class ID| Fact**: the identifier assigned to the actual class (this field is displayed only when neural network training).

* ![](../../../images/icons/data-types/float_default.svg) **Posterior probability**: the probability of the current parameters set assignment to the predicted class calculated according to the results of processing.

* ![](../../../images/icons/data-types/float_default.svg) **Gini index**: as only the class with the highest probability is displayed in the output data set, the Gini index is calculated to estimate the accuracy of the class assignment by the classifier according to the posterior probabilities. This index shows the nonuniformity degree of distribution of assignment probabilities of different classes to the input parameters set. If classification is stable, and the "winning" class has probability significantly higher than probabilities of other classes, the Gini index will be close to 1. In the reverse situation, when all probabilities are more or less the same, and the best class is selected as a mere formality by the highest value, the Gini index will be close to 0, and, in this case, the classification will be considered to be instable.
