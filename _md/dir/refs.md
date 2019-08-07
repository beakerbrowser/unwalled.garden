## Refs directory `unwalled.garden/dir/refs`

---

 - Folder type
 - **Description**: A collection of mounted dat sites which are referenced by the records.
 - **Path**: `/.refs`

---

### Notes

The "Refs" directory contains mounts to referenced Dat sites.

The `follows` folder is used by the [follows record](/follows) as a way to give fast access to the `dat.json` of followed users.

The `authored` folder acts as a listing of sites published by a [person](/person). Readers can create a list of published sites by reading the `dat.json` of each mounted dat. (There is no JSON record of authored sites; just this .refs directory.)

The `authors` folder lists the authors of a non-person site.

Readers should confirm authorship of sites by looking for the bidirectional authors/authored mounts: the author will be mounted in the `.ref/authors` of the site, while the site will be listed in the `.ref/authored` of the author. If this bidirectional mount does not exist, no authorship information should be displayed to the user as it might be a false claim of authorship.

The names of the mounts must be the public key of the mounted site. A DNS shortname can not be used. This is to avoid incorrect DNS mappings.

### File structure

|Path|Description|
|-|-|
|`/.refs/follows/*`|Mounts pointing to all followed sites.|
|`/.refs/authored/*`|Mounts pointing to all published sites.|
|`/.refs/authors/*`|Mounts pointing to the authors of a site.|