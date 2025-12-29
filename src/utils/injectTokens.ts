import { getTokenValue, getButtonPrimaryShadow, getButtonSecondaryShadow, getSpacingToken, getTypographyToken, getBorderRadiusToken } from './tokens';

// Helper to convert hex to RGB for CSS variables
function hexToRgb(hex: string): string {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

// Convert color to RGB values (handles hex, rgb, and named colors)
function colorToRgb(color: string): string {
  if (color.startsWith('#')) {
    return hexToRgb(color);
  }
  // Handle named colors
  const namedColors: Record<string, string> = {
    white: '255, 255, 255',
    black: '0, 0, 0',
  };
  return namedColors[color.toLowerCase()] || '0, 129, 255'; // fallback to accent color
}

// Inject CSS custom properties from tokens into the document root
export function injectTokenCSSVariables(): void {
  const root = document.documentElement;
  
  // Color tokens
  const accentColor = getTokenValue('{root.color.primary.accent}');
  const accentHoverColor = getTokenValue('{root.color.primary.accentHover}');
  const accentPressedColor = getTokenValue('{root.color.primary.accentPressed}');
  const labelColor = getTokenValue('{root.color.primary.label}');
  const borderColor = getTokenValue('{root.color.border.strokeGradient}');
  
  // Convert colors to RGB for rgba usage
  const accentRgb = colorToRgb(accentColor);
  
  // Shadow tokens
  const shadow = getButtonPrimaryShadow();
  const shadowSecondary = getButtonSecondaryShadow();
  
  // Secondary button tokens
  const secondaryBgDefault = getTokenValue('{alias.button.secondary.bgDefault}');
  const secondaryBgHover = getTokenValue('{alias.button.secondary.bgHover}');
  const secondaryBgPressed = getTokenValue('{alias.button.secondary.bgPressed}');
  const secondaryLabelDefault = getTokenValue('{alias.button.secondary.labelDefault}');
  const secondaryBorder = getTokenValue('{alias.button.secondary.strokeGradientOutside}');
  
  // Set CSS custom properties
  root.style.setProperty('--button-primary-bg-default', accentColor);
  root.style.setProperty('--button-primary-bg-hover', accentHoverColor);
  root.style.setProperty('--button-primary-bg-pressed', accentPressedColor);
  root.style.setProperty('--button-primary-label', labelColor);
  root.style.setProperty('--button-primary-border', borderColor);
  root.style.setProperty('--button-primary-shadow', shadow);
  
  // Secondary button CSS custom properties
  root.style.setProperty('--button-secondary-bg-default', secondaryBgDefault);
  root.style.setProperty('--button-secondary-bg-hover', secondaryBgHover);
  root.style.setProperty('--button-secondary-bg-pressed', secondaryBgPressed);
  root.style.setProperty('--button-secondary-label', secondaryLabelDefault);
  root.style.setProperty('--button-secondary-border', secondaryBorder);
  root.style.setProperty('--button-secondary-shadow', shadowSecondary);
  
  // RGB values for rgba usage in shadows
  root.style.setProperty('--button-primary-accent-rgb', accentRgb);
  
  // Typography tokens
  const fontFamily = getTypographyToken('{alias.font.fontFamily}');
  const fontSize = getTypographyToken('{alias.typography.label.fontSize}');
  const lineHeight = getTypographyToken('{alias.typography.label.lineHeight}');
  const fontWeight = getTypographyToken('{alias.typography.label.fontWeight}');
  const letterSpacing = getTypographyToken('{alias.typography.label.letterSpacing}');
  
  root.style.setProperty('--button-font-family', fontFamily);
  root.style.setProperty('--button-font-size', fontSize);
  root.style.setProperty('--button-line-height', lineHeight);
  root.style.setProperty('--button-font-weight', fontWeight);
  root.style.setProperty('--button-letter-spacing', letterSpacing);
  
  // Spacing tokens
  const paddingTopBottom = getSpacingToken('{alias.button.l.topBottom}');
  const paddingLeftRight = getSpacingToken('{alias.button.l.leftRight}');
  
  root.style.setProperty('--button-l-padding-top-bottom', paddingTopBottom);
  root.style.setProperty('--button-l-padding-left-right', paddingLeftRight);
  
  // Border radius tokens
  const borderRadius = getBorderRadiusToken('{alias.button.cornerDefault}');
  
  root.style.setProperty('--button-border-radius', borderRadius);
}

