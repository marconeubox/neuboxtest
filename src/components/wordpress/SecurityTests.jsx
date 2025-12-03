import React, { useState } from 'react';

const SecurityTests = () => {
  const [activeTest, setActiveTest] = useState('sucuri');

  const securityTests = [
    {
      id: 'sucuri',
      name: 'Sucuri SiteCheck',
      icon: '🛡️',
      description: 'Escaneo completo de malware y vulnerabilidades'
    },
    {
      id: 'qualys',
      name: 'Qualys SSL Labs',
      icon: '🔒',
      description: 'Análisis profundo de certificados SSL'
    },
    {
      id: 'mozilla',
      name: 'Mozilla Observatory',
      icon: '🔍',
      description: 'Evaluación de seguridad web y headers'
    }
  ];

  const testResults = {
    sucuri: {
      status: 'CLEAN',
      score: 'A+',
      lastScan: 'Hace 2 horas',
      threats: '0',
      checks: [
        { name: 'Malware Detection', status: 'clean', result: 'No malware found' },
        { name: 'Blacklist Status', status: 'clean', result: 'Not blacklisted' },
        { name: 'Website Firewall', status: 'active', result: 'WAF Active' },
        { name: 'DDoS Protection', status: 'active', result: 'Protected' },
        { name: 'Outdated Software', status: 'clean', result: 'All updated' },
        { name: 'Suspicious Redirects', status: 'clean', result: 'None detected' }
      ]
    },
    qualys: {
      status: 'A+',
      score: '100/100',
      lastScan: 'Hace 1 hora',
      threats: '0',
      checks: [
        { name: 'Certificate', status: 'excellent', result: 'Valid & Trusted' },
        { name: 'Protocol Support', status: 'excellent', result: 'TLS 1.3' },
        { name: 'Key Exchange', status: 'excellent', result: 'ECDHE 256 bits' },
        { name: 'Cipher Strength', status: 'excellent', result: 'AES 256' },
        { name: 'HSTS', status: 'active', result: 'Enabled' },
        { name: 'Certificate Transparency', status: 'active', result: 'Yes' }
      ]
    },
    mozilla: {
      status: 'A+',
      score: '125/100',
      lastScan: 'Hace 30 min',
      threats: '0',
      checks: [
        { name: 'Content Security Policy', status: 'excellent', result: 'Implemented' },
        { name: 'HTTP Strict Transport Security', status: 'excellent', result: 'Max-age=31536000' },
        { name: 'X-Content-Type-Options', status: 'excellent', result: 'nosniff' },
        { name: 'X-Frame-Options', status: 'excellent', result: 'DENY' },
        { name: 'Referrer Policy', status: 'excellent', result: 'strict-origin' },
        { name: 'Permissions Policy', status: 'excellent', result: 'Configured' }
      ]
    }
  };

  const securityFeatures = [
    {
      icon: '🛡️',
      title: 'Firewall Web (WAF)',
      description: 'Protección avanzada contra ataques web, SQL injection y XSS',
      level: 'Enterprise'
    },
    {
      icon: '🔒',
      title: 'SSL/TLS Gratuito',
      description: 'Certificados SSL automáticos con renovación automática',
      level: 'Incluido'
    },
    {
      icon: '🚫',
      title: 'Protección DDoS',
      description: 'Mitigación automática de ataques de denegación de servicio',
      level: 'Avanzada'
    },
    {
      icon: '🔍',
      title: 'Escaneo Malware',
      description: 'Detección y limpieza automática de malware y virus',
      level: 'Diario'
    },
    {
      icon: '🔐',
      title: 'Autenticación 2FA',
      description: 'Doble factor de autenticación para acceso administrativo',
      level: 'Opcional'
    },
    {
      icon: '📊',
      title: 'Monitoreo 24/7',
      description: 'Vigilancia continua de amenazas y actividad sospechosa',
      level: 'Activo'
    }
  ];

  const vulnerabilityScans = [
    {
      category: 'WordPress Core',
      status: 'secure',
      version: '6.4.2',
      vulnerabilities: 0,
      lastUpdate: 'Actualizado'
    },
    {
      category: 'Plugins',
      status: 'secure',
      version: '15 plugins',
      vulnerabilities: 0,
      lastUpdate: 'Todos actualizados'
    },
    {
      category: 'Themes',
      status: 'secure',
      version: '3 temas',
      vulnerabilities: 0,
      lastUpdate: 'Actualizados'
    },
    {
      category: 'File Permissions',
      status: 'secure',
      version: 'Configurados',
      vulnerabilities: 0,
      lastUpdate: 'Correctos'
    }
  ];

  const securityScore = {
    overall: 98,
    categories: [
      { name: 'Malware Protection', score: 100 },
      { name: 'SSL/TLS Security', score: 100 },
      { name: 'Firewall Protection', score: 98 },
      { name: 'Access Control', score: 95 },
      { name: 'Data Protection', score: 100 },
      { name: 'Update Management', score: 100 }
    ]
  };

  return (
    <section id="security-tests" className="security-tests">
      <div className="security-container">
        <div className="security-header">
          <h2 className="security-title">
            Pruebas de <span className="gradient-text">Seguridad</span> Avanzadas
          </h2>
          <p className="security-subtitle">
            Tu sitio WordPress protegido con las mejores herramientas de seguridad del mercado
          </p>
        </div>
        
        <div className="security-score-overview">
          <div className="score-main">
            <div className="score-circle">
              <div className="score-number">{securityScore.overall}</div>
              <div className="score-label">Puntuación de Seguridad</div>
            </div>
          </div>
          <div className="score-categories">
            {securityScore.categories.map((category, index) => (
              <div key={index} className="category-score">
                <div className="category-name">{category.name}</div>
                <div className="category-bar">
                  <div 
                    className="category-fill" 
                    style={{ width: `${category.score}%` }}
                  ></div>
                </div>
                <div className="category-value">{category.score}%</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="test-selector">
          {securityTests.map((test) => (
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
            <h3>Resultados de {securityTests.find(t => t.id === activeTest)?.name}</h3>
            <div className="scan-info">
              <span className="last-scan">Último escaneo: {testResults[activeTest].lastScan}</span>
              <div className={`status-badge ${testResults[activeTest].status.toLowerCase()}`}>
                {testResults[activeTest].status}
              </div>
            </div>
          </div>
          
          <div className="results-content">
            <div className="main-metrics">
              <div className="metric-card status">
                <div className="metric-label">Estado General</div>
                <div className="metric-value status-value">{testResults[activeTest].status}</div>
              </div>
              <div className="metric-card score">
                <div className="metric-label">Puntuación</div>
                <div className="metric-value">{testResults[activeTest].score}</div>
              </div>
              <div className="metric-card threats">
                <div className="metric-label">Amenazas Detectadas</div>
                <div className="metric-value threats-value">{testResults[activeTest].threats}</div>
              </div>
            </div>
            
            <div className="detailed-checks">
              <h4>Verificaciones de Seguridad</h4>
              <div className="checks-grid">
                {testResults[activeTest].checks.map((check, index) => (
                  <div key={index} className={`check-item ${check.status}`}>
                    <div className="check-name">{check.name}</div>
                    <div className="check-result">
                      <span className="check-value">{check.result}</span>
                      <span className={`status-indicator ${check.status}`}>
                        {check.status === 'clean' || check.status === 'excellent' || check.status === 'active' ? '✅' : '❌'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="vulnerability-scan">
          <h3 className="vulnerability-title">Escaneo de Vulnerabilidades WordPress</h3>
          <div className="vulnerability-grid">
            {vulnerabilityScans.map((scan, index) => (
              <div key={index} className={`vulnerability-card ${scan.status}`}>
                <div className="vulnerability-header">
                  <h4 className="vulnerability-category">{scan.category}</h4>
                  <div className={`vulnerability-status ${scan.status}`}>
                    {scan.status === 'secure' ? '🛡️ SEGURO' : '⚠️ ATENCIÓN'}
                  </div>
                </div>
                <div className="vulnerability-details">
                  <div className="detail-item">
                    <span className="detail-label">Versión:</span>
                    <span className="detail-value">{scan.version}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Vulnerabilidades:</span>
                    <span className={`detail-value ${scan.vulnerabilities === 0 ? 'safe' : 'warning'}`}>
                      {scan.vulnerabilities}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Estado:</span>
                    <span className="detail-value">{scan.lastUpdate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="security-features">
          <h3 className="features-title">Características de Seguridad Incluidas</h3>
          <div className="features-grid">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-level">{feature.level}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="security-guarantee">
          <div className="guarantee-content">
            <h3 className="guarantee-title">🛡️ Garantía de Seguridad Total</h3>
            <p className="guarantee-text">
              Si tu sitio WordPress es comprometido por malware o hackeado mientras está 
              alojado en nuestros servidores, lo limpiamos GRATIS y te compensamos con 
              un mes adicional de hosting sin costo.
            </p>
            <div className="guarantee-features">
              <div className="guarantee-feature">
                <span className="guarantee-icon">🔒</span>
                <span>Limpieza gratuita de malware</span>
              </div>
              <div className="guarantee-feature">
                <span className="guarantee-icon">💰</span>
                <span>Compensación por downtime</span>
              </div>
              <div className="guarantee-feature">
                <span className="guarantee-icon">🛡️</span>
                <span>Protección 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .security-tests {
          padding: 8rem 2rem;
          background: linear-gradient(180deg, #1E293B 0%, #7C3AED 50%, #1E293B 100%);
        }
        
        .security-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .security-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .security-title {
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
        
        .security-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .security-score-overview {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 20px;
          padding: 3rem;
          margin-bottom: 4rem;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          align-items: center;
        }
        
        .score-main {
          text-align: center;
        }
        
        .score-circle {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #10B981 0deg, #10B981 ${securityScore.overall * 3.6}deg, rgba(255,255,255,0.1) ${securityScore.overall * 3.6}deg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          position: relative;
        }
        
        .score-circle::before {
          content: '';
          position: absolute;
          width: 160px;
          height: 160px;
          background: #0F172A;
          border-radius: 50%;
        }
        
        .score-number {
          font-size: 3rem;
          font-weight: 800;
          color: #10B981;
          position: relative;
          z-index: 2;
        }
        
        .score-label {
          color: #CBD5E1;
          font-size: 0.9rem;
          position: relative;
          z-index: 2;
        }
        
        .score-categories {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .category-score {
          display: grid;
          grid-template-columns: 2fr 3fr 1fr;
          gap: 1rem;
          align-items: center;
        }
        
        .category-name {
          color: #E2E8F0;
          font-weight: 500;
          font-size: 0.9rem;
        }
        
        .category-bar {
          background: rgba(255, 255, 255, 0.1);
          height: 8px;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .category-fill {
          height: 100%;
          background: linear-gradient(90deg, #10B981, #059669);
          transition: width 0.3s ease;
        }
        
        .category-value {
          color: #10B981;
          font-weight: 700;
          font-size: 0.9rem;
          text-align: right;
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
          border-color: #7C3AED;
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
        
        .scan-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .last-scan {
          color: #94A3B8;
          font-size: 0.9rem;
        }
        
        .status-badge {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.8rem;
        }
        
        .status-badge.clean,
        .status-badge.a\\+ {
          background: #10B981;
          color: white;
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
        
        .metric-card.status {
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
        
        .status-value {
          color: #10B981;
        }
        
        .threats-value {
          color: #10B981;
        }
        
        .detailed-checks h4 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }
        
        .checks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }
        
        .check-item {
          background: #374151;
          border: 1px solid #4A5568;
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .check-item.clean,
        .check-item.excellent,
        .check-item.active {
          border-color: #10B981;
        }
        
        .check-name {
          color: #CBD5E1;
          font-weight: 500;
        }
        
        .check-result {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .check-value {
          color: #ffffff;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .vulnerability-scan {
          margin-bottom: 4rem;
        }
        
        .vulnerability-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .vulnerability-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .vulnerability-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }
        
        .vulnerability-card.secure {
          border-color: #10B981;
        }
        
        .vulnerability-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .vulnerability-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .vulnerability-category {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
        }
        
        .vulnerability-status {
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .vulnerability-status.secure {
          background: #10B981;
          color: #ffffff;
        }
        
        .vulnerability-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .detail-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .detail-label {
          color: #94A3B8;
          font-size: 0.9rem;
        }
        
        .detail-value {
          color: #E2E8F0;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .detail-value.safe {
          color: #10B981;
        }
        
        .security-features {
          margin-bottom: 4rem;
        }
        
        .features-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .feature-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          border-color: #7C3AED;
          box-shadow: 0 15px 30px #6D28D9;
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .feature-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .feature-description {
          color: #CBD5E1;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .feature-level {
          background: linear-gradient(135deg, #7C3AED, #6D28D9);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          display: inline-block;
        }
        
        .security-guarantee {
          background: linear-gradient(135deg, #7C3AED, #6D28D9);
          border: 1px solid #8B5CF6;
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
          .security-tests {
            padding: 4rem 1rem;
          }
          
          .security-score-overview {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem;
          }
          
          .score-circle {
            width: 150px;
            height: 150px;
          }
          
          .score-circle::before {
            width: 120px;
            height: 120px;
          }
          
          .score-number {
            font-size: 2.5rem;
          }
          
          .test-selector {
            grid-template-columns: 1fr;
          }
          
          .main-metrics {
            grid-template-columns: 1fr;
          }
          
          .checks-grid {
            grid-template-columns: 1fr;
          }
          
          .vulnerability-grid {
            grid-template-columns: 1fr;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
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

export default SecurityTests;