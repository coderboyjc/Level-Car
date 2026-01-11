import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
          <span className="logo-level">LEVEL</span>
          <span className="logo-carpentry">CARPENTRY</span>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
          <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
          <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>Portfolio</a>
          <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')}>Testimonials</a>
          <a href="#service-zones" onClick={(e) => handleNavClick(e, '#service-zones')}>Service Zones</a>
          <div className="nav-actions">
            <a href="tel:" className="nav-call">Call</a>
            <a href="#quote" onClick={(e) => handleNavClick(e, '#quote')} className="nav-cta">Get Quote</a>
          </div>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition);
        }

        .navbar.scrolled {
          background-color: var(--white);
          padding: 1rem 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .logo-level {
          color: var(--matte-black);
        }

        .logo-carpentry {
          color: var(--safety-yellow);
          margin-left: 0.2rem;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-links a {
          font-family: var(--font-heading);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          color: var(--white);
          transition: var(--transition);
        }

        .navbar.scrolled .nav-links a:not(.nav-cta):not(.nav-call) {
          color: var(--matte-black);
        }

        .navbar.scrolled .logo-level {
          color: var(--matte-black);
        }
        
        .navbar:not(.scrolled) .logo-level {
          color: var(--white);
        }

        .nav-links a:hover {
          color: var(--safety-yellow);
        }

        .nav-cta {
          background-color: var(--safety-yellow);
          color: var(--matte-black) !important;
          padding: 0.6rem 1.5rem;
          border-radius: 0;
          border: 1px solid var(--safety-yellow);
        }

        .nav-cta:hover {
          background-color: transparent !important;
          color: var(--safety-yellow) !important;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-call {
          border: 1px solid var(--white);
          color: var(--white) !important;
          padding: 0.6rem 1.5rem;
          border-radius: 0;
        }

        .navbar.scrolled .nav-call {
          border-color: var(--matte-black);
          color: var(--matte-black) !important;
        }

        .nav-call:hover {
          background-color: var(--safety-yellow) !important;
          border-color: var(--safety-yellow) !important;
          color: var(--matte-black) !important;
        }

        .mobile-toggle {
          display: none;
          background: none;
          color: var(--white);
        }

        .navbar.scrolled .mobile-toggle {
          color: var(--matte-black);
        }

        @media (max-width: 768px) {
          .mobile-toggle {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--matte-black);
            flex-direction: column;
            padding: 3rem 2rem;
            gap: 2rem;
            transform: translateY(-20px); /* Start slightly higher for fade-in effect */
            opacity: 0;
            pointer-events: none;
            transition: all 0.4s ease-in-out; /* Smooth transition for everything */
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }

          .nav-actions {
            flex-direction: column;
            width: 100%;
            gap: 1rem;
          }

          .nav-actions a {
            width: 100%;
            text-align: center;
          }

          .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: all;
          }

          /* FORCE mobile menu links to be white always */
          .nav-links a {
            color: var(--white) !important;
          }

          /* Ensure Desktop specific rules don't bleed into mobile via media query separation if needed, 
             but here strictly overriding for mobile scope */
          
          /* We need to be careful with !important, but for mobile menu overlay on black bg it is required */
          .navbar.scrolled .nav-links a:not(.nav-cta) {
            color: var(--white) !important;
          }

          /* Mobile Call Button */
          .navbar.scrolled .nav-links .nav-call {
             color: var(--white) !important;
             border-color: var(--white) !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
