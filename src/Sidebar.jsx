import React, { useState } from "react";
import "./Style.css";

const Sidebar = ({ toggleTheme, darkMode }) => {
  return (
    <div className="sidebar">
      <br></br>
      <h2>Neha Patil</h2>
      <p>Full Stack Developer</p>

      {/* Navigation Links */}
      <nav>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Day/Night Theme Toggle Button */}
      {/* <button className="theme-toggle-sidebar" onClick={toggleTheme}>
        {darkMode ? "🌞 Day Mode" : "🌙 Night Mode"}
      </button> */}
    </div>
  );
};

export default Sidebar;
