import React, { useState } from 'react';

const IntegrationTests = () => {
  const [activeIntegration, setActiveIntegration] = useState('ecommerce');

  const integrationCategories = [
    { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
    { id: 'marketing', name: 'Marketing', icon: '📈' },
    { id: 'analytics', name: 'Analytics', icon: '📊' },
    { id: 'social', name: 'Social Media', icon: '📱' },
    { id: 'payment', name: 'Pagos', icon: '💳' },
    { id: 'email', name: 'Email', icon: '📧' }
  ];

  const integrationData = {
    ecommerce: {
      title: 'Integraciones E-commerce',
      description: 'Conecta tu tienda con las mejores plataformas de venta',
      integrations: [
        { 
          name: 'WooCommerce', 
          status: 'excellent', 
          setup: 'Automático',
          features: ['Productos ilimitados', 'Múltiples métodos de pago', 'Gestión de inventario', 'Cupones y descuentos'],
          testResult: 'Instalación 1-click, configuración automática'
        },
        { 
          name: 'Easy Digital Downloads', 
          status: 'excellent', 
          setup: 'Automático',
          features: ['Productos digitales', 'Licencias de software', 'Descargas seguras', 'Reportes avanzados'],
          testResult: 'Compatible al 100%, optimizado para descargas'
        },
        { 
          name: 'Shopify Integration', 
          status: 'good', 
          setup: 'Manual',
          features: ['Sincronización de productos', 'Gestión de pedidos', 'Inventario unificado'],
          testResult: 'Requiere configuración API, funciona correctamente'
        },
        { 
          name: 'Amazon Affiliate', 
          status: 'excellent', 
          setup: 'Plugin',
          features: ['Enlaces de afiliado', 'Comparador de precios', 'Widgets de productos'],
          testResult: 'Plugin optimizado, enlaces automáticos'
        }
      ]
    },
    marketing: {
      title: 'Integraciones Marketing',
      description: 'Herramientas para hacer crecer tu negocio online',
      integrations: [
        { 
          name: 'Mailchimp', 
          status: 'excellent', 
          setup: 'API Key',
          features: ['Listas de suscriptores', 'Campañas automáticas', 'Segmentación avanzada', 'A/B Testing'],
          testResult: 'Integración perfecta, sincronización automática'
        },
        { 
          name: 'HubSpot', 
          status: 'excellent', 
          setup: 'Plugin',
          features: ['CRM integrado', 'Lead scoring', 'Marketing automation', 'Analytics'],
          testResult: 'Plugin oficial, todas las funciones disponibles'
        },
        { 
          name: 'ConvertKit', 
          status: 'excellent', 
          setup: 'API Key',
          features: ['Email marketing', 'Automatizaciones', 'Landing pages', 'Formularios'],
          testResult: 'API estable, sincronización en tiempo real'
        },
        { 
          name: 'ActiveCampaign', 
          status: 'good', 
          setup: 'Plugin',
          features: ['Email marketing', 'CRM', 'Automatización', 'Segmentación'],
          testResult: 'Funciona correctamente, configuración sencilla'
        }
      ]
    },
    analytics: {
      title: 'Integraciones Analytics',
      description: 'Mide y optimiza el rendimiento de tu sitio web',
      integrations: [
        { 
          name: 'Google Analytics 4', 
          status: 'excellent', 
          setup: 'Código',
          features: ['Seguimiento avanzado', 'Conversiones', 'Audiencias', 'Informes personalizados'],
          testResult: 'Implementación perfecta, todos los eventos rastreados'
        },
        { 
          name: 'Google Tag Manager', 
          status: 'excellent', 
          setup: 'Código',
          features: ['Gestión de tags', 'Eventos personalizados', 'Triggers avanzados'],
          testResult: 'Container optimizado, carga asíncrona'
        },
        { 
          name: 'Hotjar', 
          status: 'excellent', 
          setup: 'Plugin',
          features: ['Heatmaps', 'Grabaciones de sesión', 'Encuestas', 'Feedback'],
          testResult: 'Plugin oficial, sin impacto en velocidad'
        },
        { 
          name: 'MonsterInsights', 
          status: 'excellent', 
          setup: 'Plugin',
          features: ['Dashboard en WordPress', 'Reportes automáticos', 'E-commerce tracking'],
          testResult: 'Integración nativa, configuración automática'
        }
      ]
    },
    social: {
      title: 'Integraciones Social Media',
      description: 'Conecta tu sitio con las redes sociales más populares',
      integrations: [
        { 
          name: 'Facebook Pixel', 
          status: 'excellent', 
          setup: 'Código',
          features: ['Seguimiento de conversiones', 'Audiencias personalizadas', 'Remarketing'],
          testResult: 'Pixel instalado correctamente, eventos configurados'
        },
        { 
          name: 'Instagram Feed', 
          status: 'excellent', 
          setup: 'Plugin',
          features: ['Feed personalizable', 'Stories', 'Hashtags', 'Responsive'],
          testResult: 'API estable, actualización automática'
        },
        { 
          name: 'Twitter Cards', 
          status: 'excellent', 
          setup: 'Meta Tags',
          features: ['Cards automáticas', 'Imágenes optimizadas', 'Descripiones'],
          testResult: 'Meta tags correctos, validación exitosa'
        },
        { 
          name: 'LinkedIn Insight', 
          status: 'good', 
          setup: 'Código',
          features: ['Seguimiento B2B', 'Conversiones', 'Audiencias'],
          testResult: 'Tag implementado, seguimiento activo'
        }
      ]
    },
    payment: {
      title: 'Integraciones de Pago',
      description: 'Acepta pagos de forma segura con múltiples métodos',
      integrations: [
        { 
          name: 'Stripe', 
          status: 'excellent', 
          setup: 'API Keys',
          features: ['Tarjetas de crédito', 'Apple Pay', 'Google Pay', 'SEPA', 'Suscripciones'],
          testResult: 'Webhooks configurados, pagos instantáneos'
        },
        { 
          name: 'PayPal', 
          status: 'excellent', 
          setup: 'Plugin',
          features: ['PayPal Checkout', 'PayPal Credit', 'Venmo', 'Pagos recurrentes'],
          testResult: 'Plugin oficial, certificación completa'
        },
        { 
          name: 'Mercado Pago', 
          status: 'excellent', 
          setup: 'Plugin',
          features: ['Tarjetas locales', 'Efectivo', 'Transferencias', 'Cuotas'],
          testResult: 'Optimizado para LATAM, todos los métodos activos'
        },
        { 
          name: 'Conekta', 
          status: 'good', 
          setup: 'Plugin',
          features: ['Tarjetas MX', 'OXXO', 'SPEI', 'Suscripciones'],
          testResult: 'Plugin funcional, métodos mexicanos disponibles'
        }
      ]
    },
    email: {
      title: 'Integraciones Email',
      description: 'Servicios de email marketing y transaccional',
      integrations: [
        { 
          name: 'SendGrid', 
          status: 'excellent', 
          setup: 'API Key',
          features: ['Emails transaccionales', 'Templates', 'Analytics', 'Deliverability'],
          testResult: 'API configurada, deliverability del 99%'
        },
        { 
          name: 'Mailgun', 
          status: 'excellent', 
          setup: 'Plugin',
          features: ['SMTP optimizado', 'Tracking', 'Validación', 'Logs detallados'],
          testResult: 'Plugin oficial, configuración automática'
        },
        { 
          name: 'Amazon SES', 
          status: 'good', 
          setup: 'Credenciales',
          features: ['Bajo costo', 'Alta deliverability', 'Escalable'],
          testResult: 'Configuración manual, funciona correctamente'
        },
        { 
          name: 'Postmark', 
          status: 'excellent', 
          setup: 'API Key',
          features: ['Emails transaccionales', 'Templates', 'Bounce handling'],
          testResult: 'Integración perfecta, tiempo de entrega óptimo'
        }
      ]
    }
  };

  const integrationStats = {
    total: 150,
    tested: 147,
    working: 145,
    success_rate: 98.6
  };

  const testingMethodology = [
    {
      step: '1',
      title: 'Instalación Automática',
      description: 'Probamos la instalación y configuración inicial de cada integración',
      icon: '⚙️'
    },
    {
      step: '2',
      title: 'Pruebas Funcionales',
      description: 'Verificamos que todas las características principales funcionen correctamente',
      icon: '🔧'
    },
    {
      step: '3',
      title: 'Pruebas de Rendimiento',
      description: 'Medimos el impacto en la velocidad y recursos del servidor',
      icon: '⚡'
    },
    {
      step: '4',
      title: 'Pruebas de Compatibilidad',
      description: 'Verificamos compatibilidad con otros plugins y temas populares',
      icon: '🔄'
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
    <section id="integration-tests" className="integration-tests">
      <div className="integration-container">
        <div className="integration-header">
          <h2 className="integration-title">
            Pruebas de <span className="gradient-text">Integración</span>
          </h2>
          <p className="integration-subtitle">
            Tu WordPress se conecta perfectamente con las herramientas que necesitas
          </p>
        </div>
        
        <div className="integration-stats">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{integrationStats.total}</div>
              <div className="stat-label">Integraciones Probadas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{integrationStats.working}</div>
              <div className="stat-label">Funcionando Perfectamente</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{integrationStats.success_rate}%</div>
              <div className="stat-label">Tasa de Éxito</div>
            </div>
          </div>
        </div>
        
        <div className="category-selector">
          {integrationCategories.map((category) => (
            <button
              key={category.id}
              className={`category-button ${activeIntegration === category.id ? 'active' : ''}`}
              onClick={() => setActiveIntegration(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
        
        <div className="integration-results">
          <div className="results-header">
            <h3>{integrationData[activeIntegration].title}</h3>
            <p>{integrationData[activeIntegration].description}</p>
          </div>
          
          <div className="integrations-grid">
            {integrationData[activeIntegration].integrations.map((integration, index) => (
              <div key={index} className={`integration-card ${integration.status}`}>
                <div className="integration-header-card">
                  <div className="integration-name">{integration.name}</div>
                  <div className="integration-status">
                    <span className="status-icon">{getStatusIcon(integration.status)}</span>
                    <span className="setup-type">{integration.setup}</span>
                  </div>
                </div>
                
                <div className="integration-features">
                  <h5>Características:</h5>
                  <ul className="features-list">
                    {integration.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="test-result">
                  <strong>Resultado de Prueba:</strong>
                  <p>{integration.testResult}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="testing-methodology">
          <h3 className="methodology-title">Nuestra Metodología de Pruebas</h3>
          <div className="methodology-grid">
            {testingMethodology.map((step, index) => (
              <div key={index} className="methodology-step">
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
        
        <div className="integration-benefits">
          <h3 className="benefits-title">Beneficios de Nuestras Integraciones</h3>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h4 className="benefit-title">Configuración Automática</h4>
              <p className="benefit-description">
                La mayoría de integraciones se configuran automáticamente sin intervención técnica
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔒</div>
              <h4 className="benefit-title">Conexiones Seguras</h4>
              <p className="benefit-description">
                Todas las integraciones usan protocolos seguros y encriptación de datos
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h4 className="benefit-title">Sin Impacto en Velocidad</h4>
              <p className="benefit-description">
                Optimizamos cada integración para mantener la velocidad de tu sitio
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h4 className="benefit-title">Sincronización en Tiempo Real</h4>
              <p className="benefit-description">
                Los datos se sincronizan automáticamente entre tu sitio y las herramientas
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h4 className="benefit-title">Monitoreo Continuo</h4>
              <p className="benefit-description">
                Vigilamos constantemente que todas las integraciones funcionen correctamente
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛠️</div>
              <h4 className="benefit-title">Soporte Especializado</h4>
              <p className="benefit-description">
                Nuestro equipo te ayuda con cualquier problema de configuración o integración
              </p>
            </div>
          </div>
        </div>
        
        <div className="integration-guarantee">
          <div className="guarantee-content">
            <h3 className="guarantee-title">🔗 Garantía de Integración Perfecta</h3>
            <p className="guarantee-text">
              Si la herramienta que necesitas no se integra correctamente con tu WordPress, 
              nuestro equipo técnico la configurará GRATIS o te ayudamos a encontrar una 
              alternativa que funcione perfectamente.
            </p>
            <div className="guarantee-features">
              <div className="guarantee-feature">
                <span className="guarantee-icon">🔧</span>
                <span>Configuración gratuita</span>
              </div>
              <div className="guarantee-feature">
                <span className="guarantee-icon">💬</span>
                <span>Soporte especializado</span>
              </div>
              <div className="guarantee-feature">
                <span className="guarantee-icon">🎯</span>
                <span>Alternativas garantizadas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .integration-tests {
          padding: 8rem 2rem;
          background: linear-gradient(180deg, #1E293B 0%, #21759B 50%, #1E293B 100%);
        }
        
        .integration-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .integration-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .integration-title {
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
        
        .integration-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .integration-stats {
          margin-bottom: 4rem;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
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
        
        .category-selector {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-bottom: 3rem;
        }
        
        .category-button {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 12px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: #CBD5E1;
          text-align: center;
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
          font-size: 1.5rem;
        }
        
        .category-name {
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .integration-results {
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
        
        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .integration-card {
          background: #374151;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }
        
        .integration-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .integration-card.excellent {
          border-color: #10B981;
        }
        
        .integration-card.good {
          border-color: #F59E0B;
        }
        
        .integration-header-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .integration-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
        }
        
        .integration-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .status-icon {
          font-size: 1.2rem;
        }
        
        .setup-type {
          background: #21759B;
          color: #ffffff;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .integration-features {
          margin-bottom: 1.5rem;
        }
        
        .integration-features h5 {
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .feature-item {
          color: #CBD5E1;
          font-size: 0.9rem;
          padding: 0.25rem 0;
          position: relative;
          padding-left: 1rem;
        }
        
        .feature-item::before {
          content: '▸';
          color: #21759B;
          position: absolute;
          left: 0;
          font-weight: bold;
        }
        
        .test-result {
          background: #2D3748;
          border-radius: 8px;
          padding: 1rem;
        }
        
        .test-result strong {
          color: #ffffff;
          font-size: 0.9rem;
        }
        
        .test-result p {
          color: #94A3B8;
          font-size: 0.9rem;
          margin: 0.5rem 0 0 0;
          line-height: 1.5;
        }
        
        .testing-methodology {
          margin-bottom: 4rem;
        }
        
        .methodology-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .methodology-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .methodology-step {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .methodology-step:hover {
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
        
        .integration-benefits {
          margin-bottom: 4rem;
        }
        
        .benefits-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .benefit-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .benefit-card:hover {
          transform: translateY(-5px);
          border-color: #21759B;
          box-shadow: 0 15px 30px #1E3A8A;
        }
        
        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .benefit-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .benefit-description {
          color: #CBD5E1;
          line-height: 1.6;
        }
        
        .integration-guarantee {
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
          .integration-tests {
            padding: 4rem 1rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .category-selector {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .integrations-grid {
            grid-template-columns: 1fr;
          }
          
          .methodology-grid {
            grid-template-columns: 1fr;
          }
          
          .benefits-grid {
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

export default IntegrationTests;