# Card Component

A flexible container component for displaying content with consistent styling that adapts to the current brand theme.

## Usage

```tsx
import { Card } from '@design-system/components'

function App() {
  return (
    <Card
      title="Card Title"
      description="Card description text"
      image="/path/to/image.jpg"
      tags={['Tag 1', 'Tag 2']}
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title |
| `description` | `string` | - | Card description text |
| `image` | `string` | - | Card image URL |
| `imageAlt` | `string` | - | Image alt text (defaults to title) |
| `children` | `React.ReactNode` | - | Additional content to render |
| `tags` | `string[]` | - | Array of tags to display |
| `footer` | `React.ReactNode` | - | Footer content |
| `clickable` | `boolean` | `false` | Makes card clickable/interactive |
| `onClick` | `() => void` | - | Click handler function |
| `className` | `string` | - | Additional CSS class name |

## Examples

### Basic Card

```tsx
<Card
  title="Project Title"
  description="This is a project description"
/>
```

### Card with Image

```tsx
<Card
  title="Project Title"
  description="This is a project description"
  image="/project-image.jpg"
  imageAlt="Project screenshot"
/>
```

### Card with Tags

```tsx
<Card
  title="Project Title"
  description="This is a project description"
  tags={['React', 'TypeScript', 'Vite']}
/>
```

### Clickable Card

```tsx
<Card
  title="Clickable Card"
  description="Click to view details"
  clickable
  onClick={() => console.log('Card clicked!')}
/>
```

### Card with Custom Content

```tsx
<Card title="Custom Card">
  <p>Custom content goes here</p>
  <Button>Action Button</Button>
</Card>
```

### Card with Footer

```tsx
<Card
  title="Card with Footer"
  description="This card has a footer"
  footer={<Button>View Details</Button>}
/>
```

## Styling

The Card component uses CSS variables from the design tokens, making it brand-agnostic. The component automatically adapts when the brand theme changes.

### CSS Variables Used

- `--color-background-primary`
- `--color-background-secondary`
- `--color-text-primary`
- `--color-text-secondary`
- `--color-primary-main`
- `--color-border-primary`
- `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`
- `--font-family-primary`
- `--font-size-sm`, `--font-size-base`, `--font-size-xl`
- `--font-weight-regular`, `--font-weight-medium`, `--font-weight-semibold`
- `--line-height-tight`, `--line-height-normal`
- `--border-radius-small`, `--border-radius-large`
- `--shadow-md`


