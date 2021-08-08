import React from 'react';

const Scroll = (props) => {
  return <div style={{ overflowY: 'auto', height: '230px', alignContent: 'center' }}>{props.children}</div>;
};

export default Scroll;
