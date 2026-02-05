import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Outlet, Link, useLocation } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaYoutube, FaGoogleDrive } from "react-icons/fa";
import logo from "../Asset/lathish photography_logo.png";
import "./Layout.css";

const Layout = () => {

  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    {name:"Home", path:"/"},
    {name:"About", path:"/about"},
    {name:"Services", path:"/services"},
    {name:"Portfolio", path:"/portfolio"},
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      {/* ================= HEADER ================= */}
      <header className={scrolled ? "header scrolled" : "header"}>
        <div className="container">

          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="Lathish Photography Logo" />
          </Link>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setMobileOpen(v => !v)} aria-label="Toggle navigation">
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Nav */}
          <nav className={mobileOpen ? 'open' : ''} onClick={() => setMobileOpen(false)}>
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={
                  location.pathname === item.path
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="nav-cta">Contact</Link>
          </nav>

        </div>
      </header>

      {/* ================= PAGE CONTENT ================= */}
      <main id="main-content">
        <Outlet/>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-container">

          {/* Left */}
          <div>
            <img src={logo} className="footer-logo" alt="Lathish Photography Logo"/>
            <p>We Make Your Memories Special</p>

            <div className="socials">
              <a href="https://wa.me/919845219355" target="_blank" rel="noopener noreferrer"><FaWhatsapp/></a>
              <a href="https://www.instagram.com/lathish_photography?igsh=ang5MW5qeDY0ajVz" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
              <a href="https://www.youtube.com/@lathishphotography" target="_blank" rel="noopener noreferrer"><FaYoutube/></a>
              <a href="https://drive.google.com/drive/folders/1B1HeGO3_h6I40DzIuPUhw33e64V9gx_5" target="_blank" rel="noopener noreferrer"><FaGoogleDrive/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>

            <div className="quick-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
              <a href="#address">Address</a>
            </div>
          </div>

          {/* Address */}
          <div id="address">
            <h3>Address</h3>
            <p>Divya Enclave Building, Shop No. B4,</p>
            <p>Opposite Canara College, Jail Road,</p>
            <p>M G Road, Mangalore – 575003, Karnataka</p>
            <p>Phone: +91 98765 43210</p>
          </div>

        </div>

        <div className="copyright">
          © 2026 All Rights Reserved
        </div>

      </footer>

      {/* ============ WHATSAPP FLOAT ============ */}
      <a
        href="https://wa.me/919845219355"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-float"
      >
        <FaWhatsapp/>
      </a>

    </>
  );
};

export default Layout;
