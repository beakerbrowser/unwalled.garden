## Common fields

### <span id="visibility">visibility</span>

The <var>visibility</var> field indicates who will be given access to the record. It currently has two possible values:

 - `'private'` The record is only accessible on the local user's devices. It is not shared with anyone.
 - `'public'` The record is published publicly and can be accessed by anyone.

When used as a query parameter, the field can also have the following value:

 - `'all'` Include both private and public records.

#### How does it work?

A user has two Dat hyperdrives: a public and a private. They both possess the [Data directory](/dir/data) in roughly the same location. In [Beaker](https://beakerbrowser.com), the private drive acts as the "root" of the user's filesystem, and the public drive is mounted to `/public` on the private drive.

The private drive is kept off the network. When <var>visibility</var> is set to `'private'`, the record is written there. When set to `'public'`, it's written to the public drive.