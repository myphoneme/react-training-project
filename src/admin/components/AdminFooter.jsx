import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function AdminFooter() {
  return (
    <footer className="bg-dark text-white" style={{ marginTop: "auto" }}>
      <Container>
        <Row>
          <Col className="text-center py-3">
            © 2024 Admin Panel. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
