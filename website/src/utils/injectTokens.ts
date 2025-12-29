import brandAColors from '@design-system/tokens/brand-a/colors.json'
import brandATypography from '@design-system/tokens/brand-a/typography.json'
import brandBColors from '@design-system/tokens/brand-b/colors.json'
import brandBTypography from '@design-system/tokens/brand-b/typography.json'

const brands: Record<string, any> = {
  'brand-a': {
    colors: brandAColors.colors,
    typography: brandATypography.typography,
  },
  'brand-b': {
    colors: brandBColors.colors,
    typography: brandBTypography.typography,
  },
}

function injectNestedTokens(
  root: HTMLElement,
  prefix: string,
  obj: any,
  separator: string = '-'
): void {
  Object.entries(obj).forEach(([key, value]: [string, any]) => {
    const cssVarName = `${prefix}${separator}${key}`
    
    if (typeof value === 'string' || typeof value === 'number') {
      root.style.setProperty(`--${cssVarName}`, String(value))
    } else if (typeof value === 'object' && value !== null) {
      // Recursively handle nested objects
      injectNestedTokens(root, cssVarName, value, separator)
    }
  })
}

export function injectTokenCSSVariables(brandId: string = 'brand-a'): void {
  const tokens = brands[brandId]
  const root = document.documentElement

  if (!tokens) {
    console.warn(`Brand ${brandId} not found`)
    return
  }

  // Inject color tokens
  if (tokens.colors) {
    injectNestedTokens(root, 'color', tokens.colors)
    
    // Also set commonly used aliases
    if (tokens.colors.background?.primary) {
      root.style.setProperty('--color-background-primary', tokens.colors.background.primary)
    }
    if (tokens.colors.background?.secondary) {
      root.style.setProperty('--color-background-secondary', tokens.colors.background.secondary)
    }
    if (tokens.colors.text?.primary) {
      root.style.setProperty('--color-text-primary', tokens.colors.text.primary)
    }
    if (tokens.colors.text?.secondary) {
      root.style.setProperty('--color-text-secondary', tokens.colors.text.secondary)
    }
    if (tokens.colors.border?.primary) {
      root.style.setProperty('--color-border-primary', tokens.colors.border.primary)
    }
    if (tokens.colors.primary?.main) {
      root.style.setProperty('--color-primary-main', tokens.colors.primary.main)
    }
  }

  // Inject typography tokens
  if (tokens.typography) {
    injectNestedTokens(root, 'font', tokens.typography)
  }
}

