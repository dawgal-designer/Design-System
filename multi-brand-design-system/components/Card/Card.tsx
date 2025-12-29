import React from 'react'
import './Card.css'

export interface CardProps {
  /**
   * Card title
   */
  title?: string
  /**
   * Card description or content
   */
  description?: string
  /**
   * Card image URL
   */
  image?: string
  /**
   * Card image alt text
   */
  imageAlt?: string
  /**
   * Additional content to render in the card
   */
  children?: React.ReactNode
  /**
   * Tags or labels to display
   */
  tags?: string[]
  /**
   * Card footer content
   */
  footer?: React.ReactNode
  /**
   * Whether the card is clickable/interactive
   */
  clickable?: boolean
  /**
   * Click handler
   */
  onClick?: () => void
  /**
   * Additional CSS class name
   */
  className?: string
}

/**
 * Card component - A flexible container component for displaying content
 */
export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  imageAlt,
  children,
  tags,
  footer,
  clickable = false,
  onClick,
  className = '',
}) => {
  const cardClasses = [
    'card',
    clickable && 'card--clickable',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleClick = () => {
    if (clickable && onClick) {
      onClick()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (clickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick?.()
    }
  }

  return (
    <div
      className={cardClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
    >
      {image && (
        <div className="card__image">
          <img src={image} alt={imageAlt || title || 'Card image'} />
        </div>
      )}
      
      <div className="card__content">
        {title && <h3 className="card__title">{title}</h3>}
        {description && <p className="card__description">{description}</p>}
        {children}
        {tags && tags.length > 0 && (
          <div className="card__tags">
            {tags.map((tag, index) => (
              <span key={index} className="card__tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  )
}


