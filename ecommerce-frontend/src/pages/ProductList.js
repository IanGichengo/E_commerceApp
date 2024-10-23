// src/pages/ProductList.js
import React, { useState } from 'react';
import Filters from '../components/Filters';
import './ProductList.css';

const initialProducts = [
  { id: 1, name: 'Product 1', price: 10, category: 'electronics' },
  { id: 2, name: 'Product 2', price: 20, category: 'clothing' },
  { id: 3, name: 'Product 3', price: 30, category: 'accessories' },
];

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  const handleFilter = ({ category, priceRange }) => {
    let filtered = initialProducts;

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="product-list">
      <h1>Our Products</h1>
      <Filters onFilter={handleFilter} />
      <div className="products">
        {filteredProducts.map(product => (
          <div className="product" key={product.id}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the component
export default ProductList;

