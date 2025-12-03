import React, { useState } from 'react';

const CompatibilityTests = () => {
  const [activeCategory, setActiveCategory] = useState('wordpress');

  const categories = [
    { id: 'wordpress', name: 'WordPress', icon: '📝' },
    { id: 'plugins', name: 'Plugins', icon: '🔌' },
    { id: 'themes', name: 'Temas', icon: '🎨' },
    { id: 'php', name: 'PHP', icon: '🐘' }
  ];

  const compatibilityData = {
    wordpress: {
      title: 'Compatibilidad WordPress',
      description: 'Soporte completo para todas las versiones de WordPress',
      items: [
        { name: 'WordPress 6.4.x', status: 'excellent', compatibility: '100%', notes: 'Totalmente compatible' },
        { name: 'WordPress 6.3.x', status: 'excellent', compatibility: '100%', notes: 'Totalmente compatible' },
        { name: 'WordPress 6.2.x', status: 'excellent', compatibility: '100%', notes: 'Totalmente compatible' },
        { name: 'WordPress 6.1.x', status: 'excellent', compatibility: '100%', notes: 'Totalmente compatible' },
        { name: 'WordPress 6.0.x', status: 'good', compatibility: '98%', notes: 'Compatible con optimizaciones' },
        { name: 'WordPress 5.9.x', status: 'good', compatibility: '95%', notes: 'Compatible, actualización recomendada' }
      ]
    },
    plugins: {
      title: 'Compatibilidad Plugins',
      description: 'Los plugins más populares funcionan perfectamente',
      items: [
        { name: 'WooCommerce', status: 'excellent', compatibility: '100%', notes: 'Optimizado para e-commerce' },
        { name: 'Yoast SEO', status: 'excellent', compatibility: '100%', notes: 'SEO optimizado' },
        { name: 'Elementor', status: 'excellent', compatibility: '100%', notes: 'Page builder compatible' },
        { name: 'Contact Form 7', status: 'excellent', compatibility: '100%', notes: 'Formularios optimizados' },
        { name: 'WP Rocket', status: 'excellent', compatibility: '100%', notes: 'Cache compatible' },
        { name: 'Jetpack', status: 'good', compatibility: '98%', notes: 'Funciones completas' },
        { name: 'WPML', status: 'excellent', compatibility: '100%', notes: 'Multiidioma soportado' },
        { name: 'Advanced Custom Fields', status: 'excellent', compatibility: '100%', notes: 'Campos personalizados' }
      ]
    },
    themes: {
      title: 'Compatibilidad Temas',
      description: 'Todos los temas populares funcionan sin problemas',
      items: [
        { name: 'Astra', status: 'excellent', compatibility: '100%', notes: 'Tema ligero optimizado' },
        { name: 'OceanWP', status: 'excellent', compatibility: '100%', notes: 'Multipropósito compatible' },
        { name: 'GeneratePress', status: 'excellent', compatibility: '100%', notes: 'Rendimiento excelente' },
        { name: 'Divi', status: 'excellent', compatibility: '100%', notes: 'Builder integrado' },
        { name: 'Avada', status: 'good', compatibility: '98%', notes: 'Compatible con optimizaciones' },
        { name: 'Twenty Twenty-Four', status: 'excellent', compatibility: '100%', notes: 'Tema oficial WordPress' },
        { name: 'Storefront', status: 'excellent', compatibility: '100%', notes: 'WooCommerce nativo' },
        { name: 'Neve', status: 'excellent', compatibility: '100%', notes: 'AMP ready' }
      ]
    },
    php: {
      title: 'Compatibilidad PHP',
      description: 'Soporte para múltiples versiones de PHP',
      items: [
        { name: 'PHP 8.2', status: 'excellent', compatibility: '100%', notes: 'Última versión, máximo rendimiento' },
        { name: 'PHP 8.1', status: 'excellent', compatibility: '100%', notes: 'Recomendado para WordPress' },
        { name: 'PHP 8.0', status: 'excellent', compatibility: '100%', notes: 'Estable y rápido' },
        { name: 'PHP 7.4', status: 'good', compatibility: '98%', notes: 'Compatible, actualización sugerida' },
        { name: 'PHP 7.3', status: 'warning', compatibility: '85%', notes: 'Funcional, actualización recomendada' },
        { name: 'PHP 7.2', status: 'warning', compatibility: '80%', notes: 'Soporte limitado' }
      ]
    }
  };

  const performanceMetrics = [
    {
      metric: 'Tiempo de Respuesta',
      wordpress: '0.2s',
      plugins: '0.3s',
      themes: '0.4s',
      php: '0.1s'
    },
    {
      metric: 'Uso de Memoria',
      wordpress: '64MB',
      plugins: '128MB',
      themes: '96MB',
      php: '32MB'
    },
    {
      metric: 'Compatibilidad',
      wordpress: '100%',
      plugins: '99%',
      themes: '98%',
      php: '95%'
    }
  ];

  const testingProcess = [
    {
      step: '1',
      title: 'Análisis Automático',
      description: 'Escaneamos tu sitio para detectar versiones y dependencias',
      icon: '🔍'
    },
    {
      step: '2',
      title: 'Pruebas de Compatibilidad',
      description: 'Ejecutamos tests automatizados con diferentes configuraciones',
      icon: '⚙️'
    },
    {
      step: '3',
      title: 'Optimización',
      description: 'Aplicamos ajustes específicos para máximo rendimiento',
      icon: '🚀'
    },
    {
      step: '4',
      title: 'Monitoreo Continuo',
      description: 'Vigilamos constantemente la compatibilidad y rendimiento',
      icon: '📊'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return '#10B981';
      case 'good': return '#F59E0B';
      case 'warning': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'excellent': return '✅';
      case 'good': return '🟡';
      case 'warning': return '⚠️';
      default: return '❌';
    }
  };

  return (
    <section id="compatibility-tests" className="compatibility-tests">
      <div className="compatibility-container">
        <div className="compatibility-header">
          <h2 className="compatibility-title">
            Pruebas de <span className="gradient-text">Compatibilidad</span>
          </h2>
          <p className="compatibility-subtitle">
            Tu WordPress funcionará perfectamente con todos los plugins y temas populares
          </p>
        </div>
        
        <div className="category-selector">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
        
        <div className="compatibility-results">
          <div className="results-header">
            <h3>{compatibilityData[activeCategory].title}</h3>
            <p>{compatibilityData[activeCategory].description}</p>
          </div>
          
          <div className="compatibility-grid">
            {compatibilityData[activeCategory].items.map((item, index) => (
              <div key={index} className={`compatibility-item ${item.status}`}>
                <div className="item-header">
                  <div className="item-name">{item.name}</div>
                  <div className="item-status">
                    <span className="status-icon">{getStatusIcon(item.status)}</span>
                    <span className="compatibility-percentage">{item.compatibility}</span>
                  </div>
                </div>
                <div className="compatibility-bar">
                  <div 
                    className="compatibility-fill"
                    style={{ 
                      width: item.compatibility,
                      backgroundColor: getStatusColor(item.status)
                    }}
                  ></div>
                </div>
                <div className="item-notes">{item.notes}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="performance-overview">
          <h3 className="performance-title">Métricas de Rendimiento por Categoría</h3>
          <div className="performance-table">
            <div className="table-header">
              <div className="header-cell">Métrica</div>
              <div className="header-cell">WordPress</div>
              <div className="header-cell">Plugins</div>
              <div className="header-cell">Temas</div>
              <div className="header-cell">PHP</div>
            </div>
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="table-row">
                <div className="cell metric-name">{metric.metric}</div>
                <div className="cell">{metric.wordpress}</div>
                <div className="cell">{metric.plugins}</div>
                <div className="cell">{metric.themes}</div>
                <div className="cell">{metric.php}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="testing-process">
          <h3 className="process-title">Nuestro Proceso de Pruebas</h3>
          <div className="process-grid">
            {testingProcess.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <div className="step-icon">{step.icon}</div>
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="compatibility-tools">
          <h3 className="tools-title">Herramientas de Compatibilidad Incluidas</h3>
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon">🔧</div>
              <h4 className="tool-title">Auto-Configuración</h4>
              <p className="tool-description">
                Configuramos automáticamente tu servidor para máxima compatibilidad
              </p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">🔄</div>
              <h4 className="tool-title">Actualizaciones Seguras</h4>
              <p className="tool-description">
                Sistema de staging para probar actualizaciones sin riesgo
              </p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">🛡️</div>
              <h4 className="tool-title">Rollback Automático</h4>
              <p className="tool-description">
                Reversión automática si detectamos problemas de compatibilidad
              </p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">📊</div>
              <h4 className="tool-title">Monitoreo 24/7</h4>
              <p className="tool-description">
                Vigilancia continua de compatibilidad y rendimiento
              </p>
            </div>
          </div>
        </div>
        
        <div className="compatibility-guarantee">
          <div className="guarantee-content">
            <h3 className="guarantee-title">🎯 Garantía de Compatibilidad 100%</h3>
            <p className="guarantee-text">
              Si tu plugin o tema favorito no funciona correctamente en nuestro hosting, 
              lo solucionamos GRATIS o te devolvemos tu dinero. Además, ofrecemos 
              migración gratuita y configuración personalizada.
            </p>
            <div className="guarantee-stats">
              <div className="stat">
                <div className="stat-number">99.8%</div>
                <div className="stat-label">Plugins Compatibles</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Temas Populares</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Soporte Técnico</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .compatibility-tests {
          padding: 8rem 2rem;
          background: radial-gradient(ellipse at center, #1E3A8A 0%, #334155 50%);
        }
        
        .compatibility-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .compatibility-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .compatibility-title {
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
        
        .compatibility-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .category-selector {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        
        .category-button {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 12px;
          padding: 1rem 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #CBD5E1;
        }
        
        .category-button:hover {
          background: #374151;
          border-color: #21759B;
        }
        
        .category-button.active {
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          border-color: #21759B;
          color: white;
        }
        
        .category-icon {
          font-size: 1.2rem;
        }
        
        .category-name {
          font-weight: 600;
        }
        
        .compatibility-results {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 4rem;
        }
        
        .results-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .results-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        
        .results-header p {
          color: #94A3B8;
          font-size: 1.1rem;
        }
        
        .compatibility-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }
        
        .compatibility-item {
          background: #374151;
          border: 1px solid #4A5568;
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        
        .compatibility-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .compatibility-item.excellent {
          border-color: #10B981;
        }
        
        .compatibility-item.good {
          border-color: #F59E0B;
        }
        
        .compatibility-item.warning {
          border-color: #EF4444;
        }
        
        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .item-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }
        
        .item-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .status-icon {
          font-size: 1.2rem;
        }
        
        .compatibility-percentage {
          font-weight: 700;
          color: #ffffff;
        }
        
        .compatibility-bar {
          background: #4A5568;
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 1rem;
        }
        
        .compatibility-fill {
          height: 100%;
          transition: width 0.3s ease;
        }
        
        .item-notes {
          color: #94A3B8;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .performance-overview {
          margin-bottom: 4rem;
        }
        
        .performance-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .performance-table {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
        }
        
        .table-header {
          display: grid;
          grid-template-columns: 2fr repeat(4, 1fr);
          background: rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .header-cell {
          padding: 1rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
        }
        
        .header-cell:first-child {
          text-align: left;
        }
        
        .table-row {
          display: grid;
          grid-template-columns: 2fr repeat(4, 1fr);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .table-row:last-child {
          border-bottom: none;
        }
        
        .cell {
          padding: 1rem;
          color: #E2E8F0;
          text-align: center;
        }
        
        .cell.metric-name {
          text-align: left;
          font-weight: 600;
          color: #ffffff;
        }
        
        .testing-process {
          margin-bottom: 4rem;
        }
        
        .process-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .process-step {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .process-step:hover {
          transform: translateY(-5px);
          border-color: #21759B;
        }
        
        .step-number {
          position: absolute;
          top: -15px;
          left: 2rem;
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        
        .step-content {
          text-align: center;
          padding-top: 1rem;
        }
        
        .step-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .step-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .step-description {
          color: #CBD5E1;
          line-height: 1.6;
        }
        
        .compatibility-tools {
          margin-bottom: 4rem;
        }
        
        .tools-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .tool-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .tool-card:hover {
          transform: translateY(-5px);
          border-color: #21759B;
          box-shadow: 0 15px 30px #1E3A8A;
        }
        
        .tool-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .tool-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .tool-description {
          color: #CBD5E1;
          line-height: 1.6;
        }
        
        .compatibility-guarantee {
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
        
        .guarantee-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
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
        
        @media (max-width: 768px) {
          .compatibility-tests {
            padding: 4rem 1rem;
          }
          
          .category-selector {
            flex-direction: column;
            align-items: center;
          }
          
          .category-button {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          
          .compatibility-grid {
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
          
          .process-grid {
            grid-template-columns: 1fr;
          }
          
          .tools-grid {
            grid-template-columns: 1fr;
          }
          
          .guarantee-stats {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CompatibilityTests;