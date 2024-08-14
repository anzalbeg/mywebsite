import React, { useState } from 'react';
import './ProjectsDetail.css';
import { Row, Col, Card } from 'react-bootstrap';
import hclImage from '../assets/hcl.jpeg';

const IOTProjectDetails = () => {
  const [activeTab, setActiveTab] = useState('introduction');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <Row>
        <Col md={4}>
          <div className="tabs">
          {['introduction', 'company', 'projects'].map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
                aria-selected={activeTab === tab}
              >
                <span className="icon">{tab === 'introduction' ? '🏠' : tab === 'company' ? '🏢' : tab === 'projects' ? '🚀' : ''}</span>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
              ))}
          </div>
        </Col>
        <Col md={8}>
          <div className="project-content">
            {activeTab === 'introduction' && (
              <div>
                <h1>Introduction</h1>
                <p>
                  I joined HCL Technologies in 2016 as a Software Engineer in the IoT Domain. I have worked on cloud platforms like IBM Cloud and MS Azure to create, build, and deploy IoT web solutions from scratch using multiple technology stacks.
                </p>
              </div>
            )}
            {activeTab === 'company' && (
              <div>
                <Row className="align-items-center">
                  <Col md={6}>
                    <h2 id="companyname"><b>HCL Technologies</b></h2>
                  </Col>
                  <Col md={3}>
                    <img src={hclImage} alt="HCL Technologies" className="company-image" />
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col md={12}>
                    <h3>
                      <b>Company Website Link:</b> <a href="https://g.co/kgs/JrTUfUv" target="_blank" rel="noopener noreferrer">https://g.co/kgs/JrTUfUv</a>
                    </h3>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col md={12}>
                    <div className="map-container">
                      <iframe
                        className="map-iframe"
                        src="https://www.google.com/maps/embed?pb=..."
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                      ></iframe>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
            {activeTab === 'projects' && (
              <div>
                <h1>Projects</h1>
                <Row>
                  {[
                    { title: 'Angle Helmet', text: 'A project involving the development of a helmet with integrated sensors.' },
                    { title: 'Drone Image Recognition', text: 'Using drones for image recognition and processing.' },
                    { title: 'Track & Trace', text: 'A system for tracking and tracing items in real time.' },
                    { title: 'Blockchain Using Hyperledger', text: 'Implementation of blockchain technology using Hyperledger.' },
                    { title: 'Cold Chain Management System', text: 'A system for managing cold chain logistics using blockchain on MS Azure.' }
                  ].map((project, index) => (
                    <Col md={4} key={index}>
                      <Card className="project-card">
                        <Card.Body>
                          <Card.Title>{project.title}</Card.Title>
                          <Card.Text>{project.text}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
            {/* {activeTab === 'team' && (
              <div>
                <h2>Team</h2>
                <Row>
                  {[
                    { name: 'John Doe', title: 'Lead Developer', link: 'https://www.linkedin.com/in/johndoe', text: 'Expertise in full-stack development and cloud solutions.' },
                    { name: 'Jane Doe', title: 'UI/UX Designer', link: 'https://www.linkedin.com/in/janedoe', text: 'Specializing in creating intuitive and engaging user interfaces.' },
                    { name: 'Bob Smith', title: 'Project Manager', link: 'https://www.linkedin.com/in/bobsmith', text: 'Focus on agile methodologies and project execution.' }
                  ].map((teamMember, index) => (
                    <Col md={4} key={index}>
                      <Card className="team-card" onClick={() => window.open(teamMember.link, '_blank')}>
                        <Card.Body>
                          <Card.Title>{teamMember.name}</Card.Title>
                          <Card.Text>{teamMember.text}</Card.Text>
                          <Card.Link href={teamMember.link} target="_blank" rel="noopener noreferrer">LinkedIn Profile</Card.Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
             */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default IOTProjectDetails;
