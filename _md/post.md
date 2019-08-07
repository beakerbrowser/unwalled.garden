## Post `unwalled.garden/post`

---

 - File type
 - **Description**: A broadcasted piece of content.
 - **Path**: `/.data/unwalled.garden/posts/*.json`

---

#### Example

```json
{
  "type": "unwalled.garden/post",
  "body": "Hello, world!",
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "dat://unwalled.garden/post.json",
  "type": "object",
  "title": "Post",
  "description": "A broadcasted piece of content.",
  "required": ["type", "body", "createdAt"],
  "properties": {
    "type": {
      "type": "string",
      "description": "The object's type",
      "const": "unwalled.garden/post"
    },
    "body": {
      "type": "string",
      "description": "The post's text body",
      "maxLength": 1000000
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