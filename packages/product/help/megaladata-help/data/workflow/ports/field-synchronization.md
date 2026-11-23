# Automapping of Fields

Some workflow nodes (for example, [Cross Table](../../processors/transformation/cross-table.md)) don't have a constant output data structure. The list of fields for these nodes can vary based on the input data.

Automapping handles data with a variant structure. During this process, automapping synchronizes the port's list of output fields (or variables) with the list of input fields. Unlike the **Auto link** command, the synchronization algorithm used in automapping can change the list of output fields/variables and add new links.

Automapping uses the following synchronization algorithm:

1. Restores previously configured links to input fields/variables (addressing "missing" or "incorrect" links caused by changes in the input data structure).  
2. Establishes links between unlinked input and output fields/variables based on matching [data types](../../data/datatype.md) and case-insensitive name matches.  
3. Deletes all optional output fields/variables that are not linked to input fields/variables. Required fields (such as those inherited when creating a derived node or those you manually added or changed) are not deleted.  
4. Adds new output fields/variables based on input /variables that still lack links after the previous steps.

This algorithm runs only once when you execute the ![](../../images/icons/toolbar-controls/sync-columns_default.svg)&nbsp;**Map columns** command, and continuously during node execution if the ![](../../images/icons/toolbar-controls/auto-sync-columns_default.svg)&nbsp;**Automapping** port configuration option is enabled (see the [Table Interface](./interface-table.md) and [Links Interface](./interface-relations.md) sections).

> **Note:** By default, the ![](../../images/icons/toolbar-controls/auto-sync-columns_default.svg)&nbsp;**Automapping** option is enabled for ports that receive table data.

Disabled automapping is visually indicated by a special circle icon in the middle of the port:

- ![ ](./../../images/icons/app/node/ports/inputs/table_inactive.svg), ![ ](./../../images/icons/app/node/ports/inputs/variable_inactive.svg), ![ ](./../../images/icons/app/node/ports/inputs/tree_inactive.svg)   — automapping on these ports is enabled
- ![ ](./../../images/icons/app/node/ports/inputs/table-no-autosync_inactive.svg), ![ ](./../../images/icons/app/node/ports/inputs/variable-no-autosync_inactive.svg), ![ ](./../../images/icons/app/node/ports/inputs/tree-no-autosync_inactive.svg) — ports with disabled automapping

**Read on:** [Links Interface](interface-relations.md)

