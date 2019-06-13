## Refs directory `unwalled.garden/dir/refs`

---

 - Folder type
 - **Description**: A collection of mounted dat sites which are referenced by the records.
 - **Path**: `/.refs`

---

### Notes

The "Refs" directory contains mounts to Dat sites which a reader might want to access in order to render content. It should contain mounts to all [followed sites](/follows).

The names of the mounts MUST be the public key of the mounted site. A DNS shortname can not be used. This is to avoid incorrect DNS mappings.

### File structure

|Path|Type|
|-|-|
|`*`|Mount to a Dat hyperdrive.|