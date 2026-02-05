import React, { useState, useMemo } from 'react';
import ImageModal from '../components/ImageModal';
import './Portfolio.css';

import hero1 from '../Asset/hero_images/hero_1.jpg';
import hero2 from '../Asset/hero_images/hero_2.jpg';
import hero3 from '../Asset/hero_images/hero_3.jpg';
import hero4 from '../Asset/hero_images/hero_4.jpg';
import hero5 from '../Asset/hero_images/hero_5.jpg';
import hero6 from '../Asset/hero_images/hero_6.jpg';
import hero7 from '../Asset/hero_images/hero_7.jpg';
import hero8 from '../Asset/hero_images/hero_8.jpg';

// For demo we use the available hero images and assign them to categories
const ALL_IMAGES = [
  { id: 'h1', url: hero1, title: 'Wedding Moments', category: 'wedding' },
  { id: 'h2', url: hero2, title: 'Pre-Wedding', category: 'prewedding' },
  { id: 'h3', url: hero3, title: 'Baby Shot', category: 'baby' },
  { id: 'h4', url: hero4, title: 'Maternity', category: 'maternity' },
  { id: 'h5', url: hero5, title: 'Mehendi', category: 'mehendi' },
  { id: 'h6', url: hero6, title: 'Event Highlights', category: 'events' },
  { id: 'h7', url: hero7, title: 'Couple Portrait', category: 'wedding' },
  { id: 'h8', url: hero8, title: 'Candid Moment', category: 'prewedding' }
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'prewedding', label: 'Pre-Wedding' },
  { id: 'baby', label: 'Baby Shots' },
  { id: 'maternity', label: 'Maternity' },
  { id: 'mehendi', label: 'Mehendi' },
  { id: 'events', label: 'Events' }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const filtered = useMemo(() => {
    if (activeTab === 'all') return ALL_IMAGES;
    return ALL_IMAGES.filter((i) => i.category === activeTab);
  }, [activeTab]);

  const openAt = (index) => {
    setCurrent(index);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);
  const next = () => setCurrent((c) => (c + 1) % filtered.length);
  const prev = () => setCurrent((c) => (c - 1 + filtered.length) % filtered.length);

  return (
    <div className="portfolio-page container">
      <header className="portfolio-header">
        <h1>OUR LATEST WORKS</h1>
      </header>

      {/* Category Tabs */}
      <nav className="portfolio-tabs" role="tablist" aria-label="Gallery categories">
        {CATEGORIES.map((cat, idx) => (
          <React.Fragment key={cat.id}>
            <button
              className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
              role="tab"
              aria-selected={activeTab === cat.id}
            >
              {cat.label}
            </button>
            {idx < CATEGORIES.length - 1 && <span className="tab-divider">|</span>}
          </React.Fragment>
        ))}
      </nav>

      <section className="portfolio-grid">
        {filtered.map((img, idx) => (
          <button
            key={img.id}
            className="portfolio-item"
            onClick={() => openAt(idx)}
            aria-label={`Open ${img.title}`}
          >
            <img src={img.url} alt={img.title} />
          </button>
        ))}
      </section>

      <ImageModal
        image={filtered[current]}
        isOpen={isOpen}
        onClose={close}
        onNext={next}
        onPrev={prev}
        totalImages={filtered.length}
        currentIndex={current}
      />
    </div>
  );
};

export default Portfolio;
