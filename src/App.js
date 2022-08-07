import React, { useState } from 'react';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showPara, setShowPara] = useState(false);

  console.log('APP RUNING!');

  const toggleParaHandler = () => {
    setShowPara(prevShowPara => !prevShowPara);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />

      <Button onClick={toggleParaHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
