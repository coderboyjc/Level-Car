import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const projects = [
  // KITCHEN (6)
  { id: 1, title: 'Modern Culinary Haven', category: 'kitchen', description: 'Bespoke black cabinetry and marble islands.', image: '/kit1.png' },
  { id: 2, title: 'The Chef\'s Atelier', category: 'kitchen', description: 'Professional-grade appliances and ergonomic layout.', image: '/kit2.png' },
  { id: 3, title: 'Marble Minimalist', category: 'kitchen', description: 'Seamless stone surfaces and integrated lighting.', image: '/kit3.png' },
  { id: 4, title: 'Gourmet Peninsula', category: 'kitchen', description: 'Custom wood accents and open shelving.', image: '/kit4.png' },
  { id: 5, title: 'Nordic Light Kitchen', category: 'kitchen', description: 'Bright, airy design with natural oak finishes.', image: '/kit5.png' },
  { id: 6, title: 'Industrial Loft Kitchen', category: 'kitchen', description: 'Exposed brick and matte steel fixtures.', image: '/kit6.png' },

  // BATHROOM (6)
  { id: 7, title: 'Minimalist Spa Retreat', category: 'bathroom', description: 'Freestanding tub and floating vanity.', image: '/bath1.png' },
  { id: 8, title: 'Zen Sanctuary', category: 'bathroom', description: 'Natural stone and warm wood textures.', image: '/bath2.png' },
  { id: 9, title: 'The Onyx Suite', category: 'bathroom', description: 'Dark slate and rain-head shower systems.', image: '/bath3.png' },
  { id: 10, title: 'Marble Master Bath', category: 'bathroom', description: 'Full-height marble slabs and brass accents.', image: '/bath4.png' },
  { id: 11, title: 'Geometric Powder Room', category: 'bathroom', description: 'Bold tiling and architectural lighting.', image: '/bath5.png' },
  { id: 12, title: 'Scandi Guest Bath', category: 'bathroom', description: 'Clean lines and functional minimalism.', image: '/bath6.png' },

  // WHOLE HOUSE (6)
  { id: 13, title: 'Panoramic Living Space', category: 'whole house', description: 'Indoor-outdoor floor-to-ceiling glass.', image: '/whole_house_project_2_1766262519104.png' },
  { id: 14, title: 'The Heights Estate', category: 'whole house', description: 'Modern San Francisco luxury renovation.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800' },
  { id: 15, title: 'Mid-Century Refinement', category: 'whole house', description: 'Heritage restoration with modern tech.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800' },
  { id: 16, title: 'Glass & Steel Villa', category: 'whole house', description: 'Cantilevered architectural masterpiece.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' },
  { id: 17, title: 'The Concrete House', category: 'whole house', description: 'Brutalist modernism with warm interiors.', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800' },
  { id: 18, title: 'Historic Rowhouse', category: 'whole house', description: 'Full gut-renovation of a Victorian classic.', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800' },

  // PATIO / DECKS / FENCING (6)
  { id: 19, title: 'Ipe Master Deck', category: 'patio / decks / fencing', description: 'Custom hardwood decking with view rails.', image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&q=80&w=800' },
  { id: 20, title: 'Minimalist Cedar Fencing', category: 'patio / decks / fencing', description: 'Horizontal slat privacy solutions.', image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&q=80&w=800' },
  { id: 21, title: 'Urban Rooftop Patio', category: 'patio / decks / fencing', description: 'Weather-resistant custom modular systems.', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800' },
  { id: 22, title: 'Bespoke Pergola Design', category: 'patio / decks / fencing', description: 'Automated louvered shade structures.', image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800' },
  { id: 23, title: 'Stone & Wood Terrace', category: 'patio / decks / fencing', description: 'Seamless paving to wood transitions.', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800' },
  { id: 24, title: 'Modern Gate Systems', category: 'patio / decks / fencing', description: 'Automated security with custom carpentry.', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800' },

  // ADU & ROOM ADDITIONS (6)
  { id: 25, title: 'Modern Backyard ADU', category: 'adu & room additions', description: 'Self-contained luxurious secondary suite.', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80&w=800' },
  { id: 26, title: 'The Glass Addition', category: 'adu & room additions', description: 'Kitchen extension with skylight systems.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { id: 27, title: 'Master Suite Expansion', category: 'adu & room additions', description: 'Second-story addition for premium living.', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800' },
  { id: 28, title: 'Modern Studio ADU', category: 'adu & room additions', description: 'Compact, eco-friendly detached dwelling.', image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&q=80&w=800' },
  { id: 29, title: 'Cantilevered Room', category: 'adu & room additions', description: 'Architectural statement room expansion.', image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800' },
  { id: 30, title: 'Garden Guest House', category: 'adu & room additions', description: 'Sustainable design in a green setting.', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=800' },

  // NEW CONSTRUCTION (6)
  { id: 31, title: 'Marin Modern Estate', category: 'new construction', description: 'Ground-up luxury construction.', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800' },
  { id: 32, title: 'Pacific Heights Villa', category: 'new construction', description: 'Full architectural redesign and rebuild.', image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&q=80&w=800' },
  { id: 33, title: 'The Peninsula Project', category: 'new construction', description: 'Contemporary ground-up residence.', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800' },
  { id: 34, title: 'Golden Gate Modern', category: 'new construction', description: 'Structural overhaul for open living.', image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=800' },
  { id: 35, title: 'Sustainable Hillside Home', category: 'new construction', description: 'Eco-conscious new construction.', image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800' },
  { id: 36, title: 'Architectural Milestone', category: 'new construction', description: 'Flagship full-house reconstruction.', image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80&w=800' },
];

const categories = [
  'kitchen',
  'bathroom',
  'whole house',
  'patio / decks / fencing',
  'adu & room additions',
  'new construction'
];

const Gallery = () => {
  const [filter, setFilter] = useState('kitchen');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filteredProjects = projects.filter(p => p.category === filter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') navigateLightbox(1);
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const navigateLightbox = (dir: number) => {
    if (lightboxIndex === null) return;
    const newIndex = (lightboxIndex + dir + filteredProjects.length) % filteredProjects.length;
    setLightboxIndex(newIndex);
  };

  const navigateCarousel = (dir: number) => {
    setCarouselIndex((prev) => (prev + dir + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="portfolio" className="section-padding gallery-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="tagline">Our Portfolio</span>
          <h2>A Legacy of <span className="highlight-text">Excellence</span></h2>
          <div className="accent-line"></div>
        </div>

        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => {
                setFilter(cat);
                setCarouselIndex(0);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List layout for Large Screens, Carousel for Mobile */}
        <div className="gallery-main-container">
          {/* Desktop Grid */}
          <motion.div layout className="gallery-grid desktop-only">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="gallery-item"
                  onClick={() => setLightboxIndex(index)}
                >
                  <div className="gallery-img-wrapper">
                    <img src={project.image} alt={project.title} />
                    <div className="gallery-overlay">
                      <div className="overlay-content">
                        <Maximize2 className="expand-icon" size={24} />
                        <span className="project-category">{project.category}</span>
                        <h3>{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Mobile Centered Carousel - Smooth Animation */}
          <div className="mobile-only gallery-carousel">
            <div className="carousel-wrapper">
              {filteredProjects.map((project, index) => {
                const diff = (index - carouselIndex + filteredProjects.length) % filteredProjects.length;
                let normalizedDiff = diff;
                if (diff > filteredProjects.length / 2) normalizedDiff = diff - filteredProjects.length;

                const isActive = normalizedDiff === 0;
                const isNext = normalizedDiff === 1;
                const isPrev = normalizedDiff === -1;

                let slideStyle;
                if (isActive) {
                  slideStyle = {
                    zIndex: 10,
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  };
                } else if (isPrev) {
                  slideStyle = {
                    zIndex: 0,
                    opacity: 0.5,
                    scale: 0.85,
                    x: '-65%',
                  };
                } else if (isNext) {
                  slideStyle = {
                    zIndex: 0,
                    opacity: 0.5,
                    scale: 0.85,
                    x: '65%',
                  };
                } else {
                  slideStyle = {
                    zIndex: 0,
                    opacity: 0,
                    scale: 0.7,
                    x: normalizedDiff > 0 ? '120%' : '-120%',
                  };
                }

                return (
                  <motion.div
                    key={project.id}
                    className={`carousel-slide ${isActive ? 'active' : ''}`}
                    animate={slideStyle}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                    onClick={() => isActive && setLightboxIndex(index)}
                  >
                    <img src={project.image} alt={project.title} />
                    {isActive && (
                      <div className="slide-info">
                        <h3>{project.title}</h3>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="carousel-controls">
              <button className="nav-btn" onClick={() => navigateCarousel(-1)} aria-label="Previous">
                <ChevronLeft size={24} />
              </button>
              <div className="carousel-dots">
                {filteredProjects.map((_, idx) => (
                  <div
                    key={idx}
                    className={`dot ${idx === carouselIndex ? 'active' : ''}`}
                    onClick={() => setCarouselIndex(idx)}
                  />
                ))}
              </div>
              <button className="nav-btn" onClick={() => navigateCarousel(1)} aria-label="Next">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) setLightboxIndex(null);
            }}
          >
            <button className="close-btn" onClick={() => setLightboxIndex(null)}>
              <X size={32} />
            </button>

            <button className="lb-nav-btn prev" onClick={() => navigateLightbox(-1)}>
              <ChevronLeft size={48} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="lightbox-content"
            >
              <img src={filteredProjects[lightboxIndex].image} alt={filteredProjects[lightboxIndex].title} />
              <div className="lightbox-info">
                <span className="project-category">{filteredProjects[lightboxIndex].category}</span>
                <h3>{filteredProjects[lightboxIndex].title}</h3>
                <p>{filteredProjects[lightboxIndex].description}</p>
                <div className="lightbox-pagination">
                  {lightboxIndex + 1} / {filteredProjects.length}
                </div>
              </div>
            </motion.div>

            <button className="lb-nav-btn next" onClick={() => navigateLightbox(1)}>
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-section {
          background-color: var(--white);
          overflow: hidden;
        }

        .text-center {
          text-align: center;
        }

        .filter-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 4rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .filter-btn {
          background: transparent;
          border: 1px solid #ddd;
          padding: 1rem;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          cursor: pointer;
        }

        .filter-btn.active, .filter-btn:hover {
          background-color: var(--safety-yellow);
          border-color: var(--safety-yellow);
          color: var(--matte-black);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .gallery-item {
          aspect-ratio: 1 / 1;
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }

        .gallery-img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .gallery-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(26, 26, 26, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          opacity: 0;
          transition: var(--transition);
          text-align: center;
          color: var(--white);
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .expand-icon {
          color: var(--safety-yellow);
          margin-bottom: 1rem;
        }

        .project-category {
          display: block;
          color: var(--safety-yellow);
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.15rem;
          margin-bottom: 0.5rem;
        }

        .overlay-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
        }

        /* Mobile Carousel Styles */
        .mobile-only {
          display: none;
        }

        .gallery-carousel {
          position: relative;
          width: 100%;
          padding: 2rem 0;
        }

        .carousel-wrapper {
          position: relative;
          height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
          overflow: hidden;
        }

        .carousel-slide {
          position: absolute;
          width: 70vw;
          height: 380px;
          border-radius: 0;
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .carousel-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
        }

        .carousel-slide.active {
          z-index: 10;
          transform: scale(1);
          width: 85vw;
          height: 420px;
        }

        .carousel-slide.prev-preview {
          transform: translateX(-15%) scale(0.85);
          opacity: 0.5;
          z-index: 0;
          left: -40%;
        }

        .carousel-slide.next-preview {
          transform: translateX(15%) scale(0.85);
          opacity: 0.5;
          z-index: 0;
          right: -40%;
        }

        .slide-info {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 2rem 1rem 1rem;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          color: var(--white);
          text-align: center;
        }

        .slide-info h3 {
          font-size: 1.1rem;
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
        }

        .nav-btn {
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

        .nav-btn:active {
          transform: scale(0.9);
        }

        .carousel-dots {
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ddd;
          cursor: pointer;
          transition: var(--transition);
        }

        .dot.active {
          background: var(--safety-yellow);
          width: 20px;
          border-radius: 10px;
        }

        /* Lightbox Styles */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .close-btn {
          position: absolute;
          top: 2rem;
          right: 2rem;
          color: var(--white);
          background: transparent;
          cursor: pointer;
          z-index: 1010;
        }

        .lb-nav-btn {
          position: absolute;
          color: var(--white);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
        }

        .lb-nav-btn:hover {
          background: var(--safety-yellow);
          color: var(--matte-black);
        }

        .lb-nav-btn.prev { left: 2rem; }
        .lb-nav-btn.next { right: 2rem; }

        .lightbox-content {
          max-width: 1000px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .lightbox-content img {
          max-height: 70vh;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          border: 1px solid #333;
          border-radius: 0;
        }

        .lightbox-info {
          margin-top: 2rem;
          text-align: center;
          color: var(--white);
          max-width: 600px;
        }

        .lightbox-info h3 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: var(--safety-yellow);
        }

        .lightbox-info p {
          color: var(--gray-medium);
          font-size: 1rem;
        }

        .lightbox-pagination {
          margin-top: 1rem;
          font-family: var(--font-heading);
          color: var(--gray-medium);
          font-size: 0.9rem;
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .lb-nav-btn {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none;
          }
          
          .mobile-only {
            display: block;
          }

          .gallery-section {
            padding-bottom: 4rem;
          }

          .filter-tabs {
            grid-template-columns: repeat(3, 1fr);
            padding: 0 1rem;
            gap: 0.5rem;
          }

          .filter-btn {
            font-size: 0.65rem;
            padding: 0.8rem 0.4rem;
          }

          .lb-nav-btn {
            bottom: 2rem;
            top: auto;
          }
          
          .lb-nav-btn.prev { left: 20%; }
          .lb-nav-btn.next { right: 20%; }
          
          .lightbox-overlay {
            padding: 1rem;
          }
          
          .lightbox-content img {
            max-height: 50vh;
          }

          .lightbox-info h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
