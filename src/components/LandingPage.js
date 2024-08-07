import React from 'react';
import './Home.css'; // Import CSS file for HomePage styling
import { Container, Row, Col } from 'react-bootstrap';

const LandingPage = () => (
  <div className="section" id="landingpage">
   <Container className="content">
        <Row>
          <Col md={6} className="left-section">
          <Row>
            <h1 className="animated-text">Hello,
            <span className="horizontal-line"></span>
            
            </h1>
            </Row>
            <Row>
            <h1 className="animated-text1"> my
            <br /> name is
            <br /> Anzal
            <span className="vertical-line"></span>
            </h1>
            </Row>
          </Col>
          <Col md={6} className="right-section">
            {/* Add any additional content for the right section here */}
          </Col>
        </Row>
      </Container>
  </div>
  
);

export default LandingPage;
