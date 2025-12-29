# Portfolio POC - Brand System Switching Demo

A React proof of concept portfolio website demonstrating brand system switching with complexity levels (modes and densities).

## Features

- **Brand Switching**: Toggle between Brand A and Brand B
- **Mode Switching**: Switch between Light and Dark modes
- **Density Switching**: Toggle between Comfortable and Compact densities
- **Dynamic Theming**: All components adapt to the selected brand, mode, and density
- **Token-Based Design System**: Organized token structure for easy customization

## Project Structure

```
portfolio-poc/
├── public/
├── src/
│   ├── components/
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.css
│   │   └── Controls/
│   │       ├── BrandToggle.jsx
│   │       ├── ModeToggle.jsx
│   │       ├── DensityToggle.jsx
│   │       └── Controls.css
│   ├── tokens/
│   │   ├── brandA/
│   │   │   ├── base.js
│   │   │   ├── light.js
│   │   │   ├── dark.js
│   │   │   ├── comfortable.js
│   │   │   └── compact.js
│   │   └── brandB/
│   │       ├── base.js
│   │       ├── light.js
│   │       ├── dark.js
│   │       ├── comfortable.js
│   │       └── compact.js
│   ├── styles/
│   │   ├── brandA.css
│   │   ├── brandB.css
│   │   └── global.css
│   ├── context/
│   │   └── ThemeContext.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── index.html
```

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

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

### Token System

The token system is organized into:
- **Base tokens**: Core brand identity (colors, typography, spacing units)
- **Mode tokens**: Light and dark mode variations
- **Density tokens**: Comfortable and compact spacing/typography scales

### Theme Context

The `ThemeContext` manages the current brand, mode, and density state, and merges the appropriate tokens to create a complete theme object.

### Components

- **Card**: Displays portfolio items with dynamic styling based on the current theme
- **Controls**: Toggle components for switching between brands, modes, and densities

## Customization

To add a new brand:
1. Create a new folder in `src/tokens/` (e.g., `brandC`)
2. Create `base.js`, `light.js`, `dark.js`, `comfortable.js`, and `compact.js`
3. Update `ThemeContext.js` to include the new brand
4. Add a new toggle button in `BrandToggle.jsx`

## Technologies

- React 18
- Vite
- CSS Custom Properties (CSS Variables)
- Context API for state management


