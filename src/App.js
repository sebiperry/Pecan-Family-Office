import React, { useState, useEffect } from "react";
import Home from "./sections/Home.js";
import History from "./sections/History.js";
import AboutUs from "./sections/AboutUs.js";
import "./App.css";
import "./Overlay.css"; // Add the overlay animation styles here
import logo from "./images/perrylogo.png";

function App() {
  const [activeOption, setActiveOption] = useState("home");
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  useEffect(() => {
    // Set a timer to end the animation after 2 seconds
    const timer = setTimeout(() => {
      setIsAnimationDone(true);
    }, 2000); // 2 seconds duration

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const showContent = (option) => {
    setActiveOption(option);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* Overlay with fade-out effect */}
      <div className={`overlay ${isAnimationDone ? "fade-out" : ""}`} />

      <header>
        <a>Patient, Creative Capital</a>
        <button onClick={() => showContent("home")}>Home</button>
        <button onClick={() => showContent("history")}>History</button>
        <button onClick={() => showContent("aboutus")}>About Us</button>
      </header>

      {activeOption === "home" && <Home />}
      {activeOption === "history" && <History />}
      {activeOption === "aboutus" && <AboutUs />}

    </div>
  );
}

export default App;
