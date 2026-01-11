import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  '/hero_remodel_san_francisco_1766174336013.png',
  '/whole_house_project_2_1766262519104.png',
  '/kitchen_project_2_1766262491177.png'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="hero">
      <AnimatePresence mode='popLayout'>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="hero-bg"
          style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
        />
      </AnimatePresence>

      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <span className="hero-tagline">Excellence in Craftsmanship</span>
          <h1>Premium Home Design & Remodeling in <span className="highlight-text">San Francisco</span> & San Mateo County</h1>
          <p>Experience classy home upgrades from kitchens to ADUs, delivered with craftsmanship, transparency, and lasting value by a top-rated San Francisco Bay Area contractor.</p>
          <div className="hero-btns">
            <a href="#quote" className="btn-primary">Get A Free Quote</a>
            <a href="#services" className="btn-secondary">Explore Services</a>
          </div>
        </motion.div>
      </div>

      <button className="slider-nav prev" onClick={prevImage} aria-label="Previous Image">
        <ChevronLeft size={32} />
      </button>
      <button className="slider-nav next" onClick={nextImage} aria-label="Next Image">
        <ChevronRight size={32} />
      </button>

      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          /* Removed static background styles */
          background-color: var(--matte-black);
          overflow: hidden;
          color: var(--white);
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, rgba(26, 26, 26, 0.8) 0%, rgba(26, 26, 26, 0.4) 100%);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 10;
        }

        .slider-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: var(--matte-black);
          color: var(--safety-yellow);
          border: 1px solid var(--safety-yellow);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          cursor: pointer;
          transition: var(--transition);
        }

        .slider-nav:hover {
          background-color: var(--safety-yellow);
          color: var(--matte-black);
        }

        .slider-nav.prev {
          left: 20px;
        }

        .slider-nav.next {
          right: 20px;
        }

        .hero-text {
          max-width: 700px;
        }

        .hero-tagline {
          display: block;
          color: var(--safety-yellow);
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .hero h1 {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .highlight-text {
          color: var(--safety-yellow);
        }

        .hero p {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
        }

        .hero-btns {
          display: flex;
          gap: 1.5rem;
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--white);
          padding: 1rem 2rem;
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border: 2px solid var(--white);
        }

        .btn-secondary:hover {
          background-color: var(--white);
          color: var(--matte-black);
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 100dvh; /* Use dynamic viewport height */
            padding-bottom: 5rem; /* Space for arrows at bottom */
            align-items: center; /* Keep vertically centered */
            display: flex;
          }

          .hero h1 {
            font-size: 2rem;
            line-height: 1.1;
            margin-bottom: 0.75rem; /* Reduced margin */
          }
          
          .hero p {
            font-size: 1rem;
            line-height: 1.4;
            margin-bottom: 1.25rem; /* Reduced margin */
          }

          .hero-btns {
            flex-direction: column;
            width: 100%;
            gap: 0.75rem;
          }

          .hero-btns a {
            text-align: center;
            width: 100%;
            display: block;
            padding: 0.875rem 1rem; /* Compact padding */
            font-size: 0.9rem;
          }

          .slider-nav {
            width: 40px;
            height: 40px;
            top: auto; /* CRITICAL FIX: Reset top position */
            bottom: 1.5rem; /* Position at bottom */
          }

          .slider-nav.prev {
            left: 2rem; /* Align with container padding approx */
            right: auto;
          }

          .slider-nav.next {
            right: 2rem; /* Align with container padding approx */
            left: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
