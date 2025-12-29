import React from 'react'
import './Surface.css'

export interface SurfaceProps {
  /**
   * Elevation level (0-5) for the surface
   */
  elevation?: 0 | 1 | 2 | 3 | 4 | 5
  /**
   * Content to render inside the surface
   */
  children?: React.ReactNode
  /**
   * Additional CSS class name
   */
  className?: string
  /**
   * Padding size
   */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  /**
   * Border radius size
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

/**
 * Surface component - A container component for creating elevated surfaces with consistent styling
 */
export const Surface: React.FC<SurfaceProps> = ({
  elevation = 1,
  children,
  className = '',
  padding = 'md',
  radius = 'md',
}) => {
  const surfaceClasses = [
    'surface',
    `surface--elevation-${elevation}`,
    `surface--padding-${padding}`,
    `surface--radius-${radius}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={surfaceClasses}>
      {children}
    </div>
  )
}


