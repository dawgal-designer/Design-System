import React from 'react'
import { BrandSwitcher } from '../components/BrandSwitcher/BrandSwitcher'
import { ComponentDemo } from '../components/ComponentDemo/ComponentDemo'
import { Button } from '@design-system/components'
import { Surface } from '@design-system/components'
import './index.css'

export default function IndexPage() {
  return (
    <div className="index-page">
      <div className="page-header">
        <h1 className="page-title">Multi-Brand Design System</h1>
        <p className="page-subtitle">
          A flexible design system that adapts to multiple brand identities
        </p>
        <BrandSwitcher />
      </div>

      <section className="showcase-section">
        <h2 className="section-title">Component Showcase</h2>

        <ComponentDemo
          title="Button Component"
          description="Primary and secondary button variants with brand-agnostic styling"
        >
          <div className="demo-grid">
            <Button variant="primary" size="large">
              Primary Button
            </Button>
            <Button variant="secondary" size="large">
              Secondary Button
            </Button>
            <Button variant="primary" size="medium">
              Medium Button
            </Button>
            <Button variant="secondary" size="small">
              Small Button
            </Button>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Surface Component"
          description="Elevated surfaces with customizable elevation, padding, and border radius"
        >
          <div className="demo-grid">
            <Surface elevation={1} padding="md">
              <p>Elevation 1</p>
            </Surface>
            <Surface elevation={2} padding="md">
              <p>Elevation 2</p>
            </Surface>
            <Surface elevation={3} padding="md">
              <p>Elevation 3</p>
            </Surface>
          </div>
        </ComponentDemo>
      </section>
    </div>
  )
}

