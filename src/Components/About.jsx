// src/Components/About.jsx
import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h1 className="heading">About <span>Me</span></h1>
        <p>Hello! My name is Emmanuel Aviles, a dedicated Information Technology student with a passion for learning and innovation.</p>
        <p>I specialize in web development, gaming, and programming. My goal is to become a full-stack developer contributing to meaningful projects.</p>
      </div>
      <div className="about-img">
        <img src="iman2.jpg" alt="About Me" />
      </div>
    </section>
  );
}

export default About;