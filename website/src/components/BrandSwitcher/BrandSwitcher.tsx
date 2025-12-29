import React from 'react'
import { useBrand } from '../../context/BrandContext'
import './BrandSwitcher.css'

export function BrandSwitcher() {
  const { brand, setBrand } = useBrand()

  return (
    <div className="brand-switcher">
      <label htmlFor="brand-select" className="brand-switcher__label">
        Brand:
      </label>
      <select
        id="brand-select"
        value={brand}
        onChange={(e) => setBrand(e.target.value as 'brand-a' | 'brand-b')}
        className="brand-switcher__select"
      >
        <option value="brand-a">Brand A</option>
        <option value="brand-b">Brand B</option>
      </select>
    </div>
  )
}


