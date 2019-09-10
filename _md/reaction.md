## Reaction `unwalled.garden/reaction`

---

 - File type
 - **Description**: A string annotation on some resource.
 - **Path**: `/.data/unwalled.garden/reactions/*.json`

---

#### Notes

Each "phrase" is constrained to 20 lowercase english letters.

#### Example

```json
{
  "type": "unwalled.garden/reaction",
  "topic": "dat://beakerbrowser.com/",
  "phrases": ["like", "woah"]
}
```

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "dat://unwalled.garden/reaction.json",
  "type": "object",
  "title": "Reaction",
  "description": "An string annotation on some resource.",
  "required": [
    "type",
    "topic",
    "phrases"
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "The object's type",
      "const": "unwalled.garden/reaction"
    },
    "topic": {
      "type": "string",
      "description": "What this reaction is about",
      "format": "uri"
    },
    "phrases": {
      "type": "array",
      "description": "The reaction phrases.",
      "items": {
        "type": "string",
        "pattern": "^[a-z ]+$",
        "maxLength": 20
      }
    }
  }
}
```