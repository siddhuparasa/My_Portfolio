import React from "react";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h2>Siddhu Parasa 👋</h2>
<p>AI Engineer | LLMs | RAG | Agentic AI | Computer Vision | Deep Learning</p>
<p>Designing autonomous, AI-driven systems and scalable solutions for real-world applications.</p>
        <a href="#contact" className="btn">Get in Touch</a>
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
