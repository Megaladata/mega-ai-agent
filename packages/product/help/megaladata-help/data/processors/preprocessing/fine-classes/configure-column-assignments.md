---
description: Configure column usage types in Megaladata's Coarse Classes component.
---
# Configure Column Usage Types

Set the following parameters:
* **Column usage type**:
  * **Not selected**: Select this to include the field in the output dataset unchanged, without using it in processing.
  * **Input**: Use the field's values as input values.
  * **Input (external binning)**: This option appears when you enable the **External quantization ranges** port. The node will use the provided external binning parameters to process the input values.
  * **Input (locked)**: This option appears after you run and train the **Coarse Classes** node for the first time. When you reconfigure or retrain a column, the node recalculates only statistics, while keeping coarse class binning unchanged for all columns. Use this option if you do not plan to change coarse class binning with new data.
  * **Output**: Use the field values as output (*target*) values.
* **Settings for continuous input fields**:
  * **Prequanting**: Set the initial number of binning intervals of an input feature (*fine classes*) from which the node forms coarse classes according to the configured parameters. Use this option if the continuous field has a large number of unique values.
  * **Include upper interval bounds**: Include the upper boundary value in the current interval. If you clear this option, the system will treat the upper boundary value as belonging to the next interval (serving as its lower boundary). For example:
    - Range when enabled: `10 <...≤ 20`
    - Range when disabled: `10 ≤...< 20`.
  * **Bin count**: The number of prequanting intervals.
* **Settings for discrete input fields**:
  * **Fine classes as binning**: Use unique values (*fine classes*) as *coarse classes*. That is, the number of coarse classes will be equal to the number of unique input values; the maximum possible number is `1000`.
* **Configure output field**:
  * **Custom "event" value**: Select the binary target value to treat as the event. The choice depends on the goal and logic of the task. Setting this parameter affects the interpretation of the [WoE analysis](https://medium.com/@fabitortorelli/weight-of-evidence-woe-explained-721f213a97d3). We recommend always assigning a rare class as an event. (The wizard suggests this option by default.)
* **Configure external binning**:
  * **External binning identifier**: This option appears when you select **Input (external binning)**. Enable it to make the node use binning from the table rather than calculate it from the current data (see [Configure external binning](./configure-external-binning.md)).
* **Algorithm settings**:
  * **Minimum class rate, %**: Specify the ratio of observations for which the input feature value falls into a class to the total number of observations in the source dataset (class weight). The default value is&nbsp;`5`%. The node does not allow classes with a weight smaller than the specified value. A low class weight indicates low significance and suggests merging it with another class.
  * **Maximum class count**: Specify the maximum allowed number of classes the node creates for a column. The default value is&nbsp;`5`. When changing this value, note that *a large number of classes reduces their weight, while a small number reduces the information value.* The number of classes formed can be smaller than the specified value due to the class-weight constraint.
  * **Uniformity**: Select how to split the range of input feature values into classes (intervals). The default value is `0`, ensuring a maximum information value. The available range is from `0` to `1`. When set to `1`, each class will contain approximately the same number of observations. Thus, in the first case, the feature significance increases, while in the second case, coarse classes become more interpretable.

**Read on:** [Configure Coarse Classes](configuring-the-finite-classes.md)