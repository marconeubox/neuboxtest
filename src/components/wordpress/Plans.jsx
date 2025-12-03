import React from 'react';

const Plans = () => {
  const plans = [
    {
      name: 'WordPress Básico',
      popular: false,
      originalPrice: 149,
      price: 99,
      period: '/mes',
      description: 'Perfecto para blogs personales y sitios pequeños',
      features: [
        '1 Sitio WordPress',
        '10 GB SSD NVMe',
        '100 GB Transferencia',
        'SSL Gratis',
        'Backup Semanal',
        'WordPress Pre-instalado',
        'Actualizaciones Automáticas',
        'Soporte 24/7'
      ],
      buttonText: 'Comenzar Ahora',
      buttonClass: 'btn-outline',
      color: 'blue'
    },
    {
      name: 'WordPress Pro',
      popular: true,
      originalPrice: 299,
      price: 199,
      period: '/mes',
      description: 'Ideal para sitios web profesionales y empresas',
      features: [
        '5 Sitios WordPress',
        '25 GB SSD NVMe',
        '500 GB Transferencia',
        'SSL Gratis',
        'Backup Diario',
        'WordPress Pre-instalado',
        'Actualizaciones Automáticas',
        'Soporte Prioritario 24/7',
        'CDN Gratis',
        'Staging Environment',
        'Plugin Premium Incluido'
      ],
      buttonText: 'Más Popular',
      buttonClass: 'btn-primary',
      color: 'green'
    },
    {
      name: 'WordPress Enterprise',
      popular: false,
      originalPrice: 599,
      price: 399,
      period: '/mes',
      description: 'Máximo rendimiento para sitios de alto tráfico',
      features: [
        'Sitios WordPress Ilimitados',
        '100 GB SSD NVMe',
        '2 TB Transferencia',
        'SSL Wildcard Gratis',
        'Backup en Tiempo Real',
        'WordPress Pre-instalado',
        'Actualizaciones Automáticas',
        'Soporte Técnico Dedicado',
        'CDN Premium',
        'Staging Environment',
        'Plugins Premium Incluidos',
        'Optimización WP Avanzada',
        'Monitoreo 24/7',
        'Migración Gratuita'
      ],
      buttonText: 'Máximo Poder',
      buttonClass: 'btn-gradient',
      color: 'purple'
    }
  ];

  return (
    <section id="plans" className="plans">
      <div className="plans-container">
        <div className="plans-header">
          <h2 className="plans-title">
            Planes <span className="gradient-text">WordPress</span> Premium
          </h2>
          <p className="plans-subtitle">
            Hosting optimizado específicamente para WordPress con todo incluido
          </p>
          <div className="promo-banner">
            🎉 PROMOCIÓN ESPECIAL: 3 meses GRATIS en planes anuales + Migración GRATUITA
          </div>
        </div>
        
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''} ${plan.color}`}>
              {plan.popular && (
                <div className="popular-badge">
                  ⭐ MÁS POPULAR
                </div>
              )}
              
              <div className="plan-header">
                <div className="plan-icon">
                  {plan.color === 'blue' && '📘'}
                  {plan.color === 'green' && '📗'}
                  {plan.color === 'purple' && '📜'}
                </div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>
              
              <div className="plan-pricing">
                <div className="price-container">
                  <span className="original-price">${plan.originalPrice} MXN</span>
                  <div className="current-price">
                    <span className="currency">$</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>
                <div className="savings">
                  Ahorras ${plan.originalPrice - plan.price} MXN/mes
                </div>
              </div>
              
              <div className="plan-features">
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={`plan-button ${plan.buttonClass}`}>
                {plan.buttonText}
              </button>
              
              <div className="plan-guarantee">
                💰 Garantía de devolución 30 días
              </div>
            </div>
          ))}
        </div>
        
        <div className="plans-footer">
          <div className="footer-features">
            <div className="footer-feature">
              <span className="feature-icon">⚡</span>
              <div className="feature-info">
                <strong>Instalación Instantánea</strong>
                <p>WordPress listo en 30 segundos</p>
              </div>
            </div>
            <div className="footer-feature">
              <span className="feature-icon">🔒</span>
              <div className="feature-info">
                <strong>Seguridad Avanzada</strong>
                <p>Protección contra malware y ataques</p>
              </div>
            </div>
            <div className="footer-feature">
              <span className="feature-icon">🚀</span>
              <div className="feature-info">
                <strong>Optimización WP</strong>
                <p>Cache avanzado y CDN incluido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .plans {
          padding: 8rem 2rem;
          background: linear-gradient(180deg, #1E293B 0%, #334155 50%, #1E293B 100%);
        }
        
        .plans-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .plans-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .plans-title {
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
        
        .plans-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }
        
        .promo-banner {
          background: linear-gradient(135deg, #EF4444, #DC2626);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          display: inline-block;
          animation: pulse 2s infinite;
          font-size: 0.95rem;
        }
        
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .plan-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 24px;
          padding: 2rem;
          position: relative;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .plan-card.blue::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #3B82F6, #1E3A8A);
          opacity: 0.1;
          transition: opacity 0.3s ease;
        }
        
        .plan-card.green::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #10B981, #059669);
          opacity: 0.1;
          transition: opacity 0.3s ease;
        }
        
        .plan-card.purple::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #7C3AED, #6D28D9);
          opacity: 0.1;
          transition: opacity 0.3s ease;
        }
        
        .plan-card:hover::before {
          opacity: 0.2;
        }
        
        .plan-card:hover {
          transform: translateY(-10px);
        }
        
        .plan-card.blue:hover {
          border-color: #3B82F6;
          box-shadow: 0 25px 50px #1E3A8A;
        }
        
        .plan-card.green:hover {
          border-color: #10B981;
          box-shadow: 0 25px 50px #059669;
        }
        
        .plan-card.purple:hover {
          border-color: #7C3AED;
          box-shadow: 0 25px 50px #6D28D9;
        }
        
        .plan-card.popular {
          border-color: #10B981;
          box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
          transform: scale(1.05);
        }
        
        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        
        .plan-header {
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
        }
        
        .plan-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .plan-name {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        
        .plan-description {
          color: #94A3B8;
          font-size: 1rem;
        }
        
        .plan-pricing {
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
        }
        
        .price-container {
          margin-bottom: 0.5rem;
        }
        
        .original-price {
          color: #94A3B8;
          text-decoration: line-through;
          font-size: 1.1rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        
        .current-price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.25rem;
        }
        
        .currency {
          font-size: 1.5rem;
          color: #21759B;
          font-weight: 600;
        }
        
        .amount {
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
        }
        
        .period {
          font-size: 1.2rem;
          color: #94A3B8;
        }
        
        .savings {
          color: #10B981;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .plan-features {
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
        }
        
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0;
          color: #E2E8F0;
          font-size: 0.95rem;
        }
        
        .feature-check {
          color: #10B981;
          font-weight: bold;
          font-size: 1.1rem;
        }
        
        .plan-button {
          width: 100%;
          padding: 1rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }
        
        .btn-outline {
          background: transparent;
          color: #3B82F6;
          border: 2px solid #3B82F6;
        }
        
        .btn-outline:hover {
          background: #3B82F6;
          color: white;
          transform: translateY(-2px);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(16, 185, 129, 0.6);
        }
        
        .btn-gradient {
          background: linear-gradient(135deg, #7C3AED, #6D28D9);
          color: white;
          box-shadow: 0 10px 25px rgba(124, 58, 237, 0.4);
        }
        
        .btn-gradient:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(124, 58, 237, 0.6);
        }
        
        .plan-guarantee {
          text-align: center;
          color: #94A3B8;
          font-size: 0.9rem;
          position: relative;
          z-index: 2;
        }
        
        .plans-footer {
          padding-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .footer-feature {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-align: left;
        }
        
        .feature-icon {
          font-size: 2rem;
          width: 60px;
          text-align: center;
        }
        
        .feature-info strong {
          color: #ffffff;
          display: block;
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }
        
        .feature-info p {
          color: #94A3B8;
          font-size: 0.9rem;
          margin: 0;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @media (max-width: 768px) {
          .plans {
            padding: 4rem 1rem;
          }
          
          .plans-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .plan-card {
            padding: 1.5rem;
          }
          
          .plan-card.popular {
            transform: none;
          }
          
          .promo-banner {
            font-size: 0.85rem;
            padding: 0.8rem 1.5rem;
          }
          
          .footer-features {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            text-align: center;
          }
          
          .footer-feature {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Plans;