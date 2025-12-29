import { useTheme } from '../../context/ThemeContext'
import './Controls.css'

export const ModeToggle = () => {
  const { mode, setMode, theme } = useTheme()

  const buttonStyle = {
    '--primary-color': theme.primary.main,
    '--text-primary': theme.text.primary,
    '--text-inverse': theme.text.inverse,
    '--border-color': theme.border.primary,
    '--bg': theme.surface.secondary,
  }

  return (
    <div className="control-group">
      <label className="control-label">Mode</label>
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${mode === 'light' ? 'active' : ''}`}
          onClick={() => setMode('light')}
          style={buttonStyle}
        >
          Light
        </button>
        <button
          className={`toggle-button ${mode === 'dark' ? 'active' : ''}`}
          onClick={() => setMode('dark')}
          style={buttonStyle}
        >
          Dark
        </button>
      </div>
    </div>
  )
}

