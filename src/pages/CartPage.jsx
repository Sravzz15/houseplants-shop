import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { items, totalQuantity, totalCost } = useSelector(s => s.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <p>Total items: {totalQuantity}</p>
      <p>Total cost: ${totalCost.toFixed(2)}</p>

      {items.length === 0 && <p>Your cart is empty. <Link to="/products">Continue shopping</Link></p>}

      <div>
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-thumb" />
            <div className="cart-info">
              <h4>{item.name}</h4>
              <p>Unit price: ${item.price.toFixed(2)}</p>
              <div className="qty-controls">
                <button onClick={() => dispatch(decrement(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increment(item.id))}>+</button>
              </div>
              <button className="delete" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <button onClick={() => alert('Coming Soon')}>Checkout</button>
        <Link to="/products"><button>Continue Shopping</button></Link>
      </div>
    </div>
  );
}
