// src/pages/ProductDetails.js
import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ match }) => {
  const productId = match.params.id;
  // Fetch product details based on productId

  return (
    <div className="product-details">
      <h1>Product {productId} Details</h1>
      {/* Add more details here */}
    </div>
  );
};

export default ProductDetails;

