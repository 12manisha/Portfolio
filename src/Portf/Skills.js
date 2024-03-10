import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import html from "./images/html.png";
import css from "./images/css.png";
import react from "./images/reactjs.png";
import cplusplus from "./images/c.png";
import java from "./images/java.png";
import mysql from "./images/mysql.png";
import mongodb from "./images/mongodb.png";
import restapi from "./images/restapi.png"
import bootstrap from "./images/bootstrap.png";
const Skills = () => {
  return (
    <div id='skills'>
      <h1 style={{fontWeight:'bold' , textAlign:'center'}} >SKILLS</h1>

      <Row style={{ marginTop: '4rem' }}>
        <Col md={3}>
          <h2 style={{ color: '#006266' }}>Frontend :</h2>
        </Col>
        <Col>
        <Image style={{height:'4.5rem' , marginRight:'3rem' , width:'auto'}} src={html} alt="HTML" />
          <Image style={{height:'4.5rem' , marginRight:'3rem' , width:'auto'}} src={css} alt="CSS" />
          <Image style={{height:'4.5rem' , marginRight:'3rem' , width:'auto'}} src={react} alt="ReactJS" />
          <Image style={{height:'4.5rem' , marginRight:'3rem' , width:'auto'}} src={bootstrap} alt="bootstrap" />
        </Col>
      </Row>

      <Row style={{ marginTop: '3rem' }}>
        <Col md={3}>
          <h2 style={{ color: '#006266' }}>Backend :</h2>
        </Col>
        <Col>
        <Image style={{height:'5rem' , marginRight:'3rem' , width:'auto'}} src={cplusplus} alt="C++" />
          <Image style={{height:'5rem' , marginRight:'3rem' , width:'auto'}} src={java} alt="Java" />
          <Image style={{height:'5rem' , marginRight:'3rem' , width:'auto'}} src={restapi} alt="Restapi" />
        </Col>
      </Row>

      <Row style={{ marginTop: '3rem' , marginBottom:'7.3rem' }}>
        <Col md={3}>
          <h2 style={{ color: '#006266' }}>Database :</h2>
        </Col>
        <Col>
        <Image style={{height:'7rem' , marginRight:'3rem' , width:'auto'}} src={mysql} alt="MySQL" />
          <Image style={{height:'5rem' , marginRight:'3rem' , width:'auto'}} src={mongodb} alt="MongoDB" />
        </Col>
      </Row>

    </div>
  );
}

export default Skills;
