import { motion } from 'framer-motion';
import { Phone, Calendar, Ruler, Hammer } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'Reach out via phone or our contact form. We\'ll discuss your vision, budget, and timeline in detail.',
    icon: <Phone size={32} />
  },
  {
    number: '02',
    title: 'Site Assessment',
    description: 'We visit your property to take measurements, assess the space, and provide expert recommendations.',
    icon: <Ruler size={32} />
  },
  {
    number: '03',
    title: 'Design & Proposal',
    description: 'Receive a detailed proposal with 3D renderings, material selections, and a transparent cost breakdown.',
    icon: <Calendar size={32} />
  },
  {
    number: '04',
    title: 'Build & Deliver',
    description: 'Our master craftsmen bring your vision to life with precision, on-time delivery, and minimal disruption.',
    icon: <Hammer size={32} />
  }
];

const Steps = () => {
  return (
    <section id="steps" className="steps-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="tagline">Our Process</span>
          <h2>Four Steps to Excellence</h2>
          <div className="accent-line"></div>
          <p className="subtitle">From concept to completion, we make premium remodeling simple and stress-free.</p>
        </motion.div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="step-card"
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon-container">
                <div className="step-icon">{step.icon}</div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .steps-section {
          background-color: var(--white);
          padding: 8rem 0;
          color: var(--matte-black);
          overflow: hidden;
          position: relative;
        }

        .steps-section .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .steps-section .tagline {
          color: var(--safety-yellow);
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 1rem;
        }

        .steps-section h2 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          color: var(--matte-black);
        }

        .steps-section .accent-line {
          width: 60px;
          height: 4px;
          background-color: var(--safety-yellow);
          margin: 0 auto 2rem;
        }

        .steps-section .subtitle {
          color: var(--gray-medium);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.5rem;
          position: relative;
        }

        .step-card {
          background-color: var(--white);
          padding: 2rem 1.5rem;
          text-align: center;
          position: relative;
          border: 1px solid #eee;
          border-top: 4px solid var(--safety-yellow);
          transition: var(--transition);
        }

        .step-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          border-color: var(--safety-yellow);
        }

        .step-number {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--matte-black);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .step-icon-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .step-icon {
          background-color: var(--safety-yellow);
          color: var(--matte-black);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 4px 4px 0 var(--matte-black);
        }

        .step-card h3 {
          font-size: 1.35rem;
          margin-bottom: 0.8rem;
          color: var(--matte-black);
        }

        .step-card p {
          color: var(--gray-medium);
          line-height: 1.6;
          font-size: 0.9rem;
        }

        .step-connector {
          position: absolute;
          top: 50%;
          right: -2.5rem;
          width: 2.5rem;
          height: 2px;
          background: linear-gradient(to right, #eee, transparent);
          transform: translateY(-50%);
          display: none;
        }

        @media (min-width: 769px) {
          .step-connector {
            display: block;
          }
        }

        @media (max-width: 1024px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .step-connector {
            display: none;
          }

          .steps-section h2 {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .steps-section {
            padding: 6rem 0;
          }

          .steps-section h2 {
            font-size: 2.5rem;
          }

          .steps-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .step-card {
            padding: 2.5rem 1.5rem;
          }

          .step-number {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Steps;
