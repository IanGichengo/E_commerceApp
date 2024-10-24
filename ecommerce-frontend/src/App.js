import React, { useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./App.css";
import { productData } from "./data";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <Header cartItems={cart.length} />
      <Welcome />
      <About />
      <Products products={productData} addToCart={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default App;

