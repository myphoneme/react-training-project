import React, { useEffect, useState } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { FaUser, FaList, FaFileAlt } from "react-icons/fa";
import { getPosts, getCategories, getUsers } from "../services/adminApi";

const AdminDashboard = () => {
  const [postCount, setPostCount] = useState(null);
  const [categoryCount, setCategoryCount] = useState(null);
  const [userCount, setUserCount] = useState(null);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsData = await getPosts();
      setPostCount(postsData.length);
      console.log("posts ", postsData.length);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const userData = await getUsers();
      setUserCount(userData.length);
      console.log("posts ", userData.length);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const categoriesData = await getCategories();
      setCategoryCount(categoriesData.length);
      console.log("posts ", categoriesData.length);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  return (
    <Container className="mt-4">
      <Row className="g-4">
        <Col md={4}>
          <Card
            className="text-center shadow-lg border-0"
            style={{
              background:
                "linear-gradient(45deg,rgb(32, 29, 32),rgb(198, 164, 168))",
              color: "#fff",
            }}
          >
            <Card.Body>
              <FaUser size={50} className="mb-3" />
              <Card.Title>Users</Card.Title>
              <Card.Text style={{ fontSize: "24px", fontWeight: "bold" }}>
                {userCount}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="text-center shadow-lg border-0"
            style={{
              background: "linear-gradient(45deg, #5ee7df, #b490ca)",
              color: "#fff",
            }}
          >
            <Card.Body>
              <FaList size={50} className="mb-3" />
              <Card.Title>Categories</Card.Title>
              <Card.Text style={{ fontSize: "24px", fontWeight: "bold" }}>
                {categoryCount}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="text-center shadow-lg border-0"
            style={{
              background: "linear-gradient(45deg, #43cea2, #185a9d)",
              color: "#fff",
            }}
          >
            <Card.Body>
              <FaFileAlt size={50} className="mb-3" />
              <Card.Title>Posts</Card.Title>
              <Card.Text style={{ fontSize: "24px", fontWeight: "bold" }}>
              {postCount}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
