import React from "react";
import "./Skills.css";

const skills = [
  { name: "JavaScript", tools: "Node.js, Express, TypeScript, React, Next.js" },
  { name: "DevOps", tools: " GitHub Actions" },
  { name: "APIs", tools: "REST" },
  { name: "Databases", tools: "MySQL, Firebase" },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-header">Skills</h2>
      <div className="skills-carousel">
        <div className="skills-track">
          {skills.concat(skills).map((skill, index) => (
            <div className="skill-wrapper" key={index}>
              <div className="skill-card">
                <h3>{skill.name}</h3>
                <p>{skill.tools}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
