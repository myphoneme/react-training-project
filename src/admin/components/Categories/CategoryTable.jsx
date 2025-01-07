import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { deleteCategory } from "../../services/adminApi";
import { useToast } from "../ToastContext";
function CategoryTable({ categories, fetchCategory, onEdit }) {
  const { showToast } = useToast();
  const handleDelete = async (categoryId) => {
    if (window.confirm("Are you sure to delete this category ?")) {
      try {
        await deleteCategory(categoryId);
        fetchCategory();
        showToast("Category has been deleted successfully", "success");
      } catch (e) {
        console.log("something went wrong " + e);
      }
    }
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S No.</th>
          <th>Category Name</th>
          <th>Created at</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <tr key={category.id}>
            <td>{index + 1}</td>
            <td>{category.category_name}</td>
            <td>{category.created_at}</td>
            <td>
              <Button
                variant="primary"
                className="me-2"
                size="sm"
                onClick={() => onEdit(category)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(category.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CategoryTable;
