## How does Unwalled.Garden work?

### Souped-up RSS

Unwalled.Garden is a kind of "Souped up [RSS](https://en.wikipedia.org/wiki/RSS)." Every user has a website; they publish their content as files; they subscribe to each others' sites; and that's it! It's conceptually similar to Twitter but as a files protocol.

While RSS was primarily for blogging, Unwalled.Garden includes a variety of data types for many kinds of use-cases. These data types are spread across many JSON files which live at pre-defined paths. Desktop or mobile clients sync the files into a database which they can query to run their application.

<aside>
The Unwalled.Garden has three principles:

1. Every user is a website.
2. Every record is a file.
3. Users follow each other's sites to sync their files.

Everything about the network flows from these principles.
</aside>

The schemas are simple, obvious, and syntax-free. A record usually looks like this:

```json
{
  "type": "unwalled.garden/post",
  "content": {
    "body": "Hello, world!"
  },
  "createdAt": "2019-05-21T21:27:45.471Z"
}
```

The file structure of sites looks something like this:

```
/dat.json
/data/follows.json
/data/posts/2019-05-21T21:27:45.466Z.json
/data/posts/2019-05-22T15:54:05.204Z.json
/data/reactions/dat-beakerbrowser.com.json
/index.html
/index.css
```

The network is currently designed for the [Dat protocol](https://dat.foundation) (read an [introduction primer here](./dat-primer)) but it can theoretically be expanded to include HTTP as well.

### Browser integration

[Beaker Browser 0.9](https://beakerbrowser.com) implements Unwalled.Garden as part of the browser. It is able to display followed users in the URL bar and dynamically load applications based on the site or file that's been browsed to.

Beaker also includes a batteries-included API which is loaded from the [dat://unwalled.garden](dat://unwalled.garden) website. These APIs wrap the Dat filesystem and Beaker's internal indexes.

```js
import {posts, reactions, comments} from 'dat://unwalled.garden/index.js'
var post = await posts.add('Hello, world!')
await comments.add(post.url, 'Great post, alice!')
await reactions.add(post.url, '👍')
var feed = await posts.query({limit: 10})
```

The browser automatically creates a personal website for the user on first load. The personal site acts as the user profile and is where the user's content is published. The URL of the site acts as their global ID.

```js
import {profiles, graph} from 'dat://unwalled.garden/index.js'
await profiles.getCurrentUser()
await graph.follow('dat://beakerbrowser.com')
```

The indexes include full-text search for querying the user's personal network.

```js
import {search} from 'dat://unwalled.garden/index.js'
await search.query({
  query: 'Beaker',
  filters: {datasets: 'unwalled.garden/post'}
})
```

Beaker will track its APIs with the latest Unwalled.Garden standards. More implementations of the APIs will be created as the network matures.