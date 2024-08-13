import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="section" id="About">
      
      <div className="about-container">
        <div className="about-left">
          <h1 className="about-header">about. 
          <span className="horizontal-line"></span> 
            </h1>
          <div className="about-intro">
            <p>Hello! I'm Anzal Beg, an IT professional with over eight years of experience in web development, cloud solutions, and blockchain technology.</p>
          </div>
          <div className="about-passion">
            <p> Based in Ajman, UAE, I currently work as a Cloud Solution Architect for the Department of Digital Ajman, enhancing the government's digital infrastructure. My expertise includes private cloud deployment, Azure migrations, and blockchain application development.</p>
          </div>
          <div className="about-personal">
            <p>Certified as a Microsoft Azure Solution Architect Expert and Kubernetes Application Developer, I thrive on solving complex problems and delivering customer-focused solutions. I'm passionate about driving technological advancement and efficiency in every project I undertake. Let's connect and explore how we can collaborate on impactful ventures.</p>
          </div>
        </div>
        <div className="about-right">
         
        </div>
      </div>
    </div>
  );
};

export default About;
