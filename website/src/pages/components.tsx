import React from 'react'
import { BrandSwitcher } from '../components/BrandSwitcher/BrandSwitcher'
import { ComponentDemo } from '../components/ComponentDemo/ComponentDemo'
import { Button } from '@design-system/components'
import { Card } from '@design-system/components'
import { Surface } from '@design-system/components'
import { Typography } from '@design-system/components'
import './components.css'

export default function ComponentsPage() {
  return (
    <div className="components-page">
      <div className="page-header">
        <h1 className="page-title">Components</h1>
        <p className="page-subtitle">
          All available components in the design system
        </p>
        <BrandSwitcher />
      </div>

      <section className="components-section">
        <ComponentDemo
          title="Button"
          description="Interactive button component with multiple variants and sizes"
        >
          <div className="demo-vertical">
            <div className="demo-group">
              <h4>Variants</h4>
              <div className="demo-row">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </div>
            </div>
            <div className="demo-group">
              <h4>Sizes</h4>
              <div className="demo-row">
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </div>
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Card"
          description="Flexible container component for displaying content"
        >
          <div className="demo-grid">
            <Card
              title="Card Title"
              description="This is a card description with some example text."
              tags={['Tag 1', 'Tag 2']}
            />
            <Card
              title="Another Card"
              description="Cards can display various types of content."
            />
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Surface"
          description="Elevated surfaces with customizable properties"
        >
          <div className="demo-vertical">
            <Surface elevation={1} padding="md">
              Surface with elevation 1
            </Surface>
            <Surface elevation={2} padding="lg">
              Surface with elevation 2 and large padding
            </Surface>
            <Surface elevation={3} padding="md" radius="lg">
              Surface with elevation 3 and large radius
            </Surface>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Typography"
          description="Text components with semantic variants"
        >
          <div className="demo-vertical">
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="body">Body text</Typography>
            <Typography variant="caption">Caption text</Typography>
          </div>
        </ComponentDemo>
      </section>
    </div>
  )
}


