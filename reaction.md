### Reaction

 - JSON Record
 - Description: An emoji annotation on some resource.
 - Schema: [`unwalled.garden/reaction`](./reaction.json)
 - Path: `/data/reactions/{slugified-url}.json`

Reactions are emojis which users attach to content. They are a more general form of a "like." They have minimal semantic meaning, though the emojis could easily be categorized for sentiment.

The full list of supported emoji code-points can be found at [supported-reaction-emojis.json](./supported-reaction-emojis.json). All skin-tone variants of that listing should be supported as well. Emojis which are not found in that list should be ignored.

Reactions are published as a filename which is the slugified URL of the topic. You can find the algorithm for slugifying URLs in [slugify-url.js](./slugify-url.js).

A standard reaction:

```json
{
  "type": "unwalled.garden/reaction",
  "topic": "dat://beakerbrowser.com/",
  "emojis": ["👍", "🔥"]
}
```