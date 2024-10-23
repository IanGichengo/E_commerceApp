// src/components/Filters.js
import React, { useState } from 'react';
import './Filters.css';

const Filters = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleFilter = () => {
    onFilter({ category, priceRange });
  };

  return (
    <div className="filters">
      <h3>Filter Products</h3>
      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
      <div>
        <label>Price Range:</label>
        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
          <option value="">All</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
        </select>
      </div>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filters;

