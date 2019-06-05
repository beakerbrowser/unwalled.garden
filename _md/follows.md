## Follows `unwalled.garden/follows`

---

 - File type
 - **Description**: A list of data subscriptions.
 - **Path**: `/.data/unwalled.garden/follows.json`

---

#### Notes

Followed sites MUST not use DNS shortnames. They should be listed by their public key domain.

All followed sites MUST be mounted in the [refs directory](/dir/refs) to enable quick metadata lookups.

#### Metadata

|Key|Value|
|-|-|
|`type`|`unwalled.garden/follows`|

#### Example

```json
{
  "urls": ["dat://43dfc9f23fdded8cc7c01c71c0702a0529130af0258e7fb30bf5a0a3f73d69b3"]
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
    "urls"
  ],
  "properties": {
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