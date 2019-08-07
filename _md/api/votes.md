## Votes API

Votes are up/down judgments on resources around the Web. They can be set to 1 (upvote) or -1 (downvote).

---

```js
import {votes} from 'dat://unwalled.garden/index.js'

// read
await votes.list({
  filters: {authors, topics, visiblity},
  sortBy,
  offset,
  limit,
  reverse
})
await votes.tabulate(topic, {
  filters: {authors, visiblity}
})
await votes.get(author, topic)

// write
await votes.set(topic, vote, {visiblity})
```

---

### Vote

The values returned by vote functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|url|`string`|The URL of the vote record|
|topic|`string`|The URL that the vote is attached to|
|vote|`number`|The value of the vote|
|createdAt|`string`|The timestamp of when the vote claims it was created|
|updatedAt|`string`|The timestamp of when the vote claims it was last updated|
|author|`Object`|The site that authored the vote|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string[]`||
|visibility|`string`|The [visibility](/docs/common-fields#visibility) of the vote|

---

### TabulatedVotes

The values returned by `tabulate()` will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|topic|`string`|The URL that the votes are attached to|
|upvotes|`number`|The number of upvotes|
|upvoters|`Object[]`|The sites that upvoted the site|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string[]`||
|downvotes|`number`|The number of downvotes|
|downvoters|`Object[]`|The sites that downvoted the site|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string[]`||

---

### list(opts)

List the votes on the network.

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
|`Promise<Vote[]>`|

---

### tabulate(topic, opts)

Tabulate the votes on a topic.

|Param|Type|Default|Usage|
|-|-|-|-|
|topic|`string`||Topic URL (required)|
|opts|`Object`|||
|&emsp;filters|`Object`|||
|&emsp;&emsp;authors|`string|string[]`||Site URLs|
|&emsp;&emsp;visibility|`string`|`'all'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<TabulatedVotes>`|

---

### get(author, topic)

Get a vote by author and topic.

|Param|Type|Default|Usage|
|-|-|-|-|
|author|`string`||Site URL (required)|
|topic|`string`||Site URL (required)|

|Returns|
|-|
|`Promise<Vote>`|

---

### set(topic, vote, opts)

Set the user's vote on the topic.

|Param|Type|Default|Usage|
|-|-|-|-|
|topic|`string`||Topic URL (required)|
|vote|`number`||The vote value, must be `-1`, `0`, or `1`|
|opts|`Object`|||
|&emsp;[visibility](/docs/common-fields#visibility)|`string`|`'public'`|One of: `'public'`, `'private'`|

|Returns|
|-|
|`Promise<Vote>`|

