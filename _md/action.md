## Action `unwalled.garden/action`

---

 - File type
 - **Description**: An action taken on some resource.
 - **Path**: `/.data/unwalled.garden/actions/*.json`

---

#### Notes:

The `action` field may be any alphanumeric string. Here are some suggested values:

 - Browsing
   - `"installed"`
   - `"listened"`
   - `"read"`
   - `"used"`
   - `"visited"`
   - `"watched"`
 - Commerce
   - `"bought"`
   - `"donatedTo"`
   - `"preordered"`
   - `"rented"`
   - `"sold"`
 - Creation
   - `"created"`
   - `"removed"`
   - `"updated"`
 - Locations
   - `"arrived"`
   - `"checkedin"`
   - `"departed"`
 - Transfer
   - `"borrowed"`
   - `"gave"`
   - `"lent"`
   - `"received"`
   - `"returned"`
   - `"took"`

#### Examples

```json
{
  "type": "unwalled.garden/action",
  "topic": "dat://beakerbrowser.com/docs",
  "action": "visited",
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "dat://unwalled.garden/action.json",
  "type": "object",
  "title": "Action",
  "description": "An action taken on some resource.",
  "required": [
    "type",
    "topic",
    "action",
    "createdAt"
  ],
  "properties": {
    "type": {
      "type": "string",
      "const": "unwalled.garden/action"
    },
    "topic": {
      "type": "string",
      "format": "uri"
    },
    "action": {
      "type": "string",
      "pattern": "^[A-Za-z][A-Za-z0-9-_?]*$"
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