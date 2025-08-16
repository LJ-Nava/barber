import React from 'react';
import '../scss/components/_hero.scss';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <div className="hero__badge">
          <i className="fas fa-crown"></i>
          <span>Premium Experience</span>
        </div>
        <h2 className="hero__title">
          <span>The Art of</span>
          <span>Gentleman's Grooming</span>
        </h2>
        <p className="hero__subtitle">Where tradition meets modern sophistication</p>
        <div className="hero__cta-group">
          <button className="btn btn--primary">
            <i className="fas fa-calendar-alt"></i> Book Appointment
          </button>
          <button className="btn btn--secondary">
            <i className="fas fa-play-circle"></i> View Our Work
          </button>
        </div>
        <div className="hero__features">
          <div className="hero__feature">
            <i className="fas fa-award"></i>
            <span>Award Winning</span>
          </div>
          <div className="hero__feature">
            <i className="fas fa-clock"></i>
            <span>Open 7 Days</span>
          </div>
          <div className="hero__feature">
            <i className="fas fa-star"></i>
            <span>5 Star Service</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;