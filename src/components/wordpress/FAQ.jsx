import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: '¿Qué incluye el hosting WordPress?',
      answer: 'Nuestro hosting WordPress incluye instalación automática de WordPress, actualizaciones automáticas, SSL gratuito, backups diarios, cache optimizado, CDN, soporte 24/7 especializado en WordPress, y todas las herramientas necesarias para que tu sitio funcione perfectamente.'
    },
    {
      question: '¿Es fácil migrar mi sitio WordPress existente?',
      answer: 'Sí, ofrecemos migración completamente GRATUITA. Nuestro equipo técnico se encarga de todo el proceso sin que tengas que hacer nada. Migramos tu sitio, configuramos todo correctamente y nos aseguramos de que funcione perfectamente antes de hacer el cambio.'
    },
    {
      question: '¿Qué tan rápido será mi sitio WordPress?',
      answer: 'Garantizamos tiempos de carga menores a 2 segundos. Utilizamos SSD NVMe, cache avanzado LiteSpeed, CDN global, PHP 8.1 optimizado y servidores especialmente configurados para WordPress. La mayoría de nuestros clientes ven mejoras del 200-300% en velocidad.'
    },
    {
      question: '¿Incluyen actualizaciones automáticas?',
      answer: 'Sí, manejamos automáticamente las actualizaciones de WordPress core, plugins y temas. Antes de aplicar cualquier actualización, creamos un backup completo y probamos en un ambiente de staging para asegurar que todo funcione correctamente.'
    },
    {
      question: '¿Qué tipo de soporte ofrecen?',
      answer: 'Ofrecemos soporte 24/7 especializado en WordPress. Nuestro equipo conoce WordPress a fondo y puede ayudarte con cualquier problema técnico, optimización, configuración de plugins, temas, y cualquier duda que tengas. Respondemos en menos de 5 minutos.'
    },
    {
      question: '¿Puedo instalar cualquier plugin o tema?',
      answer: 'Sí, tienes libertad total para instalar cualquier plugin o tema de WordPress. Nuestros servidores están optimizados para soportar los plugins más populares como WooCommerce, Elementor, Yoast SEO, Contact Form 7, y miles más. Si tienes problemas de compatibilidad, te ayudamos a solucionarlos.'
    },
    {
      question: '¿Qué pasa si mi sitio es hackeado?',
      answer: 'Tenemos múltiples capas de seguridad incluyendo firewall WAF, protección contra malware, y monitoreo 24/7. Si por alguna razón tu sitio es comprometido, lo limpiamos GRATIS y te compensamos con un mes adicional de hosting. Además, siempre tenemos backups para restaurar tu sitio.'
    },
    {
      question: '¿Ofrecen garantía de devolución?',
      answer: 'Sí, ofrecemos 30 días de garantía de devolución sin preguntas. Si no estás completamente satisfecho con nuestro hosting WordPress, te devolvemos tu dinero completo. Estamos seguros de que te encantará nuestro servicio.'
    },
    {
      question: '¿Puedo crear una tienda online con WooCommerce?',
      answer: 'Absolutamente. Nuestros servidores están especialmente optimizados para WooCommerce. Incluimos instalación automática, configuración optimizada, SSL gratuito, y soporte especializado para e-commerce. Muchos de nuestros clientes manejan tiendas con miles de productos sin problemas.'
    },
    {
      question: '¿Cómo funcionan los backups?',
      answer: 'Realizamos backups automáticos diarios de tu sitio completo (archivos y base de datos). Los backups se almacenan en ubicaciones seguras separadas de tu servidor principal. Puedes restaurar tu sitio a cualquier punto anterior desde tu panel de control en cualquier momento.'
    },
    {
      question: '¿Qué versión de PHP usan?',
      answer: 'Utilizamos PHP 8.1 por defecto, que es la versión más rápida y segura para WordPress. También soportamos PHP 8.0, 7.4 y versiones anteriores si tu sitio las requiere. Puedes cambiar la versión de PHP desde tu panel de control cuando quieras.'
    },
    {
      question: '¿Incluyen certificado SSL?',
      answer: 'Sí, todos nuestros planes incluyen certificado SSL gratuito con renovación automática. Se instala automáticamente al crear tu cuenta y se renueva sin que tengas que hacer nada. También ofrecemos certificados SSL wildcard para subdominios en planes superiores.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const categories = [
    {
      title: 'Hosting y Rendimiento',
      icon: '⚡',
      count: 4
    },
    {
      title: 'WordPress y Plugins',
      icon: '🔧',
      count: 3
    },
    {
      title: 'Seguridad y Backups',
      icon: '🛡️',
      count: 3
    },
    {
      title: 'Soporte y Garantías',
      icon: '💬',
      count: 2
    }
  ];

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">
            Preguntas <span className="gradient-text">Frecuentes</span>
          </h2>
          <p className="faq-subtitle">
            Resolvemos todas tus dudas sobre nuestro hosting WordPress
          </p>
        </div>
        
        <div className="faq-categories">
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-count">{category.count} preguntas</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="faq-content">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="question-icon">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="faq-sidebar">
            <div className="help-card">
              <h3 className="help-title">¿Necesitas más ayuda?</h3>
              <p className="help-text">
                Nuestro equipo de expertos en WordPress está disponible 24/7 
                para resolver cualquier duda específica sobre tu proyecto.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="method-icon">💬</span>
                  <div className="method-info">
                    <strong>Chat en Vivo</strong>
                    <p>Respuesta inmediata</p>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="method-icon">📧</span>
                  <div className="method-info">
                    <strong>Email</strong>
                    <p>soporte@mihost.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="method-icon">📞</span>
                  <div className="method-info">
                    <strong>Teléfono</strong>
                    <p>+52 55 1234-5678</p>
                  </div>
                </div>
              </div>
              
              <button className="help-button">
                Contactar Soporte
              </button>
            </div>
            
            <div className="resources-card">
              <h3 className="resources-title">Recursos Útiles</h3>
              <div className="resources-list">
                <a href="#" className="resource-link">
                  <span className="resource-icon">📚</span>
                  <span>Guía de WordPress</span>
                </a>
                <a href="#" className="resource-link">
                  <span className="resource-icon">🎥</span>
                  <span>Tutoriales en Video</span>
                </a>
                <a href="#" className="resource-link">
                  <span className="resource-icon">🔧</span>
                  <span>Herramientas Gratuitas</span>
                </a>
                <a href="#" className="resource-link">
                  <span className="resource-icon">📖</span>
                  <span>Base de Conocimiento</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="faq-cta">
          <div className="cta-content">
            <h3 className="cta-title">¿Listo para comenzar con WordPress?</h3>
            <p className="cta-text">
              Únete a miles de sitios web exitosos que confían en nuestro hosting WordPress. 
              Comienza tu prueba gratuita hoy mismo.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                Comenzar Ahora
              </button>
              <button className="btn-secondary">
                Ver Planes
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .faq {
          padding: 8rem 2rem;
          background: linear-gradient(180deg, #1E293B 0%, #1E3A8A 50%, #1E293B 100%);
        }
        
        .faq-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .faq-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .faq-title {
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
        
        .faq-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .faq-categories {
          margin-bottom: 4rem;
        }
        
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        
        .category-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .category-card:hover {
          transform: translateY(-5px);
          border-color: #21759B;
          box-shadow: 0 15px 30px #1E3A8A;
        }
        
        .category-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .category-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        
        .category-count {
          color: #94A3B8;
          font-size: 0.9rem;
          margin: 0;
        }
        
        .faq-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .faq-item {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .faq-item:hover {
          border-color: #21759B;
        }
        
        .faq-item.open {
          border-color: #21759B;
          box-shadow: 0 10px 25px #1E3A8A;
        }
        
        .faq-question {
          width: 100%;
          padding: 1.5rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }
        
        .faq-question:hover {
          background: #374151;
        }
        
        .question-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          flex: 1;
          text-align: left;
        }
        
        .question-icon {
          font-size: 1.5rem;
          color: #21759B;
          font-weight: bold;
          transition: transform 0.3s ease;
        }
        
        .faq-item.open .question-icon {
          transform: rotate(180deg);
        }
        
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        
        .faq-item.open .faq-answer {
          max-height: 300px;
        }
        
        .faq-answer p {
          padding: 0 1.5rem 1.5rem;
          color: #CBD5E1;
          line-height: 1.7;
          margin: 0;
        }
        
        .faq-sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: sticky;
          top: 2rem;
        }
        
        .help-card,
        .resources-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 20px;
          padding: 2rem;
        }
        
        .help-title,
        .resources-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .help-text {
          color: #CBD5E1;
          margin-bottom: 2rem;
          line-height: 1.6;
          text-align: center;
        }
        
        .contact-methods {
          margin-bottom: 2rem;
        }
        
        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          text-align: left;
        }
        
        .method-icon {
          font-size: 1.5rem;
          width: 40px;
          text-align: center;
        }
        
        .method-info strong {
          color: #ffffff;
          display: block;
          font-size: 0.95rem;
        }
        
        .method-info p {
          color: #94A3B8;
          font-size: 0.85rem;
          margin: 0;
        }
        
        .help-button {
          width: 100%;
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .help-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(33, 117, 155, 0.4);
        }
        
        .resources-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .resource-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #CBD5E1;
          text-decoration: none;
          padding: 0.75rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .resource-link:hover {
          background: #374151;
          color: #21759B;
        }
        
        .resource-icon {
          font-size: 1.2rem;
        }
        
        .faq-cta {
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          border: 1px solid #3B82F6;
          border-radius: 24px;
          padding: 3rem;
          text-align: center;
          margin-top: 4rem;
        }
        
        .cta-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .cta-text {
          font-size: 1.2rem;
          color: #CBD5E1;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
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
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(33, 117, 155, 0.4);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(33, 117, 155, 0.6);
        }
        
        .btn-secondary {
          background: transparent;
          color: #21759B;
          border: 2px solid #21759B;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: #21759B;
          color: white;
          transform: translateY(-3px);
        }
        
        @media (max-width: 768px) {
          .faq {
            padding: 4rem 1rem;
          }
          
          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .faq-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .faq-sidebar {
            position: static;
          }
          
          .faq-question {
            padding: 1rem;
          }
          
          .question-text {
            font-size: 1rem;
          }
          
          .contact-method {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
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

export default FAQ;