# unwalled.garden

![Draft](https://img.shields.io/badge/Draft-In%20progress-yellow.svg) ![Not implemented](https://img.shields.io/badge/Status-Not%20implemented-red.svg)

The unwalled.garden for a p2p social-media network built on the Dat Web.

## How it works

 - Every user has their own Dat website.
 - Users publish links, comments, and other kinds of content on their sites.
 - Users follow each other to sync their content.
 - Follows are public, creating a social graph.

In practice, unwalled.garden is only a set of schemas and specs. It must be implemented by applications. The reference implementation is [Beaker](https://github.com/beakerbrowser/beaker).

### Site types

The Dat Web is "semantic," meaning that the information is machine-readable and typed. Every Dat website has a type which is declared in their `dat.json` file. The type determines site meaning, behavior, and file-structure.

Unwalled.garden currently uses 3 patterns of site types:

 - Users, the participants on the network.
 - Channels, followable streams of content.
 - Media, individual pieces of content.

Generally speaking, the users publish content on their own sites or on channel and media sites. The channel and media sites act as separate containers of content.

Sites publish data-records in the form of JSON. These records are typed and must conform to their own JSON-schemas.

### User sites

User sites follow the following file-structure:

```
/data/follows.json      - A unwalled.garden/record/follows record
/data/posts/            - Contains unwalled.garden/record/post records
/data/comments/         - Contains unwalled.garden/record/comments records
/data/votes/            - Contains unwalled.garden/record/votes records
/data/links/            - Contains unwalled.garden/record/link records
/data/published-sites/  - Contains unwalled.garden/record/published-site records
/data/known-sites/      - Contains cached copies of referenced sites' metadata
```

### Channel sites

Channel sites follow the following file-structure:

```
/data/content-feed/     - Contains unwalled.garden/record/content-feed records
/media/                 - Contains the media files
```

### Media sites

Media sites follow the following file-structure:

```
/data/content.json      - A unwalled.garden/record/content record
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

 - [Follows](./record/follows.md)
 - [Post](./record/post.md)
 - [Comment](./record/comment.md)
 - [Vote](./record/vote.md)
 - [Link](./record/link.md)
 - [Published site](./record/published-site.md)
 - [Content feed](./record/content-feed.md)
 - [Content](./record/content.md)

## The known-sites folder

The "known-sites" folder contains copies of metadata from sites reference by the containing site. It is used to reduce the number of network lookups. For instance, when bob's site announces that it follows alice, bob's site will write a copy of alice's metadata in its known-sites. Bob's followers can then reference the cached metadata.

The structure of the known-sites folder is as follows:

```
/data/known-sites/{hostname}/dat.json
/data/known-sites/{hostname}/favicon.ico
/data/known-sites/{hostname}/thumb.jpg
/data/known-sites/{hostname}/...
```

Generally speaking, only the dat.json and a few image assets should be included.

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

 - Channels can only publish certain types of content, as determined by the `channelType`. 
 - Channels can not follow sites.

### How do channels differ from media sites?

Channels and media both represent content. However, channels publish content over time and therefore can be followed, while media sites contain all of their content at the time of publishing (though media sites may be versioned).