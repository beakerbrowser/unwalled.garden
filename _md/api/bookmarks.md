## Bookmarks API

Bookmarks are links which you have saved and will want to reference in the future.

---

```js
import {bookmarks} from 'dat://unwalled.garden/index.js'

// read
await bookmarks.list({
  authors,
  tags,
  visibility,
  sortBy,
  offset,
  limit,
  reverse
})
await bookmarks.get(author, href)

// write
await bookmarks.add({href, title, description, tags, visibility})
await bookmarks.edit(href, {href, title, description, tags, visibility})
await bookmarks.remove(href)
```

---

### Bookmark

The values returned by bookmark functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|href|`string`|The bookmark URL|
|title|`string`|The bookmark title|
|description|`string`|The bookmark description|
|tags|`string[]`|The bookmark tags|
|createdAt|`number`|The timestamp of when the bookmark claims it was created|
|author|`Object`|The site that authored the bookmark|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string[]`||
|visibility|`string`|The [visibility](/docs/common-fields#visibility) of the bookmark|

---

### list(opts)

List bookmarks on the network.

|Param|Type|Default|Usage|
|-|-|-|-|
|opts|`Object`|||
|&emsp;authors|`string|string[]`||Filter by author URLs|
|&emsp;tags|`string|string[]`||Filter by tags|
|&emsp;visibility|`string`|`'all'`|Filter by this visibility. See [visibility](/docs/common-fields#visibility)|
|&emsp;sortBy|`string`|`'title'`|One of: `'title'`, `'createdAt'`|
|&emsp;offset|`number`|0||
|&emsp;limit|`number`|||
|&emsp;reverse|`boolean`|`false`||

|Returns|
|-|
|`Promise<Bookmark[]>`|

---

### get(author, href)

Get a bookmark by author and href.

|Param|Type|Default|Usage|
|-|-|-|-|
|author|`string`||Site URL (required)|
|href|`string`||Site URL (required)|

|Returns|
|-|
|`Promise<Bookmark>`|

---

### add(bookmark)

Add a bookmark to the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|bookmark|`Object`|||
|&emsp;href|`string`||The bookmark URL (required)|
|&emsp;title|`string`||The bookmark title (required)|
|&emsp;description|`string`||The bookmark description|
|&emsp;tags|`string[]`||The bookmark tags|
|&emsp;visibility|`string`|`'private'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Bookmark>`|

---

### edit(href, bookmark)

Edit a bookmark on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|href|`string`||The bookmark URL (required)|
|bookmark|`Object`|||
|&emsp;href|`string`||The bookmark URL (required)|
|&emsp;title|`string`||The bookmark title (required)|
|&emsp;description|`string`||The bookmark description|
|&emsp;tags|`string[]`||The bookmark tags|
|&emsp;visibility|`string`|`'private'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Bookmark>`|

---

### remove(href)

Remove a bookmark from the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|href|`string`||The bookmark URL (required)|

|Returns|
|-|
|`Promise<void>`|