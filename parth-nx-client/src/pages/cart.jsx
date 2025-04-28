import React from 'react';
import { useCart } from '../contexts/CartContext';
import { motion } from 'framer-motion';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4 mt-4">
          {cart.map((product) => (
            <li key={product.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
              <div>
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="font-semibold">{`$${product.price}`}</p>
              </div>
              <button 
                onClick={() => handleRemove(product.id)} 
                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
    </motion.div>
  );
};

export default Cart;
