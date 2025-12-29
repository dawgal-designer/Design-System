# Multi-Brand Design System

A design system structure supporting multiple brands with shared token architecture and brand-agnostic React components.

## Structure

```
multi-brand-design-system/
├── tokens/
│   ├── brand-a/
│   │   ├── colors.json
│   │   └── typography.json
│   └── brand-b/
│       ├── colors.json
│       └── typography.json
├── components/
│   ├── Button/
│   │   ├── ButtonPrimaryL.tsx
│   │   ├── ButtonPrimaryL.css
│   │   ├── ButtonSecondary.tsx
│   │   ├── ButtonSecondary.css
│   │   └── README.md
│   ├── Card/
│   │   ├── Card.tsx
│   │   ├── Card.css
│   │   └── README.md
│   ├── Typography/
│   │   ├── Typography.tsx
│   │   ├── Typography.css
│   │   └── README.md
│   └── index.ts
└── .gitignore
```

## Tokens

Design tokens are organized by brand. Each brand contains:
- **colors.json**: Color palette and semantic color tokens
- **typography.json**: Font families, sizes, weights, and line heights

## Components

React components that are brand-agnostic and use CSS variables from design tokens. Components automatically adapt when the brand theme changes.

### Available Components

- **ButtonPrimaryL**: Primary button component with solid background and shadow
- **ButtonSecondary**: Secondary button component with lighter background
- **Card**: Flexible container component for displaying content
- **Typography**: Consistent text styling component with multiple variants
- **Surface**: Surface component for elevated content areas

Each component includes:
- TypeScript definitions
- CSS using design token variables
- Comprehensive documentation

## Usage

### Importing Components

```tsx
import { ButtonPrimaryL, ButtonSecondary, Card, Typography } from './components'

function App() {
  return (
    <Card title="Example" description="This adapts to the current brand">
      <Typography variant="h1">Heading</Typography>
      <ButtonPrimaryL label="Click me" onClick={() => alert('Clicked!')} />
      <ButtonSecondary label="Secondary Action" onClick={() => alert('Secondary!')} />
    </Card>
  )
}
```

### Brand Switching

Components use CSS variables from design tokens, making them brand-agnostic. To switch brands, simply update the CSS variables in your application's root stylesheet.

Tokens can be consumed by design system implementations for each brand, ensuring consistency across different brand experiences while maintaining brand-specific identity.

