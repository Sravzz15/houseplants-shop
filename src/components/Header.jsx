import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const total = useSelector(s => s.cart.totalQuantity);

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">GreenHouse</Link>
      </div>
      <nav className="header-right">
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">🛒 <span className="cart-count">{total}</span></Link>
      </nav>
    </header>
  );
}
