import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button , Image} from 'react-bootstrap';
import img from "./images/img2.png"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ic4noeh', 'template_nijg8ee', form.current, {
        publicKey: 'sxuz6m86BcdLSRZk1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div style={{marginTop:'7.3rem'}} id='contactme'>
    <h1 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>CONTACT ME</h1>
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="formName" style={{marginBottom:'2rem'}}>
              <Form.Label style={{color:'#006266' , fontWeight:'bold'}} > <h4>Name</h4> </Form.Label>
              <Form.Control type="text" name="user_name" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" style={{marginBottom:'2rem'}}>
              <Form.Label style={{color:'#006266' , fontWeight:'bold'}}><h4>Email</h4></Form.Label>
              <Form.Control type="email" name="user_email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage" style={{marginBottom:'2rem'}}>
              <Form.Label style={{color:'#006266' , fontWeight:'bold'}}><h4>Message</h4></Form.Label>
              <Form.Control as="textarea" name="message" rows={3} placeholder="Enter your message" />
            </Form.Group>

            <Button style={{backgroundColor:'#006266' , width:'150px' }} type="submit">
              Send
            </Button>
          </Form>
        </Col>
        <Col md={6}>
         <Image style={{marginLeft:'50px'}} src={img} alt='contactme' />
        </Col>
      </Row>
    </Container>
    </div>

  );
};

export default Contact;
