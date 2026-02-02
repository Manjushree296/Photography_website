import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';
import { maternityImages } from '../config/galleryImages';
import './CategoryPage.css';

const Maternity = () => {
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
        <h1>MATERNITY PHOTOGRAPHY</h1>
        <p>
          Celebrate the beauty of motherhood with stunning maternity portraits
        </p>
      </motion.div>

      {/* Gallery */}
      <Gallery
        images={maternityImages}
        title="Maternity Collection"
        categoryId="maternity"
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
          <h2>About Our Maternity Photography</h2>
          <p>
            Pregnancy is a beautiful journey, and we love capturing the glow and excitement of
            motherhood. Our maternity shoots celebrate the strength and beauty of expecting mothers.
            We create comfortable, artistic portraits that honor this special time in your life,
            whether solo or with your partner and family.
          </p>
          <ul className="description-list">
            <li>Flattering poses for expectant mothers</li>
            <li>Beautiful themed settings and backdrops</li>
            <li>Partner and family inclusion options</li>
            <li>Natural light and studio lighting options</li>
          </ul>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Maternity;
