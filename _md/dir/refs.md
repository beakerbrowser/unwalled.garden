## Refs directory `unwalled.garden/dir/refs`

---

 - Folder type
 - **Description**: A collection of mounted dat sites which are referenced by the records.
 - **Path**: `/.refs`

---

### Notes

The "Refs" directory contains mounts to referenced Dat sites.

The `follows` folder is used by the [follows record](/follows) as a way to give fast access to the `dat.json` of followed users.

The names of the mounts in the `.ref` folders can be user-friendly shortnames. Readers should read the mount target field to find specific sites.

### File structure

|Path|Description|
|-|-|
|`/.refs/follows/*`|Mounts pointing to all followed sites.|