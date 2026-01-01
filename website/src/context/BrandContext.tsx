import React, { createContext, useState, useContext, useEffect } from 'react'
import { injectTokenCSSVariables } from '../utils/injectTokens'

type Brand = 'brand-a' | 'brand-b'

interface BrandContextType {
  brand: Brand
  setBrand: (brand: Brand) => void
}

const BrandContext = createContext<BrandContextType>({
  brand: 'brand-a',
  setBrand: () => {},
})

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [brand, setBrandState] = useState<Brand>('brand-a')

  // Initialize tokens immediately on mount and when brand changes
  useEffect(() => {
    injectTokenCSSVariables(brand)
  }, [brand])

  const setBrand = (newBrand: Brand) => {
    setBrandState(newBrand)
    injectTokenCSSVariables(newBrand)
  }

  return (
    <BrandContext.Provider value={{ brand, setBrand }}>
      {children}
    </BrandContext.Provider>
  )
}

export const useBrand = () => useContext(BrandContext)


