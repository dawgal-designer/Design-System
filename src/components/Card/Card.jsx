import { useTheme } from '../../context/ThemeContext'
import './Card.css'

export const Card = ({ title, description, image, tags = [] }) => {
  const { theme } = useTheme()

  const cardStyle = {
    '--card-padding': `${theme.component?.card?.padding || 24}px`,
    '--card-gap': `${theme.component?.card?.gap || 16}px`,
    '--card-border-radius': `${theme.borderRadius.medium}px`,
    '--card-bg': theme.surface.primary,
    '--card-border': theme.border.primary,
    '--text-primary': theme.text.primary,
    '--text-secondary': theme.text.secondary,
    '--primary-color': theme.primary.main,
    '--font-family': theme.typography.fontFamily.primary,
    '--font-size-base': theme.typography.fontSize?.base || '1rem',
    '--font-size-lg': theme.typography.fontSize?.lg || '1.125rem',
    '--font-size-xl': theme.typography.fontSize?.xl || '1.25rem',
    '--line-height': theme.typography.lineHeight?.normal || 1.5,
  }

  return (
    <div className="card" style={cardStyle}>
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
        {tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="card-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

