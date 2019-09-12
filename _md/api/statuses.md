## Statuses API

Statuses are blurbs of content that's broadcasted on a feed. They're sometimes known as "status updates." The character limit is 1,000,000 characters.

---

```js
import {statuses} from 'dat://unwalled.garden/index.js'

// read
await statuses.list({
  authors,
  visibility,
  sortBy,
  offset,
  limit,
  reverse
})
await statuses.get(url)

// write
await statuses.add({body, visibility})
await statuses.edit(url, {body, visibility})
await statuses.remove(url)
```

---

### Status

The values returned by status functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|url|`string`|The URL of the status|
|body|`string`|The text body of the status|
|createdAt|`string`|The timestamp of when the status claims it was created|
|updatedAt|`string`|The timestamp of when the status claims it was last updated|
|author|`Object`|The status author's information|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string[]`||
|visibility|`string`|The [visibility](/docs/common-fields#visibility) of the status|

---

### list(opts)

List the statuses on the network.

|Param|Type|Default|Usage|
|-|-|-|-|
|opts|`Object`|||
|&emsp;authors|`string|string[]`||Filter by author URLs|
|&emsp;visibility|`string`|`'all'`|Filter by visibility. See [visibility](/docs/common-fields#visibility)|
|&emsp;sortBy|`string`|`'createdAt'`|One of: `'createdAt'`|
|&emsp;offset|`number`|0||
|&emsp;limit|`number`|||
|&emsp;reverse|`boolean`|`false`||

|Returns|
|-|
|`Promise<Status[]>`|

---

### get(url)

Get an individual status by its URL.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||Status URL (required)|

|Returns|
|-|
|`Promise<Status>`|

---

### add(status)

Add a status to the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|status|`string|Object`||If a string, specifies the body (required)|
|&emsp;body|`string`||The status body (required)|
|&emsp;visibility|`string`|`'public'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Status>`|

#### Example

```js
await statuses.add('Hello, world!')
await statuses.add({body: 'Hello, me!', visibility: 'private'})
```

---

### edit(url, status)

Edit a status on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||The URL of the status you want to edit (required)|
|status|`string|Object`||If a string, specifies the body (required)|
|&emsp;body|`string`||The status body (required)|
|&emsp;visibility|`string`|`'public'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Status>`|

#### Example

```js
await statuses.edit(myStatus.url, 'Hello, world!!')
```

---

### remove(url)

Delete a status on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||The URL of the status you want to remove (required)|

|Returns|
|-|
|`Promise<void>`|

---