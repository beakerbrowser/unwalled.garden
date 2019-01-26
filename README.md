# unwalled.garden

![Draft](https://img.shields.io/badge/Draft-In%20progress-yellow.svg) ![Not implemented](https://img.shields.io/badge/Status-Not%20implemented-red.svg)

Schemas for a p2p social-media network built on the Dat Web.

## How it works

 - Every user has their own Dat website.
 - Users publish posts, comments, and other kinds of content on their sites.
 - Users follow each other to sync their content.
 - Follows are public, creating a social graph.

In practice, unwalled.garden is only a set of schemas and specs. It must be implemented by applications. The reference implementation is [Beaker](https://github.com/beakerbrowser/beaker).

### Supported use-cases

Unwalled.garden has schemas for multiple different use cases:

 - News feeds
 - Link aggregators
 - Blogging
 - Music players
 - Video players
 - Podcast players
 - General file-sharing

### Site types

Every Dat website has a type which is declared in their `dat.json` file. The type determines site meaning, behavior, and file-structure.

#### User sites

User sites follow the following file-structure:

```
/data/follows.json      - A unwalled.garden/follows record
/data/micro-feed/       - Contains unwalled.garden/micro-post records
/data/link-feed/        - Contains unwalled.garden/link-post records
/data/comments/         - Contains unwalled.garden/comment records
/data/votes/            - Contains vote records (see "the votes folder")
/data/published-sites/  - Contains unwalled.garden/published-site records
/data/known-sites/      - Contains cached copies of referenced sites' metadata
```

#### Channel sites

Channel sites are followable streams of content. They follow the following file-structure:

```
/data/content-feed/     - Contains unwalled.garden/content records
/media/                 - Contains the media files
```

#### Media sites

Media sites are individual pieces of content. They follow the following file-structure:

```
/data/content.json      - A unwalled.garden/content record
/media/                 - Contains the media files
```

## The full site-type listing

 - Users
   - [Person](./person.md)
   - [Organization](./organization.md)
   - [Bot](./bot.md)
   - [Project](./project.md)
   - [Place](./place.md)
 - Channels
   - [Blog](./channel/blog.md)
   - [Podcast](./channel/podcast.md)
   - [Music](./channel/music.md)
   - [Video](./channel/video.md)
   - [Photo](./channel/photo.md)
 - Media
   - [Article](./media/article.md)
   - [Photo-album](./media/photo-album.md)
   - [Photo](./media/photo.md)
   - [Music-album](./media/music-album.md)
   - [Music-playlist](./media/music-playlist.md)
   - [Song](./media/song.md)
   - [Podcast-episode](./media/podcast-episode.md)
   - [Video-playlist](./media/video-playlist.md)
   - [Video](./media/video.md)
   - [File-set](./media/file-set.md)
   - [File](./media/file.md)

### The full record-type listing

 - [Follows](./follows.md)
 - [Micro post](./micro-post.md)
 - [Link post](./link-post.md)
 - [Published site](./published-site.md)
 - [Comment](./comment.md)
 - [Content](./content.md)

## Folder patterns

### The *-feed folders

Feed folders contain records that are published over time. Examples include [micro posts](./micro-post.md) and [link posts](./link-post.md) for users, and [content](./content.md) for channels.

Records in feed folders are named by their creation time. This makes them easy to read chronologically. Example listing:

```
/data/micro-feed/2019-01-26T16:32:55.109Z.json
/data/micro-feed/2019-01-26T17:55:31.856Z.json
/data/micro-feed/2019-01-26T17:58:05.118Z.json
```

### The published-sites folder

The published-sites folder lists the sites created by a user. It contains the [published site](./published-site.md) record.

Records in the published-sites folder are named by the hostname of the sites they reference. This makes it easy to look up the record for a given site. Example listing:

```
/data/published-sites/43dfc9f23fdded8cc7c01c71c0702a0529130af0258e7fb30bf5a0a3f73d69b3.json
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

Generally speaking, only the dat.json and a few image assets should be included.

### The comments folder

The comments folder contains comments created by the user. It contains the [comment](./comment.md) record.

The structure of the comments folder is as follows:

```
/data/comments/{slugified-url}/{creation-time}.json
```

An example:

```
/data/comments/beakerbrowser-com-docs/2019-01-26T16:32:55.109Z.json
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
/data/comments/beakerbrowser-com-docs.up
```

## Governance

The rules for governance are as follows:

 1. Open [issues](/issues) or [pull requests](/pulls) to discuss changes, problems, and ideas.
 2. Pull requests should be made to the `develop` branch.
 3. As unwalled.garden is a decentralized network, breaking changes are not allowed.
 4. All PRs require the BDFL's final approval before merging.

The current [BDFL](https://en.wikipedia.org/wiki/Benevolent_dictator_for_life) is [Paul Frazee](https://github.com/pfrazee).

The current reference implementation is [Beaker](https://github.com/beakerbrowser/beaker). The `develop` branch will be merged into `master` when the reference implementation has been published with appropriate support for the changes.

## FAQ

### How do users differ from channels?

Users and channels are both followable, however channels are usually published by users as a place to put topic-specific content. For instance, a user might create multiple `podcast` channels to cover many different topics.

Here's the technical ways the channels differ from users:

 - Channels can only publish certain types of content. 
 - Channels can not follow sites.

### How do channels differ from media sites?

Channels and media both represent content. However, channels publish content over time and therefore can be followed, while media sites contain all of their content at the time of publishing (though media sites may be versioned).