---
description: Use the dedicated MGD File import component to import Megaladata’s proprietary .mgd files. This guide covers the configuration wizard.
---

# ![ ](../../images/icons/data-sources/megaladata_icons_common_data-sources_sliced_18x18_file-native-import_default.svg)&nbsp;Megaladata File: Import Component

Use this component to import a table from a [Megaladata (MGD) file](../../data-format/mgd-file.md).

Megaladata optimizes the `.mgd` proprietary file format for maximum read and write speed. The file stores field settings, which simplifies the import process.

## Ports

### Input

* ![ ](../../images/icons/app/node/ports/inputs-optional/variable_inactive.svg)&nbsp;[Control variables](../../workflow/variables/control-variables.md) (optional port): Accepts variables that set configuration wizard parameter values.

### Output

* ![ ](../../images/icons/app/node/ports/inputs/table_inactive.svg)&nbsp;**Dataset**: Outputs the result table.

## Configuration wizard

Specify or review the following parameters:
* **File name**: Enter the path to the file for a local connection, or the file name for a folder connection. Click ![ ](../../images/extjs-theme/form/open-trigger/open-trigger_default.svg)&nbsp;**Select** to open the file selection dialog.
* **Compression**: Displays the compression method the system used when creating the MGD file:
  * No compression
  * [LZO](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Oberhumer)
  * [LZ4](https://en.wikipedia.org/wiki/LZ4_%28compression_algorithm%29)
* **Bitness**: Displays the bit depth of the source file: 64 or 32 bits.
* **Checksum**: Displays checksum information for file compression:
  * **Compressed data**: The system records the checksum of compressed data after each block.
  * **Compressed and uncompressed data**: The system records the checksum of compressed data after each block, and records the checksum of all uncompressed data at the end of the file.
  * **No**: No checksum.
* **Verify checksum**: Select this checkbox to enable checksum verification when the file contains a checksum. This prevents silent data corruption and access violation errors if any process damages the file. Reading *decreases in speed by 2%* when the checksum covers compressed data only, and *up to 7%* when both checksum types are present. The system enables this option by default.

**Read on:** [XML File: Import Component](../import/xml.md)