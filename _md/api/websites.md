## Websites API

An API for websites that have been saved locally and/or published on the network.

---

```js
import { websites } from 'dat://unwalled.garden/index.js'

// read
await websites.list({
  filters: {authors, hrefs, isSaved, isHosting, visibility},
  sortBy,
  offset,
  limit,
  reverse
})

// write
await websites.configure(href, {isSaved, isHosting, visibility})
```

---

### Website

The values returned by website functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|author|`Object`|The site that published the website|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string[]`||
|href|`string`|The URL of the published website|
|title|`string`|The title of the published website|
|description|`string`|The description of the published website|
|isSaved|`boolean`|Has the local user saved the website? **(private)**|
|isHosting|`boolean`|Is the local user hosting the website? **(private)**|
|visibility|`string`|The [visibility](/docs/common-fields#visibility) of the website and its record|

The fields marked **(private)** will only show on the local user's records. 

---

### Notes

Websites are part of the user's personal library. The canonical record of a saved website is stored privately. If the visibility is "public" then a link-entry will also be added to the [public Links record](/links) at `/.data/websites.json`.

Thumbnails of published websites should be published at `/.data/thumbs/websites/` using the domain name as the filename.

---

### list(opts)

List websites by that are saved locally or published by authors.

|Param|Type|Default|Usage|
|-|-|-|-|
|opts|`Object`|||
|&emsp;filters|`Object`|||
|&emsp;&emsp;authors|`string|string[]`||Author-site URLs|
|&emsp;&emsp;hrefs|`string|string[]`||Website URLs|
|&emsp;&emsp;isSaved|`boolean`||Has the local user saved the website?|
|&emsp;&emsp;isHosting|`boolean`||Is the local user hosting the website?|
|&emsp;&emsp;visibility|`string`|`'all'`|See [visibility](/docs/common-fields#visibility)|
|&emsp;sortBy|`string`|`'topic'`|One of: `'topic'`|
|&emsp;offset|`number`|0||
|&emsp;limit|`number`|||
|&emsp;reverse|`boolean`|`false`||

|Returns|
|-|
|`Promise<Website[]>`|

---

### configure(href, opts)

Configure a website in the local user's library.

|Param|Type|Default|Usage|
|-|-|-|-|
|href|`string`||Website URL (required)|
|opts|`Object`|||
|&emsp;isSaved|`boolean`||Save the website to the local user's library?|
|&emsp;isHosting|`boolean`||Host the website using the local user's devices?|
|&emsp;[visibility](/docs/common-fields#visibility)|`string`||One of: `'public'`, `'unlisted'`, `'private'`|

|Returns|
|-|
|`Promise<void>`|

