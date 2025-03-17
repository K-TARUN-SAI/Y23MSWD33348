import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Table, Form, Modal } from "react-bootstrap";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers();
  };

  const handleShow = (user = null) => {
    if (user) {
      setEditId(user._id);
      setFormData({ name: user.name, email: user.email, role: user.role });
    } else {
      setEditId(null);
      setFormData({ name: "", email: "", role: "" });
    }
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`http://localhost:5000/api/users/${editId}`, formData);
    } else {
      await axios.post("http://localhost:5000/api/users", formData);
    }
    handleClose();
    fetchUsers();
  };

  return (
    <div className="container mt-4">
      <Card>
        <Card.Header>
          <h3>Users Management</h3>
          <Button variant="primary" onClick={() => handleShow()}>Add User</Button>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <Button variant="warning" size="sm" onClick={() => handleShow(user)}>Edit</Button>
                    <Button variant="danger" size="sm" className="ms-2" onClick={() => handleDelete(user._id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editId ? "Edit User" : "Add User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} required />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">{editId ? "Update" : "Create"}</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Users;
