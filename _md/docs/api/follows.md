## Follows API

Read and create follow relationships between sites.

---

```js
import {follows} from 'dat://unwalled.garden/index.js'

// read
await follows.list({
  query: {authors, subjects, visibility},
  sortBy,
  offset,
  limit,
  reverse
})
await follows.get(author, subject)

// write
await follows.add(subject, {visibility})
await follows.edit(subject, {visibility})
await follows.remove(subject)
```

---

### Follow

The values returned by follow functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|author</var>|`Object`|The site doing the following|
|&emsp;url</var>|`string`||
|&emsp;title</var>|`string`||
|&emsp;description</var>|`string`||
|&emsp;type</var>|`string`||
|subject</var>|`Object`|The site being followed|
|&emsp;url</var>|`string`||
|&emsp;title</var>|`string`||
|&emsp;description</var>|`string`||
|&emsp;type</var>|`string`||
|visibility</var>|`string`|The [visibility](/docs/common-fields#visibility) of the "follow" record|

---

### list(opts)

List follows by authors and/or subjects.

|Param|Type|Default|Usage|
|-|-|-|-|
|opts|`Object`|||
|&emsp;query|`Object`|||
|&emsp;&emsp;authors|`string|string[]`||Site URLs|
|&emsp;&emsp;subjects|`string|string[]`||Site URLs|
|&emsp;&emsp;visibility|`string`|`'all'`|See [visibility](/docs/common-fields#visibility)|
|&emsp;sortBy|`string`|`'subject'`|One of: `'subject'`|
|&emsp;offset|`number`|0||
|&emsp;limit|`number`|||
|&emsp;reverse|`boolean`|`false`||

|Returns|
|-|
|`Promise<Follow[]>`|

---

### get(author, subject)

Get a follow by author and subject.

|Param|Type|Default|Usage|
|-|-|-|-|
|author|`string`||Site URL (required)|
|subject|`string`||Site URL (required)|

|Returns|
|-|
|`Promise<Follow>`|

---

### add(subject, opts)

Add a follow to the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|subject|`string`||Site URL (required)|
|opts|`Object`|||
|&emsp;[visibility](/docs/common-fields#visibility)|`string`|`'public'`|One of: `'public'`, `'private'`|

|Returns|
|-|
|`Promise<void>`|

---

### edit(subject, opts)

Edit a follow on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|subject|`string`||Site URL (required)|
|opts|`Object`|||
|&emsp;[visibility](/docs/common-fields#visibility)|`string`|`'public'`|One of: `'public'`, `'private'`|

|Returns|
|-|
|`Promise<void>`|

---

### remove(subject)

Remove a follow from the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|subject|`string`||Site URL (required)|

|Returns|
|-|
|`Promise<void>`|