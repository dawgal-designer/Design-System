import React from 'react'
import './Button.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant style
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean
  /**
   * Whether the button takes full width of its container
   */
  fullWidth?: boolean
  /**
   * Button content
   */
  children: React.ReactNode
}

/**
 * Button component - A versatile button component that adapts to the current brand theme
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full-width',
    loading && 'btn--loading',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="btn__spinner" aria-hidden="true" />}
      <span className={loading ? 'btn__content--hidden' : 'btn__content'}>
        {children}
      </span>
    </button>
  )
}

