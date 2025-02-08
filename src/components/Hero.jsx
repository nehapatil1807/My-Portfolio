import React from "react";
import "../Style.css"; // Ensure the CSS file is linked

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Neon Lights */}
      <div className="neon-light left"></div>
      <div className="neon-light right"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1>Hello, I'm Neha</h1>
        <p className="p">
          I am a Full Stack Developer who can build modern, responsive &
          scalable <br />
          web applications using various tech stacks like ReactJS, NodeJS
          (MERN), SpringBoot, .NET Core Web API.
        </p>
        <button className="hero-button">View My Work</button>
      </div>
    </section>
  );
};

export default Hero;
