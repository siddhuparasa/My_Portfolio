import React from "react";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h2>Siddhu Parasa 👋</h2>
        <p>Aspiring AI Engineer | Frontend Developer | AIML Enthusiast</p>
        <p>Passionate about building AI-powered solutions.</p>
        <a href="#contact" className="btn">Get in Touch</a>
      </div>
      <div className="home-image">
        <img src={process.env.PUBLIC_URL + "/assets/images/boy.webp"} alt="siddhuparasa" />
      </div>
    </section>
  );
}

export default Home;
