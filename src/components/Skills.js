import React from "react";

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      img: "/assets/images/frontend-logo.jpg",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      category: "AI",
      img: "/assets/images/Ai-logo.webp",
      skills: ["Machine Learning", "Computer Vision (Basics)", "Deep Learning", "NLP"]
    },
    {
      category: "Databases",
      img: "/assets/images/database-logo.png",
      skills: ["MongoDB", "MySQL", "Oracle"]
    },
    {
      category: "Languages",
      img: "/assets/images/languages-logo.webp",
      skills: ["C", "C++", "Python"]
    },
    {
      category: "UI/UX",
      img: "/assets/images/figma-logo.png",
      skills: ["Figma"]
    },
    {
      category: "Graphic Design",
      img: "/assets/images/design-logo.png",
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
