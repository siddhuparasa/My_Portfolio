import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Let’s Connect! 🚀</h2>
      <p>Have a project, idea, or just want to say hi? Drop a message on any platform below! 📩</p>
      
      <div className="contact-info">
        <a href="mailto:siddhuparasa99@gmail.com" className="contact-link">
          <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" /> 
        </a>
        <a href="https://www.linkedin.com/in/siddhu-parasa-a82866287/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /> 
        </a>
        <a href="https://github.com/siddhuparasa" target="_blank" rel="noopener noreferrer" className="contact-link">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
