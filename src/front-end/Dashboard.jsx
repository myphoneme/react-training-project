import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import BlogList from "./BlogList";
import Categories from "./Categories";
import RecentPost from "./RecentPost";
import {
  getCategories,
  getPosts,
  get_posts_by_category_id,
  getPostById,
} from "../admin/services/adminApi";
import { globalContext } from "./Context";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [recentPosts, setRecenetPosts] = useState([]);
  const { mode, setMode } = useContext(globalContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handelCategory = async (id) => {
    try {
      console.log("categoryidSeted = " + id);
      const post = await get_posts_by_category_id(id);
      setPosts(post);
      console.log(post);
    } catch (e) {
      console.log("Something Went Wrong " + e);
    }
  };

  const handelRecentPostEevent = async (id) => {
    try {
      const recentPost = await getPostById(id);
      setPosts([recentPost]);
      console.log([recentPost]);
    } catch (e) {
      console.log("Something went wrong " + e);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response);
    } catch (e) {
      console.log("Something Went Wrong " + e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
      setRecenetPosts(data.slice(-5));
    } catch (e) {
      console.log("Something Went Wrong " + e);
    }
  };

  return (
    <div>
      {/* {alert(mode)} */}
      <NavBar />
      <Container fluid className="mt-2">
        <Row>
          <Col md={10}>
            <Card
              className={
                mode ? "mb-4 bg-dark text-light" : "mb-4 bg-white text-dark"
              }
            >
              <BlogList posts={posts} />
            </Card>
          </Col>
          <Col md={2}>
            <Categories
              categories={categories}
              handelCategoryId={handelCategory}
            />
            <RecentPost
              posts={recentPosts}
              handelRecentPost={handelRecentPostEevent}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
