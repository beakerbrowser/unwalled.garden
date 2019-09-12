## Dats `unwalled.garden/dats`

---

 - File type
 - **Description**: A list of dats.
 - **Path**: `/.data/dats.json`

---

#### Example

```json
{
  "type": "unwalled.garden/dats",
  "dats": [
    {
      "key":  "0529130af0258e7fb30bf5a0a3f73d69b343dfc9f23fdded8cc7c01c71c0702a",
      "title": "Paul Frazee",
      "description": "Beaker guy",
      "type": ["unwalled.garden/person"]
    },
    {
      "key": "43dfc9f23fdded8cc7c01c71c0702a0529130af0258e7fb30bf5a0a3f73d69b3",
      "title": "Unwalled Garden",
      "type": "unwalled.garden/website"
    }
  ]
}
```

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "dat://unwalled.garden/dats.json",
  "type": "object",
  "title": "Dats",
  "description": "A list of dats.",
  "required": [
    "type",
    "dats"
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "The object's type",
      "const": "unwalled.garden/dats"
    },
    "dats": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["key"],
        "properties": {
          "key": {
            "type": "string",
            "pattern": "^[0-9a-f]{64}$"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "type": {
            "type": ["string", "array"],
            "items": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}
```