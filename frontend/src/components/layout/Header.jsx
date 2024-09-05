import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './CSS/Header.css'; // Ensure you have this CSS file

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="header">
      <div className="logo"><img src='/images/copy1.png' alt="Logo" /></div>
      <div className="burger">
      <button className="nav-toggle" onClick={toggleNavVisibility}>
        <span className={`${!isNavVisible ? 'hide' : ''}`}>X</span><span className={`${isNavVisible ? 'hide' : ''}`}>☰</span> {/* Hamburger icon */}
      </button>
      
      <nav className={`navigation ${isNavVisible ? 'visible' : ''}`}>
        <Link to="/" onClick={toggleNavVisibility}>Home</Link>
        <Link to="/services" onClick={toggleNavVisibility}>Services</Link>
        <Link to="/projects" onClick={toggleNavVisibility}>Projects</Link>
        <Link to="/contact" onClick={toggleNavVisibility}>Contact Us</Link>
      </nav>
      </div>
    </header>
  );
}

export default Header;
