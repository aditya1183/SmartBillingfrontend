import React, { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContextprovider";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { redirect, useNavigate, Link } from "react-router-dom";

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
    <div>
      {/* <nav>
        <Link to="/profileupdate">Profile Upadate</Link>
        <Link to="/changepassword">Change Password</Link>
      </nav> */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          width: "90%",
          margin: "2rem auto",
          fontWeight: "900",
        }}
      >
        <div className="container">
          <div className="navbar-nav">
            <FaUserCircle
              style={{
                fontSize: "30px",
                display: "flex",
                alignItems: "center",
                marginTop: ".5rem",
                marginRight: ".5rem",
              }}
            />
            <Link to="/update-profile" className="nav-item nav-link">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                  }}
                >
                  <IoSettingsSharp />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: ".5rem",
                  }}
                >
                  Profile Update
                </div>
              </div>
            </Link>
            <Link to="/change-password" className="nav-item nav-link">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                  }}
                >
                  <MdOutlineSecurity />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: ".5rem",
                  }}
                >
                  Change Password
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <div
        style={{
          width: "90%",
          margin: " 2rem auto",
        }}
      >
        {userdata.role == "admin" ? <h1>Admin</h1> : <></>}
        {userdata.role === "manager" ? <h1>Manager</h1> : <></>}
        <h1
          style={{
            marginBottom: "1rem",
          }}
        >
          Basic Profile
        </h1>

        {userdata && (
          <div
            style={{
              fontSize: "1.5rem",
            }}
          >
            <p>First Name : {userdata.firstname}</p>
            <p>Last Name : {userdata.lastname}</p>
            <p>User Name : {userdata.username}</p>
            <p>Phone : {userdata.phone}</p>
            <p> Email : {userdata.email}</p>
            <p>Id : {userdata._id}</p>
          </div>
        )}
        {/* <Link to="/profileupdate" className="btn btn-primary">
      Update
    </Link> */}

        <Link
          to="/update-profile"
          className="btn btn-primary btn-block"
          style={{
            padding: "1rem 3rem",
          }}
          data={userdata}
        >
          Update
        </Link>

        {"user" in localStorage && (
          <>
            {userdata.role === "admin" ? (
              <Link
                to="/admin"
                className="btn btn-primary btn-block"
                style={{
                  padding: "1rem 3rem",
                }}
                data={userdata}
              >
                Admin Page
              </Link>
            ) : (
              <></>
            )}
            {userdata.role === "manager" ? (
              <Link
                to="/employee"
                className="btn btn-primary btn-block"
                style={{
                  padding: "1rem 3rem",
                }}
                data={userdata}
              >
                Manager Page
              </Link>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Setting;
