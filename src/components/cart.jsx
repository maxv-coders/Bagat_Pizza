// cart.jsx
import React from 'react';

const Cart = ({ cart, onOrder }) => {
  const total = cart.reduce((sum, item) => sum + item.cost, 0);

  if (cart.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg z-10">
      <h2 className="text-lg font-bold">Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between">
          <span>{item.name}</span>
          <span>{item.cost} so'm</span>
        </div>
      ))}
      <div className="flex justify-between mt-2 font-semibold">
        <span>Total:</span>
        <span>{total} so'm</span>
      </div>
      <button
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded"
        onClick={onOrder}
      >
        Order
      </button>
    </div>
  );
};

export default Cart;

