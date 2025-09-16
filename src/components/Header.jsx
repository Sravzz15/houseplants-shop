import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header(){
  const total = useSelector(s => s.cart.totalQuantity);
  return (
    <header className="header">
      <div><Link to="/" className="logo">GreenHouse</Link></div>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart" style={{marginLeft:16}}>🛒 <span>{total}</span></Link>
      </nav>
    </header>
  );
}
