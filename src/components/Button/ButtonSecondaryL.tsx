import React from 'react';
import { getButtonSecondaryShadow, getColorToken, getSpacingToken, getTypographyToken, getBorderRadiusToken } from '../../utils/tokens';
import './ButtonSecondaryL.css';

export type ButtonState = 'Default' | 'Hover' | 'Pressed';

export interface ButtonSecondaryLProps {
  label?: string;
  state?: ButtonState;
  onClick?: () => void;
}

export default function ButtonSecondaryL({ 
  label = 'Button', 
  state = 'Default',
  onClick 
}: ButtonSecondaryLProps) {
  const getButtonStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      fontFamily: getTypographyToken('{alias.font.fontFamily}'),
      fontSize: getTypographyToken('{alias.typography.label.fontSize}'),
      lineHeight: getTypographyToken('{alias.typography.label.lineHeight}'),
      fontWeight: parseInt(getTypographyToken('{alias.typography.label.fontWeight}')),
      letterSpacing: getTypographyToken('{alias.typography.label.letterSpacing}'),
      color: getColorToken('{alias.button.secondary.labelDefault}'),
      paddingTop: getSpacingToken('{alias.button.l.topBottom}'),
      paddingBottom: getSpacingToken('{alias.button.l.topBottom}'),
      paddingLeft: getSpacingToken('{alias.button.l.leftRight}'),
      paddingRight: getSpacingToken('{alias.button.l.leftRight}'),
      borderRadius: getBorderRadiusToken('{alias.button.cornerDefault}'),
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      transition: 'all 0.2s ease',
      boxSizing: 'border-box',
    };

    switch (state) {
      case 'Hover':
        return {
          ...baseStyles,
          backgroundColor: getColorToken('{alias.button.secondary.bgHover}'),
          border: '1px solid transparent',
          boxShadow: 'none',
        };
      case 'Pressed':
        return {
          ...baseStyles,
          backgroundColor: getColorToken('{alias.button.secondary.bgPressed}'),
          border: '1px solid transparent',
          boxShadow: 'none',
        };
      case 'Default':
      default:
        return {
          ...baseStyles,
          backgroundColor: getColorToken('{alias.button.secondary.bgDefault}'),
          border: `1px solid ${getColorToken('{alias.button.secondary.strokeGradientOutside}')}`,
          boxShadow: getButtonSecondaryShadow(),
        };
    }
  };

  // Apply inline styles only for static state examples (when state is explicitly set to Hover or Pressed)
  // For Default state with onClick, let CSS handle hover/active interactions
  const shouldUseInlineStyles = state === 'Hover' || state === 'Pressed';
  
  return (
    <button
      className={`button-secondary-l button-secondary-l--${state.toLowerCase()}`}
      style={shouldUseInlineStyles ? getButtonStyles() : undefined}
      onClick={onClick}
      data-state={state}
    >
      {label}
    </button>
  );
}

