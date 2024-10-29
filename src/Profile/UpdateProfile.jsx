import React, { useState } from "react";
import { useAuth } from "../Context/AuthContextprovider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

function ProfileUpdate() {
  const { userdetail, auth, setuserdetail, setAuth } = useAuth();
  console.log(userdetail);

  const [firstname, setfirstname] = useState(userdetail.firstname);
  const [lastname, setlastname] = useState(userdetail.lastname);
  const [gmail, setgmail] = useState(userdetail.email);
  const [phone, setphone] = useState(userdetail.phone);
  const [username, setusername] = useState(userdetail.username);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const id = userdetail._id;
  const navigate = useNavigate();
  const emaill = auth?.email;
  const usernamee = auth?.username;

  const updateuserprofile = async (e) => {
    setIsLoading(true);
    setError("");
    e.preventDefault();

    try {
      if (emaill || usernamee) {
        const response = await axios.post(
          "http://localhost:8082/api/v1/user/updateuser",
          { firstname, lastname, phone, id },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          toast.info("Profile Updated Sucessfully ...")
          return navigate("/setting");
        }
      } else {
        setAuth({});
        return navigate("/");
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1
            style={{
              margin: "1rem",
            }}
          >
            {username.toUpperCase()}
          </h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <form
            onSubmit={updateuserprofile}
            className="border p-4 shadow rounded bg-light"
          >
            <h2 className="mb-4">Update Profile</h2>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                First Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                value={firstname}
                onChange={(event) => setfirstname(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Last Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                value={lastname}
                onChange={(event) => setlastname(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                UserName :
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                value={username}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Email :
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                value={gmail}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number:
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(event) => setphone(event.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdate;
