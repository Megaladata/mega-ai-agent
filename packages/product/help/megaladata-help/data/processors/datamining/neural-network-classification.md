# ![ ](../../images/icons/components/classifierneuralnet_default.svg) Neural Network (Classification)

It handles the task of **classification**: the **neural network** in the output data set correlates a set of input parameters (independent variables) with one of the classes known in advance:

**{** P(1), P(2), P(3) ... P(n) **}** => Class(i) where P(n) — input parameter, Class(i) — one of the classes known in advance.

Before classification, it is required to train the algorithm using the training data set, namely, the training sample. Each row of such sample contains the following data:

* a set of input parameters in the fields marked as the **input** ones;
* class identification mapping this set in the only **output** field.

Thus, the list of classes is set by the training data set in the process of the neural network training, and it cannot be changed/reconsidered in the classification process.

Technically, the training consists in determination of *weights — coefficients of links between neurons*. In the process of training, the neural network enables to detect complex dependences between input and output parameters, and also to perform generalization. It means that on condition of the successful training, the network can return the correct result based on the data that was absent in the training sample, and also incomplete and/or "noisy", partially distorted data. The Quasi-Newton [Broyden — Fletcher — Goldfarb — Shanno method](https://en.wikipedia.org/wiki/Broyden%E2%80%93Fletcher%E2%80%93Goldfarb%E2%80%93Shanno_algorithm#:~:text=In%20numerical%20optimization%2C%20the%20Broyden,the%20gradient%20with%20curvature%20information.) is used for training with limited use of L-BFGS memory.

Only the field with discrete [data kind](../../data/datatype.md) can be the **output** one in the classification task (as opposed to the [regression task](../../processors/datamining/neural-network-regression.md)). Data kind of input fields is not regulated, they can be both continuous and discrete.

----

**Note:** One input will be created for each continuous parameter in the neural network structure, whereas each discrete one will be provided with the inputs the number of which will comply with the number of different unique values of this parameter.

----

## Ports

### Input

* ![ ](../../images/icons/app/node/ports/inputs/table_inactive.svg) — **Input data source** (data table).

#### Requirements to the Received Data

The input data set fields that will be used as the **input** or **output** ones, must not contain null values. If this requirement is not met, error message will appear when node activating.

### Output

* ![ ](../../images/icons/app/node/ports/outputs/table_inactive.svg) — **Neural network output** (data table). Also refer to [output data set structure](./neural-network-classification/output-set.md).
* ![ ](../../images/icons/app/node/ports/outputs/variable_inactive.svg) — **Model quality indicators**.

## Wizard

### Step 1. Usage Type of Input Columns

It is required to set the [usage type](../../data/datasetfieldoptions.md) of the input data set fields at the first stage.
It is required to select one of the following usage types for each of the fields:

* ![ ](../../images/icons/usage-types/active_default.svg) **Input**: the field contains the values of one of the input parameters.
* ![ ](../../images/icons/usage-types/predicted_default.svg) **Output**: the field contains the class values.
* ![ ](../../images/icons/usage-types/unspecified_default.svg) **Unused**: the field is not included into processing. It is set for other fields by default.

### Step 2. Configure Neural Network Parameters

#### Neural Network Structure

* Number of hidden layers is selected from the list:
   * No hidden layers.
   * One hidden layer (used by default).
   * Two hidden layers.
* Number of neurons in the first hidden layer — integer >= 1 (by default = 10).
* Number of neurons in the second hidden layer — integer >= 1 (by default = 10).

#### Training Parameters

* Number of restarts: number of attempts of the neural network training (using one and the same set) based on the random initial values of the neural network weights. Upon completion of all restarts, it is required to select the network that provides the least root-mean-square error of the training set. Integer >= 1 (by default = 10).
* Decay parameter: the degree of the network weights dependence from each other. The higher this dependence, the stronger impact exerts one input parameter on the other ones. The decay enables to decrease the effective number of the model degrees of freedom, thereby avoiding overfitting. The following options are available:
   * None (0).
   * Very weak (0.00001).
   * Weak (0.001). It is used by default.
   * Mean (0.1).
   * Strong (100).
   * Very strong (10000).
* Continue training: selection of this checkbox enables to start the model overfitting not from the random values of the neural network weights, but from the ones obtained during the last training. In this case, the "Number of restarts" parameter is ignored.

#### Stop Criteria

The network is trained in the iterative manner. The whole training data set is read for each iteration, and the neural network weights are changed. This process continues until the relative weights changes are less than the set threshold, or iteration count exceeds the set value.

* Minimum weight change threshold: if the relative change of the weights vector norm is less than the threshold at another training step, the training stops. By default = 0.01.
* Maximum number of epochs means the maximum count of the algorithm training iterations. This parameter is disabled by default. If it is required to limit the training process in time, in this case, it will be stopped upon the set number of epochs even if the training has not reached the optimal point, namely, the minimum weight change threshold has not been reached yet.

### Step 3. Configure Auto Selection of Neural Network Parameters

Three structure related parameters can be selected for the neural network:

* Number of hidden layers (0, 1 or 2).
* Number of neurons in each hidden layer.
* Decay degree enables to adjust the model stiffness.

#### Common Parameters

* **Structure autofit** provides the auto selection of the Neural Network structure:
   * **Start with the specified structure**: usage of the values set on the page of the Neural Network parameters configuration as the initial parameters (refer to Step 2).
* **Decay degree autofit** provides the auto selection of the Neural Network decay degree.
   * **Start with the specified decay degree**: usage of the value set on the page of the Neural Network parameters configuration as the initial *Decay degree*.

> **Note:** If it is required to select parameters for the large input volumes or complex models, it is possible to enable only the structure selection, or only decay degree reducing the time spent on training.

#### Sampling Parameters

To speed up the autofit process, it is required to set the subsample in which it will be performed:

* **Use a subset of the training set** enables to use a subsample of the **training set** for autofit.
   * **Percent sample size**: the size of the training set subsample.
   * **Maximum sample size**: the maximum size of the training set subsample.

#### Auto Stop Criteria

The auto selection process is stopped by default if it is not possible to find better parameters as compared with the detected ones. To limit the operation time, at the same time it is possible to limit also the number of autofit stages and autofit time.

* **Autofit stages not more**: the maximum number of the algorithm steps (0 — restrictions are disabled).
* **Autofit time not more (s)**: the maximum algorithm operation time (0 — restriction is disabled).

> **Note:** In the course of the work it is required to take into account that practically both restrictions can be insignificantly exceeded when using subsample for autofit, as the best full set Neural Network will be trained at the last unrestricted stage.

The optimizer is stopped in some specific cases if, from a theoretical standpoint, the best result is reached. It is the root-mean-square error of the training set equal to 0 both for regression networks, and for the classifier.

By default, *Stop at zero classification error* is also enabled for the classifier:

* **Stop at zero classification error** enables to stop autofit when reaching zero classification error.

> **Note:** *Stop at zero classification error* option can be disabled because the correct classification of all examples does not always mean the best structure of the Neural Network, namely, the optimizer can be allowed to select the network with the best generalization ability (for example, with the least number of neurons or more regularizable) but not necessarily with zero classification error.

#### Optimization Strategy

The root-mean-square error of the training set is a target function for the optimizer. Under these circumstances, to take into account the cases when several networks provide the results comparable in accuracy, in order to select the network with the simplest structure, the target function value is additionally fined by the multiplier (1+1e-8) slightly different from 1 for each hidden neuron.

The following optimization strategy is used:

* If it is required to select only the decay degree for the set structure:
   1. If the starting point is not set, the decay degree is selected using the "golden section search" method, otherwise, the "hill climbing" method is used.
* If it is required to select only the structure without changing the decay degree.
   1. If the initial structure is not set, it is selected in two stages. First, the number of hidden layers is selected (0, 1 or 2), then, the size of hidden layers is approximately selected using the "golden section search" method if the previous stage result is not equl to 0. In this case, the number of neurons for 2 hidden layers becomes the same at this stage.
   2. The structure is selected for all three parameters at once (number of layers, number of neurons) using the "hill climbing" method from the set or selected starting point.
* If autofit of structure and decay is required:
   1. The structure is selected as in the previous clause. In this case, if the initial decay value is set, it can be used, otherwise, the decay option is disabled.
   2. If the initial decay value is not set, it is selected using the "golden section search" method.
   3. The final autofit stage is implemented using the "hill climbing" method for all four parameters.

The flowgraph (transition graph) of the implemented autofit strategy is shown on the figure below.

![Auto Selection Algorithm](./autofit-neural-network-1.svg)