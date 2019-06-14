## Sitelists API

Sitelists are collections of sites. They can be used to share recommended follows, recommended apps, employee lists, and more.

In addition to a title and description, sitelists have a `name` which determines the filename of the sitelist. A site cannot publish two sitelists with the same name.

A sitelist should only include links to sites (not to files or pages).

---

```js
import {sitelists} from 'dat://unwalled.garden/index.js'

// read
await sitelists.list({
  filters: {authors, visibility},
  sortBy,
  offset,
  limit,
  reverse
})
await sitelists.get(author, name)

// write
await sitelists.add({name, title, description, ext, visibility})
await sitelists.edit(name, {name, title, description, ext, visibility})
await sitelists.remove(name)
await sitelists.addSite(name, {url, title, description, type, ext})
await sitelists.editSite(name, url, {url, title, description, type, ext})
await sitelists.removeSite(name, url)
```

---

### SiteList

The values returned by sitelist functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|url|`string`|The URL of the sitelist|
|name|`string`|The name of the sitelist|
|title|`string`|The title of the sitelist|
|description|`string`|The description of the sitelist|
|sites|`SiteListItem[]`|The sites in the sitelist|
|createdAt|`string`|The timestamp of when the sitelist claims it was created|
|updatedAt|`string`|The timestamp of when the sitelist claims it was last updated|
|author|`Object`|The site that authored the sitelist|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string[]`||
|ext|`Object`|The [extension](/docs/how-to-extend-schemas) object|
|visibility|`string`|The [visibility](/docs/common-fields#visibility) of the sitelist record|

---

### SiteListItem

The `SiteList` includes an array of sites objects that fit this shape:

|Attribute|Type|Usage|
|-|-|-|
|url|`string`|The URL of the site|
|title|`string`|The title of the site|
|description|`string`|The description of the site|
|type|`string[]`|The type of the site|
|ext|`Object`|The [extension](/docs/how-to-extend-schemas) object|

---

### list(opts)

List sitelists on the network.

|Param|Type|Default|Usage|
|-|-|-|-|
|opts|`Object`|||
|&emsp;filters|`Object`|||
|&emsp;&emsp;authors|`string|string[]`||Site URLs|
|&emsp;&emsp;visibility|`string`|`'all'`|See [visibility](/docs/common-fields#visibility)|
|&emsp;sortBy|`string`|`'topic'`|One of: `'topic'`|
|&emsp;offset|`number`|0||
|&emsp;limit|`number`|||
|&emsp;reverse|`boolean`|`false`||

|Returns|
|-|
|`Promise<SiteList[]>`|

---

### get(author, name)

Get a sitelist by author and name.

|Param|Type|Default|Usage|
|-|-|-|-|
|author|`string`||Site URL (required)|
|name|`string`||Sitelist name (required)|

|Returns|
|-|
|`Promise<SiteList>`|

---

### add(sitelist)

Add a sitelist to the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|sitelist|`Object`|||
|&emsp;name|`string`||The sitelist name (required)|
|&emsp;title|`string`||The sitelist title|
|&emsp;description|`string`||The sitelist description|
|&emsp;ext|`Object`||The [extension](/docs/how-to-extend-schemas) object|
|&emsp;[visibility](/docs/common-fields#visibility)|`string`|`'public'`|One of: `'public'`, `'private'`|

|Returns|
|-|
|`Promise<SiteList>`|

---

### edit(name, sitelist)

Edit a sitelist on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|name|`string`||The sitelist name (required)|
|sitelist|`Object`|||
|&emsp;name|`string`||The sitelist name|
|&emsp;title|`string`||The sitelist title|
|&emsp;description|`string`||The sitelist description|
|&emsp;ext|`Object`||The [extension](/docs/how-to-extend-schemas) object|
|&emsp;[visibility](/docs/common-fields#visibility)|`string`|`'public'`|One of: `'public'`, `'private'`|

|Returns|
|-|
|`Promise<SiteList>`|

---

### remove(name)

Remove a sitelist from the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|name|`string`||The sitelist name (required)|

|Returns|
|-|
|`Promise<void>`|

---

### addSite(name, site)

Add a site to a sitelist on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|name|`string`||The sitelist name (required)|
|site|`Object`|||
|&emsp;url|`string`||The site URL (required)|
|&emsp;title|`string`||The site title|
|&emsp;description|`string`||The site description|
|&emsp;type|`string[]`||The site type|
|&emsp;ext|`Object`||The [extension](/docs/how-to-extend-schemas) object|

|Returns|
|-|
|`Promise<SiteList>`|

---

### editSite(name, url, site)

Edit a site in a sitelist on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|name|`string`||The sitelist name (required)|
|url|`string`||The site URL (required)|
|site|`Object`|||
|&emsp;url|`string`||The site URL|
|&emsp;title|`string`||The site title|
|&emsp;description|`string`||The site description|
|&emsp;type|`string[]`||The site type|
|&emsp;ext|`Object`||The [extension](/docs/how-to-extend-schemas) object|

|Returns|
|-|
|`Promise<SiteList>`|

---

### removeSite(name, site)

Remove a site from a sitelist on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|name|`string`||The sitelist name (required)|
|url|`string`||The site URL (required)|

|Returns|
|-|
|`Promise<SiteList>`|