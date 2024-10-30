import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import './DashBoard.css'; // Make sure the CSS is imported

// Register the necessary Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const SalesCategory = ({ timeFrame }) => {
  const yearlyData = [30, 25, 20, 15, 10];
  const monthlyData = [40, 20, 15, 15, 10];

  const data = {
    labels: ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Other'],
    datasets: [
      {
        data: timeFrame === 'year' ? yearlyData : monthlyData,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="card chart">
      <h3>Sales by Category</h3>
      <Pie data={data} />
    </div>
  );
};

export default SalesCategory;