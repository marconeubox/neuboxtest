import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'Blogger de Viajes',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      comment: 'Migré mi blog de viajes a este hosting WordPress y la diferencia es increíble. Mi sitio carga súper rápido y nunca he tenido problemas. El soporte es excelente.',
      rating: 5,
      website: 'viajesconmaria.com',
      metrics: {
        speed: '+200% más rápido',
        uptime: '99.9% uptime',
        support: '< 5 min respuesta'
      }
    },
    {
      name: 'Carlos Mendoza',
      role: 'Dueño de E-commerce',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      comment: 'Mi tienda online con WooCommerce nunca había funcionado tan bien. Las ventas aumentaron 40% desde que cambié a este hosting. La instalación fue súper fácil.',
      rating: 5,
      website: 'tiendacarlos.mx',
      metrics: {
        sales: '+40% ventas',
        speed: '0.8s carga',
        conversion: '+25% conversión'
      }
    },
    {
      name: 'Ana Rodríguez',
      role: 'Diseñadora Web',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      comment: 'Como diseñadora, necesito que mis sitios funcionen perfectamente. Este hosting WordPress es el mejor que he usado. Mis clientes están súper contentos con la velocidad.',
      rating: 5,
      website: 'disenosana.com',
      metrics: {
        clients: '50+ sitios',
        speed: '< 1s carga',
        satisfaction: '100% clientes'
      }
    },
    {
      name: 'Roberto Silva',
      role: 'Consultor Digital',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      comment: 'Recomiendo este hosting a todos mis clientes. La combinación de velocidad, seguridad y soporte es imbatible. WordPress funciona como debe ser.',
      rating: 5,
      website: 'consultoriadigital.mx',
      metrics: {
        recommendations: '100+ clientes',
        uptime: '99.99% SLA',
        security: '0 incidentes'
      }
    },
    {
      name: 'Laura Martínez',
      role: 'Emprendedora',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      comment: 'Lancé mi negocio online con WordPress y este hosting. En 6 meses pasé de 0 a 10,000 visitantes mensuales sin problemas de velocidad o caídas.',
      rating: 5,
      website: 'emprendeconlaura.com',
      metrics: {
        growth: '10K visitantes/mes',
        uptime: '100% disponible',
        speed: 'Siempre rápido'
      }
    },
    {
      name: 'Diego Fernández',
      role: 'Agencia de Marketing',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      comment: 'Manejamos más de 30 sitios WordPress de clientes en este hosting. La estabilidad y velocidad son excepcionales. Nuestros clientes ven mejores resultados en SEO.',
      rating: 5,
      website: 'agenciadigital.mx',
      metrics: {
        sites: '30+ sitios',
        seo: '+50% tráfico orgánico',
        performance: 'A+ en GTmetrix'
      }
    }
  ];

  const overallStats = {
    totalClients: '25,000+',
    averageRating: 4.9,
    uptime: '99.9%',
    supportRating: 4.8,
    speedImprovement: '250%',
    clientRetention: '96%'
  };

  const awards = [
    {
      title: 'Mejor Hosting WordPress 2024',
      organization: 'HostingReview México',
      icon: '🏆'
    },
    {
      title: 'Excelencia en Soporte',
      organization: 'TechSupport Awards',
      icon: '🎖️'
    },
    {
      title: 'Hosting Más Rápido',
      organization: 'SpeedTest Awards',
      icon: '⚡'
    },
    {
      title: 'Mejor Relación Calidad-Precio',
      organization: 'WebHosting México',
      icon: '💎'
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Lo que dicen nuestros <span className="gradient-text">Clientes</span>
          </h2>
          <p className="testimonials-subtitle">
            Miles de sitios WordPress confían en nosotros para su éxito online
          </p>
        </div>
        
        <div className="overall-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{overallStats.totalClients}</div>
              <div className="stat-label">Clientes Satisfechos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{overallStats.averageRating}/5</div>
              <div className="stat-label">Calificación Promedio</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{overallStats.uptime}</div>
              <div className="stat-label">Uptime Garantizado</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{overallStats.clientRetention}</div>
              <div className="stat-label">Retención de Clientes</div>
            </div>
          </div>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="author-info">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="author-image"
                  />
                  <div className="author-details">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                    <p className="author-website">{testimonial.website}</p>
                  </div>
                </div>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
              </div>
              
              <div className="testimonial-content">
                <p className="testimonial-comment">"{testimonial.comment}"</p>
              </div>
              
              <div className="testimonial-metrics">
                <div className="metrics-grid">
                  {Object.entries(testimonial.metrics).map(([key, value], idx) => (
                    <div key={idx} className="metric-item">
                      <div className="metric-value">{value}</div>
                      <div className="metric-label">
                        {key === 'speed' && 'Velocidad'}
                        {key === 'uptime' && 'Uptime'}
                        {key === 'support' && 'Soporte'}
                        {key === 'sales' && 'Ventas'}
                        {key === 'conversion' && 'Conversión'}
                        {key === 'clients' && 'Sitios'}
                        {key === 'satisfaction' && 'Satisfacción'}
                        {key === 'recommendations' && 'Recomendaciones'}
                        {key === 'security' && 'Seguridad'}
                        {key === 'growth' && 'Crecimiento'}
                        {key === 'sites' && 'Sitios'}
                        {key === 'seo' && 'SEO'}
                        {key === 'performance' && 'Rendimiento'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="awards-section">
          <h3 className="awards-title">Reconocimientos y Premios</h3>
          <div className="awards-grid">
            {awards.map((award, index) => (
              <div key={index} className="award-card">
                <div className="award-icon">{award.icon}</div>
                <h4 className="award-title">{award.title}</h4>
                <p className="award-organization">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="social-proof">
          <div className="proof-content">
            <h3 className="proof-title">¿Listo para unirte a miles de clientes satisfechos?</h3>
            <p className="proof-text">
              Únete a la comunidad de sitios WordPress más exitosos de México. 
              Comienza tu prueba gratuita hoy y descubre por qué somos la opción #1.
            </p>
            <div className="proof-stats">
              <div className="proof-stat">
                <span className="proof-number">96%</span>
                <span className="proof-label">de clientes nos recomiendan</span>
              </div>
              <div className="proof-stat">
                <span className="proof-number">250%</span>
                <span className="proof-label">mejora promedio en velocidad</span>
              </div>
              <div className="proof-stat">
                <span className="proof-number">24/7</span>
                <span className="proof-label">soporte especializado</span>
              </div>
            </div>
            <div className="proof-buttons">
              <button className="btn-primary">
                Comenzar Prueba Gratis
              </button>
              <button className="btn-secondary">
                Hablar con un Experto
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .testimonials {
          padding: 8rem 2rem;
          background: linear-gradient(135deg, #21759B 0%, #1E3A8A 100%);
        }
        
        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .testimonials-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .testimonials-title {
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
        
        .testimonials-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .overall-stats {
          margin-bottom: 4rem;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .stat-item {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .stat-item:hover {
          transform: translateY(-5px);
          border-color: #21759B;
          box-shadow: 0 15px 30px #1E3A8A;
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
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 6rem;
        }
        
        .testimonial-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          opacity: 0.1;
          transition: opacity 0.3s ease;
        }
        
        .testimonial-card:hover::before {
          opacity: 0.2;
        }
        
        .testimonial-card:hover {
          transform: translateY(-10px);
          border-color: #21759B;
          box-shadow: 0 25px 50px #1E3A8A;
        }
        
        .testimonial-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }
        
        .author-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }
        
        .author-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(33, 117, 155, 0.3);
        }
        
        .author-details {
          flex: 1;
        }
        
        .author-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }
        
        .author-role {
          color: #21759B;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        
        .author-website {
          color: #94A3B8;
          font-size: 0.8rem;
          margin: 0;
        }
        
        .rating {
          display: flex;
          gap: 0.25rem;
        }
        
        .star {
          font-size: 1.2rem;
        }
        
        .testimonial-content {
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
        }
        
        .testimonial-comment {
          color: #E2E8F0;
          font-size: 1.1rem;
          line-height: 1.7;
          font-style: italic;
          margin: 0;
        }
        
        .testimonial-metrics {
          position: relative;
          z-index: 2;
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        
        .metric-item {
          background: #374151;
          border: 1px solid #4A5568;
          border-radius: 8px;
          padding: 1rem;
          text-align: center;
        }
        
        .metric-value {
          font-size: 1.1rem;
          font-weight: 700;
          color: #21759B;
          margin-bottom: 0.25rem;
        }
        
        .metric-label {
          color: #94A3B8;
          font-size: 0.8rem;
        }
        
        .awards-section {
          margin-bottom: 4rem;
        }
        
        .awards-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .awards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .award-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .award-card:hover {
          transform: translateY(-5px);
          border-color: #F59E0B;
          box-shadow: 0 15px 30px #D97706;
        }
        
        .award-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .award-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        
        .award-organization {
          color: #94A3B8;
          font-size: 0.9rem;
          margin: 0;
        }
        
        .social-proof {
          background: linear-gradient(135deg, #21759B, #1E3A8A);
          border: 1px solid #3B82F6;
          border-radius: 24px;
          padding: 4rem 3rem;
          text-align: center;
        }
        
        .proof-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .proof-text {
          font-size: 1.2rem;
          color: #CBD5E1;
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }
        
        .proof-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        
        .proof-stat {
          text-align: center;
        }
        
        .proof-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          color: #21759B;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
        .proof-label {
          color: #CBD5E1;
          font-size: 0.9rem;
        }
        
        .proof-buttons {
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
          .testimonials {
            padding: 4rem 1rem;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .testimonial-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          
          .author-info {
            width: 100%;
          }
          
          .metrics-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          
          .awards-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .social-proof {
            padding: 3rem 2rem;
          }
          
          .proof-stats {
            flex-direction: column;
            gap: 2rem;
          }
          
          .proof-buttons {
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

export default Testimonials;