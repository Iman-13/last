import React from 'react';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-text">
          <h1>Skills</h1>
          <p>Some technologies I have experience with:</p>
        </div>
        <div className="skill-list">
          <div className="skill">
            <h3>Web Development</h3>
            <p>HTML, CSS, PYTHON and React.js</p>
          </div>
          <div className="skill">
            <h3>Networking</h3>
            <p>CCNA, Network Fundamentals</p>
          </div>
          <div className="skill">
            <h3>AI & Cloud</h3>
            <p>Basic AI concepts, cloud services</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
