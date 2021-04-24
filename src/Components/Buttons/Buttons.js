import React from 'react';

import './buttons.css';

function buttons({ handleClick, clearData, deleteBtn, evaluateInput, handleSqrt, handlePercentage }) {
  // const sqroot = '&radic';
  return (
    <div className="flex flex-wrap buttons">
      <button className=" w-20 pa2 br5 ma1 " onClick={clearData}>
        C
      </button>
      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        (
      </button>
      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        )
      </button>
      <button className=" w-20 pa2 br5 ma1 " onClick={deleteBtn}>
        &#8617;
      </button>

      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        7
      </button>
      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        8
      </button>
      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        9
      </button>
      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        &#247;
      </button>

      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        4
      </button>
      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        5
      </button>
      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        6
      </button>
      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        *
      </button>

      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        1
      </button>
      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        2
      </button>
      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        3
      </button>
      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        -
      </button>

      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        0
      </button>
      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        .
      </button>
      <button className=" w-20 pa2 br5 ma1 " id="percentage" onClick={handlePercentage}>
        %
      </button>
      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        +
      </button>

      <button className=" w-20 pa2 br5 ma1 " id="squareRoot" onClick={handleSqrt}>
        &radic;
      </button>
      <button className=" w-20 pa2 br5 ma1 " onClick={handleClick}>
        ^
      </button>
      <button
        className="  pa2 br5 ma1 equal"
        onClick={() => {
          evaluateInput();
          // squareRoot();
        }}
      >
        =
      </button>
    </div>
  );
}

export default buttons;
