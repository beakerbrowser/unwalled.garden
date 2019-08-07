## Follows `unwalled.garden/follows`

---

 - File type
 - **Description**: A list of data subscriptions.
 - **Path**: `/.data/unwalled.garden/follows.json`

---

#### Notes

Followed sites may use their public key domains or DNS shortnames.

All followed sites should be mounted in the [refs directory](/dir/refs) to enable quick metadata lookups.

#### Example

```json
{
  "type": "unwalled.garden/follows",
  "urls": [
    "dat://pfrazee.com",
    "dat://43dfc9f23fdded8cc7c01c71c0702a0529130af0258e7fb30bf5a0a3f73d69b3"
  ]
}
```

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "dat://unwalled.garden/follows.json",
  "type": "object",
  "title": "Follows",
  "description": "A list of data subscriptions.",
  "required": [
    "type",
    "urls"
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "The object's type",
      "const": "unwalled.garden/follows"
    },
    "urls": {
      "type": "array",
      "description": "The followed URLs",
      "items": {
        "type": "string",
        "format": "uri"
      }
    }
  }
}
```