# unwalled.garden

![Draft](https://img.shields.io/badge/Draft-In%20progress-yellow.svg) ![Not implemented](https://img.shields.io/badge/Status-Not%20implemented-red.svg)

A collection of schemas used by Beaker.

## Full list of site schemas

### Publishers

 - [Agents](./site/agent.md)<br>unwalled.garden/site/agent
 - [Channels](./site/channels.md)<br>unwalled.garden/site/channel

### Media collections

 - [Photo album](./site/photo-album.md)<br>unwalled.garden/site/photo-album
 - [Music album](./site/music-album.md)<br>unwalled.garden/site/music-album
 - [Music playlist](./site/music-playlist.md)<br>unwalled.garden/site/music-playlist
 - [Video playlist](./site/video-playlist.md)<br>unwalled.garden/site/video-playlist
 - [Files](./site/files.md)<br>unwalled.garden/site/files
 
 ### Media items

 - [Template](./site/template.md)<br>unwalled.garden/site/template
 - [ES module](./site/es-module.md)<br>unwalled.garden/site/es-module
 - [Photo](./site/photo.md)<br>unwalled.garden/site/photo
 - [Video](./site/video.md)<br>unwalled.garden/site/video
 - [Song](./site/song.md)<br>unwalled.garden/site/song
 - [Podcast episode](./site/podcast-episode.md)<br>unwalled.garden/site/podcast-episode
 - [Blog post](./site/blog-post.md)<br>unwalled.garden/site/blog-post
 - [File](./site/file.md)<br>unwalled.garden/site/file

## Full list of json schemas

### Used by Agents

 - [Subscriptions](./json/subscriptions.md)<br>unwalled.garden/json/subscriptions

### Used by Agents and Channels

 - [Published sites](./json/published-sites.md)<br>unwalled.garden/json/published-sites
 - [Link](./json/link.md)<br>unwalled.garden/json/link


## Governance

The rules for governance are as follows:

 1. Open [issues](/issues) or [pull requests](/pulls) to discuss changes, problems, and ideas.
 2. Pull requests should be made to the `develop` branch.
 3. As unwalled.garden is a decentralized network, breaking changes are not allowed.
 4. All PRs require the BDFL's final approval before merging.

The current [BDFL](https://en.wikipedia.org/wiki/Benevolent_dictator_for_life) is [Paul Frazee](https://github.com/pfrazee).

The current reference implementation is the [Beaker browser](https://github.com/beakerbrowser/beaker). The `develop` branch will be merged into `master` when the reference implementation has been published with appropriate support for the changes.