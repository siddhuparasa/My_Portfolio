import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p><strong>Name:</strong> Parasa Kamal Siddardha</p>
        <p><strong>Email:</strong> <a href="mailto:siddhuparasa99@gmail.com">siddhuparasa99@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+919391757059">+91 93917 57059</a></p>
        <p><strong>Location:</strong> India</p>
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/siddhuparasa" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="30" />
          </a>
          <a href="https://github.com/siddhuparasa" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="30" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
