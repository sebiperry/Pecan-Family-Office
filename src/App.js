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
    }, 6000); // Increased from 4000 to 6000ms (1.5x)

    return () => clearTimeout(timer);
  }, []);

  const showContent = (option) => {
    setActiveOption(option);
    window.scrollTo(0, 0);
  };

  return (
    <div>
<<<<<<< HEAD
      {!isAnimationDone && (
        <div className="overlay">
          <div className="overlay-content">
            <img src={logo} alt="Logo" className="overlay-logo" />
            <div className="overlay-tagline">Patient, Creative Capital</div>
          </div>
        </div>
      )}
=======
      {/* Overlay with fade-out effect */}
      <div className={`overlay ${isAnimationDone ? "fade-out" : ""}`} />

>>>>>>> bb3e74bfe843e882df45a1bcd047091f7ca30085
      <header>
        <a>Patient, Creative Capital</a>
        <button onClick={() => showContent("home")}>Home</button>
        <button onClick={() => showContent("history")}>History</button>
        <button onClick={() => showContent("aboutus")}>About Us</button>
      </header>

      {activeOption === "home" && <Home />}
      {activeOption === "history" && <History />}
      {activeOption === "aboutus" && <AboutUs />}
<<<<<<< HEAD
      <footer>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <a href="mailto:perryrr@pecanfamilyoffice.com">perryrr@pecanfamilyoffice.com</a>
      </footer>
=======

>>>>>>> bb3e74bfe843e882df45a1bcd047091f7ca30085
    </div>
  );
}

export default App;