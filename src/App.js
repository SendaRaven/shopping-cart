import React from 'react';
import './App.css';
import Shop from './components/Shop';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="border rounded vh-100" >
      <Shop />
      <ShoppingCart />
    </div>
  );
}

export default App;
