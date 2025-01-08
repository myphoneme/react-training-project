import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { deletePost } from "../../services/adminApi";
import { useToast } from "../ToastContext";
import { MdDelete } from "react-icons/md";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import { FaRegEdit } from "react-icons/fa";
DataTable.use(DT);

function PostTable({ posts, fetchPost, onEdit }) {
  const { showToast } = useToast();
  const [categories, setCategories] = useState([]);
  const [fullPost, setFullPost] = useState(null);

  const handleDelete = async (postId) => {
    if (window.confirm("Are you sure to delete this post?")) {
      try {
        await deletePost(postId);
        fetchPost();
        showToast("Post has been deleted successfully", "success");
      } catch (e) {
        console.error("Something went wrong: " + e);
      }
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://fastapi.phoneme.in/categories");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const changePost = (id) => {
    setFullPost(fullPost === id ? null : id);
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.category_name : "Unknown Category";
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S No.</th>
          <th>Category</th>
          <th>Title</th>
          <th>Post</th>
          <th>Image</th>
          <th>Created_at</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={post.id}>
            <td>{index + 1}</td>
            <td>{getCategoryName(post.category_id)}</td>
            <td>{post.title}</td>
            <td>
              {post.id === fullPost ? post.post : post.post.slice(0, 100)}...
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  changePost(post.id);
                }}
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {fullPost === post.id ? "less" : "more"}
              </a>
            </td>

            <td>
              <img
                src={`http://fastapi.phoneme.in/${post.image}`}
                alt={post.image}
                style={{ width: "100px", height: "auto" }}
              />
            </td>

            <td>{post.created_at}</td>
            <td className="d-flex">
              <Button
                variant="primary"
                className="me-2"
                size="sm"
                onClick={() => onEdit(post)}
              >
                <FaRegEdit />
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(post.id)}
              >
                <MdDelete />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PostTable;
