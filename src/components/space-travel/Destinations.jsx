import React from 'react';

const Destinations = () => {
  const destinations = [
    {
      name: 'Estación Espacial Internacional',
      image: 'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg',
      description: 'Experimenta la vida en microgravedad a 400km sobre la Tierra.',
      highlights: ['Vista panorámica de la Tierra', 'Experimentos en gravedad cero', 'Encuentro con astronautas']
    },
    {
      name: 'Base Lunar Artemis',
      image: 'https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg',
      description: 'Descubre los misterios de nuestro satélite natural.',
      highlights: ['Exploración lunar', 'Observatorio astronómico', 'Minería espacial']
    },
    {
      name: 'Colonia Mars One',
      image: 'https://images.pexels.com/photos/33684/milky-way-stars-night-sky.jpg',
      description: 'Sé pionero en la exploración del planeta rojo.',
      highlights: ['Terraformación', 'Investigación científica', 'Vida en Marte']
    }
  ];

  return (
    <section id="destinations" className="destinations">
      <div className="destinations-container">
        <div className="destinations-header">
          <h2 className="destinations-title">
            Destinos <span className="gradient-text">Cósmicos</span>
          </h2>
          <p className="destinations-subtitle">
            Cada destino es una nueva frontera esperando ser explorada
          </p>
        </div>
        
        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <div key={index} className="destination-card">
              <div className="destination-image">
                <img src={destination.image} alt={destination.name} />
                <div className="image-overlay"></div>
              </div>
              <div className="destination-content">
                <h3 className="destination-name">{destination.name}</h3>
                <p className="destination-description">{destination.description}</p>
                <div className="destination-highlights">
                  {destination.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
                <button className="destination-btn">Explorar Destino</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .destinations {
          padding: 8rem 2rem;
          background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
        }
        
        .destinations-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .destinations-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .destinations-title {
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
        
        .destinations-subtitle {
          font-size: 1.2rem;
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .destination-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .destination-card:hover {
          transform: translateY(-10px);
          border-color: rgba(6, 182, 212, 0.3);
          box-shadow: 0 25px 50px rgba(6, 182, 212, 0.2);
        }
        
        .destination-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }
        
        .destination-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .destination-card:hover .destination-image img {
          transform: scale(1.05);
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(11, 20, 38, 0.8) 100%);
        }
        
        .destination-content {
          padding: 2rem;
        }
        
        .destination-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .destination-description {
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .destination-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        
        .highlight-tag {
          background: rgba(6, 182, 212, 0.2);
          color: #06b6d4;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(6, 182, 212, 0.3);
        }
        
        .destination-btn {
          width: 100%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .destination-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
        }
        
        @media (max-width: 768px) {
          .destinations {
            padding: 4rem 1rem;
          }
          
          .destinations-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .destination-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Destinations;