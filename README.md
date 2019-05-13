# unwalled.garden

![Draft](https://img.shields.io/badge/Draft-In%20progress-yellow.svg) ![Not implemented](https://img.shields.io/badge/Status-Not%20implemented-red.svg)

Schemas and APIs for social applications on the Dat Web.

## How it works

 - Every user has their own Dat website.
 - Users publish posts, comments, and other kinds of content on their sites.
 - Users follow each other to sync their content.
 - Follows are public, creating a social graph.

You can think of it as a souped-up RSS: users publish records as files on their sites, then sync the files regularly to receive updates. This is used to power news feeds, aggregators, comments sections, search engines, and more.

New to dat? [Read this quick primer.](./dat-primer.md)

## API

[Read the API docs here](./docs/readme.md).

```js
import {posts, graph} from 'dat://unwalled.garden/index.js'

await posts.addPost({content: {body: 'Hello, world!'}})
await graph.follow('dat://beakerbrowser.com')
```

Requires [Beaker browser 0.9+](https://beakerbrowser.com).

## File structure

```
/dat.json               - The standard dat metadata file
/thumb.(jpg|png)        - A 256x256 thumbnail photo (avatar)
/cover.(jpg|png)        - A high-resolution landscape-ratio cover photo
/data/follows.json      - An unwalled.garden/follows record
/data/posts/            - Contains unwalled.garden/post records
/data/reactions/        - Contains unwalled.garden/reaction records
/data/comments/         - Contains unwalled.garden/comment records
/data/votes/            - Contains vote records (see "the votes folder")
/data/known-sites/      - Contains cached copies of referenced sites' metadata
```

## Schema listing

 - JSON-Record types
   - [Comment](./comment.md) `unwalled.garden/comment`
   - [Follows](./follows.md) `unwalled.garden/follows`
   - [Post](./post.md) `unwalled.garden/post`
   - [Reaction](./reaction.md) `unwalled.garden/reaction`

## Folder patterns

### The posts folder

The posts folder contains [post](./post.md) records which are published over time. Those files are named by their creation time. This makes them easy to read chronologically.

Example listing:

```
/data/posts/2019-01-26T16:32:55.109Z.json
/data/posts/2019-01-26T17:55:31.856Z.json
/data/posts/2019-01-26T17:58:05.118Z.json
```

### The bookmarks folder

The bookmarks folder contains [bookmark](./bookmark.md) records which are published over time. Those files are named by their creation time. This makes them easy to read chronologically.

Example listing:

```
/data/bookmarks/2019-01-26T16:32:55.109Z.json
/data/bookmarks/2019-01-26T17:55:31.856Z.json
/data/bookmarks/2019-01-26T17:58:05.118Z.json
```

### The known-sites folder

The "known-sites" folder contains copies of metadata from sites reference by the containing site. It is used to reduce the number of network lookups. For instance, when bob's site announces that it follows alice, bob's site will write a copy of alice's metadata in its known-sites. Bob's followers can then reference the cached metadata.

The structure of the known-sites folder is as follows:

```
/data/known-sites/{hostname}/dat.json
/data/known-sites/{hostname}/favicon.ico
/data/known-sites/{hostname}/thumb.jpg
/data/known-sites/{hostname}/...
```

Generally speaking, only the dat.json and a few image assets (thumbnail, cover-photo, favicon) should be included.

### The reactions folder

The reactions folder contains reactions created by the user. It contains the [reaction](./reaction.md) record.

The structure of the comments folder is as follows:

```
/data/reactions/{slugified-url}.json
```

An example:

```
/data/reactions/dat-beakerbrowser-com-docs.json
```

You can find the algorithm for slugifying URLs in [slugify-url.js](slugify-url.js).

### The comments folder

The comments folder contains comments created by the user. It contains the [comment](./comment.md) record.

The structure of the comments folder is as follows:

```
/data/comments/{slugified-url}/{creation-time}.json
```

An example:

```
/data/comments/dat-beakerbrowser-com-docs/2019-01-26T16:32:55.109Z.json
```

You can find the algorithm for slugifying URLs in [slugify-url.js](slugify-url.js).

### The votes folder

Votes are a special kind of content-free record. The files encode their information entirely in the filename (the files themselves are empty).

The structure of the votes folder is as follows:

```
/data/votes/{slugified-url}.{up|down}
```

An example:

```
/data/votes/dat-beakerbrowser-com-docs.up
```

If two conflicting votes are present (both a ".up" and ".down" file) then readers should interpret the vote as nullified.

## Governance

The rules for governance are as follows:

 1. Open [issues](/issues) or [pull requests](/pulls) to discuss changes, problems, and ideas.
 2. Pull requests should be made to the `develop` branch.
 3. As unwalled.garden is a decentralized network, breaking changes are not allowed.
 4. All PRs require the BDFL's final approval before merging.

The current [BDFL](https://en.wikipedia.org/wiki/Benevolent_dictator_for_life) is [Paul Frazee](https://github.com/pfrazee).

The current reference implementation is [Beaker](https://github.com/beakerbrowser/beaker). The `develop` branch will be merged into `master` when the reference implementation has been published with appropriate support for the changes.
