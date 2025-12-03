import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: '¿Qué es un Cloud VPS y cómo se diferencia de un VPS tradicional?',
      answer: 'Un Cloud VPS utiliza infraestructura distribuida en la nube que permite escalabilidad automática, alta disponibilidad y pago por uso real. A diferencia de un VPS tradicional con recursos fijos, el Cloud VPS ajusta automáticamente CPU, RAM y almacenamiento según la demanda, garantizando mejor rendimiento y costos optimizados.'
    },
    {
      question: '¿Cómo funciona el modelo de pago por uso?',
      answer: 'Pagas únicamente por los recursos que tu aplicación consume cada hora. Si tu sitio usa 2 vCPU durante 100 horas y 4 vCPU durante 200 horas, solo pagas por ese uso específico. Esto puede resultar en ahorros de hasta 40% comparado con planes fijos tradicionales.'
    },
    {
      question: '¿Qué tan rápida es la escalabilidad automática?',
      answer: 'La escalabilidad es instantánea (menos de 30 segundos). Cuando detectamos aumento en la demanda, automáticamente asignamos más recursos. Cuando la demanda baja, liberamos recursos innecesarios. Todo sin reiniciar tu servidor ni interrumpir el servicio.'
    },
    {
      question: '¿Incluyen migración desde mi VPS actual?',
      answer: 'Sí, ofrecemos migración completamente GRATUITA desde cualquier VPS tradicional. Nuestro equipo analiza tu configuración actual, optimiza la arquitectura para Cloud y migra todo sin downtime. También incluimos 30 días de soporte post-migración.'
    },
    {
      question: '¿Cómo garantizan el 99.99% de uptime?',
      answer: 'Utilizamos infraestructura distribuida en múltiples zonas de disponibilidad. Si un nodo falla, automáticamente transferimos tu carga a otros nodos sin interrupción. Además, tenemos redundancia en red, almacenamiento y energía. Si no cumplimos el SLA, compensamos con créditos.'
    },
    {
      question: '¿Puedo controlar los límites de escalabilidad?',
      answer: 'Absolutamente. Puedes establecer límites máximos de CPU, RAM y almacenamiento para controlar costos. También puedes configurar alertas cuando se alcancen ciertos umbrales y políticas de escalado personalizadas según tus necesidades específicas.'
    },
    {
      question: '¿Qué herramientas de monitoreo incluyen?',
      answer: 'Incluimos dashboard en tiempo real con métricas de CPU, RAM, I/O, red y aplicaciones. También alertas inteligentes, análisis predictivo, logs centralizados, y API completa para integrar con tus herramientas de monitoreo existentes como Grafana, Prometheus o DataDog.'
    },
    {
      question: '¿Cómo funciona el soporte técnico para Cloud VPS?',
      answer: 'Ofrecemos soporte 24/7 especializado en arquitecturas cloud. Nuestro equipo incluye ingenieros certificados en AWS, Azure y GCP. Además del soporte reactivo, ofrecemos consultoría proactiva para optimizar tu arquitectura y reducir costos.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">
            Preguntas <span className="gradient-text">Frecuentes</span>
          </h2>
          <p className="faq-subtitle">
            Resolvemos las dudas más comunes sobre Cloud VPS
          </p>
        </div>
        
        <div className="faq-content">
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
          
          <div className="faq-sidebar">
            <div className="help-card">
              <h3 className="help-title">¿Necesitas ayuda personalizada?</h3>
              <p className="help-text">
                Nuestros arquitectos cloud están disponibles para diseñar 
                la solución perfecta para tu proyecto específico.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="method-icon">💬</span>
                  <div className="method-info">
                    <strong>Chat Especializado</strong>
                    <p>Arquitectos cloud 24/7</p>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="method-icon">📞</span>
                  <div className="method-info">
                    <strong>Consultoría Telefónica</strong>
                    <p>+52 55 1234-5678</p>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="method-icon">📧</span>
                  <div className="method-info">
                    <strong>Email Técnico</strong>
                    <p>cloud@hospedando.com.mx</p>
                  </div>
                </div>
              </div>
              <button className="help-button">
                Consultoría Gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .faq {
          padding: 8rem 2rem;
          background: radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
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
          background: linear-gradient(135deg, #3B82F6 0%, #10B981 50%, #8B5CF6 100%);
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
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .faq-item:hover {
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .faq-item.open {
          border-color: rgba(16, 185, 129, 0.3);
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.1);
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
          background: rgba(255, 255, 255, 0.05);
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
          color: #10B981;
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
          line-height: 1.6;
          margin: 0;
        }
        
        .faq-sidebar {
          position: sticky;
          top: 2rem;
        }
        
        .help-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
        }
        
        .help-title {
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
          background: linear-gradient(135deg, #3B82F6, #1D4ED8);
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
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
        }
        
        @media (max-width: 768px) {
          .faq {
            padding: 4rem 1rem;
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
        }
      `}</style>
    </section>
  );
};

export default FAQ;