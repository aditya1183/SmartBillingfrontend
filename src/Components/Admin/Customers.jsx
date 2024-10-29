import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "./Customers.css"; // Import your custom CSS file
import { toast } from "react-toastify";

function Customers() {
  const [userdata, setuserdata] = useState([]);
  const [adminUsers, setAdminUsers] = useState([]);
  const [managerUsers, setManagerUsers] = useState([]);
  const [userUsers, setUserUsers] = useState([]);
  const [show, setShow] = useState(false); // For modal visibility
  const [userToDelete, setUserToDelete] = useState(null); // User ID to delete

  const fetchallusers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8082/api/v1/user/customers",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const userdetails = response.data;
      console.log(userdetails);
      setuserdata(userdetails);

      const adminUsersData = userdetails.filter(
        (user) => user.role === "admin"
      );
      setAdminUsers(adminUsersData);

      const managerUsersData = userdetails.filter(
        (user) => user.role === "manager"
      );
      setManagerUsers(managerUsersData);

      const userUsersData = userdetails.filter((user) => user.role === "user");
      setUserUsers(userUsersData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = (id) => {
    setUserToDelete(id);
    
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:8082/api/v1/user/customers/${userToDelete}`
      );
      fetchallusers();

      toast.info("User deleted successfully");
      setShow(false); 
   
    } catch (error) { 
      console.log(error);
      alert("Failed to delete user"); // Show error message
    }
  };

  useEffect(() => {
    fetchallusers();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 mb-4 bg-white rounded">
        <h1 className="text-center text-primary mb-4">Admins</h1>
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {adminUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>{user.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card shadow-lg p-4 mb-4 bg-white rounded">
        <h1 className="text-center text-primary mb-4">Managers</h1>
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Username</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {managerUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>{user.username}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteClick(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card shadow-lg p-4 mb-4 bg-white rounded">
        <h1 className="text-center text-primary mb-4">Users</h1>
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Username</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>{user.username}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteClick(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Customers;
