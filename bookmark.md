### Bookmark

 - JSON Record
 - Description: A saved/shared link to some URL.
 - Schema: [`unwalled.garden/bookmark`](./bookmark.json)
 - Path: `/data/bookmarks/{createdAt}.json`

Bookmarks are references to locations on the Web which are shared with followers. They are meant to be indexed for search and discovery.

The filenames of bookmarks should use the [ISO 8601](https://tools.ietf.org/html/rfc3339)-encoded `createdAt` value, which can be generated using Javascripts's `Date` object `toISOString()` function. This enables consumers to read links in a date range and ordered by date without any prior indexing.

Example link:

```json
{
  "type": "unwalled.garden/bookmark",
  "content": {
    "href": "dat://beakerbrowser.com",
    "title": "Beaker Browser",
    "description": "An experimental peer-to-peer Web browser by Paul Frazee. Built using the dat protocol.",
    "tags": "p2p web dat"
  },
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```

Additional notes:

 - The title and tags are limited to 280 characters.
 - The description is limited to 560 characters.
 - The tags field is used to help improve search and discovery. It is a list of searchable words separated by spaces.