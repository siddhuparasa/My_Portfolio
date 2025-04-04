import React from "react";

function Projects() {
  const projects = [
    { name: "MediDoc", description: "AI-powered medical documentation summarization system.", link: "#" },
    { name: "WorkGrid (MERN)", description: "Task management & collaboration platform.", link: "#" },
    { name: "AI Job Interview Chatbot", description: "AI chatbot that simulates job interviews.", link: "#" },
    { name: "Crop & Yield Prediction", description: "ML model to predict crop yield.", link: "#" }
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
