// Server entry used only at build time (scripts/prerender.mjs) to turn the
// React app into static HTML, so search engines and link previews can read
// the page without running JavaScript.
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { buildJsonLd } from './seo.js'

export function render() {
  return renderToString(<App />)
}

export { buildJsonLd }
