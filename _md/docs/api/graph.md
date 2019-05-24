## Graph API

Read and modify social relationships between sites.

---

```js
import {graph} from 'dat://unwalled.garden/index.js'

// read
await graph.query({
  filters: {authors},
  offset,
  limit,
  reverse
})
await graph.listFollowers(siteUrl, opts)
await graph.listFollows(siteUrl, opts)
await graph.isAFollowingB(siteUrlA, siteUrlB)

// write
await graph.follow(siteUrl)
await graph.unfollow(siteUrl)
```

---

### `Site`

The values returned by graph functions will fit the following object shape:

  - <var>url</var> `string`
  - <var>title</var> `string`
  - <var>description</var> `string`
  - <var>type</var> `string[]`

---

### `graph.listFollowers(siteUrl, opts)`

List the sites known to follow the given URL. (Will only include sites which have been crawled by the local user.)

  - <var>siteUrl</var> `string` <small>The URL of the site to get followers of.</small>
  - <var>opts</var> `Object`
    - <var>filters</var> `Object`
      - <var>followedBy</var> `string` <small>Filters the results to sites which are followed by this URL.</small>
    - <var>offset</var> `number`
    - <var>limit</var> `number`
  - Returns `Promise<Site[]>`

---

### `graph.listFollows(siteUrl, opts)`

List the sites followed by the given URL.

  - <var>siteUrl</var> `string` <small>The URL of the site to get follows of.</small>
  - <var>opts</var> `Object`
    - <var>filters</var> `Object`
      - <var>followedBy</var> `string` <small>Filters the results to sites which are followed by this URL.</small>
    - <var>offset</var> `number`
    - <var>limit</var> `number`
  - Returns `Promise<Site[]>`

---

### `graph.isAFollowingB(siteUrlA, siteUrlB)`

Checks whether one site follows the other.

  - <var>siteUrlA</var> `string` <small>The URL of the site which will have its "follows" queried.</small>
  - <var>siteUrlB</var> `string` <small>The URL of the site which will be looked for in the "follows."</small>
  - Returns `Promise<boolean>`

---

### `graph.follow(siteUrl)`

Add a follow to the current user's site.

  - <var>siteUrl</var> `string` <small>The URL of the site to follow.</small>
  - Returns `Promise<void>`

---

### `graph.unfollow(siteUrl)`

Remove a follow from the current user's site.

  - <var>siteUrl</var> `string` <small>The URL of the site to unfollow.</small>
  - Returns `Promise<void>`