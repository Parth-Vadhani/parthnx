// src/components/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
    <div className="relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="hero h-screen bg-cover bg-center relative flex items-center justify-center text-white">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="splash.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        <div className="content z-20 text-center px-6 sm:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Welcome to Parth NX
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white opacity-80 mb-8">
            Explore the finest Indian ethnic wear collection for modern tastes.
          </p>
          <a
            href="#products"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-blue-600 transform hover:scale-105"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white" id="about">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">About Parth NX</h2>
          <p className="text-lg text-gray-600 mb-8">
            Parth NX is a premium brand that blends traditional Indian craftsmanship with contemporary design. 
            We offer elegant ethnic wear suited for every occasion.
          </p>
          <div className="flex justify-center gap-8">
            <div className="feature-card transition-all duration-300 ease-in-out hover:scale-105 p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-700">To offer timeless Indian ethnic wear that blends tradition and style.</p>
            </div>
            <div className="feature-card transition-all duration-300 ease-in-out hover:scale-105 p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700">To provide quality ethnic wear that reflects the rich heritage and culture of India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50" id="products">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Featured Products</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="product-card hover:scale-105 transition-all duration-300 ease-in-out p-6 bg-white rounded-lg shadow-xl">
              <img
                src="https://via.placeholder.com/300"
                alt="Product"
                className="w-full h-56 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Jodhpuri Suit</h3>
              <p className="text-gray-600 mb-4">Premium design for special occasions. Comfortable and stylish.</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                View Details
              </button>
            </div>
            <div className="product-card hover:scale-105 transition-all duration-300 ease-in-out p-6 bg-white rounded-lg shadow-xl">
              <img
                src="https://via.placeholder.com/300"
                alt="Product"
                className="w-full h-56 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Kurtas</h3>
              <p className="text-gray-600 mb-4">Elegant kurtas for every occasion. Crafted with the finest fabrics.</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                View Details
              </button>
            </div>
            <div className="product-card hover:scale-105 transition-all duration-300 ease-in-out p-6 bg-white rounded-lg shadow-xl">
              <img
                src="https://via.placeholder.com/300"
                alt="Product"
                className="w-full h-56 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sherwanis</h3>
              <p className="text-gray-600 mb-4">Perfect for weddings and celebrations. A touch of royal elegance.</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-8 text-center">
        <p className="text-lg">&copy; 2025 Parth NX. All rights reserved.</p>
        <div className="social-icons flex justify-center gap-6 mt-4">
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
    </motion.div>
  );
};

export default Home;
