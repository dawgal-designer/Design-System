import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'components/index.ts'),
      name: 'SpecDesignSystem',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: (id) => {
        // Externalize React and related packages
        return id === 'react' || id === 'react-dom' || id === 'react/jsx-runtime' || id.startsWith('react/');
      },
      output: {
        // Preserve CSS as separate files
        assetFileNames: (assetInfo) => {
          // Rename the CSS file to styles.css
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'styles.css'
          }
          return assetInfo.name || 'asset'
        },
        // Ensure CSS imports are preserved
        preserveModules: false,
      },
    },
    // Output CSS as separate files
    cssCodeSplit: false, // Set to false to bundle all CSS into one file
    // Don't minify CSS to keep it readable (optional, can be changed)
    cssMinify: false,
    // Output directory
    outDir: 'dist',
    // Empty output directory before build
    emptyOutDir: true,
    // Source maps for debugging
    sourcemap: true,
  },
})

