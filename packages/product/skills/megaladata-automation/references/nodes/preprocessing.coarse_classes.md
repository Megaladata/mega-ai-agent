# Coarse classes

<!-- mode: internal apply -->
For one discrete string or continuous integer feature
and a binary string target, choose
`preprocessing.coarse_classes`, mode `internal`. First read the card through
`dock_action_describe({node_types:["preprocessing.coarse_classes"]})`.
In `parameters.coarse_classes` set the exact technical names `input_field`,
`target_field`, the string `event_value`, `partition:"automatic"`,
`min_class_percent`, `max_classes`, and `uniformity_percent`.
The other fields get the unused role and are kept unchanged.
Numbers are percentages: 5 means 5%, and 0 means IV optimization.

`internal` explicitly trains the current input before execution. A configured node
and materialized classes are different states. For a new input without training,
apply the existing node with `mode:"apply"`, `parameters:{}`, `inputs:[]`,
`mappings:[]`, `finish:"execute"`. Saved classes are required. Apply reads
the state, closes the draft without a commit, and executes; the Train command is not called.
The new target column may contain NULL. The predictor must contain only
known nonempty training categories. Keep empty strings and NULL in the other fields
separate. In ordinary training, every category contains events and non-events.
To freeze an automatic discrete split, set frozen:true in
parameters.coarse_classes, mode:"internal". After Save, change the file of the same
import and repeat internal with frozen:true on the same node: the classes are kept,
and frequencies, WoE, and IV are recomputed, including zero frequencies. Do not clear the freeze
and do not create a new node. Arbitrary smoothing is not set.

Explicitly request `read.ports:[0,1,2]`: port 0 is the rows with ClassNum/ClassMark/
ClassSignificant, port 1 is the class parameters and WoE/IV, and port 2 is the overall IV and
the feature significance. New fields follow immediately after the source field being transformed.
The class number starts at zero and does not mean the order of categories in the source CSV.
ClassSignificant here is the class contribution to IV. EventRate/NonEventRate shares
are computed inside the class; WoE uses shares relative to the total events
and non-events. Do not compute WoE from rounded UI values.

Save the package separately after checking every output. When exporting all three
outputs, keep the order: rows, classes, significance. When reading, check every value, type, NULL, and field order.
For a continuous integer input and two manual classes, use the same node
with mode:"internal", partition:"manual", max_classes:2, and an integer cut.
Value ranges from the task (min..cut, cut..max) are set by one cut;
the outer bounds are not set and do not need to be clarified.
The minimum share and uniformity keep their previous meaning; preliminary
binning is turned off automatically. The handler applies and locks the manual
split before training so the bounds are not recomputed. Keep the original
integer/continuous type of X; do not compute class numbers with Calculator or JavaScript.
Port 1 bounds are Variant/real, and the outer bounds are NULL. Check which side owns the boundary
with a row where X=cut. Take WoE/IV numbers from the full outputs.
`apply` uses the saved discrete model.
Megaladata 7.4.2 does not apply a ready external class table (feature, class number, category)
to a discrete feature: `partition:"external"`
is refused with COARSE_EXTERNAL_UNSUPPORTED before any action. Train the
same node with `partition:"automatic"` only on input 0 (frozen:true keeps
the classes on retraining) and tell the user about the limit. Do not imitate
an external split with Calculator or JavaScript.
External numeric ranges, variables, and unknown categories are not supported.
<!-- /mode -->
