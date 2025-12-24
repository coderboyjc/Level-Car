import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Lindgren",
    location: "Burlingame, CA",
    text: "Outstanding attention to detail. Our kitchen remodel exceeded all expectations. The level of craftsmanship is truly world-class.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Ross",
    location: "Palo Alto, CA",
    text: "Professional, on-time, and meticulous. Level Carpentry is the only team I trust for my home renovations. Highly recommended.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Garcia",
    location: "San Francisco, CA",
    text: "The craftsmanship is unparalleled. They transformed our master bathroom into a minimalist masterpiece. Absolute perfection.",
    rating: 5
  },
  {
    id: 4,
    name: "David Kaplan",
    location: "Menlo Park, CA",
    text: "Their communication was flawless and the execution was even better. They handled our complex ADU project with ease.",
    rating: 5
  },
  {
    id: 5,
    name: "James Wilson",
    location: "Atherton, CA",
    text: "Meticulous work on our Ipe deck. The transition from indoor to outdoor space is seamless. A top-tier team in every sense.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + testimonials.length) % testimonials.length;

    // Normalize diff to -1, 0, 1 for the immediate neighbors
    let normalizedDiff = diff;
    if (diff > testimonials.length / 2) normalizedDiff = diff - testimonials.length;

    const isActive = normalizedDiff === 0;
    const isNext = normalizedDiff === 1;
    const isPrev = normalizedDiff === -1;

    if (isActive) {
      return {
        zIndex: 5,
        opacity: 1,
        scale: 1,
        x: 0,
        rotateY: 0,
        filter: 'blur(0px)',
      };
    } else if (isNext) {
      return {
        zIndex: 3,
        opacity: 0.6,
        scale: 0.85,
        x: '60%',
        rotateY: -25,
        filter: 'blur(2px)',
      };
    } else if (isPrev) {
      return {
        zIndex: 3,
        opacity: 0.6,
        scale: 0.85,
        x: '-60%',
        rotateY: 25,
        filter: 'blur(2px)',
      };
    } else {
      return {
        zIndex: 0,
        opacity: 0,
        scale: 0.7,
        x: normalizedDiff > 0 ? '120%' : '-120%',
        rotateY: normalizedDiff > 0 ? -45 : 45,
        filter: 'blur(8px)',
      };
    }
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header center-align">
          <span className="tagline">Client Voices</span>
          <h2>The Level Experience</h2>
          <div className="accent-line"></div>
        </div>

        <div className="carousel-container">
          <div className="carousel-track">
            {testimonials.map((testimonial, index) => {
              const style = getCardStyle(index);
              return (
                <motion.div
                  key={testimonial.id}
                  className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                  animate={style}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  <div className="quote-icon">
                    <Quote size={40} fill="var(--safety-yellow)" stroke="none" />
                  </div>

                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="var(--safety-yellow)" stroke="none" />
                    ))}
                  </div>

                  <p className="testimonial-text">"{testimonial.text}"</p>

                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-location">{testimonial.location}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="carousel-controls">
            <button className="control-btn prev" onClick={prevSlide} aria-label="Previous testimonial">
              <ChevronLeft size={24} />
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button className="control-btn next" onClick={nextSlide} aria-label="Next testimonial">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background-color: var(--white);
          padding: 8rem 0;
          overflow: hidden;
          position: relative;
        }

        .center-align {
          text-align: center;
          margin-bottom: 5rem;
        }

        .center-align .accent-line {
          margin: 0 auto;
        }

        .tagline {
          color: var(--safety-yellow);
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 1rem;
        }

        .testimonials-section h2 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          color: var(--matte-black);
        }

        .accent-line {
          width: 60px;
          height: 4px;
          background-color: var(--safety-yellow);
        }

        .carousel-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          perspective: 1200px;
          height: 600px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .carousel-track {
          position: relative;
          width: 100%;
          height: 450px;
          transform-style: preserve-3d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .testimonial-card {
          position: absolute;
          width: 100%;
          max-width: 500px;
          background-color: var(--white);
          color: var(--matte-black);
          padding: 3.5rem;
          box-shadow: 0 15px 35px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-left: 4px solid var(--safety-yellow);
          border-top: 1px solid #eee;
          border-right: 1px solid #eee;
          border-bottom: 1px solid #eee;
          transform-origin: center;
          backface-visibility: hidden;
        }

        .quote-icon {
          margin-bottom: 2rem;
          opacity: 0.2;
        }

        .stars {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }

        .testimonial-text {
          font-size: 1.25rem;
          line-height: 1.8;
          font-style: italic;
          color: var(--gray-medium);
          margin-bottom: 2.5rem;
          flex-grow: 1;
        }

        .author-info {
           border-top: 1px solid #eee;
           padding-top: 1.5rem;
           width: 100%;
        }

        .author-name {
          font-size: 1.2rem;
          color: var(--matte-black);
          margin-bottom: 0.25rem;
          font-weight: 700;
        }

        .author-location {
          font-size: 0.9rem;
          color: var(--safety-yellow);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-top: 3rem;
          z-index: 10;
        }

        .control-btn {
          background-color: var(--matte-black);
          color: var(--safety-yellow);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
          border: 1px solid var(--safety-yellow);
        }

        .control-btn:hover {
          background-color: var(--safety-yellow);
          color: var(--matte-black);
        }

        .carousel-dots {
          display: flex;
          gap: 0.75rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          padding: 0;
          background-color: #ddd;
          border: none;
          transition: var(--transition);
        }

        .dot.active {
          background-color: var(--safety-yellow);
          transform: scale(1.3);
          width: 8px;
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 6rem 0;
          }

          .testimonials-section h2 {
            font-size: 2.5rem;
          }

          .carousel-container {
            height: 550px;
          }

          .carousel-track {
            height: 480px;
          }

          .testimonial-card {
            max-width: 90%;
            padding: 2.5rem 1.5rem;
            x: 0 !important;
            rotateY: 0 !important;
            opacity: 0 !important;
          }

          .testimonial-card.active {
            opacity: 1 !important;
            scale: 1 !important;
            zIndex: 5 !important;
            filter: blur(0px) !important;
          }

          .testimonial-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
