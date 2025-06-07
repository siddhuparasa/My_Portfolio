import React from "react";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  const projects = [
    {
      name: "SmartScene",
      description: "AI-powered video summarization system that automatically extracts key moments from long videos and also summarizes them with the object detection.",
      link: "https://colab.research.google.com/drive/1t-22NLDBH8U7UguQDlvXwzB0aDTb4Jaw?usp=sharing",
      tags: ["Python", "OpenCV", "NLP"]
    },
    {
      name: "WorkGrid (MERN)",
      description: "Full-stack task management platform with real-time collaboration features and team workspaces.",
      link: "https://workgrid-five.vercel.app/",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      name: "Job Coach",
      description: "AI-powered job interview coaching platform offering smart AI powered feedback,mock interview practice of CS core concepts like OS,DBMS,Devops,system design,DSA,Machine learning,etc with speech recognition.",
      link: "https://jobcoach-frontend.vercel.app/", 
      tags: ["React.js", "Flask", "Python", "Speech Recognition"]
},
    
    {
      name: "iPhone Time Widget",
      description: "Customizable clock widgets with sleek iOS-inspired design and multiple timezone support.",
      link: "https://siddhuparasa.github.io/TimeWidget/",
      tags: ["HTML/CSS", "JavaScript", "UI Design"]
    },
    {
      name: "Crop Yield Prediction",
      description: "Machine learning model that analyzes environmental factors to predict agricultural yields with 92% accuracy.",
      link: "https://colab.research.google.com/drive/13HeuXcxx64wZi2MUu-eIIqhkXzNhhv-c",
      tags: ["Python", "Scikit-learn", "Pandas"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="accent-text"></span> Featured Projects
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <div className="project-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <rect width="40" height="40" rx="8" fill={`url(#gradient-${index})`} />
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={index % 2 === 0 ? "#04fcc2" : "#0066ff"} />
                        <stop offset="100%" stopColor={index % 2 === 0 ? "#0066ff" : "#04fcc2"} />
                      </linearGradient>
                    </defs>
                    <text x="20" y="24" textAnchor="middle" fill="white" fontFamily="Arial" fontSize="16" fontWeight="bold">
                      {index + 1}
                    </text>
                  </svg>
                </div>
                <h3 className="project-title">{project.name}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
                aria-label={`View ${project.name} project`}
              >
                <span>View Project</span>
                <FiExternalLink className="link-icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;