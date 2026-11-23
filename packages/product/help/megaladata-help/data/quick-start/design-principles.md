---
description: Project in Megaladata, its definition and structure. Project design methodology and principles of top-down design explained. Reusing data analysis algorithms.
---
# Project Design Principles

A *project* in Megaladata is a set of workflows, files, data sources, and other elements put together to solve a particular analytical problem.

A project can include multiple packages due to a reference mechanism, which allows packages share their objects to one another.

## Structural approach

Project design is based on a *structural approach*, where algorithms are represented by a hierarchy of blocks.

Each block, at its hierarchy level, can be seen as a black box that solves a specific subtask. You can change the subtask-solving method within the black box, but the project will still function and solve the intended problem.

A project designed this way has a clear and readable structure. Overall, this allows you to start and support complex projects, as well as delegate individual subtasks. 

A characteristic feature of this approach is "top-down" design: moving from general problem statement to defining separate subtasks. At the first level, the designer defines the solution of a particular problem and divides it into individual subtasks. At the second level, these subtasks are described, formulating the elements of the next hierarchy level.

Thus, the project’s functions become more and more detailed at each step. This process continues until the designer reaches the subtasks which have obvious solving algorithms.

## Reusable algorithms

Designing dedicated blocks to solve independent subtasks allows for reusing these blocks later for similar problems. Developing the idea of reusable algorithms further, we offer the opportunity to create libraries containing universal functions.

In Megaladata Studio, creating such functions is possible in the form of *derived components*. Having created a derived component for [ABC analysis](https://github.com/Megaladata/starter-kit/blob/main/docs/abc-analysis.md), you can apply it to product segmentation and to customer base segmentation tasks. A subtask solved by an address-checking component may be employed in data cleaning and scoring.

The derived components employ *inheritance*. An advantage of this mechanism is that the derived component created by the user can be modified in one location only—in the library of functions. The changes made there will automatically apply to all the workflows where the component is used.

However, it’s not always possible to employ a universal component into a specific workflow without the need to change it. At the same time, changing it in the function library is unacceptable, as inheritance might cause errors in all the workflows that use the component.

A solution to this is an *override mechanism*, which allows you to modify a derived component only in the current workflow. In the function library, the derived component will remain unchanged.

## Decomposition

A project’s structure can be represented hierarchically:

* The *project* can consist of multiple interconnected *packages* due to the reference mechanism, which allows packages to share their objects.
* At the first decomposition level, the *package* consists of *modules*. 
* A *module* in itself doesn’t contain data processing nodes, but rather, provides a space for *workflows* and *[connections](./../integration/connections/README.md)* to various data sources.
* A *workflow* contains a sequence of data processing *nodes*. The workflow’s functionality is as follows:
   * Contains subroutines in form of [supernodes](./../processors/control/submodel.md).
   * Receives data from the nodes of other workflows and packages through [reference nodes](./../processors/control/unit-link.md).
   * Applies settings and trained models from other workflows’ and packages’ nodes through the [node execution](./../processors/control/execute-node.md) mechanism.
   * Employs ready-made data processing algorithms created in other workflows and packages, in form of [derived components](./../workflow/derived-component.md).
* A *supernode* includes other nodes, offering a dedicated space for the implementation of custom processing algorithms. In a workflow, the supernode looks as a node with user-set input and output ports. It can contain a hierarchy of nesting supernodes. A supernode can be converted into a derived component.

**Read on:** [Integration with Databases](./database.md)