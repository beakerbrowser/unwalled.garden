## How does Unwalled.Garden work?

Unwalled.Garden is a kind of "Souped up [RSS](https://en.wikipedia.org/wiki/RSS)." Every user has a website, they publish their content as files, and they subscribe to each others' sites.

While RSS was primarily for blogging, Unwalled.Garden includes data types for many kinds of use-cases. These data types are spread across many JSON files which have pre-defined schemas.

The schemas are simple, obvious, and syntax-free. A "post" record looks like this:

```json
{
  "type": "unwalled.garden/post",
  "body": "Hello, world!",
  "createdAt": "2019-05-21T21:27:45.471Z"
}
```

We identify the types using URLs such as:

 - [unwalled.garden/post](/post)
 - [unwalled.garden/comment](/comment)
 - [unwalled.garden/reaction](/reaction)
 - [unwalled.garden/person](/person)
 - etc

All files are placed at predefined paths. An example site might look like this:

|URL|Type|
|-|-|
|`dat://bob.com`|[Person](/person)|
|`dat://bob.com/.data/unwalled.garden`|[Data directory](/dir/data)
|`dat://bob.com/.data/unwalled.garden/posts/hello.json`|[Post](/post)
|`dat://bob.com/.data/unwalled.garden/reactions/1.json`|[Reaction](/reaction)
|`dat://bob.com/.data/unwalled.garden/comments/1.json`|[Comment](/comment)

This site identifies as a [Person](/person) and it includes a [Post](/post), [Reaction](/reaction), and [Comment](/comment). A reader will crawl the website looking for these files to sync into its local database.

Unwalled.Garden is built for the [Dat protocol](https://dat.foundation). Read an [introduction primer here](./dat-primer).