import React from 'react';
import '../scss/components/_services.scss';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-cut',
      title: 'Classic Cut',
      description: 'Traditional barbering at its finest with modern techniques',
      price: '$45'
    },
    {
      icon: 'fas fa-user-tie',
      title: 'Executive Package',
      description: 'Complete grooming experience for the modern gentleman',
      price: '$85'
    },
    {
      icon: 'fas fa-spa',
      title: 'Beard Sculpting',
      description: 'Precision beard design and maintenance',
      price: '$35'
    },
    {
      icon: 'fas fa-gem',
      title: 'Luxury Treatment',
      description: 'Premium hair and scalp therapy with exclusive products',
      price: '$120'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Crafted with precision, delivered with excellence</p>
        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <i className={`${service.icon} service-card__icon`}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-card__price">{service.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;