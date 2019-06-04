## Reactions API

Read and create "reaction" emojis which are attached to content on the Web.

---

```js
import {reactions} from 'dat://unwalled.garden/index.js'

// read
await reactions.list({
  filters: {authors, trust},
  offset,
  limit,
  reverse
})
await reactions.tabulate(url, {
  filters: {authors, trust}
})

// write
await reactions.add(url, emoji)
await reactions.delete(url, emoji)
```

---

TODO
