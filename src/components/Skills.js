import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", img: "/assets/images/html-logo.png" },
    { name: "CSS", img: "/assets/images/css-logo.png" },
    { name: "JavaScript", img: "/assets/images/js-logo.png" },
    { name: "React", img: "/assets/images/react-logo.png" },
    { name: "Python", img: "/assets/images/python-logo.png" },
    { name: "Machine Learning", img: "/assets/images/ml-logo.png" },
    { name: "Deep Learning", img: "/assets/images/deep-learning-logo.png" },
    { name: "OpenCV", img: "/assets/images/opencv-logo.webp" },
    { name: "MySQL", img: "/assets/images/mysql-logo.png" },
    { name: "Graphic Design", img: "/assets/images/graphic-design-logo.jpeg" },
    { name: "UI/UX Design", img: "/assets/images/ui-ux-logo.png" }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.img} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
