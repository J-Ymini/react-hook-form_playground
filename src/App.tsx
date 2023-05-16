import React from 'react';
import './App.css';
import ControllerTest from './components/ControllerTest';
import ProviderTest from './components/ProviderTest';
import FormTest from './components/FormTest';

function App() {
  return (
    <div className="App pt-[200px]">
      <div className="max-w-md mx-auto">
        {/* <FormTest /> */}
        {/* <ProviderTest /> */}
        <ControllerTest />
      </div>
    </div>
  );
}

export default App;
