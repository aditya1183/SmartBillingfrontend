import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Table,
  Accordion,
} from "react-bootstrap";
import "./UserLoginInfo.css"; // Import your CSS file

const UserLoginInfo = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/v1/user/getallusername")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const fetchUserDetails = () => {
    axios
      .post("http://localhost:8082/api/v1/user/loginhistory", {
        username: selectedUser,
      })
      .then((response) => setUserDetails(response.data))
      .catch((error) => console.error("Error fetching user details:", error));
  };

  const fetchAllUsers = () => {
    axios
      .get("http://localhost:8082/api/v1/user/geluserloginhistory")
      .then((response) => setAllUsers(response.data))
      .catch((error) =>
        console.error("Error fetching all user details:", error)
      );
  };

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-light sidebar">
          <h4 className="mt-4">Actions</h4>
          <Form.Group>
            <Form.Label>Select User</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              <option value="">Choose...</option>
              {users.map((user) => (
                <option key={user.email} value={user.email}>
                  {user.username}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button className="mt-3" variant="primary" onClick={fetchUserDetails}>
            Get Single User Login Info
          </Button>
          <Button className="mt-3" variant="secondary" onClick={fetchAllUsers}>
            Get All Users Login Info
          </Button>
        </Col>
        <Col md={10}>
          <h2 className="mt-4">User Login Information</h2>

          {/* Single User Info Table */}
          {userDetails && (
            <div className="table-container">
              <Table striped bordered hover className="mt-4">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Login Count</th>
                    <th>Login History</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{userDetails.email}</td>
                    <td>{userDetails.username}</td>
                    <td>{userDetails.firstname}</td>
                    <td>{userDetails.logincount}</td>
                    <td>
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            Show Login History
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul className="list-group">
                              {userDetails.loginhistory.map((login, index) => (
                                <li
                                  key={index}
                                  className="list-group-item shadow-sm p-3 mb-3 bg-white rounded"
                                >
                                  <div>
                                    <strong>Login Time:</strong>{" "}
                                    {new Date(login.loginTime).toLocaleString()}
                                  </div>
                                  <div>
                                    <strong>IP Address:</strong>{" "}
                                    {login.ipAddress}
                                  </div>
                                  <div>
                                    <strong>User Agent:</strong>{" "}
                                    {login.userAgent}
                                  </div>
                                  {login.createdat && (
                                    <div>
                                      <strong>Created At:</strong>{" "}
                                      {new Date(
                                        login.createdat
                                      ).toLocaleString()}
                                    </div>
                                  )}
                                  {login.updatedAt && (
                                    <div>
                                      <strong>Updated At:</strong>{" "}
                                      {new Date(
                                        login.updateAt
                                      ).toLocaleString()}
                                    </div>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          )}

          {/* All Users Info Table */}
          {allUsers.length > 0 && (
            <div className="table-container">
              <Table striped bordered hover className="mt-4">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Login Count</th>
                    <th>Login History</th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((user) => (
                    <tr key={user.email}>
                      <td>{user.email}</td>
                      <td>{user.username}</td>
                      <td>{user.firstname}</td>
                      <td>{user.loginCount}</td>
                      <td>
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              Show Login History
                            </Accordion.Header>
                            <Accordion.Body>
                              <ul className="list-group">
                                {user.loginHistory.map((login, index) => (
                                  <li
                                    key={index}
                                    className="list-group-item shadow-sm p-3 mb-3 bg-white rounded"
                                  >
                                    <h1>{login.createdat}</h1>
                                    {login.createdat && (
                                      <div>
                                        <strong>Created At:</strong>{" "}
                                        {new Date(
                                          login.createdat
                                        ).toLocaleString()}
                                      </div>
                                    )}
                                    {login.updatedAt && (
                                      <div>
                                        <strong>Updated At:</strong>{" "}
                                        {new Date(
                                          login.updatedAt
                                        ).toLocaleString()}
                                      </div>
                                    )}
                                    <div>
                                      <strong>Login Time:</strong>{" "}
                                      {new Date(
                                        login.loginTime
                                      ).toLocaleString()}
                                    </div>
                                    <div>
                                      <strong>IP Address:</strong>{" "}
                                      {login.ipAddress}
                                    </div>
                                    <div>
                                      <strong>User Agent:</strong>{" "}
                                      {login.userAgent}
                                    </div>
                                    {/* {login.createdat && (
                                      <div>
                                        <strong>Created At:</strong>{" "}
                                        <h1>{login.createdat}</h1>
                                    
                                        {new Date(
                                          login.createdat
                                        ).toLocaleString()}
                                      </div>
                                    )}
                                    {login.updatedAt && (
                                      <div>
                                        <strong>Updated At:</strong>{" "}
                                        {new Date(
                                          login.updateAt
                                        ).toLocaleString()}
                                      </div>
                                    )} */}
                                  </li>
                                ))}
                              </ul>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default UserLoginInfo;
