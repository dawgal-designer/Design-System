# Static Preview Build

The `static-preview.html` file now uses the actual React components from the `SpecDesignSystem` directory instead of inline copies.

## How It Works

1. **Entry File**: `static-preview-entry.tsx` imports the actual components from `@design-system`
2. **Build Script**: `build-static-preview.js` uses esbuild to:
   - Bundle all component code and dependencies
   - Extract CSS from component files
   - Generate the final HTML with bundled JavaScript inlined
   - Use React and ReactDOM from CDN (not bundled)

## Building

To build/rebuild the static preview:

```bash
npm run build:static-preview
```

This will:
- Bundle the React components from `SpecDesignSystem`
- Generate `static-preview.html` with the bundled code
- Include all necessary CSS from the component files

## Changes to Components

Any changes you make to the React components in `SpecDesignSystem/components/` will be reflected in `static-preview.html` after running the build command.

## Files

- `static-preview-entry.tsx` - Entry point that imports and uses the components
- `build-static-preview.js` - Build script that bundles everything
- `static-preview.html` - Generated HTML file (don't edit manually, it will be overwritten)


