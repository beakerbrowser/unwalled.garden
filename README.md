# unwalled.garden

![Draft](https://img.shields.io/badge/Draft-In%20progress-yellow.svg) ![Not implemented](https://img.shields.io/badge/Status-Not%20implemented-red.svg)

A collection of schemas used by Beaker.

## Site Schemas

### User

 - Schema: [`unwalled.garden/user`](./user.json)

This is the schema of user sites which are created automatically by Beaker. It produces the following file/folder structure:

```
/data/follows.json   - A unwalled.garden/follows
/data/posts          - Contains unwalled.garden/post
```

## JSON Schemas

### Follows

 - Description: A list of data subscriptions.
 - Schema: [`unwalled.garden/follows`](./follows.json)
 - Path: `/data/follows.json`

Follows are used to declare a data subscription. It indicates trust in the target entity as a source of information.

```json
{
  "type": "unwalled.garden/follows",
  "urls": ["dat://beakerbrowser.com", "dat://alice.com", "dat://bob.com"]
}
```

### Posts

 - Description: A short broadcast.
 - Schema: [`unwalled.garden/post`](./post.json)
 - Path: `/data/posts/{createdAt}.json`

Posts are the main content that comprise news feeds.

The filenames of the posts should use the [ISO 8601](https://tools.ietf.org/html/rfc3339)-encoded `createdAt` value, which can be generated using Javascripts's `Date` object `toISOString()` function.

```json
{
  "type": "unwalled.garden/post",
  "content": "Hello, world!",
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```

## Potential future schemas

### Redirect Notices

A suggested redirect from one site to another. Useful for when a site's private key has been lost. Let's you suggest the correct place to go instead.

### Bookmarks

 - Description: Saved links from around the Web.
 - Schema: [`unwalled.garden/bookmark`](./bookmark.json)

Bookmark objects are used directly by the browser to create public and private bookmarks.

```json
{
  "type": "unwalled.garden/bookmark",
  "href": "dat://beakerbrowser.com",
  "title": "Beaker Browser",
  "tags": ["browser", "p2p", "web"]
}
```

### Warnings

 - Description: Warnings about sites and people around the Web.
 - Schema: [`unwalled.garden/warning`](./warning.json)

Warnings are used to build the identity layer of the Web-of-Trust. They give users a way to warn about sites which are dangerous or misleading. The warnings are prominently displayed in a site's profile.

```json
{
  "type": "unwalled.garden/warning",
  "href": "dat://a53dc009ee2b74b6782cac56db17754b4c450354c437d68391b3bfbddb76c221",
  "warning": "This is not the real Beaker Browser site!"
}
```
