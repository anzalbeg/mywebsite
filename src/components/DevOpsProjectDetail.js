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
                  <p>As a Cloud Architect at Department of digital Ajman. I have deployed multiple web application using a robust CI/CD Pipeline employing OpenShift Tekton, enhancing the efficiency of the development 
                  and deployment processes within the on-premise environment.
management</p>
                </b>
              </div>
            )}
            {activeTab === 'company' && (
              <div>
                  <Row className="align-items-center">
                  <Col md={6}>
                <h2 id="companyname"><b>Department Of Digital Ajman</b></h2>
                </Col>
                <Col md={3}>
                 <img src={require('%PUBLIC_URL%/DDA.jpg')} alt="" className="company-image" style={{ width: '50%', height: 'auto' }}
                    />
                    </Col>
                    </Row>
                    <Row className="align-items-center">
                    <Col md={12}>
                    <h3>
                      <b>Company Website Link:</b> <a href="https://digitalajman.ae/en" target="_blank" rel="noopener noreferrer">https://digitalajman.ae/en</a>
                    </h3>
                    </Col>
                    </Row>
               
              
                 
                    <Row className="align-items-center">
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
                    <Card className="project-card3">
                      <Card.Body>
                        <Card.Title>Ajman Service Bus Web Portal</Card.Title>
                        <Card.Text>
                        Deployed a Ajman Service Bus Administrator Web portal developed on Java spring boot on openshift using tekton CI/CD framework. The portal uses is to create, managed, view and update the entities(consumers, providers) business static data.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card className="project-card3">
                      <Card.Body>
                        <Card.Title>Ajman Title Deed Blockchain Web Application</Card.Title>
                        <Card.Text>
                        Deployed Ajman Title Deed Blockchain Web Application and automated the continuous integrated and development process using openshift tekton through gogs.
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
                    <Card className="team-card3" onClick={() => window.open('https://www.linkedin.com/in/johndoe', '_blank')}>
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                          Lead Developer with expertise in full-stack development and cloud solutions.
                        </Card.Text>
                        <Card.Link href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn Profile</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="team-card3" onClick={() => window.open('https://www.linkedin.com/in/janedoe', '_blank')}>
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
                    <Card className="team-card3" onClick={() => window.open('https://www.linkedin.com/in/bobsmith', '_blank')}>
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
