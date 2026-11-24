# Rules in the node card

Before `dock_node_apply`, get the card through `dock_action_describe` with
`node_types:[type]`. The card contains `parameter_schema`, `guidance`, and
`guidance_modes`. Without `modes` the reply is the common rules and the mode
list; request the needed `modes:[mode]` to read those rules.

In `<type>.md`, text outside blocks is common. A block starts on its own line
`<!-- mode: mode_name other_mode -->` and ends with `<!-- /mode -->`.
Names are the exact `modes` values from the card, separated by spaces. One block
may cover several modes; nested blocks are forbidden. The reply returns the
common text and each selected block once, in file order, without markers.
Every mode of the type must have a block. Schema and rules are not cut to fit a
budget: tests check the card without modes, each mode, and a combined reply.

The source is only the verified skill package pinned by the current `dock_prepare`.
A new preparation clears the marks of cards already received; the prepare table
of contents does not replace describe. After recovery with a new runtime, request
the cards again. To continue an unfinished operation, use its original resume and
keep the recovery rules.

Admission is for the pair (type, mode): describe without modes is only the index
and does not authorize apply. For every apply, first get the rules of its mode.
Compacting history does not send a runtime event and does not clear admission:
the mark confirms delivery in the current preparation, not that the text is still
in the model window. After compaction, if the rules were lost, request the needed
modes again.
