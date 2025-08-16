import React from 'react';
import '../scss/components/_footer.scss';

const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-instagram', label: 'Instagram' },
    { icon: 'fab fa-facebook-f', label: 'Facebook' },
    { icon: 'fab fa-twitter', label: 'Twitter' },
    { icon: 'fab fa-youtube', label: 'YouTube' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <img src={require('../assets/Logo/ClinifyAILogo.png')} alt="Clinify AI" className="footer__logo" />
            <p>Premium Barbershop Experience</p>
          </div>
          <div className="footer__social">
            {socialLinks.map((link, index) => (
              <a key={index} href="#" aria-label={link.label}>
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2024 Clinify AI. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;