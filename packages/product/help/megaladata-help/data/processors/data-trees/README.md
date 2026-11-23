### Data Tree

Tree: the data structure in the form of a set of connected nodes. The first tree node is called a root. There is always only one root node. If the root is connected with another root, it is a parent root, and the connected root is called a chid root.

The tree nodes can have the **container** and **array** indicators.

**Container** is a node that can include child nodes (and there can be 0 child nodes) but it cannot have a value. It is impossible to set the data type and kind for the node-container. The root node is always a container.

The **array** indicator shows that more than one instance of such node can be included into one parent node. The minimum number of the node instances is equal to 0, and it cannot be configured. The only exception is the root node. The minimum number of its instances is equal to 0 if it is an array, and 1 if it is not an array.

The tree-like data can be passed to input and output of handlers (similar to data set and variables) through the corresponding port, and also to the published package through Integrator (also refer to [Web Services](../../integration/web-services/README.md)).