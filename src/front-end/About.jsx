import React, { useContext } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import NavBar from "./NavBar";
import { globalContext } from "./Context";

function About() {
  const { mode } = useContext(globalContext);

  return (
    <>
      <NavBar />
      <Container
        fluid
        className={`about-page py-5 ${
          mode ? "bg-dark text-light" : "bg-light text-dark"
        }`}
      >
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <h3 className="mb-3">Who We Are -?</h3>
            <p>
              Founded by IITians, with the objective of making technologies
              friendly to human beings. The company’s main objective is to reach
              masses and especially in the developing nations where internet and
              literacy are the major challenges.
            </p>
            <p>
              For initial years, the main thrust is over Voice as it is the most
              widely used channel over the phone, and then over a period of
              time, these technologies will make roads even into Mobile Apps and
              embedded devices.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card
              className={`mb-4 ${
                mode ? "bg-secondary text-light" : "bg-white text-dark"
              }`}
            >
              <Card.Img
                variant="top"
                src="https://www.margaretbourne.com/wp-content/uploads/2022/08/Best-Stock-Photo-Sites-For-Bloggers-FT-1.jpg"
                alt="About Us"
              />
              <Card.Body>
                <Card.Title>Our Core Values</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item
                    className={`${mode ? "bg-secondary text-light" : ""}`}
                  >
                    💡 <b>Innovate:</b> Not just execute but do something new
                    which creates some standard in the industry.
                  </ListGroup.Item>
                  <ListGroup.Item
                    className={`${mode ? "bg-secondary text-light" : ""}`}
                  >
                    🤝 <b>Integrity:</b> The most precious value. Always do
                    things that are right and only right.
                  </ListGroup.Item>
                  <ListGroup.Item
                    className={`${mode ? "bg-secondary text-light" : ""}`}
                  >
                    📊 <b>Know the Facts:</b> Good data helps you make the right
                    decisions. Know before you decide.
                  </ListGroup.Item>
                  <ListGroup.Item
                    className={`${mode ? "bg-secondary text-light" : ""}`}
                  >
                    🎯 <b>Don’t work for salary:</b> Work on what makes you
                    happy. "You only live once, and if you work it right, one is
                    enough."
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
