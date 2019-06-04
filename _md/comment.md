## Comment `unwalled.garden/comment`

---

 - File type
 - **Description**: A text post about some resource.
 - **Path**: `/.data/unwalled.garden/comments/*.json`

---

### Metadata

|Key|Value|
|-|-|
|`type`|`unwalled.garden/comment`|

### Examples

```json
{
  "topic": "dat://beakerbrowser.com/docs",
  "body": "These docs need some work!",
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```

```json
{
  "topic": "dat://beakerbrowser.com/docs",
  "replyTo": "dat://bob.com/.data/unwalled.garden/comments/2018-12-07T02:52:11.947Z.json",
  "body": "I think the docs are perfect just the way they are!",
  "createdAt": "2018-12-07T04:15:44.722Z"
}
```

### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "dat://unwalled.garden/comment.json",
  "type": "object",
  "title": "Comment",
  "description": "A text post about some resource.",
  "required": [
    "topic",
    "body",
    "createdAt"
  ],
  "properties": {
    "topic": {
      "type": "string",
      "description": "What this comment is about",
      "format": "uri"
    },
    "replyTo": {
      "type": "string",
      "description": "What this comment is replying to",
      "format": "uri"
    },
    "body": {
      "type": "string",
      "description": "The post's text content"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time",
      "description": "The time of this post's creation"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time",
      "description": "The time of this post's last edit"
    }
  }
}
```