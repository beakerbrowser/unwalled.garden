### Micro Post

 - JSON Record
 - Description: A short text post.
 - Schema: [`unwalled.garden/micro-post`](./micro-post.json)
 - Path: `/data/feed/{createdAt}.json`

Micro-posts are a short text document which may contain embedded media such as photos, video, and audio. They are aggregated in "news feed" applications which are similar to Twitter.

To support fast queries, the filenames of micro-posts should use the [ISO 8601](https://tools.ietf.org/html/rfc3339)-encoded `createdAt` value, which can be generated using Javascripts's `Date` object `toISOString()` function. This enables consumers to read posts in a date range and ordered by date without any prior indexing.

```json
{
  "type": "unwalled.garden/micro-post",
  "content": "Hello, world!",
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```