# Agent

   - person
   - place
   - organization
   - project
   - bot

 - Schema: [`unwalled.garden/user`](./user.json)

This is the schema of user sites which are created automatically by Beaker. It produces the following file/folder structure:

```
/data/follows.json   - unwalled.garden/follows
/data/sites.json     - unwalled.garden/published-sites
/data/posts/         - unwalled.garden/post
/data/known_sites/   - Cached site metadata
```

#### `known_sites`

Any time a user publishes a reference to another site, they should add a folder to this folder with a capture of the referenced site's dat.json and thumbnail. This makes it possible for readers to quickly visualize referenced sites using the recorded description.

The structure of `known_sites` captures should be:

```
/data/known_sites/{hostname}/dat.json
/data/known_sites/{hostname}/thumb.jpg
```

So, for instance, a capture of beakerbrowser.com would be placed in `/data/known_sites/beakerbrowser.com`. If referencing a public key URL, the pubkey should be used as the hostname.