import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './InventoryPage.css';

const storageCategories = ["Storage A", "Storage B", "Storage C", "Storage D", "Main Storage"];
const reorderCategories = ["Reorder", "In Stock"];
const discontinuedCategories = ["Yes", "No"];

const InventoryPage = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    id: '',
    name: '',
    unitPrice: '',
    stockLocation: '',
    quantityInStock: '',
    reorderInStock: 'Reorder',
    reorderLevel: '',
    reorderQuantity: '',
    discontinued: 'No',
    vendor: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? (value === 'Yes' ? 'Yes' : 'No') : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { 
      ...form, 
      unitPrice: parseFloat(form.unitPrice), 
      quantityInStock: parseInt(form.quantityInStock, 10), 
      reorderLevel: parseInt(form.reorderLevel, 10), 
      reorderQuantity: parseInt(form.reorderQuantity, 10) 
    };

    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(data => {
        setProducts([...products, data]);
        setForm({
          id: '',
          name: '',
          unitPrice: '',
          stockLocation: '',
          quantityInStock: '',
          reorderInStock: 'Reorder',
          reorderLevel: '',
          reorderQuantity: '',
          discontinued: 'No',
          vendor: '',
        });
      })
      .catch(error => console.error('Error adding product:', error));
  };

  return (
    <div className="inventory-container">
      <h1 className="page-title">Product Inventory</h1>
      <form onSubmit={handleSubmit} className="product-form">
        <h2 className="form-title">Add New Product</h2>
        
        {Object.keys(form).map((key) => {
          if (key === 'stockLocation') {
            return (
              <label key={key} className="form-label">
                Stock Location:
                <select name={key} value={form[key]} onChange={handleInputChange} className="form-select" required>
                  {storageCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </label>
            );
          }

          if (key === 'reorderInStock') {
            return (
              <label key={key} className="form-label">
                Reorder/Stock:
                <select name={key} value={form[key]} onChange={handleInputChange} className="form-select" required>
                  {reorderCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </label>
            );
          }

          if (key === 'discontinued') {
            return (
              <label key={key} className="form-label">
                Discontinued:
                <select name={key} value={form[key]} onChange={handleInputChange} className="form-select" required>
                  {discontinuedCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </label>
            );
          }

          return (
            <label key={key} className="form-label">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
              <input
                type={key === 'unitPrice' ? 'number' : 'text'}
                name={key}
                value={form[key]}
                onChange={handleInputChange}
                className="form-input"
                required={key !== 'reorderInStock' && key !== 'discontinued'}
              />
            </label>
          );
        })}
        
        <button type="submit" className="submit-button">Add Product</button>
      </form>

      {/* <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Stock Location</th>
            <th>Quantity in Stock</th>
            <th>Reorder/Stock</th>
            <th>Reorder Level</th>
            <th>Reorder Quantity</th>
            <th>Discontinued</th>
            <th>Vendor</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.unitPrice.toFixed(2)}</td>
                <td>{product.stockLocation}</td>
                <td>{product.quantityInStock}</td>
                <td>{product.reorderInStock}</td>
                <td>{product.reorderLevel}</td>
                <td>{product.reorderQuantity}</td>
                <td>{product.discontinued}</td>
                <td>{product.vendor}</td>
                <td>
                  <Link to={`/product/${product.id}`} className="details-link">View Details</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="11">No products available</td>
            </tr>
          )}
        </tbody>
      </table> */}
    </div>
  );
};

export default InventoryPage;
