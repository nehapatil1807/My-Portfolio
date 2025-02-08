import React from "react";
import "../Style.css"; // Ensure your CSS file is linked

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h2>Contact</h2>
      <br />
      <hr />
      <br />
      <p>
        If you'd like to connect, feel free to reach out via email or follow me
        on social media.
      </p>
      <div className="contact-buttons">
        <a href="mailto:your-email@example.com" className="btn contact-btn">
          📧 Email
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-btn"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-btn"
        >
          🐙 GitHub
        </a>
      </div>
      <p className="copyright">© 2025 Your Name. All rights reserved.</p>
    </section>
  );
};

export default Contact;
