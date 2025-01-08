import React from "react";
import { ListGroup, Button } from "react-bootstrap";

function RecentPost({ posts, handelRecentPost , toggle, textColor  }) {
  return (
    <div>
      <div className="mb-4">
        <h6 className={textColor == "text-dark" ? "text-light" : "text-dark"}>Recent Posts</h6>
        <ListGroup as="ul">
          {posts.map((post, index) => (
            <ListGroup.Item
              as="li"
              className={
                toggle == "light" ? "bg-white text-dark" : "bg-dark text-light"
              }
              key={post.id}
            >
              <Button
                onClick={() => handelRecentPost(post.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "color 0.3s ease",
                }}
                className={
                  textColor == "text-dark"
                    ? " text-black fw-semibold"
                    : " text-light "
                }
              >
                {post.title}
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default RecentPost;
