## Reactions API

Reactions are emojis which can be attached to any arbitrary URL (the "topic"). They're similar to "likes" but much more general.

---

```js
import {reactions} from 'dat://unwalled.garden/index.js'

// read
await reactions.list({
  filters: {authors, topics, visiblity},
  sortBy,
  offset,
  limit,
  reverse
})
await reactions.tabulate(topic, {
  filters: {authors, visiblity}
})

// write
await reactions.add(topic, emoji)
await reactions.remove(topic, emoji)
```

---

### Reaction

The values returned by reaction functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|url|`string`|The URL of the reaction record|
|topic|`string`|The URL that the reaction is attached to|
|emojis|`string[]`|The emojis in the reaction|
|author</var>|`Object`|The site that authored the reaction|
|&emsp;url</var>|`string`||
|&emsp;title</var>|`string`||
|&emsp;description</var>|`string`||
|&emsp;type</var>|`string[]`||
|visibility</var>|`string`|The [visibility](/docs/common-fields#visibility) of the reaction|

---

### TabulatedReaction

The values returned by `tabulate()` will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|topic|`string`|The URL that the reaction is attached to|
|emoji|`string`|The emoji in the reaction|
|authors</var>|`Object[]`|The sites that authored the reaction|
|&emsp;url</var>|`string`||
|&emsp;title</var>|`string`||
|&emsp;description</var>|`string`||
|&emsp;type</var>|`string[]`||

---

### list(opts)

List the reactions on the network.

|Param|Type|Default|Usage|
|-|-|-|-|
|opts|`Object`|||
|&emsp;filters|`Object`|||
|&emsp;&emsp;authors|`string|string[]`||Site URLs|
|&emsp;&emsp;topics|`string|string[]`||URLs|
|&emsp;&emsp;visibility|`string`|`'all'`|See [visibility](/docs/common-fields#visibility)|
|&emsp;sortBy|`string`|`'createdAt'`|One of: `'createdAt'`|
|&emsp;offset|`number`|0||
|&emsp;limit|`number`|||
|&emsp;reverse|`boolean`|`false`||

|Returns|
|-|
|`Promise<Reaction[]>`|

---

### tabulate(topic, opts)

Tabulate the reactions on a topic.

|Param|Type|Default|Usage|
|-|-|-|-|
|topic|`string`||Topic URL (required)|
|opts|`Object`|||
|&emsp;filters|`Object`|||
|&emsp;&emsp;authors|`string|string[]`||Site URLs|
|&emsp;&emsp;visibility|`string`|`'all'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<TabulatedReaction[]>`|

---

### add(topic, emoji)

Add a reaction emoji to the current user's site. The visibility of the reaction will be copied from the target topic's record.

|Param|Type|Default|Usage|
|-|-|-|-|
|topic|`string`||Topic URL (required)|
|emoji|`string`||The emoji to add|

|Returns|
|-|
|`Promise<Reaction>`|

---

### remove(topic, emoji)

Remove a reaction emoji from the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|topic|`string`||Topic URL (required)|
|emoji|`string`||The emoji to remove|

|Returns|
|-|
|`Promise<Reaction>`|