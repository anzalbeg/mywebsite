import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CertificationsPage.css';
import k8scert from '../assets/k8scert.png';
import azurecerts from '../assets/azurecerts.png';
import azuresolutioncert from '../assets/azuresolutioncert.png';

const certifications = [
  { 
    id: 2, 
    title: 'Certified Kubernetes Application Developer (CKA)', 
    description: 'The Certified Kubernetes Application Developer (CKAD) certification is designed for developers who want to demonstrate their skills in designing, building, and deploying cloud-native applications using Kubernetes.', 
    image: k8scert, 
    link: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/e2c1d476-d3ff-4f23-87e6-d9065d482457-anzal-beg-certified-kubernetes-application-developer-ckad-certificate.pdf' 
  },
  { 
    id: 3, 
    title: 'Microsoft Certified: Azure Associate Administrator', 
    description: 'This certification demonstrates your ability to manage and maintain Microsoft Azure services, including deployment, security, networking, and more.', 
    image: azurecerts, 
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/AnzalBeg-6859/6CF655BAE44CA30E?sharingId=F9F7FEDEEB2E6884' 
  },
  { 
    id: 4, 
    title: 'Microsoft Certified: Azure Solution Architect Expert', 
    description: 'This certification demonstrates expertise in designing and implementing comprehensive solutions that meet business and technical requirements, using Microsoft Azure services such as compute, storage, networking, and security.', 
    image: azuresolutioncert, 
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/AnzalBeg-6859/E2DAD8F6E514F14F?sharingId=F9F7FEDEEB2E6884' 
  }
];

const CertificationsPage = () => {
  return (
    <div className="section" id="certificationspage">

      <Container className="certifications-container">
        <Row className="Cert-Header">
          <h1>Certifications
          <span className="horizontal-line"></span>
          </h1>
          </Row>
        {certifications.reduce((rows, certification, index) => {
          if (index % 3 === 0) rows.push([]);
          rows[rows.length - 1].push(certification);
          return rows;
        }, []).map((certRow, rowIndex) => (
          <Row key={rowIndex}>
            {certRow.map((certification) => (
              <Col key={certification.id} md={4} sm={12} className="mb-4">
                <a href={certification.link} target="_blank" rel="noopener noreferrer">
                  <Card className="certification-box">
                    <Card.Img variant="top" src={certification.image} />
                    <Card.Body>
                      <Card.Title>{certification.title}</Card.Title>
                      <Card.Text>{certification.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default CertificationsPage;