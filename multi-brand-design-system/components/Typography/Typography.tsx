import React from 'react'
import './Typography.css'

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'small'
  | 'caption'

export interface TypographyProps {
  /**
   * Typography variant/style
   */
  variant?: TypographyVariant
  /**
   * HTML element to render (defaults based on variant)
   */
  as?: React.ElementType
  /**
   * Text color variant
   */
  color?: 'primary' | 'secondary' | 'tertiary' | 'inverse'
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right' | 'justify'
  /**
   * Whether text should be bold
   */
  bold?: boolean
  /**
   * Text content
   */
  children: React.ReactNode
  /**
   * Additional CSS class name
   */
  className?: string
}

const defaultElementMap: Record<TypographyVariant, React.ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  small: 'p',
  caption: 'span',
}

/**
 * Typography component - Provides consistent text styling using design tokens
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  color = 'primary',
  align = 'left',
  bold = false,
  children,
  className = '',
}) => {
  const Component = as || defaultElementMap[variant]

  const typographyClasses = [
    'typography',
    `typography--${variant}`,
    `typography--color-${color}`,
    `typography--align-${align}`,
    bold && 'typography--bold',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <Component className={typographyClasses}>{children}</Component>
}


