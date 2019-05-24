## Search API

Run search queries on the locally-indexed data.

---

```js
import {search} from 'dat://unwalled.garden/index.js'

// read
await search.query({
  query,
  filters: {datasets, since},
  hops,
  offset,
  limit
})
```

---

TODO