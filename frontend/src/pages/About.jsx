import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      {/* ===== ABOUT TOP SECTION ===== */}
      <section className="about-hero">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1000&q=80"
            alt="Photographer"
          />
        </div>

        <div className="about-content">
          <h1>WE MAKE YOUR MEMORIES SPECIAL</h1>

          <div className="feature-box">
            <span>📷</span>
            <div>
              <h3>PROFESSIONALISM</h3>
              <p>
                Professionalism isn’t just about charging money for photos; it’s
                about the brand that we build and the service you receive.
              </p>
            </div>
          </div>

          <div className="feature-box">
            <span>🖼️</span>
            <div>
              <h3>INDIVIDUAL APPROACH</h3>
              <p>
                A good photograph is knowing where to stand.
              </p>
            </div>
          </div>

          <div className="feature-box">
            <span>⏰</span>
            <div>
              <h3>FLEXIBLE SCHEDULE</h3>
              <p>
                We are flexible and available almost any time you would need us
                to work.
              </p>
            </div>
          </div>

<div className="feature-box">
          <span>🏆</span>
          <div>
            <h3>Experience</h3>
            <p>
              With 25+ years of experience,we have successfully covered 1,500+ events,capturing unforgettable moments with creativity and passion.
            </p>
          </div>
        </div>

        </div>
</section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">

        <h2>WHAT CLIENT SAY?</h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
            <h4>Preksha</h4>
            <p>
              Lathish is a wonderful person and truly professional in his
              skills and field. Very energetic and captured great moments.
            </p>
          </div>

          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="" />
            <h4>SHIVARANJANI SHETTY</h4>
            <p>
              The photos are AMAZING!! Thank you so much. Best friendly
              photographer.
            </p>
          </div>

          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
            <h4>SHRINIDHI S</h4>
            <p>
              Very passionate and talented at his craft. Highly recommended.
            </p>
          </div>

          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="" />
            <h4>SHRUTHI SHENOY</h4>
            <p>
              Quality, cooperation and understanding at its best. Worth every
              penny.
            </p>
          </div>

        </div>

      </section>

      {/* ===== GOOGLE REVIEWS ===== */}
      <section className="google-review">

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google"
        />

        <div className="stars">★★★★★</div>

        <div className="review-buttons">
          <a href="#" className="btn-green">SEE ALL GOOGLE REVIEWS</a>
          <a href="#" className="btn-green">LEAVE A REVIEW</a>
        </div>

      </section>

    </div>
  );
};

export default About;
