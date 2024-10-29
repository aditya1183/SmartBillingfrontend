import React from "react";
import "./ContactBottom.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            {/* You can add a background image or any content here */}
          </div>
          <div className="col-md-6">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Interested in our product? Contact us today for more details!
              </p>
              <h3>
                <i className="fa fa-map-marker"></i>Chitkara University,
                Rajpura, Punjab
              </h3>
              <h3>
                <i className="fa fa-envelope"></i>smartbill@gmail.com
              </h3>
              <h3>
                <i className="fa fa-phone"></i>(+91) 1234567890
              </h3>
              <a className="btn" href="#">
                Contact Us
              </a>
              <div className="social">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
