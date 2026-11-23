# Normalization

**Normalization of field values** means the data transformation by the kind that is the most suitable one for algorithm processing.

Normalization configuration is available as a separate page in the following wizards:
* [Linear regression](../datamining/linear-regression/README.md).
* [Logistic regression](../datamining/logistic-regression/README.md).
* [Neural network (classification)](../datamining/neural-network-classification.md).
* [Neural network (regression)](../datamining/neural-network-regression.md).
* [Clustering](../datamining/clustering.md).
* [EM clustering](../datamining/em-clustering.md).
* [ARIMAX](../datamining/arimax.md).
* [Self-organizing networks](../datamining/self-organizing-network.md).

## Normalization Settings

* **Field**: data set field.
* **Normalizer**: the selected field normalizer.
* **Multiplier**; the parameter that enables to define column significance while model training. Zero value means that the column does not take part in the model training process. Higher value as compared with other fields increases a chance that the column will be included into the final model.
* **Irremovable**: the indicator of the irremovable field. It cannot be removed in the factor selection process. This factor will be always included into the model.

Different parameters of the normalization settings are used by the listed algorithms:

| **Component** | **Field** | **Normalizer** | **Multiplier** | **Irremovable** |
| :--------------------- | :------------: | :------------: | :------------: |:------------: |
| Linear regression | • | • | • | • |
| Logistic regression | • | • | • | • |
| Neural network (classification) | • | • |  |  |
| Neural network (regression) | • | • |  |  |
| Clustering | • | • |  |  |
| EM Clustering | • | • |  |   |
| ARIMAX | • | • |  |   |
| Self-organizing networks | • | • |  | &nbsp; |