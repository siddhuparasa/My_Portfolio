import React from "react";

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      img: process.env.PUBLIC_URL + "/assets/images/frontend-logo.jpg",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind"]
    },
    {
      category: "Artificial Intelligence",
      img: process.env.PUBLIC_URL + "/assets/images/AI-logo.webp",
      skills: ["Machine Learning", "Computer Vision", "Deep Learning", "NLP", "TensorFlow", "PyTorch"]
    },
    {
      category: "Databases",
      img: process.env.PUBLIC_URL + "/assets/images/database-logo.png",
      skills: ["MongoDB", "MySQL"]
    },
    {
      category: "Programming Languages",
      img: process.env.PUBLIC_URL + "/assets/images/languages-logo.webp",
      skills: ["C", "C++", "Python", "Java", "JavaScript"]
    },
    {
      category: "UI/UX Design",
      img: process.env.PUBLIC_URL + "/assets/images/figma-logo.png",
      skills: ["Figma"]
    },
    {
      category: "Graphic Design",
      img: process.env.PUBLIC_URL + "/assets/images/design-logo.png",
      skills: ["Adobe Illustrator", "Canva","photoshop"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="accent-text"></span> Technical Skills
        </h2>
        
        <div className="skills-container">
          {skillCategories.map(({ category, img, skills }, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <img 
                  src={img} 
                  alt={`${category} logo`} 
                  className="category-logo" 
                  loading="lazy"
                />
                <h3>{category}</h3>
              </div>
              <ul className="skills-list">
                {skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <span className="skill-bullet">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;