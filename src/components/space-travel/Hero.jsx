import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true); //Antes estaba false y no se veían los componentes

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="stars"></div>
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            Explora el <span className="gradient-text">Universo</span>
            <br />
            Sin Límites
          </h1>
          <p className="hero-description">
            Embárcate en la aventura de tu vida. Viajes espaciales de lujo 
            que te llevarán más allá de las estrellas, donde los sueños 
            se vuelven realidad cósmica.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Reserva tu Viaje
              <span className="btn-icon">🚀</span>
            </button>
            <button className="btn-secondary">
              Ver Destinos
            </button>
          </div>
        </div>
        <div className={`hero-image ${isVisible ? 'visible' : ''}`}>
          <img 
            src="https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg" 
            alt="Astronauta en el espacio"
            className="space-image"
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
        
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(2px 2px at 20px 30px, #ffffff, transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 90px 40px, #ffffff, transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: sparkle 20s linear infinite;
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
          background: linear-gradient(135deg, #06b6d4 0%, #6366f1 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-description {
          font-size: 1.2rem;
          color: #cbd5e1;
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
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
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.6);
        }
        
        .btn-secondary {
          background: transparent;
          color: #06b6d4;
          border: 2px solid #06b6d4;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: #06b6d4;
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
        
        .space-image {
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
          background: linear-gradient(135deg, #06b6d4, #6366f1, #8b5cf6);
          border-radius: 30px;
          opacity: 0.3;
          filter: blur(20px);
          z-index: 1;
        }
        
        @keyframes sparkle {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-100px); }
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