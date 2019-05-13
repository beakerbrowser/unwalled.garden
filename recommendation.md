### Recommendation

 - JSON Record
 - Description: A broadcasted recommendation for some resource.
 - Schema: [`unwalled.garden/recommendation`](./recommendation.json)
 - Path: `/data/recommendations/{slugified-href}.json`

Recommendations are pointers to resources which the author thinks is worth seeing or using.

The `"category"` field should be a resource-type URL. Examples include:

 - [`unwalled.garden/website`](./website.md)
 - [`unwalled.garden/application`](./application.md)
 - [`unwalled.garden/person`](./person.md)
 - [`unwalled.garden/post`](./post.md)
 - ['unwalled.garden/comment`](./comment.md)

Example recommendation for an application:

```json
{
  "type": "unwalled.garden/recommendation",
  "category": "unwalled.garden/application",
  "href": "dat://beaker.social",
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```
