import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaYoutube } from 'react-icons/fa';
import Gallery from "../components/Gallery";
import CategoryCard from "../components/CategoryCard";
import MasonryGallery from "../components/MasonryGallery";
import Preloader from "../components/Preloader";
import RecentlyViewed from "../components/RecentlyViewed";
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

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

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

      {/* TOP SERVICES - Floating Cards */}
      <section className="top-services">
        <div className="service-box">
          <div className="service-image-wrapper">
            <img src={photographyCard} alt="Photography"/>
          </div>
          <h3>PHOTOGRAPHY</h3>
          <p>Capturing timeless moments with professional expertise and artistic vision. We specialize in documenting your most precious memories with stunning clarity and emotion.</p>
        </div>

        <div className="service-box">
          <div className="service-image-wrapper">
            <img src={videographyCard} alt="Videography"/>
          </div>
          <h3>VIDEOGRAPHY</h3>
          <p>Creating cinematic stories that bring your special moments to life. Our videography combines cutting-edge technology with creative storytelling for unforgettable results.</p>
        </div>

        <div className="service-box">
          <div className="service-image-wrapper">
            <img src={editingCard} alt="Editing"/>
          </div>
          <h3>EDITING</h3>
          <p>Transforming raw footage into masterpieces through professional editing and post-production. Every frame is perfected to bring out the beauty and emotion of your story.</p>
        </div>
      </section>

      {/* CATEGORIES - grid layout */}
      <section className="categories-slider-section">

        <div className="categories-head">
          <div>
            <h2>CATEGORIES</h2>
            <p>Explore our collections of Professional Photography across different categories.</p>
          </div>
        </div>

        <div className="categories-grid">
          {categoriesWithImages.map((cat) => (
            <CategoryCard key={cat.id} to={cat.path} image={cat.image} name={cat.name} />
          ))}
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
          <a className="youtube-btn" href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="Visit our YouTube channel">Visit Channel</a>
        </section>

        {/* All our work placeholder */}
        <section className="work-section">
          <h2>All our work</h2>
          <MasonryGallery images={allImages} />
        </section>

      </section>

      {/* RECENTLY VIEWED GALLERY */}
      <RecentlyViewed />
      </div>
    </>
  );
};

export default Home;
