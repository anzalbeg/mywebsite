import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ProjectsPage.css';
const defaultbg = process.env.PUBLIC_URL + '/myphoto1.jpg';
const iotbg = process.env.PUBLIC_URL + '/IOT.jpg';
const blockchainbg = process.env.PUBLIC_URL + '/Blockchain.jpg';
const cloudbg = process.env.PUBLIC_URL + '/azure.jpg';
const devopsbg = process.env.PUBLIC_URL + '/devops.jpg';
const etlbg = process.env.PUBLIC_URL + '/etl.jpg';
import IOTProjectDetail from './IOTProjectDetail.js';
import BlockchainProjectDetail from './BlockchainProjectDetail.js';
import CloudProjectDetail from './CloudProjectDetail.js';
import DevOpsProjectDetail from './DevOpsProjectDetail.js';
import EventProcessProjectDetail from './EventProcessProjectDetail.js'



const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

const projects = [
    { 
      id: 1, 
      title: 'IOT', 
      subtitle: 'Internet of Things', 
      description: 'The Internet of Things (IoT) project involves creating a network of interconnected devices that can communicate with each other and exchange data. The project focuses on developing smart solutions for home automation, industrial automation, and healthcare.', 
      bgImage: iotbg, 
      slideIndex: 1 
    },
    { 
      id: 2, 
      title: 'Blockchain', 
      subtitle: 'Distributed Ledger Technology', 
      description: 'The Blockchain project explores the use of distributed ledger technology to enhance security and transparency in various applications such as cryptocurrency, supply chain management, and secure data sharing.', 
      bgImage: blockchainbg, 
      slideIndex: 2 
    },
    { 
      id: 3, 
      title: 'Cloud', 
      subtitle: 'Cloud Computing', 
      description: 'The Cloud Computing project aims to leverage cloud services to provide scalable and efficient computing resources. The project includes developing cloud-based applications and migrating existing systems to the cloud.', 
      bgImage: cloudbg, 
      slideIndex: 3 
    },
    { 
      id: 4, 
      title: 'DevOps', 
      subtitle: 'Development and Operations', 
      description: 'The DevOps project focuses on integrating development and operations to improve the efficiency and quality of software delivery. It involves automating the deployment pipeline, implementing continuous integration/continuous deployment (CI/CD) practices, and enhancing collaboration between teams.', 
      bgImage: devopsbg, 
      slideIndex: 4 
    },
    { 
      id: 5, 
      title: 'ETL', 
      subtitle: 'Extract, Transform, Load', 
      description: 'The ETL project involves extracting data from various sources, transforming it into a suitable format, and loading it into a data warehouse. The project aims to improve data integration, quality, and accessibility for analytics and reporting.', 
      bgImage: etlbg, 
      slideIndex: 5 
    },
  ];

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  };

  const handleProjectClick = (slideIndex) => {
    if (window.fullpage_api) {
      console.log("window.fullpage_api--------"+window.fullpage_api+"slideIndex-->"+slideIndex)
      window.fullpage_api.moveTo(3, slideIndex);
    } else {
      console.error('fullpage_api is not available');
    }
  };


    // Render the appropriate project detail component based on the selectedProjectId
    const renderProjectDetail = (selectedProjectId) => {
      switch (selectedProjectId) {
        case 1:
          return <IOTProjectDetail />;
        case 2:
          return <BlockchainProjectDetail />;
        // Add cases for other project details as needed
        case 3:
          return <CloudProjectDetail/>;
        case 4:
          return <DevOpsProjectDetail/>
        case 5:
          return <EventProcessProjectDetail/>
        default:
          return null;
      }
    };

  return (
    <div className="section" id="projectspage" style={{ backgroundImage: `url(${hoveredProject ? hoveredProject.bgImage : defaultbg})` }}>
      <div className='slide'>
        <Container className="projects-container">
          <Row className='project-Header'><h1>Projects
          <span className='horizontal-line'></span>
          </h1>
          </Row>
          <Row>
            {projects.slice(0, 3).map((project) => (
              <Col key={project.id} md={4} sm={6} xs={12} className="mb-4">
                <Card
                  className={`project-box ${project.title === 'IOT' ? 'iot' : ''}`}
                  onMouseEnter={() => handleMouseEnter(project)}
                  onClick={() => handleProjectClick(project.slideIndex)}
                >
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            {projects.slice(3).map((project) => (
              <Col key={project.id} md={4} sm={6} xs={12} className="mb-4">
                <Card
                  className={`project-box ${project.title === 'IOT' ? 'iot' : ''}`}
                  onMouseEnter={() => handleMouseEnter(project)}
                  onClick={() => handleProjectClick(project.slideIndex)}
                >
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
       {projects.map((project) => (
        <div key={project.id} id="project-slide" className="slide" style={{ backgroundImage: `url(${project.bgImage})` }}>
          <div className="project-content">
            {renderProjectDetail(project.id)}
          </div>
        </div>
      ))}
    </div>
     );
};

export default ProjectsPage;
