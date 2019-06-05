## Profiles API

Read the "profiles" of sites.

---

```js
import {profiles} from 'dat://unwalled.garden/index.js'

// read
await profiles.me()
await profiles.get(url)

// manage
await profiles.index(url)
```

---

### Profile

The values returned by profile functions will fit the following object shape:

|Attribute|Type|Usage|
|-|-|-|
|url|`string`||
|title|`string`||
|description|`string`||
|type|`string`||

---

### me()

Fetch the profile of the current user.

|Returns|
|-|
|`Promise<Profile>`|

---

### get(url)

Fetch the profile of the specified user.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||Site URL (required)|

|Returns|
|-|
|`Promise<Profile>`|

---

### index(url)

Index the given site and fetch the resulting profile.

|Param|Type|Default|Usage|
|-|-|-|-|
|url|`string`||Site URL (required)|

|Returns|
|-|
|`Promise<Profile>`|