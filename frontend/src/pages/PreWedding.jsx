import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';
import { preweddingImages } from '../config/galleryImages';
import './CategoryPage.css';

const PreWedding = () => {
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
        <h1>PRE-WEDDING PHOTOSHOOT</h1>
        <p>
          Romantic moments before the big day - celebrate your love in style
        </p>
      </motion.div>

      {/* Gallery */}
      <Gallery
        images={preweddingImages}
        title="Pre-Wedding Collection"
        categoryId="prewedding"
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
          <h2>About Our Pre-Wedding Photography</h2>
          <p>
            A pre-wedding photoshoot is the perfect way to celebrate your love before your
            wedding day. We create romantic, engaging, and artistic photos that showcase your
            unique chemistry as a couple. Whether you prefer outdoor adventures, studio shots,
            or themed sessions, we'll make your pre-wedding photos truly special.
          </p>
          <ul className="description-list">
            <li>Customizable themes and locations</li>
            <li>Comfortable and relaxed shooting environment</li>
            <li>Professional styling and makeup assistance available</li>
            <li>Same-day editing preview of selected photos</li>
          </ul>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default PreWedding;
