import React from 'react'
import './ButtonSecondaryL.css'

export type ButtonState = 'Default' | 'Hover' | 'Pressed'

export interface ButtonSecondaryLProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /**
   * Button label text
   */
  label?: string
  /**
   * Explicit button state (for static state examples)
   * When not provided, button uses interactive hover/active states
   */
  state?: ButtonState
  /**
   * Button content (alternative to label)
   */
  children?: React.ReactNode
}

/**
 * ButtonSecondaryL component - Secondary button variant that adapts to the current brand theme
 * Based on Figma design specifications
 */
export const ButtonSecondaryL: React.FC<ButtonSecondaryLProps> = ({
  label,
  state = 'Default',
  children,
  className = '',
  onClick,
  disabled,
  ...props
}) => {
  const buttonClasses = [
    'button-secondary-l',
    `button-secondary-l--${state.toLowerCase()}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = label || children

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      data-state={state}
      {...props}
    >
      {content}
    </button>
  )
}


