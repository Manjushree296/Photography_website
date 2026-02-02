import React from 'react';
import './MasonryGallery.css';

const MasonryGallery = ({ images = [] }) => {
  if (!images || images.length === 0) {
    return <div className="masonry-empty">No images yet. Upload to display here.</div>;
  }

  return (
    <div className="masonry-grid" aria-live="polite">
      {images.map((img) => (
        <div key={img.id} className="masonry-item">
          <img src={img.url} alt={img.title || 'Gallery image'} loading="lazy" decoding="async" />
        </div>
      ))}
    </div>
  );
};

export default MasonryGallery;
