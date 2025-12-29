import tokens from '../../tokens.json';

// Helper function to convert hex to rgba
function hexToRgba(hex: string, opacity: number = 1): string {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Parse RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// Helper function to resolve token references
function resolveToken(path: string): string {
  // Remove braces and split path
  const cleanPath = path.replace(/[{}]/g, '');
  const parts = cleanPath.split('.');
  
  // Start from root or alias
  let value: any = tokens;
  
  // Navigate through the path
  for (const part of parts) {
    if (value && typeof value === 'object') {
      value = value[part];
    } else {
      return '';
    }
  }
  
  // If we found a value object, return its value property
  if (value && typeof value === 'object' && 'value' in value) {
    const tokenValue = value.value;
    // If the value is itself a reference, resolve it recursively
    if (typeof tokenValue === 'string' && tokenValue.startsWith('{') && tokenValue.endsWith('}')) {
      return resolveToken(tokenValue);
    }
    return tokenValue;
  }
  
  return value || '';
}

// Get token values
export function getTokenValue(path: string): string {
  // Check if it's a reference
  if (path.startsWith('{') && path.endsWith('}')) {
    return resolveToken(path);
  }
  return path;
}

// Get shadow value using color token
export function getButtonPrimaryShadow(): string {
  const shadow = tokens.alias.shadow.buttonPrimary;
  const offsetX = getTokenValue(shadow.offsetX.value);
  const offsetY = getTokenValue(shadow.offsetY.value);
  const blur = getTokenValue(shadow.blur.value);
  const spread = getTokenValue(shadow.spread.value);
  const color = getTokenValue(shadow.color.value);
  const opacity = parseFloat(getTokenValue(shadow.opacity.value));
  
  // Convert hex color to rgba
  const rgbaColor = hexToRgba(color, opacity);
  
  return `${offsetX} ${offsetY} ${blur} ${spread} ${rgbaColor}`;
}

// Get secondary button shadow value using color token
export function getButtonSecondaryShadow(): string {
  const shadow = tokens.alias.shadow.buttonSecondary;
  const offsetX = getTokenValue(shadow.offsetX.value);
  const offsetY = getTokenValue(shadow.offsetY.value);
  const blur = getTokenValue(shadow.blur.value);
  const spread = getTokenValue(shadow.spread.value);
  const color = getTokenValue(shadow.color.value);
  const opacity = parseFloat(getTokenValue(shadow.opacity.value));
  
  // Convert hex color to rgba
  const rgbaColor = hexToRgba(color, opacity);
  
  return `${offsetX} ${offsetY} ${blur} ${spread} ${rgbaColor}`;
}

// Get color token value
export function getColorToken(path: string): string {
  return getTokenValue(path);
}

// Get spacing token value
export function getSpacingToken(path: string): string {
  return getTokenValue(path);
}

// Get typography token value
export function getTypographyToken(path: string): string {
  return getTokenValue(path);
}

// Get border radius token value
export function getBorderRadiusToken(path: string): string {
  return getTokenValue(path);
}

