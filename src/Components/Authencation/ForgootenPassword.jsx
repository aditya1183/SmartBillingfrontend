import React from "react";
import { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

function ForgottenPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8082/api/v1/user/forgot-password",
        { email }
      );
      console.log(response);

      if (response.data.status === 201) {
        setEmail("");
        setError(response.data.message);
      }
    } catch (error) {
      setEmail("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div
            className="card p-4 shadow-sm border rounded "
            style={{
              border: "1px solid #ddd",
              borderradius: "8px",
              boxshadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 className="text-center mb-4">Forgotten Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 "
                style={{
                  backgroundcolor: "#007bff",
                  border: "none",
                  fontsize: "1.25rem",
                  fontweight: "bold",
                  transition: "background-color 0.3s, transform 0.3s",
                }}
                disabled={isloading}
              >
                {isloading ? "Submitting..." : "Reset Password"}
              </button>
            </form>
            {message && (
              <p className="text-success text-center mt-3">{message}</p>
            )}
            {error && <p className="text-danger text-center mt-3">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgottenPassword;
