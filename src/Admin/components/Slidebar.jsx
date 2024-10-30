// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Slidebar.css';
import { FaTachometerAlt, FaBox, FaListUl, FaFileAlt, FaExchangeAlt, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="icon">
          <FaTachometerAlt />
        </div>
        <div className="text">Ltd.</div>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/admin/dashboard">
              <div className="icon"><FaTachometerAlt /></div>
              <div className="text">Dashboard</div>
            </Link>
          </li>
          <li>
            <Link to="/admin/products">
              <div className="icon"><FaBox /></div>
              <div className="text">Products</div>
            </Link>
          </li>
          <li>
            <Link to="/admin/invenroty">
              <div className="icon"><FaListUl /></div>
              <div className="text">Inventory</div>
            </Link>
          </li>
          <li>
            <Link to="/admin/report">
              <div className="icon"><FaFileAlt /></div>
              <div className="text">Report</div>
            </Link>
          </li>
          <li>
            <Link to="/admin/transaction">
              <div className="icon"><FaExchangeAlt /></div>
              <div className="text">Transaction</div>
            </Link>
          </li>
          <li>
            <Link to="/admin/customer">
              <div className="icon"><FaUser /></div>
              <div className="text">Customer</div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <Link to="/admin/seetings">
              <div className="icon"><FaCog /></div>
              <div className="text">Settings</div>
            </Link>
          </li>
          <li>
            <a href="/login" target="_blank" rel="noopener noreferrer">
              <div className="icon"><FaSignOutAlt /></div>
              <div className="text">Logout</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
