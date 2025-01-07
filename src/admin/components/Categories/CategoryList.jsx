import React, { useEffect, useState } from "react";
import CategoryForm from "../Categories/CategoryForm";
import AdminSidebar from "../AdminSidebar";
import AdminHeader from "../AdminHeader";
import { Container, Button, Modal } from "react-bootstrap";
import { getCategories } from "../../services/adminApi";
import CategoryTable from "./CategoryTable";
import AdminFooter from "../AdminFooter";

function CategoryList() {
  useEffect(() => {
    fetchCategory();
  }, []);

  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [ButtonName, setButtonName] = useState({
    name: "Add Category",
    variant: "success",
  });

  const fetchCategory = async () => {
    try {
      const response = await getCategories();
      setCategories(response);
    } catch (e) {
      console.error("error fetching categories", e);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleAddCategory = () => {
    setSelectedCategory(null);
    setShowModal(true);
    setButtonName({ name: "Add Category", variant: "success" });
  };

  const handelEdit = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
    setButtonName({ name: "Update Category", variant: "warning" });
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
            <h6>Category List</h6>
            <Button variant="success" size="sm" onClick={handleAddCategory}>
              Add Category
            </Button>
          </div>

          <CategoryTable
            categories={categories}
            fetchCategory={fetchCategory}
            onEdit={handelEdit}
          />

          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>
                {selectedCategory ? "Edit User" : "Add user"}
              </Modal.Title>
            </Modal.Header>
            <CategoryForm
              selectedCategory={selectedCategory}
              fetchCategory={fetchCategory}
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

export default CategoryList;
