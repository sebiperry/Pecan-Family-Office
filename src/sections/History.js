import React from 'react';
import Slideshow from './Slideshow.js';
import logo from '../images/perrylogo.png';
import map from '../images/historyimg.png'
import './History.css';



function History() {
  return (
    <div className = 'history-container'>
        <div classname = 'slideshow-container'>
        <img src={logo} alt="Logo" className="logo-image" />
            <Slideshow />
            </div>
     <div className="box-containerH">
      <h2>History & A Glimpse Of The Future</h2>
      <p>
        Founded in 2015 by Robert “Rob” Perry, Pecan FO is the culmination of a strong two-generational commitment to work ethic and living within one’s means.  These fundamental building blocks have provided the opportunity and freedom for the past and present generation to 1) pursue higher levels of education, 2) save and actively invest those savings and 3) engage in entrepreneurial endeavors.
      </p>
      <div className = 'second-p-box'>
        <div className='p-content'>
          <p>
            Pecan’s roots stretch back to southwestern and central Pennsylvania where the foundational pieces for today’s platform were unwittingly laid.  Eventually, these roots branched out to New York City, where in the early 2000s, the ability to engage in entrepreneurial endeavors led to Rob’s meaningful participation in the development of two successive institutional asset management boutiques.  Today, Pecan is based in San Diego but the principles learned, nurtured and then codified since those New York City days form the basis for Pecan’s core approach to investing. For example, Pecan is a co-founder of Kilo Capital, a customer centric bullion bank and precious metal merchant with an asset management arm.
          </p>
        </div>
        <div className = 'img-content'>
          <img src = {map} className = 'map-img'/>
        </div>
      </div>
      <p>
        Pecan intends for future generations to be instilled with the same fundamental building blocks that were the seedlings for the current platform and aspires to ensure a consistent yet dynamic approach to investing over long periods of time.  We welcome you to join us on this journey.
      </p>
    
        </div>
    </div>
  );
}

export default History;
