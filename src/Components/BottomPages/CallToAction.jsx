import React from 'react';
import './CallToAction.css'; // Import the CSS file

const CallToAction = () => {
  return (
    <div id="call-to-action">
      <div className="container">
        <h2>Call To Action</h2>
        <a className="btn" href="tel:+0123456789">Click Here To Call</a>
      </div>
      <img src="img/electric3.png" alt="Electric" />
    </div>
  );
};

export default CallToAction;
