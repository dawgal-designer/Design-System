import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { BrandProvider } from './context/BrandContext'
import IndexPage from './pages/index'
import ComponentsPage from './pages/components'
import TokensPage from './pages/tokens'
import './App.css'

function App() {
  return (
    <BrandProvider>
      <div className="app">
        <nav className="app-nav">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              Design System
            </Link>
            <div className="nav-links">
              <Link to="/" className="nav-link">
                Showcase
              </Link>
              <Link to="/components" className="nav-link">
                Components
              </Link>
              <Link to="/tokens" className="nav-link">
                Tokens
              </Link>
            </div>
          </div>
        </nav>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/tokens" element={<TokensPage />} />
          </Routes>
        </main>
      </div>
    </BrandProvider>
  )
}

export default App

