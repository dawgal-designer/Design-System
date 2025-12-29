# Button Component

A versatile button component that adapts to the current brand theme through CSS variables.

## Usage

```tsx
import { Button } from '@design-system/components'

function App() {
  return (
    <>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
    </>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Shows loading spinner |
| `fullWidth` | `boolean` | `false` | Makes button full width |
| `disabled` | `boolean` | `false` | Disables the button |
| `children` | `React.ReactNode` | - | Button content |

## Variants

- **Primary**: Main action button with solid background
- **Secondary**: Alternative action button
- **Outline**: Button with transparent background and border
- **Ghost**: Minimal button with no background or border

## Sizes

- **Small (`sm`)**: Compact button for tight spaces
- **Medium (`md`)**: Default size for most use cases
- **Large (`lg`)**: Prominent button for important actions

## Examples

### Basic Usage

```tsx
<Button onClick={() => alert('Clicked!')}>Click me</Button>
```

### With Loading State

```tsx
<Button loading={isLoading}>Submit</Button>
```

### Full Width

```tsx
<Button fullWidth>Full Width Button</Button>
```

### Disabled State

```tsx
<Button disabled>Cannot Click</Button>
```

## Styling

The Button component uses CSS variables from the design tokens, making it brand-agnostic. The component automatically adapts when the brand theme changes.

### CSS Variables Used

- `--color-primary-main`
- `--color-primary-dark`
- `--color-primary-contrast`
- `--color-secondary-main`
- `--color-secondary-dark`
- `--color-secondary-contrast`
- `--color-text-primary`
- `--color-background-secondary`
- `--color-background-tertiary`
- `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`
- `--font-family-primary`
- `--font-size-sm`, `--font-size-base`, `--font-size-lg`
- `--font-weight-medium`
- `--line-height-normal`
- `--border-radius-medium`

