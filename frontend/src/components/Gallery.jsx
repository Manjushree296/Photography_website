import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import ImageModal from './ImageModal';
import './Gallery.css';

const Gallery = ({ images = [], title = 'Gallery', categoryId = null }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());

  // Memoize images to prevent unnecessary re-renders
  const memoizedImages = useMemo(() => images, [images]);

  const handleImageClick = useCallback((index) => {
    setSelectedImageIndex(index);
    try {
      const img = memoizedImages[index];
      if (img) {
        const key = 'recentImages';
        const raw = localStorage.getItem(key);
        let arr = raw ? JSON.parse(raw) : [];
        // remove existing with same id
        arr = arr.filter(i => i.id !== img.id);
        arr.unshift({ id: img.id, url: img.url, title: img.title });
        if (arr.length > 12) arr = arr.slice(0,12);
        localStorage.setItem(key, JSON.stringify(arr));
        // notify
        window.dispatchEvent(new CustomEvent('recentImagesUpdated'));
      }
    } catch (e) {
      // ignore localStorage errors
      console.warn('Could not save recent image', e);
    }
  }, [memoizedImages]);

  const handleCloseModal = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const handleNextImage = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === null ? 0 : (prev + 1) % memoizedImages.length
    );
  }, [memoizedImages.length]);

  const handlePrevImage = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === null ? 0 : (prev - 1 + memoizedImages.length) % memoizedImages.length
    );
  }, [memoizedImages.length]);

  const handleImageLoad = useCallback((imageId) => {
    setLoadedImages((prev) => new Set(prev).add(imageId));
  }, []);

  if (!memoizedImages || memoizedImages.length === 0) {
    return (
      <div className="gallery-empty">
        <p>No images available in this gallery.</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <section className="gallery-section">
        {title && (
          <motion.div
            className="gallery-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>{title}</h2>
            <p className="gallery-subtitle">
              {memoizedImages.length} {memoizedImages.length === 1 ? 'image' : 'images'}
            </p>
          </motion.div>
        )}

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {memoizedImages.map((image, index) => (
            <motion.div
              key={image.id || index}
              className="gallery-item"
              variants={itemVariants}
              onClick={() => handleImageClick(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="gallery-image-wrapper">
                {/* Skeleton Loader */}
                {!loadedImages.has(image.id || index) && (
                  <div className="gallery-skeleton" />
                )}

                <img
                  src={image.url}
                  alt={image.title || `Image ${index + 1}`}
                  className={`gallery-image ${
                    loadedImages.has(image.id || index) ? 'loaded' : ''
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(image.id || index)}
                />

                {/* Overlay */}
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3>{image.title}</h3>
                    <span className="view-icon">🔍</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Image Modal */}
      <ImageModal
        image={memoizedImages[selectedImageIndex]}
        isOpen={selectedImageIndex !== null}
        onClose={handleCloseModal}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
        totalImages={memoizedImages.length}
        currentIndex={selectedImageIndex || 0}
      />
    </>
  );
};

export default Gallery;
