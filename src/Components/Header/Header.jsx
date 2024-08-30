import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css'; // Include the CSS file for additional styles
import productImage from '../img/electric1.png'; // Adjust the path as per your project structure

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="row align-items-center">
          {/* Mobile image (visible on small screens) */}
          <div className="col-md-6 d-md-none d-block">
            <div className="header-img">
              <img src={productImage} alt="Product" />
            </div>
          </div>

          {/* Content */}
          <div className="col-md-6">
            <div className="header-content">
              <h2>
                View the World in a New Light
                <br />
                Transform Your Online <span>Billing Experience</span>
              </h2>
              <a className="btn" href="#">
                Buy Now
              </a>
            </div>
          </div>

          {/* Desktop image (hidden on small screens) */}
          <div className="col-md-6 d-md-block d-none">
            <div className="header-img">
              <img src={productImage} alt="Product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
