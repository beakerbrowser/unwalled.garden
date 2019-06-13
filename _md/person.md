## Person `unwalled.garden/person`

---

 - Site type
 - **Description**: A human user.
 - **Path**: `/`

---

#### Dat.json fields

The `/dat.json` file has the following fields:

|Key|Value|
|-|-|
|`type`|`unwalled.garden/person`|
|`title`|The person's name|
|`description`|The person's short bio|

Example:

```json
{
  "type": ["unwalled.garden/person"],
  "title": "Alice",
  "description": "Advocate of the free and open web",
}
```

#### File structure

|Path|Type|
|-|-|
|`/dat.json`|Standard dat.json file|
|`/thumb.(png|jpg|jpeg)`|Profile picture|
|`/.data/unwalled.garden`|[Data directory](/dir/data)|
|`/.refs`|[Refs directory](/dir/data)|