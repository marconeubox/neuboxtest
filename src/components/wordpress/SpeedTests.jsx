import React, { useState, useEffect } from 'react';

const SpeedTests = () => {
  const [activeTest, setActiveTest] = useState('gtmetrix');
  const [isLoading, setIsLoading] = useState(false);

  const speedTests = [
    {
      id: 'gtmetrix',
      name: 'GTmetrix',
      icon: '📊',
      description: 'Análisis completo de velocidad y rendimiento'
    },
    {
      id: 'pagespeed',
      name: 'PageSpeed Insights',
      icon: '🚀',
      description: 'Herramienta oficial de Google para medir velocidad'
    },
    {
      id: 'pingdom',
      name: 'Pingdom',
      icon: '⚡',
      description: 'Monitoreo de velocidad desde múltiples ubicaciones'
    }
  ];

  const testResults = {
    gtmetrix: {
      score: 'A (98%)',
      loadTime: '0.8s',
      pageSize: '1.2MB',
      requests: '24',
      metrics: [
        { name: 'First Contentful Paint', value: '0.4s', status: 'excellent' },
        { name: 'Largest Contentful Paint', value: '0.7s', status: 'excellent' },
        { name: 'Total Blocking Time', value: '0ms', status: 'excellent' },
        { name: 'Cumulative Layout Shift', value: '0.01', status: 'excellent' }
      ]
    },
    pagespeed: {
      score: '96/100',
      loadTime: '0.9s',
      pageSize: '1.1MB',
      requests: '22',
      metrics: [
        { name: 'Performance', value: '96', status: 'excellent' },
        { name: 'Accessibility', value: '100', status: 'excellent' },
        { name: 'Best Practices', value: '100', status: 'excellent' },
        { name: 'SEO', value: '100', status: 'excellent' }
      ]
    },
    pingdom: {
      score: 'A (94)',
      loadTime: '0.7s',
      pageSize: '1.0MB',
      requests: '20',
      metrics: [
        { name: 'Performance Grade', value: 'A', status: 'excellent' },
        { name: 'Load Time', value: '0.7s', status: 'excellent' },
        { name: 'Faster than', value: '95%', status: 'excellent' },
        { name: 'Page Size', value: '1.0MB', status: 'good' }
      ]
    }
  };

  const optimizations = [
    {
      icon: '🚀',
      title: 'Cache Avanzado',
      description: 'Sistema de cache multinivel con LiteSpeed y Redis',
      impact: '+300% velocidad'
    },
    {
      icon: '🌐',
      title: 'CDN Global',
      description: 'Red de distribución de contenido en 200+ ubicaciones',
      impact: '-60% tiempo carga'
    },
    {
      icon: '⚡',
      title: 'SSD NVMe',
      description: 'Almacenamiento ultrarrápido con velocidades de 3,500 MB/s',
      impact: '+500% I/O'
    },
    {
      icon: '🔧',
      title: 'PHP 8.1 Optimizado',
      description: 'Última versión de PHP con optimizaciones específicas',
      impact: '+25% rendimiento'
    },
    {
      icon: '📱',
      title: 'Optimización Imágenes',
      description: 'Compresión automática y formato WebP',
      impact: '-70% peso imágenes'
    },
    {
      icon: '🗜️',
      title: 'Compresión GZIP',
      description: 'Compresión automática de archivos CSS, JS y HTML',
      impact: '-80% transferencia'
    }
  ];

  const competitorComparison = [
    {
      provider: 'Nuestro Hosting',
      loadTime: '0.8s',
      score: '98/100',
      uptime: '99.9%',
      status: 'winner'
    },
    {
      provider: 'Competidor A',
      loadTime: '2.3s',
      score: '76/100',
      uptime: '99.5%',
      status: 'competitor'
    },
    {
      provider: 'Competidor B',
      loadTime: '3.1s',
      score: '68/100',
      uptime: '99.2%',
      status: 'competitor'
    },
    {
      provider: 'Competidor C',
      loadTime: '2.8s',
      score: '72/100',
      uptime: '99.1%',
      status: 'competitor'
    }
  ];

  const runTest = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <section id="speed-tests" className="speed-tests">
      <div className="speed-container">
        <div className="speed-header">
          <h2 className="speed-title">
            Pruebas de <span className="gradient-text">Velocidad</span> Reales
          </h2>
          <p className="speed-subtitle">
            Comprueba por ti mismo la velocidad superior de nuestro hosting WordPress
          </p>
        </div>
        
        <div className="test-selector">
          {speedTests.map((test) => (
            <button
              key={test.id}
              className={`test-button ${activeTest === test.id ? 'active' : ''}`}
              onClick={() => setActiveTest(test.id)}
            >
              <span className="test-icon">{test.icon}</span>
              <div className="test-info">
                <span className="test-name">{test.name}</span>
                <span className="test-description">{test.description}</span>
              </div>
            </button>
          ))}
        </div>
        
        <div className="test-results">
          <div className="results-header">
            <h3>Resultados de {speedTests.find(t => t.id === activeTest)?.name}</h3>
            <button 
              className={`run-test-btn ${isLoading ? 'loading' : ''}`}
              onClick={runTest}
              disabled={isLoading}
            >
              {isLoading ? '🔄 Analizando...' : '▶️ Ejecutar Prueba'}
            </button>
          </div>
          
          <div className="results-content">
            <div className="main-metrics">
              <div className="metric-card score">
                <div className="metric-label">Puntuación General</div>
                <div className="metric-value">{testResults[activeTest].score}</div>
              </div>
              <div className="metric-card load-time">
                <div className="metric-label">Tiempo de Carga</div>
                <div className="metric-value">{testResults[activeTest].loadTime}</div>
              </div>
              <div className="metric-card page-size">
                <div className="metric-label">Tamaño de Página</div>
                <div className="metric-value">{testResults[activeTest].pageSize}</div>
              </div>
              <div className="metric-card requests">
                <div className="metric-label">Requests HTTP</div>
                <div className="metric-value">{testResults[activeTest].requests}</div>
              </div>
            </div>
            
            <div className="detailed-metrics">
              <h4>Métricas Detalladas</h4>
              <div className="metrics-grid">
                {testResults[activeTest].metrics.map((metric, index) => (
                  <div key={index} className={`metric-item ${metric.status}`}>
                    <div className="metric-name">{metric.name}</div>
                    <div className="metric-result">
                      <span className="metric-value-detail">{metric.value}</span>
                      <span className={`status-indicator ${metric.status}`}>
                        {metric.status === 'excellent' ? '✅' : metric.status === 'good' ? '🟡' : '❌'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="optimizations-section">
          <h3 className="optimizations-title">¿Cómo logramos esta velocidad?</h3>
          <div className="optimizations-grid">
            {optimizations.map((optimization, index) => (
              <div key={index} className="optimization-card">
                <div className="optimization-icon">{optimization.icon}</div>
                <h4 className="optimization-title">{optimization.title}</h4>
                <p className="optimization-description">{optimization.description}</p>
                <div className="optimization-impact">{optimization.impact}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="comparison-section">
          <h3 className="comparison-title">Comparación con la Competencia</h3>
          <div className="comparison-table">
            <div className="table-header">
              <div className="header-cell">Proveedor</div>
              <div className="header-cell">Tiempo de Carga</div>
              <div className="header-cell">Puntuación</div>
              <div className="header-cell">Uptime</div>
            </div>
            {competitorComparison.map((competitor, index) => (
              <div key={index} className={`table-row ${competitor.status}`}>
                <div className="cell provider">
                  {competitor.provider}
                  {competitor.status === 'winner' && <span className="winner-badge">👑</span>}
                </div>
                <div className="cell load-time">{competitor.loadTime}</div>
                <div className="cell score">{competitor.score}</div>
                <div className="cell uptime">{competitor.uptime}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="speed-guarantee">
          <div className="guarantee-content">
            <h3 className="guarantee-title">🎯 Garantía de Velocidad</h3>
            <p className="guarantee-text">
              Garantizamos que tu sitio WordPress cargará en menos de 2 segundos o 
              te devolvemos tu dinero. Además, si no mejoramos la velocidad de tu sitio actual, 
              el primer mes es GRATIS.
            </p>
            <div className="guarantee-features">
              <div className="guarantee-feature">
                <span className="guarantee-icon">⚡</span>
                <span>Carga 2 segundos</span>
              </div>
              <div className="guarantee-feature">
                <span className="guarantee-icon">💰</span>
                <span>Garantía de devolución</span>
              </div>
              <div className="guarantee-feature">
                <span className="guarantee-icon">🚀</span>
                <span>Optimización gratuita</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .speed-tests {
          padding: 8rem 2rem;
          background: linear-gradient(180deg, #1E293B 0%, #21759B 50%, #1E293B 100%);
        }
        
        .speed-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .speed-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .speed-title {
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
        
        .speed-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .test-selector {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
          margin-bottom: 3rem;
        }
        
        .test-button {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 1rem;
          text-align: left;
        }
        
        .test-button:hover {
          background: #374151;
          border-color: #7C3AED;
        }
        
        .test-button.active {
          background: linear-gradient(135deg, #7C3AED, #6D28D9);
          border-color: #21759B;
        }
        
        .test-icon {
          font-size: 2rem;
        }
        
        .test-info {
          flex: 1;
        }
        
        .test-name {
          display: block;
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }
        
        .test-description {
          color: #94A3B8;
          font-size: 0.9rem;
        }
        
        .test-results {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 4rem;
        }
        
        .results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .results-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
        }
        
        .run-test-btn {
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .run-test-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(33, 117, 155, 0.4);
        }
        
        .run-test-btn.loading {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .main-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .metric-card {
          background: #374151;
          border: 1px solid #4A5568;
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
        }
        
        .metric-card.score {
          border-color: #10B981;
          background: #10B981;
        }
        
        .metric-label {
          color: #94A3B8;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        
        .metric-value {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
        }
        
        .metric-card.score .metric-value {
          color: #10B981;
        }
        
        .detailed-metrics h4 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
        
        .metric-item {
          background: #374151;
          border: 1px solid #4A5568;
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .metric-item.excellent {
          border-color: #10B981;
        }
        
        .metric-name {
          color: #CBD5E1;
          font-weight: 500;
        }
        
        .metric-result {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .metric-value-detail {
          color: #ffffff;
          font-weight: 700;
        }
        
        .optimizations-section {
          margin-bottom: 4rem;
        }
        
        .optimizations-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .optimizations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .optimization-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .optimization-card:hover {
          transform: translateY(-5px);
          border-color: #21759B;
          box-shadow: 0 15px 30px #1E3A8A;
        }
        
        .optimization-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .optimization-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .optimization-description {
          color: #CBD5E1;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .optimization-impact {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          display: inline-block;
        }
        
        .comparison-section {
          margin-bottom: 4rem;
        }
        
        .comparison-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .comparison-table {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          overflow: hidden;
        }
        
        .table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          background: #374151;
          border-bottom: 1px solid #4A5568;
        }
        
        .header-cell {
          padding: 1rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
        }
        
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          border-bottom: 1px solid #4A5568;
        }
        
        .table-row:last-child {
          border-bottom: none;
        }
        
        .table-row.winner {
          background: #10B981;
          border-color: #059669;
        }
        
        .cell {
          padding: 1rem;
          text-align: center;
          color: #E2E8F0;
        }
        
        .cell.provider {
          text-align: left;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .winner-badge {
          font-size: 1.2rem;
        }
        
        .table-row.winner .cell {
          color: #ffffff;
          font-weight: 600;
        }
        
        .speed-guarantee {
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
          .speed-tests {
            padding: 4rem 1rem;
          }
          
          .test-selector {
            grid-template-columns: 1fr;
          }
          
          .test-button {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }
          
          .main-metrics {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          
          .optimizations-grid {
            grid-template-columns: 1fr;
          }
          
          .table-header,
          .table-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          
          .header-cell,
          .cell {
            padding: 0.75rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .guarantee-features {
            flex-direction: column;
            align-items: center;
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

export default SpeedTests;