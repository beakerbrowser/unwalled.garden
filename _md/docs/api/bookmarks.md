## Bookmarks API

Read and create bookmarks for links around the Web. Bookmarks can be private or public.

---

```js
import {bookmarks} from 'dat://unwalled.garden/index.js'

// read
await bookmarks.query({
  filters: {authors, tag, pinned, isPublic},
  sortBy,
  offset,
  limit,
  reverse
})
await bookmarks.get(href)
await bookmarks.has(href)

// write
await bookmarks.add({href, title, description, tags, pinned, isPublic})
await bookmarks.edit(href, {href, title, description, tags, pinned, isPublic})
await bookmarks.remove(href)

// manage
await bookmarks.setPinOrder(pins)
```

---

TODO