import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            Servidores <span className="gradient-text">VPS</span>
            <br />
            de Alto Rendimiento
          </h1>
          <p className="hero-description">
            Potencia tu proyecto con nuestros VPS de última generación. 
            Recursos dedicados, SSD NVMe, 99.9% uptime garantizado y 
            soporte técnico 24/7 para llevar tu negocio al siguiente nivel.
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>SSD NVMe Ultra Rápido</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛡️</span>
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔧</span>
              <span>Soporte 24/7</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary">
              Ver Planes VPS
              <span className="btn-icon">🚀</span>
            </button>
            <button className="btn-secondary">
              Prueba Gratuita 7 días
            </button>
          </div>
        </div>
        <div className={`hero-image ${isVisible ? 'visible' : ''}`}>
          <img 
            src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg" 
            alt="Servidor VPS de alto rendimiento"
            className="server-image"
          />
          <div className="image-glow"></div>
        </div>
      </div>
      
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 8rem 2rem 4rem;
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
        }
        
        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        
        .hero-text {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 1s ease;
        }
        
        .hero-text.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #10B981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-description {
          font-size: 1.2rem;
          color: #CBD5E1;
          margin-bottom: 2rem;
          line-height: 1.7;
        }
        
        .hero-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #E2E8F0;
          font-weight: 500;
        }
        
        .feature-icon {
          font-size: 1.5rem;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.6);
        }
        
        .btn-secondary {
          background: transparent;
          color: #10B981;
          border: 2px solid #10B981;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: #10B981;
          color: white;
          transform: translateY(-3px);
        }
        
        .hero-image {
          opacity: 0;
          transform: translateX(50px);
          transition: all 1s ease 0.3s;
          position: relative;
        }
        
        .hero-image.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .server-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 20px;
          position: relative;
          z-index: 2;
        }
        
        .image-glow {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: linear-gradient(135deg, #3B82F6, #8B5CF6, #10B981);
          border-radius: 30px;
          opacity: 0.3;
          filter: blur(20px);
          z-index: 1;
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 6rem 1rem 2rem;
          }
          
          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .btn-primary,
          .btn-secondary {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;