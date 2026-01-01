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

// Add error boundary for debugging
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', color: 'red' }}>
          <h1>Something went wrong</h1>
          <pre>{this.state.error?.toString()}</pre>
          <pre>{this.state.error?.stack}</pre>
        </div>
      )
    }

    return this.props.children
  }
}

function AppWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  )
}

export default AppWithErrorBoundary
