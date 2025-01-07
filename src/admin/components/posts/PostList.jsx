import React, { useEffect, useState } from "react";
import PostForm from "./PostForm";
import AdminSidebar from "../AdminSidebar";
import AdminHeader from "../AdminHeader";
import { Container, Button, Modal } from "react-bootstrap";
import { getPosts } from "../../services/adminApi";
import PostTable from "./PostTable";
import AdminFooter from "../AdminFooter";
import "../../../style.css";

function PostList() {
  useEffect(() => {
    fetchPosts();
  }, []);

  const [posts, setposts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setselectedPost] = useState(null);
  const [ButtonName, setButtonName] = useState({
    name: "Add Post",
    variant: "success",
  });

  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      console.log(response);
      setposts(response);
    } catch (e) {
      console.error("error fetching posts", e);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleAddPost = () => {
    setselectedPost(null);
    setShowModal(true);
    setButtonName({ name: "Add Post", variant: "success" });
  };

  const handelEdit = (Post) => {
    setselectedPost([]);
    setselectedPost(Post);
    setShowModal(true);
    setButtonName({ name: "Update Post", variant: "warning" });
  };
  return (
    <div className="d-flex">
      <AdminSidebar />
      <div className="flex-grow-1">
        <AdminHeader />
        <Container className="m-4 pe-5">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              paddingBottom: "10px",
            }}
          >
            <h6>Post List</h6>
            <button className="btn btn-primary btn-sm" onClick={handleAddPost}>
              Add Post
            </button>
          </div>

          <PostTable posts={posts} fetchPost={fetchPosts} onEdit={handelEdit} />

          <Modal
            show={showModal}
            onHide={handleCloseModal}
            centered
            size="lg"
            className="p-5"
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <h6> {selectedPost ? "Edit Post" : "Add Post"} </h6>
              </Modal.Title>
            </Modal.Header>
            <PostForm
              selectedPost={selectedPost}
              fetchPost={fetchPosts}
              closeModel={handleCloseModal}
              ButtonName={ButtonName}
            />
          </Modal>
        </Container>
        <AdminFooter />
      </div>
    </div>
  );
}

export default PostList;
