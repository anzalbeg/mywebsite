import React from 'react';
import './About.css'; // Import CSS file for HomePage styling

const About = () => (
   <div className="section" id="About">
        <div className="about-page">
          
          <div className="container">
          <h1 className="section-heading">About Me</h1>
            <div className="content">
              <section className="intro">
                <h2>Hi, I'm Anzal Beg</h2>
                <p>
                  I'm an IT Solution Expert with a BTech degree in Computer Science from Dehradun, India, graduated with distinction. I have extensive experience working with leading multinational corporations such as HCL and First American India, where I have contributed to various cutting-edge projects including IoT, Blockchain, and Cloud solutions across platforms like AWS, Azure, and GCP. In the UAE, I have had the privilege of contributing to government projects for Ajman, focusing on middleware solutions within private cloud environments.
                </p>
              </section>

              <section className="skills">
                <h2>Skills and Expertise</h2>
                <ul>
                  <li>Solution Architecture</li>
                  <li>DevOps and CI/CD</li>
                  <li>Kubernetes and OpenShift</li>
                  <li>Blockchain and IoT</li>
                  <li>Cloud Platforms: Azure, AWS, IBM Cloud</li>
                  <li>IBM API Connect, Kafka, Event Processing, NIFI</li>
                  <li>Web Development</li>
                </ul>
              </section>

              <section className="achievements">
                <h2>Achievements</h2>
                <ul>
                  <li>Microsoft Azure Certified Solution Architect</li>
                  <li>Certified Kubernetes Application Developer</li>
                </ul>
              </section>

              <section className="goals">
                <h2>Goals</h2>
                <p>
                  My professional goal is to leverage my skills and experience to help the community by building innovative use cases and solutions that address real-world problems. I am passionate about developing technology that makes a meaningful impact.
                </p>
              </section>

              <section className="interests">
                <h2>Personal Interests</h2>
                <p>
                  When I'm not immersed in tech, I enjoy long road trips, reading religious books, and studying various religions. These activities provide me with a broader perspective and enrich my personal and professional life.
                </p>
              </section>
            </div>
          </div>
        </div>
        </div>
);

export default About;
