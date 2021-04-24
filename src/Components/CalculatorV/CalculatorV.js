import React, { useState } from 'react';

import DisplayScreen from '../Display-screen/DisplayScreen';
import Buttons from '../Buttons/Buttons';
import { evaluate, sqrt } from 'mathjs';

function CalculatorV() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleClick = (anElement) => {
    setInput(input + anElement.target.innerText);
  };

  const clearData = () => {
    setInput('');
    setOutput('');
  };

  const deleteBtn = () => {
    setInput(input.slice(0, -1));
  };

  const evaluateInput = () => {
    setInput(input);
    setOutput(evaluate(input));
    setInput(output);
  };

  const handleSqrt = (data) => {
    setInput(input);
    if (data.target.id === 'squareRoot' || input.includes(Number)) {
      setOutput(sqrt(input));
      setInput(output);
    }
  };

  return (
    <div className="center center frame w-70 w-50-m w-25-l ma5 shadow-3">
      <h3>Zcalculator</h3>
      <DisplayScreen input={input} output={output} />
      <Buttons
        handleClick={handleClick}
        clearData={clearData}
        deleteBtn={deleteBtn}
        evaluateInput={evaluateInput}
        handleSqrt={handleSqrt}
      />
    </div>
  );
}

export default CalculatorV;
