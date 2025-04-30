import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <p>Email: iman@example.com</p>
        <p>Phone: 0970-844-7594</p>
        <div className="social-links">
          <a href="mailto:iman@example.com" className="social-icon">📧</a>
          <a href="tel:09708447594" className="social-icon">📞</a>
          <a href="https://www.facebook.com/emmanuel.aviles.629348" target="_blank" rel="noreferrer" className="social-icon">FB</a>
          <a href="https://github.com/Iman-13" target="_blank" rel="noreferrer" className="social-icon">GH</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;