## Bookmark `unwalled.garden/bookmark`

---

 - File type
 - **Description**: A saved/shared link to some URL.
 - **Path**: `/.data/unwalled.garden/bookmarks/*.json`

---

### Metadata

|Key|Value|
|-|-|
|`type`|`unwalled.garden/bookmark`|

### Example

```json
{
  "href": "dat://beakerbrowser.com",
  "title": "Beaker Browser",
  "description": "An experimental peer-to-peer Web browser. Built using the dat protocol.",
  "tags": ["p2p", "web", "dat"],
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```

### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "dat://unwalled.garden/bookmark.json",
  "type": "object",
  "title": "Bookmark",
  "description": "A saved/shared link to some URL.",
  "required": ["href", "title", "createdAt"],
  "properties": {
    "href": {
      "type": "string",
      "format": "uri",
      "maxLength": 10000
    },
    "title": {
      "type": "string",
      "maxLength": 280
    },
    "description": {
      "type": "string",
      "maxLength": 560
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string",
        "maxLength": 100,
        "pattern": "^[A-Za-z][A-Za-z0-9-_?]*$"
      }
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```