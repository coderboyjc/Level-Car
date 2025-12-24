import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo white">
              <span className="logo-level">LEVEL</span>
              <span className="logo-carpentry">CARPENTRY</span>
            </div>
            <p>Premium modern remodeling and master carpentry services. Serving the San Francisco Bay Area with excellence since 2010.</p>
            <div className="social-links">
              <a href="#" aria-label="Yelp">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.19 13.94l.162.584 3.553 2.052c.646.367.555.524.13.876l-2.043 1.678c-.48.385-.71.413-.996-.072l-2.01-3.44-.817-1.676 1.984 3.4zm-.14-1.515l.39.17 4.082-.021c.737-.004.858.153.818.59l-.21 2.607c-.053.61-.273.75-.77.422l-3.351-1.934-1.648-.938.69 3.144zm-2.58-2.27c.165-2.518 1.063-5.506 4.12-6.774l.49 3.344c.071.512-.11.574-.46.74l-2.845 1.363-.194.11-1.11 1.217zm-2.015 2.4l-.162-.585-3.547-2.06c-.64-.373-.544-.53-.119-.877l2.05-1.669c.486-.393.715-.415 1 .073l1.997 3.448.817 1.675-2.035-3.438zm1.197 1.51l3.35-1.933 1.648-0.94-.695 3.143-.39.171-4.081-.021c-.738-.005-.859.154-.818.587l.21 2.611c.054.61.274.75.772.421l1.323-3.033zm-1.017-1.908l-.118-.387 1.35-2.853c.165-.35.17-.534.154-0.991l-.101-2.587c-.019-.611-.227-.765-.755-.49l-2.196 1.138c-.52.266-.597.476-.36.929l1.533 2.915.842 1.775-1.479-2.838z" />
                </svg>
              </a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#portfolio">Project Gallery</a></li>
              <li><a href="#quote">Request Quote</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Get In Touch</h3>
            <div className="contact-list">
              <div className="contact-item">
                <Phone size={18} className="icon-yellow" />
                <span>(415) 555-0199</span>
              </div>
              <div className="contact-item">
                <Mail size={18} className="icon-yellow" />
                <span>hello@levelcarpentry.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={18} className="icon-yellow" />
                <span>San Francisco, CA 94110</span>
              </div>
            </div>
          </div>

          <div className="footer-services">
            <h3>Our Services</h3>
            <ul>
              <li>Kitchen Remodeling</li>
              <li>Bathroom Renovation</li>
              <li>Whole House Remodeling</li>
              <li>Patio / Decks / Fencing</li>
              <li>ADU & Room Additions</li>
              <li>New Construction</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Level Carpentry. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--matte-black);
          color: var(--white);
          padding: 5rem 0 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-links ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-links a {
          color: var(--gray-medium);
          font-size: 0.9rem;
          transition: var(--transition);
        }

        .footer-links a:hover {
          color: var(--safety-yellow);
          padding-left: 5px;
        }

        .footer-brand p {
          color: var(--gray-medium);
          margin: 1.5rem 0 2rem;
          max-width: 300px;
        }

        .logo.white .logo-level {
          color: var(--white);
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-links a {
          color: var(--white);
          transition: var(--transition);
        }

        .social-links a:hover {
          color: var(--safety-yellow);
        }

        .footer h3 {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--safety-yellow);
        }

        .contact-list {
          display: grid;
          gap: 1.2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--gray-medium);
        }

        .icon-yellow {
          color: var(--safety-yellow);
        }

        .footer-services ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-services li {
          color: var(--gray-medium);
          font-size: 0.9rem;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid #333;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--gray-medium);
          font-size: 0.85rem;
        }

        .footer-legal {
          display: flex;
          gap: 2rem;
        }

        .footer-legal a:hover {
          color: var(--white);
        }

        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
