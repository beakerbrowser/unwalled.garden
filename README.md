# unwalled.garden

![Draft](https://img.shields.io/badge/Draft-In%20progress-yellow.svg) ![Not implemented](https://img.shields.io/badge/Status-Not%20implemented-red.svg)

A collection of schemas used by Beaker.

## Schemas

### Data Sources

 - URL: `walled.garden/data-source.json`
 - Description: Sites in your personal database.
 - Schema: [data-source.json](./data-source.json)

These objects are stored in the private dat. They indicate which sites the user wants to index and to include in their applications.

### Published Dats

 - URL: `walled.garden/published-dat.json`
 - Description: Dats published publicly.
 - Schema: [published-dat.json](./published-dat.json)

Typically used in the public dat to announce personally-created dats.

### Website Descriptions

 - URL: `walled.garden/website-description.json`
 - Description: Descriptions of sites around the Web.
 - Schema: [website-description.json](./website-description.json)

Website Descriptions are used to build the identity layer of the Web-of-Trust. The known descriptions are accumulated in a site's profile to help a user evaluate whether the site can be trusted.

These objects include a name and relationship with the description's publisher. For instance, a website about cats might publish a Website Description about `dat://alice.com` that says "This is Alice Allison, she authored me." Another example, a website for a company might publish a Website Description about `dat://bob.com` which says "This is Bob Roberts, he is CEO of this company."

### Website Warnings

 - URL: `walled.garden/website-warning.json`
 - Description: Warnings about sites around the Web.
 - Schema: [website-warning.json](./website-warning.json)

Website Warnings are used to augment the identity layer of the Web-of-Trust. They give users a way to warn about sites which are dangerous or misleading. The warnings are prominently displayed in a site's profile.

## Potential future schemas

 - **Website Redirect Notices.** A suggested redirect from one site to another. Useful for when a site's private key has been lost. Let's you suggest the correct place to go instead.