## Library API

An API for dats that have been saved locally and/or published on the network.

---

```js
import { library } from 'dat://unwalled.garden/index.js'

// read
await library.list({
  filters: {authors, types, hrefs, isSaved, isHosting, visibility},
  sortBy,
  offset,
  limit,
  reverse
})

// write
await library.configure(href, {isSaved, isHosting, visibility})
```

---

### LibraryDat

The values returned by library functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|author|`Object`|The site that published the dat record (not necessarily the author of the dat)|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string[]`||
|dat|`Object`|Information about the dat|
|&emsp;url|`string`|The URL of the dat|
|&emsp;title|`string`|The title of the dat|
|&emsp;description|`string`|The description of the dat|
|&emsp;type|`string[]`||
|isSaved|`boolean`|Has the local user saved the dat? **(private)**|
|isHosting|`boolean`|Is the local user hosting the dat? **(private)**|
|visibility|`string`|The [visibility](/docs/common-fields#visibility) of the dat and its record|

The fields marked **(private)** will only show on the local user's records. 

---

### Notes

The canonical record of a saved dat is stored privately. If the visibility is "public" then a link-entry will also be added to the [public Links record](/links) which matches the dat's type. For instance, a "website" dat will be listed in `/.data/websites.json`.

Thumbnails of published dats should be published at `/.data/thumbs/` using the domain name as the filename.

---

### list(opts)

List dats by that are saved locally or published by authors.

|Param|Type|Default|Usage|
|-|-|-|-|
|opts|`Object`|||
|&emsp;filters|`Object`|||
|&emsp;&emsp;authors|`string|string[]`||Author-site URLs|
|&emsp;&emsp;types|`string|string[]`||Dat types|
|&emsp;&emsp;hrefs|`string|string[]`||Dat URLs|
|&emsp;&emsp;isSaved|`boolean`||Has the local user saved the dat?|
|&emsp;&emsp;isHosting|`boolean`||Is the local user hosting the dat?|
|&emsp;&emsp;visibility|`string`|`'all'`|See [visibility](/docs/common-fields#visibility)|
|&emsp;sortBy|`string`|`'topic'`|One of: `'topic'`|
|&emsp;offset|`number`|0||
|&emsp;limit|`number`|||
|&emsp;reverse|`boolean`|`false`||

|Returns|
|-|
|`Promise<LibraryDat[]>`|

---

### configure(href, opts)

Configure a dat in the local user's library.

|Param|Type|Default|Usage|
|-|-|-|-|
|href|`string`||Dat URL (required)|
|opts|`Object`|||
|&emsp;isSaved|`boolean`||Save the dat to the local user's library?|
|&emsp;isHosting|`boolean`||Host the dat using the local user's devices?|
|&emsp;[visibility](/docs/common-fields#visibility)|`string`||One of: `'public'`, `'unlisted'`, `'private'`|

|Returns|
|-|
|`Promise<void>`|

