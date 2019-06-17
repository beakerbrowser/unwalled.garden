## Discussions API

Discussions are forum posts. They include a title and (optionally) a body, link, and tags.

---

```js
import {discussions} from 'dat://unwalled.garden/index.js'

// read
await discussions.list({
  filters: {authors, tags, visibility},
  sortBy,
  offset,
  limit,
  reverse
})
await discussions.get(url)

// write
await discussions.add({title, body, href, tags, visibility})
await discussions.edit(url, {title, body, href, tags, visibility})
await discussions.delete(url)
```

---

### Discussion

The values returned by most discussion functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|url|`string`|The URL of the discussion|
|title|`string`|The title of the discussion|
|body|`string`|The text body of the discussion|
|href|`string`|The URL linked to by the discussion|
|tags|`string[]`|The discussion tags|
|createdAt|`string`|The timestamp of when the discussion claims it was created|
|updatedAt|`string`|The timestamp of when the discussion claims it was last updated|
|author|`Object`|The discussion author's information|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string[]`||
|visibility|`string`|The [visibility](/docs/common-fields#visibility) of the discussion|

---

### list(opts)

List the discussions on the network.

|Param|Type|Default|Usage|
|-|-|-|-|
|opts|`Object`|||
|&emsp;filters|`Object`|||
|&emsp;&emsp;authors|`string|string[]`||Site URLs|
|&emsp;&emsp;tags|`string|string[]`|||
|&emsp;&emsp;visibility|`string`|`'all'`|See [visibility](/docs/common-fields#visibility)|
|&emsp;sortBy|`string`|`'createdAt'`|One of: `'createdAt'`|
|&emsp;offset|`number`|0||
|&emsp;limit|`number`|||
|&emsp;reverse|`boolean`|`false`||

|Returns|
|-|
|`Promise<Discussion[]>`|

---

### get(url)

Get an individual discussion by its URL.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||Discussion URL (required)|

|Returns|
|-|
|`Promise<Discussion>`|

---

### add(discussion)

Add a discussion to the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|discussion|`Object`|||
|&emsp;title|`string`||The discussion title (required)|
|&emsp;body|`string`||The discussion body|
|&emsp;href|`string`||The discussion link URL|
|&emsp;tags|`string[]`||The discussion tags|
|&emsp;visibility|`string`|`'public'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Discussion>`|

---

### edit(url, discussion)

Edit a discussion on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||The URL of the discussion you want to edit (required)|
|&emsp;title|`string`||The discussion title|
|&emsp;body|`string`||The discussion body|
|&emsp;href|`string`||The discussion link URL|
|&emsp;tags|`string[]`||The discussion tags|
|&emsp;visibility|`string`|`'public'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Discussion>`|

---

### delete(url)

Delete a discussion on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||The URL of the discussion you want to delete (required)|

|Returns|
|-|
|`Promise<void>`|

---