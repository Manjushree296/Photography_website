import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';
import { weddingImages } from '../config/galleryImages';
import './CategoryPage.css';

const Wedding = () => {
  return (
    <motion.div
      className="category-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Category Header */}
      <motion.div
        className="category-hero"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>WEDDING PHOTOGRAPHY</h1>
        <p>
          Capturing the most beautiful moments of your special day with elegance and artistry
        </p>
      </motion.div>

      {/* Gallery */}
      <Gallery
        images={weddingImages}
        title="Wedding Collection"
        categoryId="wedding"
      />

      {/* Description Section */}
      <motion.section
        className="category-description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="description-content">
          <h2>About Our Wedding Photography</h2>
          <p>
            Your wedding day is one of the most important moments in your life. We specialize
            in capturing candid, heartfelt moments that tell your unique love story. From the
            bride's first look to the last dance, we ensure every precious moment is beautifully
            preserved for you to cherish forever.
          </p>
          <ul className="description-list">
            <li>Professional team with years of experience</li>
            <li>High-quality editing and post-processing</li>
            <li>Fast turnaround time for your photos</li>
            <li>Customizable packages to suit your needs</li>
          </ul>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Wedding;
