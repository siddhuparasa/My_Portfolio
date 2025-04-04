import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="content">
        <div className="card">
          <h3>About Me</h3>
          <p>
            I am a dedicated student with a strong interest in Artificial Intelligence, Deep Learning, 
            Frontend Development, and Data Structures & Algorithms. I am passionate about solving 
            real-world problems through technology and continuously enhancing my skills.
          </p>
        </div>

        <div className="card">
          <h3>Learning and Experience</h3>
          <ul>
            <li>Frontend Development (1+ years).</li>
            <li>Graphic & Logo Design (1+ years).</li>
            <li>Learning AI & Deep Learning; working on projects.</li>
            <li>Exploring Explainable AI for Disaster Response.</li>
            <li>Moderate proficiency in DSA with ongoing practice.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Goals and Aspirations</h3>
          <p>
            I am committed to expanding my technical expertise, contributing to innovative projects, 
            and exploring research opportunities in AI. My long-term goal is to develop impactful 
            solutions that integrate technology with real-world applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
