import React from "react";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h2>Siddhu Parasa 👋</h2>
        <p> Aspiring AI Engineer | Full Stack Developer | AI & ML Enthusiast</p>
        <p>Building AI-powered solutions to solve real-world problems.</p>
        <a href="#contact" className="btn">Get in Touch</a>
      </div>
      <div className="home-image">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/boy.webp"}
          alt="Siddhu Parasa"
        />
      </div>
    </section>
  );
}

export default Home;
