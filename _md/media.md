## Media `unwalled.garden/media`

---

 - File type
 - **Description**: A published item of content.
 - **Path**: `/.data/unwalled.garden/medias/*.json`

---

#### Notes

Media records are a way for sites to publish content. They should not be used for internal housekeeping. For instance, if a user embeds a gif into their post, the app should not also create a media record for the gif.

Media is defined by a `subtype` URL. Unwalled garden includes a [set of useful subtypes](#subtypes). Applications are encouraged to use [extensions](/docs/how-to-extend-schemas) to add custom information about the media.

#### Examples

```json
{
  "type": "unwalled.garden/media",
  "subtype": "unwalled.garden/media#gif",
  "href": "dat://alice.com/images/angry-cat.gif",
  "title": "Bosco the angry cat",
  "tags": ["cats", "aww"],
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```

#### <span id="subtypes">Subtypes</a>

<style>
  table code,
  table a {
    white-space: nowrap;
  }
</style>

|Name|URL|File types|
|-|-|-|
|<code id="blogpost">blogpost</code>|<a href="/#blogpost">unwalled.garden/media#blogpost</a>|Web pages such as html or markdown.|
|<code id="document">document</code>|<a href="/#document">unwalled.garden/media#document</a>|Documents such as txt, pdf, docx, html, or markdown.|
|<code id="ebook">ebook</code>|<a href="/#ebook">unwalled.garden/media#ebook</a>|Ebooks such as txt, pdf, docx, html, or markdown.|
|<code id="file">file</code>|<a href="/#file">unwalled.garden/media#file</a>|Any.|
|<code id="gif">gif</code>|<a href="/#gif">unwalled.garden/media#gif</a>|Silent animated images or videos such as gif, webm, or mp4.|
|<code id="image">image</code>|<a href="/#image">unwalled.garden/media#image</a>|Images such as gif, png, or jpeg.|
|<code id="news-article">news-article</code>|<a href="/#news-article">unwalled.garden/media#news-article</a>|Web pages such as html or markdown.|
|<code id="page">page</code>|<a href="/#page">unwalled.garden/media#page</a>|Web pages such as html or markdown.|
|<code id="podcast-episode">podcast-episode</code>|<a href="/#podcast-episode">unwalled.garden/media#podcast-episode</a>|Audio such as webm, ogg, mp3, and wav.|
|<code id="song">song</code>|<a href="/#song">unwalled.garden/media#song</a>|Audio such as webm, ogg, mp3, and wav.|
|<code id="video">video</code>|<a href="/#video">unwalled.garden/media#video</a>|Videos such as webm and mp4.|

#### Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "dat://unwalled.garden/media.json",
  "type": "object",
  "title": "media",
  "description": "A published item of content.",
  "required": [
    "type",
    "subtype",
    "href",
    "title",
    "createdAt"
  ],
  "properties": {
    "type": {
      "type": "string",
      "const": "unwalled.garden/media"
    },
    "subtype": {
      "type": "string"
    },
    "href": {
      "type": "string",
      "format": "uri"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string",
        "maxLength": 100,
        "pattern": "^[A-Za-z][A-Za-z0-9-_?]*$"
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