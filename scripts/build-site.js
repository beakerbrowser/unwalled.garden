const path = require('path')
const fs = require('fs').promises
const MarkdownIt = require('./vendor/markdown-it.min')
const hljs = require('highlight.js')

const md = MarkdownIt({
  html: true, // Enable HTML tags in source
  xhtmlOut: false, // Use '/' to close single tags (<br />)
  breaks: true, // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-', // CSS language prefix for fenced blocks
  linkify: true, // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer: true,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
})

const ASSETS_DIRECTORY_PATH = path.join(__dirname, '..', 'assets')
const MARKDOWN_DIRECTORY_PATH = path.join(__dirname, '..', '_md')
const OUTPUT_DIRECTORY_PATH = path.join(__dirname, '..')
const SITEWIDE_NOTICE = `Status: DRAFT. Part of the upcoming <a href="https://beakerbrowser.com">Beaker Browser</a> 0.9 release.`

async function main () {
  var layoutHtml = await fs.readFile(path.join(ASSETS_DIRECTORY_PATH, 'layout.html'), 'utf8')
  var navHtml = await fs.readFile(path.join(ASSETS_DIRECTORY_PATH, 'nav.html'), 'utf8')
  layoutHtml = layoutHtml.replace('$NAV', navHtml)

  // index.html
  console.log('Writing index.html')
  var indexHtml = await fs.readFile(path.join(ASSETS_DIRECTORY_PATH, 'index.html'), 'utf8')
  await fs.writeFile(path.join(OUTPUT_DIRECTORY_PATH, 'index.html'), indexHtml.replace('$NAV', navHtml))

  // markdown pages
  let markdownPaths = await listMarkdownPaths(MARKDOWN_DIRECTORY_PATH)
  for (let p of markdownPaths) {
    await generateHTML(p, toOutputPath(p), layoutHtml)
  }
}
main()

async function listMarkdownPaths (p) {
  let results = []
  let names = await fs.readdir(p)
  for (let name of names) {
    let p2 = path.join(p, name)
    let st = await fs.stat(p2)
    if (st.isDirectory()) {
      results = results.concat(await listMarkdownPaths(p2))
    } else if (p2.endsWith('.md')) {
      results.push(p2)
    }
  }
  return results
}

function toOutputPath (p) {
  let rel = path.relative(MARKDOWN_DIRECTORY_PATH, p)
  return path.join(OUTPUT_DIRECTORY_PATH, rel).replace(/\.md$/, '.html')
}

async function generateHTML (mdPath, htmlPath, layoutHtml) {
  console.log('Writing', htmlPath)
  let mdfile = await fs.readFile(mdPath, 'utf8')
  let html = layoutHtml
    .replace('$CONTENT', md.render(mdfile))
    .replace('</h2>', `</h2><div class="notice">${SITEWIDE_NOTICE}</div>`)
  await fs.writeFile(htmlPath, html)
}