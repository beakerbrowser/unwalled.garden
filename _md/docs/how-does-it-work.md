## How does Unwalled.Garden work?

### Souped-up RSS

Unwalled.Garden is a kind of "Souped up [RSS](https://en.wikipedia.org/wiki/RSS)." Every user has a website; they publish their content as files; they subscribe to each others' sites; and that's it!

While RSS was primarily for blogging, Unwalled.Garden includes data types for many kinds of use-cases. These data types are spread across many JSON files which have pre-defined schemas.

<aside>
The Unwalled.Garden has three principles:

1. Every user is a website.
2. Every record is a file.
3. Users follow each other's sites to sync their files.

Everything about the network flows from these principles.
</aside>

### Schemas

Unwalled.Garden is built for the [Dat protocol](https://dat.foundation) (read an [introduction primer here](./dat-primer)) but it can be adapted to use HTTP as well.

The type schemas are simple, obvious, and syntax-free. A "post" record looks like this:

```json
{
  "body": "Hello, world!",
  "createdAt": "2019-05-21T21:27:45.471Z"
}
```

The schema types are stored in [metadata fields](/docs/metadata) on files and folders. We identify the types using URLs such as:

 - [unwalled.garden/post](/post)
 - [unwalled.garden/comment](/comment)
 - [unwalled.garden/reaction](/reaction)
 - [unwalled.garden/person](/person)
 - etc

All files are expected to fall under predefined paths which are typically under `.data/unwalled.garden`. An example site might look like this:

```
URL                                                  | Type
-------------------------------------------------------------------------------
dat://bob.com                                        | unwalled.garden/person
dat://bob.com/.data/unwalled.garden                  | unwalled.garden/dir/data
dat://bob.com/.data/unwalled.garden/posts/hello.json | unwalled.garden/post
dat://bob.com/.data/unwalled.garden/reactions/1.json | unwalled.garden/reaction
dat://bob.com/.data/unwalled.garden/comments/1.json  | unwalled.garden/comment
```

Bob's site identifies as a [Person](/person) and it includes a [Post](/post), [Reaction](/reaction), and [Comment](/comment). A reader will crawl the website looking for these files to sync into its local database.

<aside>
JSON files go in pre-defined paths. Clients crawl the sites to find files they're interested in.
</aside>

### Browser integration

[Beaker Browser 0.9](https://beakerbrowser.com) implements Unwalled.Garden as part of the browser. It supports a high-level API which is loaded from the [dat://unwalled.garden](dat://unwalled.garden) website. These APIs wrap the Dat filesystem and Beaker's internal indexes.

```js
import {posts, reactions, comments} from 'dat://unwalled.garden/index.js'
var feed = await posts.query({reverse: true, limit: 10})
var post = await posts.add('Hello, world!')
await comments.add(post.url, 'Great post by me!')
await reactions.add(post.url, '👍')
```

The browser automatically creates a personal website for the user on first load. The personal site acts as the user profile and is where the user's content is published.

```js
import {profiles, graph} from 'dat://unwalled.garden/index.js'
var me = await profiles.getCurrentUser()
await graph.follow('dat://beakerbrowser.com')
```

The indexes include full-text search for querying the user's personal network.

```js
import {search} from 'dat://unwalled.garden/index.js'
await search.query({
  query: 'Beaker',
  filters: {schemas: 'unwalled.garden/post'}
})
```

Beaker will track its APIs with the latest Unwalled.Garden standards. More implementations of the APIs will be created as the network matures.