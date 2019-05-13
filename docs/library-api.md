# [&laquo;](./readme.md) APIs

## Library API

```js
import {library} from 'dat://unwalled.garden/index.js'

await library.list({filters: {type, owner, saved}})
await library.get(url)
await library.add(url, {localPath, previewEnabled})
await library.edit(url, {localPath, previewEnabled})
await library.remove(url)
await library.uncache(url)
```

TODO