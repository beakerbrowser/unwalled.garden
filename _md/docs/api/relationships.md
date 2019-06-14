## Relationships API

Relationships are declarations of a linkage between two resources on the Web. They can be used to declare things such as "Alice is the spouse of Bob" and "Carla is an employee of Foo Inc."

The records take the shape of `{a, rel, b}`. The way to read relationships is as follows:

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

---

```js
import {relationships} from 'dat://unwalled.garden/index.js'

// read
await relationships.list({
  filters: {authors, as, rels, bs, visiblity},
  sortBy,
  offset,
  limit,
  reverse
})
await relationships.get(url)

// write
await relationships.add({a, rel, b, visibility})
await relationships.edit(url, {a, rel, b, visibility})
await relationships.delete(url)
```

---

### Relationship

The values returned by relationship functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|url|`string`|The URL of the relationship record|
|a|`string`|The URL that's the "object" of the relationship|
|rel|`string`|The ID of the relationship|
|b|`string`|The URL that's the "subject" of the relationship|
|author</var>|`Object`|The site that authored the relationship|
|&emsp;url</var>|`string`||
|&emsp;title</var>|`string`||
|&emsp;description</var>|`string`||
|&emsp;type</var>|`string[]`||
|visibility</var>|`string`|The [visibility](/docs/common-fields#visibility) of the relationship|

---

### list(opts)

List the relationships on the network.

|Param|Type|Default|Usage|
|-|-|-|-|
|opts|`Object`|||
|&emsp;filters|`Object`|||
|&emsp;&emsp;authors|`string|string[]`||Site URLs|
|&emsp;&emsp;as|`string|string[]`||URLs|
|&emsp;&emsp;rels|`string|string[]`||Relationship IDs|
|&emsp;&emsp;bs|`string|string[]`||URLs|
|&emsp;&emsp;visibility|`string`|`'all'`|See [visibility](/docs/common-fields#visibility)|
|&emsp;sortBy|`string`|`'createdAt'`|One of: `'createdAt'`|
|&emsp;offset|`number`|0||
|&emsp;limit|`number`|||
|&emsp;reverse|`boolean`|`false`||

|Returns|
|-|
|`Promise<Relationship[]>`|

---

### get(url)

Get an individual relationship by its URL.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||Relationship URL (required)|

|Returns|
|-|
|`Promise<Relationship>`|

---

### add(relationship)

Add a relationship to the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|relationship|`Object`|||
|&emsp;a|`string`||The URL of the "object" of the relationship (required)|
|&emsp;rel|`string`||The ID of the relationship (required)|
|&emsp;b|`string`||The URL of the "subject" of the relationship (required)|
|&emsp;visibility|`string`|`'public'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Relationship>`|

---

### edit(url, relationship)

Edit a relationship on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||The URL of the relationship you want to edit (required)|
|relationship|`Object`|||
|&emsp;a|`string`||The URL of the "object" of the relationship|
|&emsp;rel|`string`||The ID of the relationship|
|&emsp;b|`string`||The URL of the "subject" of the relationship|
|&emsp;visibility|`string`|`'public'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Relationship>`|

---

### delete(url)

Delete a relationship on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||The URL of the relationship you want to delete (required)|

|Returns|
|-|
|`Promise<void>`|

---