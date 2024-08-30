import React from "react";
import "./Newsletter.css"; // Import the CSS file for additional styles
import billingImage from "../../Components/img/billingg.jpg"; // Adjust the path as per your project structure
import electricImage from "../../Components/img//electric.png"; // Adjust the path as per your project structure

const Newsletter = () => {
  return (
    <div
      id="newsletter"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(${billingImage})`,
      }}
    >
      <img src={electricImage} alt="Electric" />
      <div className="container">
        <h2>Go Digital Today!</h2>
        <form>
          <input type="email" placeholder="Email here" />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
