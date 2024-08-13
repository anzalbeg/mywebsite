import React, { useState } from 'react';
import './ProjectsDetail.css';
import { Row, Col, Card } from 'react-bootstrap';

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
            <button
              className={`tab ${activeTab === 'introduction' ? 'active' : ''}`}
              onClick={() => handleTabClick('introduction')}
            >
              <span className="icon">🏠</span>
              Introduction
            </button>
            <button
              className={`tab ${activeTab === 'company' ? 'active' : ''}`}
              onClick={() => handleTabClick('company')}
            >
              <span className="icon">✍️</span>
              Company
            </button>
            <button
              className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => handleTabClick('projects')}
            >
              <span className="icon">✉️</span>
              Projects
            </button>
            <button
              className={`tab ${activeTab === 'team' ? 'active' : ''}`}
              onClick={() => handleTabClick('team')}
            >
              <span className="icon">💻</span>
              Team
            </button>
            <button
              className={`tab ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => handleTabClick('about')}
            >
              <span className="icon">👤</span>
              About
            </button>
          </div>
        </Col>
        <Col md={8}>
          <div className="content">
            {activeTab === 'introduction' && (
              <div>
                <h2>Introduction</h2>
                <b>
                  <p>
                    I joined First American India in 2018 as a Senior Software Engineer in the Blockchain Project.Involved as a Software Engineer in Blockchain Domain for design and development the permission blockchain 
end to end production grade application using Hyperledger Fabric v1.4, Hyperledger-Composer, DockerCompose, Docker-Swarm, and Kubernetes. 
• Developed PoC’s using Blockchain as a Service (BaaS) on Amazon Web Server, Microsoft Azure and IBM Cloud. 
• Defined the blockchain architecture design and multiple use-cases according to the business requirement. 
• Involved research and development work to identify the need and requirement of multiple blockchain tools and 
framework.</p>
                </b>
              </div>
            )}
            {activeTab === 'company' && (
              <div>
                  <Row className="">
                  <Col md={9}>
                <h2  id="companyname"><b>First American India</b></h2>
                </Col>
                <Col md={3}>
                
                    <img 
  src={process.env.PUBLIC_URL + '/FAI.jpeg'} 
  alt="FAI" 
  className="company-image" 
  style={{ width: '50%', height: 'auto' }}/>
                    </Col>
                    </Row>
                    <Row className="">
                    <Col md={12}>
                    <h3>
                      <b>Company Website Link:</b> <a href="https://www.firstam.co.in/" target="_blank" rel="noopener noreferrer">https://www.firstam.co.in/</a>
                    </h3>
                    </Col>
                    </Row>
               
              
                 
                    <Row className="">
                    <Col md={12}>
                  <div className="map-container">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.147618965956!2d77.36174421518494!3d28.62807748241802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d0a82e9b3b%3A0xb9c4b7aef88bb51c!2sHCL%20Technologies%20Ltd!5e0!3m2!1sen!2sin!4v1678768420810!5m2!1sen!2sin"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
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
                <h2>Projects</h2>
                <Row>
                  <Col md={6}>
                    <Card className="project-card">
                      <Card.Body>
                        <Card.Title>Mutual Indemnity Blockchain</Card.Title>
                        <Card.Text>
                        Noisy Cricket is a permissioned blockchain application on the Hyperledger Fabric framework, establishes a shared 
                        digital ledger for recording policies issued by various title insurance participants in the business network
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card className="project-card">
                      <Card.Body>
                        <Card.Title>Blokchain Exolorer</Card.Title>
                        <Card.Text>
                         Design an centralised blockchain web application for multiple stackholders to access the shared data among the network stackholder.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            )}
            {activeTab === 'team' && (
              <div>
                <h2>Team</h2>
                <Row>
                  <Col md={4}>
                    <Card className="team-card" onClick={() => window.open('https://www.linkedin.com/in/johndoe', '_blank')}>
                      <Card.Body>
                        <Card.Title>John Doe</Card.Title>
                        <Card.Text>
                          Lead Developer with expertise in full-stack development and cloud solutions.
                        </Card.Text>
                        <Card.Link href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn Profile</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="team-card" onClick={() => window.open('https://www.linkedin.com/in/janedoe', '_blank')}>
                      <Card.Body>
                        <Card.Title>Jane Doe</Card.Title>
                        <Card.Text>
                          UI/UX Designer specializing in creating intuitive and engaging user interfaces.
                        </Card.Text>
                        <Card.Link href="https://www.linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer">LinkedIn Profile</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="team-card" onClick={() => window.open('https://www.linkedin.com/in/bobsmith', '_blank')}>
                      <Card.Body>
                        <Card.Title>Bob Smith</Card.Title>
                        <Card.Text>
                          Project Manager with a focus on agile methodologies and project execution.
                        </Card.Text>
                        <Card.Link href="https://www.linkedin.com/in/bobsmith" target="_blank" rel="noopener noreferrer">LinkedIn Profile</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            )}
            {activeTab === 'about' && (
              <div>
                <h2>About</h2>
                <p>Information about the website and its creator.</p>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default IOTProjectDetails;
