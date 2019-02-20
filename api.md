# API

The Unwalled.Garden API is an accessible toolkit for building social apps.

Requires [Beaker browser 0.9+](https://beakerbrowser.com).

```js
import {feed, followgraph} from 'dat://unwalled.garden'

feed.query({
  filters: {authors},
  offset,
  limit,
  reverse
})
feed.getPost(postUrl)
feed.addPost({content: {body}})
feed.editPost(postUrl, {content: {body}})
feed.deletePost(postUrl)

followgraph.listFollowers(siteUrl, {filters: {followedBy}, limit, offset})
followgraph.listFollows(siteUrl, {filters: {followedBy}, limit, offset})
followgraph.isAFollowingB(siteUrlA, siteUrlB)
followgraph.follow(siteUrl)
followgraph.unfollow(siteUrl)
```

## `feed`

### `FeedPost`

The values returned by feed functions will fit the following object shape:

  - `url` string - The URL of the post.
  - `content` Object
    - `body` string - The text body of the post. Limited to 280 characters in length.
  - `crawledAt` number - The timestamp of when this post was crawled by the user's computer.
  - `createdAt` number - The timestamp of when the post claims it was created. (May be wrong.)
  - `updatedAt` number - The timestamp of when the post claims it was last updated. (May be wrong.)
  - `author` Object - The post author's information.
    - `url` string
    - `title` string
    - `description` string
    - `type` string[]

### `feed.query(opts)`

Get a list of posts, ordered by the posts' claimed creation dates.

  - `opts` Object
    - `filters` Object
      - `authors` string|string[] - A URL or set of URLs of authors to filter the feed down to.
    - `offset=0` number
    - `limit` number
    - `reverse` boolean
  - Returns `Promise<FeedPost[]>`

By default, all crawled posts will be included in the output. If you want to only show posts by sites that the user follows, use the `followgraph` API to get the followed sites and pass their URLs into the `authors` filter.

### `feed.getPost(postUrl)`

Get an individual post by its URL.

  - `postUrl` string - The URL of the post you want to read.
  - Returns `Promise<FeedPost>`

### `feed.addPost(post)`

Add a post to the current user's site.

  - `post` Object
    - `content` Object
      - `body` string - The text body of the post. Limited to 280 characters in length.
  - Returns `Promise<FeedPost>`

Example usage:

```js
var myPost = await feed.addPost({content: {body: 'Hello, world!'}})
```

### `feed.editPost(postUrl, post)`

Edit a post on the current user's site.

  - `postUrl` string - The URL of the post you want to edit.
  - `post` Object
    - `content` Object
      - `body` string - The text body of the post. Limited to 280 characters in length.
  - Returns `Promise<FeedPost>`

Example usage:

```js
myPost = await feed.addPost(myPost.url, {content: {body: 'Hello, world!!'}})
```

### `feed.deletePost(postUrl)`

Delete a post on the current user's site.

  - `postUrl` string - The URL of the post you want to delete.
  - Returns `Promise<void>`

## `followgraph`

### `Site`

The values returned by followgraph functions will fit the following object shape:

  - `url` string
  - `title` string
  - `description` string
  - `type` string[]

### `followgraph.listFollowers(siteUrl, opts)`

List the sites known to follow the given URL. (Will only include sites which have been crawled by the local user.)

  - `siteUrl` string - The URL of the site to get followers of.
  - `opts` Object
    - `filters` Object
      - `followedBy` string - Filters the results to sites which are followed by this URL.
    - `offset` number
    - `limit` number
  - Returns `Promise<Site[]>`

### `followgraph.listFollows(siteUrl, opts)`

List the sites followed by the given URL.

  - `siteUrl` string - The URL of the site to get follows of.
  - `opts` Object
    - `filters` Object
      - `followedBy` string - Filters the results to sites which are followed by this URL.
    - `offset` number
    - `limit` number
  - Returns `Promise<Site[]>`

### `followgraph.isAFollowingB(siteUrlA, siteUrlB)`

Checks whether one site follows the other.

  - `siteUrlA` string - The URL of the site which will have its "follows" queried.
  - `siteUrlB` string - The URL of the site which will be looked for in the "follows."
  - Returns `Promise<boolean>`

### `followgraph.follow(siteUrl)`

Add a follow to the current user's site.

  - `siteUrl` string - The URL of the site to follow.
  - Returns `Promise<void>`

### `followgraph.unfollow(siteUrl)`

Remove a follow from the current user's site.

  - `siteUrl` string - The URL of the site to unfollow.
  - Returns `Promise<void>`