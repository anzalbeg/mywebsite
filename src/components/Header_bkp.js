import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '%PUBLIC_URL%/logo.png';
import twitterIcon from '%PUBLIC_URL%/twitter.png';
import linkedinIcon from '%PUBLIC_URL%/linkedin.png';
import githubIcon from '%PUBLIC_URL%/github.png';
import './Header.css';
import kittySound from '%PUBLIC_URL%/kitten.mp3';

function Header() {
  const playKittySound = () => {
    const audio = new Audio(kittySound);
    audio.play();
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 2000);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setIsScrolled(currentScrollPos > 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${visible ? 'visible' : 'hidden'}`}>
      <div className="header-content container">
        <img src={logo} alt="Logo" className="logo" />
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="linkedin" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" onMouseEnter={playKittySound}>
            <img src={githubIcon} alt="GitHub" className="github" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
