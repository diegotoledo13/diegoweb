import React from "react";
import "./Header.css";
import { imagen } from "../assets/images/images";
import AboutMe from "../Section/aboutMe";
import { Portfolio } from "../Section/portfolio";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Skills } from "../Section/skills";

function Header() {
  return (
    <div className="main-header-content">
      <div className="title-name-me">
        <h3>Diego Toledo</h3>
        <p>Frontend Developer</p>
        <img src={imagen.diegoPic} alt="diego" />
      </div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Header;
