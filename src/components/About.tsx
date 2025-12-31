import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container about-container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-image-wrapper"
          >
            <div className="experience-badge">
              <span className="years">12+</span>
              <span className="text">Years of Excellence</span>
            </div>
            <img
              src="/mauricio.png"
              alt="Master Carpenter at Work"
              className="about-img"
            />
            <div className="about-accent-box"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <span className="tagline">The Level Standard</span>
            <h2>Precision In Every <span className="highlight-text">Detail</span></h2>
            <p className="lead">At Level Carpentry, we believe that high-end remodeling is more than just construction—it's an art form of transforming vision into structural reality.</p>
            <p>Founded on the principles of master craftsmanship and architectural integrity, we serve the San Francisco Bay Area with a focus on premium kitchen, bathroom, and full-house renovations. Every cut we make and every joint we secure is a testament to our commitment to durability and aesthetic perfection.</p>

            <div className="stats-grid">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat-item">
                <h3>$2M+</h3>
                <p>Dollars Saved</p>
              </div>
              <div className="stat-item">
                <h3>24hr</h3>
                <p>Response Time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--white);
          overflow: hidden;
        }

        .about-container {
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .about-image-wrapper {
          position: relative;
        }

        .about-img {
          width: 100%;
          height: 600px;
          object-fit: cover;
          position: relative;
          z-index: 2;
          box-shadow: 30px 30px 0 var(--safety-yellow);
        }

        .experience-badge {
          position: absolute;
          top: -2rem;
          left: -2rem;
          background-color: var(--matte-black);
          color: var(--white);
          padding: 2rem;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .experience-badge .years {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--safety-yellow);
          line-height: 1;
        }

        .experience-badge .text {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 0.5rem;
          font-weight: 600;
        }

        .about-accent-box {
          position: absolute;
          bottom: -3rem;
          right: -3rem;
          width: 300px;
          height: 300px;
          background-color: var(--gray-light);
          z-index: 1;
        }

        .about-content h2 {
          font-size: 3rem;
          margin: 1rem 0 1.5rem;
        }

        .about-content .lead {
          font-size: 1.25rem;
          color: var(--matte-black);
          font-weight: 600;
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }

        .about-content p {
          color: var(--gray-medium);
          margin-bottom: 2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #eee;
        }

        .stat-item h3 {
          font-size: 2rem;
          color: var(--matte-black);
          margin-bottom: 0.2rem;
        }

        .stat-item p {
          margin-bottom: 0;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .about-grid {
            gap: 3rem;
          }
          
          .about-content h2 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 5rem;
          }

          .about-image-wrapper {
            order: 2;
          }

          .about-content {
            order: 1;
            text-align: center;
          }

          .about-img {
            height: 400px;
            box-shadow: 15px 15px 0 var(--safety-yellow);
          }

          .experience-badge {
            left: 0;
            top: -1rem;
            padding: 1.5rem;
          }

          .about-accent-box {
            display: none;
          }

          .stats-grid {
            justify-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
