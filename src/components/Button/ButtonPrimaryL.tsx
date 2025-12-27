import React from 'react';
import { getButtonPrimaryShadow, getColorToken } from '../../utils/tokens';
import './ButtonPrimaryL.css';

export type ButtonState = 'Default' | 'Hover' | 'Pressed';

export interface ButtonPrimaryLProps {
  label?: string;
  state?: ButtonState;
  onClick?: () => void;
}

export default function ButtonPrimaryL({ 
  label = 'Button', 
  state = 'Default',
  onClick 
}: ButtonPrimaryLProps) {
  const getButtonStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 500,
      letterSpacing: '0px',
      color: getColorToken('{root.color.primary.label}'),
      paddingTop: '12px',
      paddingBottom: '12px',
      paddingLeft: '24px',
      paddingRight: '24px',
      borderRadius: '8px',
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
          backgroundColor: getColorToken('{root.color.primary.accentHover}'),
          border: '1px solid transparent',
          boxShadow: 'none',
        };
      case 'Pressed':
        return {
          ...baseStyles,
          backgroundColor: getColorToken('{root.color.primary.accentPressed}'),
          border: '1px solid transparent',
          boxShadow: 'none',
        };
      case 'Default':
      default:
        return {
          ...baseStyles,
          backgroundColor: getColorToken('{root.color.primary.accent}'),
          border: `1px solid ${getColorToken('{root.color.border.strokeGradient}')}`,
          boxShadow: getButtonPrimaryShadow(),
        };
    }
  };

  // Apply inline styles only for static state examples (when state is explicitly set to Hover or Pressed)
  // For Default state with onClick, let CSS handle hover/active interactions
  const shouldUseInlineStyles = state === 'Hover' || state === 'Pressed';
  
  return (
    <button
      className={`button-primary-l button-primary-l--${state.toLowerCase()}`}
      style={shouldUseInlineStyles ? getButtonStyles() : undefined}
      onClick={onClick}
      data-state={state}
    >
      {label}
    </button>
  );
}

