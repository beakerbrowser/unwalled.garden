## Discussion `unwalled.garden/discussion`

---

 - File type
 - **Description**: A forum discussion.
 - **Path**: `/.data/unwalled.garden/discussions/*.json`

---

#### Notes

The `forum` field determines how the discussions are grouped. (It is similar to a subreddit name.) It can be any string but it must be provided.

#### Example

```json
{
  "type": "unwalled.garden/discussion",
  "forum": "decentralized-web",
  "title": "What do you think about the Dat protocol?",
  "body": "You can find out about it at www.datprotocol.com. It seems cool to me!",
  "href": "dat://www.datprotocol.com",
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "dat://unwalled.garden/discussion.json",
  "type": "object",
  "title": "Discussion",
  "description": "A forum discussion.",
  "required": ["type", "forum", "title", "createdAt"],
  "properties": {
    "type": {
      "type": "string",
      "description": "The object's type",
      "const": "unwalled.garden/discussion"
    },
    "forum": {
      "type": "string",
      "maxLength": 280
    },
    "title": {
      "type": "string",
      "maxLength": 280
    },
    "body": {
      "type": "string",
      "maxLength": 1000000
    },
    "href": {
      "type": "string",
      "format": "uri"
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