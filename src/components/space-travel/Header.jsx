import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Destinos', href: '#destinations' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-brand">
          <span className="brand-icon">🚀</span>
          <span className="brand-text">Space Odyssey</span>
        </div>
        
        <div className="nav-menu">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
        </div>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
      
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          background: rgba(11, 20, 38, 0.1);
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }
        
        .header.scrolled {
          background: rgba(11, 20, 38, 0.95);
          padding: 0.8rem 0;
        }
        
        .nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
        }
        
        .brand-icon {
          font-size: 2rem;
        }
        
        .nav-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-link {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: #06b6d4;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #06b6d4, #6366f1);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        
        .mobile-menu-btn span {
          width: 25px;
          height: 3px;
          background: #ffffff;
          transition: all 0.3s ease;
        }
        
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(11, 20, 38, 0.98);
          backdrop-filter: blur(20px);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .mobile-nav-link {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 500;
          padding: 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .mobile-nav-link:hover {
          background: rgba(6, 182, 212, 0.1);
          color: #06b6d4;
        }
        
        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }
          
          .mobile-menu-btn {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;