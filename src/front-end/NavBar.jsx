import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { CiCloudMoon } from "react-icons/ci";
import { LuSunMedium } from "react-icons/lu";

const NavigationBar = ({ setTextColor, setToggle, toggle, textColor }) => {
  const location = useLocation();
  const handelToggleTheme = () => {
    setToggle(toggle == "dark" ? "light" : "dark");
    setTextColor(toggle == "dark" ? "text-dark" : "text-white");
    document.body.style.backgroundColor =
      toggle === "dark" ? "#333" : "#f8f9fa";
  };

  return (
    <Navbar bg={toggle} variant={toggle}>
      <Container>
        <Navbar.Brand href="/">My Blog</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            className={textColor}
            href="/about"
            active={location.pathname === "/about"}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="/contact"
            active={location.pathname === "/contact"}
            className={textColor}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Container>
      <Nav.Link onClick={handelToggleTheme} className={textColor}>
        {toggle == "dark" ? (
          <LuSunMedium style={{ fontSize: "30px", marginRight: "15px" }} />
        ) : (
          <CiCloudMoon style={{ fontSize: "30px", marginRight: "15px" }} />
        )}
      </Nav.Link>
    </Navbar>
  );
};

export default NavigationBar;
