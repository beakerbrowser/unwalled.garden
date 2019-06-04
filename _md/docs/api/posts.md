## Posts API

Read and create broadcasted content. Posts are typically integrated into a feed UI.

---

```js
import {posts} from 'dat://unwalled.garden/index.js'

// read
await posts.list({
  filters: {authors, trust},
  offset,
  limit,
  reverse
})
await posts.get(postUrl)

// write
await posts.add(body)
await posts.edit(postUrl, body)
await posts.delete(postUrl)
```

---

### `Post`

The values returned by posts functions will fit the following object shape:

  - <var>url</var> `string` <small>The URL of the post.</small>
  - <var>content</var> `Object`
    - <var>body</var> `string` <small>The text body of the post. Limited to 280 characters in length.</small>
  - <var>crawledAt</var> `number` <small>The timestamp of when this post was crawled by the local computer.</small>
  - <var>createdAt</var> `number` <small>The timestamp of when the post claims it was created.</small>
  - <var>updatedAt</var> `number` <small>The timestamp of when the post claims it was last updated.</small>
  - <var>author</var> `Object` <small>The post author's information.</small>
    - <var>url</var> `string`
    - <var>title</var> `string`
    - <var>description</var> `string`
    - <var>type</var> `string[]`

---

### `posts.query([opts])`

Get a list of posts, ordered by the posts' claimed creation dates.

  - <var>opts</var> `Object`
    - <var>filters</var> `Object`
      - <var>authors</var> `string|string[]` <small>A URL or set of URLs of authors to filter the listing down to.</small>
    - <var>offset</var> `number`
    - <var>limit</var> `number`
    - <var>reverse</var> `boolean`
  - Returns `Promise<Post[]>`

By default, all crawled posts will be included in the output. If you want to only show posts by sites that the user follows, use the [graph API](./graph) to get the followed sites and pass their URLs into the <var>authors</var> filter.

---

### `posts.get(postUrl)`

Get an individual post by its URL.

  - <var>postUrl</var> `string` <small>The URL of the post you want to read.</small>
  - Returns `Promise<Post>`

---

### `posts.add(body)`

Add a post to the current user's site.

  - <var>body</var> `string` <small>The text body of the post. Limited to 280 characters in length.</small>
  - Returns `Promise<Post>`

Example usage:

```js
var myPost = await posts.add('Hello, world!')
```

---

### `posts.edit(postUrl, body)`

Edit a post on the current user's site.

  - <var>postUrl</var> `string` <small>The URL of the post you want to edit.</small>
  - <var>body</var> `string` <small>The text body of the post. Limited to 280 characters in length.</small>
  - Returns `Promise<Post>`

Example usage:

```js
myPost = await posts.add(myPost.url, 'Hello, world!!')
```

---

### `posts.delete(postUrl)`

Delete a post on the current user's site.

  - <var>postUrl</var> `string` <small>The URL of the post you want to delete.</small>
  - Returns `Promise<void>`

---