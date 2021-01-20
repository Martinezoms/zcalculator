import React, { useState, useEffect } from 'react';

import DisplayScreen from '../Display-screen/DisplayScreen';
import Buttons from '../Buttons/Buttons';

function CalculatorV() {
  const [input, setInput] = useState('');

  // useEffect(() => {}, [input]);

  const handleClick = (anElement) => {
    setInput(input + anElement.target.innerText);
  };

  const clearData = () => {
    setInput('');
  };

  return (
    <div className="center center frame w-70 w-50-m w-25-l ma5 shadow-3">
      <h3>Zcalculator</h3>
      <DisplayScreen input={input} />
      <Buttons handleClick={handleClick} clearData={clearData} />
    </div>
  );
}

export default CalculatorV;
