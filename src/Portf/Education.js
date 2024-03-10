import React, { useState } from 'react'
import { Card, Row ,Col} from 'react-bootstrap';

const EducationCard = ({name, year, course, cgpa}) => {

  const [isHovered, setIsHovered] = useState(false)

  return(

    <Col md={6} style={{ marginBottom: '1.5rem' }}>
    <Card
    style={{
      width: '100%',
      border: `2.5px solid ${isHovered ? '#006266' : 'transparent'}`, 
      transition: 'border-color 0.5s ease',
      marginBottom:'1rem',
      paddingTop:'3rem',
      paddingBottom:'3rem',
      paddingLeft:'1rem'
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <Row>
        <Col md={8}>
            <h5 className="card-title" style={{color:'#006266', fontWeight:'bold'}} >{name}</h5>
            <p className="card-text">{course}</p>
        </Col>
        <Col className='text-right ml-auto'>
            <p >Year: {year}</p>
            <p > {cgpa}</p>
        </Col>
      </Row>

    </Card>
    </Col>

  )

}

const Education = () => {
  const EduDetails = [
    {
      name: "Saraswati Academy",
      course: "PCM",
      year: "2021",
      cgpa: "Percentage: 89.8%"
    },
    {
      name: "Banasthali Vidyapith",
      course: "BTech CSE",
      year : "2025",
      cgpa: "CGPA: 8.1"
    }
  ]
  return (
    <div style={{marginTop:'7.3rem'}} id='education'>
    <h1 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>EDUCATION</h1>
    <Row>
      {EduDetails.map((education, index) => (
        <EducationCard key={index }{...education} />
        ))}
    </Row>
    </div>
  )
}

export default Education