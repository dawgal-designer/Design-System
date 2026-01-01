# Surface Component

A container component for creating elevated surfaces with consistent styling that adapts to the current brand theme. Useful for creating cards, panels, modals, and other elevated UI elements.

## Usage

```tsx
import { Surface } from '@design-system/components'

function App() {
  return (
    <Surface elevation={2} padding="lg">
      <h2>Surface Content</h2>
      <p>This is content inside a surface</p>
    </Surface>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `elevation` | `0 \| 1 \| 2 \| 3 \| 4 \| 5` | `1` | Elevation level for the surface shadow |
| `children` | `React.ReactNode` | - | Content to render inside the surface |
| `className` | `string` | - | Additional CSS class name |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Padding size for the surface |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Border radius size |

## Examples

### Basic Surface

```tsx
<Surface>
  <p>Basic surface with default elevation and padding</p>
</Surface>
```

### Surface with Custom Elevation

```tsx
<Surface elevation={3}>
  <h2>Elevated Surface</h2>
  <p>This surface has a higher elevation</p>
</Surface>
```

### Surface with No Padding

```tsx
<Surface padding="none" elevation={2}>
  <div style={{ padding: '1rem' }}>
    <p>Custom padding inside</p>
  </div>
</Surface>
```

### Surface with Custom Border Radius

```tsx
<Surface radius="xl" elevation={2} padding="lg">
  <p>Surface with extra large border radius</p>
</Surface>
```

### Different Elevation Levels

```tsx
<div style={{ display: 'flex', gap: '1rem' }}>
  <Surface elevation={0}>No elevation</Surface>
  <Surface elevation={1}>Low elevation</Surface>
  <Surface elevation={2}>Medium elevation</Surface>
  <Surface elevation={3}>High elevation</Surface>
</div>
```

## Styling

The Surface component uses CSS variables from the design tokens, making it brand-agnostic. The component automatically adapts when the brand theme changes.

### CSS Variables Used

- `--color-background-primary`
- `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`
- `--border-radius-small`, `--border-radius-medium`, `--border-radius-large`, `--border-radius-xl`
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`, `--shadow-2xl`


