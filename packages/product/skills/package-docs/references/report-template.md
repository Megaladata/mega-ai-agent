# Report template (AI Report)

Final user-facing Markdown must match this outline. Handler names in the prose
use the English component captions (Calculator, Text File, Supernode, Reference
Node).

```markdown
AI Report service version: `1.0`

# Package report «<name.mgp>» (<YYYY-MM-DD HH:MM:SS>)

## Package overview «<name.mgp>»

* **Platform version**: `<ApplicationVersion>`

### Package description

> <Confirmed purpose and composition of the package. If the purpose is unknown:
> "The business purpose of the package is not specified", then facts about the composition and links.>

### External package references

* No references to external packages
  <!-- or a bullet list of referenced package names -->

### Package statistics

* **Module count**: `N`
* **Total notes**: `N`
* **Total nodes**: `N`
* **Total supernodes**: `N`
* **Total programming nodes**: `N`
* **Total reference nodes**: `N`
* **Total derived nodes**: `N`

### Module list

* Module 1. «…»

## Module 1. «…»

### Module description

> <prose>

**Overall structure:**
<Confirmed nodes and links; do not attribute unknown settings or results to them.>

**Supernode descriptions:**

1. **Name:**
   * **Input:** …
   * **Calculation:** / **Processing:** …
   * **Output:** …

### Module statistics

* **Scenario nesting depth**: `N`
* **Note count**: `N`
* **Node count**: `N`
* **Supernode count**: `N`
* **Programming node count**: `N`
* **Reference node count**: `N`
* **Derived node count**: `N`
```

The references section covers only `external_references`. For example,
`FileName: data.mgd` is a file dependency even when the reference list is
empty. Mention it in the package or module description; do not replace the
reference list with a general claim of "no external dependencies".

In the module description, distinguish a link from a completed calculation.
For example, when Text File is linked to Calculator and the Calculator
settings are empty: "Text File is configured to import `data.mgd`; its output
is linked to the Calculator input. Calculator is intended to compute fields,
but the formulas are not specified in the package". The name "Demo" by itself
does not confirm a demonstration purpose; in that case the module description
starts from its composition, not from an invented goal.

Do **not** include in the final report:

- a `Model used:` line (omit it even if the model name is known)
- node inventory tables
- visualizer lists
- Engine / settings attribute dumps
- the Help `Sources:` section
- GUIDs in prose
