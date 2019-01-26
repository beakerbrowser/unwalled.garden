# unwalled.garden

![Draft](https://img.shields.io/badge/Draft-In%20progress-yellow.svg) ![Not implemented](https://img.shields.io/badge/Status-Not%20implemented-red.svg)

The unwalled.garden for a p2p social-media network built on the Dat Web.

How it works:

 - Every user has their own Dat website.
 - Users publish links, comments, and other kinds of content on their sites.
 - Users follow each other to sync their content.
 - Follows are public, creating a social graph.

In practice, unwalled.garden is only a set of schemas and specs. It must be implemented by applications on the Dat Web. The reference implementation is the [Beaker](https://github.com/beakerbrowser/beaker).

## Site types

The Dat Web is "semantic," meaning that the information is machine-readable and typed. Every Dat website has a type which is declared in their `dat.json` file. The type determines site meaning, behavior, and file-structure.

Unwalled.garden currently uses 3 varieties of site types:

 - Users, the participants on the network.
 - Channels, followable streams of content.
 - Media, individual pieces of content.

Generally speaking, the user types publish content on their own sites or on channel sites and media sites. The channel and media sites act as separate containers of content.

### The full site-type listing

 - **Users**
   - [Person](./person.md). A human user.<br>unwalled.garden/person
   - [Organization](./organization.md). A business, group, government agency, or non-profit.<br>unwalled.garden/organization
   - [Bot](./bot.md). A non-human user.<br>unwalled.garden/bot
   - [Project](./project.md). A goal-oriented group.<br>unwalled.garden/project
   - [Place](./place.md). A location in the world.<br>unwalled.garden/place
 - **Channels**
   - [Blog](./channel/blog.md). Publishes blog-post files.<br>unwalled.garden/channel/blog
   - [Podcast](./channel/podcast.md). Publishes podcast files.<br>unwalled.garden/channel/podcast
   - [Music](./channel/music.md). Publishes music files.<br>unwalled.garden/channel/music
   - [Video](./channel/video.md). Publishes video files.<br>unwalled.garden/channel/video
   - [Photo](./channel/photo.md). Publishes image files.<br>unwalled.garden/channel/photo
 - **Media**
   - [Article](./media/article.md). A single document file.<br>unwalled.garden/media/article
   - [Photo-album](./media/photo-album.md). A collection of image files.<br>unwalled.garden/media/photo-album
   - [Photo](./media/photo.md). A single image file.<br>unwalled.garden/media/photo
   - [Music-album](./media/music-album.md). A collection of music files.<br>unwalled.garden/media/music-album
   - [Music-playlist](./media/music-playlist.md). A collection of music files.<br>unwalled.garden/media/music-playlist
   - [Song](./media/song.md). A single music file.<br>unwalled.garden/media/song
   - [Podcast-episode](./media/podcast-episode.md). A single podcast file.<br>unwalled.garden/media/podcast-episode
   - [Video-playlist](./media/video-playlist.md). A collection of video files.<br>unwalled.garden/media/video-playlist
   - [Video](./media/video.md). A single video file.<br>unwalled.garden/media/video
   - [File-set](./media/file-set.md). A collection of files of any type.<br>unwalled.garden/media/file-set
   - [File](./media/file.md). A single file of any type.<br>unwalled.garden/media/file

## JSON types

Sites often publish data-records in the form of JSON. These records are typed and must conform to a JSON-schema.

Published by user sites:

 - [Follows](./record/follows.md). The list of sites followed by a user.<br>unwalled.garden/record/follows
 - [Post](./record/post.md). A microblog post.<br>unwalled.garden/record/post
 - [Comment](./record/comment.md). A threaded comment on some URL.<br>unwalled.garden/record/comment
 - [Vote](./record/vote.md). An up or down vote on some URL.<br>unwalled.garden/record/vote
 - [Link](./record/link.md). A link published by a user.<br>unwalled.garden/record/link
 - [Published site](./record/published-site.md). A site published by a user.<br>unwalled.garden/record/published-sites

Published by channel sites:

 - [Content feed](./record/content-feed.md). A feed of published content.<br>unwalled.garden/record/content-feed

Published by media sites:

 - [Content](./record/content.md). A listing of published content.<br>unwalled.garden/record/conten

## Site-type patterns

The site types follow one of the following 3 patterns. Read the individual types' descriptions to see the exact details of the type.

### Site-type pattern: User

User sites follow the following file-structure:

```
/data/follows.json      - A unwalled.garden/record/follows
/data/posts/            - Contains unwalled.garden/record/post
/data/comments/         - Contains unwalled.garden/record/comments
/data/votes/            - Contains unwalled.garden/record/votes
/data/links/            - Contains unwalled.garden/record/link
/data/published-sites/  - Contains unwalled.garden/record/published-site
/data/known-sites/      - Contains cached copies of referenced sites' metadata
```

### Site-type pattern: Channel

Channel sites follow the following file-structure:

```
/data/content-feed/     - Contains unwalled.garden/record/content-feed
/media/                 - Contains the media files
```

### Site-type pattern: Media

Media sites follow the following file-structure:

```
/data/content.json      - Contains unwalled.garden/record/content
/media/                 - Contains the media files
```

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