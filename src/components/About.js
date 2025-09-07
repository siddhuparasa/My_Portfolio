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
            <div className="card-icon">👨‍💻</div>
            <h3 className="card-title">Tech Enthusiast</h3>
            <p className="card-text">
             I’m a final-year B.Tech student with a strong passion for Artificial Intelligence and Machine Learning. Currently, I’m focused on applying these technologies through hands-on projects and continuous learning. I’m also a Full Stack Developer with experience in building MERN-based web applications, aiming to create efficient, scalable, and user-friendly solutions.
            </p>
            <div className="accent-line"></div>
          </div>

          <div className="about-card">
            <h3 className="card-title">My Journey</h3>
            <ul className="timeline">
              <li>
                <span className="year">2024-Present</span>
                <span className="event">AI/ML Research & Development</span>
              </li>
              <li>
                <span className="year">2023-present</span>
                <span className="event">MERN Stack Development Freelancing</span>
              </li>
              <li>
                <span className="year">2022-present</span>
                <span className="event">DSA and Competitive Programming</span>
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