import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { injectTokenCSSVariables } from './utils/injectTokens'

// Inject CSS custom properties from tokens
injectTokenCSSVariables()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


