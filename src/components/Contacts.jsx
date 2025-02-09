import React from "react";
import "../Style.css"; // Ensure your CSS file is linked

const Contact = () => {
  return (
    <div>
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
          href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-btn"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-btn"
        >
          🐙 GitHub
        </a>
      </div>
       
    </section>
    <br/>
    <p className="copyright">© 2025 Neha Patil. All rights reserved.</p>
    <br/>
    <br/>
    </div>
  );
};

export default Contact;
