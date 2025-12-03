import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      icon: '⚡',
      title: 'Velocidad Ultrarrápida',
      description: 'Servidores optimizados específicamente para WordPress con cache avanzado y CDN incluido.',
      features: ['SSD NVMe', 'Cache LiteSpeed', 'CDN Global', 'Optimización PHP 8.1']
    },
    {
      icon: '🛡️',
      title: 'Seguridad Máxima',
      description: 'Protección completa contra malware, ataques y vulnerabilidades con monitoreo 24/7.',
      features: ['Firewall WAF', 'Protección DDoS', 'SSL Gratuito', 'Backups Automáticos']
    },
    {
      icon: '🔧',
      title: 'Gestión Simplificada',
      description: 'Panel de control intuitivo con instalación 1-click y actualizaciones automáticas.',
      features: ['Instalación 1-Click', 'Auto-Updates', 'Staging', 'Panel Personalizado']
    },
    {
      icon: '📈',
      title: 'Escalabilidad Total',
      description: 'Crece sin límites con recursos que se adaptan automáticamente a tu tráfico.',
      features: ['Auto-Scaling', 'Load Balancing', 'Recursos Flexibles', 'Sin Downtime']
    },
    {
      icon: '🎯',
      title: 'SEO Optimizado',
      description: 'Configuración perfecta para SEO con tiempos de carga mínimos y Core Web Vitals.',
      features: ['Core Web Vitals', 'Compresión GZIP', 'Lazy Loading', 'Schema Markup']
    },
    {
      icon: '💬',
      title: 'Soporte Experto',
      description: 'Equipo especializado en WordPress disponible 24/7 para resolver cualquier problema.',
      features: ['Soporte 24/7', 'Expertos WP', 'Chat en Vivo', 'Migración Gratuita']
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Sitios WordPress Alojados', icon: '🌐' },
    { number: '99.9%', label: 'Uptime Garantizado', icon: '⏱️' },
    { number: '0.8s', label: 'Tiempo de Carga Promedio', icon: '⚡' },
    { number: '24/7', label: 'Soporte Especializado', icon: '💬' }
  ];

  return (
    <section id="benefits" className="benefits">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">
            ¿Por qué elegir nuestro <span className="gradient-text">Hosting WordPress</span>?
          </h2>
          <p className="benefits-subtitle">
            Hosting especializado que hace que tu WordPress funcione al máximo rendimiento
          </p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
              <div className="benefit-features">
                {benefit.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="stats-section">
          <h3 className="stats-title">Números que nos respaldan</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="guarantee-section">
          <div className="guarantee-content">
            <h3 className="guarantee-title">🎯 Garantía de Satisfacción Total</h3>
            <p className="guarantee-text">
              Si no estás 100% satisfecho con nuestro hosting WordPress en los primeros 30 días, 
              te devolvemos tu dinero sin preguntas. Además, migramos tu sitio GRATIS.
            </p>
            <div className="guarantee-features">
              <div className="guarantee-feature">
                <span className="guarantee-icon">💰</span>
                <span>30 días garantía</span>
              </div>
              <div className="guarantee-feature">
                <span className="guarantee-icon">🚀</span>
                <span>Migración gratuita</span>
              </div>
              <div className="guarantee-feature">
                <span className="guarantee-icon">🛡️</span>
                <span>Setup sin costo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .benefits {
          padding: 8rem 2rem;
          background: linear-gradient(180deg, #1E293B 0%, #7C3AED 50%, #1E293B 100%);
        }
        
        .benefits-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .benefits-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .benefits-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          color: #ffffff;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #21759B 0%, #1E3A8A 50%, #7C3AED 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .benefits-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 6rem;
        }
        
        .benefit-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          opacity: 0.1;
          transition: opacity 0.3s ease;
        }
        
        .benefit-card:hover::before {
          opacity: 0.2;
        }
        
        .benefit-card:hover {
          transform: translateY(-10px);
          border-color: #21759B;
          box-shadow: 0 20px 40px #1E3A8A;
        }
        
        .benefit-icon {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }
        
        .benefit-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }
        
        .benefit-description {
          color: #CBD5E1;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }
        
        .benefit-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          position: relative;
          z-index: 2;
        }
        
        .feature-tag {
          background: #21759B;
          color: #ffffff;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid #1E3A8A;
        }
        
        .stats-section {
          margin-bottom: 4rem;
        }
        
        .stats-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .stat-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          border-color: #21759B;
          box-shadow: 0 15px 30px #1E3A8A;
        }
        
        .stat-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          color: #21759B;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          color: #CBD5E1;
          font-size: 1rem;
          font-weight: 500;
        }
        
        .guarantee-section {
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          border: 1px solid #3B82F6;
          border-radius: 24px;
          padding: 3rem;
          text-align: center;
        }
        
        .guarantee-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .guarantee-text {
          font-size: 1.2rem;
          color: #CBD5E1;
          margin-bottom: 2rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }
        
        .guarantee-features {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .guarantee-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #374151;
          padding: 1rem 1.5rem;
          border-radius: 50px;
          border: 1px solid #4A5568;
        }
        
        .guarantee-icon {
          font-size: 1.5rem;
        }
        
        .guarantee-feature span:last-child {
          color: #ffffff;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .benefits {
            padding: 4rem 1rem;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .benefit-card {
            padding: 1.5rem;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .guarantee-section {
            padding: 2rem;
          }
          
          .guarantee-features {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          
          .guarantee-feature {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Benefits;