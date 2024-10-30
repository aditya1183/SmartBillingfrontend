import React from 'react';
import './report.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const salesData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      data: [3000, 2500, 2800, 3200, 3000, 3500],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const Report = () => {
  return (
    <div className="report-container">
      <header className="report-header">
        <div className="logo">Company Logo</div>
        <h1 className="title">Sales Report</h1>
        <div className="profile">
          <span>User</span>
          <div className="dropdown-menu">
            <a href="#">Profile</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </header>
      <div className="summary-cards">
        <div className="card">
          <h2>Total Sales</h2>
          <p>$15,000</p>
          <span>Up by 10% from last month</span>
        </div>
        <div className="card">
          <h2>New Customers</h2>
          <p>200</p>
          <span>Up by 5% from last month</span>
        </div>
        {/* Add more cards as needed */}
      </div>
      <div className="charts-section">
        <Bar data={salesData} />
      </div>
      <footer className="report-footer">
        <p>© 2024 Company Name</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Report;
