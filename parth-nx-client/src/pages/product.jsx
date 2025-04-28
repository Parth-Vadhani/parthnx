import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { motion } from 'framer-motion';

const ProductsPage = () => {
  const { addToCart } = useCart();

  // Sample product data
  const products = [
    
    { id: 1, name: 'Kurta Set', description: 'Traditional kurta set with intricate        embroidery.', price: 2999, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo_UQf_KGLcyzRLvMsbuSPvIoo9Z70VYAkUA&s' },

    { id: 2, name: 'Sherwani', description: 'Elegant Sherwani for special occasions.', price: 5999, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo_UQf_KGLcyzRLvMsbuSPvIoo9Z70VYAkUA&si' },
    // Add more products here
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (  
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="font-bold text-xl">{product.name}</h2>
              <p className="text-gray-500">{product.description}</p>
              <p className="font-semibold text-xl text-blue-600">₹{product.price}</p>
              <button
                onClick={() => {
                  addToCart(product);
                  closeModal(); // Close the modal after adding to cart
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {modalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover my-4" />
            <p className="text-gray-600">{selectedProduct.description}</p>
            <p className="font-semibold text-xl text-blue-600">₹{selectedProduct.price}</p>
            <button
              onClick={() => {
                addToCart(selectedProduct);
                closeModal(); // Close the modal after adding to cart
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
            <button
              onClick={closeModal}
              className="mt-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </motion.div>
  );
};

export default ProductsPage;
