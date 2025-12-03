import React from 'react';

const Comparison = () => {
  const comparisonData = [
    {
      feature: 'vCPU',
      basic: '1 Core',
      pro: '2 Cores',
      enterprise: '4 Cores'
    },
    {
      feature: 'RAM',
      basic: '2 GB',
      pro: '4 GB',
      enterprise: '8 GB'
    },
    {
      feature: 'Almacenamiento SSD NVMe',
      basic: '25 GB',
      pro: '50 GB',
      enterprise: '100 GB'
    },
    {
      feature: 'Transferencia Mensual',
      basic: '1 TB',
      pro: '2 TB',
      enterprise: '5 TB'
    },
    {
      feature: 'IPs Dedicadas',
      basic: '1',
      pro: '1',
      enterprise: '2'
    },
    {
      feature: 'Panel de Control',
      basic: 'Básico',
      pro: 'Avanzado',
      enterprise: 'Premium'
    },
    {
      feature: 'Backups',
      basic: 'Opcionales (+$50/mes)',
      pro: 'Diarios Incluidos',
      enterprise: 'Diarios + Snapshots'
    },
    {
      feature: 'Soporte',
      basic: '24/7 Tickets',
      pro: '24/7 Telefónico',
      enterprise: 'Prioritario 24/7'
    },
    {
      feature: 'Migración Gratuita',
      basic: '❌',
      pro: '✅ (Plan Anual)',
      enterprise: '✅ Incluida'
    },
    {
      feature: 'Instalación 1-Click',
      basic: '✅',
      pro: '✅',
      enterprise: '✅'
    },
    {
      feature: 'Monitoreo',
      basic: 'Básico',
      pro: 'Avanzado',
      enterprise: 'Premium + Alertas'
    },
    {
      feature: 'Firewall',
      basic: 'Compartido',
      pro: 'Compartido',
      enterprise: 'Dedicado'
    }
  ];

  return (
    <section id="comparison" className="comparison">
      <div className="comparison-container">
        <div className="comparison-header">
          <h2 className="comparison-title">
            Comparación Detallada de <span className="gradient-text">Planes</span>
          </h2>
          <p className="comparison-subtitle">
            Encuentra el plan perfecto comparando todas las características y recursos incluidos
          </p>
        </div>
        
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="feature-header">Características</th>
                <th className="plan-header basic-header">VPS Básico</th>
                <th className="plan-header pro-header popular">
                  VPS Pro
                  <span className="popular-badge">Más Popular</span>
                </th>
                <th className="plan-header enterprise-header">VPS Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="comparison-row">
                  <td className="feature-cell">{row.feature}</td>
                  <td className="plan-cell basic-cell">{row.basic}</td>
                  <td className="plan-cell pro-cell">{row.pro}</td>
                  <td className="plan-cell enterprise-cell">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="comparison-cta">
          <div className="cta-content">
            <h3 className="cta-title">¿No estás seguro qué plan elegir?</h3>
            <p className="cta-description">
              Nuestros expertos te ayudan a encontrar el plan VPS perfecto para tu proyecto. 
              Consulta gratuita y recomendaciones personalizadas.
            </p>
            <button className="cta-button">
              Consulta Gratuita
              <span className="cta-icon">💬</span>
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .comparison {
          padding: 8rem 2rem;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%);
        }
        
        .comparison-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .comparison-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .comparison-title {
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
        
        .comparison-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .comparison-table-wrapper {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 4rem;
        }
        
        .comparison-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .feature-header {
          background: rgba(15, 23, 42, 0.8);
          color: #E2E8F0;
          padding: 1.5rem;
          text-align: left;
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .plan-header {
          background: rgba(59, 130, 246, 0.1);
          color: #ffffff;
          padding: 1.5rem;
          text-align: center;
          font-weight: 700;
          font-size: 1.2rem;
          position: relative;
        }
        
        .pro-header.popular {
          background: rgba(59, 130, 246, 0.2);
          border: 2px solid rgba(59, 130, 246, 0.5);
        }
        
        .popular-badge {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .comparison-row:nth-child(even) {
          background: rgba(255, 255, 255, 0.02);
        }
        
        .feature-cell {
          padding: 1rem 1.5rem;
          color: #E2E8F0;
          font-weight: 500;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .plan-cell {
          padding: 1rem;
          text-align: center;
          color: #CBD5E1;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .pro-cell {
          background: rgba(59, 130, 246, 0.05);
          color: #ffffff;
          font-weight: 500;
        }
        
        .comparison-cta {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1));
          border: 1px solid rgba(16, 185, 129, 0.2);
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
          background: linear-gradient(135deg, #10B981, #059669);
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
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(16, 185, 129, 0.6);
        }
        
        @media (max-width: 768px) {
          .comparison {
            padding: 4rem 1rem;
          }
          
          .comparison-table-wrapper {
            overflow-x: auto;
          }
          
          .comparison-table {
            min-width: 600px;
          }
          
          .feature-header,
          .plan-header,
          .feature-cell,
          .plan-cell {
            padding: 0.75rem;
            font-size: 0.9rem;
          }
          
          .comparison-cta {
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

export default Comparison;