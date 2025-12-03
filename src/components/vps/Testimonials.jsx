import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      role: 'CEO, TechStartup MX',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      comment: 'Migré mi aplicación a su VPS Pro y la diferencia en rendimiento es increíble. El soporte técnico resolvió todas mis dudas en minutos.',
      rating: 5
    },
    {
      name: 'Ana García',
      role: 'Desarrolladora Web',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      comment: 'Llevo 2 años usando sus VPS y nunca he tenido problemas. El uptime del 99.9% no es solo una promesa, es realidad.',
      rating: 5
    },
    {
      name: 'Roberto Silva',
      role: 'Director de IT, Empresa Retail',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      comment: 'El VPS Enterprise maneja perfectamente nuestro e-commerce con miles de visitas diarias. La migración fue transparente y sin downtime.',
      rating: 5
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
            Más de 10,000 clientes confían en nuestros VPS para sus proyectos críticos
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
              </div>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Clientes Satisfechos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime Garantizado</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Soporte Técnico</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5 min</div>
            <div className="stat-label">Tiempo de Respuesta</div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .testimonials {
          padding: 8rem 2rem;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%);
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
          background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #10B981 100%);
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
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .testimonial-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
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
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .testimonial-card:hover::before {
          opacity: 1;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px);
          border-color: rgba(59, 130, 246, 0.2);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1);
        }
        
        .testimonial-content {
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
        }
        
        .rating {
          margin-bottom: 1rem;
        }
        
        .star {
          font-size: 1.2rem;
          margin-right: 0.25rem;
        }
        
        .testimonial-comment {
          color: #E2E8F0;
          font-size: 1.1rem;
          line-height: 1.7;
          font-style: italic;
        }
        
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
          z-index: 2;
        }
        
        .author-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(59, 130, 246, 0.3);
        }
        
        .author-info {
          flex: 1;
        }
        
        .author-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }
        
        .author-role {
          color: #3B82F6;
          font-size: 0.9rem;
        }
        
        .testimonials-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 3rem 2rem;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #3B82F6;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          color: #CBD5E1;
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .testimonials {
            padding: 4rem 1rem;
          }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .testimonial-card {
            padding: 1.5rem;
          }
          
          .testimonials-stats {
            grid-template-columns: repeat(2, 1fr);
            padding: 2rem 1rem;
          }
          
          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;