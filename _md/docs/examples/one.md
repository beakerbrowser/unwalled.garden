## Example 1

This example will render the 10 latest posts in the user's feed.

### index.html

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <my-app></my-app>
    <script type="module" src="/index.js"></script>
  </body>
</html>
```

### index.js

```js
import {posts} from 'dat://unwalled.garden/index.js'

class MyApp extends HTMLElement {
  constructor(){
    super()
    this.load()
  }

  async load () {
    this.posts = await posts.query({reverse: true, limit: 10})
    for (let post of this.posts) {
      this.append(this.createPostElement(post))
    }
  }

  createPostElement (post) {
    var el = document.createElement('div')
    el.innerHTML = `
      <p><a></a></p>
      <blockquote></blockquote>
    `
    el.querySelector('blockquote').textContent = post.content.body
    el.querySelector('a').setAttribute('href', post.author.url)
    el.querySelector('a').textContent = post.author.title
    return el
  }
}

customElements.define('my-app', MyApp)
```