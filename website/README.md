# Portfolio Website

This is the portfolio website showcasing the multi-brand design system. It's built as a separate application that imports components from the design system.

## Structure

```
website/
├── src/
│   ├── pages/           # Page components
│   │   ├── index.tsx    # Showcase page
│   │   ├── components.tsx
│   │   └── tokens.tsx
│   ├── components/      # Website-specific components
│   │   ├── BrandSwitcher/
│   │   └── ComponentDemo/
│   ├── context/         # React context
│   │   └── BrandContext.tsx
│   ├── utils/           # Utilities
│   │   └── injectTokens.ts
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Getting Started

1. Install dependencies:
```bash
cd website
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Features

- **Brand Switching**: Switch between different brand themes
- **Component Showcase**: View all design system components
- **Token Viewer**: Inspect design tokens for each brand
- **Responsive Design**: Works on all screen sizes

## Integration with Design System

The website imports components from the `Spec Design System` folder using the `@design-system` alias configured in `vite.config.ts`.

Example:
```tsx
import { Button, Surface, Card } from '@design-system/components'
```

## Development

This is a gradual migration setup. The current app in `/src` continues to work independently, while this new website folder provides a showcase for the design system components.


