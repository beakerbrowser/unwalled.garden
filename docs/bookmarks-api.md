# [&laquo;](./readme.md) APIs

## Bookmarks API

```js
import {bookmarks} from 'dat://unwalled.garden/index.js'

await bookmarks.query({
  filters: {authors, tag, pinned, isPublic},
  sortBy,
  offset,
  limit,
  reverse
})
await bookmarks.listTags()
await bookmarks.get(href)
await bookmarks.has(href)
await bookmarks.add({href, title, description, tags, pinned, isPublic})
await bookmarks.edit(href, {href, title, description, tags, pinned, isPublic})
await bookmarks.remove(href)
await bookmarks.configure({pins})
```

TODO