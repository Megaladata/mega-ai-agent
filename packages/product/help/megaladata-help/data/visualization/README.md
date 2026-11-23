# ![ ](../images/icons/system_object_18/visualizer_default.svg)&nbsp;Visualizers

In Megaladata, *visualizers* are built-in tools that allow you to configure a convenient data display.

## Working with visualizers

To add a visualizer, click the ![Configure visualizers](../images/icons/controls/visualizer_notactive.svg)&nbsp;**Configure visualizers** button on a workflow node. 

In the window that opens, you will find a list of visualizers available for the node, represented as a tree on the left. In the main workspace, there will be a list of the node's output ports whose data can be visualized. Under a port's name, you'll see the **Add visualizer** area with a "plus" icon.

To add a visualizer, select it from the tree and click on the desired output port, or just drag it to the port. The visualizer's image will appear at the port, along with **Enter** and **Delete** buttons.

To remove a visualizer, click the ![Delete](./delete.svg)&nbsp;**Delete** button in the upper right corner of the visualizer.

> **Important**: Different visualizers are designed for different data ports. If a visualizer is not supported by the port, it will not be added. Some visualizers are component-specific and only appear in the list for certain nodes.

## Toolbar

The Visualizers page toolbar provides the following commands:
- **Rename** (<kbd>F2</kbd>): Rename the selected visualizer.
- **Cut** (<kbd>CTRL</kbd> + <kbd>X</kbd>): Select the visualizer for cutting.
- **Copy** (<kbd>CTRL</kbd> + <kbd>C</kbd>): Select the visualizer for copying.
- **Paste** (<kbd>CTRL</kbd> + <kbd>V</kbd>): Insert a copied or cut visualizer.
- **Clone**: Add a new visualizer, similar to the one selected.
- **Delete** (<kbd>Delete</kbd>): Remove the selected visualizer.
- **Delete all**: Remove all added visualizers.
- **Add to reports**: Generate a report based the selected visualizer

The **Cut** and **Copy** commands can be applied to multiple visualizers at once.

After selecting a visualizer or a group of visualizers, you can copy and paste them to the current node or a different node. If the destination node has multiple output ports, the **Paste** button will show a dropdown menu for selecting the specific port.

You can convert any visualizer into a *report*. Select the desired visualizer and click **Add to reports** on the toolbar or in the context menu. You can add the visualizer directly or place it within a report group, creating a new group if necessary. The visualizer will then be accessible in the **Reports** section of the **Navigation** pane. You can open it via the main menu or by using the **Show in reports** command that will appear in the visualizer's context menu. 

To configure a visualizer you added, click **Enter** and proceed to the wizard. You will find more information on setting up individual visualizers in their dedicated subsections.

## Available visualizers

### Table view visualizers

* ![Chart](../images/icons/view_types/chart_default.svg)&nbsp;[Chart](./chart/README.md): A graphical representation of data.
* ![Data Quality](./../images/icons/view_types/data-quality_default.svg)&nbsp;[Data Quality](./data-quality/README.md): Performs a comprehensive assessment of data quality for each field.
* ![Cube](../images/icons/view_types/cube_default.svg)&nbsp;[Cube](./cube/README.md): A multidimensional representation of data.
* ![Statistics](../images/icons/view_types/stat_default.svg)&nbsp;[Statistics](./statistics/README.md): Statistical indicators for the dataset fields.
* ![Table](../images/icons/view_types/browse_default.svg)&nbsp;[Table](./table/README.md): A tabular representation of data.

### Component-specific visualizers

* ![Duplicates and Contradictions](./../images/icons/components/duplicates_default.svg)&nbsp;[Duplicates and Contradictions](): Intended for viewing duplicate and contradictory records of the source dataset. Available for **Duplicate Detection** nodes.
* ![Coarse сlasses](../images/icons/view_types/coarseclasses_default.svg)&nbsp;[Coarse сlasses](./fine-classes/README.md): Represents the results of the optimal quantization procedure in the form of fine and coarse classes, a WoE chart, and [information values (IV)](https://www.rdocumentation.org/packages/scorecard/versions/0.4.4/topics/iv). Available for **Coarse Classes** nodes.
* ![Cluster Profiles](../images/icons/components/cluster-profiles_default.svg)&nbsp;[Cluster Profiles](./cluster-profiles/README.md): Various statistical indicators of clusters, the structure of clusters, and their comparison with each other. Available for **Clustering** and **EM Clustering** nodes.
* ![Linear Regression Report](./../images/icons/components/linear-regress_default.svg)&nbsp;[Linear Regression Report](./linear-regression/README.md) and ![Regression Report](./../images/icons/components/logregression_default.svg)&nbsp;[Regression Report](./regression/README.md): Statistical parameters and statistical testing results for regression models. Available for some regression nodes.
* ![Binary classification assessment](../images/icons/view_types/roc_default.svg)&nbsp;[Binary classification assessment](./binary-classification/README.md): Generates data series sets for chart construction. Defines optimal cutoffs and calculates classification assessments. Constructs histograms of the distribution of events and non-events in samples to obtain series points. Available for **Logistic Regression** nodes.

### Additional visualizers

There are also two specific visualizers for preliminary examination or control of data. These are unavailable in the standard **Configure visualizers** wizard:

* ![ ](../images/icons/toolbar-controls/show-fast-viewer_default.svg)&nbsp;[Quick view](./preview/quick-view.md): A representation of a node's output. Available on an active output port.
* ![ ](../images/icons/blank.svg)&nbsp;[Preview](./preview/preview.md): A data preview option available within the wizards of some nodes, such as **Calculator**, **Database** (import), or **JavaScript**.
