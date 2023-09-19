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
     <div className="box-container">
        <a>Personal Biography: 
            Skilled public and private markets professional with 17+ years experience managing multi-billion dollar portfolios of leveraged loans and high yield bonds across both principal preservation and absolute return strategies and 7+ years additional experience running all facets of a single family office. Competencies have been developed in entrepreneurial settings including: 1) growing two different boutique asset management firms from zero to over $2BN+ in AUM, 2) co-founding a third specialty finance/asset management firm (and currently maintaining a board seat) and 3) founding a single family office. Student of existing and emerging private asset classes as well as the public markets. Eager to apply skill sets to new opportunities.
 </a>
    
        </div>
    </div>
  );
}

export default History;
