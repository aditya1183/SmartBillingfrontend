import React, { useState } from 'react';
import RevenueStats from './RevenueStats';
import SalesCategory from './SalesCategory';
import './DashBoard.css'; // Import the CSS file

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState('year'); // State for toggling between year/month

  return (
    <div className="dashboard">
      {/* Upper part */}
      <div className="metrics">
        <div className="card visitor">
          <h3>Visitor</h3>
          <h1>1,234</h1>
          <p>+18% +2.8k this week</p>
        </div>
        <div className="card sales">
          <h3>Total Sales</h3>
          <h1>890</h1>
          <p>+18% +3.8k this week</p>
        </div>
        <div className="card orders">
          <h3>Total Orders</h3>
          <h1>567</h1>
          <p>+18% +7.8k this week</p>
        </div>
        <div className="card returned">
          <h3>Returned</h3>
          <h1>123</h1>
          <p>+18% +1.2k this week</p>
        </div>
      </div>

      {/* Lower part */}
      <div className="charts">
        <div className="chart-container">
          {/* Time Frame Filter */}
          <div className="time-frame-filter">
            <button
              className={timeFrame === 'year' ? 'active' : ''}
              onClick={() => setTimeFrame('year')}
            >
              This Year
            </button>
            <button
              className={timeFrame === 'month' ? 'active' : ''}
              onClick={() => setTimeFrame('month')}
            >
              This Month
            </button>
          </div>
          <RevenueStats timeFrame={timeFrame} />
        </div>
        <div className="chart-container">
          <div className="time-frame-filter">
            <button
              className={timeFrame === 'year' ? 'active' : ''}
              onClick={() => setTimeFrame('year')}
            >
              This Year
            </button>
            <button
              className={timeFrame === 'month' ? 'active' : ''}
              onClick={() => setTimeFrame('month')}
            >
              This Month
            </button>
          </div>
          <SalesCategory timeFrame={timeFrame} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;