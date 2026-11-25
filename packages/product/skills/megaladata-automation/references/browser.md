# Preparation, waiting, and cancellation

After the skill is activated, call `megaladata_dock_prepare`. The Host creates
the browser and the authorization; the agent does not pass a password, a
profile, a context token, or a runtime path. On `LOGIN_REQUIRED`, ask the user
to sign in in the open window and then repeat preparation. Do not choose
another window, CDP session, or browser by hand.

Use the confirmed `document_id`, `workflow_id`, and references of the current
session. Diagnostics and Help are not graph preparation. Other browser tools
require successful preparation; the current session catalog decides whether
they are available.

For a new scenario choose `intent:new_draft`; to continue a saved package use
`intent:open_package` with the exact path from the request or a confirmed Save.
`existing_workflow` requires a reference issued by this session: a familiar GUID,
diagnostics, and chat history do not replace it. On `UNKNOWN_PREPARED_WORKFLOW`,
prepare the same saved package through `open_package`; do not create a new one
instead. This does not allow a new preparation while an operation is unfinished:
recover that operation first.

While `running`, check the same `operation_id` through
`megaladata_dock_node_wait` or status. Waiting does not extend the original
operation deadline. For cancellation, use the declared node cancel/stop and
wait for the result; cancelling one operation does not allow interrupting
another chat.

A receipt with a possible effect and unconfirmed cleanup requires inspection of
the original operation through `megaladata_dock_operation_inspect` and an
allowed recovery. Do not start a replacement, repeat the gesture, or restart
the browser to hide the uncertainty. On a confirmed refusal without an effect,
correct the request from the schema and use a new ID within the stated
`next_step`.

For a node operation in `AMBIGUOUS`, call `megaladata_dock_operation_inspect` once
and follow `recovery_options`. `resume` is `megaladata_dock_node_resume` with the
original ID. `abandon_operation` is `megaladata_dock_operation_recover` with the
original `operation_id`, a new `recovery_operation_id`, and strategy
`abandon_operation`, without `observation_id`: Dock itself checks that the node
is free and releases the operation without repeating the gesture. Then follow
`next_step` of the released outcome: do not create the node again; continue with
a new operation on the existing node or read the output through
`megaladata_dock_node_read`. Until the operation is released, preparation, save,
and new `node_apply` calls only return that outcome: do not repeat them. Do not
ask the user to close the wizard or a dialog: if Dock cannot settle the operation
itself, its `next_step` names `megaladata_dock_browser_recovery`. If that tool is
unavailable and Dock returned `user_action`, warn that unsaved settings of this
wizard will be lost. If `recovery_options` is empty, `next_step` does not lead to
recovery, and there is no `user_action`, report the `operation_id`, phase, and
reason, and stop.

## Browser recovery

This mode is available only when Dock `next_step` names
`megaladata_dock_browser_recovery`. It is not a bypass of the runtime; it is the
normal temporary phase:

1. Call `megaladata_dock_browser_recovery` with `action:"start"` and the original
   `operation_id`. The reply has `phase:"browser"`, the step goal (`goal`), and
   the remaining budget. If the phase is different, follow the reply and do not
   start over.
2. On the next step, `megaladata_browser_*` tools are available in the same tab.
   Do one action per reply and explain what you are checking or changing. Read
   the page in subtrees through `megaladata_browser_snapshot` with `target`/`depth`
   or `megaladata_browser_find`; a full snapshot is not attached to actions.
   A screenshot is available only to a model that accepts images. If a gesture
   returned an error, read the page first (snapshot or find): the next gesture
   is rejected until you do. If the action outcome is unknown or the page went
   out of bounds, only `action:"stop"` is allowed.
3. From a node view, a table, or a visualizer, return along the navigation
   breadcrumb "Workflow". Do not close workspace tabs, the package, or Megaladata
   windows: that changes the context Dock is bound to, and the attempt will stop.
   Finish this step: close the wizard or dialog that is in the way, and if the
   step refuses again in the same phase, configure the node and ports yourself.
   Continue the rest of the scenario through Dock. If export already ran and the
   download or the saved package state is not confirmed, only dismiss the dialog
   or notification that is in the way and return to the graph: do not export or
   save again; the runtime will reread the file and the package state. Navigation,
   reload, tabs, code, cookies, network, and files are rejected.
4. Call `action:"finish"` with `actions_performed`, `expected_result`, and
   `browser_settings` (settings made in the browser). The runtime checks the
   workspace itself. `completed` means the step result is confirmed (for example,
   a file with checked bytes in `file_artifacts`); go to the next step.
   `continuable` means follow `next_step` (a new operation on the same node or
   `megaladata_dock_node_read` from the receipt). `unresolved` means continue
   within the remaining budget or call `action:"stop"`.
5. Call `action:"stop"` when there is no further justified action. The step
   budget (30 calls, 10 minutes) is not renewed. If `start` is refused, the
   operation stays locked: do not repeat `start` or `abandon_operation`; report
   the `operation_id`, phase, and reason, and stop.

In the final answer, separate what the runtime confirmed, what was done in the
browser and confirmed only by you (`attested_by_model`), whether the package was
saved, and what remains unknown. Do not call an unknown result a success and do
not ask the user to fix the interface; ask only for a missing file, access, or
a substantive decision.

Do not treat closing the wizard, a mask disappearing, or the presence of a
window as proof of a successful calculation. You need the receipt, the checked
settings, and the read result.
