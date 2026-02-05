import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

// Layout and Pages
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Wedding from './pages/Wedding';
import PreWedding from './pages/PreWedding';
import Baby from './pages/Baby';
import Maternity from './pages/Maternity';
import Events from './pages/Events';
import Portfolio from './pages/Portfolio';

// Component to handle page transitions
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="wedding" element={<Wedding />} />
          <Route path="prewedding" element={<PreWedding />} />
          <Route path="baby" element={<Baby />} />
          <Route path="maternity" element={<Maternity />} />
          <Route path="events" element={<Events />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <Router>
        <AnimatedRoutes />
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastClassName="bg-gray-800 text-white"
          progressClassName="bg-gradient-to-r from-yellow-500 to-yellow-600"
        />
      </Router>
    </div>
  );
}

export default App;