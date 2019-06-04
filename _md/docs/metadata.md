## File & folder metadata

Dat supports custom metadata on its files and folders. This metadata is read using a `stats()` call.

Unwalled.Garden uses 3 common metadata values:

|Key|Usage|
|-|-|
|`type`|A URL that indicates the definition of the file/folder.|
|`title`|A nice-looking name for the file/folder.|
|`description`|A longer description of the file/folder purpose.|

The most common field is `type`, used to describe the schemas of files and folders.

When set on the root folder, the metadata describes the entire dat/site. For example: the [Person](/person) type describes the site as a person, uses the title as the person's name, and uses the description as the person's bio.

