import React, { useState } from 'react';

import DisplayScreen from '../Display-screen/DisplayScreen';
import Buttons from '../Buttons/Buttons';
import { evaluate } from 'mathjs';

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
    console.log(output);
  };

  return (
    <div className="center center frame w-70 w-50-m w-25-l ma5 shadow-3">
      <h3>Zcalculator</h3>
      <DisplayScreen input={input} output={output} />
      <Buttons handleClick={handleClick} clearData={clearData} deleteBtn={deleteBtn} evaluateInput={evaluateInput} />
    </div>
  );
}

export default CalculatorV;
