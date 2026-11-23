# Megaladata File (MGD File)

**Megaladata File (`.mgd`)** is a proprietary data file format specially designed for use with the Megaladata platform.

## Performance benefits

Using the MGD format provides significant speed advantages for data import and export because:

* It requires minimal data transformation when reading or writing.
* Its performance is primarily limited by disk speed rather than data volume, unlike many other formats.

## Key features

* **Self-contained metadata:** An MGD file stores all necessary information about its contents (field names, captions, data types, etc.), allowing for import and export with minimal configuration.
* **Compression options:** Users can reduce file size by enabling compression during import or export.

## Compression algorithms

Megaladata supports two compression algorithms, each with different trade-offs:

* LZ4:
    * **Speed:** Up to 10% faster writing and 40% faster reading compared to LZO.
    * **Checksums:** Supports checksum validation for data blocks and the entire file content.

* LZO:
    *  **File size:** Offers a higher compression ratio, resulting in file sizes approximately 9-10% smaller than those compressed with LZ4.

## Availability and use

We recommend using MGD files to store intermediary calculations and speed up your workflows. This format is fully supported in all Megaldata editions, including Community.

**Read on:** [Scheduled Start]()