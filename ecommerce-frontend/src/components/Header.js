import React, { useState } from "react";
import "./Header.css";

function Header({ cartItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Kilimo Bora Organic Produce</div>
      <nav className={isMenuOpen ? "nav open" : "nav"}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "Close" : "Menu"}
      </button>
      <div className="cart">Cart: {cartItems}</div>
    </header>
  );
}

export default Header;

