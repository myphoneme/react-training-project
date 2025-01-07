import React, { useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { login } from "../services/adminApi";
import { API_URL } from "../../config";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: loginData.email,
          password: loginData.password,
        }),
      })

        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Response Data:", data);
          if (data.access_token) {
            localStorage.setItem("accessToken", data.access_token);
            window.location.href = "/dashboard";
          } else {
            console.error("Token not found in response");
          }
        })
        .catch((error) => {
          console.error("Error during fetch:", error);
        });
    } catch (e) {
      console.log("Something Went Wrong " + e);
    }

    console.log(loginData);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "gray",
          background:
            "linear-gradient(to right,rgb(1, 1, 1),rgb(219, 224, 234))",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Row
            style={{ height: "95vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Col xs={12} sm={6} lg={3}>
              <Card variant="center" className="mb-3 p-4 shadow">
                <Card.Title className="text-center">Login</Card.Title>
                <Form.Group controlId="email">
                  <Form.Label> Email </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    size="sm"
                    onChange={handleInputChange}
                    required
                    aria-label="Email Address"
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    size="sm"
                    onChange={handleInputChange}
                    required
                    aria-label="Password"
                  />
                </Form.Group>
                <Form.Group controlId="submit">
                  <Button type="submit" className="btn btn-primary btn-sm mt-3">
                    Login
                  </Button>
                </Form.Group>
              </Card>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
