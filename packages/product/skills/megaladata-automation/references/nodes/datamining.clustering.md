# Clustering (`datamining.clustering`)

<!-- mode: k_means -->
## k-means clustering

Use `target.type:"datamining.clustering"`, `mode:"k_means"`, input 0.
For a new node set `features:[{kind:"input_field",name:"X"},...]` only
for continuous numeric features and `clusters` (2…1000). Leave identifiers
out of features: they are kept in the output. `seed` (0…2147483647) defaults to 42.
Normalization of every feature: `normalization:"none"|"standardize"|"scale_minus_one_one"|"scale_zero_one"|"absolute_scale"`.
standardize is the sample SD; Megaladata accepts a constant feature.
The scales are [-1;1], [0;1], and division by the maximum absolute value, respectively.
A new node uses none; omitting it on existing keeps one method for every feature.
Mixed methods need an explicit choice. Manual ranges and a control are deferred.

`finish:"execute"` trains the current input and executes the node. Read `read.ports:[0,1]`:
0 is every source row, Cluster, and Distance; 1 is the centers in the original units.
Distance uses the normalized units. If activating the input is refused, fix
NULL or invalid values before Teach/Execute, without substituting zeros.
Change parameters on the same existing node. Applying without Teach is the apply mode below.
Normalize inside this node, not with Calculator or JS. Fix the seed for repeatability;
cluster numbers are labels, not ranks.
<!-- /mode -->

<!-- mode: g_means -->
## Automatic cluster count with g-means

For automatic selection use `megaladata_dock_node_apply`,
`target.type:"datamining.clustering"`, `mode:"g_means"`, input 0.
A new node requires `features:[{kind:"input_field",name:"X"},...]`,
`min_clusters`, `max_clusters` (integers 1…1000, min≤max), and `threshold` (0.1…5).
`clusters` belongs only to k_means. Do not include RowID, Txn, Item, or other identifiers in features: they are kept
in the rows. Native g-means chooses a count inside the range; Cluster is
a label, not a rank. Do not compute clusters with Calculator or JavaScript.

`finish:"execute"` trains, then executes. Read `read.ports:[0,1]`:
0 is every row with Cluster and Distance; 1 is the centers in the original units.
Normalization uses the same values as k_means.
When parameters are omitted, existing keeps the current min/max/threshold/seed.
When changing the mode, an existing node must set clusters explicitly for k_means, or
min_clusters/max_clusters/threshold for g_means.
Save the package after execution. Manual ranges and
applying a saved model to a holdout belong to separate modes.
<!-- /mode -->

<!-- mode: apply -->
## Apply a saved model without retraining

If the node is not trained, train it with `mode:"k_means"` and the user's parameters,
`normalization:"none"`, `finish:"execute"`. If it is trained, use `apply` immediately, without k_means.
Replace the `imports.text` source with the holdout, keeping the previous field names and types; execute the import.
Keep the link to Clustering. Call `megaladata_dock_node_apply` for
`target:{kind:"existing",type:"datamining.clustering",ref:...}`,
`mode:"apply"`, `parameters:{}`, `inputs:[]`, `mappings:[]`,
`finish:"execute"`, `read.ports:[0,1]`.

Apply reads the saved roles, none, the fixed k, and the seed, closes the wizard
through Cancel, and executes only Activate. Teach and Done are not called;
`configuration.readback.training.status:"not_requested"`. Port 0 contains the
holdout with assignments and distances; port 1 contains the previous centers.
Create the final CSVs AFTER apply with two `exports.text` nodes:
the first target CSV is `inputs:[{source:node_ref,output:0,input:0}]` (holdout,
Cluster/Distance, and the source fields); the second is `inputs:[{source:node_ref,output:1,input:0}]`
(Cluster and the center coordinates). In both, source is the ref of the same Clustering node;
`finish:"execute"` exports and downloads each CSV. The two target files belong
to outputs 0/1 of the final apply. Save the package after
both exports. Do not call k_means on the holdout: that
retrains. Calculator and JavaScript are not needed to apply the model.
Apply accepts only an existing trained fixed-k/none node; it does not change parameters,
links, or mappings. g_means and a normalized model in apply are deferred.
<!-- /mode -->
