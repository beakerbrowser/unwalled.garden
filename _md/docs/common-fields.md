## Common fields

### <span id="visibility">visibility</span>

The <var>visibility</var> field indicates who will be given access to some information. It currently has three possible values:

 - `'private'` The info is only accessible on the local user's devices. It is not shared with anyone.
 - `'unlisted'` The info is accessible on the network by anyone but has not been published on the author's site.
 - `'public'` The info is published publicly and can be accessed by anyone.

When used as a query parameter, the field can also have the following value:

 - `'all'` Include all kinds of records.

#### How does it work?

A user has two Dat hyperdrives: a public and a private. They both possess the [Data directory](/dir/data) in roughly the same location. In [Beaker](https://beakerbrowser.com), the private drive acts as the "root" of the user's filesystem, and the public drive is [mounted](/docs/mounts) to `/public` on the private drive.

The private drive is kept off the network. When <var>visibility</var> is set to `'private'`, the record is written there. When set to `'public'`, it's written to the public drive. The `'unlisted'` value typically applies to separate dats that the user has created (such as [Library](/api/library)).