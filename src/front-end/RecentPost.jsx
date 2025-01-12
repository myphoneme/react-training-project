import React, { useContext } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { globalContext } from "./Context";

function RecentPost({ posts, handelRecentPost }) {
  const { mode, setMode } = useContext(globalContext);
  return (
    <div>
      <div className="mb-4">
        <h6 className={mode ? "text-dark" : "text-light"}>Recent Posts</h6>
        <ListGroup as="ul">
          {posts.map((post, index) => (
            <ListGroup.Item
              as="li"
              className={mode ? "bg-dark text-light" : "bg-white text-dark"}
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
                className={mode ?  " text-light " :" text-black fw-semibold"}
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
