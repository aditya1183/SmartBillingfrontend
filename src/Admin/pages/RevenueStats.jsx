import React from 'react';
import { Line } from 'react-chartjs-2';
import './DashBoard.css'; // Make sure the CSS is imported

const RevenueStats = ({ timeFrame }) => {
  // Define data based on the timeFrame
  const yearlyData = [30, 50, 70, 90, 110, 130, 150, 180, 200, 220, 230, 250];
  const monthlyData = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

  const data = {
    labels: timeFrame === 'year' 
      ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      : ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Revenue',
        data: timeFrame === 'year' ? yearlyData : monthlyData,
        fill: false,
        backgroundColor: '#42a5f5',
        borderColor: '#42a5f5',
      },
    ],
  };

  return (
    <div className="card chart">
      <h3>Revenue Stats</h3>
      <Line data={data} />
    </div>
  );
};

export default RevenueStats;