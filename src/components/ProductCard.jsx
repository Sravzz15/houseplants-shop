import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

export default function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector(s => s.cart.items.some(i => i.id === plant.id));

  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} className="product-img"/>
      <h4>{plant.name}</h4>
      <p>${plant.price.toFixed(2)}</p>
      <button disabled={inCart} onClick={() => dispatch(addItem(plant))}>
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
