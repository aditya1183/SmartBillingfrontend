import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="settings-sidebar">
        <ul>
          <li>Account Settings</li>
          <li>Company Settings</li>
          <li>Change Password</li>
          <li>Notifications</li>
          <li>Invoice Templates</li>
          <li>List of Signature</li>
          <li>Invoice Settings</li>
          <li>Payment Settings</li>
          <li>Bank Settings</li>
          <li>Tax Rates</li>
          <li>Email Settings</li>
          <li>Preference Settings</li>
        </ul>
      </div>

      <div className="settings-content">
        <h2>Account Settings</h2>
        <div className="profile-picture-section">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile"
            className="profile-picture"
          />
          <button className="upload-btn">Upload new picture</button>
          <p>Profile Picture should be minimum 150 * 150. Supported file formats: JPG, PNG, JPEG.</p>
        </div>
        
        <form className="settings-form">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" value="Admin" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" value="Admin" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value="admin@dreamstechnologies.com" />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input type="text" value="1234567892" />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" value="2002-07-01" />
          </div>
          <div className="form-actions">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="save-btn">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;