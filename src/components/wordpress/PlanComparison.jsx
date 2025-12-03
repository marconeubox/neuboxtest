import React, { useState } from 'react';

const PlanComparison = () => {
  const [activeTab, setActiveTab] = useState('features');

  const comparisonData = {
    features: [
      {
        category: 'Recursos del Servidor',
        items: [
          { feature: 'Sitios WordPress', basic: '1', pro: '5', enterprise: 'Ilimitados' },
          { feature: 'Almacenamiento SSD', basic: '10 GB', pro: '25 GB', enterprise: '100 GB' },
          { feature: 'Transferencia Mensual', basic: '100 GB', pro: '500 GB', enterprise: '2 TB' },
          { feature: 'Bases de Datos MySQL', basic: '1', pro: '5', enterprise: 'Ilimitadas' },
          { feature: 'Cuentas de Email', basic: '5', pro: '25', enterprise: 'Ilimitadas' }
        ]
      },
      {
        category: 'Características WordPress',
        items: [
          { feature: 'Instalación 1-Click', basic: '✓', pro: '✓', enterprise: '✓' },
          { feature: 'Actualizaciones Automáticas', basic: '✓', pro: '✓', enterprise: '✓' },
          { feature: 'Staging Environment', basic: '✗', pro: '✓', enterprise: '✓' },
          { feature: 'Plugins Premium', basic: '✗', pro: '1', enterprise: '5+' },
          { feature: 'Temas Premium', basic: '✗', pro: '✓', enterprise: '✓' },
          { feature: 'Optimización WP', basic: 'Básica', pro: 'Avanzada', enterprise: 'Máxima' }
        ]
      },
      {
        category: 'Seguridad y Backups',
        items: [
          { feature: 'SSL Gratuito', basic: '✓', pro: '✓', enterprise: 'Wildcard' },
          { feature: 'Firewall Web', basic: '✓', pro: '✓', enterprise: '✓' },
          { feature: 'Protección Malware', basic: '✓', pro: '✓', enterprise: '✓' },
          { feature: 'Backups', basic: 'Semanal', pro: 'Diario', enterprise: 'Tiempo Real' },
          { feature: 'Monitoreo 24/7', basic: '✗', pro: '✗', enterprise: '✓' }
        ]
      },
      {
        category: 'Soporte y Servicios',
        items: [
          { feature: 'Soporte 24/7', basic: 'Tickets', pro: 'Chat + Tickets', enterprise: 'Dedicado' },
          { feature: 'Migración Gratuita', basic: '✗', pro: '✓', enterprise: '✓' },
          { feature: 'CDN Incluido', basic: '✗', pro: 'Básico', enterprise: 'Premium' },
          { feature: 'Garantía Uptime', basic: '99.5%', pro: '99.9%', enterprise: '99.99%' }
        ]
      }
    ]
  };

  const tabs = [
    { id: 'features', label: 'Comparación Completa', icon: '📊' },
    { id: 'performance', label: 'Rendimiento', icon: '⚡' },
    { id: 'security', label: 'Seguridad', icon: '🛡️' }
  ];

  const performanceData = [
    { metric: 'Tiempo de Carga', basic: '2.5s', pro: '1.8s', enterprise: '0.9s' },
    { metric: 'Requests por Segundo', basic: '100', pro: '500', enterprise: '2000+' },
    { metric: 'Cache Avanzado', basic: '✗', pro: '✓', enterprise: '✓' },
    { metric: 'Optimización Imágenes', basic: '✗', pro: '✓', enterprise: '✓' },
    { metric: 'CDN Locations', basic: '0', pro: '50+', enterprise: '200+' }
  ];

  const securityData = [
    { metric: 'Firewall Web (WAF)', basic: 'Básico', pro: 'Avanzado', enterprise: 'Enterprise' },
    { metric: 'Protección DDoS', basic: '✓', pro: '✓', enterprise: '✓' },
    { metric: 'Escaneo Malware', basic: 'Semanal', pro: 'Diario', enterprise: 'Tiempo Real' },
    { metric: 'Certificado SSL', basic: 'Let\'s Encrypt', pro: 'Let\'s Encrypt', enterprise: 'Wildcard' },
    { metric: 'Autenticación 2FA', basic: '✗', pro: '✓', enterprise: '✓' }
  ];

  return (
    <section id="comparison" className="comparison">
      <div className="comparison-container">
        <div className="comparison-header">
          <h2 className="comparison-title">
            Compara Nuestros <span className="gradient-text">Planes</span>
          </h2>
          <p className="comparison-subtitle">
            Encuentra el plan perfecto para tu proyecto WordPress
          </p>
        </div>
        
        <div className="comparison-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="comparison-content">
          {activeTab === 'features' && (
            <div className="comparison-table">
              <div className="table-header">
                <div className="header-cell feature-header">Características</div>
                <div className="header-cell plan-header basic">
                  <div className="plan-info">
                    <h4>Básico</h4>
                    <span className="plan-price">$99/mes</span>
                  </div>
                </div>
                <div className="header-cell plan-header pro">
                  <div className="plan-info">
                    <h4>Pro</h4>
                    <span className="plan-price">$199/mes</span>
                    <span className="popular-tag">Popular</span>
                  </div>
                </div>
                <div className="header-cell plan-header enterprise">
                  <div className="plan-info">
                    <h4>Enterprise</h4>
                    <span className="plan-price">$399/mes</span>
                  </div>
                </div>
              </div>
              
              {comparisonData.features.map((category, categoryIndex) => (
                <div key={categoryIndex} className="category-section">
                  <div className="category-title">{category.category}</div>
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="table-row">
                      <div className="feature-cell">{item.feature}</div>
                      <div className="value-cell basic">{item.basic}</div>
                      <div className="value-cell pro">{item.pro}</div>
                      <div className="value-cell enterprise">{item.enterprise}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'performance' && (
            <div className="performance-comparison">
              <div className="performance-header">
                <h3>Comparación de Rendimiento</h3>
                <p>Velocidad y capacidad de cada plan</p>
              </div>
              <div className="performance-grid">
                {performanceData.map((item, index) => (
                  <div key={index} className="performance-row">
                    <div className="metric-name">{item.metric}</div>
                    <div className="metric-values">
                      <div className="metric-value basic">
                        <span className="plan-label">Básico</span>
                        <span className="value">{item.basic}</span>
                      </div>
                      <div className="metric-value pro">
                        <span className="plan-label">Pro</span>
                        <span className="value">{item.pro}</span>
                      </div>
                      <div className="metric-value enterprise">
                        <span className="plan-label">Enterprise</span>
                        <span className="value">{item.enterprise}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'security' && (
            <div className="security-comparison">
              <div className="security-header">
                <h3>Características de Seguridad</h3>
                <p>Protección y seguridad incluida en cada plan</p>
              </div>
              <div className="security-grid">
                {securityData.map((item, index) => (
                  <div key={index} className="security-row">
                    <div className="metric-name">{item.metric}</div>
                    <div className="metric-values">
                      <div className="metric-value basic">
                        <span className="plan-label">Básico</span>
                        <span className="value">{item.basic}</span>
                      </div>
                      <div className="metric-value pro">
                        <span className="plan-label">Pro</span>
                        <span className="value">{item.pro}</span>
                      </div>
                      <div className="metric-value enterprise">
                        <span className="plan-label">Enterprise</span>
                        <span className="value">{item.enterprise}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        .comparison {
          padding: 8rem 2rem;
          background: radial-gradient(ellipse at center, #1E3A8A 0%, #334155 50%);
        }
        
        .comparison-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .comparison-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .comparison-title {
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
        
        .comparison-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .comparison-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        
        .tab-button {
          background: #2D3748;
          border: 1px solid #4A5568;
          color: #CBD5E1;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
        }
        
        .tab-button:hover {
          background: #374151;
          border-color: #21759B;
        }
        
        .tab-button.active {
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          border-color: #21759B;
          color: white;
        }
        
        .tab-icon {
          font-size: 1.2rem;
        }
        
        .comparison-content {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 20px;
          overflow: hidden;
        }
        
        .comparison-table {
          width: 100%;
        }
        
        .table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          background: #374151;
          border-bottom: 1px solid #4A5568;
        }
        
        .header-cell {
          padding: 1.5rem;
          text-align: center;
        }
        
        .feature-header {
          text-align: left;
          font-weight: 700;
          color: #ffffff;
          font-size: 1.1rem;
        }
        
        .plan-header {
          position: relative;
        }
        
        .plan-info h4 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        
        .plan-price {
          color: #21759B;
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .popular-tag {
          position: absolute;
          top: -8px;
          right: 8px;
          background: #10B981;
          color: white;
          font-size: 0.7rem;
          padding: 0.25rem 0.5rem;
          border-radius: 8px;
          font-weight: 600;
        }
        
        .category-section {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .category-title {
          background: #21759B;
          padding: 1rem 1.5rem;
          font-weight: 700;
          color: #ffffff;
          font-size: 1.1rem;
        }
        
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          border-bottom: 1px solid #4A5568;
        }
        
        .table-row:last-child {
          border-bottom: none;
        }
        
        .feature-cell {
          padding: 1rem 1.5rem;
          color: #E2E8F0;
          font-weight: 500;
        }
        
        .value-cell {
          padding: 1rem;
          text-align: center;
          color: #ffffff;
          font-weight: 600;
        }
        
        .value-cell.basic {
          background: #3B82F6;
          color: #ffffff;
        }
        
        .value-cell.pro {
          background: #10B981;
          color: #ffffff;
        }
        
        .value-cell.enterprise {
          background: #7C3AED;
          color: #ffffff;
        }
        
        .performance-comparison,
        .security-comparison {
          padding: 2rem;
        }
        
        .performance-header,
        .security-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .performance-header h3,
        .security-header h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        
        .performance-header p,
        .security-header p {
          color: #CBD5E1;
          font-size: 1.1rem;
        }
        
        .performance-grid,
        .security-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .performance-row,
        .security-row {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
        }
        
        .metric-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .metric-values {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        
        .metric-value {
          text-align: center;
          padding: 1rem;
          border-radius: 8px;
        }
        
        .metric-value.basic {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        
        .metric-value.pro {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        
        .metric-value.enterprise {
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.2);
        }
        
        .plan-label {
          display: block;
          font-size: 0.9rem;
          color: #94A3B8;
          margin-bottom: 0.5rem;
        }
        
        .value {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
        }
        
        @media (max-width: 768px) {
          .comparison {
            padding: 4rem 1rem;
          }
          
          .comparison-tabs {
            flex-direction: column;
            align-items: center;
          }
          
          .tab-button {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          
          .table-header,
          .table-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          
          .header-cell,
          .feature-cell,
          .value-cell {
            padding: 0.75rem;
          }
          
          .plan-header {
            display: none;
          }
          
          .table-row {
            background: rgba(255, 255, 255, 0.03);
            margin-bottom: 0.5rem;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .metric-values {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PlanComparison;