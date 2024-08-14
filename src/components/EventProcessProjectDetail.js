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
          <div className="content">
            {activeTab === 'introduction' && (
              <div>
                <h1>Introduction</h1>
                <b>
                  <p>As a Cloud Architect at Department of digital Ajman.I have integrated the Event Stream Kafka service into the architecture to capture real-time production data. This 
implementation ensures a continuous flow of data, enabling timely insights and responsiveness to changing operational scenarios.Utilized Apache NiFi, a powerful ETL (Extract, Transform, Load) tool, to model, clean, and process the captured 
data before storing it in MongoDB. This step ensures data quality and consistency, laying the foundation for meaningful analytics.Leveraged Power BI to create comprehensive dashboards for analytics and data monitoring. These dashboards 
provide stakeholders with visually intuitive representations of key performance indicators, fostering data-driven decision-making.</p>
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
                 <img src={require('../assets/DDA.jpg')} alt="" className="company-image" style={{ width: '50%', height: 'auto' }}
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
                  <h1>Projects</h1>
                <Row>
                  <Col md={6}>
                    <Card className="project-card3">
                      <Card.Body>
                        <Card.Title>Event Processing </Card.Title>
                        <Card.Text>
                        Integrated real-time project data into Kafka for streaming. Used Apache NiFi to process data from Kafka, performing cleansing, modeling, and filtering before storing valuable business data in a data warehouse. Created a Power BI analytics dashboard connected to the data warehouse to generate actionable business insights.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6}>
                    <Card className="project-card3">
                      <Card.Body>
                        <Card.Title>Apache Nifi POC</Card.Title>
                        <Card.Text>
                        Migrated a 200GB dataset onpremise between databases using Apache NiFi, incorporating data cleansing and filtering during the process.
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
