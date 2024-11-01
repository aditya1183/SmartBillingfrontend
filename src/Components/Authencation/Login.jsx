import { useState } from "react";
import "./LoginForm.css";

import {
  json,
  Link,
  redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "../../Context/AuthContextprovider";
import axios from "axios";
import { toast } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import { LOGIN_URL } from "../../constants";

export async function loginloader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return redirect("/");
  }

  return null;
}

function Login() {
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState("");
  const [email, Setemail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.post(
        LOGIN_URL,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      if (response.status == 200) {
        setAuth(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        const user = response.data.username;

        if (response.data.role === "admin") {
          toast.info(`Welcome back ${user} Admin`);
          return navigate("/setting");
        }
        if (response.data.role == "manager") {
          toast.info(`Welcome back ${user} Manager`);
          return navigate("/setting");
        } else {
          toast.info("Login Sucessfully");
          return navigate("/");
        }
      }
    } catch (error) {
      setError(error?.response?.data?.error || error.message);
      // toast.error(error?.response?.data?.error || error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm border rounded custom-card ">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center mb-4">
                Please Enter Your Credentials
              </h1>

              <div className="form-group mb-3">
                <label htmlFor="email">Email / Username </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email  / UserName "
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => Setemail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password ... "
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <p>
                  {" "}
                  Don't have an account?{" "}
                  <Link style={{ color: "blue" }} to="/signup">
                    {" "}
                    Signup
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link to="/forgottenpassword" style={{ color: "blue" }}>
                    Forgot Password
                  </Link>
                </p>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 custom-btn"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Login"}
              </button>
              {Error && <p className="text-danger text-center mt-3">{Error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
