import React from "react";


function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Let's Connect! <span role="img" aria-label="rocket">🚀</span></h2>
      <p className="contact-description">
        Whether you have a project in mind, an idea to share, or just want to say hello, 
        feel free to reach out on any platform below! <span role="img" aria-label="envelope">📩</span>
      </p>
      
      <div className="contact-links">
        <a 
          href="mailto:siddhuparasa99@gmail.com" 
          className="contact-link"
          aria-label="Email"
        >
          <img 
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
            alt="Email"
            width="40"
            height="40"
            loading="lazy"
          /> 
        </a>
        <a
          href="https://www.linkedin.com/in/siddhu-parasa-a82866287/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          aria-label="LinkedIn"
        >
          <img 
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
            alt="LinkedIn"
            width="40"
            height="40"
            loading="lazy"
          /> 
        </a>
        <a
          href="https://github.com/siddhuparasa"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          aria-label="GitHub"
        >
          <img 
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
            alt="GitHub"
            width="40"
            height="40"
            loading="lazy"
          />
        </a>
      </div>
         
      
    </section>
  );
}

export default Contact;