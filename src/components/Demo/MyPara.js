import React from 'react';

const MyPara = props => {
  console.log('MyPara RUNING');
  return <p>{props.children}</p>;
};

export default MyPara;
