# Link

 - Description: A broadcasted link to some content.
 - Schema: [`unwalled.garden/link`](./link.json)
 - Path: `/data/links/*.json`

Links are a way to publish pointers to content. They differ from published-sites by being detached from the target content, meaning they can point to other people's content or be posted multiple times. Whereas published-sites are toggles (published or not) links are messages.

```json
{
  "type": "unwalled.garden/link",
  "content": {
    "url": "dat://beakerbrowser.com",
    "title": "Beaker Browser",
    "description": "A p2p Web browser",
    "type": ["web-page"]
  },
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```
