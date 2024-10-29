import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactPage.css"; // Import custom CSS for additional styling

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission (You can integrate this with backend/API later)
    setTimeout(() => {
      setSuccessMessage("Thank you! Your message has been sent.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      {successMessage && (
        <div className="alert alert-success text-center">{successMessage}</div>
      )}

      <form
        onSubmit={handleSubmit}
        className="contact-form shadow-lg p-4 rounded bg-light"
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name .."
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email .. "
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Message ..."
            rows="5"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
