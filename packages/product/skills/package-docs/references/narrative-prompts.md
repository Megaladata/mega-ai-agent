# Narrative prompts (adapted from tools-megaladata AI Report)

Use these instructions when filling `PLACEHOLDER_*` in the skeleton.
Answer **only in English**. Include package facts supported by `structure.json`.
Help may explain capabilities of an identified handler, not `.mgp` internals.
Do not turn a handler's general capability into a fact about its configuration.
When settings are empty, formulas and code are unknown; when ports or links
are absent, do not claim that data passes through them. An empty
`external_references` does not mean file dependencies are absent: importing
`data.mgd` requires that file. In every description, keep the direction of
each edge from `links`: the output `source_label.source_port_name` passes data
to the input `target_label.target_port_name`. Check both the short package
description and the detailed module description against it before publishing
the report. A list of nodes by itself does not set their execution order. If
some nodes are not linked to the others, do not call the whole module linear:
describe the confirmed chain separately from isolated nodes and supernodes.
The short introductory description must agree with the detailed graph.

## Package description (`PLACEHOLDER_PACKAGE_DESCRIPTION`)

System intent:

> You create a package description based on a summary of the scenarios
> contained in this package.

User intent:

> Analyze the summary about the scenarios in the package (module titles,
> notes, top-level flow). Write a description for a business audience.
> Keep it within ~200 tokens. English only.

A title such as "Demo" and a set of node types do not establish a business
task. If it is not stated in titles or notes, write "The business purpose of
the package is not specified", then describe the confirmed composition and
links. Do not assign the author a teaching goal or an expected business result
from the mere presence of handlers. The same rule applies to the module
description: do not call the scenario "demonstration", "tutorial", or "test"
only because it is named "Demo". The phrase "The business purpose is not
specified" does not allow that claim in the next sentence. For this case it
is enough: "The package contains a module “Demo”. A Text File node is
configured to import `data.mgd` and is linked to Calculator; Calculator
formulas are not specified. A separate Supernode contains Python and another
Supernode".

Place the result as a blockquote under `### Package description`.

## Module description (`PLACEHOLDER_MODULE_<N>_DESCRIPTION`)

System intent:

> You create descriptions for analytical scenarios from the hierarchy of
> connections between handler nodes.

Hierarchy rules (also in `hierarchy-json.md`):

1. Keys `Source` / `Target`.
2. `Source = null` → `Target` has no incoming edge at this level.
3. `Target = null` → `Source` has no outgoing edge at this level.
4. Value shape: `label:service_name:guid`.
5. Label is the user name; service name is a key for looking up the node type,
   not proof of its behavior without matching Help or package settings.
6. GUID is for uniqueness only — omit from prose.
7. Nested structures use service name `Supernode`.
8. A missing edge does not prove that an external port or a data transfer exists.

User intent:

> Analyze `hierarchy` and `notes` for the module. Optionally use Help blurbs
> for node types. Describe the scenario: first overall prose, then
> **Overall structure**, then **Supernode descriptions** (input →
> calculation/processing → output) when logic is distributed across supernodes.
> If there are no supernodes, give a concise flow based on node roles and links.
> Keep within ~400 tokens. Concise and concrete. English only. No GUIDs.

Describe every expanded supernode separately, including one nested inside
another. "Input → processing → output" is a set of questions about facts, not
a required finished flow. For example, when the external ports are empty, the
correct wording is "Input ports are not set" and "Output ports are not set;
delivery of the result is not defined". This is incorrect: "Data arrives
through ports (ports are not set)". When the internal links are empty, write
that links between the nested nodes are not set. If code, formulas, or the
target of a Reference Node are not specified in the extracted settings, mark
that as unknown; Help does not restore a specific package setting. Do not take
the purpose of an unfamiliar type from a guess or from Help for a similar
node. For example, `DerivedReference` with empty settings does not prove an
external reference: describe a Reference Node and an unknown target. A general
purpose of a type may be added only from the read document of that type;
successfully reading Calculator Help does not confirm the purpose of a
Reference Node. If only a document of a general category or a similar handler
is found, the original Engine stays unidentified. For it, describe only
structure facts; leave statistical groups in the statistics. For
`DerivedReference`, similarity to `Reference` and Help for an ordinary
Reference Node do not prove that it inherits those capabilities. The phrase
"allows obtaining the results of another node's execution" is not allowed
until the base handler of that derived node is established from the package.
When the base handler is unknown and the settings are empty, it is enough:
"Contains a Reference Node; settings and the target node are not specified".
The same rule applies to the other unidentified types. Before publishing,
check every sentence about handler capabilities against the established type
correspondence and the Help that was read.

## Forbidden in the final Markdown

- Paragraphs that are not in English
- GUID strings
- Help source lists (`Sources:`)
- Full node tables / settings dumps
