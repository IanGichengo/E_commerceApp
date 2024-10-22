// src/pages/ProductList.js
import React from 'react';
import './ProductList.css'; // Link your CSS file

const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h1>Our Products</h1>
      <div className="products">
        {products.map(product => (
          <div className="product" key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

