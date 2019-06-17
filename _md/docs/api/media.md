## Media API

Media is content that's published on the Web: blogposts, gifs, videos, songs, podcasts, news articles, documents, and more. It is a generic mechanism for publishing creative works.

Media is categorized by a `subtype` URL. Unwalled.Garden defines the following subtypes:

<style>
  table code,
  table a {
    white-space: nowrap;
  }
</style>

|Name|URL|File types|
|-|-|-|
|<code id="blogpost">blogpost</code>|<a href="/media#blogpost">unwalled.garden/media#blogpost</a>|Web pages such as html or markdown.|
|<code id="document">document</code>|<a href="/media#document">unwalled.garden/media#document</a>|Documents such as txt, pdf, docx, html, or markdown.|
|<code id="ebook">ebook</code>|<a href="/media#ebook">unwalled.garden/media#ebook</a>|Ebooks such as txt, pdf, docx, html, or markdown.|
|<code id="file">file</code>|<a href="/media#file">unwalled.garden/media#file</a>|Any.|
|<code id="gif">gif</code>|<a href="/media#gif">unwalled.garden/media#gif</a>|Silent animated images or videos such as gif, webm, or mp4.|
|<code id="image">image</code>|<a href="/media#image">unwalled.garden/media#image</a>|Images such as gif, png, or jpeg.|
|<code id="news-article">news-article</code>|<a href="/media#news-article">unwalled.garden/media#news-article</a>|Web pages such as html or markdown.|
|<code id="page">page</code>|<a href="/media#page">unwalled.garden/media#page</a>|Web pages such as html or markdown.|
|<code id="podcast-episode">podcast-episode</code>|<a href="/media#podcast-episode">unwalled.garden/media#podcast-episode</a>|Audio such as webm, ogg, mp3, and wav.|
|<code id="song">song</code>|<a href="/media#song">unwalled.garden/media#song</a>|Audio such as webm, ogg, mp3, and wav.|
|<code id="video">video</code>|<a href="/media#video">unwalled.garden/media#video</a>|Videos such as webm and mp4.|

Applications are encouraged to use [extensions](/docs/how-to-extend-schemas) to add custom information about the media.

### Notes

Media records are a way for sites to publish content. They should not be used for internal housekeeping. For instance, if a user embeds a gif into their media, the app should not also create a media record for the gif.

---

```js
import {media} from 'dat://unwalled.garden/index.js'

// read
await media.list({
  filters: {authors, hrefs, subtypes, tags, visibility},
  sortBy,
  offset,
  limit,
  reverse
})
await media.get(url)

// write
await media.add({subtype, href, title, description, tags, ext, visibility})
await media.edit(url, {subtype, href, title, description, tags, ext, visibility})
await media.remove(url)
```

---

### Media

The values returned by media functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|url|`string`|The URL of the media record|
|subtype|`string`|The subtype URL of the media|
|href|`string`|The URL of the media's content|
|title|`string`|The title of the media|
|description|`string`|The description of the media|
|tags|`string[]`|The tags of the media|
|createdAt|`string`|The timestamp of when the media claims it was created|
|updatedAt|`string`|The timestamp of when the media claims it was last updated|
|author|`Object`|The media author's information|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string[]`||
|ext|`Object`|The [extension](/docs/how-to-extend-schemas) object|
|visibility|`string`|The [visibility](/docs/common-fields#visibility) of the media|

---

### list(opts)

List the media on the network.

|Param|Type|Default|Usage|
|-|-|-|-|
|opts|`Object`|||
|&emsp;filters|`Object`|||
|&emsp;&emsp;authors|`string|string[]`||Site URLs|
|&emsp;&emsp;hrefs|`string|string[]`||Media content URLs|
|&emsp;&emsp;subtypes|`string|string[]`||Subtype URLs|
|&emsp;&emsp;tags|`string|string[]`||Tag strings|
|&emsp;&emsp;visibility|`string`|`'all'`|See [visibility](/docs/common-fields#visibility)|
|&emsp;sortBy|`string`|`'createdAt'`|One of: `'createdAt'`|
|&emsp;offset|`number`|0||
|&emsp;limit|`number`|||
|&emsp;reverse|`boolean`|`false`||

|Returns|
|-|
|`Promise<Media[]>`|

---

### get(url)

Get an individual media item by its URL.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||Media URL (required)|

|Returns|
|-|
|`Promise<Media>`|

---

### add(media)

Add a media item to the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|media|`string|Object`|||
|&emsp;subtype|`string`||The media subtype (required)|
|&emsp;href|`string`||The media content URL (required)|
|&emsp;title|`string`||The media title (required)|
|&emsp;description|`string`||The media description|
|&emsp;tags|`string[]`||The media tags|
|&emsp;ext|`Object`||The [extension](/docs/how-to-extend-schemas) object|
|&emsp;visibility|`string`|`'public'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Media>`|

---

### edit(url, media)

Edit a media item on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||The URL of the media you want to edit (required)|
|media|`string|Object`|||
|&emsp;subtype|`string`||The media subtype|
|&emsp;href|`string`||The media content URL|
|&emsp;title|`string`||The media title|
|&emsp;description|`string`||The media description|
|&emsp;tags|`string[]`||The media tags|
|&emsp;ext|`Object`||The [extension](/docs/how-to-extend-schemas) object|
|&emsp;visibility|`string`|`'public'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Media>`|

---

### delete(url)

Delete a media item on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||The URL of the media you want to delete (required)|

|Returns|
|-|
|`Promise<void>`|
