import React from 'react';

const Comparison = () => {
  const comparisonData = [
    {
      feature: 'Modelo de Recursos',
      traditional: 'Fijos (reservados)',
      cloud: 'Dinámicos (escalables)',
      advantage: 'cloud'
    },
    {
      feature: 'Modelo de Pago',
      traditional: 'Mensual fijo',
      cloud: 'Por uso real',
      advantage: 'cloud'
    },
    {
      feature: 'Escalabilidad',
      traditional: 'Manual (downtime)',
      cloud: 'Automática (sin downtime)',
      advantage: 'cloud'
    },
    {
      feature: 'Disponibilidad',
      traditional: '99.9% SLA',
      cloud: '99.99% SLA',
      advantage: 'cloud'
    },
    {
      feature: 'Backup & Recovery',
      traditional: 'Programado',
      cloud: 'Continuo + Point-in-time',
      advantage: 'cloud'
    },
    {
      feature: 'Monitoreo',
      traditional: 'Básico',
      cloud: 'Inteligente + Predictivo',
      advantage: 'cloud'
    },
    {
      feature: 'API Integration',
      traditional: 'Limitada',
      cloud: 'REST + GraphQL completa',
      advantage: 'cloud'
    },
    {
      feature: 'Deployment',
      traditional: 'Manual',
      cloud: 'CI/CD + Infrastructure as Code',
      advantage: 'cloud'
    }
  ];

  const costComparison = {
    scenarios: [
      {
        name: 'Proyecto Pequeño',
        traditional: { cost: 599, resources: '2 vCPU, 4GB RAM (fijo)' },
        cloud: { cost: 380, resources: '1-4 vCPU, 2-8GB RAM (dinámico)' },
        savings: 37
      },
      {
        name: 'Aplicación Media',
        traditional: { cost: 1199, resources: '4 vCPU, 8GB RAM (fijo)' },
        cloud: { cost: 750, resources: '2-8 vCPU, 4-16GB RAM (dinámico)' },
        savings: 37
      },
      {
        name: 'Enterprise',
        traditional: { cost: 2399, resources: '8 vCPU, 16GB RAM (fijo)' },
        cloud: { cost: 1450, resources: '4-16 vCPU, 8-32GB RAM (dinámico)' },
        savings: 40
      }
    ]
  };

  return (
    <section id="comparison" className="comparison">
      <div className="comparison-container">
        <div className="comparison-header">
          <h2 className="comparison-title">
            Cloud VPS vs <span className="gradient-text">VPS Tradicional</span>
          </h2>
          <p className="comparison-subtitle">
            Descubre por qué el Cloud VPS es la evolución natural del hosting tradicional
          </p>
        </div>
        
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="feature-header">Característica</th>
                <th className="traditional-header">VPS Tradicional</th>
                <th className="cloud-header">
                  Cloud VPS
                  <span className="advantage-badge">Mejor Opción</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="comparison-row">
                  <td className="feature-cell">{row.feature}</td>
                  <td className={`comparison-cell traditional ${row.advantage === 'traditional' ? 'winner' : ''}`}>
                    {row.traditional}
                  </td>
                  <td className={`comparison-cell cloud ${row.advantage === 'cloud' ? 'winner' : ''}`}>
                    {row.cloud}
                    {row.advantage === 'cloud' && <span className="winner-icon">🏆</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="cost-comparison-section">
          <h3 className="cost-title">Comparación de Costos Reales</h3>
          <div className="cost-scenarios">
            {costComparison.scenarios.map((scenario, index) => (
              <div key={index} className="scenario-card">
                <h4 className="scenario-name">{scenario.name}</h4>
                
                <div className="scenario-comparison">
                  <div className="cost-option traditional">
                    <div className="option-header">
                      <span className="option-type">VPS Tradicional</span>
                      <span className="option-cost">${scenario.traditional.cost} MXN/mes</span>
                    </div>
                    <div className="option-resources">{scenario.traditional.resources}</div>
                  </div>
                  
                  <div className="cost-option cloud">
                    <div className="option-header">
                      <span className="option-type">Cloud VPS</span>
                      <span className="option-cost">${scenario.cloud.cost} MXN/mes</span>
                    </div>
                    <div className="option-resources">{scenario.cloud.resources}</div>
                  </div>
                </div>
                
                <div className="savings-banner">
                  💰 Ahorras {scenario.savings}% = ${scenario.traditional.cost - scenario.cloud.cost} MXN/mes
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="migration-section">
          <div className="migration-content">
            <h3 className="migration-title">🔄 Migración Sin Complicaciones</h3>
            <p className="migration-description">
              Nuestro equipo se encarga de migrar tu VPS tradicional a Cloud VPS 
              sin downtime y optimizando automáticamente tu configuración.
            </p>
            <div className="migration-steps">
              <div className="step">
                <span className="step-number">1</span>
                <span className="step-text">Análisis de tu VPS actual</span>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <span className="step-text">Configuración Cloud optimizada</span>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <span className="step-text">Migración sin downtime</span>
              </div>
              <div className="step">
                <span className="step-number">4</span>
                <span className="step-text">Optimización y monitoreo</span>
              </div>
            </div>
            <button className="migration-button">
              Solicitar Migración Gratuita
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
          background: linear-gradient(135deg, #3B82F6 0%, #10B981 50%, #8B5CF6 100%);
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
        
        .traditional-header {
          background: rgba(239, 68, 68, 0.1);
          color: #ffffff;
          padding: 1.5rem;
          text-align: center;
          font-weight: 700;
          font-size: 1.2rem;
        }
        
        .cloud-header {
          background: rgba(16, 185, 129, 0.2);
          color: #ffffff;
          padding: 1.5rem;
          text-align: center;
          font-weight: 700;
          font-size: 1.2rem;
          position: relative;
        }
        
        .advantage-badge {
          position: absolute;
          top: -8px;
          right: 8px;
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          padding: 0.25rem 0.8rem;
          border-radius: 12px;
          font-size: 0.7rem;
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
        
        .comparison-cell {
          padding: 1rem;
          text-align: center;
          color: #CBD5E1;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
        }
        
        .comparison-cell.winner {
          background: rgba(16, 185, 129, 0.1);
          color: #ffffff;
          font-weight: 600;
        }
        
        .winner-icon {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          font-size: 1rem;
        }
        
        .cost-comparison-section {
          margin-bottom: 4rem;
        }
        
        .cost-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .cost-scenarios {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .scenario-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }
        
        .scenario-card:hover {
          transform: translateY(-5px);
          border-color: rgba(16, 185, 129, 0.3);
        }
        
        .scenario-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .scenario-comparison {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .cost-option {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 1rem;
        }
        
        .cost-option.traditional {
          border-left: 4px solid #EF4444;
        }
        
        .cost-option.cloud {
          border-left: 4px solid #10B981;
        }
        
        .option-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .option-type {
          color: #E2E8F0;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .option-cost {
          color: #ffffff;
          font-weight: 700;
          font-size: 1.1rem;
        }
        
        .option-resources {
          color: #94A3B8;
          font-size: 0.8rem;
        }
        
        .savings-banner {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          padding: 0.8rem;
          border-radius: 8px;
          text-align: center;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .migration-section {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1));
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 24px;
          padding: 3rem;
          text-align: center;
        }
        
        .migration-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .migration-description {
          font-size: 1.1rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }
        
        .migration-steps {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .step {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.8rem 1.2rem;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .step-number {
          background: #3B82F6;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.8rem;
        }
        
        .step-text {
          color: #E2E8F0;
          font-weight: 500;
          font-size: 0.9rem;
        }
        
        .migration-button {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
        }
        
        .migration-button:hover {
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
          .traditional-header,
          .cloud-header,
          .feature-cell,
          .comparison-cell {
            padding: 0.75rem;
            font-size: 0.9rem;
          }
          
          .cost-scenarios {
            grid-template-columns: 1fr;
          }
          
          .migration-steps {
            flex-direction: column;
            align-items: center;
          }
          
          .step {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Comparison;