import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ title, subtitle, text, link1, link2, githubLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Col md={4} style={{ marginBottom: '1.5rem' }}>
      <Card
        style={{
          width: '100%',
          height: '290px',
          border: `4px solid ${isHovered ? 'white' : 'transparent'}`, 
          transition: 'border-color 0.5s ease',
          backgroundColor: '#006266',
          color: 'grey'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon style={{ color: '#006266' }} icon={faGithub} size="lg" />
          </a>
        </div>
        <Card.Body>
          <Card.Title 
          style={{ color: 'white', fontWeight:` ${isHovered ? 'bold' : ''}` }}>{title}</Card.Title>
          <Card.Subtitle style={{color:'#E5E1DA'}} className="mb-2 ">{subtitle}</Card.Subtitle>
          <Card.Text style={{color:'#E3F4F4'}} >{text}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};


const Project = () => {
  const projectDetails = [
    {
      title: 'Momsy',
      subtitle: 'HTML | CSS | React | MongoDB',
      text:'It aims to empower Indian moms by transforming their home kitchens into virtual hubs. Recognizing the yearning for traditional home-cooked food among individuals living far from home, our platform serves as a bridge, allowing Indian moms to connect with those seeking the comfort of homemade dishes',
      githubLink: 'https://github.com/12manisha/Momsy',
    },
    {
      title: 'Furry Tales',
      subtitle: 'HTML | CSS | React | MongoDB',
      text: ' Designed and developed a dynamic Pet Adoption Website connecting users with adoptable pets. Demonstrated proficiency in front-end and back-end technologies, showcasing a commitment to impactful application development ',
      githubLink: 'https://github.com/12manisha/FurryTales',
    },
    {
      title: 'University Management System',
      subtitle: 'Java | MySQL',
      text: 'The University Management System, built with Java and MySQL, simplifies administrative tasks like student enrollment and course management. This user-friendly solution enhances efficiency, ensuring smooth academic processes within the university.',
      githubLink: 'https://github.com/12manisha/UniversityManagementSystem',
    },
    {
      title: 'Breast Cancer Detection',
      subtitle: 'Logistic Regression',
      text: 'Breast cancer prediction is a statistical modeling approach that estimates the probability of an individual having breast cancer based on various input features. The logistic regression model classifies individuals into positive or negative outcomes, aiding in early detection and intervention.',
      githubLink: 'https://github.com/12manisha/breast_cancer_prediction',
    },
    {
      title: 'Image Classifier',
      subtitle: 'CNN',
      text: 'The CNN project uses Convolutional Neural Networks to classify images of dogs and cats. It involves dataset preparation, CNN architecture design, training, and deployment for intelligent image differentiation.      ',
      githubLink: 'https://github.com/12manisha/convolutional_neural_network',
    }
  ];

  return (
    <div id='projects'>
      <h1  style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>PROJECTS</h1>
      <Row>
        {projectDetails.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Row>
    </div>
  );
};

export default Project;
