import { brandA } from './base.js'

export const brandADark = {
  ...brandA,
  mode: 'dark',
  background: {
    primary: '#0f172a',
    secondary: '#1e293b',
    tertiary: '#334155',
  },
  surface: {
    primary: '#1e293b',
    secondary: '#334155',
    elevated: '#475569',
  },
  text: {
    primary: '#f8fafc',
    secondary: '#cbd5e1',
    tertiary: '#94a3b8',
    inverse: '#0f172a',
  },
  border: {
    primary: '#334155',
    secondary: '#475569',
  },
}

