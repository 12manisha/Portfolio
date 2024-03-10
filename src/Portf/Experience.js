import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap';


const ExperienceCard = ({ name, time,about}) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <Col md={12} style={{ marginBottom: '1.5rem' }}>
        <Card
          style={{
            width: '100%',
            padding:' 20px',
            border: `4px solid ${isHovered ? '#006266' : 'transparent'}`, 
            transition: 'border-color 0.5s ease',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Row>
    <Col md={10}>
        <h5 style={{ color: '#006266', fontWeight: 'bold' }}>{name}</h5>
    </Col>
    <Col>
        <p>{time}</p>
    </Col>
</Row>
<Row>
    <Col>
        <p>{about}</p>
    </Col>
</Row>

        </Card>
      </Col>
    );
  };
  

const Experience = () => {

    const ExperienceDetails = [
        {
            name: 'Upcoming SWE Intern VISA',
            time: 'May 2024 - July2024',
            about: 'I am thrilled to share that I have been selected for an upcoming Software Developer Internship at Visa. This internship presents an exciting opportunity to contribute to meaningful projects and gain valuable experience in the field of software development at Visa.'
        },
        {
            name: 'NOQs',
            time: 'July 2023',
            about: 'Completed a one-month web development internship, gaining practical experience in building responsive and dynamic websites. Collaborating with a diverse team, I enhanced my skills in Excel and related AI tools and received Intern of the month award'
        }
    ]

  return (
    <div id='experience' style={{marginBottom:'7.3rem'}} >
        <h1 style={{fontWeight:'bold' , textAlign:'center', marginBottom:'3rem'}} >Experience</h1>
        <Row>
        {ExperienceDetails.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </Row>
    </div>
  )
}

export default Experience