import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormTest from './FormTest';
import ControllerTest from './ControllerTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="max-w-md mx-auto">
        {/* <FormTest /> */}
        <ControllerTest />
      </div>
    </div>
  );
}

export default App;
