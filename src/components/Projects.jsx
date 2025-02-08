import React from "react";
import "../Style.css"; // Ensure your CSS file is linked

const projectsData = [
  {
    title: "EcoMart",
    description:
      "An eco-friendly online platform for sustainable products. Built with HTML5, CSS, JavaScript, and Bootstrap. Features include product search, filtering, details, and cart management.",
    image: "/images/ecomart.png", // Replace with actual image path
    detailsLink: "#",
    visitLink: "#",
  },
  {
    title: "Elegant using Spring Boot",
    description:
      "A Full Stack E-Commerce platform for Jewellery products. Built with React (Frontend), MySQL (Database), and Spring Boot (Backend). Includes authentication, product management, and order processing.",
    image: "/images/elegant.png", // Replace with actual image path
    detailsLink: "#",
    visitLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2>Projects</h2>
      <br />
      <hr />
      <br />
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCBjmNwdEmsh1Na7zngau5dMV6bUIupllLQ&s"
              }
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="buttons">
              <a href={project.detailsLink} className="btn btn-light">
                Details
              </a>
              <a href={project.visitLink} className="btn btn-primary">
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
