import { ThemeProvider, useTheme } from './context/ThemeContext'
import { Card } from '@design-system/components'
import { BrandToggle } from './components/Controls/BrandToggle'
import { ModeToggle } from './components/Controls/ModeToggle'
import { DensityToggle } from './components/Controls/DensityToggle'
import './styles/global.css'
import './styles/brandA.css'
import './styles/brandB.css'
import './App.css'

const AppContent = () => {
  const { theme, brand } = useTheme()

  const appStyle = {
    '--bg-primary': theme.background.primary,
    '--bg-secondary': theme.background.secondary,
    '--text-primary': theme.text.primary,
    '--text-secondary': theme.text.secondary,
    '--primary-color': theme.primary.main,
    '--secondary-color': theme.secondary.main,
    '--accent-color': theme.accent.main,
    '--font-family-primary': theme.typography.fontFamily.primary,
    '--font-family-secondary': theme.typography.fontFamily.secondary,
    '--border-color': theme.border.primary,
    minHeight: '100vh',
    backgroundColor: theme.background.primary,
    color: theme.text.primary,
    fontFamily: theme.typography.fontFamily.primary,
    transition: 'background-color 0.3s ease, color 0.3s ease',
  }

  const portfolioItems = [
    {
      title: 'Project Alpha',
      description: 'A cutting-edge web application built with modern technologies and best practices.',
      tags: ['React', 'TypeScript', 'Vite'],
    },
    {
      title: 'Project Beta',
      description: 'An innovative mobile-first design system that adapts to any screen size.',
      tags: ['Design System', 'CSS', 'Responsive'],
    },
    {
      title: 'Project Gamma',
      description: 'A powerful API integration platform with real-time data synchronization.',
      tags: ['Node.js', 'API', 'WebSocket'],
    },
    {
      title: 'Project Delta',
      description: 'A beautiful e-commerce platform with seamless user experience.',
      tags: ['E-commerce', 'UX', 'UI Design'],
    },
  ]

  return (
    <div className={`app brand-${brand}`} style={appStyle}>
      <header className="app-header">
        <div className="container">
          <h1 className="app-title">Portfolio POC</h1>
          <p className="app-subtitle">Brand System Switching Demo</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <section className="controls-section">
            <h2 className="section-title">Theme Controls</h2>
            <div className="controls-grid">
              <BrandToggle />
              <ModeToggle />
              <DensityToggle />
            </div>
          </section>

          <section className="portfolio-section">
            <h2 className="section-title">Portfolio Projects</h2>
            <div className="portfolio-grid">
              {portfolioItems.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  tags={item.tags}
                />
              ))}
            </div>
          </section>

          <section className="info-section">
            <h2 className="section-title">Current Theme</h2>
            <div className="theme-info">
              <div className="info-item">
                <span className="info-label">Brand:</span>
                <span className="info-value">{theme.name}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Mode:</span>
                <span className="info-value">{theme.mode}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Density:</span>
                <span className="info-value">{theme.density}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Primary Color:</span>
                <span
                  className="info-value color-swatch"
                  style={{ backgroundColor: theme.primary.main }}
                >
                  {theme.primary.main}
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App

