---
description: Learn how to use the Factor Analysis component in Megaladata. Reduce factor space dimensionality, manage interdependent factors, and explore the principal component method. Configuration wizard explained.
---
# ![ ](./../../images/icons/components/factor-analysis_default.svg)&nbsp;Factor Analysis

The **Factor Analysis** component reduces the dimensionality of a factor space through analyzing correlated input factors. It selects factors that provide a comprehensive overview of an object's properties from a set of measured features.

To achieve this, the component generates new indicators from linear combinations of the original factors. These new indicators capture most of the total variability in the input data, preserving the majority of the source information.

Using [principal component analysis (PCA)](https://en.wikipedia.org/wiki/Principal_component_analysis), the **Factor Analysis** node implements the following algorithm:
- Establish a new orthogonal reference frame in the observation space.
- Identify the direction of the widest data scatter as the first principal component.
- Ensure each subsequent component maximizes data scatter while remaining orthogonal to the previous ones.

%spoiler%Example%spoiler%

In this example, we perform factor analysis using a table that contains statistical data by region:

Source table:

| Region | Population (thousand people) | Urban population, % | Employed in economy (thousand people) | Income per person (USD/month) |
| :-------- | --------: | --------: | --------: | --------: |
| 1 | 1269 | 58.4 | 532.4 | 1187.1 |
| 2 | 1531 | 64.6 | 674.5 | 936.8 |
| 3 | 4358 | 67.6 | 1811.8 | 1033.6 |
| 4 | 1259 | 62.4 | 439.5 | 472.9 |
| 5 | 72 | 67.9 | 33.8 | 963.7 |

To apply factor analysis to the source table, we create a  **Factor Analysis** node from the corresponding component. In the input port settings, we set the ![ ](../../images/icons/usage-types/active_default.svg)&nbsp;**Used** usage type for the **Population (thousand people)**, **Urban population, %**, **Employed in economy (thousand people)**, and **Income per person (USD/month)** columns.

In the configuration wizard, we set the **Significance criterion** to **By own value** with the **Eigenvalue threshold** set to 1. Set **Rotation type** to **No rotation**. Then, we enable **Limit output factors number**, and set the number of output factors to `2`.

Factors:

| Factor1 | Factor2 | Region | Population (thousand people) | Urban population, % | Employed in economy (thousand people) | Income per person (USD/month) |
| -------------: | -------------: | :------------ | ------------------------------------: | ---------------------------------------------------: | ------------------------------------------------------: | ----------------------------------------------------: |
| -0.40 | -1.87 | 1 | 1269 | 58.4 | 532.4 | 1187.1 |
| -0.04 | 0.02 | 2 | 1531 | 64.6 | 674.5 | 936.8 |
| 1.93 | 0.23 | 3 | 4358 | 67.6 | 1811.8 | 1033.6 |
| -0.71 | 1.06 | 4 | 1259 | 62.4 | 439.5 | 472.9 |
| -0.78 | 0.55 | 5 | 72 | 67.9 | 33.8 | 963.7 |

Factor loadings:

| Caption | Factor1 | Factor2 |
| :---------- | -------------: | -------------: |
| Population (thousand people) | 0.97 | 0.01 |
| Urban population share, % | 0.41 | 0.67 |
| Employed in economy (thousand people) | 0.98 | -0.03 |
| Income per person (USD/month) | 0.33 | -0.77 |

As a result, based on the existing relationship between factors (correlation), the dimensionality of the factor space of the source table is reduced from 4 to 2.

%/spoiler%

## Ports

### Input

* ![ ](./../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Input data source**: A data table. Mark fields as ![ ](./../../images/icons/usage-types/active_default.svg)&nbsp;**Used** in the port settings if their data requires factor analysis.

### Output

* ![ ](./../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Factors**: The source table with added factor fields.
* ![ ](./../../images/icons/app/node/ports/outputs/table_inactive.svg)&nbsp;**Factor loadings**: Provides correlation coefficients between the source features (used fields) and the factors identified during analysis. These coefficients show how much each feature contributes to the new factor.

## Configuration wizard

* **Criteria for factor significance**:
  * **By eigenvalue**: Select factors with eigenvalues *≥ 1*. Factors with eigenvalues < 1 contribute minimally to the result.
  * **By variance**: Select factors that explain *70–75%* of the total variance (or up to 85–90% in some cases).
  * **Set the factor number**: Manually select the number of significant factors.

Specify the value of each criterion in the field to the right of the corresponding radio button.

* **Final decision method**
  * **No rotation**: Retain the original factors from the PCA method.
  * **Varimax**: *Recommended for high interpretability*. Simplify the description of each factor by:
    - Maximizing loadings for a small number of variables per factor.
    - Minimizing loadings for unrelated variables.
  * **Quartimax**: Simplify the description of each variable by reducing the number of factors associated with it.
* **Limit output factors number**:  Enable this checkbox to set a maximum number of output factors in the corresponding field.

**Read on:** [Preprocessing](../preprocessing/README.md)