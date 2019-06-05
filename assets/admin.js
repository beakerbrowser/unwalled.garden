const ASSETS_DIRECTORY_PATH = '/assets'
const MARKDOWN_DIRECTORY_PATH = '/_md'
const OUTPUT_DIRECTORY_PATH = '/'

const self = new DatArchive(window.location)
var watchStream

adminMain()

async function adminMain () {
  let info = await self.getInfo()
  if (!info.isOwner) return console.debug('Admin disabled: not owner')
  if (!location.hostname.endsWith('+preview')) return console.debug('Admin disabled: not preview mode')
  console.debug('Admin enabled')

  addUI()
  if (isWatching()) {
    startWatcher()
  }
}

function isWatching () {
  return (sessionStorage.watchEnabled == 1)
}

function setWatching (v) {
  sessionStorage.watchEnabled = v ? '1' : '0'
  document.querySelector('.admin-watch').textContent = v ? 'Stop watching' : 'Start watching'
}

function addUI () {
  // UI elements
  var el = document.createElement('div')
  el.className = 'admin-controls'
  el.innerHTML = `
    <a href="#" class="admin-build">Build</a>
    |
    <a href="#" class="admin-watch">Start watching</a>
  `
  el.querySelector('.admin-build').addEventListener('click', onClickBuild)
  el.querySelector('.admin-watch').addEventListener('click', onClickWatchToggle)
  document.body.append(el)

  // needed scripts
  var script1 = document.createElement('script')
  script1.setAttribute('src', '/assets/vendor/markdown-it.min.js')
  document.body.append(script1)
  var script2 = document.createElement('script')
  script2.setAttribute('src', '/assets/vendor/highlight.pack.js')
  document.body.append(script2)
}

function onClickBuild (e) {
  e.preventDefault()
  build()
}

function onClickWatchToggle (e) {
  e.preventDefault()
  if (isWatching()) {
    stopWatcher()
  } else {
    startWatcher()
  }
}

var to
function onChange (e) {
  if (to) clearTimeout(to)
  to = setTimeout(build, 100)
}

async function startWatcher () {
  setWatching(true)
  watchStream = self.watch()
  watchStream.addEventListener('changed', onChange)
}

async function stopWatcher () {
  setWatching(false)
  watchStream.close()
}

async function build () {
  console.debug('Building')
  if (watchStream) watchStream.close()
  var layoutHtml = await self.readFile(joinPath(ASSETS_DIRECTORY_PATH, 'layout.html'), 'utf8')
  var navHtml = await self.readFile(joinPath(ASSETS_DIRECTORY_PATH, 'nav.html'), 'utf8')
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
  var indexHtml = await self.readFile(joinPath(ASSETS_DIRECTORY_PATH, 'index.html'), 'utf8')
  await self.writeFile(joinPath(OUTPUT_DIRECTORY_PATH, 'index.html'), indexHtml.replace('$NAV', navHtml))

  // markdown pages
  let markdownPaths = await listMarkdownPaths(MARKDOWN_DIRECTORY_PATH)
  for (let p of markdownPaths) {
    await generateHTML(md, toInputPath(p), toOutputPath(p), layoutHtml)
  }

  window.location.reload()
}

async function listMarkdownPaths (p) {
  let results = []
  let paths = await self.readdir(p, {recursive: true})
  return paths.filter(p => p.endsWith('.md'))
}

function toInputPath (p) {
  return joinPath(MARKDOWN_DIRECTORY_PATH, p)
}

function toOutputPath (p) {
  return joinPath(OUTPUT_DIRECTORY_PATH, p).replace(/\.md$/, '.html')
}

async function generateHTML (md, mdPath, htmlPath, layoutHtml) {
  console.debug('Writing', htmlPath)
  let mdfile = await self.readFile(mdPath, 'utf8')
  let html = layoutHtml
    .replace('$CONTENT', md.render(mdfile))
  await self.writeFile(htmlPath, html)
}

function joinPath (...args) {
  var str = args[0]
  for (let v of args.slice(1)) {
    v = v && typeof v === 'string' ? v : ''
    let left = str.endsWith('/')
    let right = v.startsWith('/')
    if (left !== right) str += v
    else if (left) str += v.slice(1)
    else str += '/' + v
  }
  return str
}