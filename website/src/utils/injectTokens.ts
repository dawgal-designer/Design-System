/**
 * Token Injection System for W3C Design Tokens
 * 
 * This module handles parsing W3C Design Token format (with $value and $type properties),
 * resolving token references (like {brand-a.color.neutral.0}),
 * and injecting them as CSS custom properties.
 * 
 * Key features:
 * - Parses W3C token format with $value/$type
 * - Resolves nested token references
 * - Flattens tokens to CSS variables (--brand-a-color-neutral-0)
 * - Creates semantic aliases (--color-background-primary)
 */

import brandAColors from '@design-system/tokens/brand-a/colors.json'
import brandATypography from '@design-system/tokens/brand-a/typography.json'
import brandBColors from '@design-system/tokens/brand-b/colors.json'
import brandBTypography from '@design-system/tokens/brand-b/typography.json'

// TypeScript type for W3C token structure
type TokenValue = string | number
type TokenObject = {
  $value: TokenValue | string // String may contain references like "{brand-a.color.neutral.0}"
  $type: string
}
type TokenStructure = Record<string, TokenObject | TokenStructure>

// Store resolved tokens for reference resolution
// Format: { "brand-a.color.neutral.0": "#FFFFFF" }
type ResolvedTokens = Record<string, TokenValue>

/**
 * Extracts all token values from a nested token structure
 * Returns a flat map of token paths to their $value properties (may contain unresolved references)
 */
function extractTokens(
  obj: any,
  prefix: string = '',
  tokens: ResolvedTokens = {}
): ResolvedTokens {
  Object.entries(obj).forEach(([key, value]: [string, any]) => {
    const path = prefix ? `${prefix}.${key}` : key

    if (value && typeof value === 'object' && '$value' in value) {
      // This is a token object with $value and $type
      tokens[path] = value.$value
    } else if (value && typeof value === 'object' && !Array.isArray(value)) {
      // This is a nested object, recurse
      extractTokens(value, path, tokens)
    }
  })

  return tokens
}

/**
 * Checks if a value contains a token reference
 */
function hasReference(value: TokenValue | string): boolean {
  return typeof value === 'string' && /\{[^}]+\}/.test(value)
}

/**
 * Resolves token references in a value
 * Example: "{brand-a.color.neutral.0}" -> "#FFFFFF"
 * 
 * @param value - The token value (may contain references)
 * @param resolvedTokens - Map of all resolved tokens
 * @param brandId - The current brand ID
 * @returns Resolved value
 */
function resolveReference(
  value: TokenValue | string,
  resolvedTokens: ResolvedTokens,
  brandId: string
): TokenValue {
  if (typeof value !== 'string') {
    return value
  }

  // Check if the value contains a token reference (wrapped in {})
  const referencePattern = /\{([^}]+)\}/g
  let resolved = value
  let match
  let foundReference = false

  // Reset regex lastIndex to ensure we process all matches
  referencePattern.lastIndex = 0

  while ((match = referencePattern.exec(value)) !== null) {
    foundReference = true
    const referencePath = match[1] // e.g., "brand-a.color.neutral.0"
    
    // Try exact match first
    if (referencePath in resolvedTokens) {
      const resolvedValue = resolvedTokens[referencePath]
      resolved = resolved.replace(match[0], String(resolvedValue))
    } else {
      // If reference doesn't start with brand ID, try adding it
      let fullPath = referencePath
      if (!referencePath.startsWith(brandId)) {
        // Remove any existing brand prefix and add the current brand
        const pathWithoutBrand = referencePath.replace(/^brand-[ab]\./, '')
        fullPath = `${brandId}.${pathWithoutBrand}`
      }

      if (fullPath in resolvedTokens) {
        const resolvedValue = resolvedTokens[fullPath]
        resolved = resolved.replace(match[0], String(resolvedValue))
      } else {
        console.warn(`[Token Injection] Token reference not found: ${referencePath} (tried: ${fullPath})`)
        // Return the original value if we can't resolve it
      }
    }
  }

  return resolved
}

/**
 * Resolves all token references in a tokens map
 * Uses iterative approach to handle nested references
 */
function resolveAllReferences(
  tokens: ResolvedTokens,
  brandId: string
): ResolvedTokens {
  const resolved: ResolvedTokens = { ...tokens }
  const maxIterations = 10 // Prevent infinite loops
  let iteration = 0
  let hasUnresolved = true

  while (hasUnresolved && iteration < maxIterations) {
    hasUnresolved = false
    iteration++

    Object.entries(resolved).forEach(([path, value]) => {
      if (hasReference(value)) {
        const resolvedValue = resolveReference(value, resolved, brandId)
        resolved[path] = resolvedValue
        if (hasReference(resolvedValue)) {
          hasUnresolved = true
        }
      }
    })
  }

  if (hasUnresolved) {
    console.warn(`[Token Injection] Some references could not be resolved after ${maxIterations} iterations`)
  }

  return resolved
}

/**
 * Converts camelCase to kebab-case
 * Example: fontFamily -> font-family, fontSize -> font-size
 */
function camelToKebab(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Flattens nested token structure to CSS variable names
 * Example: brand-a.color.neutral.0 -> --brand-a-color-neutral-0
 */
function pathToCSSVar(path: string): string {
  return `--${path.replace(/\./g, '-')}`
}

/**
 * Injects tokens as CSS custom properties
 * 
 * @param root - The root element (usually document.documentElement)
 * @param tokens - Map of token paths to resolved values
 * @param brandId - The current brand ID
 */
function injectCSSVariables(
  root: HTMLElement,
  tokens: ResolvedTokens,
  brandId: string
): void {
  // Inject all tokens as brand-specific CSS variables
  Object.entries(tokens).forEach(([path, value]) => {
    const cssVarName = pathToCSSVar(path)
    root.style.setProperty(cssVarName, String(value))
  })

  // Extract semantic tokens and create aliases
  // Semantic tokens are under: brandId.color.semantic.*
  const semanticColorPattern = new RegExp(`^${brandId}\\.color\\.semantic\\.`)
  const semanticTypographyPattern = new RegExp(`^${brandId}\\.typography\\.`)

  Object.entries(tokens).forEach(([path, value]) => {
    // Create semantic color aliases (e.g., --color-background-primary)
    if (semanticColorPattern.test(path)) {
      const semanticPath = path.replace(semanticColorPattern, 'color-').replace(/\./g, '-')
      const aliasVarName = `--${semanticPath}`
      root.style.setProperty(aliasVarName, String(value))
    }

    // Create typography aliases with different naming conventions
    // brand-a.typography.fontFamily.primary -> --font-family-primary
    if (semanticTypographyPattern.test(path)) {
      // Remove brand prefix and convert to kebab-case
      const pathWithoutPrefix = path.replace(semanticTypographyPattern, '')
      const parts = pathWithoutPrefix.split('.')
      const kebabParts = parts.map(part => camelToKebab(part))
      const typographyPath = kebabParts.join('-')
      const aliasVarName = `--${typographyPath}`
      root.style.setProperty(aliasVarName, String(value))

      // Also create legacy format: --font-font-family-primary (for backward compatibility)
      const legacyVarName = `--font-${typographyPath}`
      root.style.setProperty(legacyVarName, String(value))

      // Create text-style aliases for textStyles
      if (path.includes('.textStyles.')) {
        // brand-a.typography.textStyles.h1.fontSize -> --text-style-h1-font-size
        const pathWithoutPrefix = path.replace(semanticTypographyPattern, '')
        const parts = pathWithoutPrefix.split('.')
        // Skip the first part (textStyles) and use 'text-style' as prefix
        const styleParts = parts.slice(1).map(part => camelToKebab(part))
        const textStylePath = `text-style-${styleParts.join('-')}`
        const textStyleVarName = `--${textStylePath}`
        root.style.setProperty(textStyleVarName, String(value))
      }
    }
  })
}

/**
 * Main function to inject tokens for a specific brand
 * 
 * @param brandId - The brand ID ('brand-a' or 'brand-b')
 */
export function injectTokenCSSVariables(brandId: string = 'brand-a'): void {
  const root = document.documentElement
  console.log(`[Token Injection] Injecting tokens for brand: ${brandId}`)

  // Get the brand's token files
  let colorsData: any = null
  let typographyData: any = null

  if (brandId === 'brand-a') {
    colorsData = brandAColors
    typographyData = brandATypography
  } else if (brandId === 'brand-b') {
    colorsData = brandBColors
    typographyData = brandBTypography
  } else {
    console.warn(`[Token Injection] Brand ${brandId} not found`)
    return
  }

  // Extract the brand's token structure (should be under brandId key)
  const brandColors = colorsData[brandId]?.color || colorsData.color
  const brandTypography = typographyData[brandId]?.typography || typographyData.typography

  if (!brandColors && !brandTypography) {
    console.warn(`[Token Injection] No tokens found for brand ${brandId}`)
    return
  }

  // Extract all tokens from the structure (raw values, may contain references)
  const rawTokens: ResolvedTokens = {}
  
  if (brandColors) {
    const colorTokens = extractTokens(brandColors, `${brandId}.color`, {})
    Object.assign(rawTokens, colorTokens)
  }

  if (brandTypography) {
    const typographyTokens = extractTokens(brandTypography, `${brandId}.typography`, {})
    Object.assign(rawTokens, typographyTokens)
  }

  console.log(`[Token Injection] Extracted ${Object.keys(rawTokens).length} tokens`)

  // Resolve all token references
  const resolvedTokens = resolveAllReferences(rawTokens, brandId)

  // Inject tokens as CSS variables
  injectCSSVariables(root, resolvedTokens, brandId)

  console.log(`[Token Injection] Successfully injected tokens for ${brandId}`)
}
