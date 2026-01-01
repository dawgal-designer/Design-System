/**
 * Design System Components
 * 
 * This file exports all components from the design system.
 * Components are brand-agnostic and use CSS variables from design tokens.
 * 
 * Note: CSS is extracted to a separate styles.css file during build.
 * Make sure to include <link rel="stylesheet" href="../SpecDesignSystem/dist/styles.css">
 * in your HTML file.
 */

// Import component CSS files (these will be extracted to styles.css during build)
import './Button/Button.css'
import './Button/ButtonPrimaryL.css'
import './Button/ButtonSecondaryL.css'
import './Card/Card.css'
import './Surface/Surface.css'
import './Typography/Typography.css'

export { ButtonPrimaryL } from './Button/ButtonPrimaryL'
export type { ButtonPrimaryLProps, ButtonState } from './Button/ButtonPrimaryL'

export { ButtonSecondaryL } from './Button/ButtonSecondaryL'
export type { ButtonSecondaryLProps } from './Button/ButtonSecondaryL'

export { Button } from './Button/Button'
export type { ButtonProps, ButtonVariant, ButtonSize } from './Button/Button'

export { Card } from './Card/Card'
export type { CardProps } from './Card/Card'

export { Typography } from './Typography/Typography'
export type { TypographyProps, TypographyVariant } from './Typography/Typography'

export { Surface } from './Surface/Surface'
export type { SurfaceProps } from './Surface/Surface'

