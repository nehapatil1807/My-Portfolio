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
        <a href="mailto:nehaspatil2002@gmail.com" className="btn contact-btn">
          <img src="https://www.pngkey.com/png/detail/14-143562_gmail-logo-png-gmail-logo-black-and-white.png" alt="" style={{height:"15px",width:"15px"}} /> Email
        </a>
        <a
          href="www.linkedin.com/in/neha-patil-584051323"
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-btn"
        >
        <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png" alt="" style={{height:"15px",width:"15px"}} /> LinkedIn
        </a>
        <a
          href="https://github.com/nehapatil1807"
          target="_blank"
          rel="noopener noreferrer"
          className="btn contact-btn"
        >
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-3073768.png?f=webp&w=256" alt="" style={{height:"15px",width:"15px"}}/> GitHub
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
