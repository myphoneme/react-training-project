import React from 'react'
import {Container , Card ,Col ,Row} from "react-bootstrap"

function AboutMe() {
  return (
    <div>
        <Container>
        <Card className=' m-2 p-2 shadow = sm '>
          <Row>
            <Col md = {6} lg ={4}  >

          <Card.Title className='text-center'>
            About Me
          </Card.Title>
          <Card.Body>
            <p className='p-1 text-justify'>
            Software engineers design, develop, test, and maintain software app. They use eng. principles and programming languages to create software solutions for end users.
            Here are some things to know about software engineers.
            </p>
          </Card.Body>
          </Col>
          </Row>
        </Card>
      </Container>

    </div>
  )
}

export default AboutMe