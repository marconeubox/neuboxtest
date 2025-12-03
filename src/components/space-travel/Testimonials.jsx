import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Astrofísica',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      comment: 'Space Odyssey me dio la oportunidad de ver el universo desde una perspectiva completamente nueva. La experiencia fue transformadora.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Empresario',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      comment: 'Nunca imaginé que podría caminar en la superficie lunar. El equipo de Space Odyssey hizo realidad mi sueño de la infancia.'
    },
    {
      name: 'Prof. Elena Volkov',
      role: 'Investigadora Espacial',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      comment: 'La calidad del servicio y la seguridad son incomparables. Space Odyssey está redefiniendo el turismo espacial.'
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Voces del <span className="gradient-text">Cosmos</span>
          </h2>
          <p className="testimonials-subtitle">
            Experiencias reales de nuestros viajeros espaciales
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-comment">{testimonial.comment}</p>
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
      </div>
      
      <style jsx>{`
        .testimonials {
          padding: 8rem 2rem;
          background: linear-gradient(135deg, rgba(11, 20, 38, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%);
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
          background: linear-gradient(135deg, #06b6d4 0%, #6366f1 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .testimonials-subtitle {
          font-size: 1.2rem;
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
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
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(99, 102, 241, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .testimonial-card:hover::before {
          opacity: 1;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px);
          border-color: rgba(6, 182, 212, 0.2);
          box-shadow: 0 20px 40px rgba(6, 182, 212, 0.1);
        }
        
        .testimonial-content {
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
        }
        
        .quote-icon {
          font-size: 4rem;
          color: #06b6d4;
          opacity: 0.3;
          line-height: 1;
          margin-bottom: 1rem;
        }
        
        .testimonial-comment {
          color: #e2e8f0;
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
          border: 3px solid rgba(6, 182, 212, 0.3);
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
          color: #06b6d4;
          font-size: 0.9rem;
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
        }
      `}</style>
    </section>
  );
};

export default Testimonials;