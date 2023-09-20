import React from 'react';
import Slideshow from './Slideshow.js';
import logo from './perrylogo.png';
import './History.css';


function History() {
  return (
    <div classname = 'history-container'>
        <div classname = 'slideshow-container'>
        <img src={logo} alt="Logo" className="logo-image" />
            <Slideshow />
            </div>
     <div className="box-container">
      <a>History & A Peak Into The Future
 
 Founded in 2015 by Robert “Rob” Perry, Pecan FO is the culmination of a strong two-generational commitment to work ethic and living within one’s means.  These fundamental building blocks have provided the opportunity and freedom for the past and present generation to 1) pursue higher levels of education, 2) save and actively invest those savings and 3) engage in entrepreneurial endeavors.
  
 Pecan’s roots stretch back to southwestern and central Pennsylvania where the foundational pieces for today’s platform were unwittingly laid.  Eventually, these roots branched out to New York City, where in the early 2000s, the ability to engage in entrepreneurial endeavors led to Rob’s meaningful participation in the development of two successive institutional asset management boutiques.  Today, Pecan is based in San Diego but the principles learned, nurtured and then codified since those New York City days form the basis for Pecan’s core approach to investing. For example, Pecan is a co-founder of Kilo Capital, a customer centric bullion bank and precious metal merchant with an asset management arm.
  
 Pecan intends for future generations to be instilled with the same fundamental building blocks that were the seedlings for the current platform and aspires to ensure a consistent yet dynamic approach to investing over long periods of time.  We welcome you to join us on this journey.
 </a>
    
        </div>
    </div>
  );
}

export default History;
