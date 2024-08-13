import React, { useEffect, useState } from 'react';
import './Header.css';
const twitterIcon = process.env.PUBLIC_URL + '/twitter.png';
const linkedinIcon = process.env.PUBLIC_URL + '/linkedin.png';
const githubIcon = process.env.PUBLIC_URL + '/github.png';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(true);
    setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick= (anchor) => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(anchor);
    }
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 500); // Delay to allow transition to complete
  };

  // const handleMenuClick = (anchor) => {
  //   // Replace with your logic to handle menu item clicks
  //   console.log(`Clicked on ${anchor}`);
  //   setIsMenuOpen(false); // Close the menu after clicking on a menu item
  // };
  // const handleMenuToggle = () => {
  //   const nav = document.querySelector('.nav');
  //   nav.classList.toggle('open');
  // };
  

  return (
    <header className={`header ${visible ? 'visible' : 'hidden'}`}>
      <div className="header-content">
        <div className="contact-info">
          <span className="name">My Name</span>
          <span className="email">sdfadfe@gmail.com</span>
          <span className="phone">+65465465132</span>
        </div>
        <div className="right-section">
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="linkedin" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="github" />
            </a>
          </div>
          <div className="menu-icon" onClick={handleMenuToggle}>
              <div className="bar">
                <div className="bar">
                  <div className="bar">
                  </div>
                </div>
              </div>
          </div>
          <ul className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <li onClick={() => handleMenuClick('home')}>Home</li>
            <li onClick={() => handleMenuClick('about')}>About</li>
            <li onClick={() => handleMenuClick('education')}>Education</li>
            <li onClick={() => handleMenuClick('projects')}>Projects</li>
            <li onClick={() => handleMenuClick('work')}>Work History</li>
            <li onClick={() => handleMenuClick('contact')}>Contact</li>
          </ul>
        </div>
        </div>
     
    </header>
  );
}

export default Header;
