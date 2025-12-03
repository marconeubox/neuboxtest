import React, { useState } from 'react';

const WhatIsWordPress = () => {
  const [activeTab, setActiveTab] = useState('what');

  const tabs = [
    { id: 'what', label: '¿Qué es WordPress?', icon: '❓' },
    { id: 'why', label: '¿Por qué usarlo?', icon: '💡' },
    { id: 'how', label: '¿Cómo funciona?', icon: '⚙️' }
  ];

  const useCases = [
    {
      type: 'Blog Personal',
      icon: '📝',
      description: 'Comparte tus ideas, experiencias y conocimientos con el mundo.',
      examples: ['Blog de viajes', 'Blog de cocina', 'Blog personal', 'Diario online']
    },
    {
      type: 'Sitio Empresarial',
      icon: '🏢',
      description: 'Presenta tu empresa de manera profesional y atrae más clientes.',
      examples: ['Sitio corporativo', 'Portafolio', 'Página de servicios', 'Landing pages']
    },
    {
      type: 'Tienda Online',
      icon: '🛒',
      description: 'Vende productos y servicios online con WooCommerce.',
      examples: ['E-commerce', 'Tienda digital', 'Marketplace', 'Servicios online']
    },
    {
      type: 'Comunidad',
      icon: '👥',
      description: 'Crea espacios para que tu audiencia interactúe y participe.',
      examples: ['Foro', 'Red social', 'Membresías', 'Cursos online']
    }
  ];

  const features = [
    { icon: '🎨', title: 'Fácil de Usar', description: 'Interface intuitiva, no necesitas saber programar' },
    { icon: '🔧', title: 'Personalizable', description: 'Miles de temas y plugins para cualquier necesidad' },
    { icon: '📱', title: 'Responsive', description: 'Se ve perfecto en móviles, tablets y computadoras' },
    { icon: '🔍', title: 'SEO Friendly', description: 'Optimizado para aparecer en Google y buscadores' },
    { icon: '🛡️', title: 'Seguro', description: 'Actualizaciones constantes y comunidad activa' },
    { icon: '💰', title: 'Económico', description: 'Software gratuito con hosting accesible' }
  ];

  const steps = [
    {
      step: '1',
      title: 'Elige tu Plan',
      description: 'Selecciona el plan de hosting WordPress que mejor se adapte a tus necesidades.',
      icon: '📋'
    },
    {
      step: '2',
      title: 'Instalación Automática',
      description: 'WordPress se instala automáticamente en tu hosting en menos de 30 segundos.',
      icon: '⚡'
    },
    {
      step: '3',
      title: 'Personaliza tu Sitio',
      description: 'Elige un tema, añade contenido y personaliza tu sitio web como quieras.',
      icon: '🎨'
    },
    {
      step: '4',
      title: '¡Lanza tu Web!',
      description: 'Tu sitio WordPress está listo para recibir visitantes y hacer crecer tu proyecto.',
      icon: '🚀'
    }
  ];

  return (
    <section id="what-is-wordpress" className="what-is-wordpress">
      <div className="wordpress-container">
        <div className="wordpress-header">
          <h2 className="wordpress-title">
            Todo sobre <span className="gradient-text">WordPress</span>
          </h2>
          <p className="wordpress-subtitle">
            La plataforma web más popular del mundo, explicada de forma simple
          </p>
        </div>
        
        <div className="wordpress-tabs">
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
        
        <div className="wordpress-content">
          {activeTab === 'what' && (
            <div className="what-content">
              <div className="what-intro">
                <div className="intro-text">
                  <h3>WordPress es el sistema más popular para crear sitios web</h3>
                  <p>
                    WordPress es una plataforma gratuita y de código abierto que te permite crear 
                    cualquier tipo de sitio web sin necesidad de saber programar. Desde blogs 
                    personales hasta tiendas online y sitios empresariales.
                  </p>
                  <div className="intro-stats">
                    <div className="stat">
                      <span className="stat-number">43%</span>
                      <span className="stat-label">de todos los sitios web</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">60M+</span>
                      <span className="stat-label">sitios activos</span>
                    </div>
                  </div>
                </div>
                <div className="intro-visual">
                  <div className="wp-logo-large">
                    <div className="wp-circle-large">W</div>
                  </div>
                </div>
              </div>
              
              <div className="use-cases">
                <h4>¿Para qué puedes usar WordPress?</h4>
                <div className="use-cases-grid">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="use-case-card">
                      <div className="use-case-icon">{useCase.icon}</div>
                      <h5 className="use-case-type">{useCase.type}</h5>
                      <p className="use-case-description">{useCase.description}</p>
                      <div className="use-case-examples">
                        {useCase.examples.map((example, idx) => (
                          <span key={idx} className="example-tag">{example}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'why' && (
            <div className="why-content">
              <div className="why-intro">
                <h3>¿Por qué WordPress es la mejor opción?</h3>
                <p>
                  WordPress combina facilidad de uso, flexibilidad y potencia como ninguna otra plataforma. 
                  Es la elección de millones de usuarios desde principiantes hasta grandes empresas.
                </p>
              </div>
              
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <h5 className="feature-title">{feature.title}</h5>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="why-cta">
                <h4>¿Listo para crear tu sitio WordPress?</h4>
                <p>Con nuestro hosting optimizado, tendrás WordPress funcionando en segundos</p>
                <button className="cta-button">Ver Planes WordPress</button>
              </div>
            </div>
          )}
          
          {activeTab === 'how' && (
            <div className="how-content">
              <div className="how-intro">
                <h3>¿Cómo empezar con WordPress?</h3>
                <p>
                  Crear tu sitio WordPress es más fácil de lo que piensas. 
                  Te guiamos paso a paso desde la elección del plan hasta el lanzamiento.
                </p>
              </div>
              
              <div className="steps-container">
                {steps.map((step, index) => (
                  <div key={index} className="step-card">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <div className="step-icon">{step.icon}</div>
                      <h5 className="step-title">{step.title}</h5>
                      <p className="step-description">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="how-cta">
                <div className="cta-content">
                  <h4>¡Comienza hoy mismo!</h4>
                  <p>Tu sitio WordPress puede estar online en menos de 5 minutos</p>
                  <div className="cta-buttons">
                    <button className="btn-primary">Crear mi Sitio WordPress</button>
                    <button className="btn-secondary">Ver Demo</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        .what-is-wordpress {
          padding: 8rem 2rem;
          background: radial-gradient(ellipse at center, #21759B 0%, #334155 50%);
        }
        
        .wordpress-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .wordpress-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .wordpress-title {
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
        
        .wordpress-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .wordpress-tabs {
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
        
        .wordpress-content {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 20px;
          padding: 3rem;
        }
        
        .what-intro {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 4rem;
        }
        
        .intro-text h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .intro-text p {
          color: #CBD5E1;
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        
        .intro-stats {
          display: flex;
          gap: 2rem;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: #21759B;
          line-height: 1;
        }
        
        .stat-label {
          color: #94A3B8;
          font-size: 0.9rem;
        }
        
        .intro-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .wp-logo-large {
          position: relative;
        }
        
        .wp-circle-large {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          font-weight: 800;
          color: white;
          box-shadow: 0 20px 40px rgba(33, 117, 155, 0.3);
          animation: float 3s ease-in-out infinite;
        }
        
        .use-cases h4 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .use-cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .use-case-card {
          background: #374151;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .use-case-card:hover {
          transform: translateY(-5px);
          border-color: #21759B;
          box-shadow: 0 15px 30px #1E3A8A;
        }
        
        .use-case-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .use-case-type {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .use-case-description {
          color: #CBD5E1;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .use-case-examples {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }
        
        .example-tag {
          background: #21759B;
          color: #ffffff;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .why-intro {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .why-intro h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .why-intro p {
          color: #CBD5E1;
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .feature-card {
          background: #374151;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          border-color: #21759B;
        }
        
        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .feature-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        
        .feature-description {
          color: #CBD5E1;
          line-height: 1.6;
        }
        
        .why-cta {
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          border: 1px solid #3B82F6;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
        }
        
        .why-cta h4 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        
        .why-cta p {
          color: #CBD5E1;
          margin-bottom: 1.5rem;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(33, 117, 155, 0.4);
        }
        
        .how-intro {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .how-intro h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .how-intro p {
          color: #CBD5E1;
          font-size: 1.1rem;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .step-card {
          background: #374151;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .step-card:hover {
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
          font-size: 1.1rem;
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
        
        .how-cta {
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          border: 1px solid #3B82F6;
          border-radius: 16px;
          padding: 3rem;
        }
        
        .cta-content {
          text-align: center;
        }
        
        .cta-content h4 {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .cta-content p {
          color: #CBD5E1;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(33, 117, 155, 0.4);
        }
        
        .btn-secondary {
          background: transparent;
          color: #21759B;
          border: 2px solid #21759B;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: #21759B;
          color: white;
          transform: translateY(-2px);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @media (max-width: 768px) {
          .what-is-wordpress {
            padding: 4rem 1rem;
          }
          
          .wordpress-content {
            padding: 2rem;
          }
          
          .wordpress-tabs {
            flex-direction: column;
            align-items: center;
          }
          
          .tab-button {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          
          .what-intro {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .intro-stats {
            justify-content: center;
          }
          
          .use-cases-grid {
            grid-template-columns: 1fr;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .steps-container {
            grid-template-columns: 1fr;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatIsWordPress;