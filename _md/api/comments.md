## Comments API

Comments are replies to content around the Web. They are threaded (meaning that all comments can reply to all other comments, forming a tree). Any URL can be the topic of a comment.

---

```js
import {comments} from 'dat://unwalled.garden/index.js'

// read
await comments.list({
  authors,
  topics,
  visibility,
  sortBy,
  offset,
  limit,
  reverse
})
await comments.thread(topic, {
  authors,
  visibility,
  parent,
  depth,
  sortBy
})
await comments.get(url)

// write
await comments.add(topic, {body, replyTo, visibility})
await comments.edit(url, {body, replyTo, visibility})
await comments.remove(url)
```

---

### Comment

The values returned by most comment functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|url|`string`|The URL of the comment|
|topic|`string`|The URL of the comment topic|
|replyTo|`string`|The URL of the parent comment|
|body|`string`|The text body of the comment|
|createdAt|`string`|The timestamp of when the comment claims it was created|
|updatedAt|`string`|The timestamp of when the comment claims it was last updated|
|author|`Object`|The comment author's information|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string[]`||
|visibility|`string`|The [visibility](/docs/common-fields#visibility) of the comment|

---

### ThreadComment

The values returned by the `thread()` function will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|url|`string`|The URL of the comment|
|topic|`string`|The URL of the comment topic|
|replyTo|`string`|The URL of the parent comment|
|replies|`ThreadComment[]`|The replies to the comment|
|replyCount|`number`|Number of replies to the comment|
|body|`string`|The text body of the comment|
|createdAt|`string`|The timestamp of when the comment claims it was created|
|updatedAt|`string`|The timestamp of when the comment claims it was last updated|
|author|`Object`|The comment author's information|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string[]`||
|visibility|`string`|The [visibility](/docs/common-fields#visibility) of the comment|

---

### list(opts)

List the comments on the network.

|Param|Type|Default|Usage|
|-|-|-|-|
|opts|`Object`|||
|&emsp;authors|`string|string[]`||Filter by author URLs|
|&emsp;topics|`string|string[]`||Filter by topic URLs|
|&emsp;visibility|`string`|`'all'`|Filter by this visibility. See [visibility](/docs/common-fields#visibility)|
|&emsp;sortBy|`string`|`'createdAt'`|One of: `'createdAt'`|
|&emsp;offset|`number`|0||
|&emsp;limit|`number`|||
|&emsp;reverse|`boolean`|`false`||

|Returns|
|-|
|`Promise<Comment[]>`|

---

### thread(topic, opts)

Fetch the comment thread on a given topic.

|Param|Type|Default|Usage|
|-|-|-|-|
|topic|`string`||URL (required)|
|opts|`Object`|||
|&emsp;authors|`string|string[]`||Filter by author URLs|
|&emsp;visibility|`string`|`'all'`|Filter by this visibility. See [visibility](/docs/common-fields#visibility)|
|&emsp;parent|`string`||The URL of comment in the thread|
|&emsp;depth|`number`||A limit on the depth to recurse down the comment tree|
|&emsp;sortBy|`string`|`'createdAt'`|One of: `'createdAt'`|
|&emsp;reverse|`boolean`|`false`||

|Returns|
|-|
|`Promise<ThreadComment[]>`|

If `depth` is specified, the `ThreadComment` objects at the depth limit will not have `replies` populated even if there are replies. You can check `replyCount` to see if there are additional replies which were not fetched.

You can specify the `parent` parameter to fetch a subtree of the thread.

---

### get(url)

Get an individual comment by its URL.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||Comment URL (required)|

|Returns|
|-|
|`Promise<Comment>`|

---

### add(topic, comment)

Add a comment to the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|topic|`string`||Topic URL (required)|
|comment|`string|Object`||If a string, specifies the body (required)|
|&emsp;body|`string`||The comment body (required)|
|&emsp;replyTo|`string`||The URL of the comment being replied to|
|&emsp;visibility|`string`|`'public'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Comment>`|

#### Example

```js
await comments.add('dat://unwalled.garden', 'What a great site!')
await comments.add('dat://unwalled.garden', {body: 'TODO: read this later', visibility: 'private'})
```

---

### edit(url, comment)

Edit a comment on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||The URL of the comment you want to edit (required)|
|comment|`string|Object`||If a string, specifies the body (required)|
|&emsp;body|`string`||The comment body (required)|
|&emsp;replyTo|`string`||The URL of the comment being replied to|
|&emsp;visibility|`string`|`'public'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Comment>`|

#### Example

```js
await comments.edit(myComment.url, 'Hello, world!!')
```

---

### remove(url)

Delete a comment on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||The URL of the comment you want to remove (required)|

|Returns|
|-|
|`Promise<void>`|

---