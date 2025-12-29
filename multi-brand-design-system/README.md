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
│   │   ├── Button.tsx
│   │   ├── Button.css
│   │   ├── Button.stories.tsx
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

- **Button**: Versatile button component with multiple variants and sizes
- **Card**: Flexible container component for displaying content
- **Typography**: Consistent text styling component with multiple variants

Each component includes:
- TypeScript definitions
- CSS using design token variables
- Comprehensive documentation
- Storybook stories (where applicable)

## Usage

### Importing Components

```tsx
import { Button, Card, Typography } from './components'

function App() {
  return (
    <Card title="Example" description="This adapts to the current brand">
      <Typography variant="h1">Heading</Typography>
      <Button variant="primary">Click me</Button>
    </Card>
  )
}
```

### Brand Switching

Components use CSS variables from design tokens, making them brand-agnostic. To switch brands, simply update the CSS variables in your application's root stylesheet.

Tokens can be consumed by design system implementations for each brand, ensuring consistency across different brand experiences while maintaining brand-specific identity.

