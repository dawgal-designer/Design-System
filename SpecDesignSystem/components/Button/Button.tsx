import React from 'react'
import { ButtonPrimaryL } from './ButtonPrimaryL'
import { ButtonSecondaryL } from './ButtonSecondaryL'
import './Button.css'

export type ButtonVariant = 'primary' | 'secondary'
export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /**
   * Button variant (primary or secondary)
   */
  variant?: ButtonVariant
  /**
   * Button size (small, medium, or large)
   */
  size?: ButtonSize
  /**
   * Button content
   */
  children?: React.ReactNode
}

/**
 * Unified Button component that wraps ButtonPrimaryL and ButtonSecondaryL
 * Provides a consistent API with variant and size props
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  ...props
}) => {
  // Map size to appropriate component
  // For now, both ButtonPrimaryL and ButtonSecondaryL are "Large" size
  // We'll use className to handle size variations
  const sizeClass = `button--${size}`
  const combinedClassName = `${className} ${sizeClass}`.trim()

  if (variant === 'secondary') {
    return (
      <ButtonSecondaryL className={combinedClassName} {...props}>
        {children}
      </ButtonSecondaryL>
    )
  }

  return (
    <ButtonPrimaryL className={combinedClassName} {...props}>
      {children}
    </ButtonPrimaryL>
  )
}

