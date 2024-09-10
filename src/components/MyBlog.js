import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MyBlog.css';


function MyBlog() {
  return (
    
    <div className='section' id="myblogsection">
<Container>
      <h2 className="heading text-center">Latest Projects</h2>
      <Row>
        <Col md={4} className="mb-4">
          <div className="project-card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Project 1"
              className="project-image"
            />
            <h3 className="project-title">Post 1 Headline</h3>
            <p className="project-date">Fri Jun 19 2020 | Comments (0)</p>
          </div>
        </Col>

        <Col md={4} className="mb-4">
          <div className="project-card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Project 2"
              className="project-image"
            />
            <h3 className="project-title">Post 2 Headline</h3>
            <p className="project-date">Fri Jun 19 2020 | Comments (0)</p>
          </div>
        </Col>

        <Col md={4} className="mb-4">
          <div className="project-card">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Project 3"
              className="project-image"
            />
            <h3 className="project-title">Post 3 Headline</h3>
            <p className="project-date">Fri Jun 19 2020 | Comments (0)</p>
          </div>
        </Col>
      </Row>
      <footer>
        <p className="footer-text">Image by <a href="https://www.freepik.com">Freepik</a></p>
      </footer>
    </Container>
    </div>


  );
}

export default MyBlog;