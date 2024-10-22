import React from 'react';
import './Home.css'
import homeimage from '../images/Wall_Street.jpg';
import logo from '../images/perrylogo.png';
function Home() {
  return (
    <div classname='home-container'>
      <div>
        <img src={homeimage} alt="Home" className="home-image"/>
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="box-container">
        <p>Pecan FO is a single-family office based in Southern California tasked with building and maintaining a highly diversified portfolio targeting public market alpha and private market absolute returns while balancing both growth and income considerations. Pecan prides itself on being a patient, long-term investor and has a demonstrated willingness to explore opportunities and provide capital to niche, non-correlated, misunderstood, and recently developed asset classes. Special emphasis is placed on opportunities where Pecan’s existing skill sets and capital commitment can drive incremental returns.
        </p>
      </div>
    </div>
  );
}

export default Home;