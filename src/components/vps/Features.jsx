import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'SSD NVMe Ultra Rápido',
      description: 'Almacenamiento de última generación con velocidades de lectura/escritura hasta 10x más rápidas que los discos tradicionales.'
    },
    {
      icon: '🛡️',
      title: '99.9% Uptime SLA',
      description: 'Garantía de disponibilidad del 99.9% con compensación automática si no cumplimos nuestro compromiso de tiempo de actividad.'
    },
    {
      icon: '🔧',
      title: 'Soporte Técnico 24/7',
      description: 'Equipo de expertos disponible las 24 horas por tickets. Soporte telefónico incluido en planes Pro y Enterprise.'
    },
    {
      icon: '🚀',
      title: 'Instalación 1-Click',
      description: 'Despliega aplicaciones populares como WordPress, Drupal, Joomla y más con un solo clic desde nuestro panel.'
    },
    {
      icon: '💾',
      title: 'Backups Automáticos',
      description: 'Backups diarios incluidos en planes Pro+. Restauración rápida y snapshots bajo demanda para máxima seguridad.'
    },
    {
      icon: '🌐',
      title: 'Red Global',
      description: 'Centros de datos en múltiples ubicaciones con conectividad de alta velocidad y baja latencia a nivel mundial.'
    },
    {
      icon: '🔒',
      title: 'Seguridad Avanzada',
      description: 'Firewall dedicado, protección DDoS, monitoreo 24/7 y actualizaciones de seguridad automáticas.'
    },
    {
      icon: '📊',
      title: 'Panel de Control Intuitivo',
      description: 'Gestiona tu VPS fácilmente con nuestro panel de control moderno. Estadísticas en tiempo real y configuración simple.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            ¿Por qué elegir nuestros <span className="gradient-text">VPS</span>?
          </h2>
          <p className="features-subtitle">
            Tecnología de vanguardia y características premium incluidas en todos nuestros planes
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="features-cta">
          <div className="cta-content">
            <h3 className="cta-title">¿Necesitas migrar tu sitio actual?</h3>
            <p className="cta-description">
              Nuestro equipo de expertos se encarga de migrar tu sitio web de forma gratuita 
              cuando contratas un plan anual. Sin tiempo de inactividad garantizado.
            </p>
            <button className="cta-button">
              Migración Gratuita
              <span className="cta-icon">🔄</span>
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .features {
          padding: 8rem 2rem;
          background: radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
        }
        
        .features-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .features-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .features-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #10B981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .features-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .feature-card {
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
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .feature-card:hover::before {
          opacity: 1;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 20px 50px rgba(59, 130, 246, 0.2);
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }
        
        .feature-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }
        
        .feature-description {
          color: #CBD5E1;
          line-height: 1.6;
          position: relative;
          z-index: 2;
        }
        
        .features-cta {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 24px;
          padding: 3rem;
          text-align: center;
        }
        
        .cta-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .cta-description {
          font-size: 1.1rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.6);
        }
        
        @media (max-width: 768px) {
          .features {
            padding: 4rem 1rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .feature-card {
            padding: 1.5rem;
          }
          
          .features-cta {
            padding: 2rem;
          }
          
          .cta-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;