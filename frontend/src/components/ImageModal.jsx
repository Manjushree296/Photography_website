import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageModal.css';

const ImageModal = ({ image, isOpen, onClose, onNext, onPrev, totalImages, currentIndex }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="modal-close" onClick={onClose}>
              ✕
            </button>

            {/* Main Image */}
            <div className="modal-image-container">
              <motion.img
                key={image?.id}
                src={image?.url}
                alt={image?.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="modal-image"
              />
            </div>

            {/* Navigation Arrows */}
            {totalImages > 1 && (
              <>
                <button
                  className="modal-nav modal-prev"
                  onClick={onPrev}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  className="modal-nav modal-next"
                  onClick={onNext}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            {/* Image Info */}
            <div className="modal-info">
              <h3>{image?.title}</h3>
              {totalImages > 1 && (
                <p className="modal-counter">
                  {currentIndex + 1} / {totalImages}
                </p>
              )}
            </div>

            {/* Keyboard Hint */}
            <div className="modal-hint">
              <span>ESC to close</span>
              {totalImages > 1 && <span>← → to navigate</span>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
