import { createContext, useContext, useState, useMemo } from 'react'
import { brandALight } from '../tokens/brandA/light.js'
import { brandADark } from '../tokens/brandA/dark.js'
import { brandAComfortable } from '../tokens/brandA/comfortable.js'
import { brandACompact } from '../tokens/brandA/compact.js'
import { brandBLight } from '../tokens/brandB/light.js'
import { brandBDark } from '../tokens/brandB/dark.js'
import { brandBComfortable } from '../tokens/brandB/comfortable.js'
import { brandBCompact } from '../tokens/brandB/compact.js'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [brand, setBrand] = useState('brandA')
  const [mode, setMode] = useState('light')
  const [density, setDensity] = useState('comfortable')

  const theme = useMemo(() => {
    // Get base theme based on brand and mode
    let baseTheme
    if (brand === 'brandA') {
      baseTheme = mode === 'light' ? brandALight : brandADark
    } else {
      baseTheme = mode === 'light' ? brandBLight : brandBDark
    }

    // Apply density
    let densityTheme
    if (brand === 'brandA') {
      densityTheme = density === 'comfortable' ? brandAComfortable : brandACompact
    } else {
      densityTheme = density === 'comfortable' ? brandBComfortable : brandBCompact
    }

    // Deep merge: spread base theme, then override with density-specific values
    return {
      ...baseTheme,
      ...densityTheme,
      spacing: {
        ...baseTheme.spacing,
        ...densityTheme.spacing,
      },
      typography: {
        ...baseTheme.typography,
        ...densityTheme.typography,
      },
      component: {
        ...(baseTheme.component || {}),
        ...densityTheme.component,
      },
      mode,
      density,
    }
  }, [brand, mode, density])

  const value = {
    theme,
    brand,
    mode,
    density,
    setBrand,
    setMode,
    setDensity,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

