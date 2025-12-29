import { useTheme } from '../../context/ThemeContext'
import './Controls.css'

export const DensityToggle = () => {
  const { density, setDensity, theme } = useTheme()

  const buttonStyle = {
    '--primary-color': theme.primary.main,
    '--text-primary': theme.text.primary,
    '--text-inverse': theme.text.inverse,
    '--border-color': theme.border.primary,
    '--bg': theme.surface.secondary,
  }

  return (
    <div className="control-group">
      <label className="control-label">Density</label>
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${density === 'comfortable' ? 'active' : ''}`}
          onClick={() => setDensity('comfortable')}
          style={buttonStyle}
        >
          Comfortable
        </button>
        <button
          className={`toggle-button ${density === 'compact' ? 'active' : ''}`}
          onClick={() => setDensity('compact')}
          style={buttonStyle}
        >
          Compact
        </button>
      </div>
    </div>
  )
}


