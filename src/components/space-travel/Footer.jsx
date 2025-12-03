import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="brand-title">
              <span className="brand-icon">🚀</span>
              Space Odyssey
            </h3>
            <p className="brand-description">
              Pioneering the future of space tourism with luxury, safety, and unforgettable experiences beyond Earth.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="links-section">
              <h4 className="links-title">Servicios</h4>
              <ul className="links-list">
                <li><a href="#services">Viajes Orbitales</a></li>
                <li><a href="#services">Estancia Lunar</a></li>
                <li><a href="#services">Exploración Marciana</a></li>
                <li><a href="#services">Crucero Espacial</a></li>
              </ul>
            </div>
            
            <div className="links-section">
              <h4 className="links-title">Información</h4>
              <ul className="links-list">
                <li><a href="#about">Sobre Nosotros</a></li>
                <li><a href="#safety">Seguridad</a></li>
                <li><a href="#training">Entrenamiento</a></li>
                <li><a href="#faq">Preguntas Frecuentes</a></li>
              </ul>
            </div>
            
            <div className="links-section">
              <h4 className="links-title">Contacto</h4>
              <div className="contact-info">
                <p>📧 info@spaceodyssey.com</p>
                <p>📞 +1 (555) 123-SPACE</p>
                <p>📍 Houston, TX, USA</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">YouTube</a>
          </div>
          <p className="footer-copy">
            © 2024 Space Odyssey. Todos los derechos reservados.
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: linear-gradient(180deg, rgba(11, 20, 38, 0.9) 0%, #0B1426 100%);
          padding: 4rem 2rem 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }
        
        .footer-brand {
          max-width: 400px;
        }
        
        .brand-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .brand-icon {
          font-size: 2rem;
        }
        
        .brand-description {
          color: #cbd5e1;
          line-height: 1.6;
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        .links-title {
          color: #06b6d4;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .links-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .links-list li {
          margin-bottom: 0.5rem;
        }
        
        .links-list a {
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .links-list a:hover {
          color: #06b6d4;
        }
        
        .contact-info p {
          color: #cbd5e1;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-social {
          display: flex;
          gap: 1.5rem;
        }
        
        .social-link {
          color: #cbd5e1;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .social-link:hover {
          color: #06b6d4;
        }
        
        .footer-copy {
          color: #94a3b8;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 3rem 1rem 2rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-links {
            grid-template-columns: 1fr;
            gap: 1.5rem;
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