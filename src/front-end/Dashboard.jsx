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
import { globalContex } from "./Context";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [recentPosts, setRecenetPosts] = useState([]);
  // const [toggle, setToggle] = useState("dark");
  const [textColor, setTextColor] = useState("text-light");
  const { toggle, setToggle } = useContext(globalContex);

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
      // console.log(response);
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
      // console.log(posts);
    } catch (e) {
      console.log("Something Went Wrong " + e);
    }
  };

  return (
    <div>
      <NavBar
        setTextColor={setTextColor}
        setToggle={setToggle}
        toggle={toggle}
        textColor={textColor}
      />
      <Container fluid className="mt-2">
        <Row>
          <Col md={10}>
            <Card
              className={
                toggle == "light"
                  ? "mb-4 bg-white text-dark"
                  : "mb-4 bg-dark text-light"
              }
            >
              <BlogList posts={posts} />
            </Card>
          </Col>
          <Col md={2}>
            <Categories
              categories={categories}
              handelCategoryId={handelCategory}
              toggle={toggle}
              textColor={textColor}
            />
            <RecentPost
              posts={recentPosts}
              handelRecentPost={handelRecentPostEevent}
              toggle={toggle}
              textColor={textColor}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
