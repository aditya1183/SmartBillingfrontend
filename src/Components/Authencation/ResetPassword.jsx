import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ResetPassword.css";
import axios from "axios";

function ResetPassword() {
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState("");

  const { id, token } = useParams();

  const validuser = async () => {
    const res = await fetch(
      `http://localhost:8082/api/v1/user/resetpassword/${id}/${token}`,

      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    if (data.status == 201) {
      console.log("valid user");
    } else {
      return navigate("*");
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setIsLoading(false);
    setError("");

    try {
      if (password !== confirmPassword) {
        setpassword("");
        setConfirmPassword("");

        return;
      } else {
        if (password === confirmPassword) {
          const res = await axios.post(
            `http://localhost:8082/api/v1/user/${id}/${token}`,
            { password },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (res.data.status == 201) {
            setpassword("");
            setConfirmPassword("");

            navigate("/login");
          } else {
          }
        }
      }
    } catch (error) {
      setError(error?.res?.data?.error || error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    validuser();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm border rounded custom-card">
            <h1 className="text-center mb-4">Reset Your Account Password</h1>
            <form onSubmit={handlesubmit}>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Your New Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Your New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 custom-btn"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Reset Password"}
              </button>
              {/* {message && <p className="text-success text-center mt-3">{message}</p>} */}
              {Error && <p className="text-danger text-center mt-3">{Error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
