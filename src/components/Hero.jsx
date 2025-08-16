import React from 'react';
import '../scss/components/_hero.scss';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Panel izquierdo - Estadísticas */}
      <div className="hero__stats">
        <div className="stat-item">
          <div className="stat-item__number">12+</div>
          <div className="stat-item__label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-item__number">500+</div>
          <div className="stat-item__label">Happy Clients</div>
        </div>
        <div className="stat-item">
          <div className="stat-item__number">4.9</div>
          <div className="stat-item__label">Average Rating</div>
        </div>
        <div className="stat-item">
          <div className="stat-item__number">Award</div>
          <div className="stat-item__label">Winning Team</div>
        </div>
      </div>

      {/* Panel central - Contacto rápido */}
      <div className="hero__center">
        <div className="hero__quick-actions">
          <div className="contact-buttons">
            <button className="quick-btn quick-btn--call">
              <i className="fas fa-phone"></i>
              <span>(555) 123-4567</span>
            </button>
            <button className="quick-btn quick-btn--whatsapp">
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
        <div className="hero__testimonial">
          <div className="testimonial-quote">
            <i className="fas fa-quote-left"></i>
            <p>"David Beckham gets his signature fade here every time he's in town."</p>
            <span className="testimonial-author">- Celebrity Stylist</span>
          </div>
        </div>
      </div>

      {/* Panel derecho - Contenido principal */}
      <div className="hero__content">
        <div className="hero__badge">
          <i className="fas fa-cut"></i>
          <span>Craft Your Style</span>
        </div>
        <h2 className="hero__title">
          <span>Where Sharp Meets</span>
          <span>Sophisticated</span>
        </h2>
        <p className="hero__subtitle">Precision cuts and bold styles for the modern gentleman</p>
        <div className="hero__cta-group">
          <button className="btn btn--primary">
            <i className="fas fa-scissors"></i> Book Your Cut
          </button>
          <button className="btn btn--secondary">
            <i className="fas fa-play"></i> See Our Work
          </button>
        </div>
        <div className="hero__features">
          <div className="hero__feature">
            <i className="fas fa-user-tie"></i>
            <span>Expert Barbers</span>
          </div>
          <div className="hero__feature">
            <i className="fas fa-clock"></i>
            <span>Walk-ins Welcome</span>
          </div>
          <div className="hero__feature">
            <i className="fas fa-thumbs-up"></i>
            <span>Fresh Looks Daily</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;