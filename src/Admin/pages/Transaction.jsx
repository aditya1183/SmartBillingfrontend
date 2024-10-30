import React from 'react';
import './Transactions.css';

const TransactionPage = () => {
  return (
    <div className="transaction-page">
      <div className="transaction-row">
        <div>John Doe</div>
        <div>2024-09-06</div>
        <div>$150.00</div>
        <div>Savings Account</div>
        <div className="status completed">Completed</div>
        <div>
          <button className="details-button">Details</button>
        </div>
      </div>
      <div className="transaction-row">
        <div>Jane Smith</div>
        <div>2024-09-05</div>
        <div>$250.00</div>
        <div>Checking Account</div>
        <div className="status pending">Pending</div>
        <div>
          <button className="details-button">Details</button>
        </div>
      </div>
      <div className="transaction-row">
        <div>Mike Johnson</div>
        <div>2024-09-04</div>
        <div>$300.00</div>
        <div>Credit Account</div>
        <div className="status failed">Failed</div>
        <div>
          <button className="details-button">Details</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;