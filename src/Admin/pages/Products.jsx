import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product data from the json-server
    fetch(`http://localhost:3000/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Product data:', data); // Log the data for debugging
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-container">
      <h1>{product.name}</h1>
      <p><strong>ID:</strong> {product.id}</p>
      <p><strong>Unit Price:</strong> ${product.unitPrice.toFixed(2)}</p>
      <p><strong>Stock Location:</strong> {product.stockLocation}</p>
      <p><strong>Quantity in Stock:</strong> {product.quantityInStock}</p>
      <p><strong>Reorder/Instock:</strong> {product.reorderInStock}</p>
      <p><strong>Reorder Level:</strong> {product.reorderLevel}</p>
      <p><strong>Reorder Quantity:</strong> {product.reorderQuantity}</p>
      <p><strong>Discontinued:</strong> {product.discontinued}</p>
      <p><strong>Vendor:</strong> {product.vendor}</p>
    </div>
  );
};

export default ProductPage;
