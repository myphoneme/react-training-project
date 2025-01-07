import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { addUser, updateUser } from "../../services/adminApi";
import { useToast } from "../ToastContext";

function UserForm({ selectedUser, fetchUsers, closeModal }) {
  const { showToast } = useToast();
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.id) {
        await updateUser(user.id, user);
        showToast("User Updated successfully!", "success");
      } else {
        await addUser(user);
        showToast("User Added successfully!", "success");
      }

      fetchUsers();
      closeModal();
      setUser({ name: "", email: "", password: "" });
    } catch (error) {
      console.error("Error saving user:", error);
      showToast("Something went wrong! " + error, "error");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Save
        </Button>
      </Form>
    </>
  );
}

export default UserForm;
