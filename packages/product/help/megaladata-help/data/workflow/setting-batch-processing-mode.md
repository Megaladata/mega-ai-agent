# Node Activation Mode

## Node activation options

* [Batch processing of workflows](#batch-processin-of-workflow)
* [Interactive workflow execution](#interactive-workflow-execution)

### Batch processing of workflows

You can set the following execution options for each node when running a batch process:

* Don't execute the node 
* Execute the node without retraining the model. 
* Execute the node and retrain the model.

To select one of these options for a node's behavior during batch processing, consider the following:

* The context in which you launch the workflow execution. In batch processing, the context includes the following launch parameters:

   * Launching the package with or without the **/Teach** parameter.
   * Launching the package with the **/Node** parameter.
      
* The node activation configuration of the [Supernode](../processors/control/submodel.md) or [Loop](../processors/control/cycle.md) that contains the node (if applicable).
* The activation mode set for the node itself.

> **Note:** For more detailed information on batch processing and the **/Teach** and **/Node** parameters, see [batch processing of workflows](./batchlauncher.md).

### Running nodes interactively

When editing (debugging) a workflow, you can run an individual node in one of two ways:

* Run the node without retraining the model.
* Run the node and retrain the model.

A node's behavior during an interactive run is determined by the following settings:

- **The execution command:** The command that initiates the execution of the node itself or the Supernode (Loop) that includes it. The available options are: 

   * **Retrain node**
   * **Run node**

- **The activation of a parent node:** If the node is inside a Supernode (Loop), its behavior is determined by the activation mode of that parent mode.

- **The node's activation mode:** If the node is not inside a Supernode (Loop), its behavior is determined by its own activation mode setting.

## Configuring node activation mode

### Valid modes of batch processing

This group of settings only applies to node activation in the batch mode.

* **Run the node and all its subnodes**: The checkbox defines whether the node will be activated in case of no-retraining batch workflow launch (without the **/Teach** parameter). Disable this mode to skip the node and all its subnodes during batch processing.
* **Retrain the node and all its subnodes**: The checkbox defines whether the node will be activated in case of batch launch with retraining (with the **/Teach** parameter set). Disable this checkbox, if you don't need the node and its subnodes to be retrained.

By default, both options are selected for new nodes.

## Specified mode of node activation

This setting determines if a node runs with or without retraining its model. It applies to both interactive and batch workflow executions.

Select one of the following options:

* **Always run**: The node is always executed without retraining the model. This setting overrides all other contexts such as the **Retrain node** command or the **/Teach** parameter.
* **Always retrain**: The node always runs and retrains the model. This setting also overrides all other contexts.
* **Determined by the context of current processing**: This setting is used by default. The node’s behavior (i.e., **Always run** or **Always retrain**) is determined by the execution context. The system checks the following factors in order of precedence:

1. **Parent node settings.** If the node is inside a supernode or loop, it inherits the execution mode from that parent node.

    > **Note:** If supernodes or loops are nested, the node inherits its setting from the outermost supernode (loop) in the hierarchy.

2. **The execution command.**

      **Interactive mode:** Behavior is determined by the command you use (**Retrain node** or **Run node**).

      **Batch mode:** Behavior is determined by the setting of the **/Teach** parameter.

## Batch processing execution logic

During batch processing, the system determines whether to run or retrain a node by checking its configuration. The logic follows the order of operations shown in the diagram:

![Node activation logic for batch processing](setting-batch-processing-mode-1.svg)

### Execution exceptions

A node might not execute during a batch run, even if its settings indicate it should, in the following situations:

* Another node is specified in the launch parameters. If you use the [/Node]((./batchlauncher.md)) parameter, only *the specified node and any preceding nodes* that generate its input data are executed. All other nodes are skipped.

* A preceding node fails to run. A node cannot be executed if the input data it depends on is not generated.

**Read on:** [Node Training (Retraining)](training-processors.md)