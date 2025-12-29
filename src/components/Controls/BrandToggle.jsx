import { useTheme } from '../../context/ThemeContext'
import './Controls.css'

export const BrandToggle = () => {
  const { brand, setBrand, theme } = useTheme()

  const buttonStyle = {
    '--primary-color': theme.primary.main,
    '--text-primary': theme.text.primary,
    '--text-inverse': theme.text.inverse,
    '--border-color': theme.border.primary,
    '--bg': theme.surface.secondary,
  }

  return (
    <div className="control-group">
      <label className="control-label">Brand</label>
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${brand === 'brandA' ? 'active' : ''}`}
          onClick={() => setBrand('brandA')}
          style={buttonStyle}
        >
          Brand A
        </button>
        <button
          className={`toggle-button ${brand === 'brandB' ? 'active' : ''}`}
          onClick={() => setBrand('brandB')}
          style={buttonStyle}
        >
          Brand B
        </button>
      </div>
    </div>
  )
}

