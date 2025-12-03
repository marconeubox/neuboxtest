import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project: '',
    currentInfra: '',
    expectedTraffic: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu interés! Un arquitecto cloud te contactará en menos de 2 horas.');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            ¿Listo para migrar a <span className="gradient-text">Cloud VPS</span>?
          </h2>
          <p className="contact-subtitle">
            Nuestros arquitectos cloud diseñarán la solución perfecta para tu proyecto
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Consultoría Cloud Gratuita</h3>
              <p>
                Analizamos tu infraestructura actual y diseñamos una arquitectura 
                cloud optimizada para tu caso específico.
              </p>
              
              <div className="consultation-includes">
                <h4>La consultoría incluye:</h4>
                <ul>
                  <li>✅ Análisis de infraestructura actual</li>
                  <li>✅ Diseño de arquitectura cloud</li>
                  <li>✅ Estimación de costos detallada</li>
                  <li>✅ Plan de migración sin downtime</li>
                  <li>✅ Optimizaciones de rendimiento</li>
                  <li>✅ Estrategia de escalabilidad</li>
                </ul>
              </div>
              
              <div className="contact-methods">
                <div className="method-item">
                  <span className="method-icon">💬</span>
                  <div>
                    <strong>Chat Especializado</strong>
                    <p>Arquitectos cloud disponibles 24/7</p>
                  </div>
                </div>
                <div className="method-item">
                  <span className="method-icon">📞</span>
                  <div>
                    <strong>Llamada de Consultoría</strong>
                    <p>+52 (55) 1234-5678</p>
                  </div>
                </div>
                <div className="method-item">
                  <span className="method-icon">📧</span>
                  <div>
                    <strong>Email Técnico</strong>
                    <p>cloud@hospedando.com.mx</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="benefits-card">
              <h3>🎯 Garantías Cloud VPS</h3>
              <div className="guarantees-list">
                <div className="guarantee-item">
                  <span className="guarantee-icon">💰</span>
                  <div>
                    <strong>Ahorro Garantizado</strong>
                    <p>Si no ahorras vs tu VPS actual, primer mes gratis</p>
                  </div>
                </div>
                <div className="guarantee-item">
                  <span className="guarantee-icon">🚀</span>
                  <div>
                    <strong>Migración Sin Costo</strong>
                    <p>Migración completa y optimización incluida</p>
                  </div>
                </div>
                <div className="guarantee-item">
                  <span className="guarantee-icon">⏱️</span>
                  <div>
                    <strong>99.99% Uptime SLA</strong>
                    <p>Compensación automática si no cumplimos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Solicita tu Consultoría Cloud Gratuita</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Corporativo *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@empresa.com"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+52 (55) 1234-5678"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="project">Tipo de Proyecto *</label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona tu proyecto</option>
                    <option value="web-app">Aplicación Web</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="api">API/Microservicios</option>
                    <option value="database">Base de Datos</option>
                    <option value="analytics">Analytics/Big Data</option>
                    <option value="gaming">Gaming/Real-time</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="currentInfra">Infraestructura Actual</label>
                  <select
                    id="currentInfra"
                    name="currentInfra"
                    value={formData.currentInfra}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona</option>
                    <option value="shared">Hosting Compartido</option>
                    <option value="vps">VPS Tradicional</option>
                    <option value="dedicated">Servidor Dedicado</option>
                    <option value="cloud">Ya uso Cloud</option>
                    <option value="none">Proyecto Nuevo</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expectedTraffic">Tráfico Esperado</label>
                  <select
                    id="expectedTraffic"
                    name="expectedTraffic"
                    value={formData.expectedTraffic}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona</option>
                    <option value="low">1K-10K visitantes/mes</option>
                    <option value="medium">10K-100K visitantes/mes</option>
                    <option value="high">100K-1M visitantes/mes</option>
                    <option value="enterprise">1M+ visitantes/mes</option>
                    <option value="variable">Tráfico muy variable</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Presupuesto Mensual</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona</option>
                    <option value="500-1000">$500 - $1,000 MXN</option>
                    <option value="1000-2500">$1,000 - $2,500 MXN</option>
                    <option value="2500-5000">$2,500 - $5,000 MXN</option>
                    <option value="5000+">$5,000+ MXN</option>
                    <option value="flexible">Flexible según necesidades</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Detalles del Proyecto</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe tu proyecto, tecnologías que usas, desafíos actuales, objetivos de escalabilidad..."
                ></textarea>
              </div>
              
              <button type="submit" className="form-submit">
                🚀 Solicitar Consultoría Cloud Gratuita
              </button>
              
              <p className="form-note">
                * Un arquitecto cloud te contactará en menos de 2 horas para agendar tu consultoría gratuita de 30 minutos.
              </p>
            </form>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact {
          padding: 8rem 2rem;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%);
        }
        
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .contact-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: #ffffff;
          line-height: 1.2;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #3B82F6 0%, #10B981 50%, #8B5CF6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .contact-subtitle {
          font-size: 1.1rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .info-card,
        .benefits-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
        }
        
        .info-card h3,
        .benefits-card h3 {
          color: #ffffff;
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .info-card p {
          color: #CBD5E1;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        
        .consultation-includes h4 {
          color: #E2E8F0;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .consultation-includes ul {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
        }
        
        .consultation-includes li {
          color: #CBD5E1;
          padding: 0.5rem 0;
          font-size: 0.9rem;
        }
        
        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .method-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .method-icon {
          font-size: 1.5rem;
        }
        
        .method-item strong {
          color: #ffffff;
          display: block;
          margin-bottom: 0.25rem;
        }
        
        .method-item p {
          color: #3B82F6;
          margin: 0;
          font-size: 0.9rem;
        }
        
        .guarantees-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .guarantee-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 12px;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        
        .guarantee-icon {
          font-size: 1.5rem;
        }
        
        .guarantee-item strong {
          color: #ffffff;
          display: block;
          margin-bottom: 0.25rem;
        }
        
        .guarantee-item p {
          color: #CBD5E1;
          margin: 0;
          font-size: 0.9rem;
        }
        
        .contact-form-wrapper {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
        }
        
        .form-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .form-group label {
          color: #E2E8F0;
          font-weight: 500;
          font-size: 0.9rem;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 0.75rem;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #94A3B8;
        }
        
        .form-submit {
          width: 100%;
          background: linear-gradient(135deg, #3B82F6, #1D4ED8);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
          margin-bottom: 1rem;
        }
        
        .form-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.6);
        }
        
        .form-note {
          text-align: center;
          font-size: 0.9rem;
          color: #94A3B8;
          margin: 0;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .contact {
            padding: 4rem 1rem;
          }
          
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .contact-form-wrapper {
            padding: 1.5rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .method-item,
          .guarantee-item {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;