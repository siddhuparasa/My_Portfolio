import React from "react";

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      img: process.env.PUBLIC_URL + "/assets/images/frontend-logo.jpg",  // Updated
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      category: "AI",
      img: process.env.PUBLIC_URL + "/assets/images/AI-logo.webp",  // Updated
      skills: ["Machine Learning", "Computer Vision (Basics)", "Deep Learning", "NLP"]
    },
    {
      category: "Databases",
      img: process.env.PUBLIC_URL + "/assets/images/database-logo.png",  // Updated
      skills: ["MongoDB", "MySQL", "Oracle"]
    },
    {
      category: "Languages",
      img: process.env.PUBLIC_URL + "/assets/images/languages-logo.webp",  // Updated
      skills: ["C", "C++", "Python", "Java"]
    },
    {
      category: "UI/UX",
      img: process.env.PUBLIC_URL + "/assets/images/figma-logo.png",  // Updated
      skills: ["Figma"]
    },
    {
      category: "Graphic Design",
      img: process.env.PUBLIC_URL + "/assets/images/design-logo.png",  // Updated
      skills: ["Adobe Illustrator", "Canva", "Photoshop"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <img src={category.img} alt={`${category.category} logo`} className="category-logo" />
              <h3>{category.category}</h3>
            </div>
            <ul className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
