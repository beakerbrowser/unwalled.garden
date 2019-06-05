## Post `unwalled.garden/post`

---

 - File type
 - **Description**: A broadcasted piece of content.
 - **Path**: `/.data/unwalled.garden/posts/*.json`

---

#### Metadata

|Key|Value|
|-|-|
|`type`|`unwalled.garden/post`|

#### Example

```json
{
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
  "required": ["body", "createdAt"],
  "properties": {
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