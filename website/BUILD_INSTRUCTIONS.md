# Building SpecDesignSystem from website directory

When you're in the `website/` directory, use the following command to build the component library:

```bash
cd ../SpecDesignSystem && npm install && npm run build
```

Or from the project root:

```bash
cd SpecDesignSystem && npm install && npm run build
```

## Project Structure

```
Portfolio POC/
├── SpecDesignSystem/     # Component library (sibling to website)
│   ├── dist/             # Built output (created after npm run build)
│   └── components/
└── website/              # HTML site
    └── static-preview.html
```

## Paths in HTML

The `static-preview.html` file references the component library using relative paths:
- `../SpecDesignSystem/dist/styles.css` - Component styles
- `../SpecDesignSystem/dist/index.js` - Component ES module
- `../SpecDesignSystem/tokens/` - Design tokens

These paths work when serving from the `website/` directory.


