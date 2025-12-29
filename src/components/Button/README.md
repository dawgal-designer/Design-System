# Button Components

Primary and secondary button components matching the Design System v1 specifications.

## Usage

### ButtonPrimaryL

```tsx
import { ButtonPrimaryL } from './components/Button';

// Default state
<ButtonPrimaryL label="Click me" state="Default" />

// Hover state
<ButtonPrimaryL label="Click me" state="Hover" />

// Pressed state
<ButtonPrimaryL label="Click me" state="Pressed" />

// With click handler
<ButtonPrimaryL 
  label="Click me" 
  state="Default"
  onClick={() => console.log('Clicked!')}
/>
```

### ButtonSecondaryL

```tsx
import { ButtonSecondaryL } from './components/Button';

// Default state
<ButtonSecondaryL label="Click me" state="Default" />

// Hover state
<ButtonSecondaryL label="Click me" state="Hover" />

// Pressed state
<ButtonSecondaryL label="Click me" state="Pressed" />

// With click handler
<ButtonSecondaryL 
  label="Click me" 
  state="Default"
  onClick={() => console.log('Clicked!')}
/>
```

## Props

Both components share the same prop interface:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `"Button"` | The text displayed on the button |
| `state` | `'Default' \| 'Hover' \| 'Pressed'` | `'Default'` | The visual state of the button |
| `onClick` | `() => void` | `undefined` | Click handler function |

## States

### ButtonPrimaryL

- **Default**: Blue background (`#0081ff`), white border, shadow effect
- **Hover**: Darker blue background (`#1078dd`), no border, no shadow
- **Pressed**: Darkest blue background (`#046cd2`), no border, no shadow

### ButtonSecondaryL

- **Default**: Semi-transparent white background (`rgba(255,255,255,0.5)`), white border, shadow effect, blue text (`#0081ff`)
- **Hover**: Light gray background (`rgba(0,0,0,0.05)`), no border, no shadow
- **Pressed**: Medium gray background (`rgba(0,0,0,0.1)`), no border, no shadow

## Design Tokens

Both components use design tokens from `tokens.json`:

### Shared Tokens

- **Spacing tokens** for padding:
  - `root.spacing.button.large.topBottom` → 12px
  - `root.spacing.button.large.leftRight` → 24px

- **Border radius tokens**:
  - `root.borderRadius.button` → 8px

- **Typography tokens** for font styling:
  - `root.typography.fontFamily` → SF Pro Display
  - `root.typography.label.*` → All label typography properties

### ButtonPrimaryL Tokens

- **Color tokens** for backgrounds and text:
  - `root.color.primary.accent` → Button default background
  - `root.color.primary.accentHover` → Button hover background
  - `root.color.primary.accentPressed` → Button pressed background
  - `root.color.primary.label` → Button text color
  - `root.color.border.strokeGradient` → Button border color

- **Shadow tokens** for the default state:
  - `root.shadow.buttonPrimary.*` → Shadow properties
  - **Note**: The shadow color token (`root.shadow.buttonPrimary.color`) references `root.color.primary.accent`, ensuring the shadow color always matches the button's accent color

### ButtonSecondaryL Tokens

- **Color tokens** for backgrounds and text:
  - `alias.button.secondary.bgDefault` → Semi-transparent white background (`rgba(255,255,255,0.5)`)
  - `alias.button.secondary.bgHover` → Light gray background (`rgba(0,0,0,0.05)`)
  - `alias.button.secondary.bgPressed` → Medium gray background (`rgba(0,0,0,0.1)`)
  - `alias.button.secondary.labelDefault` → Blue text color (references `root.color.primary.accent`)
  - `alias.button.secondary.strokeGradientOutside` → White border color

- **Shadow tokens** for the default state:
  - `root.shadow.buttonSecondary.*` → Shadow properties
  - **Note**: The shadow color token references `root.color.primary.accent`, matching the text color

## Implementation Notes

- The component uses both CSS classes and inline styles to ensure state prop overrides work correctly
- Hover and active states are handled via CSS pseudo-classes for interactive behavior
- Focus states are included for accessibility

