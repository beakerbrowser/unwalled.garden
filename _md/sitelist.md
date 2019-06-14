## Sitelist `unwalled.garden/sitelist`

---

 - File type
 - **Description**: A list of sites.
 - **Path**: `/.data/unwalled.garden/sitelists/*.json`

---

#### Notes

The `name` field should be the same as the filename of the JSON file (minus the `.json` extension). A site cannot publish two sitelists with the same name.

The `url` fields of the `sites` should point to the root resource. Paths should be ignored. (It's a site list, not a link list!)

#### Example

```json
{
  "type": "unwalled.garden/sitelist",
  "name": "my-friends",
  "title": "Friends",
  "description": "People I know from real life",
  "sites": [
    {
      "url": "dat://43dfc9f23fdded8cc7c01c71c0702a0529130af0258e7fb30bf5a0a3f73d69b3",
      "title": "Alice",
      "description": "Advocate of the free and open web",
      "type": ["unwalled.garden/person"]
    },
    {
      "url": "dat://db10d577c44118c47fb76a69026cba01e90c5919d636b2b6e6ffac3eac52e8fa",
      "title": "Bob",
      "description": "Animal lover, career mortician",
      "type": ["unwalled.garden/person"]
    }
  ],
  "createdAt": "2018-12-07T02:52:11.947Z",
  "updatedAt": "2018-12-21T06:22:15.401Z"
}
```

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "dat://unwalled.garden/sitelist.json",
  "type": "object",
  "title": "Sitelist",
  "description": "A list of data subscriptions.",
  "required": [
    "type",
    "name",
    "sites"
  ],
  "properties": {
    "type": {
      "type": "string",
      "const": "unwalled.garden/sitelist"
    },
    "name": {
      "type": "string",
      "pattern": "^[A-Za-z][A-Za-z0-9-_?]*$"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "sites": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["url"],
        "properties": {
          "url": {
            "type": "string",
            "format": "uri"
          },
          "title": {
            "type": "string",
          },
          "description": {
            "type": "string",
          },
          "type": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "ext": {
            "type": "object"
          }
        }
      }
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    },
    "ext": {
      "type": "object"
    }
  }
}
```