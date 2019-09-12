## Library API

An API for dats that have been saved locally and/or published on the network.

---

```js
import { library } from 'dat://unwalled.garden/index.js'

// read
await library.list({
  authors,
  types,
  keys,
  isSaved,
  isHosting,
  visibility,
  forkOf,
  isOwner,
  sortBy,
  offset,
  limit,
  reverse
})

// write
await library.configure(key, {isSaved, isHosting, visibility})
```

---

### LibraryDat

The values returned by library functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|key|`string`|The key of the dat|
|author|`Object`|The dat that published the dat record (not necessarily the author of the dat)|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string[]`||
|&emsp;isOwner|`boolean`|Is the local user the owner of the author dat?|
|meta|`Object`|Information about the dat|
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string[]`||
|&emsp;mtime|`number`|The timestamp of the last observed change to the dat|
|&emsp;size|`number`|The local size of the dat in bytes|
|&emsp;author|`url`|The url of the author of this dat|
|&emsp;forkOf|`url`|The url of the dat this dat is forked from|
|&emsp;isOwner|`boolean`|Is the local user the owner of the dat?|
|isSaved|`boolean`|Has the local user saved the dat?|
|savedAt|`number`|The timestamp of when the dat was saved to the local user's library|
|isHosting|`boolean`|Is the local user hosting the dat?|
|visibility|`string`|The [visibility](/docs/common-fields#visibility) of the dat and its record|

---

### Notes

The canonical record of a saved dat is stored privately. If the visibility is "public" then a link-entry will also be added to the [public dats record](/dats).

Thumbnails of published dats should be published at `/.data/thumbs/` using the key as the filename.

---

### list(opts)

List dats by that are saved locally or published by authors.

|Param|Type|Default|Usage|
|-|-|-|-|
|opts|`Object`|||
|&emsp;authors|`string|string[]`||Filter by author URLs|
|&emsp;types|`string|string[]`||Filter by dat types|
|&emsp;keys|`string|string[]`||Filter by dat keys|
|&emsp;isSaved|`boolean`||Filter by: Has the local user saved the dat?|
|&emsp;isHosting|`boolean`||Filter by: Is the local user hosting the dat?|
|&emsp;visibility|`string`|`'all'`|Filter by this visibility. See [visibility](/docs/common-fields#visibility)|
|&emsp;forkOf|`string`||Filter by: Only forks of this URL|
|&emsp;isOwner|`boolean`||Filter by: Is the local user the owner of the dat?|
|&emsp;sortBy|`string`|`'topic'`|One of: `'topic'`|
|&emsp;offset|`number`|0||
|&emsp;limit|`number`|||
|&emsp;reverse|`boolean`|`false`||

|Returns|
|-|
|`Promise<LibraryDat[]>`|

---

### configure(key, opts)

Configure a dat in the local user's library.

|Param|Type|Default|Usage|
|-|-|-|-|
|key|`string`||Dat key (required)|
|opts|`Object`|||
|&emsp;isSaved|`boolean`||Save the dat to the local user's library?|
|&emsp;isHosting|`boolean`||Host the dat using the local user's devices?|
|&emsp;[visibility](/docs/common-fields#visibility)|`string`||One of: `'public'`, `'unlisted'`, `'private'`|

|Returns|
|-|
|`Promise<void>`|

