import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Siddhu's Portfolio</h1>
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <a 
            href="https://docs.google.com/document/d/1OyudG-8y4ApmC58QYvzlJgA1X7CkfqW1/edit?usp=sharing&ouid=106323659446476128721&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
