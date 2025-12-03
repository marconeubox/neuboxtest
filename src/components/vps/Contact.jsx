import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
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
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-title">
              ¿Listo para comenzar con tu <span className="gradient-text">VPS</span>?
            </h2>
            <p className="contact-description">
              Nuestro equipo de expertos está aquí para ayudarte a elegir el plan perfecto 
              y migrar tu proyecto sin complicaciones.
            </p>
            
            <div className="contact-features">
              <div className="feature-item">
                <span className="feature-icon">🚀</span>
                <div className="feature-content">
                  <h4>Configuración Rápida</h4>
                  <p>Tu VPS estará listo en menos de 5 minutos</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔄</span>
                <div className="feature-content">
                  <h4>Migración Gratuita</h4>
                  <p>Nos encargamos de migrar tu sitio sin costo</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💬</span>
                <div className="feature-content">
                  <h4>Soporte 24/7</h4>
                  <p>Expertos disponibles cuando los necesites</p>
                </div>
              </div>
            </div>
            
            <div className="contact-methods">
              <div className="method-item">
                <span className="method-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>vps@hosting.com</p>
                </div>
              </div>
              <div className="method-item">
                <span className="method-icon">📞</span>
                <div>
                  <strong>Teléfono</strong>
                  <p>+52 (55) 1234-5678</p>
                </div>
              </div>
              <div className="method-item">
                <span className="method-icon">💬</span>
                <div>
                  <strong>Chat en Vivo</strong>
                  <p>Disponible 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Solicita tu Consulta Gratuita</h3>
              
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
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>
              
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
                <label htmlFor="plan">Plan de Interés</label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                >
                  <option value="">Selecciona un plan</option>
                  <option value="basico">VPS Básico - $299 MXN/mes</option>
                  <option value="pro">VPS Pro - $599 MXN/mes</option>
                  <option value="enterprise">VPS Enterprise - $1,199 MXN/mes</option>
                  <option value="custom">Plan Personalizado</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Cuéntanos sobre tu proyecto y necesidades específicas..."
                ></textarea>
              </div>
              
              <button type="submit" className="form-submit">
                Solicitar Consulta Gratuita
                <span className="submit-icon">🚀</span>
              </button>
              
              <p className="form-note">
                * Campos obligatorios. Te contactaremos en menos de 2 horas.
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
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .contact-title {
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: #ffffff;
          line-height: 1.2;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #10B981 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .contact-description {
          font-size: 1.1rem;
          color: #CBD5E1;
          margin-bottom: 3rem;
          line-height: 1.6;
        }
        
        .contact-features {
          margin-bottom: 3rem;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .feature-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }
        
        .feature-content h4 {
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        
        .feature-content p {
          color: #94A3B8;
          font-size: 0.9rem;
          margin: 0;
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
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          color: #E2E8F0;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
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
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
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
        }
        
        @media (max-width: 768px) {
          .contact {
            padding: 4rem 1rem;
          }
          
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .contact-methods {
            flex-direction: column;
          }
          
          .contact-form-wrapper {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;