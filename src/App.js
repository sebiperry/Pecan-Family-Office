import React, { useState, useEffect } from "react";
import Home from "./sections/Home.js";
import History from "./sections/History.js";
import AboutUs from "./sections/AboutUs.js";
import "./App.css";
import "./Overlay.css";
import logo from "./images/perrylogo.png";

function App() {
  const [activeOption, setActiveOption] = useState("home");
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationDone(true);
    }, 5000); // Increased to 8 seconds total duration

    return () => clearTimeout(timer);
  }, []);

  const showContent = (option) => {
    setActiveOption(option);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {!isAnimationDone && (
        <div className="overlay">
          <div className="overlay-content">
            <img src={logo} alt="Logo" className="overlay-logo" />
            <div className="overlay-tagline">Patient, Creative Capital</div>
          </div>
        </div>
      )}
      <header>
        <a>Patient, Creative Capital</a>
        <button onClick={() => showContent("home")}>Home</button>
        <button onClick={() => showContent("history")}>History</button>
        <button onClick={() => showContent("aboutus")}>About Us</button>
      </header>

      {activeOption === "home" && <Home />}
      {activeOption === "history" && <History />}
      {activeOption === "aboutus" && <AboutUs />}
      <footer>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <a href="mailto:perryrr@pecanfamilyoffice.com">perryrr@pecanfamilyoffice.com</a>
      </footer>
    </div>
  );
}

export default App;