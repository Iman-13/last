// src/Components/Navbar.jsx
import React from 'react';

function Navbar({ toggleMenu, menuOpen }) {
  return (
    <header className="header">
      <a href="#home" className="logo">Iman<span>.</span></a>
      <i className="bx bx-menu" id="menu-icon" onClick={toggleMenu}></i>
      
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;