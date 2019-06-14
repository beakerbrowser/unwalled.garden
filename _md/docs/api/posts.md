## Posts API

Posts are blurbs of content that's broadcasted on a feed. They're sometimes known as "status updates." The character limit is 1,000,000 characters.

---

```js
import {posts} from 'dat://unwalled.garden/index.js'

// read
await posts.list({
  filters: {authors, visibility},
  sortBy,
  offset,
  limit,
  reverse
})
await posts.get(url)

// write
await posts.add({body, ext, visibility})
await posts.edit(url, {body, ext, visibility})
await posts.delete(url)
```

---

### Post

The values returned by post functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|url|`string`|The URL of the post|
|body|`string`|The text body of the post|
|createdAt|`string`|The timestamp of when the post claims it was created|
|updatedAt|`string`|The timestamp of when the post claims it was last updated|
|author|`Object`|The post author's information|
|&emsp;url|`string`||
|&emsp;title|`string`||
|&emsp;description|`string`||
|&emsp;type|`string[]`||
|ext|`Object`|The [extension](/docs/how-to-extend-schemas) object|
|visibility|`string`|The [visibility](/docs/common-fields#visibility) of the post|

---

### list(opts)

List the posts on the network.

|Param|Type|Default|Usage|
|-|-|-|-|
|opts|`Object`|||
|&emsp;filters|`Object`|||
|&emsp;&emsp;authors|`string|string[]`||Site URLs|
|&emsp;&emsp;visibility|`string`|`'all'`|See [visibility](/docs/common-fields#visibility)|
|&emsp;sortBy|`string`|`'createdAt'`|One of: `'createdAt'`|
|&emsp;offset|`number`|0||
|&emsp;limit|`number`|||
|&emsp;reverse|`boolean`|`false`||

|Returns|
|-|
|`Promise<Post[]>`|

---

### get(url)

Get an individual post by its URL.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||Post URL (required)|

|Returns|
|-|
|`Promise<Post>`|

---

### add(post)

Add a post to the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|post|`string|Object`||If a string, specifies the body (required)|
|&emsp;body|`string`||The post body (required)|
|&emsp;ext|`Object`||The [extension](/docs/how-to-extend-schemas) object|
|&emsp;visibility|`string`|`'public'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Post>`|

#### Example

```js
await posts.add('Hello, world!')
await posts.add({body: 'Hello, me!', visibility: 'private'})
```

---

### edit(url, post)

Edit a post on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||The URL of the post you want to edit (required)|
|post|`string|Object`||If a string, specifies the body (required)|
|&emsp;body|`string`||The post body (required)|
|&emsp;ext|`Object`||The [extension](/docs/how-to-extend-schemas) object|
|&emsp;visibility|`string`|`'public'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Post>`|

#### Example

```js
await posts.edit(myPost.url, 'Hello, world!!')
```

---

### delete(url)

Delete a post on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||The URL of the post you want to delete (required)|

|Returns|
|-|
|`Promise<void>`|

---