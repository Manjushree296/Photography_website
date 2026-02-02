import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';
import { babyImages } from '../config/galleryImages';
import './CategoryPage.css';

const Baby = () => {
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
        <h1>BABY PHOTOGRAPHY</h1>
        <p>
          Precious moments of your little one - beautifully captured and cherished forever
        </p>
      </motion.div>

      {/* Gallery */}
      <Gallery
        images={babyImages}
        title="Baby Shots Collection"
        categoryId="baby"
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
          <h2>About Our Baby Photography</h2>
          <p>
            Your baby's first moments are precious and fleeting. We specialize in capturing
            adorable newborn and baby portraits that showcase their innocent beauty and unique
            personality. Our gentle approach ensures comfort for both baby and parents, creating
            a relaxed environment for beautiful, natural photos.
          </p>
          <ul className="description-list">
            <li>Safe and gentle handling of newborns</li>
            <li>Comfortable studio environment with warmth control</li>
            <li>Beautiful props and backdrops</li>
            <li>Family involvement options for bonding shots</li>
          </ul>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Baby;
