import React from 'react';
import '../scss/components/_about.scss';

const AboutUs = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        {/* Sección de imágenes a la izquierda */}
        <div className="about__images">
          <div className="about__image-main">
            <img src={require('../assets/BarberBK2Fondo/BarbaBK1.png')} alt="Master Barber" />
          </div>
          <div className="about__image-accent">
            <img src={require('../assets/BarberBK2Fondo/DegradadoPremiumBK2.png')} alt="Premium Cut" />
          </div>
        </div>
        
        {/* Contenido About Us a la derecha */}
        <div className="about__content">
          <div className="about__badge">
            <i className="fas fa-crown"></i>
            <span>About Us</span>
          </div>
          
          <h2 className="about__title">
            <span>Crafting Excellence</span>
            <span>Since 2011</span>
          </h2>
          
          <p className="about__text">
            We're more than just a barbershop. We're craftsmen dedicated to the art of grooming, 
            where traditional techniques meet modern sophistication. Every cut tells a story, 
            every client leaves with confidence.
          </p>
          
          <div className="about__features">
            <div className="about__feature">
              <i className="fas fa-award"></i>
              <div>
                <h4>Award Winning</h4>
                <p>Recognized excellence in men's grooming</p>
              </div>
            </div>
            <div className="about__feature">
              <i className="fas fa-users"></i>
              <div>
                <h4>Master Barbers</h4>
                <p>Skilled artisans with years of experience</p>
              </div>
            </div>
          </div>
          
          <button className="about__cta">
            <span>Discover Our Story</span>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;