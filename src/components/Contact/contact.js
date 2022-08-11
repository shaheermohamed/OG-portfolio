import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import './contact.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function contact() {
    const formRef = useRef()
 
  const handleSubmit = (e)=>{
    e.preventDefault()
    emailjs.sendForm('service_t7lwshu', 'template_ywrg3nl', formRef.current, 'Dn_82kyZYaJ6xW9Km')
    .then((result) => {
        console.log(result.text);
        alert("SUCCESS!");
      
    }, (error) => {
        console.log(error.text);
        alert("FAILED...", error);
    });
  }
  return (
    <section>
      {/* <Container fluid className="home-section" id="home">
        <Particle />
        {/* <Container className="home-content"> */}
          {/* {/* <Row> */}
             <Col md={7} style={{height:'100vh'}} className="home-header">  
              {/* <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MOHAMED SHAHEER</strong>
              </h1> */}
              {/* <div className='container'>
             <form ref={formRef} onSubmit={handleSubmit}>
          <input style={{backgroundColor:"white"}} type="text" placeholder="Name" name="user_name" />
          <input style={{backgroundColor: "white"}} type="text" placeholder="Subject" name="user_subject" />
          <input style={{backgroundColor: "white"}} type="text" placeholder="Email" name="user_email" />
          <textarea style={{backgroundColor:"white"}} rows="5" placeholder="Message" name="message" />
          <button>Submit</button>
         
        </form>
        </div> */}

        <Form ref={formRef} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="name" name="user_name" placeholder="Enter Name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Email address</Form.Label>
        <Form.Control type="email" name="user_email"  placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="subject" name="user_subject" placeholder="Enter subject" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Your Message</Form.Label>
        <Form.Control type="message"name="message" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>




      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  

              {/* <div style={{ padding: 50, textAlign: "left" }}>
                
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "800px" }}
              />*/}
            </Col> 
          {/*</Row>
        </Container>
      </Container>
       */}
    </section>
  )
}

export default contact