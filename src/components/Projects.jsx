import React, { useState } from "react";
import "../Style.css"; // Ensure your CSS file is linked
import pImage from "../l.png";
const projectsData = [
  {
    title: "📋 Online Exam System",
    description:
      "An online exam system for conducting exams digitally. Built with tech stack like HTML5, CSS, Javascript, Bootstrap, etc. The platform provides a seamless experience for students to register, attempt exams, and view results, ensuring efficiency, scalability, and user satisfaction.",
    image: "https://static.vecteezy.com/system/resources/previews/011/516/428/non_2x/international-education-concept-design-education-globe-icon-logo-template-free-vector.jpg",
    details: "This project allows users to take exams online with a secured authentication system. Questions are fetched dynamically, and results are generated instantly.",
    visitLink: "https://github.com/nehapatil1807/Webistan",
  },
  {
    title: "💎 Elegant using Springboot ",
    description:
      "An Full Stack E-Commerce Platform for Jewellary Products Built using React for Front End, MySQL for Database & SpringBoot for Backend. The application provides authentication, product management, and order processing features.",
    image: "https://t3.ftcdn.net/jpg/02/36/72/54/360_F_236725407_6CpBcS06L4QbZSHimVsLU64hpsafZnSW.jpg",
    details: "This project manages an online jewelry store, including product catalog, authentication, and order management using Spring Boot and MySQL.",
    visitLink: "https://github.com/nehapatil1807/Elegant-E-Commerce-Platform-for-Jewelry-Products-/tree/main/SpringBoot-Project",
  },
  {
    title: "💎 Elegant using .Net Core Web API",
    description:
      "Elegant Jewellery is a full-stack e-commerce platform built with React for the front end, MySQL for the database, and .NET Core Web API for the backend. It offers a seamless and personalized shopping experience for luxury jewelry products, leveraging modern technologies to ensure scalability, security, and user satisfaction.",
    image: pImage,
    details: "Elegant Jewellery is a full-stack e-commerce platform built with React for the front end, MySQL for the database, and .NET Core Web API for the backend. It offers a seamless and personalized shopping experience for luxury jewelry products, leveraging modern technologies to ensure scalability, security, and user satisfaction.",
    visitLink: "https://github.com/nehapatil1807/Elegant-E-Commerce-Platform-for-Jewelry-Products-/tree/main/DotNet-Project",
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-container">
      <h2>Projects</h2>
      <br />
      <hr />
      <br />
      <br />
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className={`project-card ${index === 2 ? "full-width" : ""}`}>
            <img src={project.image} alt={project.title} className="project-image" />
            
            <h3>{project.title}</h3>
            <p className="pp">{project.description}</p>
            <div className="buttons">
              <button className="btn btn-light" onClick={() => setSelectedProject(project)}>
                Details
              </button>
              <a href={project.visitLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setSelectedProject(null)}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <br/><hr/>
            <br/>
            <p>{selectedProject.details}</p>
            <div className="modal-buttons">
               
              <button className="btn btn-light1" onClick={() => setSelectedProject(null)}>
                Close
              </button>
              <a href={selectedProject.visitLink} className="btn btn-primary1" target="_blank" rel="noopener noreferrer">
                Visit
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
