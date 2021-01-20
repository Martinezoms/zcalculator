import React from 'react';

import './displayScreen.css';

function DisplayScreen({ input }) {
  const handleChange = () => {};

  const handleKeyPress = (e) => {
    return input + e.key;
  };
  return (
    <div>
      <form className="flex flex-column display pa2">
        <textarea className="output-screen" rows="5" readOnly></textarea>
        <textarea
          className="input-screen"
          rows="2"
          value={input}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        ></textarea>
      </form>
    </div>
  );
}

export default DisplayScreen;
