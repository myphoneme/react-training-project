import React, { useState, useEffect, useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useLocation, NavLink } from "react-router-dom";
import { CiCloudMoon } from "react-icons/ci";
import { LuSunMedium } from "react-icons/lu";
import { globalContext } from "./Context";

const NavigationBar = () => {
  const location = useLocation();
  const { mode, setMode } = useContext(globalContext);

  const handelToggleTheme = () => {
    setMode(!mode);
    document.body.style.backgroundColor = mode ? "#212529" : "#f8f9fa";
  };

  return (
    <Navbar bg={mode ? "dark" : "light"} variant={mode ? "dark" : "light"}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          My Blog
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            as={NavLink}
            to="/about"
            className={mode ? "text-white" : "text-dark"}
            active={location.pathname === "/about"}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={mode ? "text-white" : "text-dark"}
            active={location.pathname === "/contact"}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Container>
      <Nav.Link
        onClick={handelToggleTheme}
        className={mode ? "text-white" : "text-dark"}
      >
        {mode ? (
          <LuSunMedium style={{ fontSize: "30px", marginRight: "15px" }} />
        ) : (
          <CiCloudMoon style={{ fontSize: "30px", marginRight: "15px" }} />
        )}
      </Nav.Link>
    </Navbar>
  );
};

export default NavigationBar;
