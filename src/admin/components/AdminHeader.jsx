import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function AdminHeader() {
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="ms-4">
          Admin Panel
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          <Nav.Link href="#settings">Settings</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AdminHeader;
