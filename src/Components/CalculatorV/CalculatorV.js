import React, { useState } from 'react';

import DisplayScreen from '../Display-screen/DisplayScreen';
import Buttons from '../Buttons/Buttons';

function CalculatorV() {
  const [input, setInput] = useState('');

  const handleClick = (anElement) => {
    setInput(input + anElement.target.innerText);
  };

  return (
    <div className="center center frame w-70 w-50-m w-25-l ma5 shadow-3">
      <h3>Zcalculator</h3>
      <DisplayScreen input={input} />
      <Buttons handleClick={handleClick} />
    </div>
  );
}

export default CalculatorV;
