import React from "react";
import "../Style.css"; // Ensure the CSS file is linked

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      {/* Neon Lights */}
      <div className="neon-light left"></div>
      <div className="neon-light right"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="h1">Hello, I'm Neha</h1>
        <br/>
        <br/>
        <br/>
        <p className="p">
          I am a Full Stack Developer who can build modern, responsive &
          scalable <br />
          web applications using various tech stacks like ReactJS, NodeJS
          (MERN), SpringBoot, .NET Core Web API.
        </p>
        <br/>
        <br/>
        <button className="hero-button"><a href="#projects" className="view-work-button ">View My Work</a></button>
      </div>
    </section>
  );
};

export default Hero;
