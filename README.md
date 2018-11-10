# unwalled.garden

![Draft](https://img.shields.io/badge/Draft-In%20progress-yellow.svg) ![Not implemented](https://img.shields.io/badge/Status-Not%20implemented-red.svg)

A collection of schemas used by Beaker.

## Schemas

### Contacts

 - URL: `walled.garden/contact.json`
 - Description: People, orgs, and sites in your personal contacts list.
 - Schema: [contact.json](./contact.json)

Should contain only dats with the `user-profile` type.

```json
{
  "schema": "unwalled.garden/contact.json",
  "href": "dat://foolabs.com",
  "icon": "dat-foolabs-com.ico",
  "thumbnail": "dat-foolabs-com.jpg",
  "title": "Foo Labs, Inc.",
  "description": "Researching the future of online digital synergies.",
  "groups": ["My Employer", "Companies"]
}
```

### Bookmarks

 - URL: `walled.garden/bookmark.json`
 - Description: Saved links from around the Web.
 - Schema: [bookmark.json](./bookmark.json)

Bookmark objects are used directly by the browser to create public and private bookmarks.

```json
{
  "schema": "unwalled.garden/bookmark.json",
  "href": "dat://beakerbrowser.com",
  "title": "Beaker Browser",
  "tags": ["browser", "p2p", "web"]
}
```

### Identity Verifications

 - URL: `walled.garden/identity-verification.json`
 - Description: The checkmarks next to sites' and people's names that verify who they are.
 - Schema: [identity-verification.json](./identity-verification.json)

Identity Verifications are used to build the identity layer of the Web-of-Trust. The verifications are accumulated in a site's profile to help a user evaluate whether the site can be trusted.

The default behavior of a verification is to add a checkmark to the site, and so it is a broad indication of trust. The user can then view the verifications individually to see the asserted identity and the notes on the verification. This means it's possible that a verification could assert a different identity than the site does, which users should view as suspicious.

```json
{
  "schema": "unwalled.garden/identity-verification.json",
  "hostname": "87ed2e3b160f261a032af03921a3bd09227d0a4cde73466c17114816cae43336",
  "identity": "Beaker Browser",
  "notes": "I work on this project and can confirm this is the official site."
}
```

### Warnings

 - URL: `walled.garden/warning.json`
 - Description: Warnings about sites and people around the Web.
 - Schema: [warning.json](./warning.json)

Warnings are used to build the identity layer of the Web-of-Trust. They give users a way to warn about sites which are dangerous or misleading. The warnings are prominently displayed in a site's profile.

```json
{
  "schema": "unwalled.garden/warning.json",
  "href": "dat://87ed2e3b160f261a032af03921a3bd09227d0a4cde73466c17114816cae43335",
  "text": "This is not the real Beaker Browser site!"
}
```

## Potential future schemas

 - **Redirect Notices.** A suggested redirect from one site to another. Useful for when a site's private key has been lost. Let's you suggest the correct place to go instead.