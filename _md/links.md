## Links `unwalled.garden/links`

---

 - File type
 - **Description**: A list of links.

---

#### Notes

This is a general-purpose schema that can be used in a number of different contexts.
For example, the [Library API](/api/dat) uses it to list published websites at `/.data/websites.json`.

#### Example

```json
{
  "type": "unwalled.garden/links",
  "links": [
    {
      "href": "dat://pfrazee.com",
      "title": "Paul Frazee",
      "description": "Beaker guy",
    },
    {
      "href": "dat://43dfc9f23fdded8cc7c01c71c0702a0529130af0258e7fb30bf5a0a3f73d69b3",
      "title": "Unwalled Garden"
    }
  ]
}
```

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "dat://unwalled.garden/links.json",
  "type": "object",
  "title": "Links",
  "description": "A list of links.",
  "required": [
    "type",
    "links"
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "The object's type",
      "const": "unwalled.garden/links"
    },
    "links": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["href"],
        "properties": {
          "href": {
            "type": "string",
            "format": "uri"
          },
          "title": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        }
      }
    }
  }
}
```