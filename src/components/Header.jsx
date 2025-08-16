import React, { useState, useEffect } from 'react';
import '../scss/components/_header.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setCollapsed(scrollPosition > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${collapsed ? 'collapsed' : ''}`}>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={require('../assets/Logo/ClinifyAILogo.png')} alt="Clinify AI" className="navbar__logo-img" />
        </div>
        
        <button 
          className={`navbar__mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar__menu-wrapper ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar__menu">
            <li>
              <a href="#home" onClick={closeMobileMenu}>
                <i className="fas fa-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMobileMenu}>
                <i className="fas fa-concierge-bell"></i>
                <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={closeMobileMenu}>
                <i className="fas fa-images"></i>
                <span>Gallery</span>
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMobileMenu}>
                <i className="fas fa-info-circle"></i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMobileMenu}>
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
          <button className="navbar__cta" onClick={closeMobileMenu}>
            <span className="navbar__cta-text">Book Now</span>
            <i className="fas fa-arrow-right navbar__cta-icon"></i>
            <span className="navbar__cta-shine"></span>
          </button>
        </div>

        {/* Botón para expandir header colapsado */}
        {collapsed && (
          <button 
            className="navbar__expand-btn"
            onClick={toggleCollapsed}
            aria-label="Expand menu"
          >
            <i className="fas fa-chevron-down"></i>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;