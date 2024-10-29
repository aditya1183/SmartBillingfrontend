import React, { useState, useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
export async function adminloader() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (!user || user.role !== "admin") {
    return redirect("/");
  }

  return null;
}

function Admin() {
  const [usernames, setUsernames] = useState([]);
  const [selectedUsername, setSelectedUsername] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [getsingleuser, setsingleuser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/v1/user/getallusername")
      .then((response) => {
        const usernames = response.data.map((user) => user.username);
        setUsernames(usernames);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleUsernameChange = (event) => {
    setSelectedUsername(event.target.value);
  };

  const handlegetdetails = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8082/api/v1/user/getdetailsingleuser",
        { selectedUsername }
      );
      setsingleuser(res.data);
      setIsDisabled(false); // Reset disabled state when new details are fetched
    } catch (error) {
      console.log(error);
      setError("Failed to fetch user details. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisableDetails = () => {
    setsingleuser({});
    setIsDisabled(true); // Disable user details
  };

  return (
    <div className="container-fluid admin-container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          {/* <h1 className="text-center my-5 display-4 text-primary">
            Welcome,{" "}
            {"user" in localStorage && (
              <>
                <h2>{user.username}</h2>
              </>
            )}
          </h1> */}

          <div
            className="row mb-4"
            style={{
              display: "flex",

              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <div
              className="col-md-6 d-flex justify-content-around"
              style={{
                padding: "1rem",
                gap: "2vh",
                textAlign: "center",
              }}
            >
              <Link
                to="/admincustomers"
                className="btn btn-outline-primary btn-lg"
              >
                Customers
              </Link>
              <Link to="/addemploye" className="btn btn-outline-success btn-lg">
                Add Employee
              </Link>
              <Link
                to="/userlogininfo"
                className="btn btn-outline-success btn-lg"
              >
                Get Users Login Info
              </Link>
              <Link
                to={"https://smartydashboard.netlify.app/"}
                className="btn btn-outline-success btn-lg"
              >
                New Dashboard
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="card p-5 shadow-lg border-0 rounded">
                <h3 className="text-center mb-4 text-secondary">
                  Select a User
                </h3>
                <select
                  value={selectedUsername}
                  onChange={handleUsernameChange}
                  className="form-select mb-4"
                  disabled={isDisabled} // Disable when user details are disabled
                >
                  <option value="">Select a username</option>
                  {usernames.map((username) => (
                    <option key={username} value={username}>
                      {username}
                    </option>
                  ))}
                </select>

                <form onSubmit={handlegetdetails}>
                  <div className="input-group mb-4">
                    <input
                      type="text"
                      value={selectedUsername}
                      readOnly
                      className="form-control"
                      disabled={isDisabled} // Disable when user details are disabled
                    />

                    <button
                      type="submit"
                      className="btn btn-info btn-lg btn-block shadow-sm"
                      style={{
                        backgroundColor: "#17a2b8",
                        borderColor: "#17a2b8",
                        color: "#fff",
                        padding: "0.75rem 1.5rem",
                        fontSize: "1.25rem",
                        transition: "all 0.3s ease-in-out",
                        margin: "1rem",
                        borderRadius: "0",
                      }}
                    >
                      Get Details
                    </button>
                  </div>
                </form>

                <div>
                  {isLoading ? (
                    <div className="text-center mt-4">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      ></div>
                      <p className="mt-3 text-primary">
                        Fetching user details, please wait...
                      </p>
                    </div>
                  ) : error ? (
                    <div className="text-center mt-5 text-danger">
                      <p>Error: {error}</p>
                    </div>
                  ) : getsingleuser && Object.keys(getsingleuser).length > 0 ? (
                    <div
                      className={`admin-user-details mt-5 ${
                        isDisabled ? "text-muted" : ""
                      }`}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      <h4 className="text-center text-success mb-4">
                        User Details
                      </h4>
                      <p>
                        <strong>First Name:</strong> {getsingleuser.firstname}
                      </p>
                      <p>
                        <strong>Last Name:</strong> {getsingleuser.lastname}
                      </p>
                      <p>
                        <strong>Username:</strong> {getsingleuser.username}
                      </p>
                      <p>
                        <strong>Email:</strong> {getsingleuser.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {getsingleuser.phone}
                      </p>
                      <p>
                        <strong>Role:</strong> {getsingleuser.role}
                      </p>

                      <button
                        className="btn btn-success btn-lg mt-3 d-block mx-auto"
                        onClick={handleDisableDetails}
                        disabled={isDisabled} // Disable button after click
                      >
                        OK
                      </button>
                    </div>
                  ) : (
                    <div className="text-center mt-5">
                      <p>No user details found.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
