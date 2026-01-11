import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Bath, Home, Trees, PlusSquare, Construction, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Kitchen Remodeling',
    description: 'Bespoke culinary spaces designed for both functionality and aesthetic brilliance. Specialized in San Francisco kitchen remodeling.',
    image: '/hero_remodel_san_francisco_1766174336013.png',
    icon: <ChefHat size={32} />
  },
  {
    title: 'Bathroom Renovation',
    description: 'Transform your bathroom into a spa-like retreat with premium fixtures, master tiling, and modern lighting solutions.',
    image: '/bathroom_remodel_modern_1766174352234.png',
    icon: <Bath size={32} />
  },
  {
    title: 'Whole House Remodeling',
    description: 'Comprehensive San Mateo County home renovations. We manage every detail of your full-scale property transformation.',
    image: '/whole_house_remodel_interior_1766174370261.png',
    icon: <Home size={32} />
  },
  {
    title: 'Patio / Decks / Fencing',
    description: 'Elevate your outdoor living with master-crafted decks, premium fencing, and custom patio solutions.',
    image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&q=80&w=800',
    icon: <Trees size={32} />
  },
  {
    title: 'ADU & Room Additions',
    description: 'Expertly designed ADUs and seamless room additions to increase your living space and property value.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    icon: <PlusSquare size={32} />
  },
  {
    title: 'New Construction / Complete Renovation',
    description: 'From ground-up builds to total structural overhauls, we deliver excellence in every major construction phase.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800',
    icon: <Construction size={32} />
  }
];

const Services = () => {
  const [mobileIndex, setMobileIndex] = useState(0);

  const paginate = (newDirection: number) => {
    setMobileIndex((prevIndex) => (prevIndex + newDirection + services.length) % services.length);
  };

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="section-header">
          <span className="tagline">Our Expertise</span>
          <h2>Crafting Your Vision</h2>
          <div className="accent-line"></div>
        </div>

        {/* Desktop Grid */}
        <div className="services-grid desktop-only">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card"
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-icon-box">{service.icon}</div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider - Smooth Animation (like Testimonials) */}
        <div className="mobile-slider mobile-only">
          <div className="slider-container">
            {services.map((service, index) => {
              const diff = (index - mobileIndex + services.length) % services.length;
              let normalizedDiff = diff;
              if (diff > services.length / 2) normalizedDiff = diff - services.length;

              const isActive = normalizedDiff === 0;

              const cardStyle = isActive
                ? { opacity: 1, scale: 1, x: 0, zIndex: 5, display: 'block' as const }
                : { opacity: 0, scale: 0.8, x: 0, zIndex: 0, display: 'none' as const };

              return (
                <motion.div
                  key={index}
                  className="service-card mobile-card"
                  animate={cardStyle}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="service-icon-box">{service.icon}</div>
                  <div className="service-info">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="slider-controls">
            <button className="slider-btn" onClick={() => paginate(-1)} aria-label="Previous service">
              <ChevronLeft size={24} />
            </button>
            <div className="slider-dots">
              {services.map((_, idx) => (
                <div
                  key={idx}
                  className={`dot ${idx === mobileIndex ? 'active' : ''}`}
                  onClick={() => setMobileIndex(idx)}
                />
              ))}
            </div>
            <button className="slider-btn" onClick={() => paginate(1)} aria-label="Next service">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .services-section {
          background-color: var(--white);
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .tagline {
          color: var(--safety-yellow);
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          font-size: 0.9rem;
        }

        .section-header h2 {
          font-size: 3rem;
          margin-top: 0.5rem;
        }

        .accent-line {
          width: 60px;
          height: 4px;
          background-color: var(--safety-yellow);
          margin: 1.5rem auto 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 5rem 2.5rem;
        }

        .service-card {
          position: relative;
          background-color: var(--white);
          border: 1px solid #eee;
          transition: var(--transition);
          height: 100%;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          border-color: var(--safety-yellow);
        }

        .service-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-image img {
          transform: scale(1.1);
        }

        .service-icon-box {
          position: absolute;
          top: 220px;
          right: 2rem;
          background-color: var(--safety-yellow);
          color: var(--matte-black);
          padding: 1rem;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 4px 4px 0 var(--matte-black);
        }

        .service-info {
          padding: 3.5rem 2rem 2.5rem;
        }

        .service-info h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--matte-black);
        }

        .service-info p {
          color: var(--gray-medium);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Mobile Only Styles */
        .mobile-only {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          
          .mobile-only {
            display: block;
          }

          .section-header {
            margin-bottom: 3rem;
          }

          .section-header h2 {
            font-size: 2.2rem;
          }

          .slider-container {
            position: relative;
            height: 500px;
            margin-bottom: 2rem;
          }

          .mobile-card {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .slider-controls {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2rem;
          }

          .slider-btn {
            background-color: var(--matte-black);
            color: var(--safety-yellow);
            border: 1px solid var(--safety-yellow);
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--transition);
          }

          .slider-btn:active {
            transform: scale(0.9);
          }

          .slider-dots {
            display: flex;
            gap: 0.8rem;
          }

          .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #ddd;
            transition: var(--transition);
            cursor: pointer;
          }

          .dot.active {
            background-color: var(--safety-yellow);
            transform: scale(1.3);
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
