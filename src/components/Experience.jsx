import React from "react";
import "../Style.css"; // Ensure CSS is linked

const Experience = () => {
  return (
    <section id="experience" className="experience-container">
      <h2>Experience</h2>
      <br />
      <hr />
      <br />
      <div className="experience-card">
        <h3>CDAC</h3>
        <p>
          Completed PG-Diploma in Advanced Computing from CDAC-Mumbai. Worked on
          various web development projects focusing on user experience and
          performance optimization.
        </p>
        <p className="duration">
          Duration: <strong>August 2024 - January 2025</strong>
        </p>
      </div>
    </section>
  );
};

export default Experience;
