# Photography Portfolio Website - Complete Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (running locally or on Atlas)
- npm or yarn

### Backend Setup

1. **Install Dependencies**
```bash
cd backend
npm install
```

2. **Create .env file** (Copy from .env.example)
```bash
cp .env.example .env
```

3. **Configure MongoDB**
Open `.env` and update:
```
MONGODB_URI=mongodb://localhost:27017/photography-portfolio
```

4. **Seed Database with Sample Data**
```bash
npm run seed
```

5. **Start Backend Server**
```bash
npm run dev
```
Server runs on `http://localhost:5000`

### Frontend Setup

1. **Install Dependencies**
```bash
cd frontend
npm install
```

2. **Create .env file**
```bash
REACT_APP_API_URL=http://localhost:5000/api
```

3. **Start Frontend**
```bash
npm start
```
Frontend runs on `http://localhost:3000`

---

## 📁 Project Structure

```
photography-portfolio/
├── backend/
│   ├── controllers/
│   │   ├── contactController.js
│   │   ├── galleryController.js
│   │   └── serviceController.js
│   ├── models/
│   │   ├── Contact.js
│   │   ├── GalleryImage.js
│   │   └── Service.js
│   ├── routes/
│   │   ├── contactRoutes.js
│   │   ├── galleryRoutes.js
│   │   └── serviceRoutes.js
│   ├── seed.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── HeroSlider.jsx
    │   │   ├── ServiceCard.jsx
    │   │   ├── ImageModal.jsx
    │   │   ├── Layout.jsx
    │   │   └── Layout.css
    │   ├── context/
    │   │   └── GalleryContext.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── About.jsx
    │   │   ├── Services.jsx
    │   │   ├── ServiceDetail.jsx
    │   │   ├── Portfolio.jsx
    │   │   └── Contact.jsx
    │   ├── styles/
    │   │   └── globals.css
    │   ├── utils/
    │   │   └── api.js
    │   ├── App.js
    │   └── index.js
    ├── .env
    └── package.json
```

---

## 🔌 API Endpoints

### Gallery
- `GET /api/gallery` - Get all images (with filters)
- `GET /api/gallery/categories` - Get all categories
- `GET /api/gallery/featured` - Get featured images
- `GET /api/gallery/:id` - Get single image

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:slug` - Get service by slug
- `GET /api/services/:slug/images` - Get service images

### Contact
- `POST /api/contacts/submit` - Submit contact form
- `GET /api/contacts/all` - Get all contacts (admin)
- `PATCH /api/contacts/:id/status` - Update contact status

---

## 🎨 Features Implemented

✅ **Hero Slider** with auto-rotation and manual controls
✅ **Service Cards** with hover animations
✅ **Gallery** with category filters and masonry layout
✅ **Responsive Design** (mobile-first approach)
✅ **Contact Form** with email notifications
✅ **Dark Theme** with gold accents
✅ **Smooth Animations** with Framer Motion
✅ **MongoDB Integration** with seed data
✅ **RESTful API** with proper error handling
✅ **Image Lazy Loading**
✅ **SEO Friendly**

---

## 📝 Page Components to Create

### Home Page (Create: `/src/pages/Home.jsx`)
```jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import ServiceCard from '../components/ServiceCard';
import { FaCamera, FaVideo, FaEdit } from 'react-icons/fa';

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/services');
        const data = await response.json();
        if (data.success) {
          setServices(data.data.slice(0, 3));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    loadServices();
  }, []);

  const specializations = [
    {
      icon: <FaCamera className="text-4xl" />,
      title: 'Photography',
      quote: 'With creating, we are literally bringing something into existence that didn\'t exist before.',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80'
    },
    {
      icon: <FaVideo className="text-4xl" />,
      title: 'Videography',
      quote: 'Every frame tells a story, every motion holds emotion.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80'
    },
    {
      icon: <FaEdit className="text-4xl" />,
      title: 'Photo Editing',
      quote: 'Editing is where imagination meets perfection.',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80'
    }
  ];

  return (
    <div>
      <HeroSlider />
      
      <section className="section bg-primary-dark">
        <div className="container">
          <div className="section-title">
            <span className="subtitle">Our Expertise</span>
            <h2>What We Specialize In</h2>
          </div>
          <div className="gallery-grid">
            {specializations.map((spec, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="card">
                <div className="card-image">
                  <img src={spec.image} alt={spec.title} />
                </div>
                <div className="card-body">
                  <div className="text-center text-accent-gold text-4xl mb-4">{spec.icon}</div>
                  <h3 className="card-title text-center">{spec.title}</h3>
                  <p className="text-center italic">"{spec.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {services.length > 0 && (
        <section className="section bg-secondary-dark">
          <div className="container">
            <div className="section-title">
              <span className="subtitle">Popular Services</span>
              <h2>Our Photography Services</h2>
            </div>
            <div className="gallery-grid">
              {services.map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
            <div className="text-center mt-20">
              <Link to="/services" className="btn btn-primary btn-lg">View All Services</Link>
            </div>
          </div>
        </section>
      )}

      <section className="section bg-gradient-to-r from-accent-gold to-amber-400 py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-primary-dark mb-6">Ready to Capture Your Story?</h2>
          <Link to="/contact" className="btn bg-primary-dark text-accent-gold btn-lg">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
```

### About Page (Create: `/src/pages/About.jsx`)
```jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="section pt-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
                alt="Photographer"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl font-bold mb-6">About Lathish Photography</h1>
              <p className="text-lg text-text-muted mb-4">
                With over 10 years of experience in professional photography, I specialize in capturing the most precious moments of your life.
              </p>
              <p className="text-lg text-text-muted mb-4">
                Every photograph is a story, and every story deserves to be told beautifully. My passion is to create timeless memories that you'll cherish forever.
              </p>
              <div className="space-y-3">
                <p>✓ 500+ Weddings Covered</p>
                <p>✓ Award-Winning Photographer</p>
                <p>✓ Professional Team</p>
                <p>✓ Latest Equipment</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
```

### Services Page (Create: `/src/pages/Services.jsx`)
```jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/services');
        const data = await response.json();
        if (data.success) {
          setServices(data.data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, []);

  return (
    <div className="min-h-screen">
      <section className="section pt-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-text-muted">
              Professional photography services tailored to capture your precious moments
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">Loading...</div>
          ) : (
            <div className="gallery-grid mt-12">
              {services.map((service, index) => (
                <ServiceCard key={service._id} service={service} delay={index * 0.1} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
```

### Portfolio Page (Create: `/src/pages/Portfolio.jsx`)
```jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useGallery } from '../context/GalleryContext';
import ImageModal from '../components/ImageModal';

const Portfolio = () => {
  const { images, loading, fetchImages, categories, fetchCategories } = useGallery();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchImages({ category: activeCategory === 'all' ? '' : activeCategory });
  }, [activeCategory, fetchImages, fetchCategories]);

  return (
    <div className="min-h-screen">
      <section className="section pt-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeCategory === 'all'
                  ? 'bg-accent-gold text-primary-dark'
                  : 'bg-secondary-dark text-text-light hover:border-accent-gold border'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeCategory === cat
                    ? 'bg-accent-gold text-primary-dark'
                    : 'bg-secondary-dark text-text-light hover:border-accent-gold border'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {images.map((image) => (
              <motion.div
                key={image._id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="gallery-item cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.imageUrl} alt={image.title} className="w-full h-full object-cover" />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h3>{image.title}</h3>
                    <p>{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default Portfolio;
```

### Contact Page (Create: `/src/pages/Contact.jsx`)
```jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { contactAPI } from '../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    service: 'general'
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await contactAPI.submitForm(formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({ name: '', phone: '', email: '', message: '', service: 'general' });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to submit form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="section pt-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-text-muted">Let's turn moments into memories</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <FaMapMarkerAlt className="text-accent-gold text-2xl mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Address</h3>
                    <p className="text-text-muted">Karkala, Nitte, Udupi, Karnataka</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <FaPhone className="text-accent-gold text-2xl mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                    <a href="tel:+919876543210" className="text-accent-gold hover:text-accent-light">
                      +91 9876 543 210
                    </a>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <FaEnvelope className="text-accent-gold text-2xl mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <a href="mailto:info@lathishphotography.com" className="text-accent-gold hover:text-accent-light">
                      info@lathishphotography.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-12 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2346819289567!2d74.46154762346899!3d13.195603786886434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfe69c1c65c6f5%3A0x8a36c8c8c8c8c8c8!2sKarkala%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                  />
                </div>

                <div className="form-group">
                  <label>Service Interested</label>
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="general">General Inquiry</option>
                    <option value="wedding">Wedding</option>
                    <option value="engagement">Engagement</option>
                    <option value="pre-wedding">Pre-Wedding</option>
                    <option value="maternity">Maternity</option>
                    <option value="family">Family</option>
                    <option value="events">Events</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event..."
                    required
                  ></textarea>
                </div>

                <button type="submit" disabled={loading} className="btn btn-primary btn-lg w-full">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
```

### ServiceDetail Page (Create: `/src/pages/ServiceDetail.jsx`)
```jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageModal from '../components/ImageModal';

const ServiceDetail = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const loadService = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/services/${slug}`);
        const data = await response.json();
        if (data.success) {
          setService(data.data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    loadService();
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!service) return <div className="min-h-screen flex items-center justify-center">Service not found</div>;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 pt-20">
        <img src={service.coverImage} alt={service.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-12">
            <h1 className="text-5xl font-bold text-white">{service.name}</h1>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">About This Service</h2>
              <p className="text-lg text-text-muted mb-8">{service.longDescription}</p>

              {service.features && service.features.length > 0 && (
                <>
                  <h3 className="text-2xl font-bold mb-4">What's Included</h3>
                  <ul className="space-y-3 mb-12">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-text-light flex items-center gap-3">
                        <span className="text-accent-gold">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Gallery */}
              <h3 className="text-2xl font-bold mb-6">Photo Gallery</h3>
              <div className="gallery-grid">
                {service.images && service.images.map((image, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="gallery-item cursor-pointer"
                    onClick={() => setSelectedImage({ imageUrl: image, title: service.name })}
                  >
                    <img src={image} alt={`${service.name} ${i + 1}`} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-secondary-dark p-8 rounded-lg sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Booking Details</h3>

                {service.price?.startingFrom && (
                  <div className="mb-6">
                    <p className="text-text-muted mb-2">Starting Price</p>
                    <p className="text-4xl font-bold text-accent-gold">
                      ₹{service.price.startingFrom.toLocaleString('en-IN')}
                    </p>
                  </div>
                )}

                {service.duration && (
                  <div className="mb-6 pb-6 border-b border-border-color">
                    <p className="text-text-muted mb-2">Duration</p>
                    <p className="text-lg font-semibold">{service.duration}</p>
                  </div>
                )}

                <button className="btn btn-primary w-full">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default ServiceDetail;
```

---

## ⚙️ Configuration Files

### `.env` (Backend)
```
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/photography-portfolio
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=admin@email.com
```

### `.env` (Frontend)
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 📦 Dependencies

### Backend
- express
- mongoose
- cors
- dotenv
- nodemailer
- multer
- helmet
- express-rate-limit

### Frontend
- react
- react-router-dom
- axios
- framer-motion
- react-icons
- react-toastify
- swiper

---

## 🚀 Deployment

### Backend (Heroku)
```bash
heroku create your-app-name
heroku config:set MONGODB_URI=your_mongodb_atlas_uri
git push heroku main
```

### Frontend (Netlify)
```bash
npm run build
# Deploy the build folder to Netlify
```

---

## 📸 Sample Data

The `seed.js` script populates your database with:
- 8 Services (Wedding, Engagement, Pre-wedding, etc.)
- 11 Gallery Images across different categories
- Sample metadata and pricing

Run: `npm run seed`

---

## 🎯 Next Steps

1. ✅ Start MongoDB locally
2. ✅ Install dependencies (frontend & backend)
3. ✅ Run seed script
4. ✅ Start backend server
5. ✅ Start frontend
6. ✅ Visit http://localhost:3000

---

## 📞 Support

For issues or questions:
- Check MongoDB connection
- Verify .env files
- Check console for errors
- Ensure ports 3000 and 5000 are available

---

**Happy Shooting!** 📸
