import React from 'react';

const MyPara = props => {
  console.log('MyPAra RUNING');
  return <p>{props.children}</p>;
};

export default MyPara;
