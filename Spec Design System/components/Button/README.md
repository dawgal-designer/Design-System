# ButtonPrimaryL Component

A primary button component that adapts to the current brand theme through CSS variables.

## Usage

```tsx
import { ButtonPrimaryL, ButtonSecondary } from '@design-system/components'

function App() {
  return (
    <>
      <ButtonPrimaryL label="Primary Button" onClick={() => alert('Clicked!')} />
      <ButtonSecondary label="Secondary Button" onClick={() => alert('Clicked!')} />
      
      {/* Using children instead of label */}
      <ButtonPrimaryL onClick={() => alert('Clicked!')}>Click me</ButtonPrimaryL>
      
      {/* Static state examples */}
      <ButtonPrimaryL label="Hover State" state="Hover" />
      <ButtonPrimaryL label="Pressed State" state="Pressed" />
    </>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Button label text (alternative to children) |
| `state` | `'Default' \| 'Hover' \| 'Pressed'` | `'Default'` | Explicit button state for static examples. When not provided, button uses interactive hover/active states |
| `children` | `React.ReactNode` | - | Button content (alternative to label) |
| `onClick` | `() => void` | - | Click handler |
| `disabled` | `boolean` | `false` | Disables the button |
| `className` | `string` | - | Additional CSS classes |
| `...props` | `React.ButtonHTMLAttributes` | - | All standard button HTML attributes |

## Components

### ButtonPrimaryL

Primary button variant with solid background and shadow. Main action button for important actions.

### ButtonSecondary

Secondary button variant with lighter background. Alternative action button for secondary actions.

## States

- **Default**: Normal button state with background, border, and shadow
- **Hover**: Hover state (automatically applied on hover, or explicitly set via `state` prop)
- **Pressed**: Active/pressed state (automatically applied on click, or explicitly set via `state` prop)

## Examples

### Basic Usage

```tsx
<ButtonPrimaryL label="Click me" onClick={() => alert('Clicked!')} />
```

### Using Children

```tsx
<ButtonPrimaryL onClick={() => alert('Clicked!')}>
  Click me
</ButtonPrimaryL>
```

### Static State Examples

For design showcases or static examples, you can explicitly set the state:

```tsx
<ButtonPrimaryL label="Default State" state="Default" />
<ButtonPrimaryL label="Hover State" state="Hover" />
<ButtonPrimaryL label="Pressed State" state="Pressed" />
```

### Disabled State

```tsx
<ButtonPrimaryL label="Cannot Click" disabled />
```

### Secondary Button

```tsx
<ButtonSecondary label="Secondary Action" onClick={handleSecondary} />
```

## Styling

The ButtonPrimaryL and ButtonSecondary components use CSS variables from the design tokens, making them brand-agnostic. The components automatically adapt when the brand theme changes.

### CSS Variables Used (ButtonPrimaryL)

- `--button-primary-label`: Text color
- `--button-primary-bg-default`: Default background color
- `--button-primary-bg-hover`: Hover background color
- `--button-primary-bg-pressed`: Pressed background color
- `--button-primary-border`: Border color
- `--button-primary-shadow`: Box shadow
- `--button-primary-accent-rgb`: RGB values for focus outline

### CSS Variables Used (Button Secondary)

- `--button-secondary-label`: Text color
- `--button-secondary-bg-default`: Default background color
- `--button-secondary-bg-hover`: Hover background color
- `--button-secondary-bg-pressed`: Pressed background color
- `--button-secondary-border`: Border color
- `--button-secondary-shadow`: Box shadow
- `--button-font-family`: Font family
- `--button-font-size`: Font size
- `--button-line-height`: Line height
- `--button-font-weight`: Font weight
- `--button-letter-spacing`: Letter spacing
- `--button-l-padding-top-bottom`: Vertical padding
- `--button-l-padding-left-right`: Horizontal padding
- `--button-border-radius`: Border radius


