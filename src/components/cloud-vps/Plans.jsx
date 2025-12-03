import React from 'react';

const Plans = () => {
  const plans = [
    {
      name: 'Cloud Starter',
      popular: false,
      basePrice: 399,
      originalPrice: 599,
      period: '/mes',
      description: 'Perfecto para proyectos en crecimiento',
      cerealBox: {
        color: 'blue',
        pattern: 'dots',
        mascot: '🚀'
      },
      specs: {
        cpu: '2 vCPU',
        ram: '4 GB RAM',
        storage: '50 GB SSD NVMe',
        bandwidth: '2 TB',
        scaling: 'Hasta 4 vCPU / 8 GB RAM'
      },
      features: [
        'Escalabilidad Automática',
        'Panel Cloud Intuitivo',
        'Backups Diarios',
        'SSL Gratuito',
        'Soporte 24/7',
        'API REST Completa',
        'Monitoreo en Tiempo Real',
        'Migración Gratuita'
      ],
      buttonText: 'Comenzar Cloud',
      buttonClass: 'btn-outline'
    },
    {
      name: 'Cloud Pro',
      popular: true,
      basePrice: 799,
      originalPrice: 1199,
      period: '/mes',
      description: 'Ideal para aplicaciones empresariales',
      cerealBox: {
        color: 'green',
        pattern: 'stripes',
        mascot: '⚡'
      },
      specs: {
        cpu: '4 vCPU',
        ram: '8 GB RAM',
        storage: '100 GB SSD NVMe',
        bandwidth: '5 TB',
        scaling: 'Hasta 8 vCPU / 16 GB RAM'
      },
      features: [
        'Auto-Scaling Avanzado',
        'Load Balancer Incluido',
        'Backups Incrementales',
        'SSL Wildcard',
        'Soporte Prioritario 24/7',
        'API REST + GraphQL',
        'Monitoreo Avanzado',
        'Migración Express',
        'CDN Global',
        'Firewall Dedicado'
      ],
      buttonText: 'Más Popular',
      buttonClass: 'btn-primary'
    },
    {
      name: 'Cloud Enterprise',
      popular: false,
      basePrice: 1599,
      originalPrice: 2399,
      period: '/mes',
      description: 'Máximo rendimiento para alta demanda',
      cerealBox: {
        color: 'purple',
        pattern: 'waves',
        mascot: '🏆'
      },
      specs: {
        cpu: '8 vCPU',
        ram: '16 GB RAM',
        storage: '200 GB SSD NVMe',
        bandwidth: '10 TB',
        scaling: 'Hasta 16 vCPU / 32 GB RAM'
      },
      features: [
        'Escalabilidad Ilimitada',
        'Multi-Region Deployment',
        'Backups en Tiempo Real',
        'SSL Enterprise',
        'Soporte Técnico Dedicado',
        'API Completa + Webhooks',
        'Monitoreo Premium',
        'Migración White Glove',
        'CDN Premium Global',
        'Firewall Enterprise',
        'Compliance & Auditoría',
        'SLA 99.99%'
      ],
      buttonText: 'Máxima Potencia',
      buttonClass: 'btn-gradient'
    }
  ];

  return (
    <section id="plans" className="plans">
      <div className="plans-container">
        <div className="plans-header">
          <h2 className="plans-title">
            Planes <span className="gradient-text">Cloud VPS</span> Escalables
          </h2>
          <p className="plans-subtitle">
            Elige tu plan base y escala automáticamente según tus necesidades. 
            Paga solo por los recursos que uses.
          </p>
          <div className="promo-banner">
            🎉 PROMOCIÓN LANZAMIENTO: 50% OFF primer mes + Setup GRATIS
          </div>
        </div>
        
        <div className="cereal-boxes-container">
          {plans.map((plan, index) => (
            <div key={index} className={`cereal-box ${plan.popular ? 'popular' : ''} ${plan.cerealBox.color}`}>
              {plan.popular && (
                <div className="popular-ribbon">
                  ⭐ MÁS POPULAR
                </div>
              )}
              
              {/* Parte superior de la caja - como tapa de cereal */}
              <div className="box-top">
                <div className="box-flap"></div>
              </div>
              
              {/* Frente de la caja */}
              <div className="box-front">
                <div className="brand-header">
                  <div className="brand-logo">CLOUD VPS</div>
                  <div className="plan-mascot">{plan.cerealBox.mascot}</div>
                </div>
                
                <div className="plan-name-section">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                </div>
                
                <div className="nutrition-facts">
                  <div className="nutrition-title">Especificaciones Técnicas</div>
                  <div className="nutrition-content">
                    <div className="spec-item">
                      <span className="spec-label">CPU:</span>
                      <span className="spec-value">{plan.specs.cpu}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">RAM:</span>
                      <span className="spec-value">{plan.specs.ram}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Storage:</span>
                      <span className="spec-value">{plan.specs.storage}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Bandwidth:</span>
                      <span className="spec-value">{plan.specs.bandwidth}</span>
                    </div>
                    <div className="spec-item scaling">
                      <span className="spec-label">Escalable hasta:</span>
                      <span className="spec-value">{plan.specs.scaling}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pricing-section">
                  <div className="original-price">${plan.originalPrice} MXN</div>
                  <div className="current-price">
                    <span className="currency">$</span>
                    <span className="amount">{plan.basePrice}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  <div className="savings">
                    Ahorras ${plan.originalPrice - plan.basePrice} MXN/mes
                  </div>
                </div>
              </div>
              
              {/* Lado de la caja - ingredientes */}
              <div className="box-side">
                <div className="ingredients-title">Características Incluidas</div>
                <div className="ingredients-list">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="ingredient-item">
                      <span className="ingredient-check">✓</span>
                      <span className="ingredient-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className={`plan-button ${plan.buttonClass}`}>
                {plan.buttonText}
              </button>
              
              <div className="plan-guarantee">
                💰 7 días de prueba gratuita
              </div>
              
              {/* Patrón decorativo de la caja */}
              <div className={`box-pattern ${plan.cerealBox.pattern}`}></div>
            </div>
          ))}
        </div>
        
        <div className="plans-footer">
          <div className="footer-features">
            <div className="footer-feature">
              <span className="feature-icon">☁️</span>
              <div className="feature-info">
                <strong>Escalabilidad Automática</strong>
                <p>Recursos que crecen con tu proyecto</p>
              </div>
            </div>
            <div className="footer-feature">
              <span className="feature-icon">💰</span>
              <div className="feature-info">
                <strong>Pago por Uso</strong>
                <p>Solo pagas por los recursos que consumes</p>
              </div>
            </div>
            <div className="footer-feature">
              <span className="feature-icon">🔧</span>
              <div className="feature-info">
                <strong>Setup Instantáneo</strong>
                <p>Tu Cloud VPS listo en 30 segundos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .plans {
          padding: 8rem 2rem;
          background: linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%);
        }
        
        .plans-container {
          max-width: 1400px;
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
          background: linear-gradient(135deg, #3B82F6 0%, #10B981 50%, #8B5CF6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .plans-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 700px;
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
        }
        
        .cereal-boxes-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
          perspective: 1000px;
        }
        
        .cereal-box {
          position: relative;
          height: 600px;
          transform-style: preserve-3d;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .cereal-box:hover {
          transform: rotateY(-5deg) rotateX(2deg);
        }
        
        .cereal-box.popular {
          transform: scale(1.05);
        }
        
        .cereal-box.popular:hover {
          transform: scale(1.05) rotateY(-5deg) rotateX(2deg);
        }
        
        .popular-ribbon {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          padding: 0.5rem 2rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          z-index: 10;
          box-shadow: 0 5px 15px rgba(16, 185, 129, 0.4);
        }
        
        .box-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 30px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border-radius: 12px 12px 0 0;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transform: rotateX(90deg);
          transform-origin: bottom;
        }
        
        .box-flap {
          position: absolute;
          top: 5px;
          left: 10px;
          right: 10px;
          height: 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }
        
        .box-front {
          position: absolute;
          top: 30px;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0 0 12px 12px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .cereal-box.blue .box-front {
          border-color: rgba(59, 130, 246, 0.3);
          background: linear-gradient(145deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05));
        }
        
        .cereal-box.green .box-front {
          border-color: rgba(16, 185, 129, 0.3);
          background: linear-gradient(145deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05));
        }
        
        .cereal-box.purple .box-front {
          border-color: rgba(139, 92, 246, 0.3);
          background: linear-gradient(145deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05));
        }
        
        .brand-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .brand-logo {
          font-size: 0.8rem;
          font-weight: 800;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
        }
        
        .plan-mascot {
          font-size: 2rem;
          animation: bounce 2s infinite;
        }
        
        .plan-name-section {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        
        .plan-name {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .plan-description {
          color: #CBD5E1;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .nutrition-facts {
          background: rgba(255, 255, 255, 0.9);
          color: #1F2937;
          border-radius: 8px;
          padding: 1rem;
          margin-bottom: 1.5rem;
          border: 2px solid #000;
        }
        
        .nutrition-title {
          font-size: 0.8rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          border-bottom: 2px solid #000;
          padding-bottom: 0.3rem;
        }
        
        .nutrition-content {
          font-size: 0.75rem;
        }
        
        .spec-item {
          display: flex;
          justify-content: space-between;
          padding: 0.2rem 0;
          border-bottom: 1px solid #E5E7EB;
        }
        
        .spec-item:last-child {
          border-bottom: none;
        }
        
        .spec-item.scaling {
          background: #FEF3C7;
          margin: 0.5rem -1rem 0;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-weight: 700;
        }
        
        .spec-label {
          font-weight: 600;
        }
        
        .spec-value {
          font-weight: 800;
          color: #1F2937;
        }
        
        .pricing-section {
          text-align: center;
          margin-bottom: 1rem;
        }
        
        .original-price {
          color: #94A3B8;
          text-decoration: line-through;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        
        .current-price {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.25rem;
          margin-bottom: 0.5rem;
        }
        
        .currency {
          font-size: 1.2rem;
          color: #10B981;
          font-weight: 600;
        }
        
        .amount {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .period {
          font-size: 1rem;
          color: #94A3B8;
        }
        
        .savings {
          color: #10B981;
          font-weight: 600;
          font-size: 0.8rem;
        }
        
        .box-side {
          position: absolute;
          top: 30px;
          right: -1px;
          width: 80px;
          bottom: 0;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.1));
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-left: none;
          border-radius: 0 12px 12px 0;
          padding: 1rem 0.5rem;
          transform: rotateY(90deg);
          transform-origin: left;
          overflow: hidden;
        }
        
        .ingredients-title {
          font-size: 0.6rem;
          font-weight: 800;
          color: #ffffff;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        
        .ingredients-list {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        
        .ingredient-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.5rem;
          color: #E2E8F0;
        }
        
        .ingredient-check {
          color: #10B981;
          font-weight: bold;
        }
        
        .ingredient-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        
        .plan-button {
          position: absolute;
          bottom: 80px;
          left: 1rem;
          right: 1rem;
          padding: 1rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          z-index: 5;
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
          background: linear-gradient(135deg, #8B5CF6, #7C3AED);
          color: white;
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
        }
        
        .btn-gradient:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(139, 92, 246, 0.6);
        }
        
        .plan-guarantee {
          position: absolute;
          bottom: 20px;
          left: 1rem;
          right: 1rem;
          text-align: center;
          color: #94A3B8;
          font-size: 0.8rem;
          z-index: 5;
        }
        
        .box-pattern {
          position: absolute;
          top: 30px;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
          pointer-events: none;
        }
        
        .box-pattern.dots {
          background-image: radial-gradient(circle, #3B82F6 2px, transparent 2px);
          background-size: 20px 20px;
        }
        
        .box-pattern.stripes {
          background-image: repeating-linear-gradient(
            45deg,
            #10B981,
            #10B981 5px,
            transparent 5px,
            transparent 15px
          );
        }
        
        .box-pattern.waves {
          background-image: repeating-linear-gradient(
            0deg,
            #8B5CF6,
            #8B5CF6 3px,
            transparent 3px,
            transparent 12px
          );
        }
        
        .plans-footer {
          padding-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @media (max-width: 768px) {
          .plans {
            padding: 4rem 1rem;
          }
          
          .cereal-boxes-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .cereal-box {
            height: 550px;
          }
          
          .cereal-box.popular {
            transform: none;
          }
          
          .cereal-box:hover {
            transform: none;
          }
          
          .box-front {
            padding: 1.5rem;
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