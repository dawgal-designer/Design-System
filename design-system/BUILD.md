# Building SpecDesignSystem as a Component Library

This design system is now configured to build as an ES module library with separate CSS files.

## Build Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the library:**
   ```bash
   npm run build
   ```

This will create:
- `dist/index.js` - ES module with all components
- `dist/styles.css` - All component styles in one file
- `dist/index.d.ts` - TypeScript declarations

## Usage in HTML

After building, you can use the components in HTML files:

```html
<!-- Link component styles -->
<link rel="stylesheet" href="../SpecDesignSystem/dist/styles.css">

<!-- Import components as ES modules -->
<script type="module">
  import { ButtonPrimaryL, ButtonSecondaryL, Surface } from '../SpecDesignSystem/dist/index.js';
  // Use components...
</script>
```

## Development

For watch mode during development:
```bash
npm run dev
```

This will rebuild automatically when you make changes to components.

