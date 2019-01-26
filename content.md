### Content

 - JSON Record
 - Description: A description of media content.
 - Schema: [`unwalled.garden/content`](./content.json)
 - Path: `/data/content.json` or `/data/content/{createdAt}.json`

Content records describe the media contained in a media or channel site.

When a site contains multiple media items, as in the case of photo albums or file sets, the `items` propery should be used. When a site contains a single item, or when the record is part of a content feed for a channel, the `item` property should be used. If both properties are used, the `item` property should be ignored.

The `filename` property should reference a file in the `/media` folder of the site. It can not reference sub-directories.

When used in a media site, the filename of content should be `content.json`. When used in a channel site, the filename of content should use the [ISO 8601](https://tools.ietf.org/html/rfc3339)-encoded `createdAt` value, which can be generated using Javascripts's `Date` object `toISOString()` function.

```json
{
  "type": "unwalled.garden/content",
  "item": {
    "filename": "episode3.mp3",
    "title": "Episode 3",
    "description": "In this episode, we discuss the open Web and why it's important that users have control over their software."
  },
  "createdAt": "2018-12-07T02:52:11.947Z"
}
```

```json
{
  "type": "unwalled.garden/content",
  "items": [
    {
      "filename": "kit_eating_a_fly.jpg",
      "title": "Our silly cat ate a fly!"
    },
    {
      "filename": "kit_sleeping1.jpg",
      "title": "Kit sleeping",
      "description": "She is such an angel!!!"
    }
  ],
  "createdAt": "2018-12-07T04:15:44.722Z"
}
```