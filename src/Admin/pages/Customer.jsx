import React from 'react';
import './Customer.css';

const CustomerPage = () => {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@gmail.com', phone: '1234567890', createdOn: '30-08-2024', balance: '₹500.00' },
    { id: 2, name: 'Jane Doe', email: 'jane@xx.com', phone: '9876543210', createdOn: '22-08-2024', balance: '₹999.00' },
    { id: 3, name: 'Alice Smith', email: 'alice@gmail.com', phone: '9600789100', createdOn: '22-08-2024', balance: '₹9,500.00' },
    { id: 4, name: 'Bob Brown', email: 'bob@gmail.com', phone: '6298590276', createdOn: '06-08-2024', balance: '₹17,000.00' },
    { id: 5, name: 'Charlie Green', email: 'charlie@gmail.com', phone: '8754324667', createdOn: '05-07-2024', balance: '₹1,00,000.00' },
    { id: 6, name: 'David Blue', email: 'david@gmail.com', phone: '8067757344', createdOn: '13-06-2024', balance: '₹35,767.00' },
    { id: 7, name: 'Eve Black', email: 'eve@kanakku.com', phone: '3232323232', createdOn: '25-12-2023', balance: '₹50,000.00' },
  ];

  return (
    <div className="customer-page">
      <h2>Customers</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Created On</th>
            <th>Closing Balance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td>{index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.createdOn}</td>
              <td>{customer.balance}</td>
              <td>
                <button className="ledger-btn">Ledger</button>
                {/* Add more actions as needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>Previous</button>
        <span>1</span>
        <button>Next</button>
      </div>
    </div>
  );
};

export default CustomerPage;