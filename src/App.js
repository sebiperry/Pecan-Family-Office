import React, { useState } from 'react';
import Home from './Home.js';
import History from './History.js';
import Portfolio from './Portfolio.js';
import Investmentstrategy from './Investmentstrategy.js';
import './App.css';
import logo from './perrylogo.png';

function App() {
  const [activeOption, setActiveOption] = useState('home');

  const showContent = (option) => {
    setActiveOption(option);
  };

  return (
    <div >
      <header>
        <a>Patient, Creative Capital</a>
        <button onClick={() => showContent('home')}>Home</button>
        <button onClick={() => showContent('history')}>History</button>
        <button onClick={() => showContent('investmentstrategy')}>Investment Strategy</button>
        <button onClick={() => showContent('portfolio')}>Portfolio</button>
      </header>

      {activeOption === 'home' && <Home />}
      {activeOption === 'history' && <History />}
      {activeOption === 'investmentstrategy' && <Investmentstrategy />}
      {activeOption === 'portfolio' && <Portfolio />}
      <footer>
        <div>
          <img src={logo}/>
        </div>
        <a> perryrr@pecanfamilyoffice.com</a>
      </footer>
    </div>
  );
}

export default App;
