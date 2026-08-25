import React from "react";

function Skills() {
  const skillCategories = [
    {
      category: "GenAI & Agentic AI",
      img: process.env.PUBLIC_URL + "/assets/images/AI-logo.webp",
      skills: [
        "LLMs",
        "Automations",
        "AI agents",
        "Generative AI",
        "LangChain",
        "RAG",
        "vector databases",
      ],
    },

    {
      category: "Computer Vision & Deep Learning",
      img: process.env.PUBLIC_URL + "/assets/images/AI-logo.webp",
      skills: [
        "Computer Vision",
        "Deep Learning",
        "OpenCV",
        "Object Detection",
        "Image Recognition",
        "CNN",
        "YOLO",
      ],
    },

    {
      category: "Programming Languages",
      img: process.env.PUBLIC_URL + "/assets/images/languages-logo.webp",
      skills: [
        "Python",
        "C++",
        "C",
      ],
    },

    {
      category: "Full-Stack Development",
      img: process.env.PUBLIC_URL + "/assets/images/frontend-logo.jpg",
      skills: [
        "React",
        "JavaScript", 
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },

    {
      category: "Databases & Development Tools",
      img: process.env.PUBLIC_URL + "/assets/images/database-logo.png",
      skills: [
        "MySQL",
        "Git",
        "GitHub",
        "REST APIs",
        "FastAPI",
        "Streamlit",
      ],
    },
    ];

  return (
    <section id="skills" className="skills">
      <div className="container">

        <h2 className="section-title">
          <span className="accent-text"></span>
          Technical Skills
        </h2>

        <div className="skills-container">
          {skillCategories.map(({ category, img, skills }, index) => (
            <div
              key={index}
              className="skill-category"
            >
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
                  <li
                    key={skillIndex}
                    className="skill-item"
                  >
                    <span className="skill-bullet">
                      ▹
                    </span>

                    {skill}
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