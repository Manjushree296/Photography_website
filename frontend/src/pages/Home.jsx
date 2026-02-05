import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaYoutube } from 'react-icons/fa';
import Gallery from "../components/Gallery";
import CategoryCard from "../components/CategoryCard";
import MasonryGallery from "../components/MasonryGallery";
import Preloader from "../components/Preloader";
import { weddingImages, preweddingImages, allGalleryImages } from "../config/galleryImages";
import hero1 from "../Asset/hero_images/hero_1.jpg";
import hero2 from "../Asset/hero_images/hero_2.jpg";
import hero3 from "../Asset/hero_images/hero_3.jpg";
import hero4 from "../Asset/hero_images/hero_4.jpg";
import hero5 from "../Asset/hero_images/hero_5.jpg";
import hero6 from "../Asset/hero_images/hero_6.jpg";
import hero7 from "../Asset/hero_images/hero_7.jpg";
import hero8 from "../Asset/hero_images/hero_8.jpg";
import photographyCard from "../Asset/cards/photogrphy.jpg";
import videographyCard from "../Asset/cards/vediography.jpg";
import editingCard from "../Asset/cards/editing.jpg";
import weddingCat from "../Asset/Categories/wedding.jpg";
import preweddingCat from "../Asset/Categories/Pre_wedding.jpg";
import culturalCat from "../Asset/Categories/cultural.jpg";
import familyCat from "../Asset/Categories/Family_shoot.jpg";
import maternityCardCat from "../Asset/Categories/Maternery.jpeg";
import portfolioCat from "../Asset/Categories/Portfolio.jpg";
import specialOccasionCat from "../Asset/Categories/Special_accuation.jpg";
import "./styles/home.css";

const Home = () => {
  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8];
  const [heroIndex, setHeroIndex] = useState(0);

  // Categories with images in correct order
  const categoriesWithImages = [
    { id: 1, name: "WEDDING", path: "/wedding", image: weddingCat },
    { id: 2, name: "PRE-WEDDING", path: "/prewedding", image: preweddingCat },
    { id: 3, name: "CULTURAL", path: "/cultural", image: culturalCat },
    { id: 4, name: "FAMILY", path: "/family", image: familyCat },
    { id: 5, name: "MATERNITY", path: "/maternity", image: maternityCardCat },
    { id: 6, name: "PORTFOLIO", path: "/portfolio", image: portfolioCat },
    { id: 7, name: "SPECIAL OCCASION", path: "/events", image: specialOccasionCat }
  ];

  const [categoryIndex, setCategoryIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCategoryIndex((prev) => (prev + 1) % categoriesWithImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setHeroIndex((prev) => (prev + 1) % heroImages.length);
  };

  const [isLoaded, setIsLoaded] = useState(false);

  // simple page preloader: hide until window load or timeout
  React.useEffect(() => {
    const markLoaded = () => setIsLoaded(true);
    if (document.readyState === 'complete') {
      markLoaded();
      return;
    }
    window.addEventListener('load', markLoaded);
    const t = setTimeout(markLoaded, 900);
    return () => {
      window.removeEventListener('load', markLoaded);
      clearTimeout(t);
    };
  }, []);

  // Compile all available gallery images for the 'All our work' masonry gallery
  const allImages = Object.values(allGalleryImages).flat().map((img, idx) => ({ id: img.id || idx, url: img.url, title: img.title || '' }));

  // No carousel autoplay for grid layout — simplified grid display

  return (
    <>
      <Preloader loading={!isLoaded} />
      <div className={`home-content ${isLoaded ? 'loaded' : 'hidden'}`}>
      {/* HERO SLIDER - Background */}
      <section className="hero">
        <div className="hero-slider">
          <img src={heroImages[heroIndex]} alt="hero" className="hero-img" />
          <div className="hero-overlay">
            <div className="hero-text">
              <h1>Capture Your Moments</h1>
              <p className="hero-sub">Timeless photography for weddings, events, and life’s precious milestones.</p>
              <div className="hero-ctas">
                <Link to="/contact" className="hero-btn">CONTACT US</Link>

              </div>
            </div>
          </div>

          {/* Arrow Navigation */}
          <button className="hero-nav hero-nav-prev" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button className="hero-nav hero-nav-next" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* CATEGORIES - slideshow */}
      <section className="categories-slider-section">

        {/* All our work placeholder */}
        <section className="work-section">
          <h2>All our work</h2>
          <MasonryGallery images={allImages} />
        </section>

        {/* Google Drive Logo Section */}
        <section className="google-drive-section">
          <div className="google-drive-container">
            <a href="https://drive.google.com/drive/folders/1B1HeGO3_h6I40DzIuPUhw33e64V9gx_5" target="_blank" rel="noopener noreferrer" className="google-drive-link">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" alt="Google Drive" className="google-drive-logo" />
              <span>CLICK HERE TO VIEW OUR DETAILED PHOTOSHOOT</span>
            </a>
          </div>
        </section>

        <div className="categories-head">
          <div>
            <h2>CATEGORIES</h2>
            <p>Explore our collections of Professional Photography across different categories.</p>
          </div>
        </div>

        <div className="categories-slideshow">
          <div className="categories-carousel-wrapper">
            <button className="category-prev" onClick={() => {
              const carousel = document.querySelector('.categories-list');
              carousel.scrollBy({ left: -300, behavior: 'smooth' });
            }}>
              <FaChevronLeft />
            </button>

            <div className="categories-carousel">
              <div className="categories-list">
                {categoriesWithImages.map((cat) => (
                  <Link key={cat.id} to={cat.path} className="cat-link">
                    <div className="cat-item">
                      <img src={cat.image} alt={cat.name} />
                      <h4>{cat.name}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <button className="category-next" onClick={() => {
              const carousel = document.querySelector('.categories-list');
              carousel.scrollBy({ left: 300, behavior: 'smooth' });
            }}>
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* YouTube promo */}
        <section className="youtube-promo">
          <div className="youtube-left">
            <div className="yt-icon"><FaYoutube aria-hidden="true"/></div>
            <div>
              <h3>Our latest works</h3>
              <p>For Videography visit our YouTube channel — Pre wedding videography in Mangalore</p>
            </div>
          </div>
          <a className="youtube-btn" href="https://www.youtube.com/@lathishphotography" target="_blank" rel="noreferrer" aria-label="Visit our YouTube channel">Visit Channel</a>
        </section>

      </section>

      </div>
    </>
  );
};

export default Home;
