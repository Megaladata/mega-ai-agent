---
description: Employ Megaladata functions specific to Calculator (Tree), such as ItemCount, ItemIndex, Location, DisplayName, and Parent, in your calculator formulas. Read through the description of the functions and the arguments they use.
---
# Data Tree

Use the following functions in **Calculator (Tree)** nodes.

## ItemCount

`ItemCount()`

The function takes no arguments. Returns the number of item nodes in the array.

## ItemIndex

`ItemIndex()`

The function takes no arguments. Returns the index of an expression within an array. Numbering starts at 0.

## Location

`Location()`

The function takes no arguments. Returns the path from the tree root to the expression node.

## Parent

`Parent()`

The function takes no arguments. Returns the parent node of the expression's current node.

## DisplayName

`DisplayName(["NodePath"])`

* **NodePath**: A `string` value. The path to a node, a variable, or an expression. This parameter is optional.

The function returns the caption (display name) for a node path, an expression path, or a variable name. If you call the function with no arguments, it returns the caption of the expression currently being calculated.

Syntax example: `DisplayName("Root.Node1")`

**Read on:** [Other Functions](other.md)