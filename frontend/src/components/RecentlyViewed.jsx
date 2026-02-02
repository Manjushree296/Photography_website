import React, { useEffect, useState } from 'react';
import Gallery from './Gallery';
import { weddingImages, preweddingImages } from '../config/galleryImages';

const RecentlyViewed = () => {
  const [recent, setRecent] = useState([]);

  const loadRecent = () => {
    try {
      const raw = localStorage.getItem('recentImages');
      const arr = raw ? JSON.parse(raw) : [];
      setRecent(arr);
    } catch (e) {
      setRecent([]);
    }
  };

  useEffect(() => {
    loadRecent();
    const handle = () => loadRecent();
    window.addEventListener('recentImagesUpdated', handle);
    return () => window.removeEventListener('recentImagesUpdated', handle);
  }, []);

  // fallback if no recents: show featured wedding/prewedding mix
  const fallback = weddingImages.concat(preweddingImages).slice(0,6).map(img => ({ id: img.id, url: img.url, title: img.title }));
  const imagesToShow = recent.length ? recent : fallback;

  return (
    <Gallery images={imagesToShow} title={recent.length ? 'Recently Viewed' : 'Featured'} />
  );
};

export default RecentlyViewed;
