const fsp = require('fs').promises
const joinPath = require('path').join
const markdownit = require('../assets/vendor/markdown-it.min')
const hljs = require('highlight.js')

const ASSETS_DIRECTORY_PATH = joinPath(__dirname, '../assets')
const MARKDOWN_DIRECTORY_PATH = joinPath(__dirname, '../_md')
const OUTPUT_DIRECTORY_PATH = joinPath(__dirname, '..')

build()

async function build () {
  console.debug('Building')
  var layoutHtml = await fsp.readFile(joinPath(ASSETS_DIRECTORY_PATH, 'layout.html'), 'utf8')
  var navHtml = await fsp.readFile(joinPath(ASSETS_DIRECTORY_PATH, 'nav.html'), 'utf8')
  layoutHtml = layoutHtml.replace('$NAV', navHtml)

  const md = markdownit({
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

  // index.html
  console.debug('Writing index.html')
  var indexHtml = await fsp.readFile(joinPath(ASSETS_DIRECTORY_PATH, 'index.html'), 'utf8')
  await fsp.writeFile(joinPath(OUTPUT_DIRECTORY_PATH, 'index.html'), indexHtml.replace('$NAV', navHtml))

  // markdown pages
  let markdownPaths = (
    (await listMarkdownPaths())
      .concat(await listMarkdownPaths('api'))
      .concat(await listMarkdownPaths('dir'))
      .concat(await listMarkdownPaths('docs'))
  )
  for (let p of markdownPaths) {
    await generateHTML(md, toInputPath(p), toOutputPath(p), layoutHtml)
  }
}

async function listMarkdownPaths (subpath = undefined) {
  let paths = await fsp.readdir(subpath ? joinPath(MARKDOWN_DIRECTORY_PATH, subpath) : MARKDOWN_DIRECTORY_PATH)
  return paths
    .filter(p => p.endsWith('.md'))
    .map(p => joinPath(subpath || '', p))
}

function toInputPath (p) {
  return joinPath(MARKDOWN_DIRECTORY_PATH, p)
}

function toOutputPath (p) {
  return joinPath(OUTPUT_DIRECTORY_PATH, p).replace(/\.md$/, '.html')
}

async function generateHTML (md, mdPath, htmlPath, layoutHtml) {
  console.debug('Writing', htmlPath)
  let mdfile = await fsp.readFile(mdPath, 'utf8')
  let html = layoutHtml
    .replace('$TITLE', `${extractTitle(mdfile)} | Unwalled.Garden`)
    .replace('$CONTENT', md.render(mdfile))
  await fsp.writeFile(htmlPath, html)
}

function extractTitle (mdfile) {
  return mdfile.split('\n')[0].replace('## ', '').replace('`', '(').replace('`', ')')
}
