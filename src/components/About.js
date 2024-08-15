import React from 'react';
import './About.css';

const About = () => {
  const currentDate = new Date();
  const startDate = new Date(2016, 0, 1); // January 1, 2016

  const diffTime = Math.abs(currentDate - startDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffYears = Math.floor(diffDays / 365);
  const diffMonths = Math.floor((diffDays % 365) / 30);
  const remainingDays = diffDays - (diffYears * 365 + diffMonths * 30);

  return (
    <div className="section" id="About">
      <div className="about-container">
        <div className="about-left">
          <h1 className="about-header">about.
            <span className="horizontal-line"></span>
          </h1>
          <div className="about-intro">
            <p>Hello! I'm Anzal Beg, an IT professional with over {diffYears} years, {diffMonths} months, and {remainingDays} days of experience in Cloud solutions, Blockchain technology, DevOps, and Event driven Architecture.</p>
          </div>
          <div className="about-passion">
            <p>Based in Ajman, UAE, I currently work as a Cloud Solution Architect for the Department of Digital Ajman, enhancing the government's digital infrastructure. My expertise includes private cloud deployment, Azure migrations, and blockchain application development.</p>
          </div>
          <div className="about-personal">
            <p>Certified as a Microsoft Azure Solution Architect Expert and Kubernetes Application Developer, I thrive on solving complex problems and delivering customer-focused solutions. I'm passionate about driving technological advancement and efficiency in every project I undertake. Let's connect and explore how we can collaborate on impactful ventures.</p>
          </div>
        </div>
        <div className="about-right">
          {/* Additional content can go here */}
        </div>
      </div>
    </div>
  );
};

export default About;
