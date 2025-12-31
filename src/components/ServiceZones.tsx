import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const cities = [
  'Atherton', 'Belmont', 'Brisbane', 'Burlingame', 'Colma',
  'Daly City', 'East Palo Alto', 'Foster City', 'Half Moon Bay', 'Hillsborough',
  'Los Altos', 'Menlo Park', 'Millbrae', 'Mountain View', 'Pacifica',
  'Palo Alto', 'Portola Valley', 'Redwood City', 'San Bruno', 'San Carlos',
  'San Francisco', 'San Mateo', 'South San Francisco', 'Stanford', 'Woodside'
];

const ServiceZones = () => {
  return (
    <section id="service-zones" className="service-zones-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="tagline">Where We Build</span>
          <h2>Our Service Areas</h2>
          <div className="accent-line"></div>
          <p className="subtitle">Proudly serving the San Francisco Bay Area and San Mateo County with premium craftsmanship.</p>
        </motion.div>

        <div className="cities-grid">
          {cities.map((city, index) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              viewport={{ once: true }}
              className="city-item"
            >
              <MapPin className="city-icon" size={16} />
              <span>{city}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .service-zones-section {
          background-color: var(--matte-black);
          padding: 8rem 0;
          color: var(--white);
          overflow: hidden;
        }

        .service-zones-section .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .service-zones-section .tagline {
          color: var(--safety-yellow);
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 1rem;
        }

        .service-zones-section h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .service-zones-section .accent-line {
          width: 60px;
          height: 4px;
          background-color: var(--safety-yellow);
          margin: 0 auto 2rem;
        }

        .service-zones-section .subtitle {
          color: var(--gray-medium);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .cities-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
        }

        .city-item {
          background-color: #222;
          padding: 1.2rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          border-left: 3px solid #333;
          transition: var(--transition);
          font-family: var(--font-heading);
          font-weight: 500;
        }

        .city-item:hover {
          border-left-color: var(--safety-yellow);
          background-color: #2a2a2a;
        }

        .city-icon {
          color: var(--safety-yellow);
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .cities-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 768px) {
          .service-zones-section {
            padding: 6rem 0;
          }

          .service-zones-section h2 {
            font-size: 2.5rem;
          }

          .cities-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.8rem;
          }

          .city-item {
            padding: 0.7rem 1rem;
            font-size: 0.85rem;
            gap: 0.4rem;
          }
        }

        @media (max-width: 480px) {
          .cities-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.6rem;
          }

          .city-item {
            padding: 0.5rem 0.7rem;
            font-size: 0.75rem;
            gap: 0.4rem;
          }

          .city-icon {
            width: 14px;
            height: 14px;
          }
          
          .service-zones-section h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceZones;
