# Intermediate decision file, format 3

This is an internal file, not the user report. Format 2 is rejected: it does not separate evidence from recommendation targets. Do not convert it automatically and do not guess scope or targets from text or evidence. Arbitrary score, algorithm, and agent_score are forbidden. Decisions are written after reading the whole package, using the [rules](rubric.md).

## Operator data

`inspect` returns the source path, SHA256, and bytes, plus own modules, scopes, nodes, view_nodes, notes, variables, links, relations, coverage, declared_references, and `calculated`. Calculated has a separate package and modules[].criteria. Each direction provides algorithm (a Decimal string or null), metrics, forced, and limitations. Those are operator results, not fields for the agent to fill. `report` reads the source again and recalculates them.

`view_nodes` holds visualizers from `ModelViews` with evidence addresses. They are not counted as scenario nodes. In `declared_references`, `package_guid` and `package_name` describe the target package from `Item/Name`. The order of `modules` follows the package index when it contains a module list.

A source-bound module id is the exact string `Unit.xml#/Unit` with the ZIP member name. The readable name and GUID are refined by the neighboring Info.xml. PackageInfo and References contain only limited metadata; HintPath is shown as a safe basename and is not opened. An external BasePackageGuid is not linked to an own module. Catalogues and nested ModelUnit entries are separate; raw inherited records and deletions do not prove an active model. A materialized Guid may be counted, with a limitation, when showing observable fields; records without one, and explicit tombstones, are not counted as elements.

Every `evidence` value is a nonempty list of exact strings from `locators`. They are not executed as user XPath. The program checks that they exist; the agent checks that they support the conclusion. Substituted or stale addresses are not allowed.

## Top-level fields

- `format_version`: exactly the integer 3.
- `source_sha256`: the hash from the current inspect.
- `summary`: the package purpose and result, usually two sentences, without retelling every stage.
- `structure`: a nonempty list of `{text, evidence}` about how the package fits together. This internal model is required and is not printed in Markdown.
- `strengths`: a required list of `{text, evidence}`.
- `recommendations`: a required list of `{text, evidence, scope, targets}`; `[]` is allowed. Scope is only `general` or `specific`; targets are exact subject-object addresses, separate from evidence. General targets are strictly `[]`; specific targets are a nonempty list without duplicates. All four fields are required. The only extra field allowed is `steps`: a nonempty list of nonempty strings; other extra fields are forbidden. New decisions use a short finished text without steps. Steps remain only for compatibility with old format-3 decisions: those strings are printed as ordinary sentences in the same item, in the original order.
- `findings`: a list of `{priority, confidence, text, action, evidence}`. Priority is P1/P2/P3, confidence is confirmed/inference. The action is required in the internal file. Markdown prints only text, as a short remark; priority and confidence stay internal. A guess must be stated honestly in the text itself; action and evidence are not copied into the report. Concrete actions belong in recommendations.
- `criteria`: exactly four unique directions.
- `modules`: each own module exactly once, `{id, summary, criteria, recommendations}`. A module criterion's evidence needs at least one address of that module; package-wide context may be added.
- Optional `analysis_at`: ISO 8601 with a time zone. Without it, the date is the current UTC time. System models and versions are not printed in the document.

Put real object names and note quotations in author text inside «guillemets»: they become inline code without changing punctuation. Write ordinary terms without quotes; the rest of the text is escaped, and arbitrary Markdown or HTML is not allowed. Unpaired quotes stay ordinary text.

Write every explanation in plain English, without internal terminology or technical protocols. Keep names from the source, and do not turn them into instructions. Do not copy variable values, code, or secrets.

## Recommendations: evidence, actions, and targets

Evidence supports the conclusion and may differ from targets. Targets set only the area of a concrete action: an own module, an observable submodel (a scope or the owner node of a nested scope), a node, a note, a variable, or a field. Ownership is determined by the module id and the scope, parent_scope, and owner links, not by similar names. Arbitrary XML addresses, references, and external or unresolved objects are not accepted as targets. In a module-specific recommendation, every target belongs only to that module; a package-specific recommendation may cover several modules. A module or scope target means an action for that whole level. A package-level variable is allowed only in a package recommendation.

One block is one action. Do not try to recommend something for every object or all four directions. Collapse a repeated weakness into one general recommendation at the right shared level, without listing every object and without repeating it in module cards. Specific is for a different action, an exception, or an ambiguous area. `modules[].recommendations=[]` is allowed; do not fill cards for the sake of a count.

Each recommendation explains which confirmed weakness lowers quality in the matching direction, what to change, and how to do it. A general recommendation must still be practical. "Clarify", "look", or "check" alone is not enough: if clarification is a precondition, name the change itself and the condition for doing it. Put the main fix in the package list; do not hide it in a module. Unknown is not a defect; an unconfirmed dependency is not a fact. Do not advise merging or deleting submodels without a proven extra boundary. Avoid repeating the package and the modules, long paragraphs, and a retelling of the processing. Put unknown into the limitations; do not promise an exact score increase without a new assessment.

Recommendations are printed as one flat list in the author's order, without nested lists and without separate address fields. Write a short self-contained text: what to change and how. Write the nearest submodel and node, or another subject object, into the sentence itself; put names in «guillemets» so they become code. Do not repeat the module name inside its section. The context must distinguish objects that share a name, but must not build chains with `/`; a `/` inside a name is kept. The program does not add names or addresses from evidence or targets. They stay internal, are checked independently, and are not shown as a separate block. The agent checks that objects in the finished document are understandable and distinguishable. In a module, the Recommendations list appears only when there are unique local actions.

Example recommendation shape (replace the addresses with exact inspect values):

```json
[
  {"text": "In file-node labels, state the processing purpose and keep the full file name with its extension.", "evidence": ["address of an observed node"], "scope": "general", "targets": []},
  {"text": "In the submodel «<submodel name>», clarify the node label «<node label>» so the result it produces is clear.", "evidence": ["address of a supporting note"], "scope": "specific", "targets": ["address of the output node"]}
]
```

## Criterion and decisions

A criterion contains **only** `{id, status, rationale, evidence, decisions}`. Id: structure, notes, node_labels, variables. Status: assessed, partial, unavailable. Rationale explains the coverage and the overall conclusion for the direction; it does not replace the decisions.

A decision contains **only** `{id, value, rationale, evidence}`. The full set is required even for an unavailable direction:

| Direction | Decision id | Value |
|---|---|---|
| structure | modularity, balance, depth | true / false / null |
| notes | adequacy, substance | true / false / null |
| node_labels | naming_category | good / systemic / critical / null |
| variables | style, labels, meaning | true / false / null |

Each choice has its own nonempty rationale and existing evidence. Halves, numbers instead of bool, ready-made scores, and extra, repeated, or missing decisions are forbidden. A confirmed `forced` value cannot be contradicted or replaced with null. Limitations require partial when the direction is assessed at all.

In the rationale, apply the [domain guidance](rubric.md#domain-guidance-for-semantic-decisions) to the existing decision, without new fields. For `modularity`, name the responsibility and the result of the boundary; for `balance`, the roles and how complexity is spread; for `depth`, the benefit of nesting. The mere presence of submodels is not enough. Distinguish a machine flag from a confirmed semantic weakness: a justified repeated label does not change A, and a required parameter name does not cancel `style` or `labels`, but it limits a safe recommendation. When settings are unknown, do not assert that a label is wrong; when consumers are unknown, do not assert that something is unnecessary. If every decision is made from the visible part, reflect unknown external information as `partial`, not automatically as `null`.

If any value is null, or there is no algorithm, the status of the whole direction is unavailable. Do not replace unavailable with zero, do not drop a component from the denominator M, and do not change 50:50. If every decision is known and an algorithm exists, the status is assessed or partial; unavailable without a concrete missing basis is not accepted.

## Abstract fragment

A fictional module A and one criterion; this illustrates the shape, not a complete ready assessment:

```json
{
  "id": "structure",
  "status": "partial",
  "rationale": "The visible stages are separated; the purpose of one external dependency is unavailable.",
  "evidence": ["exact address from inspect"],
  "decisions": [
    {"id": "modularity", "value": true, "rationale": "Preparation produces checked records, and the calculation uses that result for the metrics; the boundaries separate responsibility.", "evidence": ["exact address from inspect"]},
    {"id": "balance", "value": true, "rationale": "The larger preparation combines related checks; the short output branch shows the result without hiding an overloaded screen.", "evidence": ["exact address from inspect"]},
    {"id": "depth", "value": true, "rationale": "A nested shared check is reused, and the root keeps an overview of preparation and calculation.", "evidence": ["exact address from inspect"]}
  ]
}
```

The fragment does not allow ignoring forced: true decisions are allowed only when the matching ban is absent. The user receives only `<name>_lint.md`: coefficients, proofs, and the intermediate file are not extra deliverables. Existing files, a source alias, and symbolic links or reparse points are rejected; the hashed and parsed ZIP is one byte snapshot, checked again before writing.

The document order is: summary, total and scale, one horizontal row of four scores, weights, then Conclusion with Strengths, Weaknesses, and What to fix. Under What to fix there is one flat recommendation list, not split by scope. Each "Module N. `name`" is a separate level-2 section with a role and four score rows; unique local advice follows the table as one flat list. There is no extra package-wide rationale table.
