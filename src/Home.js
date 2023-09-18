import React from 'react';
import './Home.css'
import homeimage from './perryhomeimage.png';
import logo from './perrylogo.png';
function Home() {
  return (
    <div classname='home-container'>
      <div>
        <img src={homeimage} alt="Home" />
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="box-container">
        <a>Founded in 2015, Pecan Family Office is a capital provider strategically looking to generate alpha across the risk/reward spectrum and leverage existing skill sets into board-level or advisory/consulting roles as appropriate. </a>
      </div>
    </div>
  );
}

export default Home;