# [&laquo;](./readme.md) APIs

## Reactions API

```js
import {reactions} from 'dat://unwalled.garden/index.js'

await reactions.query({filters: {authors}, offset, limit, reverse})
await reactions.listReactions(url)
await reactions.addReaction(url, emoji)
await reactions.deleteReaction(url, emoji)
```

TODO
