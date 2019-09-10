## Browser integration

[Beaker Browser 0.9](https://beakerbrowser.com) implements Unwalled.Garden as part of the browser. It supports a high-level API which is loaded from the [dat://unwalled.garden](dat://unwalled.garden) website. These APIs wrap the Dat filesystem and Beaker's internal indexes.

```js
import {statuses, follows, reactions, comments} from 'dat://unwalled.garden/index.js'
await follows.add('dat://beakerbrowser.com')
var feed = await statuses.list({reverse: true, limit: 10})
var status = await statuses.add('Hello, world!')
await comments.add(status.url, 'Great post by me!')
await reactions.add(status.url, '👍')
```

The browser automatically creates a personal website for the user on first load. The personal site acts as the user profile and is where the user's content is published.

```js
import {profiles} from 'dat://unwalled.garden/index.js'
var me = await profiles.me()
me.url         // 'dat://12cd..ff'
me.title       // 'Bob'
me.description // 'A hacker'
```

Beaker will track its APIs with the latest Unwalled.Garden standards. More implementations of the APIs will be created as the network matures.