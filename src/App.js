import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMeChatbot from "./components/AboutMeChatbot"; // Add this import

import "./App.css";

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* Chatbot Toggle Button */}
      <button
        className="chat-toggle-button"
        onClick={() => setShowChat((prev) => !prev)}
      >
        {showChat ? "✖ Close Chat" : "🤖 Chat With Me"}
      </button>

      {/* Floating Chatbot */}
      {showChat && (
        <div className="floating-chatbot">
          <AboutMeChatbot />
        </div>
      )}
    </>
  );
}

export default App;
