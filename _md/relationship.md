## Relationship `unwalled.garden/relationship`

---

 - File type
 - **Description**: A declared relationship between two resources.
 - **Path**: `/.data/unwalled.garden/relationships/*.json`

---

#### Notes

The way to read relationships is as follows:

```
{a} is a/an/the {rel} of/to/about/with {b}
```

For instance, the following record:

```json
{
  "type": "unwalled.garden/relationship",
  "a": "dat://alice.com",
  "rel": "spouse",
  "b": "dat://bob.com",
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```

Should be read as:


```
dat://alice.com is the spouse of dat://bob.com
```

The `rel` field may be any alphanumeric string. Here are some suggested values:

 - Friends
   - `"acquaintance"`
   - `"friend"`
   - `"significantOther"`
   - `"neighbor"`
 - Enemies
   - `"antagonist"`
   - `"critic"`
   - `"enemy"`
   - `"hater"`
   - `"rival"`
   - `"suspicious"`
 - Events
   - `"attendee"`
   - `"participant"`
 - Family
   - `"ancestor"`
   - `"child"`
   - `"descendant"`
   - `"engaged"`
   - `"grandchild"`
   - `"grandparent"`
   - `"lifePartner"`
   - `"parent"`
   - `"sibling"`
   - `"spouse"`
 - Projects
   - `"alternative"`
   - `"author"`
   - `"competitor"`
   - `"contributor"`
   - `"creator"`
   - `"designer"`
   - `"evangelist"`
   - `"fan"`
   - `"founder"`
   - `"implementor"`
   - `"inspiration"`
   - `"passionate"`
   - `"promoter"`
   - `"supporter"`
   - `"user"`
 - Work
   - `"advisor"`
   - `"apprentice"`
   - `"collaborator"`
   - `"colleague"`
   - `"employer"`
   - `"funder"`
   - `"mentor"`

#### Examples

```json
{
  "type": "unwalled.garden/relationship",
  "a": "dat://alice.com",
  "rel": "spouse",
  "b": "dat://bob.com",
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "dat://unwalled.garden/relationship.json",
  "type": "object",
  "title": "Relationship",
  "description": "A declared relationship between two resources.",
  "required": [
    "type",
    "a",
    "rel",
    "b",
    "createdAt"
  ],
  "properties": {
    "type": {
      "type": "string",
      "const": "unwalled.garden/relationship"
    },
    "a": {
      "type": "string",
      "format": "uri"
    },
    "rel": {
      "type": "string",
      "pattern": "^[A-Za-z0-9]*$"
    },
    "b": {
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