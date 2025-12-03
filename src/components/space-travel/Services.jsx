import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🌌',
      title: 'Viajes Orbitales',
      description: 'Experimenta la ingravidez y observa la Tierra desde el espacio en nuestros vuelos suborbitales de lujo.',
      price: 'Desde $250,000',
      duration: '3 horas'
    },
    {
      icon: '🌙',
      title: 'Estancia Lunar',
      description: 'Una experiencia única de 7 días en nuestra estación lunar privada con vistas espectaculares.',
      price: 'Desde $2,500,000',
      duration: '7 días'
    },
    {
      icon: '🪐',
      title: 'Exploración Marciana',
      description: 'Sé uno de los primeros turistas en visitar Marte en nuestro programa de exploración avanzada.',
      price: 'Desde $10,000,000',
      duration: '30 días'
    },
    {
      icon: '🛸',
      title: 'Crucero Espacial',
      description: 'Viaja por el sistema solar en nuestra nave de lujo con todas las comodidades terrestres.',
      price: 'Desde $5,000,000',
      duration: '21 días'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="services-subtitle">
            Experiencias espaciales diseñadas para superar tus expectativas más allá de las estrellas
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-details">
                <div className="service-price">{service.price}</div>
                <div className="service-duration">Duración: {service.duration}</div>
              </div>
              <button className="service-btn">Más Información</button>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .services {
          padding: 8rem 2rem;
          background: linear-gradient(180deg, transparent 0%, rgba(99, 102, 241, 0.05) 50%, transparent 100%);
        }
        
        .services-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .services-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .services-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #06b6d4 0%, #6366f1 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .services-subtitle {
          font-size: 1.2rem;
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .service-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(99, 102, 241, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .service-card:hover::before {
          opacity: 1;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          border-color: rgba(6, 182, 212, 0.3);
          box-shadow: 0 20px 50px rgba(6, 182, 212, 0.2);
        }
        
        .service-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }
        
        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }
        
        .service-description {
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }
        
        .service-details {
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
        }
        
        .service-price {
          font-size: 1.3rem;
          font-weight: 700;
          color: #06b6d4;
          margin-bottom: 0.5rem;
        }
        
        .service-duration {
          color: #94a3b8;
          font-size: 0.9rem;
        }
        
        .service-btn {
          background: linear-gradient(135deg, #06b6d4, #6366f1);
          color: white;
          border: none;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }
        
        .service-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(6, 182, 212, 0.4);
        }
        
        @media (max-width: 768px) {
          .services {
            padding: 4rem 1rem;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .service-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;