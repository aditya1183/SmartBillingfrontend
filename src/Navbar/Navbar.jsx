import React, { useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../Context/AuthContextprovider";
import { Button } from "bootstrap";
import "./Navbar.css";

const Navbar = () => {
  const { auth, setAuth } = useAuth();

  const handlelogout = () => {
    setAuth({});
    localStorage.removeItem("user");
    <Navigate to="/login" />;
    console.log(auth.email);
    return;
  };

  const [munuToggler, setmenutoggle] = useState(false);

  return (
    <div
      id="nav"
      style={{
        position: "relative",
      }}
    >
      <div
        className="navbar navbar-expand-md bg-light navbar-light"
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "x-large",
          position: "sticky",
          top: "0",
          zIndex: 999,
        }}
      >
        <div>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/"
          >
            SmartBill
          </Link>
        </div>

        <div>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            onClick={() => {
              {
                setmenutoggle(!munuToggler);
              }
            }}
            style={{
              outline: "unset",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={
              munuToggler
                ? " navbar-collapse justify-content-between navlink-container active"
                : " navbar-collapse justify-content-between navlink-container"
            }
            id="navbarCollapse"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="featuresection" className="nav-link">
                  Feature
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Overview" className="nav-link">
                  Sales Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/payment" className="nav-link">
                  Payment
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link">
                  Contact
                </Link>
              </li>
              {!auth.email && (
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
              )}
              {auth.email && (
                <>
                  <li className="nav-item">
                    <Link to="/setting" className="nav-link">
                      Profile
                    </Link>
                  </li>

                  <li className="nav-item">
                    <button
                      style={{
                        border: "none",
                        background: "transparent",
                        marginTop: ".5rem",
                      }}
                      onClick={handlelogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;





