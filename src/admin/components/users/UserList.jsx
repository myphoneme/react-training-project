import React, { useEffect, useState } from "react";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import { Button, Container, Modal, Row } from "react-bootstrap";
import { getUsers } from "../../services/adminApi";
import AdminHeader from "../AdminHeader";
import AdminFooter from "../AdminFooter";
import AdminSidebar from "../AdminSidebar";

function UserList() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleAddUser = () => {
    setSelectedUser(null);
    setShowModal(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <AdminHeader />
      <div className="d-flex flex-grow-1">
        <AdminSidebar />
        <div className="container-fluid m-4 pe-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">User Management</h5>
            <Button
              variant="primary"
              size="sm"
              onClick={handleAddUser}
              className="mb-3"
            >
              Add User
            </Button>
          </div>
          <UserTable
            users={users}
            fetchUsers={fetchUsers}
            onEdit={handleEditUser}
          />
          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>
                {selectedUser ? "Edit User" : "Add User"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UserForm
                selectedUser={selectedUser}
                fetchUsers={fetchUsers}
                closeModal={handleCloseModal}
              />
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <AdminFooter />
    </div>
  );
}

export default UserList;
