import React, { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContextprovider";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import "./Seetings.css"; // Create this file for custom styles
// import logoimage from "../Components/img/adminpageimg.png";
import logoimage from "../Components/img/seetingspageimg.png";



function Setting() {
  const navigate = useNavigate();
  const { auth, setuserdetail } = useAuth();
  const [userdata, setuserdata] = useState({});
  const email = auth?.email;
  const username = auth?.username;
  const user = JSON.parse(localStorage.getItem("user"));

  const getuserdetails = async () => {
    try {
      if (email || username) {
        const responce = await axios.post(
          "http://localhost:8082/api/v1/user/userdetails",
          { email, username },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const userdetails = responce.data;

        setuserdata(userdetails);
        setuserdetail(userdetails);
      } else {
        setuserdata({});
        return navigate("/");
      }
    } catch (error) {}
  };
  useEffect(() => {
    getuserdetails();
  }, [email]);

  return (
    <div className="settings-container container mt-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded shadow-sm">
        <div className="container-fluid">
          <div className="navbar-nav">
            <FaUserCircle className="icon-size me-2" />
            <Link to="/update-profile" className="nav-item nav-link">
              <div className="d-flex align-items-center">
                <IoSettingsSharp className="me-2" />
                Profile Update
              </div>
            </Link>
            <Link to="/change-password" className="nav-item nav-link">
              <div className="d-flex align-items-center">
                <MdOutlineSecurity className="me-2" />
                Change Password
              </div>
            </Link>
          </div>
        </div>
      </nav>

      <div className="profile-section mt-4 p-4 bg-white rounded shadow-sm">
        {userdata.role === "admin" && (
          <h2 className="text-primary mb-3" style={{ textAlign: "center" }}>
            Admin
          </h2>
        )}
        {userdata.role === "manager" && (
          <h2 className="text-success mb-3" style={{ textAlign: "center" }}>
            Manager
          </h2>
        )}

        <h3 className="mb-4" style={{ textAlign: "center" }}>
          Basic Profile
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            {userdata && (
              <div className="profile-details">
                <p>
                  <strong>First Name:</strong> {userdata.firstname}
                </p>
                <p>
                  <strong>Last Name:</strong> {userdata.lastname}
                </p>
                <p>
                  <strong>Username:</strong> {userdata.username}
                </p>
                <p>
                  <strong>Phone:</strong> {userdata.phone}
                </p>
                <p>
                  <strong>Email:</strong> {userdata.email}
                </p>
                <p>
                  <strong>Id:</strong> {userdata._id}
                </p>
              </div>
            )}
          </div>
          <div>
            <img
              src={logoimage}
              alt="logoimage"
              style={{
                height: "30vh",
                marginBottom: "2vh",
              }}
            />
          </div>
        </div>

        <Link
          to="/update-profile"
          className="btn btn-primary btn-block mt-4"
          data={userdata}
        >
          Update Profile
        </Link>

        {user && (
          <>
            {userdata.role === "admin" && (
              <>
                <Link
                  to="/admin"
                  className="btn btn-danger btn-block mt-3"
                  data={userdata}
                >
                  Admin Page
                </Link>
                <Link
                  to="/employee"
                  className="btn btn-info btn-block mt-3"
                  data={userdata}
                >
                  Manager Page
                </Link>
              </>
            )}
            {userdata.role === "manager" && (
              <Link
                to="/employee"
                className="btn btn-info btn-block mt-3"
                data={userdata}
              >
                Manager Page
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Setting;
