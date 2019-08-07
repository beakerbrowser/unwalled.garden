## Why not RDF?

Schemas should be human-readable, easy to build with, and unambiguous.

Our solution is to use a standard `type` field which is a URL. We use a URL because:

 1. It's an unambiguous global namespace, and
 2. Developers can easily find the documentation.

Here's an example Unwalled.Garden object:

```json
{
  "type": "unwalled.garden/comment",
  "topic": "dat://unwalled.garden",
  "body": "Why didn't you use RDF!?",
  "createdAt": "2018-12-07T04:15:44.722Z"
}
```

We dislike [RDF](https://en.wikipedia.org/wiki/Resource_Description_Framework) because of its complexity. Its data model is unusual: a triples-based graph with URLs as the attribute names.

Consider the following example [JSON-LD](https://en.wikipedia.org/wiki/JSON-LD) schema:

```json
{
  "@context": {
    "web": "dat://websites.com/manifest#",
    "social": "dat://social.com/"
  },
  "web:title": "Paul Frazee",
  "web:description": "Beaker guy",
  "social:follows": [
    "dat://alice.com",
    "dat://bob.com"
  ]
}
```

That object is a shorthand for this:

```json
{
  "dat://websites.com/manifest#title": "Paul Frazee",
  "dat://websites.com/manifest#description": "Beaker guy",
  "dat://social.com/follows": ["dat://alice.com", "dat://bob.com"]
}
```

Both forms are difficult to read and author:

```js
paul['web:title'] = 'Paul Frazee'
// or
paul['dat://websites.com/manifest#title'] = 'Paul Frazee'
```

Programmers have to work with schemas! They should be simple and friendly to use. If we think in terms of records instead of graphs, we end up with objects that are much nicer to use.

```json
{
  "type": "websites.com/manifest",
  "title": "Paul Frazee",
  "description": "Beaker guy"
}
```

Which makes our code much cleaner:

```js
paul.title = 'Paul Frazee'
paul.description = 'Beaker guy'
```

The Unwalled.Garden philosophy about RDF is [YAGNI (You Ain't Gonna Need It)](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it). We see RDF's complexity as a turn-off to developers and something we should try to avoid if we can.