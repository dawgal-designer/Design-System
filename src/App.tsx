import React, { useState } from 'react';
import { ButtonPrimaryL, ButtonSecondaryL } from './components/Button';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="app">
      <div className="button-showcase">
        <h1 className="showcase-title">Button Components - Interactive Demo</h1>
        
        <div className="demo-section">
          <h2 className="section-title">Button Primary L - Interactive Buttons (Hover & Click)</h2>
          <div className="button-group">
            <ButtonPrimaryL 
              label="Hover & Click Me" 
              onClick={() => setClickCount(prev => prev + 1)}
            />
            <ButtonPrimaryL 
              label="Interactive Button" 
              onClick={() => alert('Button clicked!')}
            />
            <ButtonPrimaryL 
              label="Click Counter" 
              onClick={() => setClickCount(prev => prev + 1)}
            />
          </div>
          {clickCount > 0 && (
            <p className="click-feedback">Buttons clicked: {clickCount} times</p>
          )}
        </div>

        <div className="demo-section">
          <h2 className="section-title">Button Primary L - Static State Examples</h2>
          <div className="button-group">
            <ButtonPrimaryL label="Default State" state="Default" />
            <ButtonPrimaryL label="Hover State" state="Hover" />
            <ButtonPrimaryL label="Pressed State" state="Pressed" />
          </div>
        </div>

        <div className="demo-section">
          <h2 className="section-title">Button Secondary L - Interactive Buttons (Hover & Click)</h2>
          <div className="button-group">
            <ButtonSecondaryL 
              label="Hover & Click Me" 
              onClick={() => setClickCount(prev => prev + 1)}
            />
            <ButtonSecondaryL 
              label="Interactive Button" 
              onClick={() => alert('Button clicked!')}
            />
            <ButtonSecondaryL 
              label="Click Counter" 
              onClick={() => setClickCount(prev => prev + 1)}
            />
          </div>
        </div>

        <div className="demo-section">
          <h2 className="section-title">Button Secondary L - Static State Examples</h2>
          <div className="button-group">
            <ButtonSecondaryL label="Default State" state="Default" />
            <ButtonSecondaryL label="Hover State" state="Hover" />
            <ButtonSecondaryL label="Pressed State" state="Pressed" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

