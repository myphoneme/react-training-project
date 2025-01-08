import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { addCategories, updateCategories } from "../../services/adminApi";
import { useToast } from "../ToastContext";

function CategoryForm({
  selectedCategory,
  fetchCategory,
  closeModel,
  ButtonName,
}) {
  const [category, setCategory] = useState({ category_name: "" });
  const { showToast } = useToast();

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const { name, variant } = ButtonName;

  useEffect(() => {
    if (selectedCategory) {
      console.log(selectedCategory);
      setCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (category.id) {
        await updateCategories(category.id, category);
        closeModel();
        fetchCategory();
        showToast("Category Updated successfully", "warn");
      } else {
        const resp = await addCategories(category);
        closeModel();
        fetchCategory();
        showToast("Category Added Successfully", "success");
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit} className="m-4 mt-0">
        <Form.Group className="mb-3">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="text"
            name="category_name"
            value={category.category_name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant={variant} size="sm" type="submit">
          {name}
        </Button>
      </Form>
    </>
  );
}

export default CategoryForm;
