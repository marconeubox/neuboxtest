import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
          <div className="promo-badge">
            ☁️ CLOUD VPS - Escalabilidad Infinita
          </div>
          <h1 className="hero-title">
            Cloud <span className="gradient-text">VPS</span>
            <br />
            Escalable y Potente
          </h1>
          <p className="hero-description">
            Servidores virtuales en la nube con recursos escalables en tiempo real. 
            SSD NVMe, 99.9% uptime, panel intuitivo y soporte 24/7. 
            Paga solo por lo que uses con nuestra calculadora de costos.
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">☁️</span>
              <span>Escalabilidad Automática</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>SSD NVMe Ultra Rápido</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛡️</span>
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary">
              Ver Planes Cloud
              <span className="btn-icon">☁️</span>
            </button>
            <button className="btn-secondary">
              Calculadora de Costos
            </button>
          </div>
        </div>
        <div className={`hero-image ${isVisible ? 'visible' : ''}`}>
          <div className="cloud-illustration">
            <div className="cloud-servers">
              <div className="server-node active">
                <div className="node-lights">
                  <span className="light green"></span>
                  <span className="light blue"></span>
                </div>
              </div>
              <div className="server-node">
                <div className="node-lights">
                  <span className="light green"></span>
                  <span className="light orange"></span>
                </div>
              </div>
              <div className="server-node">
                <div className="node-lights">
                  <span className="light green"></span>
                  <span className="light blue"></span>
                </div>
              </div>
            </div>
            <div className="cloud-connections">
              <div className="connection-line line-1"></div>
              <div className="connection-line line-2"></div>
              <div className="connection-line line-3"></div>
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
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
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
          background: linear-gradient(135deg, #3B82F6, #1D4ED8);
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
          background: linear-gradient(135deg, #3B82F6 0%, #10B981 50%, #8B5CF6 100%);
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
          background: linear-gradient(135deg, #3B82F6, #1D4ED8);
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
        
        .cloud-illustration {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 400px;
        }
        
        .cloud-servers {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: relative;
          z-index: 2;
        }
        
        .server-node {
          background: linear-gradient(145deg, #1E293B, #334155);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
          position: relative;
          transition: all 0.3s ease;
        }
        
        .server-node.active {
          border-color: #10B981;
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
        }
        
        .node-lights {
          display: flex;
          gap: 0.5rem;
        }
        
        .light {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: block;
        }
        
        .light.green {
          background: #10B981;
          box-shadow: 0 0 10px #10B981;
          animation: blink 2s infinite;
        }
        
        .light.blue {
          background: #3B82F6;
          box-shadow: 0 0 10px #3B82F6;
        }
        
        .light.orange {
          background: #F59E0B;
          box-shadow: 0 0 10px #F59E0B;
        }
        
        .cloud-connections {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .connection-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, #3B82F6, transparent);
          height: 2px;
          animation: flow 3s ease-in-out infinite;
        }
        
        .line-1 {
          top: 30%;
          left: -20%;
          right: -20%;
          animation-delay: 0s;
        }
        
        .line-2 {
          top: 50%;
          left: -30%;
          right: -30%;
          animation-delay: 1s;
        }
        
        .line-3 {
          top: 70%;
          left: -20%;
          right: -20%;
          animation-delay: 2s;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
        
        @keyframes flow {
          0% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateX(100%); }
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
          
          .cloud-illustration {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;