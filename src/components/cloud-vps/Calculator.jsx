import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [config, setConfig] = useState({
    cpu: 2,
    ram: 4,
    storage: 50,
    bandwidth: 2,
    hours: 730 // mes completo
  });

  const [estimatedCost, setEstimatedCost] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  // Precios por unidad (MXN por hora)
  const pricing = {
    cpu: 0.45, // por vCPU por hora
    ram: 0.25, // por GB RAM por hora
    storage: 0.08, // por GB SSD por hora
    bandwidth: 0.15 // por TB por hora
  };

  const calculateCost = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const cpuCost = config.cpu * pricing.cpu * config.hours;
      const ramCost = config.ram * pricing.ram * config.hours;
      const storageCost = config.storage * pricing.storage * config.hours;
      const bandwidthCost = config.bandwidth * pricing.bandwidth * config.hours;
      
      const totalCost = cpuCost + ramCost + storageCost + bandwidthCost;
      setEstimatedCost(Math.round(totalCost));
      setIsCalculating(false);
    }, 1500);
  };

  useEffect(() => {
    calculateCost();
  }, [config]);

  const handleSliderChange = (resource, value) => {
    setConfig(prev => ({
      ...prev,
      [resource]: parseInt(value)
    }));
  };

  const presetConfigs = [
    {
      name: 'Desarrollo',
      icon: '💻',
      config: { cpu: 1, ram: 2, storage: 25, bandwidth: 1, hours: 730 },
      description: 'Para proyectos de desarrollo y testing'
    },
    {
      name: 'Producción',
      icon: '🚀',
      config: { cpu: 4, ram: 8, storage: 100, bandwidth: 5, hours: 730 },
      description: 'Para aplicaciones en producción'
    },
    {
      name: 'Alto Tráfico',
      icon: '📈',
      config: { cpu: 8, ram: 16, storage: 200, bandwidth: 10, hours: 730 },
      description: 'Para sitios con mucho tráfico'
    }
  ];

  const usageScenarios = [
    {
      scenario: 'Blog Personal',
      recommended: { cpu: 1, ram: 2, storage: 25, bandwidth: 1 },
      visitors: '1K-5K/mes',
      cost: '~$180 MXN/mes'
    },
    {
      scenario: 'E-commerce Pequeño',
      recommended: { cpu: 2, ram: 4, storage: 50, bandwidth: 2 },
      visitors: '5K-20K/mes',
      cost: '~$400 MXN/mes'
    },
    {
      scenario: 'Aplicación Web',
      recommended: { cpu: 4, ram: 8, storage: 100, bandwidth: 5 },
      visitors: '20K-100K/mes',
      cost: '~$800 MXN/mes'
    },
    {
      scenario: 'Plataforma Enterprise',
      recommended: { cpu: 8, ram: 16, storage: 200, bandwidth: 10 },
      visitors: '100K+/mes',
      cost: '~$1600 MXN/mes'
    }
  ];

  return (
    <section id="calculator" className="calculator">
      <div className="calculator-container">
        <div className="calculator-header">
          <h2 className="calculator-title">
            Calculadora de <span className="gradient-text">Costos Cloud</span>
          </h2>
          <p className="calculator-subtitle">
            Configura tu servidor ideal y conoce el costo exacto. Paga solo por lo que uses.
          </p>
        </div>
        
        <div className="calculator-content">
          <div className="calculator-panel">
            <div className="panel-header">
              <h3>Configura tu Cloud VPS</h3>
              <p>Ajusta los recursos según tus necesidades</p>
            </div>
            
            <div className="presets-section">
              <h4>Configuraciones Recomendadas</h4>
              <div className="presets-grid">
                {presetConfigs.map((preset, index) => (
                  <button
                    key={index}
                    className="preset-button"
                    onClick={() => setConfig(preset.config)}
                  >
                    <span className="preset-icon">{preset.icon}</span>
                    <div className="preset-info">
                      <span className="preset-name">{preset.name}</span>
                      <span className="preset-description">{preset.description}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="sliders-section">
              <div className="slider-group">
                <label className="slider-label">
                  <span className="label-text">vCPU Cores</span>
                  <span className="label-value">{config.cpu} cores</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="16"
                  value={config.cpu}
                  onChange={(e) => handleSliderChange('cpu', e.target.value)}
                  className="slider cpu-slider"
                />
                <div className="slider-marks">
                  <span>1</span>
                  <span>4</span>
                  <span>8</span>
                  <span>16</span>
                </div>
              </div>
              
              <div className="slider-group">
                <label className="slider-label">
                  <span className="label-text">RAM Memory</span>
                  <span className="label-value">{config.ram} GB</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="32"
                  value={config.ram}
                  onChange={(e) => handleSliderChange('ram', e.target.value)}
                  className="slider ram-slider"
                />
                <div className="slider-marks">
                  <span>1GB</span>
                  <span>8GB</span>
                  <span>16GB</span>
                  <span>32GB</span>
                </div>
              </div>
              
              <div className="slider-group">
                <label className="slider-label">
                  <span className="label-text">SSD Storage</span>
                  <span className="label-value">{config.storage} GB</span>
                </label>
                <input
                  type="range"
                  min="25"
                  max="500"
                  step="25"
                  value={config.storage}
                  onChange={(e) => handleSliderChange('storage', e.target.value)}
                  className="slider storage-slider"
                />
                <div className="slider-marks">
                  <span>25GB</span>
                  <span>100GB</span>
                  <span>250GB</span>
                  <span>500GB</span>
                </div>
              </div>
              
              <div className="slider-group">
                <label className="slider-label">
                  <span className="label-text">Bandwidth</span>
                  <span className="label-value">{config.bandwidth} TB</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={config.bandwidth}
                  onChange={(e) => handleSliderChange('bandwidth', e.target.value)}
                  className="slider bandwidth-slider"
                />
                <div className="slider-marks">
                  <span>1TB</span>
                  <span>5TB</span>
                  <span>10TB</span>
                  <span>20TB</span>
                </div>
              </div>
              
              <div className="slider-group">
                <label className="slider-label">
                  <span className="label-text">Horas de Uso</span>
                  <span className="label-value">{config.hours}h/mes</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="730"
                  step="50"
                  value={config.hours}
                  onChange={(e) => handleSliderChange('hours', e.target.value)}
                  className="slider hours-slider"
                />
                <div className="slider-marks">
                  <span>100h</span>
                  <span>300h</span>
                  <span>500h</span>
                  <span>730h</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cost-panel">
            <div className="cost-display">
              <div className="cost-header">
                <h3>Costo Estimado</h3>
                <div className={`calculation-status ${isCalculating ? 'calculating' : ''}`}>
                  {isCalculating ? '🔄 Calculando...' : '✅ Actualizado'}
                </div>
              </div>
              
              <div className="cost-breakdown">
                <div className="cost-item">
                  <span className="cost-label">vCPU ({config.cpu} cores)</span>
                  <span className="cost-value">${Math.round(config.cpu * pricing.cpu * config.hours)} MXN</span>
                </div>
                <div className="cost-item">
                  <span className="cost-label">RAM ({config.ram} GB)</span>
                  <span className="cost-value">${Math.round(config.ram * pricing.ram * config.hours)} MXN</span>
                </div>
                <div className="cost-item">
                  <span className="cost-label">Storage ({config.storage} GB)</span>
                  <span className="cost-value">${Math.round(config.storage * pricing.storage * config.hours)} MXN</span>
                </div>
                <div className="cost-item">
                  <span className="cost-label">Bandwidth ({config.bandwidth} TB)</span>
                  <span className="cost-value">${Math.round(config.bandwidth * pricing.bandwidth * config.hours)} MXN</span>
                </div>
                <div className="cost-total">
                  <span className="total-label">Total Mensual</span>
                  <span className="total-value">${estimatedCost} MXN</span>
                </div>
              </div>
              
              <div className="cost-comparison">
                <h4>Comparación con VPS Tradicional</h4>
                <div className="comparison-item">
                  <span className="comparison-label">VPS Tradicional Equivalente:</span>
                  <span className="comparison-value">${estimatedCost * 1.4} MXN/mes</span>
                </div>
                <div className="savings-highlight">
                  Ahorras ${Math.round(estimatedCost * 0.4)} MXN/mes con Cloud VPS
                </div>
              </div>
              
              <button className="calculate-button">
                💰 Contratar Esta Configuración
              </button>
            </div>
            
            <div className="usage-scenarios">
              <h4>Escenarios de Uso Recomendados</h4>
              <div className="scenarios-grid">
                {usageScenarios.map((scenario, index) => (
                  <div 
                    key={index} 
                    className="scenario-card"
                    onClick={() => setConfig({
                      ...scenario.recommended,
                      hours: 730
                    })}
                  >
                    <h5 className="scenario-name">{scenario.scenario}</h5>
                    <div className="scenario-specs">
                      <span>{scenario.recommended.cpu} vCPU</span>
                      <span>{scenario.recommended.ram} GB RAM</span>
                      <span>{scenario.recommended.storage} GB SSD</span>
                    </div>
                    <div className="scenario-visitors">{scenario.visitors}</div>
                    <div className="scenario-cost">{scenario.cost}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="calculator-benefits">
          <h3>Ventajas del Modelo Cloud</h3>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📊</div>
              <h4>Pago por Uso Real</h4>
              <p>Solo pagas por los recursos que realmente consumes, no por capacidad reservada</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h4>Escalabilidad Instantánea</h4>
              <p>Aumenta o disminuye recursos en tiempo real según la demanda</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h4>Ahorro Garantizado</h4>
              <p>Hasta 40% más económico que VPS tradicionales con recursos fijos</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h4>Monitoreo Inteligente</h4>
              <p>Sistema que optimiza automáticamente el uso de recursos</p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .calculator {
          padding: 8rem 2rem;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%);
        }
        
        .calculator-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .calculator-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .calculator-title {
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
        
        .calculator-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .calculator-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        
        .calculator-panel {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
        }
        
        .panel-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .panel-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        
        .panel-header p {
          color: #94A3B8;
          font-size: 0.9rem;
        }
        
        .presets-section {
          margin-bottom: 2rem;
        }
        
        .presets-section h4 {
          color: #E2E8F0;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .presets-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }
        
        .preset-button {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }
        
        .preset-button:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .preset-icon {
          font-size: 1.5rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        
        .preset-name {
          display: block;
          color: #ffffff;
          font-weight: 600;
          font-size: 0.8rem;
          margin-bottom: 0.25rem;
        }
        
        .preset-description {
          color: #94A3B8;
          font-size: 0.7rem;
        }
        
        .sliders-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .slider-group {
          position: relative;
        }
        
        .slider-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .label-text {
          color: #E2E8F0;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .label-value {
          color: #3B82F6;
          font-weight: 700;
          font-size: 1rem;
        }
        
        .slider {
          width: 100%;
          height: 8px;
          border-radius: 4px;
          outline: none;
          cursor: pointer;
          margin-bottom: 0.5rem;
        }
        
        .cpu-slider {
          background: linear-gradient(90deg, #3B82F6, #1D4ED8);
        }
        
        .ram-slider {
          background: linear-gradient(90deg, #10B981, #059669);
        }
        
        .storage-slider {
          background: linear-gradient(90deg, #8B5CF6, #7C3AED);
        }
        
        .bandwidth-slider {
          background: linear-gradient(90deg, #F59E0B, #D97706);
        }
        
        .hours-slider {
          background: linear-gradient(90deg, #EF4444, #DC2626);
        }
        
        .slider-marks {
          display: flex;
          justify-content: space-between;
          color: #94A3B8;
          font-size: 0.7rem;
        }
        
        .cost-panel {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .cost-display {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
        }
        
        .cost-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        
        .cost-header h3 {
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .calculation-status {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          background: #10B981;
          color: white;
          transition: all 0.3s ease;
        }
        
        .calculation-status.calculating {
          background: #F59E0B;
          animation: pulse 1s infinite;
        }
        
        .cost-breakdown {
          margin-bottom: 2rem;
        }
        
        .cost-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .cost-item:last-child {
          border-bottom: none;
        }
        
        .cost-label {
          color: #CBD5E1;
          font-size: 0.9rem;
        }
        
        .cost-value {
          color: #ffffff;
          font-weight: 600;
        }
        
        .cost-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-top: 2px solid rgba(59, 130, 246, 0.3);
          margin-top: 1rem;
        }
        
        .total-label {
          color: #E2E8F0;
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .total-value {
          color: #3B82F6;
          font-size: 2rem;
          font-weight: 800;
        }
        
        .cost-comparison {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 12px;
          padding: 1rem;
          margin-bottom: 2rem;
        }
        
        .cost-comparison h4 {
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .comparison-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        
        .comparison-label {
          color: #CBD5E1;
          font-size: 0.9rem;
        }
        
        .comparison-value {
          color: #94A3B8;
          font-weight: 600;
          text-decoration: line-through;
        }
        
        .savings-highlight {
          color: #10B981;
          font-weight: 700;
          text-align: center;
          font-size: 1rem;
        }
        
        .calculate-button {
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
        }
        
        .calculate-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.6);
        }
        
        .usage-scenarios {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
        }
        
        .usage-scenarios h4 {
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .scenarios-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .scenario-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .scenario-card:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .scenario-name {
          color: #ffffff;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        
        .scenario-specs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .scenario-specs span {
          background: rgba(59, 130, 246, 0.2);
          color: #3B82F6;
          padding: 0.2rem 0.5rem;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: 500;
        }
        
        .scenario-visitors {
          color: #94A3B8;
          font-size: 0.8rem;
          margin-bottom: 0.25rem;
        }
        
        .scenario-cost {
          color: #10B981;
          font-weight: 700;
          font-size: 0.9rem;
        }
        
        .calculator-benefits {
          margin-top: 4rem;
        }
        
        .calculator-benefits h3 {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .benefit-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .benefit-card:hover {
          transform: translateY(-5px);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 15px 35px rgba(59, 130, 246, 0.2);
        }
        
        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .benefit-card h4 {
          color: #ffffff;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .benefit-card p {
          color: #CBD5E1;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .calculator {
            padding: 4rem 1rem;
          }
          
          .calculator-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .presets-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
          
          .preset-button {
            display: flex;
            align-items: center;
            gap: 1rem;
            text-align: left;
          }
          
          .preset-icon {
            font-size: 1.2rem;
            margin-bottom: 0;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Calculator;