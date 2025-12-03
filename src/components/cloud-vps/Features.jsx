import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '☁️',
      title: 'Infraestructura Cloud Nativa',
      description: 'Arquitectura distribuida con alta disponibilidad y redundancia automática en múltiples zonas.',
      benefits: ['Multi-AZ Deployment', 'Failover Automático', 'Load Balancing', 'Auto-Recovery']
    },
    {
      icon: '⚡',
      title: 'Escalabilidad Automática',
      description: 'Recursos que se ajustan automáticamente según la demanda en tiempo real.',
      benefits: ['Auto-Scaling', 'Threshold Inteligente', 'Scaling Policies', 'Resource Optimization']
    },
    {
      icon: '🛡️',
      title: 'Seguridad Enterprise',
      description: 'Protección multicapa con firewall, DDoS protection y encriptación end-to-end.',
      benefits: ['WAF Avanzado', 'DDoS Mitigation', 'SSL/TLS 1.3', 'Network Isolation']
    },
    {
      icon: '📊',
      title: 'Monitoreo Inteligente',
      description: 'Dashboard en tiempo real con métricas avanzadas y alertas proactivas.',
      benefits: ['Real-time Metrics', 'Custom Alerts', 'Performance Analytics', 'Predictive Scaling']
    },
    {
      icon: '🔄',
      title: 'Backups Inteligentes',
      description: 'Sistema de respaldos automáticos con versionado y restauración instantánea.',
      benefits: ['Incremental Backups', 'Point-in-time Recovery', 'Cross-region Replication', 'Instant Restore']
    },
    {
      icon: '🌐',
      title: 'Red Global Optimizada',
      description: 'CDN integrado y edge locations para máximo rendimiento mundial.',
      benefits: ['Global CDN', 'Edge Computing', 'Anycast Network', 'Low Latency']
    }
  ];

  const techSpecs = [
    {
      category: 'Compute',
      icon: '🖥️',
      specs: [
        'Intel Xeon Scalable (Ice Lake)',
        'AMD EPYC 3rd Gen',
        'Hasta 3.8 GHz Turbo',
        'Hyperthreading Enabled'
      ]
    },
    {
      category: 'Storage',
      icon: '💾',
      specs: [
        'NVMe SSD Gen4',
        'Hasta 7,000 MB/s lectura',
        'RAID 10 redundancia',
        'Snapshots instantáneos'
      ]
    },
    {
      category: 'Network',
      icon: '🌐',
      specs: [
        '10 Gbps puerto dedicado',
        'IPv4 e IPv6 nativo',
        'BGP routing',
        'DDoS protection 100 Gbps'
      ]
    },
    {
      category: 'Platform',
      icon: '⚙️',
      specs: [
        'Kubernetes ready',
        'Docker optimizado',
        'API REST completa',
        'Terraform provider'
      ]
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Características <span className="gradient-text">Cloud</span> Avanzadas
          </h2>
          <p className="features-subtitle">
            Tecnología de vanguardia para aplicaciones modernas y escalables
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-benefits">
                {feature.benefits.map((benefit, idx) => (
                  <span key={idx} className="benefit-tag">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="tech-specs-section">
          <h3 className="specs-title">Especificaciones Técnicas</h3>
          <div className="specs-grid">
            {techSpecs.map((spec, index) => (
              <div key={index} className="spec-card">
                <div className="spec-header">
                  <span className="spec-icon">{spec.icon}</span>
                  <h4 className="spec-category">{spec.category}</h4>
                </div>
                <ul className="spec-list">
                  {spec.specs.map((item, idx) => (
                    <li key={idx} className="spec-item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="cloud-advantages">
          <div className="advantages-content">
            <h3 className="advantages-title">🚀 Ventajas del Cloud VPS</h3>
            <div className="advantages-comparison">
              <div className="comparison-column traditional">
                <h4>VPS Tradicional</h4>
                <ul>
                  <li>❌ Recursos fijos</li>
                  <li>❌ Pago por capacidad reservada</li>
                  <li>❌ Escalabilidad manual</li>
                  <li>❌ Single point of failure</li>
                  <li>❌ Downtime para upgrades</li>
                </ul>
              </div>
              <div className="vs-divider">VS</div>
              <div className="comparison-column cloud">
                <h4>Cloud VPS</h4>
                <ul>
                  <li>✅ Recursos dinámicos</li>
                  <li>✅ Pago por uso real</li>
                  <li>✅ Auto-scaling inteligente</li>
                  <li>✅ Alta disponibilidad</li>
                  <li>✅ Zero-downtime scaling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .features {
          padding: 8rem 2rem;
          background: radial-gradient(ellipse at center, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
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
          background: linear-gradient(135deg, #3B82F6 0%, #10B981 50%, #8B5CF6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .features-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 6rem;
        }
        
        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
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
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1));
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
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }
        
        .feature-description {
          color: #CBD5E1;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }
        
        .feature-benefits {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          position: relative;
          z-index: 2;
        }
        
        .benefit-tag {
          background: rgba(59, 130, 246, 0.2);
          color: #3B82F6;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
        
        .tech-specs-section {
          margin-bottom: 4rem;
        }
        
        .specs-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .spec-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }
        
        .spec-card:hover {
          border-color: rgba(16, 185, 129, 0.3);
          transform: translateY(-5px);
        }
        
        .spec-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .spec-icon {
          font-size: 2rem;
        }
        
        .spec-category {
          font-size: 1.3rem;
          font-weight: 700;
          color: #10B981;
        }
        
        .spec-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .spec-item {
          color: #E2E8F0;
          padding: 0.5rem 0;
          font-size: 0.9rem;
          position: relative;
          padding-left: 1.5rem;
        }
        
        .spec-item::before {
          content: '▸';
          color: #3B82F6;
          position: absolute;
          left: 0;
          font-weight: bold;
        }
        
        .cloud-advantages {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1));
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 24px;
          padding: 3rem;
        }
        
        .advantages-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .advantages-comparison {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 2rem;
          align-items: center;
        }
        
        .comparison-column {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2rem;
        }
        
        .comparison-column h4 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .traditional h4 {
          color: #EF4444;
        }
        
        .cloud h4 {
          color: #10B981;
        }
        
        .comparison-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .comparison-column li {
          padding: 0.5rem 0;
          font-size: 0.9rem;
          color: #E2E8F0;
        }
        
        .vs-divider {
          background: linear-gradient(135deg, #8B5CF6, #7C3AED);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.2rem;
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
        }
        
        @media (max-width: 768px) {
          .features {
            padding: 4rem 1rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .specs-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .advantages-comparison {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .vs-divider {
            width: 40px;
            height: 40px;
            font-size: 1rem;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;