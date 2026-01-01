import React, { useState, createContext, useContext, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { ButtonPrimaryL, ButtonSecondaryL, Surface } from '@design-system/components'
import { injectTokenCSSVariables } from './src/utils/injectTokens'
import './static-preview.css'

// Brand Context
const BrandContext = createContext<{
  brand: 'brand-a' | 'brand-b'
  setBrand: (brand: 'brand-a' | 'brand-b') => void
}>({
  brand: 'brand-a',
  setBrand: () => {},
})

function BrandProvider({ children }: { children: React.ReactNode }) {
  const [brand, setBrandState] = useState<'brand-a' | 'brand-b'>('brand-a')

  useEffect(() => {
    injectTokenCSSVariables(brand)
  }, [brand])

  useEffect(() => {
    injectTokenCSSVariables('brand-a')
  }, [])

  const setBrand = (newBrand: 'brand-a' | 'brand-b') => {
    setBrandState(newBrand)
    injectTokenCSSVariables(newBrand)
  }

  return (
    <BrandContext.Provider value={{ brand, setBrand }}>
      {children}
    </BrandContext.Provider>
  )
}

function useBrand() {
  return useContext(BrandContext)
}

// BrandSwitcher Component
function BrandSwitcher() {
  const { brand, setBrand } = useBrand()

  return (
    <div className="brand-switcher">
      <label htmlFor="brand-select" className="brand-switcher__label">
        Brand:
      </label>
      <select
        id="brand-select"
        value={brand}
        onChange={(e) => setBrand(e.target.value as 'brand-a' | 'brand-b')}
        className="brand-switcher__select"
      >
        <option value="brand-a">Brand A</option>
        <option value="brand-b">Brand B</option>
      </select>
    </div>
  )
}

// ComponentDemo Component
function ComponentDemo({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div className="component-demo">
      <div className="component-demo__header">
        <h3 className="component-demo__title">{title}</h3>
        {description && (
          <p className="component-demo__description">{description}</p>
        )}
      </div>
      <div className="component-demo__content">{children}</div>
    </div>
  )
}

// Main App Component
function App() {
  return (
    <div className="app">
      <nav className="app-nav">
        <div className="nav-container">
          <a href="#" className="nav-logo">
            Design System
          </a>
          <div className="nav-links">
            <a href="#" className="nav-link active">
              Showcase
            </a>
            <a href="#" className="nav-link">
              Components
            </a>
            <a href="#" className="nav-link">
              Tokens
            </a>
          </div>
        </div>
      </nav>

      <main className="app-main">
        <div className="index-page">
          <div className="page-header">
            <h1 className="page-title">Multi-Brand Design System</h1>
            <p className="page-subtitle">
              A flexible design system that adapts to multiple brand identities
            </p>
            <BrandSwitcher />
          </div>

          <section className="showcase-section">
            <h2 className="section-title">Component Showcase</h2>

            <ComponentDemo
              title="Button Component"
              description="Primary and secondary button variants with brand-agnostic styling"
            >
              <div className="demo-grid">
                <ButtonPrimaryL className="button--large" state="Default">
                  Primary Button
                </ButtonPrimaryL>
                <ButtonSecondaryL className="button--large" state="Default">
                  Secondary Button
                </ButtonSecondaryL>
                <ButtonPrimaryL className="button--medium" state="Default">
                  Medium Button
                </ButtonPrimaryL>
                <ButtonSecondaryL className="button--small" state="Default">
                  Small Button
                </ButtonSecondaryL>
              </div>
            </ComponentDemo>

            <ComponentDemo
              title="Surface Component"
              description="Elevated surfaces with customizable elevation, padding, and border radius"
            >
              <div className="demo-grid">
                <Surface elevation={1} padding="md">
                  <p>Elevation 1</p>
                </Surface>
                <Surface elevation={2} padding="md">
                  <p>Elevation 2</p>
                </Surface>
                <Surface elevation={3} padding="md">
                  <p>Elevation 3</p>
                </Surface>
              </div>
            </ComponentDemo>
          </section>
        </div>
      </main>
    </div>
  )
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <BrandProvider>
    <App />
  </BrandProvider>
)

