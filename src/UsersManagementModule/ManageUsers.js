import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDataFromLocalStorage, setDataToLocalStorage,removeDataFromLocalStorage } from "../Utils/StorageHelper";
import { Modal, Button } from 'react-bootstrap';

function ManageUsers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({ fullName: "", email: "" });
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    // Retrieve users from localStorage using storageHelper
    const storedUsers = getDataFromLocalStorage("users");
    setUsers(storedUsers);
    
    // Retrieve the logged-in user's email from localStorage using storageHelper
    const loggedInUserEmail = getDataFromLocalStorage("loggedInUser");
    setLoggedInUser(loggedInUserEmail);
  }, []);

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleDelete = (index) => {
    const userToDelete = users[index];
    if (userToDelete.email === loggedInUser) {
      // Show delete modal if trying to delete the logged-in user
      setShowDeleteModal(true);
      return;
    }

    // Filter out the user at the specified index
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    setDataToLocalStorage("users", updatedUsers);
  };

  const handleEdit = (index) => {
    // Set the user to be edited
    const userToEdit = users[index];
    setEditingUser(index);
    setEditForm({ fullName: userToEdit.fullName, email: userToEdit.email });
  };

  const handleEditChange = (e) => {
    // Update the edit form state as the user types
    const { name, value } = e.target;
    setEditForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Update the user details in the users state
    const updatedUsers = users.map((user, index) =>
      index === editingUser ? { ...user, ...editForm } : user
    );
    setUsers(updatedUsers);
    setDataToLocalStorage("users", updatedUsers);

    // If the logged-in user is being edited, show the modal to prompt for logout and re-login
    if (users[editingUser].email === loggedInUser) {
      setShowLogoutModal(true);
    } else {
      // Reset the editing state and form
      setEditingUser(null);
      setEditForm({ fullName: "", email: "" });
    }
  };

  const handleLogout = () => {
    // Remove the logged-in user's information from localStorage using storageHelper and navigate to the login page
    removeDataFromLocalStorage("loggedInUser");
    navigate("/home");
  };

  return (
    <div className="container-fluid">
      {/* Back Button */}
      <div className="mt-3">
        <button className="btn btn-secondary" onClick={goBack}>
          Back
        </button>
      </div>

      {/* Users Table */}
      <div className="container mt-4">
        <h2 className="fw-bold">Users</h2>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>User Email ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit User Form */}
      {editingUser !== null && (
        <div className="container mt-4">
          <h2 className="fw-bold">Edit User</h2>
          <form onSubmit={handleEditSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name:</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={editForm.fullName}
                onChange={handleEditChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={editForm.email}
                onChange={handleEditChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </form>
        </div>
      )}

      {/* Logout Modal */}
      <Modal show={showLogoutModal} onHide={() => {}} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Logout Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your information has been updated. You need to log out and log in again.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Action Not Allowed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You cannot delete the currently logged-in user.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowDeleteModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ManageUsers;