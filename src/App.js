// import Monitoring from "./components/MonitoringPage/MonitoringPage";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import heroBackground from "./assets/hero-desktop.png";

import { LoginPopup } from "./components/Landing/LoginPopup";
import { Monitoring } from "./components/MonitoringPage/MonitoringPage";

function App() {
  const [loginClicked, setLoginClicked] = useState(false);

  const togglePopup = () => {
    setLoginClicked(!loginClicked);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="landing-container">
              {loginClicked ? <LoginPopup toggle={togglePopup} /> : null}
              <header>
                <div className="nav-container">
                  <a href="/">
                    Site<span>Name</span>
                  </a>

                  <div className="topnav">
                    <button href="/about">Why SiteName</button>
                    <button onClick={togglePopup} href="/login">
                      Login
                    </button>
                  </div>
                </div>
              </header>

              <div className="body-wrapper">
                <div className="body-container">
                  <div className="hero-main">
                    <div className="hero-inner">
                      <h2>
                        <span>Save money</span> <br className="line-break" /> on
                        everyday
                        <br /> taxi rides
                      </h2>
                      <div className="text-container">
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Corrupti minima facere sit illo aut nihil
                          debitis, modi laborum
                        </p>
                      </div>
                      <div className="cta-container">
                        <a href="/main" className="cta-button">
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="hero-background">
                    <img src={heroBackground} alt="" />
                  </div>
                </div>
              </div>

              <div className="footer-container">
                <div className="logo"></div>
                <div className="author"></div>
                <div className="social-media"></div>
              </div>
            </div>
          }
        />
        <Route path="main" element={<Monitoring />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
