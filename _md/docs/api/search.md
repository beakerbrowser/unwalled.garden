## Search API

Run search queries on the locally-indexed data.

---

```js
import {search} from 'dat://unwalled.garden/index.js'

// read
await search.list({
  filters: {matches, since, types, visibility},
  sortBy,
  offset,
  limit,
  reverse
})
```

---

TODO