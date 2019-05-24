## Post

---

 - **Type**: JSON Record
 - **Description**: A broadcasted piece of content.
 - **Schema**: [unwalled.garden/post](./post.json)
 - **Path**: /data/posts/{createdAt}.json

---

Posts are pieces of content which is broadcasted to followers. They are meant to be aggregated into "feed" applications similar to Twitter.

the filenames of posts should use the [ISO 8601](https://tools.ietf.org/html/rfc3339)-encoded `createdAt` value, which can be generated using Javascripts's `Date` object `toISOString()` function. This enables consumers to read posts in a date range and ordered by date without any prior indexing.

Example text post:

```json
{
  "type": "unwalled.garden/post",
  "content": {
    "body": "Hello, world!"
  },
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```

Additional notes:

 - The body text is limited to 280 characters.