import { build } from 'esbuild'
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')
const websiteRoot = __dirname

// Read the HTML template (we'll update it with the bundled script)
const htmlTemplatePath = join(websiteRoot, 'static-preview-template.html')
const htmlOutputPath = join(websiteRoot, 'static-preview.html')

// First, read the current static-preview.html to get the CSS styles
const currentHtml = readFileSync(htmlOutputPath, 'utf-8')

// Extract the style block
const styleMatch = currentHtml.match(/<style>([\s\S]*?)<\/style>/)
const styles = styleMatch ? styleMatch[1] : ''

// Extract CSS files from SpecDesignSystem components
function getComponentCSSFiles(dir, basePath = '') {
  const files = []
  try {
    const entries = readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = join(dir, entry.name)
      const relativePath = join(basePath, entry.name)
      
      if (entry.isDirectory()) {
        files.push(...getComponentCSSFiles(fullPath, relativePath))
      } else if (entry.name.endsWith('.css')) {
        files.push({ path: fullPath, relative: relativePath })
      }
    }
  } catch (err) {
    // Directory doesn't exist or can't be read
  }
  return files
}

const componentCSSFiles = getComponentCSSFiles(join(projectRoot, 'SpecDesignSystem', 'components'))
let componentCSS = ''
for (const file of componentCSSFiles) {
  try {
    const cssContent = readFileSync(file.path, 'utf-8')
    componentCSS += `\n    /* ${file.relative} */\n${cssContent}\n`
  } catch (err) {
    console.warn(`Could not read CSS file: ${file.path}`)
  }
}

// Ensure dist directory exists
try {
  mkdirSync(join(websiteRoot, 'dist'), { recursive: true })
} catch (err) {
  // Directory already exists
}

// Build the React app
await build({
  entryPoints: [join(websiteRoot, 'static-preview-entry.tsx')],
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: 'es2020',
  jsx: 'transform',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  jsxImportSource: undefined,
  outfile: join(websiteRoot, 'dist', 'static-preview-bundle.js'),
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  alias: {
    '@design-system': join(projectRoot, 'SpecDesignSystem'),
  },
  loader: {
    '.json': 'json',
  },
  resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  plugins: [
    // Plugin to replace React/ReactDOM imports with globals and prevent JSX runtime
    {
      name: 'react-global',
      setup(build) {
        // Prevent JSX runtime from being bundled
        build.onResolve({ filter: /^react\/jsx-runtime/ }, () => {
          return { path: 'react/jsx-runtime', namespace: 'react-jsx-stub' }
        })
        build.onResolve({ filter: /^react\/jsx-dev-runtime/ }, () => {
          return { path: 'react/jsx-dev-runtime', namespace: 'react-jsx-stub' }
        })
        build.onLoad({ filter: /.*/, namespace: 'react-jsx-stub' }, () => {
          // Stub JSX runtime to use React.createElement
          return {
            contents: `export const jsx = React.createElement;
export const jsxs = React.createElement;
export const Fragment = React.Fragment;`,
            loader: 'js',
          }
        })
        
        build.onResolve({ filter: /^react$/ }, () => {
          return { path: 'react', namespace: 'react-global' }
        })
        build.onResolve({ filter: /^react-dom$/ }, () => {
          return { path: 'react-dom', namespace: 'react-global' }
        })
        build.onResolve({ filter: /^react-dom\/client$/ }, () => {
          return { path: 'react-dom/client', namespace: 'react-global' }
        })
        build.onLoad({ filter: /.*/, namespace: 'react-global' }, (args) => {
          if (args.path === 'react') {
            return {
              contents: `export default React; 
export const { useState, useEffect, createContext, useContext, useLayoutEffect, Fragment } = React;`,
              loader: 'js',
            }
          }
          if (args.path === 'react-dom') {
            return {
              contents: `export default ReactDOM; 
export const { createRoot } = ReactDOM;`,
              loader: 'js',
            }
          }
          if (args.path === 'react-dom/client') {
            return {
              contents: `export const { createRoot } = ReactDOM;
export default { createRoot: ReactDOM.createRoot };`,
              loader: 'js',
            }
          }
        })
      },
    },
    // Handle CSS imports by ignoring them (we'll include them in the HTML separately)
    {
      name: 'css-loader',
      setup(build) {
        build.onLoad({ filter: /\.css$/ }, async () => {
          return { contents: '', loader: 'empty' }
        })
      },
    },
  ],
})

// Read the bundled JS
const bundledJS = readFileSync(join(websiteRoot, 'dist', 'static-preview-bundle.js'), 'utf-8')

// Create the HTML template if it doesn't exist
let htmlTemplate
if (styleMatch) {
  // Use existing HTML structure
  htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Multi-Brand Design System Portfolio - Static Preview</title>
  
  <style>
${styles}${componentCSS}
  </style>
</head>
<body>
  <!-- Root container for React app -->
  <div id="root"></div>

  <!-- React and ReactDOM from CDN -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  
  <!-- Bundled React app -->
  <script>
if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
  console.error('React or ReactDOM not loaded. Please check the CDN scripts.');
} else {
${bundledJS}
}
  </script>
</body>
</html>`
} else {
  // Fallback template
  htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Multi-Brand Design System Portfolio - Static Preview</title>
  
  <style>
${styles}${componentCSS}
  </style>
</head>
<body>
  <div id="root"></div>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script>
${bundledJS}
  </script>
</body>
</html>`
}

// Write the final HTML file
writeFileSync(htmlOutputPath, htmlTemplate, 'utf-8')

console.log('✓ Built static-preview.html with bundled React components')
console.log(`  Output: ${htmlOutputPath}`)

