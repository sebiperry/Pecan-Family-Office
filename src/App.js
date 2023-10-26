import React, { useState } from 'react';
import Home from './sections/Home.js';
import History from './sections/History.js';
import AboutUs from './sections/AboutUs.js';
import './App.css';
import logo from './images/perrylogo.png';

function App() {
  const [activeOption, setActiveOption] = useState('home');

  const showContent = (option) => {
    setActiveOption(option);
    window.scrollTo(0, 0); 
  };

  return (
    <div >
      <header>
        <a>Patient, Creative Capital</a>
        <button onClick={() => showContent('home')}>Home</button>
        <button onClick={() => showContent('history')}>History</button>
        <button onClick={() => showContent('aboutus')}>About Us</button>
      </header>

      {activeOption === 'home' && <Home />}
      {activeOption === 'history' && <History />}
      {activeOption === 'aboutus' && <AboutUs />}
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
