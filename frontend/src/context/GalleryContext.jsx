import React, { createContext, useState, useContext, useCallback } from 'react';
import { galleryAPI } from '../utils/api';

const GalleryContext = createContext();

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};

// Sample images for fallback
const SAMPLE_IMAGES = [
  {
    _id: '1',
    title: "Wedding Ceremony",
    description: "Beautiful moments from a wedding ceremony",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&q=80",
    category: "wedding",
    tags: ["wedding", "ceremony"],
    featured: true
  },
  {
    _id: '2',
    title: "Engagement",
    description: "Romantic engagement moments",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    category: "engagement",
    tags: ["engagement", "couple"],
    featured: true
  },
  {
    _id: '3',
    title: "Pre-Wedding",
    description: "Candid pre-wedding moments",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&q=80",
    category: "pre-wedding",
    tags: ["pre-wedding", "couple"],
    featured: true
  },
  {
    _id: '4',
    title: "Maternity",
    description: "Beautiful maternity shoot",
    imageUrl: "https://images.unsplash.com/photo-1515221318891-2b226a16d3c7?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1515221318891-2b226a16d3c7?w=300&q=80",
    category: "maternity",
    tags: ["maternity", "pregnant"],
    featured: true
  },
  {
    _id: '5',
    title: "Family",
    description: "Joyful family moments",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&q=80",
    category: "family",
    tags: ["family", "group"],
    featured: true
  },
  {
    _id: '6',
    title: "Haldi",
    description: "Vibrant haldi celebration",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&q=80",
    category: "haldi",
    tags: ["haldi", "celebration"],
    featured: true
  },
  {
    _id: '7',
    title: "Cultural Event",
    description: "Traditional cultural celebration",
    imageUrl: "https://images.unsplash.com/photo-1465146072230-91cabc968266?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1465146072230-91cabc968266?w=300&q=80",
    category: "cultural",
    tags: ["cultural", "traditional"],
    featured: false
  },
  {
    _id: '8',
    title: "Event",
    description: "Fun celebration",
    imageUrl: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=300&q=80",
    category: "events",
    tags: ["event", "celebration"],
    featured: false
  }
];

export const GalleryProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = useCallback(async (params = {}) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await galleryAPI.getAllImages(params.category, params.page, params.limit);
      const newImages = response.data.data;
      
      if (params.page && params.page > 1) {
        setImages(prev => [...prev, ...newImages]);
      } else {
        setImages(newImages);
      }
      
      return newImages;
    } catch (err) {
      setError(err.message);
      console.error('Error fetching images:', err);
      setImages(SAMPLE_IMAGES.filter(img => !params.category || img.category === params.category));
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    try {
      const response = await galleryAPI.getCategories();
      setCategories(response.data.data);
      return response.data.data;
    } catch (err) {
      console.error('Error fetching categories:', err);
      setCategories(['wedding', 'engagement', 'pre-wedding', 'maternity', 'family', 'cultural', 'haldi', 'events', 'portrait', 'landscape']);
      return [];
    }
  }, []);

  const fetchFeaturedImages = useCallback(async () => {
    try {
      const response = await galleryAPI.getFeaturedImages();
      return response.data.data;
    } catch (err) {
      console.error('Error fetching featured images:', err);
      return SAMPLE_IMAGES.filter(img => img.featured).slice(0, 6);
    }
  }, []);

  const value = {
    images,
    setImages,
    categories,
    setCategories,
    loading,
    error,
    fetchImages,
    fetchCategories,
    fetchFeaturedImages
  };

  return (
    <GalleryContext.Provider value={value}>
      {children}
    </GalleryContext.Provider>
  );
};