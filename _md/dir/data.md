## Data directory `unwalled.garden/dir/data`

---

 - Folder type
 - **Description**: Contains the unwalled.garden record files.
 - **Path**: `/.data`

---

### File structure

|Path|Type|
|-|-|
|`/.data/bookmarks/*.json`|[Bookmark](/bookmark)|
|`/.data/comments/*.json`|[Comment](/comment)|
|`/.data/follows.json`|[Follows](/follows)|
|`/.data/statuses/*.json`|[Status](/status)|
|`/.data/reactions/*.json`|[Reaction](/reaction)|
|`/.data/thumbs`|Images (Thumbnails)|
|`/.data/votes/*.json`|[Vote](/vote)|
|`/.data/websites.json`|[Links](/links)|

The `thumbs` folder includes the following structure:

|Path|Purpose|
|-|-|
|`/.data/thumbs/websites/*.(png|jpg|jpeg)`|For website records|