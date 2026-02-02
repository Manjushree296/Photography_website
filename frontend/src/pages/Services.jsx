import React from "react";
import photographyCard from "../Asset/cards/photogrphy.jpg";
import videographyCard from "../Asset/cards/vediography.jpg";
import editingCard from "../Asset/cards/editing.jpg";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-page">

      {/* Page Heading */}
      <h2 className="page-title">WE MAKE YOUR MEMORIES SPECIAL</h2>

      {/* Top Three Cards - Same as Homepage */}
      <div className="top-cards">

        <div className="top-card">
          <div className="card-image-wrapper">
            <img src={photographyCard} alt="Photography" />
          </div>
          <h3>PHOTOGRAPHY</h3>
          <p>Capturing timeless moments with professional expertise and artistic vision. We specialize in documenting your most precious memories with stunning clarity and emotion.</p>
        </div>

        <div className="top-card">
          <div className="card-image-wrapper">
            <img src={videographyCard} alt="Videography" />
          </div>
          <h3>VIDEOGRAPHY</h3>
          <p>Creating cinematic stories that bring your special moments to life. Our videography combines cutting-edge technology with creative storytelling for unforgettable results.</p>
        </div>

        <div className="top-card">
          <div className="card-image-wrapper">
            <img src={editingCard} alt="Editing" />
          </div>
          <h3>EDITING</h3>
          <p>Transforming raw footage into masterpieces through professional editing and post-production. Every frame is perfected to bring out the beauty and emotion of your story.</p>
        </div>

      </div>

      {/* Services List */}
      <div className="service-list">

        <div className="service-column">
          <p>■ Wedding Photography</p>
          <p>■ Post Wedding Photography</p>
          <p>■ Maternity Photography</p>
          <p>■ Drone Photography</p>
          <p>■ Family Shoot</p>
          <p>■ Interior Photography</p>
        </div>

        <div className="service-column">
          <p>■ Pre Wedding Photography</p>
          <p>■ Baby Shoot</p>
          <p>■ Portfolio Photography</p>
          <p>■ Concept Shoot</p>
          <p>■ Haldi Photography</p>
          <p>■ Event Photography</p>
        </div>

      </div>

    </div>
  );
};

export default Services;
