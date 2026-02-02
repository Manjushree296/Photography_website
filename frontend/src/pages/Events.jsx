import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';
import { eventsImages } from '../config/galleryImages';
import './CategoryPage.css';

const Events = () => {
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
        <h1>EVENT PHOTOGRAPHY</h1>
        <p>
          Professional event coverage - birthdays, corporate events, and special celebrations
        </p>
      </motion.div>

      {/* Gallery */}
      <Gallery
        images={eventsImages}
        title="Events Collection"
        categoryId="events"
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
          <h2>About Our Event Photography</h2>
          <p>
            Every event tells a unique story. From corporate gatherings to birthday parties,
            we capture the essence and excitement of your special occasions. Our experienced
            photographers blend into the crowd, capturing candid moments while ensuring you
            also have stunning posed shots for keepsakes.
          </p>
          <ul className="description-list">
            <li>Full event coverage with professional team</li>
            <li>Candid and posed photography mix</li>
            <li>Quick turnaround on event highlights</li>
            <li>Flexible packages for various event types</li>
          </ul>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Events;
