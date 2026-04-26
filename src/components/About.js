import React from "react";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          <span className="accent-text"></span> Who I Am
        </h2>
        
        <div className="about-grid">
          <div className="about-card highlight-card">
            <div className="card-icon">🤖</div>
            <h3 className="card-title">AI Engineer</h3>
            <p className="card-text">
              I build intelligent systems using LLMs, Computer Vision, and Deep Learning to solve real-world problems. My work includes developing AI solutions like MediDoc, a GenAI-based medical documentation system, and Smart Scene, an AI-powered video summarization pipeline.

              I also have experience with Explainable AI techniques such as LIME, SHAP, and Grad-CAM, along with full-stack development using the MERN stack to deploy scalable AI-driven applications.
            </p>
            <div className="accent-line"></div>
          </div>

          <div className="about-card">
            <h3 className="card-title">My Journey</h3>
            <ul className="timeline">
              <li>
                <span className="year">2024 – Present</span>
                <span className="event">Building AI Systems (LLMs, Computer Vision, Deep Learning)</span>
              </li>
              <li>
                <span className="year">2024 – Present</span>
                <span className="event">Research & Development in AI (GenAI + NLP)</span>
              </li>
              <li>
                <span className="year">2023 – Present</span>
                <span className="event">Full-Stack Development (MERN) & Deployment</span>
              </li>
              <li>
                <span className="year">2022 – Present</span>
                <span className="event">Data Structures & Algorithmic Problem Solving</span>
              </li>
            </ul>
            <div className="accent-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;