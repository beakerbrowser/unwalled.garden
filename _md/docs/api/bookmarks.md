## Bookmarks API

Read and create bookmarks for links around the Web. Bookmarks can be private or public.

---

```js
import {bookmarks} from 'dat://unwalled.garden/index.js'

// read
await bookmarks.list({
  filters: {authors, tags, visibility},
  sortBy,
  offset,
  limit,
  reverse
})
await bookmarks.get(href)

// write
await bookmarks.add({href, title, description, tags, visibility})
await bookmarks.edit(href, {href, title, description, tags, visibility})
await bookmarks.remove(href)
```

---

TODO