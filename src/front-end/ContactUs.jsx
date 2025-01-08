import React, { useContext } from "react";
import NavBar from "./NavBar";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaGlobe, FaClock } from "react-icons/fa";

const ContactUs = ({ toggle, setToggle }) => {
  // const { toggle, setToggle } = useContext(globalContext);
  return (
    <>
      <NavBar />
      {/* bg={toggle} style={{ color: toggle === "dark" ? "white" : "black" }} */}
      <div className="p-2">
        <Card className="p-1 shadow-sm">
          <Row>
            <Col md={6} className="border-end">
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  <h4>Contact Us</h4>
                </Card.Title>
                <Row>
                  <Col
                    md={6}
                    className="mb-3 p-5"
                    style={{
                      backgroundColor: "#f1f1f1aa",
                      border: "4px solid white",
                    }}
                  >
                    <div className="d-flex align-items-start">
                      <FaMapMarkerAlt className="me-2 text-primary" size={24} />
                      <div>
                        <h6>Address:</h6>
                        <p>Advant Navis Business Park, Sector 142, Noida</p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    md={6}
                    className="mb-3 p-5 "
                    style={{
                      backgroundColor: "#f1f1f1aa",
                      border: "4px solid white",
                    }}
                  >
                    <div className="d-flex align-items-start">
                      <FaEnvelope className="me-2 text-danger" size={24} />
                      <div>
                        <h6>Email:</h6>
                        <p>
                          <a href="mailto:Hr@myphoneme.com">Hr@myphoneme.com</a>
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col
                    md={6}
                    className="mb-3 p-5"
                    style={{
                      backgroundColor: "#f1f1f1aa",
                      border: "4px solid white",
                    }}
                  >
                    <div className="d-flex align-items-start">
                      <FaGlobe className="me-2 text-success" size={24} />
                      <div>
                        <h6>Website:</h6>
                        <p>
                          <a
                            href="https://myphoneme.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            myphoneme.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    md={6}
                    className="mb-3 p-5"
                    style={{
                      backgroundColor: "#f1f1f1aa",
                      border: "4px solid white",
                    }}
                  >
                    <div className="d-flex align-items-start">
                      <FaClock className="me-2 text-warning" size={24} />
                      <div>
                        <h6>Working Hours:</h6>
                        <p>9:00 AM to 6:00 PM</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Col>

            <Col md={6}>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  <h4>Our Location</h4>
                </Card.Title>
                <div style={{ height: "400px", width: "100%" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.1440755873832!2d77.40853998873534!3d28.50097705108534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce858fdc89639%3A0x35e14bd22bee2b6!2sAdvant%20Navis%20Business%20Park%2C%20Noida-Greater%20Noida%20Expy%2C%20Paras%20Tierea%2C%20Sector%20142%2C%20Noida%2C%20Uttar%20Pradesh%20201305!5e0!3m2!1sen!2sin!4v1735202738478!5m2!1sen!2sin"
                    width="100%"
                    height="400px"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default ContactUs;
