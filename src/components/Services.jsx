import React, { useState } from 'react';
import '../scss/components/_services.scss';
import FullMenu from './FullMenu';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('gentlemen');
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

  const gentlemenServices = [
    {
      id: 1,
      name: "Classic Cut",
      price: "$45",
      image: require('../assets/Cortes/CorteClasico.png'),
      description: "Traditional side part with precision fade",
      popular: false
    },
    {
      id: 2,
      name: "Premium Fade",
      price: "$65",
      image: require('../assets/Cortes/Corte-fade.png'),
      description: "Luxury fade with hot towel treatment",
      popular: true
    },
    {
      id: 3,
      name: "Modern Pompadour",
      price: "$55",
      image: require('../assets/Cortes/Pompadour.png'),
      description: "Vintage style with contemporary finish",
      popular: false
    },
    {
      id: 4,
      name: "Textured Cut",
      price: "$50",
      image: require('../assets/Cortes/Corte-texturizado.png'),
      description: "Modern textured styling with volume",
      popular: true
    },
    {
      id: 5,
      name: "Undercut Style",
      price: "$48",
      image: require('../assets/Cortes/Undercut.png'),
      description: "Bold undercut with styled top",
      popular: false
    },
    {
      id: 6,
      name: "Taper Fade",
      price: "$42",
      image: require('../assets/Cortes/Cortetaper.png'),
      description: "Clean taper with gradual fade",
      popular: false
    },
    {
      id: 7,
      name: "Military Cut",
      price: "$35",
      image: require('../assets/Cortes/Corte-militar.png'),
      description: "Professional military-style cut",
      popular: false
    },
    {
      id: 8,
      name: "Long Hair Trim",
      price: "$40",
      image: require('../assets/Cortes/Cortedecabellolargo.png'),
      description: "Shape and maintain longer styles",
      popular: false
    },
    {
      id: 9,
      name: "Curly Hair Specialist",
      price: "$52",
      image: require('../assets/Cortes/Crezpo.png'),
      description: "Expert styling for curly textures",
      popular: false
    },
    {
      id: 10,
      name: "Afro Styling",
      price: "$58",
      image: require('../assets/Cortes/Afro.png'),
      description: "Professional afro cut and styling",
      popular: false
    },
    {
      id: 11,
      name: "Mohawk Modern",
      price: "$60",
      image: require('../assets/Cortes/Cortemohicano..png'),
      description: "Contemporary mohawk styling",
      popular: false
    },
    {
      id: 12,
      name: "Hair Repair Treatment",
      price: "$75",
      image: require('../assets/Cortes/Dañado.png'),
      description: "Restorative treatment for damaged hair",
      popular: false
    }
  ];

  const kidsServices = [
    {
      id: 13,
      name: "Kids Classic",
      price: "$25",
      image: require('../assets/Cortes/Short-Curly-Cro.png'),
      description: "Traditional cut for young gentlemen",
      popular: true
    },
    {
      id: 14,
      name: "Little Fade",
      price: "$30",
      image: require('../assets/Cortes/Liso.png'),
      description: "Age-appropriate fade for kids",
      popular: false
    },
    {
      id: 15,
      name: "Curly Kids Cut",
      price: "$28",
      image: require('../assets/Cortes/Ondulado.png'),
      description: "Special care for curly-haired children",
      popular: false
    },
    {
      id: 16,
      name: "First Haircut",
      price: "$35",
      image: require('../assets/Cortes/Premium.png'),
      description: "Memorable first haircut experience",
      popular: true
    }
  ];

  const additionalServices = [
    { name: "Beard Trim & Shape", price: "$25", icon: "fas fa-user-tie" },
    { name: "Hot Towel Shave", price: "$35", icon: "fas fa-cut" },
    { name: "Eyebrow Grooming", price: "$15", icon: "fas fa-eye" },
    { name: "Hair Wash & Style", price: "$20", icon: "fas fa-shower" },
    { name: "Mustache Styling", price: "$18", icon: "fas fa-male" },
    { name: "Hair Coloring", price: "$85", icon: "fas fa-palette" },
    { name: "Scalp Treatment", price: "$45", icon: "fas fa-spa" },
    { name: "Wedding Package", price: "$120", icon: "fas fa-ring" }
  ];

  const currentServices = activeCategory === 'gentlemen' ? gentlemenServices : kidsServices;

  return (
    <section className="services" id="services">
      <div className="services__container">
        {/* Header Section */}
        <div className="services__header">
          <div className="services__badge">
            <i className="fas fa-scissors"></i>
            <span>Our Services</span>
          </div>
          
          <h2 className="services__title">
            <span>Precision Cuts</span>
            <span>Expert Results</span>
          </h2>
          
          <p className="services__subtitle">
            Where traditional barbering meets modern sophistication. 
            Every service is crafted with precision and delivered with excellence.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="services__tabs">
          <button 
            className={`services__tab ${activeCategory === 'gentlemen' ? 'active' : ''}`}
            onClick={() => setActiveCategory('gentlemen')}
          >
            <i className="fas fa-user-tie"></i>
            <span>Gentlemen</span>
          </button>
          <button 
            className={`services__tab ${activeCategory === 'kids' ? 'active' : ''}`}
            onClick={() => setActiveCategory('kids')}
          >
            <i className="fas fa-child"></i>
            <span>Kids</span>
          </button>
        </div>

        {/* Services Grid */}
        <div className="services__grid">
          {currentServices.map((service) => (
            <div key={service.id} className={`service-card ${service.popular ? 'popular' : ''}`}>
              {service.popular && (
                <div className="service-card__badge">
                  <i className="fas fa-star"></i>
                  <span>Popular</span>
                </div>
              )}
              
              <div className="service-card__image">
                <img src={service.image} alt={service.name} />
                <div className="service-card__overlay">
                  <button className="service-card__book">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
              
              <div className="service-card__content">
                <h3 className="service-card__name">{service.name}</h3>
                <p className="service-card__description">{service.description}</p>
                <div className="service-card__price">{service.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="services__additional">
          <h3 className="services__additional-title">Additional Services</h3>
          <div className="services__additional-grid">
            {additionalServices.map((service, index) => (
              <div key={index} className="additional-service">
                <i className={service.icon}></i>
                <div className="additional-service__content">
                  <span className="additional-service__name">{service.name}</span>
                  <span className="additional-service__price">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="services__cta">
          <button 
            className="services__cta-button"
            onClick={() => setIsFullMenuOpen(true)}
          >
            <span>View Full Menu</span>
            <i className="fas fa-arrow-right"></i>
          </button>
          <p className="services__cta-text">
            All services include consultation and finishing touches
          </p>
        </div>
      </div>

      {/* Full Menu Modal */}
      <FullMenu 
        isOpen={isFullMenuOpen} 
        onClose={() => setIsFullMenuOpen(false)} 
      />
    </section>
  );
};

export default Services;