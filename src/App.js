import React, { useState } from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <>
      <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen} />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
