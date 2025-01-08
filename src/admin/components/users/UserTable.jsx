import React from "react";
import { Button, Table } from "react-bootstrap";
import { deleteUser } from "../../services/adminApi";
import { useToast } from "../ToastContext";

const UserTable = ({ users, fetchUsers, onEdit }) => {
  const { showToast } = useToast();
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        showToast("User deleted successfully!", "success");
        fetchUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
        showToast("Error deleting user:" + error, "error");
      }
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Button
                variant="primary"
                size="sm"
                className="me-2"
                onClick={() => onEdit(user)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
