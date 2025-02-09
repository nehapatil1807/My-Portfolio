import React from "react";
import "../Style.css"; // Ensure CSS is linked

const skills = [
  { name: "Java", percentage: 90 },
  { name: "Data Structures & Algorithms", percentage: 80 },
  { name: "React.js", percentage: 80 },
  { name: "JavaScript", percentage: 80 },
  { name: "REST APIs", percentage: 85 },
  { name: "C++", percentage: 80 },
  { name: "MySQL", percentage: 90 },
  { name: "Node.js", percentage: 75 },
  { name: "Hibernate", percentage: 85 },
  { name: "C#", percentage: 80 },
  { name: "Linux", percentage: 75 },
  { name: "HTML5", percentage: 95 },
  { name: "Spring Framework", percentage: 90 },
  { name: "ASP.NET Web API", percentage: 80 },
  { name: "Amazon Web Service ( AWS )", percentage: 60 }, 
  { name: "CSS", percentage: 90 },
  { name: "Spring Boot", percentage: 90 },
  { name: "Selenium Testing", percentage: 70 },
  { name: "Hibernate", percentage: 85 },
  { name: "ASP.NET MVC", percentage: 75 },
  { name: "Git & GitHub", percentage: 85 },
  { name: "Software Testing", percentage: 75 },
];

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <h2>Skills</h2>
      <br />
      <hr />
      <br />
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-name">{skill.name}</span>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.percentage}%` }}
              >
                <span className="percentage">{skill.percentage}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
