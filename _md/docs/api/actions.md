## Actions API

Actions are events which describe something that was done by the user. They are intentionally generic! They're meant to give applications a simple primitive for describing user activity.

The `action` field may be any alphanumeric string. Here are some suggested values:

 - Browsing
   - `"installed"`
   - `"listened"`
   - `"read"`
   - `"used"`
   - `"visited"`
   - `"watched"`
 - Commerce
   - `"bought"`
   - `"donatedTo"`
   - `"preordered"`
   - `"rented"`
   - `"sold"`
 - Creation
   - `"created"`
   - `"removed"`
   - `"updated"`
 - Locations
   - `"arrived"`
   - `"checkedin"`
   - `"departed"`
 - Transfer
   - `"borrowed"`
   - `"gave"`
   - `"lent"`
   - `"received"`
   - `"returned"`
   - `"took"`

---

```js
import {actions} from 'dat://unwalled.garden/index.js'

// read
await actions.list({
  filters: {actions, authors, topics, visiblity},
  sortBy,
  offset,
  limit,
  reverse
})
await actions.get(url)

// write
await actions.add({topic, action, visibility})
await actions.edit(url, {action, topic, visibility})
await actions.delete(url)
```

---

### Action

The values returned by action functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|url|`string`|The URL of the action record|
|topic|`string`|The URL that the action was taken on|
|action|`string`|The ID of the action taken|
|author</var>|`Object`|The site that authored the action|
|&emsp;url</var>|`string`||
|&emsp;title</var>|`string`||
|&emsp;description</var>|`string`||
|&emsp;type</var>|`string[]`||
|visibility</var>|`string`|The [visibility](/docs/common-fields#visibility) of the reaction|

---

### list(opts)

List the actions on the network.

|Param|Type|Default|Usage|
|-|-|-|-|
|opts|`Object`|||
|&emsp;filters|`Object`|||
|&emsp;&emsp;actions|`string|string[]`||Action IDs|
|&emsp;&emsp;authors|`string|string[]`||Site URLs|
|&emsp;&emsp;topics|`string|string[]`||URLs|
|&emsp;&emsp;visibility|`string`|`'all'`|See [visibility](/docs/common-fields#visibility)|
|&emsp;sortBy|`string`|`'createdAt'`|One of: `'createdAt'`|
|&emsp;offset|`number`|0||
|&emsp;limit|`number`|||
|&emsp;reverse|`boolean`|`false`||

|Returns|
|-|
|`Promise<Action[]>`|

---

### get(url)

Get an individual action by its URL.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||Action URL (required)|

|Returns|
|-|
|`Promise<Action>`|

---

### add(action)

Add an action to the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|action|`Object`|||
|&emsp;topic|`string`||Topic URL (required)|
|&emsp;action|`string`||The action taken (required)|
|&emsp;visibility|`string`|`'public'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Action>`|

---

### edit(url, action)

Edit an action on the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||The URL of the action you want to edit (required)|
|&emsp;topic|`string`||Topic URL|
|&emsp;action|`string`||The action taken|
|&emsp;visibility|`string`|`'public'`|See [visibility](/docs/common-fields#visibility)|

|Returns|
|-|
|`Promise<Action>`|

---

### delete(url)

Remove an action from the current user's site.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||The URL of the action you want to delete (required)|

|Returns|
|-|
|`Promise<void>`|
