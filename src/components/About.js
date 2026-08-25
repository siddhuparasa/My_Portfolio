import React from "react";
import {
  FiCpu,
  FiEye,
  FiCode,
  FiDatabase,
} from "react-icons/fi";

function About() {
  const focusAreas = [
    {
      icon: <FiCpu />,
      title: "GenAI & Agentic AI",
      text: "LLMs, Generative AI, AI agents, and LangChain.",
    },
    {
      icon: <FiDatabase />,
      title: "RAG & AI Engineering",
      text: "RAG systems, retrieval pipelines, and AI workflows.",
    },
    {
      icon: <FiEye />,
      title: "Computer Vision",
      text: "Object detection, video understanding, and deep learning.",
    },
    {
      icon: <FiCode />,
      title: "Full-Stack Development",
      text: "React, Node.js, Flask, MongoDB, and APIs.",
    },
  ];

  const journey = [
    {
      year: "2022",
      title: "Problem Solving",
      text: "Started building foundations in programming and DSA.",
    },
    {
      year: "2023",
      title: "Full-Stack Development",
      text: "Started building web applications and learning modern development.",
    },
    {
      year: "2024",
      title: "AI & Computer Vision",
      text: "Explored deep learning, computer vision, and AI projects.",
    },
    {
      year: "2025 – Present",
      title: "GenAI & Agentic AI",
      text: "Focused on LLMs, RAG, Generative AI, and agentic workflows.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">

        {/* Heading */}
        <div className="about-heading">
          <span className="about-label">ABOUT ME</span>

          <h2 className="section-title">
            Who I Am
          </h2>

          <p className="about-intro">
            I'm an AI-focused engineer interested in building practical AI
            applications and reliable software solutions. My work combines
            intelligent systems with modern software engineering.
          </p>
        </div>

        {/* Two Cards */}
        <div className="about-bottom">

          {/* What I Work With */}
          <div className="about-card about-focus">
            <h3>What I Work With</h3>

            <div className="focus-list">
              {focusAreas.map((area) => (
                <div className="focus-item" key={area.title}>

                  <div className="focus-icon">
                    {area.icon}
                  </div>

                  <div>
                    <h4>{area.title}</h4>
                    <p>{area.text}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* My Journey */}
          <div className="about-card journey-section">
            <h3>My Journey</h3>

            <div className="journey-list">
              {journey.map((item) => (
                <div
                  className="journey-item"
                  key={item.year}
                >
                  <span className="journey-year">
                    {item.year}
                  </span>

                  <div className="journey-info">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;