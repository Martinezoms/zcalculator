import React, { useState } from 'react';
import { Drawer } from 'antd';
import './floatButton.css';
import History from '../History/History';
import LightMode from '../../Icons/lightMode.svg';
import rotate from '../../Icons/rotate.svg';
import calcHistory from '../../Icons/calcHistory.png';
import darkMode from '../../Icons/darkMode.svg';

function FloatButton({ themeToggler }) {
  const [isButton, setButton] = useState(false);
  const [visible, setVisible] = useState(false);

  const clickIcon = () => {
    setButton(!isButton);
  };

  const showHistory = () => {
    visible === false ? setVisible(true) : setVisible(false);
  };

  // const onClose = () => {
  // setVisible(false);
  // };

  return (
    <div className="wrapper">
      <input id="triggerButton" className="triggerButton" type="checkbox" />
      <label htmlFor="triggerButton" className="grow shadow-5 pulse"></label>

      <div className="one fa fa-facebook">
        <div>
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
              themeToggler();
            }}
          />
        </div>
      </div>
      <div className="three fa fa-instagram">
        <div>
          <img src={calcHistory} alt="calcHistory" onClick={showHistory} />
        </div>
      </div>
      <Drawer title="History" placement="right" closable={false} visible={visible}></Drawer>
    </div>
  );
}

export default FloatButton;
