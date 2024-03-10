import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import img from "./me.heic"
import Header from './Header';
import './Home.css'

const Home = () => {
    const brandStyle = {
        fontFamily: 'Roboto, sans-serif',
        fontStyle: 'normal'
      };
      
  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
    <Container>
        <Header/>
        <Row >
        <Col md={6}>
          <Image style={{height:'83%'}} src={img}alt="Your Name" fluid />
        </Col>
        <Col md={6} style={{ ...brandStyle, padding:'4rem 2rem'}}>
        <div className="intro-container">
        <h6 style={{ color: '#888' }}>Hi, I am</h6>
        <h1 style={{ fontWeight: '3rem', fontSize: '3.5rem', marginBottom:'1rem' }}>MANISHA JOSHI</h1>
        <p className="intro-text ">Aspiring software engineer driven to improve and contribute meaningfully to the tech industry through continuous learning and skill expansion.</p>
        <Button
          className="custom-button"
          variant="primary"
          href="https://drive.google.com/file/d/1hrdGKG8ntBgelxz6tq7tpTnaU6kKSNdC/view?usp=sharing"
          target="_blank"
        >
          Resume
        </Button>{' '}
        <Button
          className="custom-button"
          variant="secondary"
          href="/portfolio"
          target="_blank"
        >
          Portfolio
        </Button>
      </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Home;
