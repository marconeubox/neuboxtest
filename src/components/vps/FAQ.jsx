import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: '¿Qué es un VPS y cómo se diferencia del hosting compartido?',
      answer: 'Un VPS (Virtual Private Server) es un servidor virtual que te proporciona recursos dedicados como CPU, RAM y almacenamiento. A diferencia del hosting compartido, donde compartes recursos con otros usuarios, en un VPS tienes recursos garantizados y mayor control sobre tu entorno de hosting.'
    },
    {
      question: '¿Realmente garantizan el 99.9% de uptime?',
      answer: 'Sí, garantizamos 99.9% de uptime con nuestro SLA. Si no cumplimos este compromiso, proporcionamos compensación automática en forma de créditos de servicio. Nuestros centros de datos cuentan con infraestructura redundante y monitoreo 24/7.'
    },
    {
      question: '¿Puedo actualizar mi plan VPS en cualquier momento?',
      answer: 'Absolutamente. Puedes actualizar tu plan VPS en cualquier momento desde tu panel de control. El proceso es instantáneo y sin tiempo de inactividad. Solo pagas la diferencia prorrateada del nuevo plan.'
    },
    {
      question: '¿Qué incluye la migración gratuita?',
      answer: 'Nuestro equipo técnico se encarga de migrar completamente tu sitio web, bases de datos, correos electrónicos y configuraciones desde tu proveedor actual. La migración es gratuita en planes anuales Pro y Enterprise, y garantizamos cero tiempo de inactividad.'
    },
    {
      question: '¿Cómo funcionan los backups automáticos?',
      answer: 'Los backups diarios están incluidos en planes Pro y Enterprise. Se realizan automáticamente cada 24 horas y se almacenan por 30 días. Puedes restaurar tu sitio con un clic desde el panel de control. En el plan Básico, los backups son opcionales por $50 MXN/mes.'
    },
    {
      question: '¿Qué tipo de soporte técnico ofrecen?',
      answer: 'Ofrecemos soporte 24/7 por tickets en todos los planes. Los planes Pro y Enterprise incluyen soporte telefónico. Nuestro tiempo promedio de respuesta es de 5 minutos para tickets críticos y nuestro equipo está formado por expertos certificados.'
    },
    {
      question: '¿Puedo instalar cualquier software en mi VPS?',
      answer: 'Sí, tienes acceso root completo a tu VPS, lo que te permite instalar cualquier software compatible con el sistema operativo elegido. También ofrecemos instalación 1-click para aplicaciones populares como WordPress, Drupal, Joomla y más.'
    },
    {
      question: '¿Cómo funciona la política de reembolso?',
      answer: 'Ofrecemos 30 días de garantía de devolución en todos los planes VPS. Si no estás satisfecho por cualquier motivo, puedes cancelar y recibir un reembolso completo dentro de los primeros 30 días. Para VPS con cambios manuales extensos, el periodo es de 7 días.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">
            Preguntas <span className="gradient-text">Frecuentes</span>
          </h2>
          <p className="faq-subtitle">
            Resolvemos las dudas más comunes sobre nuestros servicios VPS
          </p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openFAQ === index ? 'open' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span className="question-text">{faq.question}</span>
                <span className="question-icon">{openFAQ === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-cta">
          <div className="cta-content">
            <h3 className="cta-title">¿Tienes más preguntas?</h3>
            <p className="cta-description">
              Nuestro equipo de expertos está disponible 24/7 para resolver cualquier duda 
              sobre nuestros servicios VPS y ayudarte a elegir el plan perfecto.
            </p>
            <button className="cta-button">
              Contactar Soporte
              <span className="cta-icon">💬</span>
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .faq {
          padding: 8rem 2rem;
          background: radial-gradient(ellipse at center, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
        }
        
        .faq-container {
          max-width: 800px;
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
          background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #10B981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .faq-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          line-height: 1.6;
        }
        
        .faq-list {
          margin-bottom: 4rem;
        }
        
        .faq-item {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          margin-bottom: 1rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .faq-item:hover {
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .faq-item.open {
          border-color: rgba(59, 130, 246, 0.5);
        }
        
        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .faq-question:hover {
          background: rgba(59, 130, 246, 0.05);
        }
        
        .question-text {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          text-align: left;
        }
        
        .question-icon {
          color: #3B82F6;
          font-size: 1.5rem;
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
          max-height: 200px;
        }
        
        .faq-answer p {
          padding: 0 1.5rem 1.5rem;
          color: #CBD5E1;
          line-height: 1.6;
          margin: 0;
        }
        
        .faq-cta {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1));
          border: 1px solid rgba(59, 130, 246, 0.2);
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
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
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
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.6);
        }
        
        @media (max-width: 768px) {
          .faq {
            padding: 4rem 1rem;
          }
          
          .faq-question {
            padding: 1rem;
          }
          
          .question-text {
            font-size: 1rem;
          }
          
          .faq-answer p {
            padding: 0 1rem 1rem;
          }
          
          .faq-cta {
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

export default FAQ;