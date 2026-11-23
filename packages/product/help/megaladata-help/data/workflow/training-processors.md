# Node Training (Retraining)

Some components, such as [Clustering](../processors/datamining/clustering.md), [Self-Organising Network](../processors/datamining/self-organizing-network.md) and [Binning](../processors/preprocessing/quantization.md), use self-training algorithms. These nodes require initial training. Retraining might also be necessary if the model is no longer relevant or if new source data falls outside the range of the original training sample.

You can train or retrain nodes in the following ways:

* **Manually**: Perform the node retraining procedure during workflow configuration.
* **Auto**: Automatic retraining occurs during [batch processing](./batchlauncher.md).

The advantage of manual retraining is that you can control the model's retraining parameters and view the results. In contrast, the automatic method is much faster and is a good choice when the changes in the source data are trivial.

## Manual Training

Use manual training when creating or editing workflows. If you try to execute certain nodes without initial training, you'll see the following warning: "Model is not trained. Training of the node before its application is required."

To train or retrain a model, follow these steps:

1. Make sure the [activation mode](./setting-batch-processing-mode.md) settings allow for node training.
2. In the node's context menu, select ![](../images/icons/toolbar-controls/batch-mode_default.svg)&nbsp;**Retrain node**.

You can retrain all nested nodes of a [supernode](../processors/control/submodel.md) or [loop](../processors/control/cycle.md). To do this, follow the procedure above for the top-level node in the nesting hierarchy. If subordinate nodes use the default activation mode (where **Specified mode of node activation** is set to **Determined by the context of the current processing**), all subordinate (nested) nodes will be retrained.

**Example:** A supernode that performs iterative actions is subordinate to a **Loop** node. This supernode can also include a hierarchy of other supernodes and subnodes. Retraining the top-level **Loop** retrains all nested nodes and supernodes.

## Automatic Training

You can automatically train models during the batch processing of workflows. For each node, you can set one of the following execution options:

* The node isn't executed.
* The node is executed without retraining the model.
* The node is executed, and the model is retrained.

**Read on:** [Caching](caching.md)