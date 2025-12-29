# Typography Component

A flexible typography component that provides consistent text styling using design tokens, automatically adapting to the current brand theme.

## Usage

```tsx
import { Typography } from '@design-system/components'

function App() {
  return (
    <>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="body">Body text</Typography>
      <Typography variant="caption" color="secondary">Caption text</Typography>
    </>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'display' \| 'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'body' \| 'small' \| 'caption'` | `'body'` | Typography style variant |
| `as` | `React.ElementType` | - | HTML element to render (defaults based on variant) |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'inverse'` | `'primary'` | Text color variant |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'` | Text alignment |
| `bold` | `boolean` | `false` | Whether text should be bold |
| `children` | `React.ReactNode` | - | Text content |
| `className` | `string` | - | Additional CSS class name |

## Variants

- **display**: Largest heading style (defaults to `<h1>`)
- **h1-h6**: Standard heading styles
- **body**: Default body text style (defaults to `<p>`)
- **small**: Smaller body text (defaults to `<p>`)
- **caption**: Smallest text style for captions (defaults to `<span>`)

## Examples

### Headings

```tsx
<Typography variant="h1">Main Heading</Typography>
<Typography variant="h2">Section Heading</Typography>
<Typography variant="h3">Subsection Heading</Typography>
```

### Body Text

```tsx
<Typography variant="body">
  This is regular body text that will adapt to the current brand theme.
</Typography>
```

### With Custom Element

```tsx
<Typography variant="h1" as="div">
  Rendered as div instead of h1
</Typography>
```

### Color Variants

```tsx
<Typography variant="body" color="primary">Primary text</Typography>
<Typography variant="body" color="secondary">Secondary text</Typography>
<Typography variant="body" color="tertiary">Tertiary text</Typography>
<Typography variant="body" color="inverse">Inverse text (for dark backgrounds)</Typography>
```

### Alignment

```tsx
<Typography variant="h2" align="center">Centered Heading</Typography>
<Typography variant="body" align="right">Right-aligned text</Typography>
```

### Bold Text

```tsx
<Typography variant="body" bold>Bold body text</Typography>
```

## Styling

The Typography component uses CSS variables from the design tokens, making it brand-agnostic. The component automatically adapts when the brand theme changes.

### CSS Variables Used

- `--text-style-{variant}-font-size`
- `--text-style-{variant}-font-weight`
- `--text-style-{variant}-line-height`
- `--text-style-{variant}-letter-spacing`
- `--color-text-primary`
- `--color-text-secondary`
- `--color-text-tertiary`
- `--color-text-inverse`
- `--font-family-primary`
- `--font-weight-bold`

