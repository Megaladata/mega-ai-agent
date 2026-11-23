---
description: Working with excluded fields in Megaladata.
---

# Excluded Fields

Remove fields from a dataset without disrupting [*automapping*](field-synchronization.md) using the **Add to excluded** command.

> **Note:** The **Add to excluded** option is available only in the *output port* configuration wizard. If all fields are *required* (impossible to exclude; shown in bold), the wizard does not display the **Add to excluded** UI elements.

## Specifics

* The list shows excluded fields in italic in a separate **Excluded** group.
* In the **Excluded** group, you can change the field order and remove fields from the group.
* When you select an excluded field, the system highlights the matching input field.
* You cannot add a missing or lost field to the **Excluded** group.
* When you run **Auto Link**, the system does not link excluded input fields.
* The system deletes an output field when you add the following to the **Excluded** group:
  * The output field itself
  * An input field linked to that output field
  
You cannot add the following to the **Excluded** group:
* A required input field or an output field linked to a required input field
* An inherited output field or an input field linked to an inherited output field

A *required field* is a field added by the node algorithm, or a field whose parameters you overrode.

An *inherited field is a field in a [derived component](./../../workflow/derived-component.md) inherited from the base node.