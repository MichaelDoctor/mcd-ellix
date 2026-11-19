// Runs after `vite build` + the SSR build (see package.json "build").
// Injects the rendered page and the JSON-LD structured data into dist/index.html.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const htmlPath = path.join(root, 'dist', 'index.html')
const ssrDir = path.join(root, 'dist-ssr')

const { render, buildJsonLd } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

let html = await readFile(htmlPath, 'utf8')
const MOUNT = '<div id="root"></div>'
if (!html.includes(MOUNT)) throw new Error(`prerender: ${MOUNT} not found in dist/index.html`)

// The SSR build uses an absolute /assets/ base; the client build uses relative
// ./assets/ (works on the custom domain and the github.io subpath). Match it.
const appHtml = render().replaceAll('"/assets/', '"./assets/')

// Escape "<" so the JSON can never close the <script> tag early.
const jsonLd = JSON.stringify(buildJsonLd()).replace(/</g, '\\u003c')

html = html
  .replace(MOUNT, `<div id="root">${appHtml}</div>`)
  .replace('</head>', `  <script type="application/ld+json">${jsonLd}</script>\n  </head>`)

await writeFile(htmlPath, html)
await rm(ssrDir, { recursive: true, force: true })
console.log(`prerender: wrote ${(html.length / 1024).toFixed(1)} kB to dist/index.html`)
