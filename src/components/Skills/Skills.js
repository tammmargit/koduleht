import React from 'react';
import './Skills.css';
import { FaDatabase, FaCode, FaTools, FaCloud } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Veebirakenduste Arendus",
      icon: <FaCode />,
      skills: [
        "React - komponentide loomine, state management, hooks",
        "PHP/Laravel/Filament - täisrakenduste arendamine",
        ".NET/C# - API ja veebirakenduste loomine",
        "HTML5/CSS3/Bootstrap - modernne veebidisain"
      ]
    },
    {
      title: "Andmebaasid & Backend",
      icon: <FaDatabase />,
      skills: [
        "MySQL - andmebaasi disain ja päringud",
        "MS SQL - .NET rakenduste andmebaasid",
        "SQLite - kergemate rakenduste andmebaasid",
        "API-de disain",
        "Python - tööriistade arendamine"
      ]
    },
    {
      title: "Arenduskeskkond",
      icon: <FaTools />,
      skills: [
        "Git - versioonihaldus ja meeskonnatöö",
        "Visual Studio / VS Code",
        "Postman - API testimine ja dokumenteerimine",
        "Docker"
      ]
    },
    {
      title: "Muu",
      icon: <FaCloud />,
      skills: [
        "Azure - rakenduste hostimine ja haldamine",
        "Agile/Scrum - meeskonnatöö ja projektijuhtimine",
        "Clean Code & SOLID printsiibid"
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>Oskused</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
