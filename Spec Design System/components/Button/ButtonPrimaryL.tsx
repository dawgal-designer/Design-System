import React from 'react'
import './ButtonPrimaryL.css'

export type ButtonState = 'Default' | 'Hover' | 'Pressed'

export interface ButtonPrimaryLProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
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
 * ButtonPrimaryL component - Primary button that adapts to the current brand theme
 */
export const ButtonPrimaryL: React.FC<ButtonPrimaryLProps> = ({
  label,
  state = 'Default',
  children,
  className = '',
  onClick,
  disabled,
  ...props
}) => {
  const buttonClasses = [
    'button-primary-l',
    `button-primary-l--${state.toLowerCase()}`,
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

