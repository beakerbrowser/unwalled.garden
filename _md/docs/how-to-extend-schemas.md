## How to extend the schemas

Sometimes the core schemas just ain't enough. Maybe you want to make a forum app that embeds polls in the discussions? Or maybe you want to add tags to your comments? There are lots of reasons that you might want to extend the schema.

To handle this, we decided to create a standard process for "extensions."

### The ext object

Every schema has an optional `ext` object to contain all extensions. Here's an example which adds tags to a [Comment](/comment):

```json
{
  "type": "unwalled.garden/comment",
  "topic": "dat://beakerbrowser.com/docs",
  "body": "These docs need some work!",
  "createdAt": "2018-12-07T02:52:11.947Z",
  "ext": {
    "my-personal-schemas.com/tags": {
      "tags": ["feedback", "criticism"]
    }
  }
}
```

The `ext` object should fit the following form:

```js
ext: {
  [schemaUrl]: Object
}
```

The `schemaUrl` key behaves like the `type` field in the standard schemas. It indicates where documentation for the extension object can be found. The extension `Object` is entirely up to you, but it should be an object (not just a string or number).

### A word of warning

Your extensions will not be universally supported, so you should think carefully about how other applications will interact with them.

Here's an example of how an extension could fail to work as expected:

 - You add a "subfeed" extension to the [Post](/post) schema. Your idea is, if the post has a subfeed, it goes into the subfeed instead of showing on the main feed.
 - You build your app to respect the subfeed extension and everything seems well...
 - ...But then you try another app and see that the subfeed posts are still in the main feed!

What happened here? Well, apps will ignore extensions that they don't understand. This can create surprising interactions if you're not careful.

If your extension has to be understood by other apps to work correctly, then the extension won't work.

### FAQ

#### Do I have to use a schema URL?

Yes! If you don't use a URL to identify your extension's schema, then it's possible that your extension will conflict with other peoples' extensions. For instance, what if everybody used `"tags"` to identify their tags extension, but half of them differed? You'd run into tons of conflicting data.

#### Do I have to publish the schema documentation?

It's a good idea but it's not required. So long as you control the URL, you can use it.

#### Why use the ext field? Why not just make any change I want?

The entire purpose of schemas is to ensure compatibility between applications. If developers make arbitrary changes, their changes could start to conflict in subtle ways. By using the `ext` object, we ensure that extensions will never collide.


