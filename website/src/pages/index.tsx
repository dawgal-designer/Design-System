import React from 'react'
import { BrandSwitcher } from '../components/BrandSwitcher/BrandSwitcher'
import { ComponentDemo } from '../components/ComponentDemo/ComponentDemo'
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
          title="Coming Soon"
          description="Components will be added here"
        >
          <div className="demo-grid">
            <p>Design system components removed</p>
          </div>
        </ComponentDemo>
      </section>
    </div>
  )
}


