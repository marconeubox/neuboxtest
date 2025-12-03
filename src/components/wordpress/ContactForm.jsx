import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    plan: 'pro',
    projectType: '',
    message: '',
    newsletter: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const plans = [
    { value: 'basic', label: 'WordPress Básico - $99/mes' },
    { value: 'pro', label: 'WordPress Pro - $199/mes' },
    { value: 'enterprise', label: 'WordPress Enterprise - $399/mes' }
  ];

  const projectTypes = [
    'Blog Personal',
    'Sitio Empresarial',
    'Tienda Online (WooCommerce)',
    'Portafolio',
    'Sitio de Noticias',
    'Comunidad/Foro',
    'Sitio Educativo',
    'Otro'
  ];

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'ventas@mihost.com',
      description: 'Respuesta en menos de 2 horas'
    },
    {
      icon: '📞',
      title: 'Teléfono',
      value: '+52 55 1234-5678',
      description: 'Lunes a Viernes 9:00 - 18:00'
    },
    {
      icon: '💬',
      title: 'Chat en Vivo',
      value: 'Disponible 24/7',
      description: 'Respuesta inmediata'
    },
    {
      icon: '📍',
      title: 'Oficina',
      value: 'Ciudad de México',
      description: 'Polanco, CDMX'
    }
  ];

  const benefits = [
    '✅ Consultoría gratuita de 30 minutos',
    '✅ Análisis de tu sitio actual',
    '✅ Recomendaciones personalizadas',
    '✅ Migración gratuita incluida',
    '✅ Setup y configuración sin costo',
    '✅ 30 días de garantía de devolución'
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Hablemos de tu <span className="gradient-text">Proyecto</span>
          </h2>
          <p className="contact-subtitle">
            Nuestros expertos en WordPress te ayudarán a elegir la mejor solución para tu sitio web
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-form-section">
            <div className="form-header">
              <h3>Solicita tu Consultoría Gratuita</h3>
              <p>Completa el formulario y te contactaremos en menos de 2 horas</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    required
                    placeholder="tu@email.com"
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
                    onChange={handleInputChange}
                    placeholder="+52 55 1234-5678"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="website">Sitio Web Actual</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://tusitio.com"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="plan">Plan de Interés *</label>
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleInputChange}
                    required
                  >
                    {plans.map((plan) => (
                      <option key={plan.value} value={plan.value}>
                        {plan.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="projectType">Tipo de Proyecto *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Cuéntanos sobre tu proyecto</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Describe tu proyecto, objetivos, tráfico esperado, funcionalidades especiales que necesitas..."
                ></textarea>
              </div>
              
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-custom"></span>
                  Quiero recibir tips y ofertas especiales sobre WordPress
                </label>
              </div>
              
              <button 
                type="submit" 
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? '🔄 Enviando...' : '🚀 Solicitar Consultoría Gratuita'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ ¡Mensaje enviado! Te contactaremos en menos de 2 horas.
                </div>
              )}
            </form>
          </div>
          
          <div className="contact-info-section">
            <div className="contact-info">
              <h3>Información de Contacto</h3>
              <div className="info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-details">
                      <h4 className="info-title">{info.title}</h4>
                      <p className="info-value">{info.value}</p>
                      <p className="info-description">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="benefits-section">
              <h3>Lo que incluye tu consultoría:</h3>
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="urgency-section">
              <div className="urgency-content">
                <h4>🔥 Oferta Especial</h4>
                <p>
                  Si contratas hoy, obtienes <strong>3 meses GRATIS</strong> en planes anuales 
                  + migración gratuita + configuración personalizada.
                </p>
                <div className="urgency-timer">
                  ⏰ Oferta válida por tiempo limitado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact {
          padding: 8rem 2rem;
          background: linear-gradient(135deg, #21759B 0%, #1E3A8A 100%);
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
        
        .contact-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        
        .contact-form-section {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 24px;
          padding: 3rem;
        }
        
        .form-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .form-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        
        .form-header p {
          color: #94A3B8;
          font-size: 1rem;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .form-group label {
          color: #E2E8F0;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          background: #374151;
          border: 1px solid #4A5568;
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
          border-color: #21759B;
          box-shadow: 0 0 0 3px #21759B;
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #94A3B8;
        }
        
        .checkbox-group {
          flex-direction: row;
          align-items: center;
          gap: 0.75rem;
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          color: #CBD5E1;
          font-size: 0.9rem;
        }
        
        .checkbox-label input[type="checkbox"] {
          display: none;
        }
        
        .checkbox-custom {
          width: 20px;
          height: 20px;
          border: 2px solid #4A5568;
          border-radius: 4px;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .checkbox-label input[type="checkbox"]:checked + .checkbox-custom {
          background: #21759B;
          border-color: #21759B;
        }
        
        .checkbox-label input[type="checkbox"]:checked + .checkbox-custom::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-weight: bold;
          font-size: 0.8rem;
        }
        
        .submit-button {
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }
        
        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(33, 117, 155, 0.4);
        }
        
        .submit-button.submitting {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .success-message {
          background: #10B981;
          border: 1px solid #059669;
          color: #ffffff;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          font-weight: 600;
        }
        
        .contact-info-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .contact-info,
        .benefits-section,
        .urgency-section {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 20px;
          padding: 2rem;
        }
        
        .contact-info h3,
        .benefits-section h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .info-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .info-icon {
          font-size: 1.5rem;
          width: 40px;
          text-align: center;
        }
        
        .info-details {
          flex: 1;
        }
        
        .info-title {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }
        
        .info-value {
          color: #21759B;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        
        .info-description {
          color: #94A3B8;
          font-size: 0.8rem;
          margin: 0;
        }
        
        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .benefit-item {
          color: #CBD5E1;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        .urgency-section {
          border-color: #EF4444;
          background: #EF4444;
        }
        
        .urgency-content h4 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .urgency-content p {
          color: #CBD5E1;
          line-height: 1.6;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .urgency-content strong {
          color: #EF4444;
        }
        
        .urgency-timer {
          background: #DC2626;
          color: #ffffff;
          padding: 0.75rem;
          border-radius: 8px;
          text-align: center;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .contact {
            padding: 4rem 1rem;
          }
          
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .contact-form-section {
            padding: 2rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .info-item {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }
          
          .info-details {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;