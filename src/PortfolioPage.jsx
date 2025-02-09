import React, { useState, useEffect } from "react";
import "./Style.css";  
import About from "./components/about";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import profileImage from "./profile.jpg";

const PortfolioPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  return (
    <div>
      {/* Sidebar */}
      <aside className="sidebar">
      <img src={profileImage} alt="Profile" />
        <h2 className="Neha">Neha Patil</h2>
        <p id="Neha">Full Stack Developer</p>
        <nav>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Day/Night Mode Toggle Button */}
        {/* <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Day 🌞" : "Night 🌙"}
        </button> */}
      </aside>

      {/* Main Section (Scrollable) */}
      <main className="main-content">
        {/* Light Effect */}
        <div className="light-container">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="light"></div>
          ))}
        </div>

        {/* Sections */}
        <Hero />
        <br />
        <About />
        <br />
        <Skills />
        <br />
        <Projects />
        <br />
        <Experience />
        <br />
        <Contact />
      </main>
    </div>
  );
};

export default PortfolioPage;
