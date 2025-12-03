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
          <div className="promo-badge">
            🚀 OFERTA ESPECIAL - 3 meses GRATIS en planes anuales
          </div>
          <h1 className="hero-title">
            Hosting <span className="gradient-text">WordPress</span>
            <br />
            Optimizado y Seguro
          </h1>
          <p className="hero-description">
            El hosting WordPress más rápido y confiable de México. 
            Instalación en 1-click, actualizaciones automáticas y soporte 
            especializado 24/7. ¡Tu sitio web funcionando al máximo!
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat">
              <div className="stat-number">3x</div>
              <div className="stat-label">Más Rápido</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Soporte</div>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary">
              Ver Planes
              <span className="btn-icon">⚡</span>
            </button>
            <button className="btn-secondary">
              Demo Gratis
            </button>
          </div>
        </div>
        <div className={`hero-image ${isVisible ? 'visible' : ''}`}>
          <div className="wordpress-illustration">
            <div className="wp-logo">
              <div className="wp-circle">
                <span className="wp-text">W</span>
              </div>
            </div>
            <div className="performance-indicators">
              <div className="indicator speed">
                <span className="indicator-icon">⚡</span>
                <span className="indicator-text">Velocidad</span>
              </div>
              <div className="indicator security">
                <span className="indicator-icon">🛡️</span>
                <span className="indicator-text">Seguridad</span>
              </div>
              <div className="indicator uptime">
                <span className="indicator-icon">📈</span>
                <span className="indicator-text">99.9% Uptime</span>
              </div>
            </div>
          </div>
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
            radial-gradient(circle at 20% 50%, #21759B 0%, #1E3A8A 50%),
            radial-gradient(circle at 80% 20%, #1E3A8A 0%, #7C3AED 50%),
            radial-gradient(circle at 40% 80%, #7C3AED 0%, #21759B 50%);
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
        
        .promo-badge {
          display: inline-block;
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          animation: pulse 2s infinite;
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #21759B 0%, #1E3A8A 50%, #7C3AED 100%);
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
        
        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #21759B;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #94A3B8;
          margin-top: 0.25rem;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #21759B, #1E3A8A);
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
          box-shadow: 0 10px 30px rgba(33, 117, 155, 0.4);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(33, 117, 155, 0.6);
        }
        
        .btn-secondary {
          background: transparent;
          color: #21759B;
          border: 2px solid #21759B;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: #21759B;
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
        
        .wordpress-illustration {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 400px;
        }
        
        .wp-logo {
          position: relative;
          z-index: 2;
        }
        
        .wp-circle {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(33, 117, 155, 0.3);
          animation: float 3s ease-in-out infinite;
        }
        
        .wp-text {
          font-size: 4rem;
          font-weight: 800;
          color: white;
        }
        
        .performance-indicators {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        
        .indicator {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          animation: float 3s ease-in-out infinite;
        }
        
        .indicator.speed {
          top: 20%;
          right: 10%;
          animation-delay: 0s;
        }
        
        .indicator.security {
          top: 60%;
          left: 5%;
          animation-delay: 1s;
        }
        
        .indicator.uptime {
          bottom: 20%;
          right: 15%;
          animation-delay: 2s;
        }
        
        .indicator-icon {
          font-size: 1.5rem;
        }
        
        .indicator-text {
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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
          
          .hero-stats {
            justify-content: center;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .btn-primary,
          .btn-secondary {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }
          
          .wordpress-illustration {
            height: 300px;
          }
          
          .wp-circle {
            width: 120px;
            height: 120px;
          }
          
          .wp-text {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;