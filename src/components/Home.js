import React from "react";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">

        <h2>Siddhu Parasa</h2>

        <p>
          AI & Software Engineer
        </p>

        <p>
          GenAI | Agentic AI | RAG | Computer Vision
        </p>

        <div className="home-actions">
          <a href="#projects" className="btn">
            View My Work
          </a>

          <a href="#contact" className="btn">
            Get in Touch
          </a>
        </div>

      </div>

      <div className="home-image">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/my_pics.png"}
          alt="Siddhu Parasa"
        />
      </div>
    </section>
  );
}

export default Home;