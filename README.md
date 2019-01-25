# unwalled.garden

![Draft](https://img.shields.io/badge/Draft-In%20progress-yellow.svg) ![Not implemented](https://img.shields.io/badge/Status-Not%20implemented-red.svg)

A collection of schemas used by Beaker.

## Site schemas

Site schemas are a description of the file-structure of a website. Dat sites indicate their compliance by declaring their URL in the `type` field of the dat.json.

You can find the [full list of site schemas here](#full-list-of-site-schemas). 

## JSON schemas

[JSON schemas](https://json-schema.org/) are a description of a JSON file. Dat sites include multiple JSON files which follow these schemas.

You can find the [full list of json schemas here](#full-list-of-json-schemas). 

## Full list of site schemas

 - [Agents](./site/agent.md)<br>unwalled.garden/site/agent
 - [Channels](./site/channels.md)<br>unwalled.garden/site/channel
 - Media collections
   - Photo album (unwalled.garden/site/photo-album)
   - Music album (unwalled.garden/site/music-album)
   - Music playlist (unwalled.garden/site/music-playlist)
   - Video playlist (unwalled.garden/site/video-playlist)
   - Files (unwalled.garden/site/files)
 - Media items
   - Template (unwalled.garden/site/template)
   - ES module (unwalled.garden/site/es-module)
   - Photo (unwalled.garden/site/photo)
   - Video (unwalled.garden/site/video)
   - Song (unwalled.garden/site/song)
   - Podcast episode (unwalled.garden/site/podcast-episode)
   - Blog post (unwalled.garden/site/blog-post)
   - File (unwalled.garden/site/file)

## Full list of json schemas

 - Used by Agents
   - [**Subscriptions**](./json/subscriptions.md)<br>unwalled.garden/json/subscriptions
 - Used by Agents and Channels
   - [**Published sites**](./json/published-sites.md)<br>unwalled.garden/json/published-sites
   - [**Link**](./json/link.md)<br>unwalled.garden/json/link
