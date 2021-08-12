import React, { useState } from 'react';

import DisplayScreen from '../Display-screen/DisplayScreen';
import Buttons from '../Buttons/Buttons';
import { evaluate, sqrt } from 'mathjs';

function CalculatorV({ setLocalHistory }) {
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
    let history = JSON.parse(localStorage.getItem('history'));
    if (history === null) {
      history = [];
    }
    const newCalc = {
      input,
      output: evaluate(input)
    };
    const newHistory = [...history, newCalc];

    if (newCalc.input === '') return null;

    localStorage.setItem('history', JSON.stringify(newHistory));

    setLocalHistory(newHistory);
  };

  const handleSqrt = (data) => {
    setInput(input);
    if (data.target.id === 'squareRoot' || input.includes(Number)) {
      setOutput(sqrt(input));
      setInput(output);
    }
  };
  const handlePercentage = (data) => {
    setInput(input);
    if (data.target.id === 'percentage' || input.includes(Number)) {
      setOutput(evaluate(input / 100));
      setInput(output);
    }
  };

  return (
    <div>
      <div className="center center frame w-70 w-50-m w-25-l ma5 shadow-3">
        <h3>Zcalculator</h3>

        <DisplayScreen input={input} output={output} />
        <Buttons
          handleClick={handleClick}
          clearData={clearData}
          deleteBtn={deleteBtn}
          evaluateInput={evaluateInput}
          handleSqrt={handleSqrt}
          handlePercentage={handlePercentage}
        />
      </div>
    </div>
  );
}

export default CalculatorV;
