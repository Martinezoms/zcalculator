import React from 'react';

import './displayScreen.css';

function DisplayScreen({ input, output }) {
  const handleChange = () => {};

  return (
    <div>
      <form className="flex flex-column display pa3">
        <textarea className="output-screen" rows="5" readOnly value={output}></textarea>
        <textarea className="input-screen" rows="2" value={input} onChange={handleChange}></textarea>
      </form>
    </div>
  );
}

export default DisplayScreen;
