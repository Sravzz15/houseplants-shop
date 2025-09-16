import React from 'react';
import plants from '../data/plants';
import ProductCard from '../components/ProductCard';

function groupByCategory(items) {
  const map = {};
  items.forEach(i => (map[i.category] ||= []).push(i));
  return Object.entries(map);
}

export default function ProductListing(){
  const grouped = groupByCategory(plants);
  return (
    <div className="products-page">
      <h2>Our Plants</h2>
      {grouped.map(([category, items]) => (
        <section key={category}>
          <h3>{category}</h3>
          <div className="grid">
            {items.map(p => <ProductCard key={p.id} plant={p} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
