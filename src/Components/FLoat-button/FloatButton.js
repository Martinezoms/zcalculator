import React, { useState } from 'react';
import './floatButton.css';
import LightMode from '../../Icons/lightMode.svg';
import rotate from '../../Icons/rotate.svg';
import calcHistory from '../../Icons/calcHistory.png';
import darkMode from '../../Icons/darkMode.svg';

function FloatButton() {
  const [isButton, setButton] = useState(false);
  // const [theme, setTheme] = useState('dark');
  const clickIcon = () => {
    setButton(!isButton);
  };
  return (
    <div className="wrapper">
      <input id="triggerButton" className="triggerButton" type="checkbox" />
      <label htmlFor="triggerButton" className="grow shadow-5 pulse"></label>

      <div className="one fa fa-facebook">
        <div classname="iconHolder grow pulse">
          <img src={rotate} alt="rotate" />
        </div>
      </div>
      <div className="two fa fa-twitter">
        <div>
          <img
            src={isButton ? LightMode : darkMode}
            alt="LightMode"
            onClick={() => {
              clickIcon();
            }}
          />
        </div>
      </div>
      <div className="three fa fa-instagram">
        <div>
          <img src={calcHistory} alt="calcHistory" />
        </div>
      </div>
    </div>
  );
}

export default FloatButton;
