import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { addPosts, updatePosts } from "../../services/adminApi";
import { useToast } from "../ToastContext";
import "../../../style.css";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

function PostForm({ selectedPost, fetchPost, closeModel }) {
  const { showToast } = useToast();
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState({
    category_id: "",
    title: "",
    post: "",
    created_by: 1,
    image: null,
  });

  useEffect(() => {
    if (selectedPost) {
      setPosts(selectedPost);
    }
  }, [selectedPost]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://fastapi.phoneme.in/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setPosts({ ...posts, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category_id", posts.category_id);
    formData.append("title", posts.title);
    formData.append("post", posts.post);
    formData.append("created_by", posts.created_by);
    formData.append("image", posts.image);

    try {
      if (posts.id) {
        console.log(posts);
        formData.append("id", posts.id);
        const response = await fetch(
          `http://fastapi.phoneme.in/posts/${posts.id}`,
          {
            method: "PUT",
            body: formData,
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        showToast("Blog has been Update successfully", "success");
      } else {
        const response = await fetch("http://fastapi.phoneme.in/posts", {
          method: "POST",
          body: formData,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        showToast("Blog has been created successfully", "success");
      }
      closeModel();
      fetchPost();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleFileChange = (e) => {
    setPosts({ ...posts, image: e.target.files[0] });
  };

  return (
    <div className="m-3">
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Row className="mb-3">
          <Col xs={12} sm={6}>
            <Form.Group controlId="category">
              <Form.Label>
                <b>Category:</b>
              </Form.Label>
              <Form.Select
                size="sm"
                name="category_id"
                value={posts.category_id}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.category_name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} sm={6}>
            <Form.Group controlId="title">
              <Form.Label>
                <b>Post Title:</b>
              </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Enter Post Title"
                name="title"
                value={posts.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>
            <b>Post Description:</b>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            name="post"
            value={posts.post}
            onChange={handleChange}
            theme="snow"
            placeholder="Enter Post Description"
            required
          />

          {/* <ReactQuill
            className="custom-editor"
            name="post"
            value={posts.post}
            onChange={handleChange}
            theme="snow"
            placeholder="Enter Post Description"
            required
          /> */}
        </Form.Group>

        <Form.Group controlId="image" className="mb-3">
          <Form.Label>
            <b>Post Image:</b>
          </Form.Label>
          <Form.Control
            size="sm"
            type="file"
            name="image"
            onChange={handleFileChange}
            accept="image/*"
          />
        </Form.Group>

        <div className="text-center">
          <Button className="btn btn-success btn-sm" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default PostForm;
