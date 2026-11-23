---
description: Python component in Megaladata. Description of output console with examples.
---
# ![](./../../../images/icons/components/python_default.svg)&nbsp;Output Console

The **Output** console of the [Preview](./../../../visualization/preview/preview.md) window in the Python configuration wizard displays messages from *standard output* (`sys.stdout`) and *standard error* (`sys.stderr`).
By default, the console is collapsed. To expand/collapse it, use the corresponding button (![ ](./../../../images/icons/toolbar-controls/up_default.svg)&nbsp;**Expand** or ![ ](./../../../images/icons//toolbar-controls/down_default.svg)&nbsp;**Collapse**) in the window's bottom right corner.

## Examples

```python
import sys, warnings

#output to stdout
print(sys.path[0])
sys.stdout.write(str(99) + '\n')

#output to stderr
warnings.warn("Error!")
try:
    а = 10 / 0
except ZeroDivisionError as err:
    sys.stderr.write(str(ZeroDivisionError))

```

**Read on:** [Full API Description ](api-description.md)