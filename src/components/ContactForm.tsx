import { motion } from 'framer-motion';

const ContactForm = () => {
    return (
        <section id="quote" className="section-padding contact-section">
            <div className="container contact-container">
                <div className="contact-info">
                    <span className="tagline">Start Your Project</span>
                    <h2>Request a <span className="highlight-text">Consultation</span></h2>
                    <p>Ready to level up your home? Fill out the form below and we'll get back to you within 12 hours to schedule a walkthrough.</p>

                    <div className="contact-details">
                        <div className="detail-item">
                            <strong>Location:</strong>
                            <span>San Francisco & San Mateo County</span>
                        </div>
                        <div className="detail-item">
                            <strong>Specialization:</strong>
                            <span>High-End Kitchens & Bathrooms</span>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="form-wrapper"
                >
                    <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" placeholder="(555) 000-0000" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Service Interested In</label>
                            <select id="service" required>
                                <option value="">Select a service</option>
                                <option value="kitchen">Kitchen Remodeling</option>
                                <option value="bathroom">Bathroom Renovation</option>
                                <option value="whole-house">Whole House Remodeling</option>
                                <option value="outdoor">Patio / Decks / Fencing</option>
                                <option value="adu">ADU & Room Additions</option>
                                <option value="new-construction">New Construction / Complete Renovation</option>
                                <option value="other">Other Service</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Project Details</label>
                            <textarea id="message" rows={4} placeholder="Tell us about your project..." required></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full">Send Request</button>
                    </form>
                </motion.div>
            </div>

            <style>{`
        .contact-section {
          background-color: var(--white);
          overflow: hidden;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 7rem;
          align-items: center;
          position: relative;
        }

        .contact-info .tagline {
           color: var(--safety-yellow);
           font-family: var(--font-heading);
           font-weight: 700;
           text-transform: uppercase;
           letter-spacing: 0.2rem;
           font-size: 0.9rem;
        }

        .contact-info h2 {
          font-size: 3rem;
          margin: 1rem 0 1.5rem;
          line-height: 1.1;
        }

        .highlight-text {
          color: var(--safety-yellow);
        }

        .contact-info p {
          font-size: 1.1rem;
          color: var(--gray-medium);
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .contact-details {
          display: grid;
          gap: 1.5rem;
          border-top: 1px solid #eee;
          padding-top: 2rem;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
        }

        .detail-item strong {
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          color: var(--matte-black);
          margin-bottom: 0.2rem;
          font-family: var(--font-heading);
        }

        .detail-item span {
          color: var(--gray-medium);
          font-weight: 500;
        }

        .form-wrapper {
          background-color: var(--white);
          padding: 4rem;
          position: relative;
          z-index: 2;
          box-shadow: 30px 30px 0 var(--safety-yellow);
          border: 1px solid #eee;
        }

        .quote-form {
          display: grid;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--matte-black);
        }

        .form-group input, 
        .form-group select, 
        .form-group textarea {
          padding: 1.2rem;
          border: 1px solid #eee;
          background-color: var(--gray-light);
          font-family: var(--font-body);
          font-size: 1rem;
          transition: var(--transition);
        }

        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          border-color: var(--safety-yellow);
          background-color: var(--white);
          outline: none;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .contact-container {
            gap: 4rem;
          }
          
          .contact-info h2 {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            overflow-x: hidden;
          }

          .contact-container {
            grid-template-columns: 1fr;
            gap: 3rem;
            max-width: 100%;
          }

          .contact-info {
            text-align: center;
            padding: 0;
          }

          .contact-info h2 {
            font-size: 2rem;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          .contact-info p {
            font-size: 1rem;
            padding: 0 0.5rem;
          }

          .form-wrapper {
            padding: 2rem 1.5rem;
            box-shadow: none;
            margin: 0;
            border: 2px solid var(--safety-yellow);
          }
        }

        @media (max-width: 480px) {
          .contact-info h2 {
            font-size: 1.75rem;
          }

          .contact-info .tagline {
            font-size: 0.8rem;
          }

          .form-wrapper {
            padding: 1.5rem 1rem;
          }

          .form-group input, 
          .form-group select, 
          .form-group textarea {
            padding: 1rem;
            font-size: 0.95rem;
          }
        }
      `}</style>
        </section>
    );
};

export default ContactForm;
