## Profiles API

Read the "profiles" of sites. Also used to fetch the currently active user.

---

```js
import {profiles} from 'dat://unwalled.garden/index.js'

// read
await profiles.getCurrentUser()
await profiles.get(url)

// manage
await profiles.index(url)
```

---

TODO