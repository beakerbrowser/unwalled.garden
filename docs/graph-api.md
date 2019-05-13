# [&laquo;](./readme.md) APIs

## Graph API

```js
import {graph} from 'dat://unwalled.garden/index.js'

graph.query({filters: {authors}, offset, limit, reverse})
graph.listFollowers(siteUrl, {filters: {followedBy}, limit, offset})
graph.listFollows(siteUrl, {filters: {followedBy}, limit, offset})
graph.isAFollowingB(siteUrlA, siteUrlB)
graph.follow(siteUrl)
graph.unfollow(siteUrl)
```

### Site

The values returned by graph functions will fit the following object shape:

  - `url` string
  - `title` string
  - `description` string
  - `type` string[]

### graph.listFollowers(siteUrl, opts)

List the sites known to follow the given URL. (Will only include sites which have been crawled by the local user.)

  - `siteUrl` string - The URL of the site to get followers of.
  - `opts` Object
    - `filters` Object
      - `followedBy` string - Filters the results to sites which are followed by this URL.
    - `offset` number
    - `limit` number
  - Returns `Promise<Site[]>`

### graph.listFollows(siteUrl, opts)

List the sites followed by the given URL.

  - `siteUrl` string - The URL of the site to get follows of.
  - `opts` Object
    - `filters` Object
      - `followedBy` string - Filters the results to sites which are followed by this URL.
    - `offset` number
    - `limit` number
  - Returns `Promise<Site[]>`

### graph.isAFollowingB(siteUrlA, siteUrlB)

Checks whether one site follows the other.

  - `siteUrlA` string - The URL of the site which will have its "follows" queried.
  - `siteUrlB` string - The URL of the site which will be looked for in the "follows."
  - Returns `Promise<boolean>`

### graph.follow(siteUrl)

Add a follow to the current user's site.

  - `siteUrl` string - The URL of the site to follow.
  - Returns `Promise<void>`

### graph.unfollow(siteUrl)

Remove a follow from the current user's site.

  - `siteUrl` string - The URL of the site to unfollow.
  - Returns `Promise<void>`