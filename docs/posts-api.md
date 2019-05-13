# [&laquo;](./readme.md) APIs

## Posts API

```js
import {posts} from 'dat://unwalled.garden/index.js'

posts.query({filters: {authors}, offset, limit, reverse})
posts.getPost(postUrl)
posts.addPost({content: {body}})
posts.editPost(postUrl, {content: {body}})
posts.deletePost(postUrl)
```

### Post

The values returned by posts functions will fit the following object shape:

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

### posts.query(opts)

Get a list of posts, ordered by the posts' claimed creation dates.

  - `opts` Object
    - `filters` Object
      - `authors` string|string[] - A URL or set of URLs of authors to filter the listing down to.
    - `offset=0` number
    - `limit` number
    - `reverse` boolean
  - Returns `Promise<Post[]>`

By default, all crawled posts will be included in the output. If you want to only show posts by sites that the user follows, use the `graph` API to get the followed sites and pass their URLs into the `authors` filter.

### posts.getPost(postUrl)

Get an individual post by its URL.

  - `postUrl` string - The URL of the post you want to read.
  - Returns `Promise<Post>`

### posts.addPost(post)

Add a post to the current user's site.

  - `post` Object
    - `content` Object
      - `body` string - The text body of the post. Limited to 280 characters in length.
  - Returns `Promise<Post>`

Example usage:

```js
var myPost = await posts.addPost({content: {body: 'Hello, world!'}})
```

### posts.editPost(postUrl, post)

Edit a post on the current user's site.

  - `postUrl` string - The URL of the post you want to edit.
  - `post` Object
    - `content` Object
      - `body` string - The text body of the post. Limited to 280 characters in length.
  - Returns `Promise<Post>`

Example usage:

```js
myPost = await posts.addPost(myPost.url, {content: {body: 'Hello, world!!'}})
```

### posts.deletePost(postUrl)

Delete a post on the current user's site.

  - `postUrl` string - The URL of the post you want to delete.
  - Returns `Promise<void>`