import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
    <div className="about-container">
      <div className="about-header">
        <h1>Welcome to Parth NX</h1>
      </div>
      <div className="about-content">
        <p>
          Parth NX is a leading online store specializing in premium ethnic wear. 
          We provide a wide range of traditional clothing from various regions, including Gujarat, Rajasthan, and Banaras. 
          Our mission is to deliver high-quality garments that reflect the cultural diversity and rich heritage of India. 
          Whether you're attending a wedding, festival, or any special occasion, we have the perfect outfit for you!
        </p>
        <p>
          We also focus on sustainability and craftsmanship, offering both machine-made and handcrafted products. 
          Every garment is carefully designed to make you look and feel your best.
        </p>
      </div>
      <div className="about-footer">
        <p>Feel free to reach out to us if you have any questions or need assistance!</p>
      </div>
    </div>
    </motion.div>
  );
};

export default About;
