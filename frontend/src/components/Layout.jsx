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
              <a href="#"><FaWhatsapp/></a>
              <a href="#"><FaInstagram/></a>
              <a href="#"><FaYoutube/></a>
              <a href="#"><FaGoogleDrive/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>

            <div className="quick-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
              <a href="#address">Address</a>
            </div>
          </div>

          {/* Address */}
          <div id="address">
            <h3>Address</h3>
            <p>Near City Bus Stand</p>
            <p>Udupi, Karnataka - 576101</p>
            <p>Phone: +91 9901864063</p>
          </div>

        </div>

        <div className="copyright">
          © 2026 All Rights Reserved
        </div>

      </footer>

      {/* ============ WHATSAPP FLOAT ============ */}
      <a
        href="#"
        className="whatsapp-float"
      >
        <FaWhatsapp/>
      </a>

    </>
  );
};

export default Layout;
