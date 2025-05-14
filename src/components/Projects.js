import React from "react";

function Projects() {
  const projects = [
    { name: "SmartScene", description: "AI-powered video summarization system.", link: "https://colab.research.google.com/drive/1t-22NLDBH8U7UguQDlvXwzB0aDTb4Jaw?usp=sharing" },
    { name: "WorkGrid (MERN)", description: "Task management & collaboration platform.", link: "https://workgrid-five.vercel.app/" },
    { name: "Iphone_Time_Widget", description: "Real-time clocks with stylish design.", link: "https://siddhuparasa.github.io/TimeWidget/" },
    { name: "Crop & Yield Prediction", description: "ML model to predict crop yield.", link: "https://colab.research.google.com/drive/13HeuXcxx64wZi2MUu-eIIqhkXzNhhv-c" }
  ];

  return (
    <section id="projects" className="projects">
      <h2>PROJECTS</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
