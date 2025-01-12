import React, { useState } from "react";
import { Row, Col, Card, Button, Pagination } from "react-bootstrap";
import { API_URL } from "../config";
import { MdAccessTime } from "react-icons/md";
import { FaUserPen } from "react-icons/fa6";

function BlogList({ posts }) {
  const [expandedPost, setExpandedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const togglePost = (id) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <>
      {currentPosts.map((post) => (
        <Row key={post.id}>
          <Col md={3}>
            <div className="m-2">
              <Card.Img
                variant="top"
                style={{ width: "300px", height: "200px" }}
                src={`${API_URL}${post.image}`}
              />
            </div>
          </Col>
          <Col md={9}>
            <div className="m-3">
              <Card.Body>
                <Card.Title>
                  {post.title}
                  <small style={{ marginLeft: "10px", fontSize: "11px" }}>
                    <MdAccessTime style={{ marginRight: "5px" }} />
                    {post.created_at}
                    <FaUserPen
                      style={{ marginRight: "5px", marginLeft: "5px" }}
                    />
                    {post.created_user.name}
                  </small>
                </Card.Title>
                <Card.Text>
                  {expandedPost === post.id
                    ? post.post
                    : `${post.post.slice(0, 100)}...`}
                </Card.Text>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => togglePost(post.id)}
                >
                  {expandedPost === post.id ? "Read Less" : "Read More"}
                </Button>
              </Card.Body>
            </div>
          </Col>
        </Row>
      ))}

      <div className="d-flex justify-content-center">
        <Pagination>
          <Pagination.Prev
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() =>
              currentPage < totalPages && paginate(currentPage + 1)
            }
          />
        </Pagination>
      </div>
    </>
  );
}

export default BlogList;
