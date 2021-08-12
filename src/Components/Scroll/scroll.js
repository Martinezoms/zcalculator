import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'auto',
        height: '210px',
        textAlign: 'left'
      }}
      className="b--light-silver br3"
    >
      {props.children}
    </div>
  );
};

export default Scroll;
