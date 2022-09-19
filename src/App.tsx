import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form className="flex flex-col  text-black">
          <input className="mb-4 p-3 rounded-lg" placeholder="ID" />
          <input className="mb-4 p-3 rounded-lg" placeholder="Password" />
          <button className="bg-blue-500 text-bold text-white rounded-lg p-3">
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
