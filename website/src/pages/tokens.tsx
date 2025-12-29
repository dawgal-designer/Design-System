import React from 'react'
import { useBrand } from '../context/BrandContext'
import { BrandSwitcher } from '../components/BrandSwitcher/BrandSwitcher'
import './tokens.css'

export default function TokensPage() {
  const { brand } = useBrand()

  return (
    <div className="tokens-page">
      <div className="page-header">
        <h1 className="page-title">Design Tokens</h1>
        <p className="page-subtitle">
          View and understand the design tokens for each brand
        </p>
        <BrandSwitcher />
      </div>

      <section className="tokens-section">
        <div className="tokens-info">
          <h2 className="section-title">Current Brand: {brand}</h2>
          <p>
            Design tokens are CSS custom properties that define the visual
            language of each brand. Switch between brands to see how tokens
            change.
          </p>
        </div>

        <div className="tokens-grid">
          <div className="token-category">
            <h3 className="token-category__title">Colors</h3>
            <div className="token-list">
              <div className="token-item">
                <span className="token-name">--color-background-primary</span>
                <span
                  className="token-value color-swatch"
                  style={{
                    backgroundColor: 'var(--color-background-primary)',
                  }}
                ></span>
              </div>
              <div className="token-item">
                <span className="token-name">--color-background-secondary</span>
                <span
                  className="token-value color-swatch"
                  style={{
                    backgroundColor: 'var(--color-background-secondary)',
                  }}
                ></span>
              </div>
              <div className="token-item">
                <span className="token-name">--color-text-primary</span>
                <span
                  className="token-value color-swatch"
                  style={{ backgroundColor: 'var(--color-text-primary)' }}
                ></span>
              </div>
              <div className="token-item">
                <span className="token-name">--color-text-secondary</span>
                <span
                  className="token-value color-swatch"
                  style={{
                    backgroundColor: 'var(--color-text-secondary)',
                  }}
                ></span>
              </div>
            </div>
          </div>

          <div className="token-category">
            <h3 className="token-category__title">Spacing</h3>
            <div className="token-list">
              <div className="token-item">
                <span className="token-name">--spacing-xs</span>
                <span className="token-value">0.5rem</span>
              </div>
              <div className="token-item">
                <span className="token-name">--spacing-sm</span>
                <span className="token-value">0.75rem</span>
              </div>
              <div className="token-item">
                <span className="token-name">--spacing-md</span>
                <span className="token-value">1rem</span>
              </div>
              <div className="token-item">
                <span className="token-name">--spacing-lg</span>
                <span className="token-value">1.5rem</span>
              </div>
              <div className="token-item">
                <span className="token-name">--spacing-xl</span>
                <span className="token-value">2rem</span>
              </div>
            </div>
          </div>

          <div className="token-category">
            <h3 className="token-category__title">Typography</h3>
            <div className="token-list">
              <div className="token-item">
                <span className="token-name">--font-family-primary</span>
                <span className="token-value">System fonts</span>
              </div>
              <div className="token-item">
                <span className="token-name">--font-size-base</span>
                <span className="token-value">1rem</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

