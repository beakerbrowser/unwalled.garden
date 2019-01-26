# Link Post

 - JSON Record
 - Description: A published link to some content.
 - Schema: [`unwalled.garden/link-post`](./link-post.json)
 - Path: `/data/link-feed/{createdAt}.json`

Link-posts are a way to publish pointers to content. They are primarily used to populate unwalled.garden's global search index. Followers aggregate each others' links to create their own private search. Aggregator apps can also use recently-published links as the basis of a discussion board, similar to Reddit or Hacker News.

To support fast queries, the filenames of link-posts should use the [ISO 8601](https://tools.ietf.org/html/rfc3339)-encoded `createdAt` value, which can be generated using Javascripts's `Date` object `toISOString()` function. This enables consumers to read posts in a date range and ordered by date without any prior indexing.

```json
{
  "type": "unwalled.garden/link-post",
  "content": {
    "url": "dat://beakerbrowser.com",
    "title": "Beaker Browser",
    "description": "A p2p Web browser",
    "type": ["web-page"]
  },
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```
