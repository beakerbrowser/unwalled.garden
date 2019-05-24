## Comment

---

 - **Type**: JSON Record
 - **Description**: A text post about some resource.
 - **Schema**: [unwalled.garden/comment](./comment.json)
 - **Path**: /data/comments/{slugified-url}/{createdAt}.json

---

Comments are short text posts which are "about" some URL. Comments are threaded, meaning that they have a root topic and a parent comment which they may be replying to, forming a tree structure.

Comments are published under a folder which is the slugified URL. You can find the algorithm for slugifying URLs in [slugify-url.js](slugify-url.js). The filename of comments should use the [ISO 8601](https://tools.ietf.org/html/rfc3339)-encoded `createdAt` value, which can be generated using Javascripts's `Date` object `toISOString()` function.

A standard comment:

```json
{
  "type": "unwalled.garden/comment",
  "topic": "dat://beakerbrowser.com/docs",
  "content": {"body": "These docs need some work!"},
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```

A reply comment:

```json
{
  "type": "unwalled.garden/comment",
  "topic": "dat://beakerbrowser.com/docs",
  "replyTo": "dat://bob.com/data/comments/beaker-browser-com-docs/2018-12-07T02:52:11.947Z.json",
  "content": {"body": "I think the docs are perfect just the way they are!"},
  "createdAt": "2018-12-07T04:15:44.722Z"
}
```