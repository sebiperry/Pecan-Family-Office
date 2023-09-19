import React from 'react';
import Slideshow from './Slideshow.js';
import './History.css';

function History() {
  return (
    <div classname = 'history-container'>
        <div classname = 'slideshow-container'>
        <img src={logo} alt="Logo" className="logo-image" />
            <Slideshow />
            
        </div>
    </div>
  );
}

export default History;
