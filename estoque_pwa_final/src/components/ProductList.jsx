import React, { useState, useEffect } from 'react';
import { getProducts, saveProducts } from '../storage';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const addProduct = () => {
    if (newName.trim() === '') return;
    const updated = [...products, { name: newName }];
    setProducts(updated);
    saveProducts(updated);
    setNewName('');
  };

  return (
    <div>
      <h2>Produtos em Estoque</h2>
      <ul>
        {products.map((p, i) => (
          <li key={i}>{p.name}</li>
        ))}
      </ul>
      <input
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Nome do Produto"
      />
      <button onClick={addProduct}>Adicionar</button>
    </div>
  );
}
