import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              &copy; Copyright <a href="#">SmartBill</a>. All Rights Reserved
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Project by <a href="#">Adarsh & Aditya</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
