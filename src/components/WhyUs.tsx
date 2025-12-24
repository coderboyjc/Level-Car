import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, ThumbsUp } from 'lucide-react';

const stats = [
  {
    value: "500+",
    label: "Satisfied Clients",
    subtext: "Building lasting relationships through quality.",
    icon: <Users size={24} />,
    delay: 0.1
  },
  {
    value: "1000+",
    label: "Projects Completed",
    subtext: "From minor repairs to major renovations.",
    icon: <Award size={24} />,
    delay: 0.2
  },
  {
    value: "100%",
    label: "Success Rate",
    subtext: "Committed to excellence in every detail.",
    icon: <ThumbsUp size={24} />,
    delay: 0.3
  }
];

const features = [
  "Master Craftsmanship",
  "Transparent Pricing",
  "Licensed & Insured",
  "On-Time Completion",
  "Attention to Detail",
  "Client-First Approach"
];

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        <div className="why-us-layout">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="why-us-content"
          >
            <span className="tagline">Why Choose Us</span>
            <h2>Crafting Excellence, <br />Building Your Vision</h2>
            <div className="accent-line"></div>

            <p className="story">
              At Level Carpentry, we believe that every home tells a story. Our mission is to help you write yours through meticulous craftsmanship and dedicated service. With years of experience in San Francisco and San Mateo County, we've built a reputation for turning complex ideas into beautiful, functional realities.
            </p>

            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <CheckCircle2 className="feature-icon" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Stats Cards */}
          <div className="why-us-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay, duration: 0.5 }}
                viewport={{ once: true }}
                className="stat-card"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(255, 204, 0, 0.1)' }}
              >
                <div className="stat-header">
                  <div className="stat-icon-container">
                    {stat.icon}
                  </div>
                  <div className="stat-value">{stat.value}</div>
                </div>
                <div className="stat-info">
                  <h3>{stat.label}</h3>
                  <p>{stat.subtext}</p>
                </div>
                <div className="stat-accent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .why-us-section {
          background-color: var(--matte-black);
          padding: 10rem 0;
          color: var(--white);
          overflow: hidden;
        }

        .why-us-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .why-us-content .tagline {
          color: var(--safety-yellow);
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 1rem;
        }

        .why-us-content h2 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .why-us-content .accent-line {
          width: 60px;
          height: 4px;
          background-color: var(--safety-yellow);
          margin-bottom: 2.5rem;
        }

        .why-us-content .story {
          font-size: 1.1rem;
          color: var(--gray-medium);
          margin-bottom: 3rem;
          max-width: 500px;
          line-height: 1.8;
        }

        .features-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-family: var(--font-heading);
          font-weight: 500;
        }

        .feature-icon {
          color: var(--safety-yellow);
          flex-shrink: 0;
        }

        .why-us-stats {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .stat-card {
          background-color: #222;
          padding: 2rem;
          border-left: 4px solid #333;
          position: relative;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .stat-card:hover {
          border-left-color: var(--safety-yellow);
          background-color: #2a2a2a;
        }

        .stat-icon-container {
          background-color: var(--safety-yellow);
          color: var(--matte-black);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--safety-yellow);
          font-family: var(--font-heading);
        }

        .stat-info h3 {
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
        }

        .stat-info p {
          color: var(--gray-medium);
          font-size: 0.9rem;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .why-us-layout {
            gap: 3rem;
          }
          
          .why-us-content h2 {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .why-us-section {
            padding: 6rem 0;
          }

          .why-us-layout {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .why-us-content {
            text-align: center;
          }

          .why-us-content .accent-line {
            margin: 0 auto 2.5rem;
          }

          .why-us-content .story {
            margin: 0 auto 3rem;
          }

          .features-list {
            justify-items: start;
            max-width: 400px;
            margin: 0 auto;
          }

          .stat-card {
            padding: 1.5rem;
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
          
          .stat-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyUs;
