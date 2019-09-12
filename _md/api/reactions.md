## Reactions API

Reactions are words or short phrases which can be attached to any arbitrary URL (the "topic"). They're similar to "likes" but much more general.

Each reaction is constrained to 20 lowercase english letters.

---

```js
import {reactions} from 'dat://unwalled.garden/index.js'

// read
await reactions.list({
  authors,
  topics,
  visiblity,
  sortBy,
  offset,
  limit,
  reverse
})
await reactions.tabulate(topic, {authors, visiblity})

// write
await reactions.add(topic, phrase)
await reactions.remove(topic, phrase)
```

---

### Reaction

The values returned by reaction functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|url|`string`|The URL of the reaction record|
|topic|`string`|The URL that the reaction is attached to|
|phrases|`string[]`|The phrases in the reaction|
|author|`Object`|The site that authored the reaction|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string`||
|visibility|`string`|The [visibility](/docs/common-fields#visibility) of the reaction|

---

### TabulatedReaction

The values returned by `tabulate()` will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|topic|`string`|The URL that the reaction is attached to|
|phrase|`string`|The phrase in the reaction|
|authors|`Object[]`|The sites that authored the reaction|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string`||

---

### list(opts)

List the reactions on the network.

|Param|Type|Default|Usage|
|-|-|-|-|
|opts|`Object`|||
|&emsp;authors|`string|string[]`||Filter by author URLs|
|&emsp;topics|`string|string[]`||Filter by topic URLs|
|&emsp;visibility|`string`|`'all'`|Filter by visibility. See [visibility](/docs/common-fields#visibility)|
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
|&emsp;authors|`string|string[]`||Filter by author URLs|
|&emsp;visibility|`string`|`'all'`|Filter by visibility. See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<TabulatedReaction[]>`|

---

### add(topic, phrase)

Add a reaction phrase to the current user's site. The visibility of the reaction will be copied from the target topic's record.

|Param|Type|Default|Usage|
|-|-|-|-|
|topic|`string`||Topic URL (required)|
|phrase|`string`||The phrase to add|

|Returns|
|-|
|`Promise<Reaction>`|

---

### remove(topic, phrase)

Remove a reaction phrase from the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|topic|`string`||Topic URL (required)|
|phrase|`string`||The phrase to remove|

|Returns|
|-|
|`Promise<Reaction>`|