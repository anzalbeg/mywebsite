import React, { useEffect, useState } from 'react';
import twitterIcon from '../assets/twitter.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
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

  const handleMenuClick = (anchor) => {
    console.log(`Clicked on ${anchor}`); // Debugging line

    if (window.fullpage_api) {
      window.fullpage_api.moveTo(anchor);
    } else {
      // For testing purposes or if FullPage.js is not used
      console.log('FullPage API not found');
    }

    setTimeout(() => {
      setIsMenuOpen(false);
    }, 500); // Delay to allow transition to complete
  };

  return (
    <header className={`header ${visible ? 'visible' : 'hidden'}`}>
      <div className="header-content">
        <div className="contact-info">
          <span className="name">Anzal</span>
          <span className="email">anzalbeg24494@gmail.com</span>
          <span className="phone">+971556357063</span>
        </div>
        <div className="right-section">
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="twitter" />
            </a>
            <a href="https://www.linkedin.com/in/anzal-beg-2a650376//" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="linkedin" />
            </a>
            <a href="https://github.com/anzalbeg" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" className="github" />
            </a>
          </div>
          <div className="menu-icon" onClick={handleMenuToggle}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav ${isMenuOpen ? 'open' : 'close'}`}>
            {/* <li onClick={() => handleMenuClick('home')}>Home</li>
            <li onClick={() => handleMenuClick('about')}>About</li>
            <li onClick={() => handleMenuClick('projects')}>Projects</li>
            <li onClick={() => handleMenuClick('work')}>Work History</li>
            <li onClick={() => handleMenuClick('certifications')}>Certifications</li>
            <li onClick={() => handleMenuClick('contact')}>Contact</li> */}

<li data-menuanchor="home"> <a href="#1"><span className="icon">🏠</span> Home</a></li>
<li data-menuanchor="about"> <a href="#2"><span className="icon">ℹ️</span> About</a></li>
<li data-menuanchor="projects"><a href="#3"><span className="icon">📂</span> Projects</a></li>
<li data-menuanchor="work"><a href="#4"><span className="icon">🔧</span> Work History</a></li>
<li data-menuanchor="certifications"><a href="#5"><span className="icon">🎓</span> Certifications</a></li>
{/* <li data-menuanchor="blog"><a href="#6"><span className="icon">📝</span> MyBlog</a></li> */}
<li data-menuanchor="contact"><a href="#7"><span className="icon">📧</span> Contact</a></li>


            {/* <li data-menuanchor="home"><a href="#1">Home</a></li>
            <li data-menuanchor="about"><a href="#2">About</a></li>
            <li data-menuanchor="projects"><a href="#3">Projects</a></li>
            <li data-menuanchor="work"><a href="#4">Work History</a></li>
            <li data-menuanchor="certifications"><a href="#5">Certifications</a></li>
            <li data-menuanchor="contact"><a href="#6">Contact</a></li> */}

          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
