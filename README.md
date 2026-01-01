# Portfolio POC - Multi-Brand Design System

A React portfolio website showcasing a multi-brand design system with brand switching capabilities. The portfolio demonstrates reusable React components that adapt to different brand identities through design tokens.

## Features

- **Brand Switching**: Toggle between Brand A and Brand B themes
- **Component Showcase**: Interactive demonstrations of all design system components
- **Design Tokens Viewer**: Inspect design tokens (colors, typography, spacing) for each brand
- **Multi-Page Portfolio**: React Router-based navigation with multiple showcase pages
- **Token-Based Theming**: CSS custom properties injected from JSON token files

## Project Structure

```
portfolio-poc/
├── website/                    # Main portfolio application
│   ├── src/
│   │   ├── pages/             # Portfolio pages
│   │   │   ├── index.tsx      # Showcase/home page
│   │   │   ├── components.tsx # Components documentation
│   │   │   └── tokens.tsx     # Design tokens viewer
│   │   ├── components/        # Portfolio-specific components
│   │   │   ├── BrandSwitcher/ # Brand switching UI
│   │   │   └── ComponentDemo/ # Component showcase wrapper
│   │   ├── context/
│   │   │   └── BrandContext.tsx # Brand state management
│   │   ├── utils/
│   │   │   └── injectTokens.ts  # Token injection utility
│   │   ├── App.tsx            # Main app with routing
│   │   └── main.tsx           # Entry point
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── design-system/             # Design system component library
│   ├── components/
│   │   ├── Button/
│   │   │   ├── ButtonPrimaryL.tsx
│   │   │   └── ButtonSecondary.tsx
│   │   ├── Card/
│   │   ├── Surface/
│   │   ├── Typography/
│   │   └── index.ts           # Component exports
│   └── tokens/
│       ├── brand-a/
│       │   ├── colors.json
│       │   └── typography.json
│       └── brand-b/
│           ├── colors.json
│           └── typography.json
│
└── config/                    # Configuration files
    ├── DesignReview.json
    └── setup.json
```

## Getting Started

### Installation

1. Navigate to the website directory:
```bash
cd website
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## How It Works

### Brand Switching

1. The `BrandContext` manages the current brand state (brand-a or brand-b)
2. When a brand is selected, `injectTokens.ts` reads the corresponding JSON token files
3. Design tokens are injected as CSS custom properties on the `:root` element
4. All components use these CSS variables, so they automatically adapt to the selected brand

### Design System Integration

The portfolio imports components from `design-system` using the `@design-system` alias configured in `vite.config.ts`:

```tsx
import { Button, Card, Surface, Typography } from '@design-system/components'
```

### Pages

- **Showcase** (`/`): Home page with component demonstrations
- **Components** (`/components`): Detailed component documentation and examples
- **Tokens** (`/tokens`): Interactive viewer for design tokens

## Customization

### Adding a New Brand

1. Create a new folder in `design-system/tokens/` (e.g., `brand-c`)
2. Add `colors.json` and `typography.json` files
3. Update `website/src/utils/injectTokens.ts` to include the new brand
4. Update `BrandContext.tsx` to include the new brand option

### Adding New Components

1. Create the component in `design-system/components/YourComponent/`
2. Export it from `design-system/components/index.ts`
3. Import and use it in the portfolio pages

## Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS Custom Properties** - Dynamic theming
- **Context API** - State management
