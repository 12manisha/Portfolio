import React from 'react'
import Header from './Header'
import { Container, Row, Col, Image } from 'react-bootstrap';
import img from "./images/img4.png"
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import leetcode from './images/leetcode.svg'
import github from './images//github.svg'
import linkedin from './images/linkedin.svg'

const Portfolio = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <Header/>
      <Container >
        <Row style={{marginTop:'6rem', marginBottom:'7.3rem'}} >
        <Col md={6}>
          <Image style={{height:'100%'}} src={img} alt="Your Name" fluid />
        </Col>
        <Col md={6} >
        <h3>HI, I am</h3>
        <h1 style={{color:'#006266'}} >Manisha Joshi</h1>
        <p style={{color:'grey', fontSize:'20px', marginBottom:'1rem'}}> An aspiring Software Engineer passionate about ever-evolving tech world. I'm eager to contribute and learn through meaningful experiences, I am thrilled about the opportunities that lie ahead.</p>
        
        <div style={{marginTop:'4rem'}}>
          <a href='https://github.com/12manisha'> <Image style={{height:'2rem', marginRight:'2rem', width:'auto'}} src={github} /> </a>
          <a href='https://leetcode.com/12manisha/'><Image style={{height:'2rem', marginRight:'2rem', width:'auto'}} src={leetcode} /> </a>
          <a href='https://www.linkedin.com/in/12manisha/'><Image style={{height:'2rem', width:'auto'}} src={linkedin} /> </a>
        </div>
        
        </Col>
      </Row>
      <Skills/>
      <Experience/>
      <Project/>
      <Education/>
      <Contact/>
    </Container>
    
    </div>
  )
}

export default Portfolio