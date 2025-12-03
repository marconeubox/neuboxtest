import React from 'react';

const Plans = () => {
  const plans = [
    {
      name: 'VPS Básico',
      popular: false,
      monthlyPrice: 299,
      annualPrice: 2990, // 10 meses (2 meses gratis)
      features: [
        '1 vCPU',
        '2 GB RAM',
        '25 GB SSD NVMe',
        '1 TB Transferencia',
        '1 IP Dedicada',
        'Panel de Control',
        'Backups Opcionales (+$50/mes)',
        'Soporte 24/7 por Tickets'
      ],
      limitations: ['99.9% Uptime SLA'],
      cta: 'Comenzar Ahora'
    },
    {
      name: 'VPS Pro',
      popular: true,
      monthlyPrice: 599,
      annualPrice: 5990, // 10 meses (2 meses gratis)
      features: [
        '2 vCPU',
        '4 GB RAM',
        '50 GB SSD NVMe',
        '2 TB Transferencia',
        '1 IP Dedicada',
        'Panel de Control Avanzado',
        'Backups Diarios Incluidos',
        'Soporte 24/7 Telefónico',
        'Migración Gratuita (plan anual)',
        'Instalación 1-Click'
      ],
      limitations: ['99.9% Uptime SLA'],
      cta: 'Más Popular'
    },
    {
      name: 'VPS Enterprise',
      popular: false,
      monthlyPrice: 1199,
      annualPrice: 11990, // 10 meses (2 meses gratis)
      features: [
        '4 vCPU',
        '8 GB RAM',
        '100 GB SSD NVMe',
        '5 TB Transferencia',
        '2 IPs Dedicadas',
        'Panel de Control Premium',
        'Backups Diarios + Snapshots',
        'Soporte Prioritario 24/7',
        'Migración Gratuita Incluida',
        'Instalación 1-Click',
        'Monitoreo Avanzado',
        'Firewall Dedicado'
      ],
      limitations: ['99.9% Uptime SLA'],
      cta: 'Máximo Rendimiento'
    }
  ];

  return (
    <section id="plans" className="plans">
      <div className="plans-container">
        <div className="plans-header">
          <h2 className="plans-title">
            Planes <span className="gradient-text">VPS</span> para Cada Necesidad
          </h2>
          <p className="plans-subtitle">
            Todos nuestros planes incluyen 99.9% uptime SLA, soporte 24/7 y 30 días de garantía de devolución
          </p>
          <div className="billing-toggle">
            <span className="billing-label">Mensual</span>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <span className="billing-label">Anual <span className="discount-badge">2 meses gratis</span></span>
          </div>
        </div>
        
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Más Popular</div>}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price-amount">${plan.monthlyPrice}</span>
                  <span className="price-period">MXN/mes</span>
                </div>
                <div className="annual-price">
                  ${plan.annualPrice} MXN/año (ahorra ${(plan.monthlyPrice * 12) - plan.annualPrice} MXN)
                </div>
              </div>
              
              <div className="plan-features">
                <h4 className="features-title">Incluye:</h4>
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="plan-limitations">
                {plan.limitations.map((limitation, idx) => (
                  <div key={idx} className="limitation-item">
                    <span className="limitation-icon">🛡️</span>
                    {limitation}
                  </div>
                ))}
              </div>
              
              <button className={`plan-cta ${plan.popular ? 'popular-cta' : ''}`}>
                {plan.cta}
              </button>
              
              <div className="plan-guarantee">
                30 días de garantía de devolución
              </div>
            </div>
          ))}
        </div>
        
        <div className="plans-footer">
          <p className="footer-note">
            * Todos los precios en MXN. Facturación automática por periodo contratado. 
            Puedes cancelar antes de la renovación para evitar cobros futuros.
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .plans {
          padding: 8rem 2rem;
          background: linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%);
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
          background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #10B981 100%);
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
        
        .billing-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .billing-label {
          color: #E2E8F0;
          font-weight: 500;
        }
        
        .discount-badge {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.8rem;
          margin-left: 0.5rem;
        }
        
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }
        
        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #475569;
          transition: 0.4s;
          border-radius: 34px;
        }
        
        .slider:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }
        
        input:checked + .slider {
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
        }
        
        input:checked + .slider:before {
          transform: translateX(26px);
        }
        
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .plan-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .plan-card.popular {
          border-color: rgba(59, 130, 246, 0.5);
          transform: scale(1.05);
        }
        
        .plan-card:hover {
          transform: translateY(-10px);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 25px 50px rgba(59, 130, 246, 0.2);
        }
        
        .plan-card.popular:hover {
          transform: scale(1.05) translateY(-10px);
        }
        
        .popular-badge {
          position: absolute;
          top: -1px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          color: white;
          padding: 0.5rem 2rem;
          border-radius: 0 0 12px 12px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .plan-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-top: ${plans.some(p => p.popular) ? '2rem' : '0'};
        }
        
        .plan-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .plan-price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .price-amount {
          font-size: 3rem;
          font-weight: 800;
          color: #3B82F6;
        }
        
        .price-period {
          font-size: 1.1rem;
          color: #94A3B8;
        }
        
        .annual-price {
          font-size: 0.9rem;
          color: #10B981;
          font-weight: 500;
        }
        
        .plan-features {
          margin-bottom: 2rem;
        }
        
        .features-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #E2E8F0;
          margin-bottom: 1rem;
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
          margin-bottom: 0.75rem;
          color: #CBD5E1;
        }
        
        .feature-check {
          color: #10B981;
          font-weight: bold;
          font-size: 1.1rem;
        }
        
        .plan-limitations {
          margin-bottom: 2rem;
        }
        
        .limitation-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #10B981;
          font-weight: 500;
          font-size: 0.9rem;
        }
        
        .plan-cta {
          width: 100%;
          background: linear-gradient(135deg, #475569, #64748B);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 1rem;
        }
        
        .plan-cta.popular-cta {
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
        }
        
        .plan-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
        }
        
        .plan-guarantee {
          text-align: center;
          font-size: 0.9rem;
          color: #94A3B8;
        }
        
        .plans-footer {
          text-align: center;
          margin-top: 3rem;
        }
        
        .footer-note {
          font-size: 0.9rem;
          color: #94A3B8;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .plans {
            padding: 4rem 1rem;
          }
          
          .plans-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .plan-card.popular {
            transform: none;
          }
          
          .plan-card.popular:hover {
            transform: translateY(-10px);
          }
          
          .billing-toggle {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Plans;