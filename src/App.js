import React, { useState } from 'react';
import Home from './Home.js';
import History from './History.js';
import Portfolio from './Portfolio.js';
import Investmentstrategy from './Investmentstrategy.js'
import './App.css';

function App() {
  const [activeOption, setActiveOption] = useState('home');

  const showContent = (option) => {
    setActiveOption(option);
  };

  return (
    <div >
      <header>
        <button onClick={() => showContent('home')}>Home</button>
        <button onClick={() => showContent('history')}>History</button>
        <button onClick={() => showContent('investmentstrategy')}>Investment Strategy</button>
        <button onClick={() => showContent('portfolio')}>Portfolio</button>
      </header>

      {activeOption === 'home' && <Home />}
      {activeOption === 'history' && <History />}
      {activeOption === 'investmentstrategy' && <Investmentstrategy />}
      {activeOption === 'portfolio' && <Portfolio />}
    </div>
  );
}

export default App;
